import Link from "next/link";

const NotFoundPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
    <div className="max-w-md text-center">
      <h1 className="text-5xl font-bold mb-4">Page Not Found</h1>
      <p className="text-lg mb-6">
        Oops! The page you are looking for does not exist. It might have been
        moved or deleted.
      </p>
      <Link
        href="/"
        className="bg-white text-blue-500 px-6 py-3 shadow-md hover:bg-gray-200 transition-colors duration-300"
      >
        Go to Homepage
      </Link>
    </div>
  </div>
);

export default NotFoundPage;
