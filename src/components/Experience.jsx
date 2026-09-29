const experiences = [
  {
    company: "Future Intern",
    role: "Machine Learning Intern",
    startDate: "Aug 2026",
    endDate: "Sep 2026",
    description:
      "Developed and worked on machine learning projects involving data preprocessing, exploratory data analysis, feature engineering, model building, and evaluation. Applied machine learning techniques to real-world datasets and analyzed model performance.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Scikit-learn",
      "Jupyter Notebook",
      "Google Colab",
    ],
  },
  {
    company: "Yuva Intern",
    role: "Data Analytics Specialist – Language Processing",
    startDate: "May 2026",
    endDate: "Jun 2026",
    description:
      "Worked on data analytics and natural language processing tasks, including data cleaning, text preprocessing, analysis, and extracting meaningful insights from textual data.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "NLP",
      "NLTK",
      "Jupyter Notebook",
      "Google Colab",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="py-24 border-b border-gray-800 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-white mb-4">
          Work Experience
        </h2>

        <p className="text-gray-400 mb-12">
          Internship experience focused on machine learning, data analytics,
          and natural language processing.
        </p>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="
                group
                bg-[#111827]
                border border-gray-800
                rounded-3xl
                p-7 md:p-8
                transition-all
                duration-300
                hover:border-cyan-400
                hover:-translate-y-2
                hover:shadow-[0_15px_40px_rgba(34,211,238,0.10)]
              "
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">

                <div>
                  <p className="text-cyan-400 text-sm font-semibold mb-2">
                    {experience.company}
                  </p>

                  <h3 className="text-2xl font-bold text-white">
                    {experience.role}
                  </h3>
                </div>

                <div className="text-gray-400 text-sm bg-gray-800/60 px-4 py-2 rounded-xl whitespace-nowrap">
                  {experience.startDate} – {experience.endDate}
                </div>

              </div>

              <p className="text-gray-300 leading-7 mt-6 max-w-5xl">
                {experience.description}
              </p>

              <div className="mt-6">
                <p className="text-white font-semibold mb-3">
                  Technologies & Tools
                </p>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((technology, techIndex) => (
                    <span
                      key={techIndex}
                      className="
                        bg-cyan-500/10
                        text-cyan-300
                        border border-cyan-500/20
                        px-3 py-2
                        rounded-full
                        text-sm
                        hover:border-cyan-400
                        transition
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;