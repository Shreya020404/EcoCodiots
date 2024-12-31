const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-green-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Get in Touch
        </h2>
        <div className="skeuo-card p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="skeuo-button text-white px-8 py-3 rounded-full w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
