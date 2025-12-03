import { useNavigate } from "react-router";

export default function Goal() {
  const navigate = useNavigate();
  return (
    <section className="containerr max-w-4xl mx-auto py-16 px-4">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">
        Our Vision
      </h1>
      
      {/* Paragraphs */}
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        Welcome to <strong>AppoVate</strong> — a modern platform created by <strong>Nayem Ahmed</strong> to showcase applications with style, clarity, and purpose. AppoVate is built for developers, creators, and startups who want to present their products in a clean and professional way.
      </p>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        Our vision is to build a dynamic ecosystem where users can create accounts, submit their applications, and manage their listings in one place.
      </p>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        AppoVate is not just a showcase platform — it’s a growing community of creators and innovators.
      </p>

      {/* Button */}
      <div className="text-center mt-8">
        <button
          className="btn btn-primary text-white dark:text-gray-900"
          onClick={() => navigate("/register")}
        >
          Join & Submit Your App
        </button>
      </div>
    </section>
  );
}