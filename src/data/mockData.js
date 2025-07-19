export const mockAssessments = [
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

// Standardized questions that will be used for all assessments
export const standardQuestions = [
  {
    id: '1',
    type: 'scenario',
    question: 'You are working on a critical project with a tight deadline. Your team member has a different approach to solving a key challenge, and there\'s disagreement about the best solution. How would you handle this situation?',
    scenario: 'Team collaboration under pressure with conflicting approaches',
    skillArea: 'Communication & Problem Solving'
  },
  {
    id: '2',
    type: 'multiple-choice',
    question: 'When faced with a complex technical problem, what is your preferred approach?',
    options: [
      'Break it down into smaller, manageable parts',
      'Research similar solutions online first',
      'Discuss with team members to get different perspectives',
      'Try different solutions until one works'
    ],
    correctAnswer: 'Break it down into smaller, manageable parts',
    skillArea: 'Problem Solving & Technical Thinking'
  },
  {
    id: '3',
    type: 'essay',
    question: 'Describe a time when you had to learn a new technology or skill quickly for a project. What was your learning strategy and how did you ensure you understood it well enough to apply it effectively?',
    skillArea: 'Adaptability & Learning'
  },
  {
    id: '4',
    type: 'multiple-choice',
    question: 'In a team meeting, you notice that one team member is not contributing to the discussion. What would you do?',
    options: [
      'Ignore it and continue with the meeting',
      'Directly ask them for their opinion in front of everyone',
      'Speak to them privately after the meeting',
      'Ask the team lead to address it'
    ],
    correctAnswer: 'Speak to them privately after the meeting',
    skillArea: 'Leadership & Emotional Intelligence'
  },
  {
    id: '5',
    type: 'scenario',
    question: 'You discover a critical bug in production that affects user experience. The fix requires significant changes and testing, but stakeholders want a quick solution. How do you balance quality with urgency?',
    scenario: 'Production issue requiring immediate attention with quality considerations',
    skillArea: 'Decision Making & Quality Management'
  },
  {
    id: '6',
    type: 'essay',
    question: 'How do you stay updated with the latest trends and technologies in your field? Describe your continuous learning approach and how you evaluate which new technologies are worth investing time in.',
    skillArea: 'Continuous Learning & Technology Evaluation'
  },
  {
    id: '7',
    type: 'multiple-choice',
    question: 'When explaining a complex technical concept to a non-technical stakeholder, you should:',
    options: [
      'Use technical jargon to maintain accuracy',
      'Provide detailed technical documentation',
      'Use analogies and simple language',
      'Refer them to technical team members'
    ],
    correctAnswer: 'Use analogies and simple language',
    skillArea: 'Communication & Technical Translation'
  },
  {
    id: '8',
    type: 'scenario',
    question: 'Your project timeline is at risk due to unexpected technical challenges. You need to communicate this to stakeholders who are expecting delivery as planned. How do you approach this conversation?',
    scenario: 'Project delay communication with stakeholder management',
    skillArea: 'Communication & Stakeholder Management'
  },
  {
    id: '9',
    type: 'essay',
    question: 'Describe your approach to giving and receiving feedback. How do you ensure feedback is constructive and leads to positive outcomes for both individual and team performance?',
    skillArea: 'Feedback & Team Development'
  },
  {
    id: '10',
    type: 'multiple-choice',
    question: 'When working on a long-term project, how do you maintain motivation and quality throughout?',
    options: [
      'Set small milestones and celebrate achievements',
      'Focus only on the final deadline',
      'Work in intense bursts with breaks',
      'Rely on external motivation from team leads'
    ],
    correctAnswer: 'Set small milestones and celebrate achievements',
    skillArea: 'Self-Management & Motivation'
  }
];

export const mockResults = {
  id: '1',
  assessmentId: '1',
  userId: 'user1',
  score: 78,
  completedAt: new Date(),
  strengths: ['Active Listening', 'Team Collaboration', 'Empathy', 'Technical Problem Solving'],
  weaknesses: ['Public Speaking', 'Conflict Resolution', 'Assertiveness', 'Time Management'],
  recommendations: [
    'Practice public speaking through Toastmasters or similar organizations',
    'Take a conflict resolution workshop to improve mediation skills',
    'Work on assertiveness training to better advocate for your ideas',
    'Implement time management techniques like Pomodoro or time-blocking'
  ],
  skillBreakdown: [
    { skill: 'Communication', score: 82, level: 'proficient', feedback: 'Strong written and verbal communication with room for improvement in presentation skills' },
    { skill: 'Teamwork', score: 88, level: 'proficient', feedback: 'Excellent collaborative abilities and team player mentality' },
    { skill: 'Problem Solving', score: 75, level: 'intermediate', feedback: 'Good analytical thinking with opportunities to develop creative solutions' },
    { skill: 'Adaptability', score: 70, level: 'intermediate', feedback: 'Shows flexibility but can improve response to unexpected changes' },
    { skill: 'Leadership', score: 65, level: 'intermediate', feedback: 'Emerging leadership qualities with potential for growth in decision-making' },
    { skill: 'Technical Skills', score: 85, level: 'proficient', feedback: 'Strong technical foundation with good problem-solving approach' }
  ]
};

export const mockLearningResources = [
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
  },
  {
    id: '5',
    title: 'Time Management for Developers',
    type: 'article',
    skillArea: 'Self-Management',
    difficulty: 'Beginner',
    duration: '30 minutes',
    provider: 'DevLife Magazine',
    rating: 4.5,
    url: '#'
  },
  {
    id: '6',
    title: 'Building High-Performance Teams',
    type: 'course',
    skillArea: 'Leadership',
    difficulty: 'Advanced',
    duration: '6 hours',
    provider: 'Management Masters',
    rating: 4.8,
    url: '#'
  }
];