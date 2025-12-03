export default function Support() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Your support request has been submitted successfully!");
    e.target.reset();
  };

  return (
    <section className="max-w-5xl mx-auto pb-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-6">Support Center</h1>

      <p className="text-lg text-center text-gray-600 mb-10">
        Need help with AppoVate? Fill out the form below and we’ll get back to you soon.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Support Info */}
        <div className="bg-base-200 p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>

          <p className="mb-3">📧 Email: <strong>nayemahmedz@proton.me</strong></p>
          <p className="mb-3">🌍 Project: <strong>AppoVate</strong></p>
          <p className="mb-3">💡 Support: Bugs, Features, Accounts</p>

          <p className="text-gray-600 mt-6">
            Response time: 24–48 hours (working days)
          </p>
        </div>

        {/* Simple Support Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-base-200 p-8 rounded-xl shadow space-y-4"
        >
          <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            required
          />

          <textarea
            name="message"
            placeholder="Describe your issue..."
            className="textarea textarea-bordered w-full h-32"
            required
          ></textarea>

          <button type="submit" className="btn btn-primary w-full">
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}