// src/store/actions/conversationActions.js
import GptService from '../../services/GptService';
import { 
  sendMessage, 
  receiveMessage, 
  setLoading, 
  setError, 
  addToHistory 
} from '../reducers/conversationReducer';

// Thunk action creator for handling message sending and agent coordination
export const processUserMessage = (message) => async (dispatch) => {
  try {
    // Show loading state
    dispatch(setLoading(true));
    dispatch(setError(null));
    
    // Add user message to the conversation
    dispatch(sendMessage({ type: 'USER', content: message }));

    // Get responses from different agents
    const patientResponse = await GptService.getAgentResponse(
      'Patient Agent',
      'Analyze symptoms and patient concerns from a patient perspective.',
      message
    );

    const doctorResponse = await GptService.getAgentResponse(
      'Doctor Agent',
      'Provide medical analysis and recommendations based on symptoms.',
      message
    );

    const knowledgeResponse = await GptService.getAgentResponse(
      'Knowledge Agent',
      'Provide relevant medical information and research context.',
      message
    );

    // Coordinate responses
    const agentResults = {
      patient: patientResponse,
      doctor: doctorResponse,
      knowledge: knowledgeResponse
    };

    const finalResponse = await GptService.coordinateResponses(message, agentResults);

    // Add system response to conversation
    dispatch(receiveMessage({ type: 'SYSTEM', content: finalResponse }));

    // Add to conversation history
    dispatch(addToHistory({
      timestamp: new Date().toISOString(),
      userMessage: message,
      response: finalResponse
    }));

  } catch (error) {
    console.error('Error processing message:', error);
    dispatch(setError('Failed to process your message. Please try again.'));
  } finally {
    dispatch(setLoading(false));
  }
};