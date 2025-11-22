import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#037080] to-[#3d4450] px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-white mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-recoleta">
          Page Not Found
        </h2>
        <p className="text-gray-200 mb-8 font-roboto-semi-condensed text-lg">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="inline-block bg-white text-[#037080] px-8 py-3 rounded-full font-roboto-semi-condensed font-bold hover:bg-gray-100 transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
