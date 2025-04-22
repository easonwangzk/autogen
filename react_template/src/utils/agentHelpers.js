// src/utils/agentHelpers.js
export const validateSymptoms = (symptoms) => {
  const commonSymptoms = [
    'fever', 'cough', 'headache', 'fatigue', 
    'pain', 'nausea', 'dizziness'
  ];

  return symptoms.split(' ').some(word => 
    commonSymptoms.includes(word.toLowerCase())
  );
};

export const formatAgentResponse = (response, agentType) => {
  return {
    id: Date.now(),
    type: agentType,
    content: response,
    timestamp: new Date().toISOString()
  };
};

export const sanitizeUserInput = (input) => {
  return input
    .trim()
    .replace(/[<>]/g, '')
    .slice(0, 1000);
};

export const calculateUrgency = (symptoms) => {
  const urgentKeywords = ['severe', 'extreme', 'unbearable', 'emergency'];
  const urgencyScore = symptoms.split(' ')
    .filter(word => urgentKeywords.includes(word.toLowerCase()))
    .length;

  return {
    isUrgent: urgencyScore > 0,
    score: urgencyScore
  };
};

export const createConversationSummary = (messages) => {
  return {
    date: new Date().toLocaleDateString(),
    duration: messages.length > 0 
      ? `${Math.round((Date.now() - new Date(messages[0].timestamp).getTime()) / 1000 / 60)} mins`
      : '0 mins',
    summary: messages.length > 0 
      ? messages[messages.length - 1].content.slice(0, 100) + '...'
      : 'No messages'
  };
};