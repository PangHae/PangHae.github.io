import { useRef } from 'react';

import { educations, experiences } from '@/constants/experiences';

export function ExperienceSection() {
  const experienceRef = useRef(null);

  return (
    <section
      id="experience"
      className={`flex flex-col gap-12 py-20`}
      ref={experienceRef}
    >
      <div className="max-w-7xl px-4">
        <h2
          className={`text-3xl font-bold text-center mb-16 font-pretendard text-white`}
        >
          Career
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
                  {exp.position && (
                    <p className={`text-gray-400 text-lg font-noto-sans`}>
                      {exp.position}
                    </p>
                  )}
                </div>
                <span className="text-sm font-medium font-pretendard">
                  {exp.period}
                </span>
              </div>
              <p className={` font-noto-sans text-gray-200`}>
                {exp.description}
                {exp.details && (
                  <ul className="list-disc list-inside text-gray-400">
                    {exp.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl px-4">
        <h2
          className={`text-3xl font-bold text-center mb-16 font-pretendard text-white`}
        >
          Education
        </h2>
        <div className="space-y-4">
          {educations.map((exp, index) => (
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
              <p className={` font-noto-sans text-gray-200`}>
                {exp.description}
                {exp.details && (
                  <ul className="list-disc list-inside text-gray-400">
                    {exp.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
