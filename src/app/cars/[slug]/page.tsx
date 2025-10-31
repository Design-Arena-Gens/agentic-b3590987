import Image from 'next/image';
import Link from 'next/link';
import { findCar, cars } from '@/lib/cars';
import { ContactSection } from '@/components/ContactSection';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return cars.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const car = findCar(params.slug);
  if (!car) return { title: 'Car not found' };
  const title = `${car.make} ${car.model} ${car.year} | Somu Cars`;
  return {
    title,
    description: car.description,
    openGraph: {
      title,
      images: [{ url: car.image, width: 1200, height: 630 }]
    }
  };
}

export default function CarDetailPage({ params }: { params: { slug: string } }) {
  const car = findCar(params.slug);
  if (!car) {
    return (
      <div className="container py-16">
        <p>Car not found.</p>
        <Link href="/inventory" className="text-brand-700">Back to inventory</Link>
      </div>
    );
  }

  return (
    <>
      <div className="container py-10 grid gap-8 lg:grid-cols-2">
        <div className="card overflow-hidden">
          <div className="relative h-[360px] w-full">
            <Image src={car.image} alt={`${car.make} ${car.model}`} fill className="object-cover" />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-semibold">{car.make} {car.model}</h1>
          <p className="text-gray-600 mt-1">{car.year} ? {car.mileage.toLocaleString()} km ? {car.fuel} ? {car.transmission}</p>
          <div className="mt-4 text-2xl font-semibold text-brand-700">?{car.price.toLocaleString('en-IN')}</div>
          <p className="mt-6 text-gray-700">{car.description}</p>
          <div className="mt-6 flex gap-3">
            <a href="#contact" className="btn btn-primary">Enquire now</a>
            <Link href="/inventory" className="btn btn-outline">Back to inventory</Link>
          </div>
        </div>
      </div>
      <ContactSection subject={`Enquiry about ${car.make} ${car.model} (${car.year})`} />
    </>
  );
}
