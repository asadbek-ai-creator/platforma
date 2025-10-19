'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { lecturesData } from '@/lib/data/lecturesData';
import { presetTopics } from '@/lib/data/presetTopics';
import { downloadLessonAsHTML } from '@/lib/utils/fileDownloader';

interface User {
  id: string;
  name: string;
  role: string;
}

export default function StudentPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('lesson-planner');

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/auth/user');
      const data = await res.json();

      // Only allow students
      if (!data.user || data.user.role !== 'STUDENT') {
        router.push('/login');
        return;
      }

      setUser(data.user);
    } catch (error) {
      console.error('Auth check failed:', error);
      router.push('/login');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/session', { method: 'DELETE' });
      localStorage.removeItem('user');
      router.push('/login');
      router.refresh();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'lesson-planner':
        return <LessonPlannerSection />;
      case 'tools':
        return <ToolsSection />;
      case 'assessment':
        return <AssessmentSection />;
      case 'resources':
        return <ResourcesSection />;
      case 'community':
        return <CommunitySection />;
      default:
        return <LessonPlannerSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-white/95 backdrop-blur-lg shadow-lg m-4 md:m-8 rounded-3xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2 md:mb-4">
              4+1 Formula Platform
            </h1>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Raqamli ta'lim muhitida multimodal yondashuvni tatbiq etish uchun interaktiv platforma
            </p>
            <p className="text-sm text-gray-500 mt-2">Xush kelibsiz, {user?.name}!</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all shadow-lg hover:shadow-xl"
          >
            Chiqish
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="mx-4 md:mx-8 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5">
          <NavCard
            id="lesson-planner"
            title="🎯 Dars Rejalashtirish"
            description="5 daqiqada multimodal dars yarating"
            isActive={activeSection === 'lesson-planner'}
            onClick={() => setActiveSection('lesson-planner')}
          />
          <NavCard
            id="tools"
            title="🛠️ Raqamli Vositalar"
            description="Bepul va samarali toollar"
            isActive={activeSection === 'tools'}
            onClick={() => setActiveSection('tools')}
          />
          <NavCard
            id="assessment"
            title="📊 Baholash Tizimlari"
            description="Multimodal assessment yarating"
            isActive={activeSection === 'assessment'}
            onClick={() => setActiveSection('assessment')}
          />
          <NavCard
            id="resources"
            title="📚 Resurs Kutubxonasi"
            description="Tayyor materiallar va shablonlar"
            isActive={activeSection === 'resources'}
            onClick={() => setActiveSection('resources')}
          />
          <NavCard
            id="community"
            title="👥 Hamjamiyat"
            description="O'qituvchilar forum va yordam"
            isActive={activeSection === 'community'}
            onClick={() => setActiveSection('community')}
          />
        </div>
      </div>

      {/* Content */}
      <div className="mx-4 md:mx-8 mb-8">
        {renderActiveSection()}
      </div>
    </div>
  );
}

// NavCard Component
function NavCard({ id, title, description, isActive, onClick }: any) {
  return (
    <div
      onClick={() => onClick(id)}
      className={`cursor-pointer p-6 rounded-2xl transition-all transform hover:scale-105 ${
        isActive
          ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-2xl'
          : 'bg-white/95 backdrop-blur-lg text-gray-800 hover:shadow-xl'
      }`}
    >
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className={`text-sm ${isActive ? 'text-white/90' : 'text-gray-600'}`}>
        {description}
      </p>
    </div>
  );
}

