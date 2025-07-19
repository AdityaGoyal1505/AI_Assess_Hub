import React from 'react';
import { Brain, User, BookOpen, BarChart3, Sparkles } from 'lucide-react';

export default function Header({ currentPage, onNavigate }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Sparkles },
    { id: 'assessments', label: 'Assessments', icon: BarChart3 },
    { id: 'results', label: 'Results', icon: User },
    { id: 'learn', label: 'Learn', icon: BookOpen }
  ];

  return (
    <header className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-2xl border-b border-purple-500/20 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-3 rounded-2xl shadow-lg transform rotate-3 hover:rotate-6 transition-transform duration-300">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI Assess Hub
              </h1>
              <p className="text-xs text-purple-300">Intelligent Skills Assessment</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={`relative flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group ${
                  currentPage === id
                    ? 'text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg'
                    : 'text-purple-200 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className={`h-4 w-4 transition-transform duration-300 ${currentPage === id ? 'scale-110' : 'group-hover:scale-110'}`} />
                <span>{label}</span>
                {currentPage === id && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-yellow-400 rounded-full"></div>
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-sm text-purple-300">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>AI Active</span>
            </div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Profile
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}