import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers - The Vet Tech Herd',
  description: 'Find exciting career opportunities for veterinarians in technology. Explore jobs at the intersection of veterinary medicine and tech innovation.',
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}