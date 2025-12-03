export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been submitted.");
  };

  return (
    <section className="max-w-4xl mx-auto pb-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

      <p className="text-center text-gray-700 dark:text-gray-400 mb-12">
        Have questions or want to get in touch? Fill out the form below and we'll respond as soon as possible.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-base-200 p-8 rounded-xl shadow-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Message
          </label>
          <textarea
            placeholder="Your message..."
            className="textarea textarea-bordered w-full"
            rows={5}
            required
          ></textarea>
        </div>

        <div className="text-center mt-6">
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}