import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'IqraVerse - University Admission Assistant Game | Iqra University',
    description: 'IqraVerse is an interactive game where you can visit the university admission department and ask queries through natural conversation. Get instant answers about admissions, programs, and student life.',
    keywords: ['IqraVerse', 'Iqra University', 'admission', 'interactive game', 'admission queries', 'university assistant', 'chatbot game'],
    authors: [{ name: 'Iqra University' }],
    creator: 'Iqra University IT Department',
    publisher: 'Iqra University',
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        title: 'IqraVerse - University Admission Assistant Game',
        description: 'Visit Iqra University&apos;s admission department and ask questions through interactive conversation.',
        url: 'https://sameerstg-web-react.vercel.app/iqraverse',
        siteName: 'IqraVerse',
        images: [
            {
                url: 'https://via.placeholder.com/1200x630?text=IqraVerse+Admission+Game',
                width: 1200,
                height: 630,
                alt: 'IqraVerse Admission Game',
                type: 'image/png',
            },
        ],
        type: 'website',
        locale: 'en_US',
    },
    category: 'Entertainment',
    classification: 'Interactive Game',
};

export default function IqraVerseLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <>{children}</>
}
