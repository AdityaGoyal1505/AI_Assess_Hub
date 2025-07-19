import React from 'react';
import { TrendingUp, Target, BookOpen, Award, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { mockResults } from '../data/mockData';

export default function ResultsPage({ onNavigate }) {
  const result = mockResults;

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600 bg-green-100';
    if (score >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
    if (score >= 80) return 'text-green-200 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30';
    if (score >= 60) return 'text-yellow-200 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-400/30';
    return 'text-red-200 bg-gradient-to-r from-red-500/20 to-rose-500/20 border border-red-400/30';
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'expert': return 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200 border border-purple-400/30';
      case 'proficient': return 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-200 border border-blue-400/30';
      case 'intermediate': return 'bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-200 border border-yellow-400/30';
      case 'novice': return 'bg-gradient-to-r from-gray-500/20 to-slate-500/20 text-gray-200 border border-gray-400/30';
      default: return 'bg-gradient-to-r from-gray-500/20 to-slate-500/20 text-gray-200 border border-gray-400/30';
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
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg rounded-2xl shadow-2xl p-10 mb-8 border border-purple-500/20">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Assessment Results
              </h1>
              <p className="text-purple-200 text-xl">Comprehensive Skills Assessment</p>
              <p className="text-sm text-purple-300 mt-2">
                Completed on {result.completedAt.toLocaleDateString()}
              </p>
            </div>
            <div className="text-center">
              <div className={`text-5xl font-bold px-8 py-4 rounded-2xl shadow-2xl ${getScoreColor(result.score)}`}>
                {result.score}%
              </div>
              <p className="text-sm text-purple-200 mt-3 font-medium">Overall Score</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Results */}
          <div className="lg:col-span-2 space-y-8">
            {/* Skill Breakdown */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border border-purple-500/20">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Target className="h-8 w-8 mr-4 text-cyan-400" />
                Skill Breakdown
              </h2>
              <div className="space-y-6">
                {result.skillBreakdown.map((skill, index) => (
                  <div key={index} className="border border-purple-500/30 rounded-xl p-8 bg-gradient-to-r from-slate-700/30 to-slate-800/30 backdrop-blur-lg hover:border-purple-400/50 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white">{skill.skill}</h3>
                      <div className="flex items-center space-x-3">
                        <span className={`px-4 py-2 rounded-full text-sm font-bold ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                        <span className={`px-4 py-2 rounded-xl font-bold shadow-lg ${getScoreColor(skill.score)}`}>
                          {skill.score}%
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-4 mb-4 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 h-4 rounded-full transition-all duration-1000 shadow-lg"
                        style={{ width: `${skill.score}%` }}
                      ></div>
                    </div>
                    <p className="text-purple-200">{skill.feedback}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Strengths & Weaknesses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-green-500/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                  Strengths
                </h3>
                <ul className="space-y-3">
                  {result.strengths.map((strength, index) => (
                    <li key={index} className="flex items-center text-green-200">
                      <div className="w-3 h-3 bg-green-400 rounded-full mr-4 animate-pulse"></div>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-amber-500/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-amber-600" />
                  Areas for Improvement
                </h3>
                <ul className="space-y-3">
                  {result.weaknesses.map((weakness, index) => (
                    <li key={index} className="flex items-center text-amber-200">
                      <div className="w-3 h-3 bg-amber-400 rounded-full mr-4 animate-pulse"></div>
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
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <TrendingUp className="h-6 w-6 mr-3 text-cyan-400" />
                AI Recommendations
              </h3>
              <div className="space-y-4">
                {result.recommendations.map((recommendation, index) => (
                  <div key={index} className="p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border-l-4 border-cyan-400 backdrop-blur-lg">
                    <p className="text-cyan-200">{recommendation}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={() => onNavigate('learn')}
                  className="w-full flex items-center justify-between p-4 text-left bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 rounded-xl transition-all duration-300 backdrop-blur-lg border border-blue-500/30 hover:border-blue-400/50"
                >
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-3 text-blue-400" />
                    <span className="text-blue-200 font-bold">Browse Learning Resources</span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-blue-400" />
                </button>
                
                <button
                  onClick={() => onNavigate('assessments')}
                  className="w-full flex items-center justify-between p-4 text-left bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 rounded-xl transition-all duration-300 backdrop-blur-lg border border-green-500/30 hover:border-green-400/50"
                >
                  <div className="flex items-center">
                    <Award className="h-5 w-5 mr-3 text-green-400" />
                    <span className="text-green-200 font-bold">Take Another Assessment</span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-green-400" />
                </button>

                <button className="w-full flex items-center justify-between p-4 text-left bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 rounded-xl transition-all duration-300 backdrop-blur-lg border border-purple-500/30 hover:border-purple-400/50">
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-3 text-purple-400" />
                    <span className="text-purple-200 font-bold">Download Detailed Report</span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-purple-400" />
                </button>
              </div>
            </div>

            {/* Performance Insights */}
            <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-2xl p-8 border border-purple-400/30 backdrop-blur-lg">
              <h3 className="text-xl font-bold text-white mb-4">Performance Insight</h3>
              <p className="text-purple-200 mb-6">
                Your assessment shows strong foundations across multiple skill areas. 
                Focus on the recommended improvement areas to reach expert level performance.
              </p>
              <div className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 rounded-xl p-4 border border-cyan-400/30">
                <p className="text-sm text-cyan-200 font-bold">
                  💡 Tip: Consistent practice and targeted learning will help you improve quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}