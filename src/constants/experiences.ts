export type Experience = {
  company: string;
  position: string;
  period: string;
  description: string;
};

export const experiences: Experience[] = [
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
    description: 'AI 솔루션 Frontend 개발',
  },
  {
    company: '애자일소다',
    position: '인턴',
    period: '2021.12.20 - 2022.06.30',
    description: "강화학습 MLOps 솔루션 'BakingSoDA' Frontend 개발",
  },
];
