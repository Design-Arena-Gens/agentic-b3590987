import Image from 'next/image';
import Link from 'next/link';
import { cars } from '@/lib/cars';
import { CarCard } from '@/components/CarCard';
import { ContactSection } from '@/components/ContactSection';

export default function HomePage() {
  const featured = cars.filter((c) => c.featured).slice(0, 3);
  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=2000&auto=format&fit=crop"
            alt="Showroom"
            fill
            className="object-cover opacity-25"
            priority
          />
        </div>
        <div className="container py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Drive home your next car with confidence</h1>
            <p className="mt-4 text-lg text-gray-700">Handpicked, inspected pre-owned cars. Transparent pricing. Easy financing options. Trusted by hundreds of happy customers.</p>
            <div className="mt-6 flex gap-3">
              <Link href="/inventory" className="btn btn-primary">Browse inventory</Link>
              <a href="#contact" className="btn btn-outline">Contact us</a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-gray-700">
              <div className="card p-4 text-center">200+ Cars Sold</div>
              <div className="card p-4 text-center">150+ 5-Star Reviews</div>
              <div className="card p-4 text-center">Free RC Transfer</div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Featured cars</h2>
          <Link className="text-brand-700" href="/inventory">View all</Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((car) => (
            <CarCard key={car.slug} car={car} />
          ))}
        </div>
      </section>

      <ContactSection />
    </>
  );
}
