// GptService.js handles all interactions with the GPT API
class GptService {
  constructor() {
    this.apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    this.apiUrl = 'https://api.openai.com/v1/chat/completions';
  }

  async generateResponse(messages) {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: messages,
          temperature: 0.7,
          max_tokens: 1000,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`GPT API Error: ${errorData.error?.message || 'Unknown error'}`);
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('Error in GPT service:', error);
      throw error;
    }
  }

  async getAgentResponse(role, context, userInput) {
    const messages = [
      {
        role: 'system',
        content: `You are a ${role} in a medical multi-agent system. ${context}`,
      },
      {
        role: 'user',
        content: userInput,
      },
    ];

    return this.generateResponse(messages);
  }

  // Method for coordinating multiple agent responses
  async coordinateResponses(userInput, agentResults) {
    const messages = [
      {
        role: 'system',
        content: 'You are a coordinator agent responsible for synthesizing responses from multiple medical agents into a coherent and helpful response.',
      },
      {
        role: 'user',
        content: `User input: ${userInput}\n\nAgent responses:\n${JSON.stringify(agentResults, null, 2)}`,
      },
    ];

    return this.generateResponse(messages);
  }
}

export default new GptService();