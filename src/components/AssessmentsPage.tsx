import React, { useState } from 'react';
import { Clock, Users, Target, Brain, Code, User, ChevronRight, Star } from 'lucide-react';
import { mockAssessments } from '../data/mockData';
import { Assessment } from '../types';

interface AssessmentsPageProps {
  onNavigate: (page: string) => void;
  onStartAssessment: (assessment: Assessment) => void;
}

export default function AssessmentsPage({ onNavigate, onStartAssessment }: AssessmentsPageProps) {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  const filteredAssessments = mockAssessments.filter(assessment => {
    const typeMatch = selectedType === 'all' || assessment.type === selectedType;
    const difficultyMatch = selectedDifficulty === 'all' || assessment.difficulty === selectedDifficulty;
    return typeMatch && difficultyMatch;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'soft-skills': return User;
      case 'domain-skills': return Code;
      case 'psychometric': return Brain;
      default: return Target;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'soft-skills': return 'bg-blue-500';
      case 'domain-skills': return 'bg-emerald-500';
      case 'psychometric': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-600 bg-green-100';
      case 'intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Assessment</h1>
          <p className="text-xl text-gray-600">
            Select from our comprehensive range of AI-powered assessments to evaluate your skills and unlock your potential.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Assessment Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="soft-skills">Soft Skills</option>
                <option value="domain-skills">Domain Skills</option>
                <option value="psychometric">Psychometric</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty Level</label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`${getTypeColor(assessment.type)} p-3 rounded-xl`}>
                      <TypeIcon className="h-6 w-6 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(assessment.difficulty)}`}>
                      {assessment.difficulty}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{assessment.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{assessment.description}</p>
                  
                  <div className="flex items-center space-x-6 mb-6 text-sm text-gray-500">
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
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => onStartAssessment(assessment)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center"
                  >
                    Start Assessment
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Assessment Process Info */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Assessment Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Adaptive Questions</h3>
              <p className="text-gray-600 text-sm">Questions adapt based on your performance</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Real Scenarios</h3>
              <p className="text-gray-600 text-sm">Industry-specific, realistic situations</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">AI Analysis</h3>
              <p className="text-gray-600 text-sm">Advanced NLP processes your responses</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Detailed Report</h3>
              <p className="text-gray-600 text-sm">Comprehensive feedback and recommendations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}