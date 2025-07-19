import React, { useState } from 'react';
import { BookOpen, Video, Award, Zap, Star, Clock, User, ExternalLink } from 'lucide-react';
import { mockLearningResources } from '../data/mockData';

interface LearningPageProps {
  onNavigate: (page: string) => void;
}

export default function LearningPage({ onNavigate }: LearningPageProps) {
  const [selectedSkill, setSelectedSkill] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredResources = mockLearningResources.filter(resource => {
    const skillMatch = selectedSkill === 'all' || resource.skillArea.toLowerCase().includes(selectedSkill.toLowerCase());
    const typeMatch = selectedType === 'all' || resource.type === selectedType;
    return skillMatch && typeMatch;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return Video;
      case 'course': return BookOpen;
      case 'practice': return Zap;
      default: return Award;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-red-500';
      case 'course': return 'bg-blue-500';
      case 'practice': return 'bg-green-500';
      case 'article': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const skillAreas = ['Communication', 'Leadership', 'React Development', 'Data Science', 'Problem Solving'];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Learning Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Curated learning materials to help you improve your skills based on AI-powered recommendations 
            from your assessments.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Skill Area</label>
              <select
                value={selectedSkill}
                onChange={(e) => setSelectedSkill(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Skills</option>
                {skillAreas.map(skill => (
                  <option key={skill} value={skill}>{skill}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Content Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-12 text-white">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-4">Recommended Learning Path</h2>
            <p className="text-blue-100 mb-6 text-lg">
              Based on your recent assessment results, we've created a personalized learning journey 
              to help you improve your communication and technical skills.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-white bg-opacity-30 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold">1</span>
                  </div>
                  <h3 className="font-semibold">Public Speaking Basics</h3>
                </div>
                <p className="text-sm text-blue-100">Build confidence in presentations</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-white bg-opacity-30 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold">2</span>
                  </div>
                  <h3 className="font-semibold">Conflict Resolution</h3>
                </div>
                <p className="text-sm text-blue-100">Learn mediation techniques</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-white bg-opacity-30 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold">3</span>
                  </div>
                  <h3 className="font-semibold">Advanced React Patterns</h3>
                </div>
                <p className="text-sm text-blue-100">Master complex React concepts</p>
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
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`${getTypeColor(resource.type)} p-3 rounded-xl`}>
                      <TypeIcon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-gray-600">{resource.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
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
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {resource.skillArea}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                      {resource.difficulty}
                    </span>
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                    <span>Start Learning</span>
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Learning Statistics */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Your Learning Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">12</h3>
              <p className="text-gray-600">Courses Completed</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">48h</h3>
              <p className="text-gray-600">Learning Time</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">8</h3>
              <p className="text-gray-600">Certificates Earned</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">4.8</h3>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}