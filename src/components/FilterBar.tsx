import { listMakes } from '@/lib/cars';

export function FilterBar() {
  const makes = listMakes();
  return (
    <form className="card p-4 grid gap-3 md:grid-cols-4" action="/inventory" method="GET">
      <input
        name="q"
        placeholder="Search make or model"
        className="border rounded-md px-3 py-2"
      />
      <select name="make" className="border rounded-md px-3 py-2">
        <option value="">All makes</option>
        {makes.map((m) => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>
      <select name="minYear" className="border rounded-md px-3 py-2">
        <option value="">Any year</option>
        {[2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017].map((y) => (
          <option key={y} value={y}>{y}+</option>
        ))}
      </select>
      <select name="maxPrice" className="border rounded-md px-3 py-2">
        <option value="">Any price</option>
        {[500000, 800000, 1200000, 1500000].map((p) => (
          <option key={p} value={p}>Up to ?{p.toLocaleString('en-IN')}</option>
        ))}
      </select>
      <div className="md:col-span-4 flex gap-3">
        <button className="btn btn-primary" type="submit">Apply filters</button>
        <a href="/inventory" className="btn btn-outline">Reset</a>
      </div>
    </form>
  );
}
