// src/agents/DoctorAgent.js
class DoctorAgent {
  constructor(gptService) {
    this.gptService = gptService;
    this.systemPrompt = "You are a medical professional providing diagnosis and advice";
  }

  async provideDiagnosis(symptoms) {
    const response = await this.gptService.complete({
      systemPrompt: this.systemPrompt,
      message: symptoms,
      temperature: 0.2,
      maxTokens: 1000
    });

    return {
      type: 'DOCTOR_AGENT',
      content: response,
      metadata: {
        timestamp: new Date().toISOString(),
        diagnosisConfidence: 0.85
      }
    };
  }

  async recommendTreatment(diagnosis) {
    const response = await this.gptService.complete({
      systemPrompt: this.systemPrompt,
      message: `Based on the diagnosis: ${diagnosis}, recommend treatment:`,
      temperature: 0.2,
      maxTokens: 1000
    });

    return {
      type: 'DOCTOR_AGENT',
      content: response,
      metadata: {
        timestamp: new Date().toISOString(),
        treatmentType: 'recommendation'
      }
    };
  }
}

export default DoctorAgent;