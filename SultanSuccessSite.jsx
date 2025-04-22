import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";

const sections = [
  {
    id: 'home',
    title: 'Добро пожаловать в мир Султана',
    content: 'Здесь начинается история успеха. Погрузись в атмосферу красоты, достижений и стиля жизни настоящего лидера.',
    image: '/117b1098-7857-4ad0-a0f4-19908c0cef64.jpg'
  },
  {
    id: 'about',
    title: 'О Султане',
    content: 'Султан — человек, который сам построил свою империю. От первых шагов до вершины успеха, его путь вдохновляет тысячи.',
  },
  {
    id: 'lifestyle',
    title: 'Стиль жизни',
    content: 'Роскошные автомобили, путешествия, элитные мероприятия и безупречный вкус. Султан живет красиво и уверенно.',
  },
  {
    id: 'projects',
    title: 'Проекты',
    content: 'От стартапов до масштабных бизнесов — Султан реализует только амбициозные идеи и всегда доводит до успеха.',
  },
  {
    id: 'contacts',
    title: 'Контакты',
    content: 'Свяжись напрямую: Telegram — @sultan4ik227'
  }
];

export default function SultanSuccessSite() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <nav className="flex justify-center gap-4 p-4 bg-gray-900 shadow-lg sticky top-0 z-50">
        {sections.map((section) => (
          <Button key={section.id} onClick={() => setActiveSection(section.id)} variant="ghost">
            {section.title}
          </Button>
        ))}
      </nav>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center px-6 py-20 space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 drop-shadow-lg">
            {sections.find(s => s.id === activeSection)?.title}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            {sections.find(s => s.id === activeSection)?.content}
          </p>
          {activeSection === 'home' && (
            <motion.img
              src={sections.find(s => s.id === 'home')?.image}
              alt="Султан на вершине"
              className="rounded-2xl shadow-2xl mt-10 max-h-[70vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
