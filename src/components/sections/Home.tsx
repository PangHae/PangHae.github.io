import { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';

export function HomeSection() {
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
