import { FilterBar } from '@/components/FilterBar';
import { CarCard } from '@/components/CarCard';
import { filterCars } from '@/lib/cars';

function getParams(searchParams: Record<string, string | string[] | undefined>) {
  const q = typeof searchParams.q === 'string' ? searchParams.q : undefined;
  const make = typeof searchParams.make === 'string' ? searchParams.make : undefined;
  const minYear = typeof searchParams.minYear === 'string' && searchParams.minYear ? Number(searchParams.minYear) : undefined;
  const maxPrice = typeof searchParams.maxPrice === 'string' && searchParams.maxPrice ? Number(searchParams.maxPrice) : undefined;
  return { q, make, minYear, maxPrice };
}

export default function InventoryPage({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const params = getParams(searchParams);
  const results = filterCars(params);

  return (
    <div className="container py-10 space-y-6">
      <h1 className="text-3xl font-semibold">Inventory</h1>
      <FilterBar />
      <div className="text-sm text-gray-600">{results.length} car{results.length !== 1 ? 's' : ''} found</div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((car) => (
          <CarCard key={car.slug} car={car} />
        ))}
      </div>
    </div>
  );
}
