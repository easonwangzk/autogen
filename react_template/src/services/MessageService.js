// src/services/MessageService.js
class MessageService {
  constructor(coordinatorAgent) {
    this.coordinatorAgent = coordinatorAgent;
    this.messageQueue = [];
  }

  async sendMessage(message) {
    try {
      const response = await this.coordinatorAgent.processMessage(message);
      this.messageQueue.push({
        sent: message,
        received: response,
        timestamp: new Date().toISOString()
      });
      return response;
    } catch (error) {
      console.error('Error processing message:', error);
      return {
        type: 'ERROR',
        content: 'Sorry, there was an error processing your message. Please try again.',
        metadata: {
          timestamp: new Date().toISOString(),
          error: error.message
        }
      };
    }
  }

  getMessageHistory() {
    return this.messageQueue;
  }

  clearHistory() {
    this.messageQueue = [];
  }
}

export default MessageService;