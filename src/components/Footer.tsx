export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white font-bold">S</span>
            <span className="text-lg font-semibold">Somu Cars</span>
          </div>
          <p className="mt-4 text-sm text-gray-600">Quality pre-owned cars with transparent pricing and friendly service.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-brand-700">Home</a></li>
            <li><a href="/inventory" className="hover:text-brand-700">Inventory</a></li>
            <li><a href="#contact" className="hover:text-brand-700">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Phone: +91 98765 43210</li>
            <li>Email: hello@somucars.com</li>
            <li>Address: 12 Market Road, Chennai</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-100 py-4 text-center text-xs text-gray-500">? {new Date().getFullYear()} Somu Cars. All rights reserved.</div>
    </footer>
  );
}
