import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AssessmentsPage from './components/AssessmentsPage';
import AssessmentInterface from './components/AssessmentInterface';
import ResultsPage from './components/ResultsPage';
import LearningPage from './components/LearningPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedAssessment, setSelectedAssessment] = useState(null);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    setSelectedAssessment(null);
  };

  const handleStartAssessment = (assessment) => {
    setSelectedAssessment(assessment);
    setCurrentPage('assessment-interface');
  };

  const handleAssessmentComplete = () => {
    setSelectedAssessment(null);
    setCurrentPage('results');
  };

  const handleBackFromAssessment = () => {
    setSelectedAssessment(null);
    setCurrentPage('assessments');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'assessments':
        return <AssessmentsPage onNavigate={handleNavigate} onStartAssessment={handleStartAssessment} />;
      case 'assessment-interface':
        return selectedAssessment ? (
          <AssessmentInterface
            assessment={selectedAssessment}
            onComplete={handleAssessmentComplete}
            onBack={handleBackFromAssessment}
          />
        ) : (
          <AssessmentsPage onNavigate={handleNavigate} onStartAssessment={handleStartAssessment} />
        );
      case 'results':
        return <ResultsPage onNavigate={handleNavigate} />;
      case 'learn':
        return <LearningPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  // Don't show header during assessment
  const showHeader = currentPage !== 'assessment-interface';

  return (
    <div className="min-h-screen bg-gray-50">
      {showHeader && <Header currentPage={currentPage} onNavigate={handleNavigate} />}
      {renderCurrentPage()}
    </div>
  );
}

export default App;