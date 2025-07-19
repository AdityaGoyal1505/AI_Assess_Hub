import React from 'react';
import { ArrowRight, Users, Target, Lightbulb, TrendingUp, Shield, Award } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: Target,
      title: 'Soft Skills Assessment',
      description: 'Evaluate communication, teamwork, leadership, and problem-solving abilities through real-world scenarios.',
      color: 'bg-blue-500'
    },
    {
      icon: Shield,
      title: 'Domain Skills Assessment',
      description: 'Technical skill evaluation across programming, data science, cloud computing, and cybersecurity.',
      color: 'bg-emerald-500'
    },
    {
      icon: Lightbulb,
      title: 'AI-Driven Feedback',
      description: 'Personalized, actionable recommendations powered by advanced NLP and machine learning.',
      color: 'bg-amber-500'
    },
    {
      icon: Users,
      title: 'Psychometric Analysis',
      description: 'Comprehensive personality and behavioral assessment for career guidance and performance prediction.',
      color: 'bg-purple-500'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Learning',
      description: 'Access curated learning resources including articles, videos, and courses for skill improvement.',
      color: 'bg-red-500'
    },
    {
      icon: Award,
      title: 'Industry-Relevant Scenarios',
      description: 'Assessments based on realistic, industry-specific situations ensuring accuracy and relevance.',
      color: 'bg-indigo-500'
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Lightbulb className="h-4 w-4 mr-2" />
              Powered by Advanced AI & NLP
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Assess Hub
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive skills assessment platform leveraging NLP and OpenAI to evaluate soft skills, 
              domain expertise, and personality traits for career growth and performance optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('assessments')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Start Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => onNavigate('learn')}
                className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl border border-gray-200"
              >
                Explore Learning
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Assessment Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform provides multi-dimensional skill evaluation with personalized feedback and learning recommendations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`${feature.color} w-12 h-12 rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Designed for Everyone</h2>
            <p className="text-xl text-gray-600">
              From individual professionals to large institutions, our platform adapts to your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {userTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Unlock Your Potential?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of professionals who have transformed their careers with AI-powered skill assessment.
          </p>
          <button
            onClick={() => onNavigate('assessments')}
            className="bg-white hover:bg-gray-100 text-blue-600 px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Begin Your Assessment Journey
          </button>
        </div>
      </section>
    </div>
  );
}