import Link from "next/link";

export default function NotFound() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-white jen-404">
      <div className="page-inner min-h-screen">
        <Link href="/">
          <img
            src="/images/logo.svg"
            alt="Logo"
            className="w-56 mb-10"
          />
        </Link>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center">
          Lost your way?
        </h1>
        <div className="max-w-4xl w-full">
          <img
            src="/images/404.png"
            alt="Logo"
            className="w-full max-w-2xl mx-auto"
          />
        </div>
        <div className="py-5 text-black text-center space-y-5">
          <h1 className="text-xl font-bold">
            The page you were looking for doesn’t exist
          </h1>
          <p>You may have mistyped the address or the page may have moved</p>
        </div>
        <Link
          href="/"
          className="text-white bg-[#25b2e7] hover:scale-105 duration-500 hover:bg-[#25b2e7]/80 px-6 py-3 rounded-full text-lg font-medium transition mt-5"
        >
          Go Back To Homepage
        </Link>
      </div>
    </section>
  );
}
