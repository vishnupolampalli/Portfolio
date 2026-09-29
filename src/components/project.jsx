import { useState } from "react";

const projects = [
  {
    title: "AI-HealthCare-Chatbot",
    description:
      "AI-powered healthcare assistant that provides disease prediction, health recommendations, and medical guidance using AI and machine learning.",
    tech: ["HTML", "Python", "NLP", "AI/ML"],
    github: "https://github.com/vishnupolampalli/AI-HealthCare-Chatbot",
  },
  {
    title: "Banking-Management-System-Python",
    description:
      "Console-based banking management system developed using Python and Object-Oriented Programming concepts.",
    tech: ["Python", "OOP", "File Handling"],
    github:
      "https://github.com/vishnupolampalli/Banking-Management-System-Python",
  },
  {
    title: "Hospital-Management-System",
    description:
      "AI-powered Hospital Management System built with Flask and MySQL for managing patients, doctors, appointments, and medical records.",
    tech: ["Python", "Flask", "MySQL", "AI/ML"],
    github:
      "https://github.com/vishnupolampalli/Hospital-Management-System",
  },
  {
    title: "KITKAT_MARKET_SALES_INTELLIGENCE",
    description:
      "KitKat Market Sales Intelligence Dashboard developed using Python and SQL to analyze sales data and generate business insights.",
    tech: ["Python", "SQL", "Pandas", "Data Analytics"],
    github:
      "https://github.com/vishnupolampalli/KITKAT_MARKET_SALES_INTELLIGENCE",
  },
];

function ProjectCard({ project }) {
  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
  );

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 12;
    const rotateX = ((centerY - y) / centerY) * 12;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
    );
  };

  const handleMouseLeave = () => {
    setTransform(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
    );
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transformStyle: "preserve-3d",
        transition: "transform 0.12s ease-out",
      }}
      className="
        relative
        bg-[#111827]
        border border-gray-800
        rounded-3xl
        p-7
        min-h-[330px]
        hover:border-cyan-400
        shadow-xl
        cursor-pointer
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          rounded-3xl
          bg-cyan-400/5
          opacity-0
          hover:opacity-100
          transition-opacity
          duration-300
          pointer-events-none
        "
      />

      {/* Content */}
      <div
        className="relative h-full"
        style={{
          transform: "translateZ(35px)",
        }}
      >
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-xl font-bold text-white mb-5">
            {project.title}
          </h3>

          <span className="text-cyan-400 text-xl">
            ↗
          </span>
        </div>

        <p className="text-gray-400 leading-7 mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-7">
          {project.tech.map((item, index) => (
            <span
              key={index}
              className="
                bg-cyan-500/10
                text-cyan-300
                border border-cyan-500/20
                px-3
                py-2
                rounded-full
                text-sm
              "
            >
              {item}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="
            inline-flex
            items-center
            gap-2
            text-cyan-400
            hover:text-cyan-300
            transition
          "
        >
          💻 View GitHub →
        </a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 border-b border-gray-800 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-white mb-4">
          Featured Projects
        </h2>

        <p className="text-gray-400 mb-12">
          A selection of projects showcasing my skills in Python, AI/ML,
          web development, SQL, and data analytics.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;