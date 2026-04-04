const ADMIN_PASSWORD = 'patel2024';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_OWNER = process.env.GITHUB_OWNER;
const GITHUB_REPO = process.env.GITHUB_REPO;
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'master';

const FILE_PATH = 'app/products/data/publishedOverrides.json';

function deepMergeOverrides(existing, incoming) {
    const merged = { ...existing };

    for (const key of Object.keys(incoming)) {
        if (!merged[key]) {
            merged[key] = incoming[key];
            continue;
        }

        const existingCo = merged[key];
        const incomingCo = incoming[key];
        const mergedCo = { ...existingCo };

        // Merge companyInfo (shallow)
        if (incomingCo.companyInfo) {
            mergedCo.companyInfo = { ...(existingCo.companyInfo || {}), ...incomingCo.companyInfo };
        }

        // Merge flat products array
        if (incomingCo.products) {
            mergedCo.products = mergeArrayById(existingCo.products || [], incomingCo.products);
        }

        // Merge nested keys (types, categories)
        for (const nestedKey of ['types', 'categories']) {
            if (incomingCo[nestedKey]) {
                mergedCo[nestedKey] = mergeNestedArray(
                    existingCo[nestedKey] || [],
                    incomingCo[nestedKey]
                );
            }
        }

        // Merge any other simple fields
        for (const field of Object.keys(incomingCo)) {
            if (!['companyInfo', 'products', 'types', 'categories'].includes(field)) {
                mergedCo[field] = incomingCo[field];
            }
        }

        merged[key] = mergedCo;
    }

    return merged;
}

function mergeArrayById(existing, incoming) {
    const merged = [...existing];
    for (const item of incoming) {
        const idx = merged.findIndex((m) => String(m.id) === String(item.id));
        if (idx !== -1) {
            merged[idx] = { ...merged[idx], ...item };
        } else {
            merged.push(item);
        }
    }
    return merged;
}

function mergeNestedArray(existing, incoming) {
    const merged = [...existing];
    for (const item of incoming) {
        const idx = merged.findIndex((m) => m.id === item.id || m.slug === item.slug);
        if (idx !== -1) {
            merged[idx] = {
                ...merged[idx],
                ...item,
                products: item.products
                    ? mergeArrayById(merged[idx].products || [], item.products)
                    : merged[idx].products,
            };
        } else {
            merged.push(item);
        }
    }
    return merged;
}

async function getFileFromGitHub() {
    const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${FILE_PATH}?ref=${GITHUB_BRANCH}`;
    const res = await fetch(url, {
        headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            Accept: 'application/vnd.github.v3+json',
        },
    });

    if (res.status === 404) {
        return { content: {}, sha: null };
    }

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`GitHub GET failed (${res.status}): ${text}`);
    }

    const data = await res.json();
    const decoded = Buffer.from(data.content, 'base64').toString('utf-8');
    return { content: JSON.parse(decoded), sha: data.sha };
}

async function putFileToGitHub(content, sha) {
    const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${FILE_PATH}`;
    const encoded = Buffer.from(JSON.stringify(content, null, 2)).toString('base64');

    const body = {
        message: `Publish: update product data ${new Date().toISOString()}`,
        content: encoded,
        branch: GITHUB_BRANCH,
    };

    if (sha) {
        body.sha = sha;
    }

    const res = await fetch(url, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            Accept: 'application/vnd.github.v3+json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`GitHub PUT failed (${res.status}): ${text}`);
    }

    return res.json();
}

export async function POST(request) {
    try {
        // Validate env vars
        if (!GITHUB_TOKEN || !GITHUB_OWNER || !GITHUB_REPO) {
            return Response.json(
                { success: false, error: 'GitHub configuration missing. Check environment variables.' },
                { status: 500 }
            );
        }

        const { overrides, adminPassword } = await request.json();

        // Auth check
        if (adminPassword !== ADMIN_PASSWORD) {
            return Response.json({ success: false, error: 'Unauthorized' }, { status: 401 });
        }

        if (!overrides || Object.keys(overrides).length === 0) {
            return Response.json({ success: false, error: 'No changes to publish.' }, { status: 400 });
        }

        // Retry up to 3 times for SHA conflicts
        let attempts = 0;
        const maxAttempts = 3;

        while (attempts < maxAttempts) {
            attempts++;
            try {
                const { content: existing, sha } = await getFileFromGitHub();
                const merged = deepMergeOverrides(existing, overrides);
                const result = await putFileToGitHub(merged, sha);

                return Response.json({
                    success: true,
                    commitSha: result.commit?.sha,
                    message: 'Changes published successfully! Site will update in ~1-2 minutes.',
                });
            } catch (err) {
                if (err.message.includes('409') && attempts < maxAttempts) {
                    continue; // SHA conflict, retry
                }
                throw err;
            }
        }
    } catch (err) {
        console.error('Publish error:', err);
        return Response.json(
            { success: false, error: err.message || 'Failed to publish changes.' },
            { status: 500 }
        );
    }
}
