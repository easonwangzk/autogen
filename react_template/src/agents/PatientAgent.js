// src/agents/PatientAgent.js
class PatientAgent {
  constructor(gptService) {
    this.gptService = gptService;
    this.systemPrompt = "You are a patient service agent helping to understand user symptoms";
  }

  async processUserInput(message) {
    const response = await this.gptService.complete({
      systemPrompt: this.systemPrompt,
      message,
      temperature: 0.3,
      maxTokens: 500
    });
    
    return {
      type: 'PATIENT_AGENT',
      content: response,
      metadata: {
        timestamp: new Date().toISOString(),
        confidence: 0.8
      }
    };
  }

  async updateUserProfile(profile) {
    this.userProfile = profile;
  }
}

export default PatientAgent;