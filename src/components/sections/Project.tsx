import { useState } from 'react';

import { projects } from '@/constants/projects';

// Add type for project
interface ProjectType {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  result: string[];
  link?: string;
}

export function ProjectsSection() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null,
  );

  const openDrawer = (project: ProjectType) => {
    setSelectedProject(project);
    setDrawerVisible(true);
    setTimeout(() => setDrawerOpen(true), 10); // allow for transition
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
    setTimeout(() => {
      setDrawerVisible(false);
      setSelectedProject(null);
    }, 300); // match transition duration
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 font-pretendard text-white">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project: ProjectType, index: number) => (
            <div
              key={index}
              className="project-card bg-[#23272f] border border-[#36393f] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow text-gray-200 cursor-pointer"
              onClick={() => openDrawer(project)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-pretendard mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-[#bcbcc0] mb-4 font-noto-sans">
                  {project.description}
                </p>
                <div className="mb-4 text-sm">
                  {project.result.map((r: string, i: number) => (
                    <p key={i} className="text-gray-400 mb-1 font-noto-sans">
                      {r}
                    </p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#611f69] text-[#eaeaea] rounded-full text-sm font-pretendard"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Drawer */}
      {drawerVisible && selectedProject && (
        <>
          {/* Overlay: clickable to close */}
          <div
            className={`fixed inset-0 bg-black/60 z-40 w-[420px] transition-opacity duration-300 ${drawerOpen ? 'opacity-100' : 'opacity-0'}`}
            style={{ backdropFilter: 'blur(1.5px)' }}
            onClick={closeDrawer}
          />
          {/* Drawer with open/close animation */}
          <div
            className={`fixed right-0 top-0 h-full w-[420px] bg-[#23272f] border-l border-[#36393f] shadow-2xl z-50 flex flex-col transition-transform duration-300 ease-in-out ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div className="flex items-center justify-between p-6 border-b border-[#36393f]">
              <h2 className="text-2xl font-bold text-white">
                {selectedProject.title}
              </h2>
              <button
                onClick={closeDrawer}
                className="text-gray-400 hover:text-white text-2xl"
              >
                &times;
              </button>
            </div>
            <div className="p-6 flex-1 overflow-y-auto">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <p className="text-[#bcbcc0] mb-4">
                {selectedProject.description}
              </p>
              <div className="mb-4">
                <div className="font-bold text-white mb-2">기술스택</div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map(
                    (tech: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#611f69] text-[#eaeaea] rounded-full text-sm font-pretendard"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>
              <div className="mb-4">
                <div className="font-bold text-white mb-2">성과/결과</div>
                <ul className="list-disc list-inside text-[#eaeaea] space-y-1">
                  {selectedProject.result.map((r: string, i: number) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-[#611f69] text-white rounded font-bold hover:bg-[#7c3aed] transition"
                >
                  프로젝트 바로가기
                </a>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
