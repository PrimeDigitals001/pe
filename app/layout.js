import './globals.css'

export const metadata = {
    title: 'Patel Enterprise.',
    description: 'We provide durable, safe, and innovative roofing systems for factories, warehouses, and commercial structures.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* Inter Font - For buttons and UI */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link 
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" 
                    rel="stylesheet" 
                />
                
                {/* Playfair Display - Alternative to Grift (elegant serif) */}
                <link 
                    href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap" 
                    rel="stylesheet" 
                />
            </head>
            <body>{children}</body>
        </html>
    )
}