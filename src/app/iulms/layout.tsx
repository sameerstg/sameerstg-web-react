import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'IULMS - Student Portal | Iqra University',
    description: 'IULMS is your all-in-one student portal for attendance, grades, timetables, and assignments.',
    keywords: ['IULMS', 'Iqra University', 'student portal', 'attendance', 'grades', 'lms'],
};

export default function IulmsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <>{children}</>
}
