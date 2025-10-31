import Image from 'next/image';
import Link from 'next/link';
import type { Car } from '@/lib/cars';

export function CarCard({ car }: { car: Car }) {
  return (
    <Link href={`/cars/${car.slug}`} className="card overflow-hidden group">
      <div className="relative h-48 w-full">
        <Image
          src={car.image}
          alt={`${car.make} ${car.model}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold">{car.make} {car.model}</h3>
          <span className="text-brand-700 font-semibold">?{(car.price).toLocaleString('en-IN')}</span>
        </div>
        <p className="text-sm text-gray-600 mt-1">{car.year} ? {car.mileage.toLocaleString()} km ? {car.fuel}</p>
        <p className="text-xs text-gray-500 mt-2">{car.location}</p>
      </div>
    </Link>
  );
}