// Lesson Planner Section
function LessonPlannerSection() {
  const [subject, setSubject] = useState('tarbiya');
  const [lessonTopic, setLessonTopic] = useState('');
  const [customTopic, setCustomTopic] = useState('');
  const [lessonObjective, setLessonObjective] = useState('');
  const [selectedComponents, setSelectedComponents] = useState<Set<string>>(new Set());
  const [lessonOutput, setLessonOutput] = useState('');
  const [showOutput, setShowOutput] = useState(false);

  const components = [
    { id: 'visual', title: '📺 Vizual', emoji: '📺', color: 'from-blue-500 to-blue-600' },
    { id: 'audio', title: '🎵 Audio', emoji: '🎵', color: 'from-green-500 to-green-600' },
    { id: 'kinesthetic', title: '🤲 Kinestetik', emoji: '🤲', color: 'from-yellow-500 to-yellow-600' },
    { id: 'reading', title: '✍️ O\'qish/Yozish', emoji: '✍️', color: 'from-purple-500 to-purple-600' },
    { id: 'digital', title: '💻 Raqamli', emoji: '💻', color: 'from-pink-500 to-pink-600' },
  ];

  const toggleComponent = (id: string) => {
    const newSet = new Set(selectedComponents);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSelectedComponents(newSet);
  };

  const progress = (selectedComponents.size / 5) * 100;

  return (
    <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-6 md:p-10 shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">5 Daqiqalik Tezkor Dars Rejalashtirish</h2>

      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 mb-6">
        {/* Subject */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Fan nomi:</label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-3 border-2 border-gray-200 rounded-lg text-sm transition-colors focus:border-purple-500 focus:outline-none"
          >
            <option value="tarbiya">Boshlang'ich ta'limda tarbiya</option>
            <option value="matematika">Matematika</option>
            <option value="ona-tili">Ona tili</option>
            <option value="ingliz-tili">Ingliz tili</option>
          </select>
        </div>

        {/* Topic */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Mavzu:</label>
          <select
            value={lessonTopic}
            onChange={(e) => setLessonTopic(e.target.value)}
            className="w-full p-3 border-2 border-gray-200 rounded-lg text-sm transition-colors focus:border-purple-500 focus:outline-none"
          >
            <option value="">Mavzuni tanlang...</option>
            <optgroup label="Ma'ruzalar (Batafsil)">
              {lecturesData.map((lecture: any) => (
                <option key={lecture.id} value={lecture.id}>
                  {lecture.title}
                </option>
              ))}
            </optgroup>
            <optgroup label="Tayyor Mavzular">
              {Object.keys(presetTopics).map((key) => (
                <option key={key} value={key}>
                  {(presetTopics as any)[key].title}
                </option>
              ))}
            </optgroup>
            <option value="custom">Boshqa mavzu...</option>
          </select>
          {lessonTopic === 'custom' && (
            <input
              type="text"
              value={customTopic}
              onChange={(e) => setCustomTopic(e.target.value)}
              placeholder="O'z mavzuingizni kiriting..."
              className="w-full p-3 border-2 border-gray-200 rounded-lg text-sm transition-colors focus:border-purple-500 focus:outline-none mt-2"
            />
          )}
        </div>

        {/* Objective */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Dars maqsadi:</label>
          <textarea
            value={lessonObjective}
            onChange={(e) => setLessonObjective(e.target.value)}
            rows={3}
            placeholder="SMART maqsadlarni yozing..."
            className="w-full p-3 border-2 border-gray-200 rounded-lg text-sm transition-colors focus:border-purple-500 focus:outline-none resize-y"
          />
        </div>

        {/* Components */}
        <div className="mb-6">
          <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-800">4+1 Komponentlarni tanlang:</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {components.map((component) => (
              <div
                key={component.id}
                onClick={() => toggleComponent(component.id)}
                className={`cursor-pointer p-4 md:p-6 rounded-xl transition-all transform hover:scale-105 text-center ${
                  selectedComponents.has(component.id)
                    ? `bg-gradient-to-br ${component.color} text-white shadow-xl`
                    : 'bg-white border-2 border-gray-200 hover:border-purple-300'
                }`}
              >
                <div className="text-2xl md:text-3xl mb-2">{component.emoji}</div>
                <div className="text-xs md:text-sm font-medium">{component.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex items-center justify-center">
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 45} ${2 * Math.PI * 45}`}
                  strokeDashoffset={2 * Math.PI * 45 * (1 - progress / 100)}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl md:text-2xl font-bold text-gray-800">{Math.round(progress)}%</span>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-2">
            {selectedComponents.size} / 5 komponent tanlandi
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center">
          <button
            onClick={handleGenerateLesson}
            className="px-6 md:px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            Dars Rejasini Yaratish
          </button>
          <button
            onClick={handleClearForm}
            className="px-6 md:px-8 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-all"
          >
            Tozalash
          </button>
        </div>
      </div>

      {/* Lesson Output */}
      {showOutput && (
        <div className="mt-8 bg-white rounded-2xl p-6 md:p-8 shadow-lg">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h3 className="text-2xl font-bold text-gray-800">Yaratilgan Dars Rejasi</h3>
            <div className="flex gap-3">
              <button
                onClick={() => downloadLessonAsHTML(lessonOutput)}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-all shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Yuklab olish
              </button>
              <button
                onClick={() => setShowOutput(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl px-2"
              >
                ×
              </button>
            </div>
          </div>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: lessonOutput }}
          />
        </div>
      )}
    </div>
  );

  function handleGenerateLesson() {
    // Validation
    if (!lessonTopic || selectedComponents.size === 0) {
      alert('Iltimos, mavzu tanlang va kamida bitta komponent belgilang!');
      return;
    }

    // Get the topic title
    let topicTitle = '';
    let selectedLecture: any = null;
    let selectedPreset: any = null;

    if (lessonTopic.startsWith('maruza-')) {
      selectedLecture = lecturesData.find((l: any) => l.id === lessonTopic);
      topicTitle = selectedLecture?.title || lessonTopic;
    } else if (lessonTopic === 'custom') {
      topicTitle = customTopic;
    } else {
      selectedPreset = (presetTopics as any)[lessonTopic];
      topicTitle = selectedPreset?.title || lessonTopic;
    }

    // Generate lesson HTML
    let html = `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-xl">
          <h2 class="text-2xl font-bold mb-2">${topicTitle}</h2>
          <p class="text-sm opacity-90">Fan: ${getSubjectName(subject)}</p>
        </div>

        <div class="bg-blue-50 p-6 rounded-xl">
          <h3 class="text-lg font-bold text-gray-800 mb-2">🎯 Dars Maqsadi:</h3>
          <p class="text-gray-700">${lessonObjective || selectedLecture?.objective || selectedPreset?.objective || 'Maqsad kiritilmagan'}</p>
        </div>
    `;

    // Add selected components
    if (selectedLecture) {
      html += `<div class="space-y-4">`;
      selectedLecture.sections?.forEach((section: any) => {
        if (selectedComponents.has(section.componentType)) {
          html += `
            <div class="bg-white border-2 border-purple-200 p-6 rounded-xl">
              <h4 class="text-xl font-bold text-purple-600 mb-3">${section.sectionTitle}</h4>
              <p class="text-sm text-gray-600 mb-4">⏱ ${section.duration}</p>
              ${section.contentBlocks?.map((block: any) => `
                <div class="mb-4">
                  <h5 class="font-bold text-gray-800 mb-2">${block.heading}</h5>
                  <p class="text-gray-600 text-sm mb-2">${block.description}</p>
                  <ul class="list-disc list-inside space-y-1">
                    ${block.details?.map((detail: string) => `<li class="text-gray-700 text-sm">${detail}</li>`).join('') || ''}
                  </ul>
                </div>
              `).join('') || ''}
            </div>
          `;
        }
      });
      html += `</div>`;
    } else {
      // For preset topics and custom
      html += `<div class="grid grid-cols-1 md:grid-cols-2 gap-4">`;

      Array.from(selectedComponents).forEach((componentId) => {
        const component = components.find(c => c.id === componentId);
        const activity = selectedPreset?.activities?.[componentId] || `${component?.title} faoliyati`;

        html += `
          <div class="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
            <h4 class="text-lg font-bold text-gray-800 mb-3">${component?.emoji} ${component?.title}</h4>
            <p class="text-gray-700 text-sm">${activity}</p>
          </div>
        `;
      });

      html += `</div>`;
    }

    // Add cultural elements if available
    if (selectedPreset?.culturalElements) {
      html += `
        <div class="bg-green-50 p-6 rounded-xl">
          <h4 class="text-lg font-bold text-gray-800 mb-3">🌍 Milliy-madaniy elementlar:</h4>
          <p class="text-gray-700">${selectedPreset.culturalElements.join(', ')}</p>
        </div>
      `;
    }

    // Add assessment
    if (selectedPreset?.assessment || selectedLecture) {
      html += `
        <div class="bg-yellow-50 p-6 rounded-xl">
          <h4 class="text-lg font-bold text-gray-800 mb-3">📊 Baholash:</h4>
          <p class="text-gray-700">${selectedPreset?.assessment || 'Multimodal baholash usullari qo\'llaniladi'}</p>
        </div>
      `;
    }

    html += `
        <div class="text-center pt-6 border-t-2 border-gray-200">
          <p class="text-sm text-gray-500">
            Dars rejasi 4+1 Formula asosida yaratildi<br/>
            Tanlangan komponentlar: ${selectedComponents.size} / 5
          </p>
        </div>
      </div>
    `;

    setLessonOutput(html);
    setShowOutput(true);
  }

  function handleClearForm() {
    setLessonTopic('');
    setCustomTopic('');
    setLessonObjective('');
    setSelectedComponents(new Set());
    setShowOutput(false);
    setLessonOutput('');
  }

  function getSubjectName(subjectId: string) {
    const subjects: Record<string, string> = {
      'tarbiya': 'Boshlang\'ich ta\'limda tarbiya',
      'matematika': 'Matematika',
      'ona-tili': 'Ona tili',
      'ingliz-tili': 'Ingliz tili'
    };
    return subjects[subjectId] || subjectId;
  }
}

// Tools Section
function ToolsSection() {
  const toolCategories = [
    {
      title: '📺 Vizual Vositalar',
      tools: [
        { name: 'Canva Education', desc: 'Professional dizayn', url: 'https://canva.com' },
        { name: 'Google Drawings', desc: 'Oddiy diagrammalar', url: 'https://drawings.google.com' },
        { name: 'Unsplash', desc: 'Bepul fotografiyalar', url: 'https://unsplash.com' },
      ],
    },
    {
      title: '🎵 Audio Vositalar',
      tools: [
        { name: 'Audacity', desc: 'Audio tahrirlash', url: 'https://audacityteam.org' },
        { name: 'Anchor.fm', desc: 'Podcast yaratish', url: 'https://anchor.fm' },
        { name: 'Freesound', desc: 'Bepul audio effektlar', url: 'https://freesound.org' },
      ],
    },
    {
      title: '🤲 Kinestetik Vositalar',
      tools: [
        { name: 'Tinkercad', desc: '3D modellashtirish', url: 'https://tinkercad.com' },
        { name: 'Scratch', desc: 'Dasturlashni o\'rganish', url: 'https://scratch.mit.edu' },
        { name: 'PhET', desc: 'Interaktiv simulyatsiyalar', url: 'https://phet.colorado.edu' },
      ],
    },
    {
      title: '✍️ Yozish Vositalar',
      tools: [
        { name: 'Google Docs', desc: 'Hamkorlik yozish', url: 'https://docs.google.com' },
        { name: 'Grammarly', desc: 'Grammatika tekshirish', url: 'https://grammarly.com' },
        { name: 'Hemingway', desc: 'Matn soddaligi', url: 'https://hemingwayapp.com' },
      ],
    },
    {
      title: '💻 Raqamli Platforma',
      tools: [
        { name: 'Google Classroom', desc: 'Sinf boshqaruvi', url: 'https://classroom.google.com' },
        { name: 'Kahoot', desc: 'Interaktiv quiz', url: 'https://kahoot.com' },
        { name: 'Padlet', desc: 'Hamkorlik doskasi', url: 'https://padlet.com' },
      ],
    },
  ];

  return (
    <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-6 md:p-10 shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Bepul Raqamli Vositalar</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {toolCategories.map((category, idx) => (
          <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold mb-4 text-gray-800">{category.title}</h3>
            <div className="space-y-3">
              {category.tools.map((tool, toolIdx) => (
                <div key={toolIdx} className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-800">{tool.name}</p>
                  <p className="text-sm text-gray-600 mb-2">{tool.desc}</p>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-purple-100 hover:bg-purple-200 px-4 py-1 rounded-full text-purple-700 text-sm transition-colors"
                  >
                    Ochish →
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Assessment Section
function AssessmentSection() {
  const [assessComponent, setAssessComponent] = useState('visual');
  const [assessType, setAssessType] = useState('formative');

  return (
    <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-6 md:p-10 shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Multimodal Baholash Yaratgich</h2>

      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Baholanayotgan komponent:</label>
          <select
            value={assessComponent}
            onChange={(e) => setAssessComponent(e.target.value)}
            className="w-full p-3 border-2 border-gray-200 rounded-lg text-sm transition-colors focus:border-purple-500 focus:outline-none"
          >
            <option value="visual">Vizual ko'nikmalar</option>
            <option value="audio">Audio ko'nikmalar</option>
            <option value="kinesthetic">Kinestetik ko'nikmalar</option>
            <option value="reading">O'qish/Yozish ko'nikmalar</option>
            <option value="digital">Raqamli ko'nikmalar</option>
            <option value="integrated">Integratsiyalashgan baholash</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Baholash turi:</label>
          <select
            value={assessType}
            onChange={(e) => setAssessType(e.target.value)}
            className="w-full p-3 border-2 border-gray-200 rounded-lg text-sm transition-colors focus:border-purple-500 focus:outline-none"
          >
            <option value="formative">Shakllanish baholash</option>
            <option value="summative">Yakuniy baholash</option>
            <option value="peer">Tengdoshlar baholovi</option>
            <option value="self">O'z-o'zini baholash</option>
          </select>
        </div>

        <button className="w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl">
          Baholash Yaratish
        </button>
      </div>
    </div>
  );
}

// Resources Section
function ResourcesSection() {
  const resources = [
    { title: '📝 Dars rejasi shablonlari', desc: '50+ tayyor shablon', count: '50+' },
    { title: '🎨 Vizual materiallar', desc: 'Infografikalar, diagrammalar', count: '200+' },
    { title: '📊 Baholash vositalari', desc: 'Rubriklar, checklistlar', count: '30+' },
    { title: '🎯 Faoliyat banki', desc: 'Multimodal mashqlar', count: '100+' },
    { title: '📚 Metodik qo\'llanmalar', desc: 'PDF formatda', count: '25+' },
    { title: '🎬 Video darsliklar', desc: 'Step-by-step yo\'riqnomalar', count: '40+' },
  ];

  return (
    <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-6 md:p-10 shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Resurs Kutubxonasi</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 hover:shadow-xl transition-all cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800 flex-1">{resource.title}</h3>
              <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                {resource.count}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{resource.desc}</p>
            <button className="w-full bg-white hover:bg-purple-50 text-purple-600 font-medium py-2 rounded-lg transition-colors group-hover:bg-purple-600 group-hover:text-white">
              Ko'rish
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Community Section
function CommunitySection() {
  const discussions = [
    { title: 'Multimodal yondashuvni qanday boshlash kerak?', author: 'Dilnoza Karimova', replies: 12, time: '2 soat oldin' },
    { title: 'Raqamli vositalardan samarali foydalanish', author: 'Anvar Toshmatov', replies: 8, time: '5 soat oldin' },
    { title: 'Kinestetik faoliyatlar uchun g\'oyalar', author: 'Malika Rahimova', replies: 15, time: '1 kun oldin' },
  ];

  return (
    <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-6 md:p-10 shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">O'qituvchilar Hamjamiyati</h2>

      <div className="mb-8">
        <button className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl">
          + Yangi Savol Berish
        </button>
      </div>

      <div className="space-y-4">
        {discussions.map((discussion, idx) => (
          <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer">
            <h3 className="text-lg font-bold text-gray-800 mb-2">{discussion.title}</h3>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <span>👤 {discussion.author}</span>
              <span>💬 {discussion.replies} javob</span>
              <span>🕐 {discussion.time}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-6 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Yordam kerakmi?</h3>
        <p className="text-gray-600 mb-4">Bizning jamoamiz sizga yordam berishga tayyor!</p>
        <button className="px-6 py-2 bg-white text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-colors">
          Texnik Yordam
        </button>
      </div>
    </div>
  );
}
