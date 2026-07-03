import './globals.css'
import Script from 'next/script'

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
            <body>
                {/* Meta Pixel Code */}
                <Script id="meta-pixel" strategy="afterInteractive">
                    {`
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '1709824006886441');
                        fbq('track', 'PageView');
                    `}
                </Script>
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: 'none' }}
                        src="https://www.facebook.com/tr?id=1709824006886441&ev=PageView&noscript=1"
                        alt=""
                    />
                </noscript>
                {/* End Meta Pixel Code */}
                {children}
            </body>
        </html>
    )
}