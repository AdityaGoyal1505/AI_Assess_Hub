import React, { useState } from 'react';
import { Clock, Users, Target, Brain, Code, User, ChevronRight, Star } from 'lucide-react';
import { mockAssessments } from '../data/mockData';

export default function AssessmentsPage({ onNavigate, onStartAssessment }) {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const filteredAssessments = mockAssessments.filter(assessment => {
    const typeMatch = selectedType === 'all' || assessment.type === selectedType;
    const difficultyMatch = selectedDifficulty === 'all' || assessment.difficulty === selectedDifficulty;
    return typeMatch && difficultyMatch;
  });

  const getTypeIcon = (type) => {
    switch (type) {
      case 'soft-skills': return User;
      case 'domain-skills': return Code;
      case 'psychometric': return Brain;
      default: return Target;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'soft-skills': return 'from-blue-500 to-cyan-500';
      case 'domain-skills': return 'from-emerald-500 to-teal-500';
      case 'psychometric': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-600 bg-green-100';
      case 'intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Choose Your Assessment
          </h1>
          <p className="text-xl text-purple-200">
            Select from our comprehensive range of AI-powered assessments to evaluate your skills and unlock your potential.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-purple-500/20 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-purple-200 mb-3">Assessment Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full p-4 bg-slate-700/50 border border-purple-500/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-400 text-white backdrop-blur-lg"
              >
                <option value="all">All Types</option>
                <option value="soft-skills">Soft Skills</option>
                <option value="domain-skills">Domain Skills</option>
                <option value="psychometric">Psychometric</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-purple-200 mb-3">Difficulty Level</label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full p-4 bg-slate-700/50 border border-purple-500/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-400 text-white backdrop-blur-lg"
              >
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>

        {/* Assessment Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredAssessments.map((assessment) => {
            const TypeIcon = getTypeIcon(assessment.type);
            return (
              <div
                key={assessment.id}
                className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 border border-purple-500/20 hover:border-purple-400/40 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`bg-gradient-to-r ${getTypeColor(assessment.type)} p-4 rounded-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                      <TypeIcon className="h-8 w-8 text-white" />
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-bold backdrop-blur-lg ${getDifficultyColor(assessment.difficulty)}`}>
                      {assessment.difficulty}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{assessment.title}</h3>
                  <p className="text-purple-200 mb-6 leading-relaxed">{assessment.description}</p>
                  
                  <div className="flex items-center space-x-6 mb-6 text-sm text-purple-300">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {assessment.duration} min
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {assessment.questions} questions
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {assessment.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-200 rounded-full text-sm font-medium backdrop-blur-lg border border-purple-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => onStartAssessment(assessment)}
                    className="relative w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    Start Assessment
                    <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Assessment Process Info */}
        <div className="mt-16 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 backdrop-blur-lg rounded-3xl p-10 border border-purple-500/20">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-8 text-center">
            Assessment Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/25 transform hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-bold text-white mb-3">Standardized Questions</h3>
              <p className="text-purple-200 text-sm">Same comprehensive questions for all assessments</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/25 transform hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-bold text-white mb-3">Real Scenarios</h3>
              <p className="text-purple-200 text-sm">Industry-specific, realistic situations</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-500/25 transform hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-bold text-white mb-3">AI Analysis</h3>
              <p className="text-purple-200 text-sm">Advanced NLP processes your responses</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/25 transform hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-bold text-white mb-3">Detailed Report</h3>
              <p className="text-purple-200 text-sm">Comprehensive feedback and recommendations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}