'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './ServicesList.module.css';

const services = [
    {
        id: 1,
        number: '01',
        title: 'Industrial Roofing Solutions',
        tagline: 'Built to withstand. Designed to last.',
        image: '/images/services/roofing.png',
        shortDesc: 'Installation, replacement, and refurbishment of industrial roofing systems — PPGI, PPGL, GI sheets, polycarbonate, insulated panels, and metal cladding designed for maximum structural strength and weather resistance.',
        fullDesc: 'We specialize in the installation, replacement, and refurbishment of industrial roofing systems, delivering durable and efficient solutions tailored to project requirements. Our expertise covers a wide range of roofing and cladding materials, including PPGI, PPGL, and GI sheets, along with polycarbonate sheets, insulated panels, and metal cladding systems. These solutions are designed to enhance structural strength, weather resistance, and thermal performance for industrial and commercial facilities.\n\nIn addition to roofing systems, we provide complete accessory and finishing installations such as flashing, ridges, gutters, down-take pipes, turbo ventilators, and skylights, ensuring proper drainage, ventilation, and natural lighting. We also offer reliable leak-proofing solutions, damaged sheet replacement, and emergency repair support to minimize downtime and protect assets, even in critical situations.',
        highlights: [
            'Trained manpower',
            'Mandatory PPE',
            'Work permits',
            'Proper housekeeping',
            'Hazard control',
            'Site safety compliance',
        ],
    },
    {
        id: 2,
        number: '02',
        title: 'Civil Construction',
        tagline: 'Foundations you can build a future on.',
        image: '/images/services/civil.png',
        shortDesc: 'Complete civil construction services covering excavation, PCC, RCC, masonry, plastering, and flooring — executed to approved drawings with strict control over every stage.',
        fullDesc: 'We provide complete civil construction services covering excavation, PCC, RCC, masonry, plastering, and flooring works, executed with precision and adherence to approved specifications. Our scope includes the construction of foundations, pedestals, trenches, equipment bases, and reinforced cement concrete (RCC) structures, ensuring structural stability and long-term performance.\n\nAll activities are carried out as per approved drawings, with strict control over shuttering, leveling, curing, and finishing to maintain dimensional accuracy and quality standards. To ensure smooth and safe execution, we implement proper barricading, clear safety signage, and systematic housekeeping at the work site.',
        highlights: [
            'Trained and experienced manpower',
            'Mandatory use of PPE',
            'Approved work permits',
            'Regular quality checks',
            'Inspection and test records',
            'Proper housekeeping practices',
            'Hazard identification and control',
            'Compliance with safety and quality standards',
        ],
    },
    {
        id: 3,
        number: '03',
        title: 'Structural Steel / PEB',
        tagline: 'Precision engineered. Perfectly erected.',
        image: '/images/services/structural.png',
        shortDesc: 'Fabrication and erection of steel structures — platforms, pipe racks, PEB sheds, trusses, staircases, and handrails — following certified WPS welding procedures.',
        fullDesc: 'We undertake complete fabrication and erection of steel structures, including industrial platforms, pipe racks, and structural supports, ensuring strength, accuracy, and long-term reliability. Our services also cover PEB sheds, trusses, staircases, ladders, handrails, and structural modifications, executed to meet project-specific and industry standards.\n\nDuring erection, we strictly follow approved welding procedures (WPS) and conduct continuous alignment, leveling, and torque checks to ensure structural stability and safety. Certified lifting and rigging tools are used for all material handling and erection activities, allowing safe, controlled, and efficient lifting operations even in complex site conditions.',
        highlights: [
            'Trained and certified manpower',
            'Mandatory PPE usage',
            'Approved work permits',
            'Welding as per WPS standards',
            'Regular quality checks and inspections',
            'Inspection and test records maintained',
            'Certified lifting & rigging tools',
            'Hazard identification and control measures',
        ],
    },
    {
        id: 4,
        number: '04',
        title: 'Scaffolding Services',
        tagline: 'Safe access. Every level. Every time.',
        image: '/images/services/scaffolding.png',
        shortDesc: 'Complete scaffolding solutions — erection, dismantling, shifting, and maintenance — with load checks, tagging systems, and regular supervisor inspections for safe work at height.',
        fullDesc: 'We provide complete scaffolding solutions including erection, dismantling, shifting, and maintenance of scaffolding systems to support safe and efficient work at height. All scaffolding structures are designed and installed with proper bracing and anchoring to ensure stability, along with safe access provisions such as guardrails and toeboards for worker protection.\n\nLoad capacity checks are carried out before use, and a clear scaffold tagging system (Green, Yellow, Red) is implemented to indicate usage status and safety conditions. Regular inspections are conducted by experienced scaffold supervisors to ensure ongoing compliance with safety standards and site requirements throughout the project duration.',
        highlights: [
            'Trained scaffolding manpower',
            'Mandatory PPE usage',
            'Approved work permits',
            'Proper bracing & anchoring',
            'Guardrails and toeboards for safe access',
            'Load checks and scaffold tagging system',
            'Regular inspections by supervisors',
            'Hazard identification and control',
        ],
    },
    {
        id: 5,
        number: '05',
        title: 'Painting & Coating Works',
        tagline: 'Protection that performs. Finish that lasts.',
        image: '/images/services/painting.png',
        shortDesc: 'Full-cycle painting and coating — surface prep, epoxy, enamel, PU, zinc primer systems with DFT checks at every stage, plus safety line marking and colour coding.',
        fullDesc: 'We provide complete painting and coating services with a strong focus on surface preparation and long-term protection. Our process includes thorough cleaning, grinding, wire brushing, and priming to ensure proper adhesion and coating performance. We apply a wide range of protective coatings such as epoxy, enamel, PU, zinc primer, and other anti-corrosive systems, selected based on environmental conditions and project specifications.\n\nQuality assurance is ensured through strict DFT (Dry Film Thickness) checks and detailed visual inspections at every stage of application. In addition to protective coatings, we also carry out safety line marking and identification colour coding to improve visibility, safety compliance, and operational efficiency across industrial facilities.',
        highlights: [
            'Trained and experienced manpower',
            'Mandatory use of PPE',
            'Approved work permits',
            'Safe handling of paints and chemicals',
            'DFT checks and visual inspections',
            'Quality inspection records maintained',
            'Proper housekeeping practices',
            'Hazard identification and control measures',
        ],
    },
    {
        id: 6,
        number: '06',
        title: 'Maintenance & Shutdown Support',
        tagline: 'Fast response. Zero compromise.',
        image: '/images/services/maintenance.png',
        shortDesc: 'Comprehensive preventive, breakdown, and shutdown maintenance — roof leak fixing, civil repairs, scaffolding support, touch-up painting — with a fast-response team ready for emergencies.',
        fullDesc: 'We provide comprehensive preventive, breakdown, and shutdown maintenance support to ensure uninterrupted industrial operations. Our services include roof leak fixing, civil repair works, scaffolding support, and touch-up painting, helping maintain structural integrity and operational safety. With skilled manpower and the right tooling support, we enable smooth and continuous maintenance activities across industrial facilities.\n\nOur fast-response maintenance team is equipped to handle emergency situations efficiently, minimizing downtime and restoring operations quickly. By combining technical expertise with timely execution, we help clients maintain productivity while extending the life of their assets.',
        highlights: [
            'Trained and experienced manpower',
            'Mandatory PPE usage',
            'Approved work permits',
            'Safe work procedures during maintenance',
            'Regular quality checks and inspections',
            'Inspection and service records maintained',
            'Proper housekeeping practices',
            'Hazard identification and control measures',
        ],
    },
];

