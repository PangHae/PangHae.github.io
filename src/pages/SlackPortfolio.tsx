import { useState } from 'react';
import {
  HomeOutlined,
  ProjectOutlined,
  StarOutlined,
  ToolOutlined,
  UserOutlined,
} from '@ant-design/icons';

import { AboutSection } from '@/components/sections/About';
import { ExperienceSection } from '@/components/sections/Experience';
import { HomeSection } from '@/components/sections/Home';
import { ProjectsSection } from '@/components/sections/Project';
import { SkillsSection } from '@/components/sections/Skills';

const channels = [
  { key: 'home', label: 'home', icon: <HomeOutlined /> },
  { key: 'about', label: 'about', icon: <UserOutlined /> },
  { key: 'experience', label: 'experience', icon: <StarOutlined /> },
  { key: 'projects', label: 'projects', icon: <ProjectOutlined /> },
  { key: 'skills', label: 'skills', icon: <ToolOutlined /> },
];

export default function SlackPortfolio() {
  const [active, setActive] = useState('home');

  return (
    <div className="flex h-screen bg-[#19171c] font-poppins">
      {/* Sidebar */}
      {/* <aside className="w-16 flex flex-col"></aside> */}
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
        className={`flex-1 bg-[#19171c] p-6 ${active === 'home' ? '' : ' overflow-y-auto'}`}
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
