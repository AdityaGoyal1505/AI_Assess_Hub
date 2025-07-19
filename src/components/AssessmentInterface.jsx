import React, { useState, useEffect } from 'react';
import { Clock, ChevronLeft, ChevronRight, Save, Send } from 'lucide-react';
import { standardQuestions } from '../data/mockData';

export default function AssessmentInterface({ assessment, onComplete, onBack }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(assessment.duration * 60); // Convert to seconds
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Use standardized questions for all assessments
  const questions = standardQuestions;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerChange = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      onComplete();
    }, 2000);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg p-16 rounded-3xl shadow-2xl text-center max-w-lg border border-purple-500/20">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/25 animate-pulse">
            <Send className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-6">Assessment Submitted!</h2>
          <p className="text-purple-200 mb-8 text-lg">
            Your responses are being analyzed by our AI engine. Results will be available shortly.
          </p>
          <div className="animate-spin w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full mx-auto"></div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-lg shadow-2xl border-b border-purple-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="p-3 hover:bg-purple-500/20 rounded-xl transition-all duration-300 text-purple-200 hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-white">{assessment.title}</h1>
                <p className="text-sm text-purple-300">Question {currentQuestion + 1} of {questions.length}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-purple-200">
                <Clock className="h-4 w-4" />
                <span className={timeRemaining < 300 ? 'text-red-400 font-bold animate-pulse' : ''}>
                  {formatTime(timeRemaining)}
                </span>
              </div>
              <button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Submit
              </button>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-cyan-500 to-purple-500 h-3 rounded-full transition-all duration-500 shadow-lg"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Question Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border border-purple-500/20">
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-200 px-4 py-2 rounded-full text-sm font-bold backdrop-blur-lg border border-purple-500/30">
                {currentQ.skillArea}
              </span>
              <span className="bg-gradient-to-r from-slate-600/50 to-slate-700/50 text-slate-200 px-4 py-2 rounded-full text-sm font-bold backdrop-blur-lg border border-slate-500/30 capitalize">
                {currentQ.type.replace('-', ' ')}
              </span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-6 leading-relaxed">
              {currentQ.question}
            </h2>
            {currentQ.scenario && (
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-l-4 border-cyan-400 p-6 mb-8 rounded-r-xl backdrop-blur-lg">
                <p className="text-cyan-300 font-bold mb-2">Scenario:</p>
                <p className="text-cyan-200">{currentQ.scenario}</p>
              </div>
            )}
          </div>

          {/* Answer Input */}
          <div className="space-y-4">
            {currentQ.type === 'multiple-choice' && currentQ.options ? (
              <div className="space-y-3">
                {currentQ.options.map((option, index) => (
                  <label
                    key={index}
                    className="flex items-start space-x-4 p-6 border border-purple-500/30 rounded-xl hover:bg-purple-500/10 cursor-pointer transition-all duration-300 backdrop-blur-lg hover:border-purple-400/50 group"
                  >
                    <input
                      type="radio"
                      name={`question-${currentQ.id}`}
                      value={option}
                      checked={answers[currentQ.id] === option}
                      onChange={(e) => handleAnswerChange(currentQ.id, e.target.value)}
                      className="mt-1 text-purple-500 focus:ring-purple-500 focus:ring-2"
                    />
                    <span className="text-white group-hover:text-purple-200 transition-colors duration-300">{option}</span>
                  </label>
                ))}
              </div>
            ) : (
              <div>
                <textarea
                  value={answers[currentQ.id] || ''}
                  onChange={(e) => handleAnswerChange(currentQ.id, e.target.value)}
                  placeholder="Type your detailed response here..."
                  className="w-full h-48 p-6 bg-slate-700/50 border border-purple-500/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-400 resize-none text-white placeholder-purple-300 backdrop-blur-lg"
                />
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm text-purple-300">
                    Minimum 100 characters recommended for detailed analysis
                  </p>
                  <span className="text-sm text-purple-400">
                    {(answers[currentQ.id] || '').length} characters
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-10 pt-8 border-t border-purple-500/20">
            <button
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
              className="flex items-center space-x-2 px-6 py-3 text-purple-300 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </button>

            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 px-6 py-3 text-purple-300 hover:text-white transition-colors duration-300">
                <Save className="h-4 w-4" />
                <span>Save Progress</span>
              </button>
              
              {currentQuestion < questions.length - 1 ? (
                <button
                  onClick={() => setCurrentQuestion(currentQuestion + 1)}
                  className="flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span>Next</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span>Submit Assessment</span>
                  <Send className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}