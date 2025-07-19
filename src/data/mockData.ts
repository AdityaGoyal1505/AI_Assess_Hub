import { Assessment, Question, AssessmentResult, LearningResource, SkillScore } from '../types';

export const mockAssessments: Assessment[] = [
  {
    id: '1',
    title: 'Communication & Collaboration Skills',
    type: 'soft-skills',
    description: 'Evaluate your communication effectiveness, active listening, and teamwork abilities',
    duration: 45,
    questions: 25,
    difficulty: 'intermediate',
    tags: ['Communication', 'Teamwork', 'Active Listening', 'Conflict Resolution']
  },
  {
    id: '2',
    title: 'Full-Stack Development Assessment',
    type: 'domain-skills',
    description: 'Comprehensive evaluation of React, Node.js, databases, and system design skills',
    duration: 90,
    questions: 40,
    difficulty: 'advanced',
    tags: ['React', 'Node.js', 'MongoDB', 'System Design', 'API Development']
  },
  {
    id: '3',
    title: 'Leadership & Problem-Solving',
    type: 'soft-skills',
    description: 'Assess leadership potential, decision-making, and creative problem-solving abilities',
    duration: 60,
    questions: 30,
    difficulty: 'intermediate',
    tags: ['Leadership', 'Decision Making', 'Problem Solving', 'Critical Thinking']
  },
  {
    id: '4',
    title: 'Data Science & Analytics',
    type: 'domain-skills',
    description: 'Evaluate Python, machine learning, statistics, and data visualization skills',
    duration: 75,
    questions: 35,
    difficulty: 'advanced',
    tags: ['Python', 'Machine Learning', 'Statistics', 'Data Visualization', 'SQL']
  },
  {
    id: '5',
    title: 'Personality & Behavioral Analysis',
    type: 'psychometric',
    description: 'Comprehensive personality assessment for career guidance and performance prediction',
    duration: 30,
    questions: 50,
    difficulty: 'beginner',
    tags: ['Personality', 'Behavior', 'Career Fit', 'Work Style', 'Emotional Intelligence']
  },
  {
    id: '6',
    title: 'Cloud Computing & DevOps',
    type: 'domain-skills',
    description: 'Assessment of AWS, Docker, Kubernetes, CI/CD, and infrastructure management',
    duration: 80,
    questions: 38,
    difficulty: 'advanced',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Infrastructure']
  }
];

export const mockQuestions: Question[] = [
  {
    id: '1',
    type: 'scenario',
    question: 'You are leading a cross-functional team working on a critical project with a tight deadline. Two team members have conflicting approaches to solving a key technical challenge, and the disagreement is affecting team morale and progress.',
    scenario: 'Team conflict during critical project phase',
    skillArea: 'Leadership & Conflict Resolution'
  },
  {
    id: '2',
    type: 'multiple-choice',
    question: 'Which React hook is best for managing complex state logic with multiple sub-values?',
    options: ['useState', 'useEffect', 'useReducer', 'useContext'],
    correctAnswer: 'useReducer',
    skillArea: 'React Development'
  },
  {
    id: '3',
    type: 'essay',
    question: 'Describe a time when you had to adapt your communication style to work effectively with a diverse team. What challenges did you face and how did you overcome them?',
    skillArea: 'Communication & Adaptability'
  }
];

export const mockResults: AssessmentResult = {
  id: '1',
  assessmentId: '1',
  userId: 'user1',
  score: 78,
  completedAt: new Date(),
  strengths: ['Active Listening', 'Team Collaboration', 'Empathy'],
  weaknesses: ['Public Speaking', 'Conflict Resolution', 'Assertiveness'],
  recommendations: [
    'Practice public speaking through Toastmasters or similar organizations',
    'Take a conflict resolution workshop to improve mediation skills',
    'Work on assertiveness training to better advocate for your ideas'
  ],
  skillBreakdown: [
    { skill: 'Communication', score: 82, level: 'proficient', feedback: 'Strong written and verbal communication with room for improvement in presentation skills' },
    { skill: 'Teamwork', score: 88, level: 'proficient', feedback: 'Excellent collaborative abilities and team player mentality' },
    { skill: 'Problem Solving', score: 75, level: 'intermediate', feedback: 'Good analytical thinking with opportunities to develop creative solutions' },
    { skill: 'Adaptability', score: 70, level: 'intermediate', feedback: 'Shows flexibility but can improve response to unexpected changes' }
  ]
};

export const mockLearningResources: LearningResource[] = [
  {
    id: '1',
    title: 'Effective Communication in Tech Teams',
    type: 'course',
    skillArea: 'Communication',
    difficulty: 'Intermediate',
    duration: '4 hours',
    provider: 'TechLearn Academy',
    rating: 4.8,
    url: '#'
  },
  {
    id: '2',
    title: 'Conflict Resolution Strategies',
    type: 'video',
    skillArea: 'Leadership',
    difficulty: 'Beginner',
    duration: '45 minutes',
    provider: 'Leadership Hub',
    rating: 4.6,
    url: '#'
  },
  {
    id: '3',
    title: 'Advanced React Patterns and Best Practices',
    type: 'course',
    skillArea: 'React Development',
    difficulty: 'Advanced',
    duration: '8 hours',
    provider: 'CodeMaster Pro',
    rating: 4.9,
    url: '#'
  },
  {
    id: '4',
    title: 'Public Speaking for Technical Professionals',
    type: 'practice',
    skillArea: 'Communication',
    difficulty: 'Intermediate',
    duration: '2 hours',
    provider: 'SpeakTech',
    rating: 4.7,
    url: '#'
  }
];