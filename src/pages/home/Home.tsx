/* eslint-disable simple-import-sort/imports */
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
import { useEffect, useState, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useTheme } from '@/components/theme/useTheme';
import { experiences } from '@/constants/experiences';
import { projects } from '@/constants/projects';
import { skills } from '@/constants/skills';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Refs for animation targets
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

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

  // GSAP Animations
  useEffect(() => {
    // Hero section animation
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
    );

    // Scroll animations
    const sections = [aboutRef, experienceRef, projectsRef, skillsRef];
    sections.forEach((ref) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          },
        );
      }
    });

    // Project cards animation
    gsap.fromTo(
      '.project-card',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 80%',
        },
      },
    );

    // Skills animation
    gsap.fromTo(
      '.skill-item',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top 80%',
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '../../../이광해_CV.pdf';
    link.download = '이광해_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    message.success('CV downloaded successfully!');
  };

  return (
    <main
      className={`min-h-screen font-pretendard ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'}`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} shadow-md z-50`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div
              className={`text-xl font-bold font-pretendard ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}
            >
              이광해
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex space-x-8">
                {['Home', 'About', 'Experience', 'Projects', 'Skills'].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className={`cursor-pointer text-sm font-medium font-pretendard ${
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
                className={`!rounded-button ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-800'}`}
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
        ref={heroRef}
      >
        <div className="absolute inset-0" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1
            className={`text-5xl font-bold font-pretendard ${theme === 'light' ? 'text-gray-900' : 'text-white'} mb-6`}
          >
            안녕하세요, 이광해 입니다!
          </h1>
          <p
            className={`text-xl font-pretendard ${theme === 'light' ? 'text-gray-400' : 'text-gray-600'} mb-8`}
          >
            Frontend Developer
          </p>
          <TypeAnimation
            className={`text-lg text-gray-500 max-w-2xl mb-12 font-noto-sans`}
            sequence={[
              `서비스의 첫인상을 설계하고, \n마지막까지 불편함 없이 이어지게 만드는 개발자`,
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
        ref={aboutRef}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className={`text-3xl font-bold text-center mb-16 font-pretendard ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}
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
                className={`text-lg font-noto-sans ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} mb-6`}
              >
                2021년부터 프론트엔드 개발자로서 웹이라는 인터페이스를 통해
                사용자와 대화해 왔습니다. 로딩 시간 50% 단축, 번들 사이즈 14%
                개선, 초기 렌더링 속도 90% 향상 등 수치로 증명된 성능 최적화
                경험은 사용자 경험을 설계하고 구현하는 데 제가 얼마나 집요한지를
                보여줍니다. 저는 언제나 &apos;더 빠르게, 더 직관적으로&apos;라는
                질문을 스스로에게 던지며, 사용자가 머무르고 싶어 하는 웹을
                만드는 개발자입니다.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  icon={<MailOutlined />}
                  className="!rounded-button font-pretendard"
                  onClick={() =>
                    (window.location.href = 'mailto:yds05074@gmail.com')
                  }
                >
                  Contact Me
                </Button>
                <Button
                  icon={<DownloadOutlined />}
                  className="!rounded-button font-pretendard"
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
        ref={experienceRef}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className={`text-3xl font-bold text-center mb-16 font-pretendard ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}
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
                    <h3 className="text-xl font-bold font-pretendard">
                      {exp.company}
                    </h3>
                    <p
                      className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} text-lg font-noto-sans`}
                    >
                      {exp.position}
                    </p>
                  </div>
                  <span className="text-sm font-medium font-pretendard">
                    {exp.period}
                  </span>
                </div>
                <p
                  className={`text-gray-700 font-noto-sans ${theme === 'light' ? 'text-gray-700' : 'text-white'}`}
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
        ref={projectsRef}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className={`text-3xl font-bold text-center mb-16 font-pretendard ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}
          >
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`project-card ${theme === 'light' ? 'bg-white' : 'bg-gray-900'} rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${theme === 'light' ? 'text-gray-900' : 'text-gray-300'}`}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-pretendard mb-2">
                    {project.title}
                  </h3>
                  <p
                    className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} mb-4 font-noto-sans`}
                  >
                    {project.description}
                  </p>
                  <div className="mb-4 text-sm">
                    {project.result.map((r, i) => (
                      <p
                        key={i}
                        className={`${theme === 'light' ? 'text-gray-800' : 'text-gray-200'} mb-1 font-noto-sans`}
                      >
                        {r}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-pretendard"
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
        ref={skillsRef}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className={`text-3xl font-bold text-center mb-16 font-pretendard ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}
          >
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {skills.map((category, index) => (
              <div
                key={index}
                className={`${theme === 'light' ? 'bg-white' : 'bg-gray-800'} rounded-lg p-8 shadow-lg ${theme === 'light' ? 'text-gray-900' : 'text-gray-300'} `}
              >
                <h3 className="text-xl font-bold mb-6 font-pretendard">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item, i) => (
                    <div key={i} className="skill-item">
                      <div className="flex justify-between mb-2">
                        <span
                          className={`text-gray-700 font-noto-sans ${theme === 'light' ? 'text-gray-700' : 'text-white'}`}
                        >
                          {item}
                        </span>
                        <span className="text-gray-500 font-pretendard">
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
        <div className="fixed right-8 bottom-8">
          <Button
            className="!rounded-button"
            type="primary"
            shape="circle"
            icon={<ArrowUpOutlined />}
            onClick={scrollToTop}
            size="large"
          />
        </div>
      )}
    </main>
  );
};

export default Home;
