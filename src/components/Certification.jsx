const certifications = [
  {
    title: "AI Foundation",
    issuer: "Hexart.in",
    date: "07 Aug 2025",
    id: "1uCmm4B9Iqd1f_LyZbOmP3OuWfbwA2MCZ",
  },
  {
    title: "Java Programming for Beginner",
    issuer: "Simplilearn | SkillUP",
    date: "Aug 2025",
    id: "1bQ6IuNMuG4loVhOF_TpQ0JetZqaGfwYj",
  },
  {
    title: "SMART INDIA HACKATHON-2025",
    issuer: "CMR Engineering College",
    date: "20 Sep 2025",
    id: "16HjO4BQkBucFQfDSGsvxvl3UGHOrlCSw",
  },
  {
    title: "Technology Job Simulation",
    issuer: "Deloitte",
    date: "10 Mar 2026",
    id: "1XfCBs1C9q3eW1ggK8STpzfHudLDDVeNQ",
  },
  {
    title: "Data Analytics Specialist - Language Processing",
    issuer: "Yuva Intern",
    date: "29 May 2026",
    id: "1Q2tZrLsJ_1Lt7Vo87-Jlsb8BATztL1Py",
  },
  {
    title: "Machine Learning Intern",
    issuer: "Future Intern",
    date: "Aug 2026 - Sep 2026",
    id: "1YjxZFDJxWBUmIEaWw4aSKwf1N3IHperZ",
  },
];

function getCertificateLink(id) {
  return ["https:", "", "drive.google.com", "file", "d", id, "view"].join("/");
}

function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 border-b border-gray-800 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-white mb-4">
          Certifications & Achievements
        </h2>

        <p className="text-gray-400 mb-12">
          Certifications and achievements that demonstrate my technical
          knowledge, learning, and practical experience.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((certificate, index) => (
            <div
              key={index}
              className="
                group
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
              {/* Certificate Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 mb-5">
                <span className="text-2xl">🏆</span>
              </div>

              {/* Certificate Name */}
              <h3 className="text-lg font-bold text-white leading-6 mb-4">
                {certificate.title}
              </h3>

              {/* Issuer */}
              <p className="text-cyan-300 font-medium mb-2">
                {certificate.issuer}
              </p>

              {/* Date */}
              <p className="text-gray-500 text-sm mb-6">
                {certificate.date}
              </p>

              {/* Certificate Button */}
              <a
                href={getCertificateLink(certificate.id)}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-cyan-400
                  border
                  border-cyan-500/30
                  rounded-xl
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  hover:bg-cyan-500/10
                  hover:border-cyan-400
                  transition
                "
              >
                View Certificate
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certifications;