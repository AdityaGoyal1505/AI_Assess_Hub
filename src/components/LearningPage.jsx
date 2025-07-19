import React, { useState } from 'react';
import { BookOpen, Video, Award, Zap, Star, Clock, User, ExternalLink } from 'lucide-react';
import { mockLearningResources } from '../data/mockData';

export default function LearningPage({ onNavigate }) {
  const [selectedSkill, setSelectedSkill] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const filteredResources = mockLearningResources.filter(resource => {
    const skillMatch = selectedSkill === 'all' || resource.skillArea.toLowerCase().includes(selectedSkill.toLowerCase());
    const typeMatch = selectedType === 'all' || resource.type === selectedType;
    return skillMatch && typeMatch;
  });

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video': return Video;
      case 'course': return BookOpen;
      case 'practice': return Zap;
      default: return Award;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'video': return 'from-red-500 to-rose-500';
      case 'course': return 'from-blue-500 to-cyan-500';
      case 'practice': return 'from-green-500 to-emerald-500';
      case 'article': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  const skillAreas = ['Communication', 'Leadership', 'React Development', 'Data Science', 'Problem Solving', 'Self-Management'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Learning Resources
          </h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Curated learning materials to help you improve your skills based on AI-powered recommendations 
            from your assessments.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-purple-500/20 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-purple-200 mb-3">Skill Area</label>
              <select
                value={selectedSkill}
                onChange={(e) => setSelectedSkill(e.target.value)}
                className="w-full p-4 bg-slate-700/50 border border-purple-500/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-400 text-white backdrop-blur-lg"
              >
                <option value="all">All Skills</option>
                {skillAreas.map(skill => (
                  <option key={skill} value={skill}>{skill}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-purple-200 mb-3">Content Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full p-4 bg-slate-700/50 border border-purple-500/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-400 text-white backdrop-blur-lg"
              >
                <option value="all">All Types</option>
                <option value="course">Courses</option>
                <option value="video">Videos</option>
                <option value="article">Articles</option>
                <option value="practice">Practice</option>
              </select>
            </div>
          </div>
        </div>

        {/* Featured Learning Path */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl p-10 mb-12 text-white shadow-2xl border border-purple-400/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold mb-6 relative z-10">Recommended Learning Path</h2>
            <p className="text-purple-100 mb-8 text-lg relative z-10">
              Based on your recent assessment results, we've created a personalized learning journey 
              to help you improve your communication and technical skills.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 relative z-10">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 bg-white/30 rounded-xl flex items-center justify-center mr-3">
                    <span className="font-bold text-lg">1</span>
                  </div>
                  <h3 className="font-bold text-lg">Communication Skills</h3>
                </div>
                <p className="text-purple-100">Build confidence in presentations and team interactions</p>
              </div>
              <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 relative z-10">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 bg-white/30 rounded-xl flex items-center justify-center mr-3">
                    <span className="font-bold text-lg">2</span>
                  </div>
                  <h3 className="font-bold text-lg">Problem Solving</h3>
                </div>
                <p className="text-purple-100">Learn systematic approaches to complex challenges</p>
              </div>
              <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 relative z-10">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 bg-white/30 rounded-xl flex items-center justify-center mr-3">
                    <span className="font-bold text-lg">3</span>
                  </div>
                  <h3 className="font-bold text-lg">Leadership Development</h3>
                </div>
                <p className="text-purple-100">Develop leadership and team management skills</p>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Resources Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredResources.map((resource) => {
            const TypeIcon = getTypeIcon(resource.type);
            return (
              <div
                key={resource.id}
                className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 border border-purple-500/20 hover:border-purple-400/40 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`bg-gradient-to-r ${getTypeColor(resource.type)} p-4 rounded-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                      <TypeIcon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-bold text-yellow-400">{resource.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{resource.title}</h3>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-purple-300">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {resource.duration}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {resource.provider}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-200 rounded-full text-sm font-bold backdrop-blur-lg border border-purple-500/30">
                      {resource.skillArea}
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-slate-600/50 to-slate-700/50 text-slate-200 rounded-full text-sm font-bold backdrop-blur-lg border border-slate-500/30">
                      {resource.difficulty}
                    </span>
                  </div>

                  <button className="relative w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span>Start Learning</span>
                    <ExternalLink className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Learning Statistics */}
        <div className="mt-16 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-purple-500/20">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-10 text-center">
            Your Learning Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25 transform hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">12</h3>
              <p className="text-purple-200">Courses Completed</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/25 transform hover:scale-110 transition-transform duration-300">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">48h</h3>
              <p className="text-purple-200">Learning Time</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/25 transform hover:scale-110 transition-transform duration-300">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">8</h3>
              <p className="text-purple-200">Certificates Earned</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-500/25 transform hover:scale-110 transition-transform duration-300">
                <Star className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">4.8</h3>
              <p className="text-purple-200">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}