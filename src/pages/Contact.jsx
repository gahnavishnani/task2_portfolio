function Contact() {
  return (
    <div className="min-h-screen pt-20 px-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>

      {/* Contact Form */}
      <form className="max-w-xl mx-auto space-y-6 bg-gray-800 p-6 rounded-lg shadow-md">
        <div>
          <label htmlFor="name" className="block mb-2 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-semibold">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Enter your message"
            rows="5"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded transition"
        >
          Send Message
        </button>
      </form>

      {/* Your Contact Info */}
      <div className="text-center mt-10 text-sm text-gray-400 space-y-2">
        <p>Email: <span className="text-white">gahnavishnani@gmail.com</span></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/gahna-vishnani-677175244" target="_blank" className="text-green-400 underline">linkedin.com/in/your-profile</a></p>
        <p>Location: Varanasi, India</p>
      </div>
    </div>
  );
}

export default Contact;