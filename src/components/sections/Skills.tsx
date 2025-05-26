import { Progress } from 'antd';

import { skills } from '@/constants/skills';

export function SkillsSection() {
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
