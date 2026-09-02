import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Venus Global Exports",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-white px-4 text-center">
      <div className="w-20 h-20 rounded-2xl bg-[#EBF3FC] flex items-center justify-center mb-8">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0B65B2" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <h1 className="text-6xl font-extrabold text-[#0A1628] tracking-tight mb-4">404</h1>
      <h2 className="text-2xl font-bold text-[#0A1628] mb-4">Page Not Found</h2>
      <p className="text-[#64748B] max-w-md mx-auto mb-8 leading-relaxed">
        We couldn't find the page you're looking for. It might have been moved, renamed, or doesn't exist.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0B65B2] text-white font-semibold hover:bg-[#084d88] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B65B2] focus-visible:ring-offset-2"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m15 18-6-6 6-6"/>
        </svg>
        Return to Home
      </Link>
    </div>
  );
}
