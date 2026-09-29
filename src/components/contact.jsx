function Contact() {
  return (
    <section
      id="contact"
      className="py-24 border-b border-gray-800 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-5">
          Contact Me
        </h2>

        <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-7">
          I am open to fresher opportunities, internships, and entry-level
          roles in Software Development, AI/ML, Data Analytics, and Web
          Development.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">

          {/* Email */}
          <a
            href="mailto:vishnugoud2020@gmail.com"
            className="border border-gray-700 px-6 py-4 rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            📧 Email
          </a>

          {/* Phone */}
          <a
            href="tel:+919885874495"
            className="border border-gray-700 px-6 py-4 rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            📱 Phone
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/vishnupolampalli"
            target="_blank"
            rel="noreferrer"
            className="border border-gray-700 px-6 py-4 rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            💻 GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/polampalli-vishnu-6420983b6/"
            target="_blank"
            rel="noreferrer"
            className="border border-gray-700 px-6 py-4 rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            🔗 LinkedIn
          </a>

        </div>

        <div className="mt-10 text-gray-400 space-y-2">
        </div>
      </div>
    </section>
  );
}

export default Contact;