const education = [
  {
    degree: "B.Tech CSE-AI & ML",
    college: "CMR Engineering College",
    year: "2023 – 2027",
    score: "Current CGPA: 7.2",
  },
  {
    degree: "Intermediate",
    college: "Gowthami Junior College",
    year: "2021 – 2023",
    score: "Percentage: 74.6%",
  },
  {
    degree: "SSC",
    college: "ZP High School",
    year: "2020 – 2021",
    score: "CGPA: 9.7",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="py-24 border-b border-gray-800 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-white mb-12">
          Education
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="
                bg-[#111827]
                border border-gray-800
                rounded-3xl
                p-6
                transition-all
                duration-300
                hover:border-cyan-400
                hover:-translate-y-2
                hover:shadow-[0_15px_40px_rgba(34,211,238,0.10)]
              "
            >
              <h3 className="text-lg font-bold text-cyan-300 mb-4">
                {item.degree}
              </h3>

              <p className="text-white mb-3">
                {item.college}
              </p>

              <p className="text-gray-400 mb-3">
                {item.year}
              </p>

              {/* Score */}
              <div className="inline-block bg-cyan-500/10 border border-cyan-500/20 rounded-xl px-4 py-2 mb-4">
                <p className="text-cyan-300 font-semibold">
                  {item.score}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;