/* ─── Individual Service Row ─────────────────────────────────────────── */

const ServiceRow = ({ service, index, isVisible }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const isEven = index % 2 === 0; // even → image left | odd → image right

    return (
        <div
            className={`
        ${styles.serviceRow}
        ${isEven ? styles.imageLeft : styles.imageRight}
        ${styles.animateUp}
        ${isVisible ? styles.visible : ''}
      `}
            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
        >

            {/* ── IMAGE SIDE ──────────────────────────────────── */}
            <div className={styles.imageSide}>
                <div className={styles.imageFrame}>

                    <img
                        src={service.image}
                        alt={service.title}
                        className={styles.serviceImage}
                    />

                    {/* Large faint number watermark */}
                    <span className={styles.numberWatermark}>{service.number}</span>

                    {/* Hover overlay — slides up from bottom */}
                    <div className={styles.hoverOverlay}>
                        <p className={styles.overlayTagline}>{service.tagline}</p>
                        <div className={styles.overlayDivider} />
                        <ul className={styles.overlayHighlights}>
                            {service.highlights.map((item, i) => (
                                <li key={i} className={styles.overlayHighlightItem}>
                                    <span className={styles.overlayBullet} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>

            {/* ── CONTENT SIDE ────────────────────────────────── */}
            <div className={styles.contentSide}>
                <div className={styles.contentInner}>

                    {/* Number + rule */}
                    <div className={styles.topMeta}>
                        <span className={styles.metaNumber}>{service.number}</span>
                        <span className={styles.metaRule} />
                        <span className={styles.metaTotal}>/ 06</span>
                    </div>

                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <p className={styles.serviceTagline}>{service.tagline}</p>

                    <div className={styles.contentDivider} />

                    <p className={styles.shortDesc}>{service.shortDesc}</p>

                    {/* Expandable content */}
                    <div className={`${styles.expandWrap} ${isExpanded ? styles.expandOpen : ''}`}>
                        <div className={styles.expandInner}>
                            {service.fullDesc.split('\n\n').map((para, i) => (
                                <p key={i} className={styles.fullDescPara}>{para}</p>
                            ))}
                        </div>
                    </div>

                    {/* Read More toggle */}
                    <button
                        className={styles.toggleBtn}
                        onClick={() => setIsExpanded(!isExpanded)}
                        aria-expanded={isExpanded}
                        aria-label={isExpanded ? `Collapse ${service.title}` : `Expand ${service.title}`}
                    >
                        <span className={styles.toggleBtnInner}>
                            <span className={styles.toggleText}>
                                {isExpanded ? 'Show Less' : 'Read More'}
                            </span>
                            <span className={`${styles.toggleArrow} ${isExpanded ? styles.arrowUp : ''}`}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3 6L8 11L13 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </span>
                    </button>

                </div>
            </div>

        </div>
    );
};

/* ─── Main Section ───────────────────────────────────────────────────── */

const ServicesList = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.05, rootMargin: '0px 0px -60px 0px' }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className={styles.servicesListSection}>
            <div className={styles.container}>

                {/* Heading */}
                <div
                    className={`${styles.headingBlock} ${styles.animateUp} ${isVisible ? styles.visible : ''}`}
                >
                    <h2 className={styles.sectionTitle}>What We Do</h2>
                    <p className={styles.sectionSubtitle}>
                        Six core service areas. Every one built on safety-first execution,
                        quality materials, and a team that delivers.
                    </p>
                </div>

                {/* Rows */}
                <div className={styles.rowsWrapper}>
                    {services.map((service, index) => (
                        <ServiceRow
                            key={service.id}
                            service={service}
                            index={index}
                            isVisible={isVisible}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServicesList;