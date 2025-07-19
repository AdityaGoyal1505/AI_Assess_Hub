import React from 'react';
import { TrendingUp, Target, BookOpen, Award, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { mockResults } from '../data/mockData';

interface ResultsPageProps {
  onNavigate: (page: string) => void;
}

export default function ResultsPage({ onNavigate }: ResultsPageProps) {
  const result = mockResults;

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-100';
    if (score >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'expert': return 'bg-purple-100 text-purple-800';
      case 'proficient': return 'bg-blue-100 text-blue-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'novice': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Assessment Results</h1>
              <p className="text-gray-600">Communication & Collaboration Skills Assessment</p>
              <p className="text-sm text-gray-500 mt-1">
                Completed on {result.completedAt.toLocaleDateString()}
              </p>
            </div>
            <div className="text-center">
              <div className={`text-4xl font-bold px-6 py-3 rounded-xl ${getScoreColor(result.score)}`}>
                {result.score}%
              </div>
              <p className="text-sm text-gray-600 mt-2">Overall Score</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Results */}
          <div className="lg:col-span-2 space-y-8">
            {/* Skill Breakdown */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="h-6 w-6 mr-3 text-blue-600" />
                Skill Breakdown
              </h2>
              <div className="space-y-6">
                {result.skillBreakdown.map((skill, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{skill.skill}</h3>
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                        <span className={`px-3 py-1 rounded-lg font-bold ${getScoreColor(skill.score)}`}>
                          {skill.score}%
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${skill.score}%` }}
                      ></div>
                    </div>
                    <p className="text-gray-600 text-sm">{skill.feedback}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Strengths & Weaknesses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                  Strengths
                </h3>
                <ul className="space-y-3">
                  {result.strengths.map((strength, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-amber-600" />
                  Areas for Improvement
                </h3>
                <ul className="space-y-3">
                  {result.weaknesses.map((weakness, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      {weakness}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Recommendations */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                AI Recommendations
              </h3>
              <div className="space-y-4">
                {result.recommendations.map((recommendation, index) => (
                  <div key={index} className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                    <p className="text-sm text-blue-800">{recommendation}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={() => onNavigate('learn')}
                  className="w-full flex items-center justify-between p-3 text-left bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                >
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-3 text-blue-600" />
                    <span className="text-blue-800 font-medium">Browse Learning Resources</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-blue-600" />
                </button>
                
                <button
                  onClick={() => onNavigate('assessments')}
                  className="w-full flex items-center justify-between p-3 text-left bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
                >
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-3 text-green-600" />
                    <span className="text-green-800 font-medium">Take Another Assessment</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-green-600" />
                </button>

                <button className="w-full flex items-center justify-between p-3 text-left bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                  <div className="flex items-center">
                    <TrendingUp className="h-4 w-4 mr-3 text-purple-600" />
                    <span className="text-purple-800 font-medium">Download Detailed Report</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-purple-600" />
                </button>
              </div>
            </div>

            {/* Performance Insights */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Performance Insight</h3>
              <p className="text-sm text-gray-700 mb-4">
                Your communication skills show strong foundations with excellent teamwork abilities. 
                Focus on public speaking and conflict resolution to reach expert level.
              </p>
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="text-xs text-blue-800 font-medium">
                  💡 Tip: Practice presenting to small groups before tackling larger audiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}