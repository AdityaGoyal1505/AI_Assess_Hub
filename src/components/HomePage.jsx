import React from 'react';
import { ArrowRight, Users, Target, Lightbulb, TrendingUp, Shield, Award, Zap, Sparkles, Star } from 'lucide-react';

export default function HomePage({ onNavigate }) {
  const features = [
    {
      icon: Target,
      title: 'Soft Skills Assessment',
      description: 'Evaluate communication, teamwork, leadership, and problem-solving abilities through real-world scenarios.',
      color: 'from-blue-500 to-cyan-500',
      glow: 'shadow-blue-500/25'
    },
    {
      icon: Shield,
      title: 'Domain Skills Assessment',
      description: 'Technical skill evaluation across programming, data science, cloud computing, and cybersecurity.',
      color: 'from-emerald-500 to-teal-500',
      glow: 'shadow-emerald-500/25'
    },
    {
      icon: Zap,
      title: 'AI-Driven Feedback',
      description: 'Personalized, actionable recommendations powered by advanced NLP and machine learning.',
      color: 'from-amber-500 to-orange-500',
      glow: 'shadow-amber-500/25'
    },
    {
      icon: Users,
      title: 'Psychometric Analysis',
      description: 'Comprehensive personality and behavioral assessment for career guidance and performance prediction.',
      color: 'from-purple-500 to-pink-500',
      glow: 'shadow-purple-500/25'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Learning',
      description: 'Access curated learning resources including articles, videos, and courses for skill improvement.',
      color: 'from-red-500 to-rose-500',
      glow: 'shadow-red-500/25'
    },
    {
      icon: Award,
      title: 'Industry-Relevant Scenarios',
      description: 'Assessments based on realistic, industry-specific situations ensuring accuracy and relevance.',
      color: 'from-indigo-500 to-purple-500',
      glow: 'shadow-indigo-500/25'
    }
  ];

  const userTypes = [
    {
      title: 'Individual Professionals',
      description: 'Assess and improve your skills for career advancement',
      features: ['Personal skill assessment', 'Career guidance', 'Learning recommendations']
    },
    {
      title: 'Students',
      description: 'Prepare for your future career with comprehensive skill evaluation',
      features: ['Academic skill assessment', 'Industry readiness', 'Learning path guidance']
    },
    {
      title: 'Educational Institutions',
      description: 'Evaluate student progress and curriculum effectiveness',
      features: ['Batch assessments', 'Progress tracking', 'Curriculum insights']
    },
    {
      title: 'Corporate Employees',
      description: 'Identify skill gaps and plan professional development',
      features: ['Team assessments', 'Skill gap analysis', 'Training recommendations']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-lg border border-purple-500/30 text-purple-200 rounded-full text-sm font-medium mb-8 shadow-lg">
              <Sparkles className="h-4 w-4 mr-2 animate-pulse" />
              Powered by Advanced AI & NLP
              <Star className="h-4 w-4 ml-2 text-yellow-400" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 relative">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                AI Assess Hub
              </span>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce opacity-80"></div>
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Comprehensive skills assessment platform leveraging NLP and OpenAI to evaluate soft skills, 
              domain expertise, and personality traits for career growth and performance optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('assessments')}
                className="relative bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                Start Assessment
                <ArrowRight className="ml-3 h-6 w-6 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={() => onNavigate('learn')}
                className="bg-white/10 backdrop-blur-lg hover:bg-white/20 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-white/10 border border-white/20 hover:border-white/40"
              >
                Explore Learning
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-lg relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Comprehensive Assessment Features
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Our AI-powered platform provides multi-dimensional skill evaluation with personalized feedback and learning recommendations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 border border-purple-500/20 hover:border-purple-400/40 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg ${feature.glow} transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{feature.title}</h3>
                <p className="text-purple-200 leading-relaxed relative z-10">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 backdrop-blur-lg relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Designed for Everyone
            </h2>
            <p className="text-xl text-purple-200">
              From individual professionals to large institutions, our platform adapts to your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {userTypes.map((type, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-lg p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-500/20 hover:border-cyan-400/40 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{type.title}</h3>
                <p className="text-purple-200 mb-6 relative z-10">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-purple-200 relative z-10">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3 animate-pulse"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-white mb-8 relative z-10">
            Ready to Unlock Your Potential?
          </h2>
          <p className="text-xl text-purple-100 mb-12 relative z-10">
            Join thousands of professionals who have transformed their careers with AI-powered skill assessment.
          </p>
          <button
            onClick={() => onNavigate('assessments')}
            className="relative bg-white hover:bg-gray-100 text-purple-600 px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-white/25 z-10 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-purple-600/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            Begin Your Assessment Journey
          </button>
        </div>
      </section>
    </div>
  );
}