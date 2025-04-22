// src/agents/KnowledgeAgent.js
class KnowledgeAgent {
  constructor(gptService) {
    this.gptService = gptService;
    this.systemPrompt = "You are a medical knowledge base manager";
  }

  async provideMedicalInfo(query) {
    const response = await this.gptService.complete({
      systemPrompt: this.systemPrompt,
      message: query,
      temperature: 0.1,
      maxTokens: 2000
    });

    return {
      type: 'KNOWLEDGE_AGENT',
      content: response,
      metadata: {
        timestamp: new Date().toISOString(),
        source: 'medical_knowledge_base'
      }
    };
  }

  async validateInformation(info) {
    const response = await this.gptService.complete({
      systemPrompt: this.systemPrompt,
      message: `Validate the following medical information: ${info}`,
      temperature: 0.1,
      maxTokens: 1000
    });

    return {
      type: 'KNOWLEDGE_AGENT',
      content: response,
      metadata: {
        timestamp: new Date().toISOString(),
        validationScore: 0.9
      }
    };
  }
}

export default KnowledgeAgent;