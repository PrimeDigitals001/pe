'use client'

import Link from 'next/link'
import Image from 'next/image'
import styles from './Logo.module.css'

export default function Logo() {
    return (
        <div className={styles.logo}>
            <Link href="/">
                <Image 
                    src="/images/logo.png"
                    alt="Patel Enterprise"
                    width={240}
                    height={86}
                    priority
                    className={styles.logoImage}
                />
            </Link>
        </div>
    )
}