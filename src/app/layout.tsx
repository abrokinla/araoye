import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: 'Araoye Abraham | Full-Stack Developer & Data Scientist',
  description: 'Portfolio of Araoye Abraham, showcasing expertise in Full-Stack Web Development, Data Analysis, and Data Science. Explore projects in web development, data analysis, and machine learning.',
  keywords: ['Araoye Abraham', 'full-stack developer', 'data scientist', 'web development', 'data analysis', 'machine learning', 'portfolio', 'JavaScript', 'Python', 'React', 'Next.js'],
  authors: [{ name: 'Araoye Abraham' }],
  creator: 'Araoye Abraham',
  publisher: 'Araoye Abraham',
  robots: 'index, follow',
  openGraph: {
    title: 'Araoye Abraham | Full-Stack Developer & Data Scientist',
    description: 'Portfolio of Araoye Abraham, showcasing expertise in Full-Stack Web Development, Data Analysis, and Data Science.',
    url: 'https://araoye.pro',
    siteName: 'Araoye Abraham Portfolio',
    images: [
      {
        url: 'https://res.cloudinary.com/dru9skos8/image/upload/v1763070767/wvhlw4teb16bnbe608ce.png',
        width: 1200,
        height: 630,
        alt: 'Araoye Abraham - Full-Stack Developer & Data Scientist',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Araoye Abraham | Full-Stack Developer & Data Scientist',
    description: 'Portfolio of Araoye Abraham, showcasing expertise in Full-Stack Web Development, Data Analysis, and Data Science.',
    images: ['https://res.cloudinary.com/dru9skos8/image/upload/v1763070767/wvhlw4teb16bnbe608ce.png'],
    creator: '@AbgikCodez',
  },
  alternates: {
    canonical: 'https://araoye.pro',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Araoye Abraham",
              "jobTitle": "Full-Stack Developer & Data Scientist",
              "description": "Portfolio of Araoye Abraham, showcasing expertise in Full-Stack Web Development, Data Analysis, and Data Science.",
              "url": "https://araoye.pro",
              "sameAs": [
                "https://www.linkedin.com/in/araoye-abraham-dev/",
                "https://github.com/abrokinla"
              ],
              "knowsAbout": [
                "Full-Stack Web Development",
                "Data Analysis",
                "Data Science",
                "Machine Learning",
                "JavaScript",
                "Python",
                "React",
                "Next.js"
              ],
              "hasOccupation": [
                {
                  "@type": "Occupation",
                  "name": "Full-Stack Developer"
                },
                {
                  "@type": "Occupation",
                  "name": "Data Scientist"
                },
                {
                  "@type": "Occupation",
                  "name": "Data Analyst"
                }
              ]
            })
          }}
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
