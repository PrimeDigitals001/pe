import Link from 'next/link'
import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
    return (
        <section className={styles.hero}>
            {/* Desktop Background Image */}
            <div className={styles.heroBackgroundDesktop}>
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

            {/* Mobile Background Image */}
            <div className={styles.heroBackgroundMobile}>
                <Image
                    src="/images/mobile_hero.png"
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

            {/* Hero Content */}
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>
                    {/* Desktop: "Complete Industrial" on line 1, "Roofing & Shed Solutions" on line 2 */}
                    <span className={styles.line1}>Complete Industrial</span>
                    <br />
                    <span className={styles.line2}>Roofing & Shed Solutions</span>
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