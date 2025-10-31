export function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-gray-100">
      <div className="container py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white font-bold">S</span>
          <span className="text-xl font-semibold">Somu Cars</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          <a href="/" className="hover:text-brand-700">Home</a>
          <a href="/inventory" className="hover:text-brand-700">Inventory</a>
          <a href="#contact" className="hover:text-brand-700">Contact</a>
        </nav>
        <a href="/inventory" className="btn btn-primary">View Inventory</a>
      </div>
    </header>
  );
}
