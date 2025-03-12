import { useEffect, useState } from 'react';
import {
  ArrowUpOutlined,
  DownloadOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { Button, message, Progress, Tooltip } from 'antd';

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      const sections = ['home', 'about', 'experience', 'projects', 'skills'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const projects = [
    {
      title: 'E-commerce Platform',
      description:
        'A full-stack e-commerce solution with React, Node.js, and MongoDB',
      image:
        'https://public.readdy.ai/ai/img_res/58231ee680b7b8f1c7bb6ffa8a21c1ef.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redux'],
      demoLink: 'https://demo.example.com',
      githubLink: 'https://github.com/example',
    },
    {
      title: 'Task Management App',
      description:
        'Real-time task management application with team collaboration features',
      image:
        'https://public.readdy.ai/ai/img_res/d89362055b0cfcccb615b126ec74325f.jpg',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      demoLink: 'https://demo.example.com',
      githubLink: 'https://github.com/example',
    },
    {
      title: 'AI Image Generator',
      description:
        'Web application that generates images using machine learning models',
      image:
        'https://public.readdy.ai/ai/img_res/bbed7ff61ae11a1d89d679b610ee931a.jpg',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
      demoLink: 'https://demo.example.com',
      githubLink: 'https://github.com/example',
    },
  ];

  const experiences = [
    {
      company: 'Tmax CoreAI',
      position: '연구원',
      period: '2024.04.12 - 2024.10.04',
      description: 'React Library 개발',
    },
    {
      company: '애자일소다',
      position: '선임 연구원',
      period: '2022.07.01 - 2024.04.12',
      description:
        "AI 팔레타이징 솔루션 'RoboSoDA', AI 반도체 설계 솔루션 'ChipNSoDA' Frontend 개발",
    },
    {
      company: '애자일소다',
      position: '인턴',
      period: '2021.12.20 - 2022.06.30',
      description: "강화학습 MLOps 솔루션 'BakingSoDA' Frontend 개발",
    },
  ];

  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
    },
    { category: 'Backend', items: ['Node.js', 'Python', 'Java', 'MongoDB'] },
    { category: 'DevOps', items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Postman'] },
  ];

  const handleDownloadCV = () => {
    message.success('CV downloaded successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-800">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Projects', 'Skills'].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`cursor-pointer text-sm font-medium ${
                      activeSection === item.toLowerCase()
                        ? 'text-blue-600'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {item}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center"
        style={{
          backgroundImage:
            'url(https://readdy.ai/api/search-image?query=modern abstract geometric pattern with soft gradient colors professional minimal design background with space for text on left side&width=1440&height=800&seq=4&orientation=landscape&flag=794eb0318489068313c02cce345c81dc)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/30" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Hi, I'm 이광해
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Full Stack Developer & Software Engineer
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mb-12">
            Passionate about creating innovative solutions and delivering
            exceptional user experiences through clean, efficient code.
          </p>
          <Button type="primary" size="large" className="!rounded-button">
            View My Work
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <img
                src="https://public.readdy.ai/ai/img_res/5aed39c8f8b9cfb4087bb709a90768e9.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6">
                With over 6 years of experience in software development, I
                specialize in building scalable web applications and
                implementing modern software solutions. My passion lies in
                creating efficient, user-friendly applications that solve
                real-world problems.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  icon={<MailOutlined />}
                  className="!rounded-button"
                  onClick={() =>
                    (window.location.href = 'mailto:yds05074@gmail.com')
                  }
                >
                  Contact Me
                </Button>
                <Button
                  icon={<DownloadOutlined />}
                  className="!rounded-button"
                  onClick={handleDownloadCV}
                >
                  Download CV
                </Button>
              </div>
              <div className="flex space-x-4">
                <Tooltip title="GitHub">
                  <Button
                    icon={<GithubOutlined />}
                    shape="circle"
                    className="!rounded-button"
                    onClick={() => window.open('https://github.com/PangHae')}
                  />
                </Tooltip>
                <Tooltip title="LinkedIn">
                  <Button
                    icon={<LinkedinOutlined />}
                    shape="circle"
                    className="!rounded-button"
                    onClick={() =>
                      window.open(
                        'https://www.linkedin.com/in/%EA%B4%91%ED%95%B4-%EC%9D%B4-283aa0247/',
                      )
                    }
                  />
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Work Experience
          </h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {exp.position}
                    </h3>
                    <p className="text-lg text-gray-600">{exp.company}</p>
                  </div>
                  <span className="text-sm font-medium text-gray-500">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button
                      href={project.demoLink}
                      target="_blank"
                      className="!rounded-button"
                    >
                      Live Demo
                    </Button>
                    <Button
                      href={project.githubLink}
                      target="_blank"
                      icon={<GithubOutlined />}
                      className="!rounded-button"
                    >
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {skills.map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-6">{category.category}</h3>
                <div className="space-y-4">
                  {category.items.map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700">{item}</span>
                        <span className="text-gray-500">85%</span>
                      </div>
                      <Progress percent={85} showInfo={false} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {visible && (
        <Button
          className="fixed bottom-8 right-8 !rounded-button"
          type="primary"
          shape="circle"
          icon={<ArrowUpOutlined />}
          onClick={scrollToTop}
          size="large"
        />
      )}
    </div>
  );
};

export default Home;
