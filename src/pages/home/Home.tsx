import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
  ArrowUpOutlined,
  DownloadOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  MoonOutlined,
  SunOutlined,
} from '@ant-design/icons';
import { Button, message, Progress, Tooltip } from 'antd';

import { useTheme } from '@/components/theme/useTheme';
import { experiences } from '@/constants/experiences';
import { projects } from '@/constants/projects';
import { skills } from '@/constants/skills';

const Home = () => {
  const { theme, toggleTheme } = useTheme();
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

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '../assets/이광해_CV.pdf';
    link.download = '이광해_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    message.success('CV downloaded successfully!');
  };

  return (
    <div
      className={`min-h-screen ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'}`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} shadow-md z-50`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div
              className={`text-xl font-bold ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}
            >
              Portfolio
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex space-x-8">
                {['Home', 'About', 'Experience', 'Projects', 'Skills'].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className={`cursor-pointer text-sm font-medium ${
                        activeSection === item.toLowerCase()
                          ? 'text-blue-600'
                          : theme === 'light'
                            ? 'text-gray-600 hover:text-blue-600'
                            : 'text-gray-300 hover:text-blue-400'
                      }`}
                    >
                      {item}
                    </a>
                  ),
                )}
              </div>
              <Button
                onClick={toggleTheme}
                className={`!rounded-button ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-800'}`} // Changed 'bg-gray-700' to 'bg-gray-800' for better dark theme visibility
                shape="circle"
              >
                {theme === 'light' ? <MoonOutlined /> : <SunOutlined />}
              </Button>
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
        <div className="absolute inset-0" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1
            className={`text-5xl font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'} mb-6`}
          >
            안녕하세요, 이광해 입니다!
          </h1>
          <p
            className={`text-xl ${theme === 'light' ? 'text-gray-400' : 'text-gray-600'} mb-8`}
          >
            Frontend Developer
          </p>
          <TypeAnimation
            className={`text-lg text-gray-500 max-w-2xl mb-12`}
            sequence={[
              `사용자가 만족하고 사용할 수 있는,\n사용자가 다시 사용하고 싶은 서비스를 만들고 싶은 개발자`,
            ]}
            style={{
              display: 'block',
              whiteSpace: 'pre-line',
              height: '49px',
            }}
          />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-20 ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className={`text-3xl font-bold text-center mb-16 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}
          >
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <img
                src="../../../images/me.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p
                className={`text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} mb-6`}
              >
                2021년부터 Frontend 개발자로서 사용자 경험을 최우선으로 생각하며
                웹 애플리케이션 개발에 매진해왔습니다. 여러 프로젝트를
                진행하면서 로딩 시간을 50% 단축, 번들 사이즈를 14% 개선,
                컴포넌트 초기 렌더링 속도를 90% 향상시키는 등 성능 최적화를 통해
                사용자 만족도를 크게 높였습니다. 효율적이고 직관적인 서비스를
                제공하기 위해 끊임없이 고민하며, 기술적 도전과 문제 해결을
                즐기는 개발자입니다.
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
      <section
        id="experience"
        className={`py-20 ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className={`text-3xl font-bold text-center mb-16 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}
          >
            Work Experience
          </h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`${theme === 'light' ? 'bg-white' : 'bg-gray-800'} rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow ${theme === 'light' ? 'text-gray-900' : 'text-gray-300'}`}
              >
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.company}</h3>
                    <p
                      className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} text-lg`}
                    >
                      {exp.position}
                    </p>
                  </div>
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
                <p
                  className={`text-gray-700 ${theme === 'light' ? 'text-gray-700' : 'text-white'}`}
                >
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-20 ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className={`text-3xl font-bold text-center mb-16 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}
          >
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${theme === 'light' ? 'bg-white' : 'bg-gray-900'} rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${theme === 'light' ? 'text-gray-900' : 'text-gray-300'}`}
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
                  <p
                    className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} mb-4`}
                  >
                    {project.description}
                  </p>
                  <div className="mb-4 text-sm">
                    {project.result.map((r, i) => (
                      <p
                        key={i}
                        className={`${theme === 'light' ? 'text-gray-800' : 'text-gray-200'} mb-1`}
                      >
                        {r}
                      </p>
                    ))}
                  </div>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`py-20 ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className={`text-3xl font-bold text-center mb-16 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}
          >
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {skills.map((category, index) => (
              <div
                key={index}
                className={`${theme === 'light' ? 'bg-white' : 'bg-gray-800'} rounded-lg p-8 shadow-lg ${theme === 'light' ? 'text-gray-900' : 'text-gray-300'} `}
              >
                <h3 className="text-xl font-bold mb-6">{category.category}</h3>
                <div className="space-y-4">
                  {category.items.map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span
                          className={`text-gray-700 ${theme === 'light' ? 'text-gray-700' : 'text-white'}`}
                        >
                          {item}
                        </span>
                        <span className="text-gray-500">
                          {`${category.levels[i]}%`}
                        </span>
                      </div>
                      <Progress percent={category.levels[i]} showInfo={false} />
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
