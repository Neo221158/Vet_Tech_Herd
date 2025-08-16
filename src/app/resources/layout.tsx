import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources - The Vet Tech Herd',
  description: 'Discover curated educational resources, courses, tools, and training materials for veterinarians in technology careers.',
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}