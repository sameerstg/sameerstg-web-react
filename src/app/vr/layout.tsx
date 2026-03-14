import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VR Simulations',
  description: 'Explore high-fidelity VR simulations and immersive digital experiences crafted by Sameer stg (Sameerstg) using cutting-edge technologies.',
  keywords: ['VR Simulations', 'Sameer stg', 'Sameerstg', 'Virtual Reality Portfolio', 'WebVR', 'Unity 3D', 'Architectural Visualization', 'Creative Developer'],
  openGraph: {
    title: 'VR Simulations | Sameer stg (Sameerstg)',
    description: 'Immersive VR simulations and 3D web experiences by Sameer stg.',
    images: [
      {
        url: "/vr-og-image.png",
        width: 1200,
        height: 630,
        alt: "VR Simulations Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VR Simulations | Sameer STG",
    description: "Immersive VR projects and 3D simulations showcase.",
    images: ["/vr-og-image.png"],
  },
};

export default function VrLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <>{children}</>
}
