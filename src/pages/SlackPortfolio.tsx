import { useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
  DownloadOutlined,
  GithubOutlined,
  HomeOutlined,
  LinkedinOutlined,
  MailOutlined,
  ProjectOutlined,
  StarOutlined,
  ToolOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, message, Progress, Tooltip } from 'antd';

import { experiences } from '@/constants/experiences';
import { projects } from '@/constants/projects';
import { skills } from '@/constants/skills';

const channels = [
  { key: 'home', label: 'home', icon: <HomeOutlined /> },
  { key: 'about', label: 'about', icon: <UserOutlined /> },
  { key: 'experience', label: 'experience', icon: <StarOutlined /> },
  { key: 'projects', label: 'projects', icon: <ProjectOutlined /> },
  { key: 'skills', label: 'skills', icon: <ToolOutlined /> },
];

function HomeSection() {
  const heroRef = useRef(null);

  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center h-full bg-transparent overflow-hidden"
      ref={heroRef}
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h1 className={`text-5xl font-bold font-pretendard text-white mb-6`}>
          안녕하세요, 이광해 입니다!
        </h1>
        <p className={`text-xl font-pretendard text-gray-400 mb-8`}>
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
  );
}
function AboutSection() {
  const aboutRef = useRef(null);

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
    <section id="about" className={`py-20`} ref={aboutRef}>
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className={`text-3xl font-bold text-center mb-16 font-pretendard text-white`}
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
            <p className={`text-lg font-noto-sans text-gray-300 mb-6`}>
              2021년부터 프론트엔드 개발자로서 웹이라는 인터페이스를 통해
              사용자와 대화해 왔습니다. 로딩 시간 50% 단축, 번들 사이즈 14%
              개선, 초기 렌더링 속도 90% 향상 등 수치로 증명된 성능 최적화
              경험은 사용자 경험을 설계하고 구현하는 데 제가 얼마나 집요한지를
              보여줍니다. 저는 언제나 &apos;더 빠르게, 더 직관적으로&apos;라는
              질문을 스스로에게 던지며, 사용자가 머무르고 싶어 하는 웹을 만드는
              개발자입니다.
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
  );
}
function ExperienceSection() {
  const experienceRef = useRef(null);

  return (
    <section id="experience" className={`py-20 pb-0`} ref={experienceRef}>
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className={`text-3xl font-bold text-center mb-16 font-pretendard text-white`}
        >
          Work Experience
        </h2>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow text-gray-200 bg-[#23272f] border border-[#36393f]"
            >
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold font-pretendard">
                    {exp.company}
                  </h3>
                  <p className={`text-gray-400 text-lg font-noto-sans`}>
                    {exp.position}
                  </p>
                </div>
                <span className="text-sm font-medium font-pretendard">
                  {exp.period}
                </span>
              </div>
              <p className={`text-gray-700 font-noto-sans text-white`}>
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 font-pretendard text-white">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-[#23272f] border border-[#36393f] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow text-gray-200"
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
                  {project.result.map((r, i) => (
                    <p key={i} className="text-[#eaeaea] mb-1 font-noto-sans">
                      {r}
                    </p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#393c43] text-[#eaeaea] rounded-full text-sm font-pretendard"
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
  );
}
function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 font-pretendard text-white">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {skills.map((category, index) => (
            <div
              key={index}
              className="rounded-lg p-8 shadow-lg bg-[#23272f] border border-[#36393f] text-gray-200"
            >
              <h3 className="text-xl font-bold mb-6 font-pretendard text-white">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((item, i) => (
                  <div key={i} className="skill-item">
                    <div className="flex justify-between mb-2">
                      <span className="text-[#eaeaea] font-noto-sans">
                        {item}
                      </span>
                      <span className="text-[#bcbcc0] font-pretendard">
                        {`${category.levels[i]}%`}
                      </span>
                    </div>
                    <Progress
                      percent={category.levels[i]}
                      showInfo={false}
                      strokeColor="#611f69"
                      trailColor="white"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SlackPortfolio() {
  const [active, setActive] = useState('home');

  return (
    <div className="flex h-screen bg-[#19171c] font-poppins">
      {/* Sidebar */}
      <aside className="w-64 flex flex-col bg-[#1a1d21]">
        <div className="h-16 flex items-center px-6 text-lg font-bold text-white border-b border-[#23272f] bg-[#350d36]">
          FE 개발자 이광해
        </div>
        <nav className="flex-1 py-4 bg-[#23272f]">
          <div className="text-xs text-gray-400 px-6 mb-2">채널</div>
          {channels.map((ch) => (
            <div
              key={ch.key}
              className={`flex items-center gap-2 px-6 py-2 cursor-pointer rounded-lg mb-1
                ${
                  active === ch.key
                    ? 'bg-[#611f69] text-white font-bold'
                    : 'text-gray-300 hover:bg-[#3f0e40] hover:text-white'
                }
              `}
              onClick={() => setActive(ch.key)}
            >
              {ch.icon}
              <span># {ch.label}</span>
            </div>
          ))}
        </nav>
      </aside>
      {/* Main Content */}
      <main
        className={`flex-1 bg-[#19171c] p-10 ${active === 'home' ? '' : ' overflow-y-auto'}`}
      >
        {active === 'home' && <HomeSection />}
        {active === 'about' && <AboutSection />}
        {active === 'experience' && <ExperienceSection />}
        {active === 'projects' && <ProjectsSection />}
        {active === 'skills' && <SkillsSection />}
      </main>
    </div>
  );
}
