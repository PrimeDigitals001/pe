// app/projects/data/projectsData.js

export const projectsData = [
  {
    id: 1,
    slug: 'safety-lifeline-system-abc-industries',
    title: 'Safety Lifeline System',
    description: 'Complete range of horizontal lifelines, overhead lifelines & anchor points ensuring safe work at height.',
    client: 'ABC Industries',
    category: 'industrial',
    status: 'ongoing',
    image: '/images/projects/project-1.jpg',
    featured: true,
    completionDate: null,
    location: 'Mumbai, India',
  },
  {
    id: 2,
    slug: 'warehouse-access-platform-xyz-logistics',
    title: 'Warehouse Access Platform',
    description: 'Custom-designed elevated walkways and access platforms for efficient warehouse operations and material handling.',
    client: 'XYZ Logistics',
    category: 'commercial',
    status: 'completed',
    image: '/images/projects/project-2.jpg',
    featured: true,
    completionDate: '2024-01',
    location: 'Delhi, India',
  },
  {
    id: 3,
    slug: 'rooftop-guardrail-system-tech-park',
    title: 'Rooftop Guardrail System',
    description: 'Industrial-grade guardrail and fall protection system for multi-story tech park building with complete safety compliance.',
    client: 'Tech Park Pvt Ltd',
    category: 'commercial',
    status: 'completed',
    image: '/images/projects/project-3.jpg',
    featured: false,
    completionDate: '2023-11',
    location: 'Bangalore, India',
  },
  {
    id: 4,
    slug: 'factory-overhead-crane-system',
    title: 'Factory Overhead Crane',
    description: 'Heavy-duty overhead crane installation with complete safety measures, access ladders and maintenance platforms.',
    client: 'Manufacturing Inc',
    category: 'industrial',
    status: 'ongoing',
    image: '/images/projects/project-4.jpg',
    featured: true,
    completionDate: null,
    location: 'Pune, India',
  },
];

// Helper function to get projects by category
export const getProjectsByCategory = (category) => {
  if (category === 'all') return projectsData;
  return projectsData.filter(project => project.category === category);
};

// Helper function to get project by slug (for individual pages)
export const getProjectBySlug = (slug) => {
  return projectsData.find(project => project.slug === slug);
};

// Get featured projects
export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.featured);
};