import Link from 'next/link'
import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
    return (
        <section className={styles.hero}>
            {/* Background Image - ABSOLUTE POSITIONED */}
            <div className={styles.heroBackground}>
                <Image
                    src="/images/hero_bg.png"
                    alt="Industrial Roofing Background"
                    fill
                    priority
                    quality={90}
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }}
                />
            </div>
            
            {/* Black Overlay - 23% opacity */}
            <div className={styles.overlay}></div>

            {/* Hero Content - RELATIVE POSITIONED ON TOP */}
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>
                    Complete Industrial<br />
                    Roofing & Shed Solutions
                </h1>
                
                <p className={styles.heroDescription}>
                    We provide durable, safe, and innovative roofing systems for factories, warehouses, and commercial structures powered by Tata BlueScope, Kee Safety, Tegola, and Saint-Gobain.
                </p>
                
                <Link href="/contact" className={styles.ctaButton}>
                    GET STARTED
                </Link>
            </div>
        </section>
    )
}