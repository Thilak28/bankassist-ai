import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="flex flex-col justify-center items-center text-center h-[80vh] px-6">
      <h2 className="text-6xl font-bold mb-6">
        Smart Personal Finance
      </h2>

      <p className="text-xl text-gray-300 max-w-2xl mb-8">
        Track expenses, upload bank statements,
        analyze transactions with AI and manage
        your money smarter.
      </p>

      <Link
        to="/register"
        className="bg-blue-600 px-8 py-4 rounded-lg text-lg hover:bg-blue-700"
      >
        Get Started
      </Link>
    </section>
  );
}

export default Hero;