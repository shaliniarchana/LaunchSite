
import "./globals.css";
import { Orbitron } from 'next/font/google';



const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'], // Or use 500, 600 as needed
  variable: '--font-orbitron',
})

export const metadata = {
   title: 'LaunchSite | Premium Full-Stack Software & Templates',
  description: 'Buy premium full stack websites, apps, and templates from LaunchSite. Custom solutions with blazing-fast performance.',
  icons: {
    icon: '/logonew.ico',
  },
  openGraph: {
    title: 'LaunchSite | Premium Full-Stack Software & Templates',
    description: 'Explore blazing-fast, modern websites and apps for sale.',
    url: 'https://your-domain.com',
    siteName: 'LaunchSite',
    images: [
      {
        url: '/images/logonew.png', // Place in public/images/
        width: 1200,
        height: 630,
        alt: 'LaunchSite Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
        {/* ✅ Add your Font Awesome CDN here only if needed */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body
        className={`${orbitron.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
