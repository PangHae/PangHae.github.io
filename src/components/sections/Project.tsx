// import { useState } from 'react';
// import { CloseOutlined } from '@ant-design/icons';
// import { Drawer } from 'antd';

import { Project, projects } from '@/constants/projects';

// interface ProjectDetail extends Project {
//   resultDescription: string[];
// }

// const PROJECT_DETAILS: { [key: string]: ProjectDetail } = {
//   RoboSoDA: {
//     resultDescription: [],
//   },
//   ChipNSoDA: {
//     resultDescription: []
//   },
//   Gaiaworks: {
//     resultDescription: []
//   },
// };

export function ProjectsSection() {
  // const [isOpen, setIsOpen] = useState(false);
  // const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // const openDrawer = (project: Project) => {
  //   setSelectedProject(project);
  //   setTimeout(() => setIsOpen(true), 10); // allow for transition
  // };

  // const closeDrawer = () => {
  //   setIsOpen(false);
  //   setTimeout(() => {
  //     setSelectedProject(null);
  //   }, 300); // match transition duration
  // };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 font-pretendard text-white">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project: Project, index: number) => (
            <div
              key={index}
              className="project-card bg-[#23272f] border border-[#36393f] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow text-gray-200 "
              // onClick={() => openDrawer(project)}
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
      {/* <Drawer
        open={isOpen}
        onClose={closeDrawer}
        title={selectedProject?.title}
        width="40%"
        style={{
          backgroundColor: '#23272f',
          color: 'white',
        }}
        closeIcon={<CloseOutlined style={{ color: 'white' }} />}
      ></Drawer> */}
    </section>
  );
}
