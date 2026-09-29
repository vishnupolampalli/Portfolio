const skills = [
  "Python",
  "Java",
  "MySQL",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Flask",
  "Streamlit",
  "MongoDb",
  "NLP",
  "AI / ML",
  "GitHub",
  "Problem Solving",
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 border-b border-gray-800 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-white mb-12">
          💻 Technical Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#0f1425] border border-gray-800 rounded-2xl py-5 text-center hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              <p className="font-medium">
                {skill}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;