import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import SchemaOrg from '@/components/layout/schema-org';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://danielcaron.com'),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: "Expert en location d'équipement audiovisuel au Québec - Plus de 20 ans d'expérience en solutions audiovisuelles professionnelles pour vos événements",
  keywords: [
    'location audiovisuel',
    'équipement audiovisuel',
    'sonorisation événement',
    'vidéo projection',
    'éclairage événementiel',
    'location matériel son',
    'location écran géant',
    'services audiovisuels Québec',
    'location projecteur',
    'location système son',
    'mur vidéo',
    'mapping vidéo',
    'écran LED',
    'conférence hybride',
    'cinéma plein air'
  ],
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'fr_CA',
    url: siteConfig.url,
    title: siteConfig.name,
    description: "Expert en location d'équipement audiovisuel au Québec - Solutions professionnelles pour tous vos événements",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: "Expert en location d'équipement audiovisuel au Québec - Solutions professionnelles pour tous vos événements",
    images: [siteConfig.ogImage],
    creator: '@daniecarron',
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  icons: {
    icon: [
      { url: '/favicon.png', sizes: 'any' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/favicon.png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon.png',
        color: '#000000'
      }
    ]
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <SchemaOrg />
        <link rel="alternate" hrefLang="fr-CA" href={siteConfig.url} />
        <meta name="geo.region" content="CA-QC" />
        <meta name="geo.placename" content="Longueuil" />
        <meta name="geo.position" content="45.52247406361339;-73.51498672346976" />
        <meta name="ICBM" content="45.52247406361339, -73.51498672346976" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="min-h-screen flex flex-col font-objectivity">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}