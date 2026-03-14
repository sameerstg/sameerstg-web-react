import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'VR Simulations | Sameerstg Portfolio',
    description: 'Explore immersive VR simulations and architectural visualizations created by Sameerstg.',
    keywords: ['VR', 'Virtual Reality', 'Simulations', 'Unity', 'Sameerstg'],
};

export default function VrLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <>{children}</>
}
