import { Link } from "react-scroll";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center border-b border-gray-800 pt-20"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* Left Side */}
          <div className="flex-1">
            <p className="text-cyan-400 text-base mb-6">
              ✨ AI & ML Student Portfolio
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Hi, I'm{" "}
              <span className="text-cyan-400">
                Polampalli Vishnu
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mt-7 max-w-5xl">
              Computer Science Engineering student specializing in
              Artificial Intelligence and Machine Learning.
            </p>

            <p className="text-gray-400 mt-5 max-w-3xl text-base md:text-lg leading-7">
              Fresher with project-based experience in Python, Java, React,
              MySQL, NLP, AI applications, and data-driven solutions.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">
              <Link
                to="projects"
                smooth={true}
                duration={0}
                offset={-70}
              >
                <button className="bg-cyan-400 text-black font-semibold px-6 py-4 rounded-xl hover:bg-cyan-300 transition cursor-pointer">
                  View Projects
                </button>
              </Link>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="border border-gray-700 text-white px-6 py-4 rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                📄 View Resume
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <img
              src="/profile.jpg"
              alt="Polampalli Vishnu"
              className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-cyan-400 shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;