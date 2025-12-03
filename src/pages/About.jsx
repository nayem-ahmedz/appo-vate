import { Github, Linkedin, Globe } from "lucide-react";
import Logo from '../assets/logo.png';

export default function About() {
  return (
    <section className="max-w-6xl mx-auto pb-16 px-4">
      {/* Logo */}
      <img src={Logo} alt="logo" className="w-40 mx-auto mb-2" />

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">
        About AppoVate
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto mb-12">
        <strong>AppoVate</strong> is a modern web application designed to showcase applications
        with a real app store-like experience. Built using React for the front-end and Node.js
        with Express for the back-end, AppoVate allows users to browse, search, and explore apps
        dynamically with real-time data from a MongoDB database.
      </p>

      {/* Core Highlights */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {[
          {
            title: "Real-Time Experience",
            text: "App data is fetched directly from the backend, ensuring live updates, scalability, and smooth performance.",
          },
          {
            title: "Modern UI/UX",
            text: "A clean, responsive, and intuitive interface inspired by real app stores for the best user experience across all devices.",
          },
          {
            title: "Powerful Features",
            text: "From live search and sorting to install/uninstall simulation, AppoVate delivers realistic app store functionality.",
          },
        ].map((item, idx) => (
          <div key={idx} className="bg-base-200 dark:bg-base-300 p-6 rounded-xl shadow text-center">
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">{item.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Mission, Vision, Goal */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {[
          {
            title: "Our Mission",
            text: "To provide developers and startups with a professional platform to showcase, promote, and manage their applications effortlessly.",
          },
          {
            title: "Our Vision",
            text: "To become a trusted platform for discovering innovative applications and connecting creators with users worldwide.",
          },
          {
            title: "Our Goal",
            text: "To build a growing ecosystem where quality apps gain visibility and users discover reliable digital products.",
          },
        ].map((item, idx) => (
          <div key={idx} className="bg-base-200 dark:bg-base-300 p-6 rounded-xl shadow text-center">
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">{item.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Technology Stack */}
      <div className="bg-base-200 dark:bg-base-300 p-8 rounded-xl shadow mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-900 dark:text-gray-100">Technology Stack</h2>
        <div className="grid md:grid-cols-2 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Front-end</h3>
            <p className="text-gray-600 dark:text-gray-400">
              React.js, JavaScript, Tailwind CSS, DaisyUI, Firebase Authentication, React Router, Lucide Icons
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Back-end</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Node.js, Express.js, MongoDB for scalable, real-time data handling
            </p>
          </div>
        </div>
      </div>

      {/* Creator Section */}
      <div className="bg-base-200 dark:bg-base-300 p-8 rounded-xl shadow text-center">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Meet the Creator</h2>

        <div className="avatar mb-4 mx-auto">
          <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 dark:ring-offset-base-300 ring-offset-2">
            <img
              src="https://nayem-ahmed.vercel.app/media/nayem-ahmed2.webp"
              alt="Nayem Ahmed"
            />
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Nayem Ahmed</h3>
        <h4 className="text-lg opacity-80 mb-3 text-gray-700 dark:text-gray-300">Full-stack Web Developer</h4>

        <div className="flex justify-center gap-4 my-4">
          <a href="https://github.com/nayem-ahmedz" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-circle text-gray-800 dark:text-gray-100">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/nayem-ahmedz/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-circle text-gray-800 dark:text-gray-100">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://nayem-ahmed.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-circle text-gray-800 dark:text-gray-100">
            <Globe className="w-6 h-6" />
          </a>
        </div>

        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-4">
          AppoVate is created and maintained by <strong>Nayem Ahmed</strong>, a passionate Full-stack Web Developer focused on building modern, scalable, and user-friendly web applications. This project reflects his journey into full-stack development using real-world technologies.
        </p>
      </div>
    </section>
  );
}