import { useRef } from 'react';

import { experiences } from '@/constants/experiences';

export function ExperienceSection() {
  const experienceRef = useRef(null);

  return (
    <section id="experience" className={`py-20`} ref={experienceRef}>
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
              <p className={` font-noto-sans text-gray-400`}>
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
