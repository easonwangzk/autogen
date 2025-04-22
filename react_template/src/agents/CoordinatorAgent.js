// src/agents/CoordinatorAgent.js
class CoordinatorAgent {
  constructor(patientAgent, doctorAgent, knowledgeAgent) {
    this.patientAgent = patientAgent;
    this.doctorAgent = doctorAgent;
    this.knowledgeAgent = knowledgeAgent;
    this.conversationState = 'INITIAL';
  }

  async processMessage(message) {
    switch (this.conversationState) {
      case 'INITIAL':
        const patientResponse = await this.patientAgent.processUserInput(message);
        this.conversationState = 'DIAGNOSIS';
        return patientResponse;

      case 'DIAGNOSIS':
        const diagnosis = await this.doctorAgent.provideDiagnosis(message);
        const validation = await this.knowledgeAgent.validateInformation(diagnosis.content);
        this.conversationState = 'TREATMENT';
        return {
          ...diagnosis,
          validation: validation.metadata
        };

      case 'TREATMENT':
        const treatment = await this.doctorAgent.recommendTreatment(message);
        this.conversationState = 'INITIAL';
        return treatment;

      default:
        this.conversationState = 'INITIAL';
        return {
          type: 'COORDINATOR_AGENT',
          content: 'Starting new consultation session.',
          metadata: {
            timestamp: new Date().toISOString()
          }
        };
    }
  }
}

export default CoordinatorAgent;