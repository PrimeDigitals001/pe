'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ServiceModal from '@/components/ServiceModal';
import styles from './ServicesGrid.module.css';

const services = [
    {
        id: 1,
        title: 'Industrial Roofing Solutions',
        tagline: 'Built to withstand. Designed to last.',
        image: '/images/services/roofing.jpg',
        shortDesc: 'Installation, replacement, and refurbishment of industrial roofing systems — PPGI, PPGL, GI sheets, polycarbonate, insulated panels, and metal cladding.',
        fullDesc: 'We specialize in the installation, replacement, and refurbishment of industrial roofing systems, delivering durable and efficient solutions tailored to project requirements. Our expertise covers a wide range of roofing and cladding materials, including PPGI, PPGL, and GI sheets, along with polycarbonate sheets, insulated panels, and metal cladding systems. These solutions are designed to enhance structural strength, weather resistance, and thermal performance for industrial and commercial facilities.\n\nIn addition to roofing systems, we provide complete accessory and finishing installations such as flashing, ridges, gutters, down-take pipes, turbo ventilators, and skylights, ensuring proper drainage, ventilation, and natural lighting. We also offer reliable leak-proofing solutions, damaged sheet replacement, and emergency repair support to minimize downtime and protect assets.',
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
        title: 'Civil Construction',
        tagline: 'Foundations you can build a future on.',
        image: '/images/services/civil.jpg',
        shortDesc: 'Complete civil construction covering excavation, PCC, RCC, masonry, plastering, and flooring executed to approved drawings with strict quality control.',
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
        title: 'Structural Steel / PEB',
        tagline: 'Precision engineered. Perfectly erected.',
        image: '/images/services/structural.jpg',
        shortDesc: 'Fabrication and erection of steel structures — platforms, pipe racks, PEB sheds, trusses, staircases, handrails — following certified WPS welding procedures.',
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
        title: 'Scaffolding Services',
        tagline: 'Safe access. Every level. Every time.',
        image: '/images/services/scaffolding.jpg',
        shortDesc: 'Complete scaffolding solutions — erection, dismantling, shifting, and maintenance — with load checks, tagging systems, and supervisor inspections.',
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
        title: 'Painting & Coating Works',
        tagline: 'Protection that performs. Finish that lasts.',
        image: '/images/services/painting.jpg',
        shortDesc: 'Full-cycle painting and coating — surface prep, epoxy, enamel, PU, zinc primer systems with DFT checks at every stage plus safety line marking.',
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
        title: 'Maintenance & Shutdown Support',
        tagline: 'Fast response. Zero compromise.',
        image: '/images/services/maintenance.jpg',
        shortDesc: 'Comprehensive preventive, breakdown, and shutdown maintenance — roof leak fixing, civil repairs, scaffolding support, touch-up painting with fast-response team.',
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

/* ─── Single Service Card ──────────────────────────────────────────── */

const ServiceCard = ({ service, index, isVisible, onCardClick }) => {
    return (
        <article
            className={`${styles.card} ${styles.animateUp} ${isVisible ? styles.visible : ''}`}
            style={{ animationDelay: `${0.1 + index * 0.08}s` }}
            onClick={() => onCardClick(service)}
            role="button"
            tabIndex={0}
            aria-label={`View details for ${service.title}`}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onCardClick(service);
                }
            }}
        >
            {/* Image */}
            <div className={styles.imageWrap}>
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.cardImage}
                    priority={index === 0}
                />

                {/* Hover overlay */}
                <div className={styles.imageOverlay}>
                    <p className={styles.overlayTagline}>{service.tagline}</p>
                    <ul className={styles.overlayList}>
                        {service.highlights.slice(0, 4).map((item, i) => (
                            <li key={i} className={styles.overlayItem}>
                                <span className={styles.overlayDot} />
                                {item}
                            </li>
                        ))}
                        {service.highlights.length > 4 && (
                            <li className={styles.overlayMore}>
                                +{service.highlights.length - 4} more highlights
                            </li>
                        )}
                    </ul>
                </div>
            </div>

            {/* Card body */}
            <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardTagline}>{service.tagline}</p>
                <p className={styles.cardDesc}>{service.shortDesc}</p>

                <span className={styles.viewMore}>
                    View Details
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11"
                            stroke="currentColor" strokeWidth="1.8"
                            strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </div>
        </article>
    );
};

/* ─── Main Section ─────────────────────────────────────────────────── */

const ServicesGrid = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeService, setActiveService] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
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

    const handleCardClick = (service) => {
        setActiveService(service);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setActiveService(null), 400);
    };

    return (
        <>
            <section ref={sectionRef} className={styles.servicesGridSection}>
                <div className={styles.container}>

                    <div
                        className={`${styles.headingBlock} ${styles.animateUp} ${isVisible ? styles.visible : ''}`}
                    >
                        <h2 className={styles.sectionTitle}>What We Do</h2>
                        <p className={styles.sectionSubtitle}>
                            Six core service areas built on safety-first execution,
                            quality materials, and a team that delivers every time.
                        </p>
                    </div>

                    <div className={styles.grid}>
                        {services.map((service, index) => (
                            <ServiceCard
                                key={service.id}
                                service={service}
                                index={index}
                                isVisible={isVisible}
                                onCardClick={handleCardClick}
                            />
                        ))}
                    </div>

                </div>
            </section>

            <ServiceModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                service={activeService}
            />
        </>
    );
};

export default ServicesGrid;