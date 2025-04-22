# Project Summary
The medical multi-agent system is a lightweight web application designed to facilitate medical consultations using the GPT API. It integrates various agent roles—patient, doctor, knowledge, and coordinator—to deliver accurate medical advice efficiently while prioritizing user privacy and data security.

# Project Module Description
The project consists of several functional modules:
- **User Agent**: Manages user inputs and interactions.
- **Doctor Agent**: Analyzes symptoms and provides medical advice.
- **Knowledge Agent**: Manages medical knowledge and updates.
- **Coordinator Agent**: Routes messages between agents and oversees interaction flow.
- **Frontend**: Built with React and Tailwind CSS for a responsive user interface.
- **Backend**: Node.js with Express for API management and MongoDB for data storage.

# Directory Tree
```
react_template/
├── src/
│   ├── App.jsx                       # Main application component
│   ├── components/
│   │   ├── ChatInterface.jsx         # Chat interface component
│   │   ├── UserProfile.jsx           # User profile component
│   │   └── HistoryViewer.jsx         # Consultation history viewer
│   ├── agents/
│   │   ├── CoordinatorAgent.js       # Coordinator agent logic
│   │   ├── DoctorAgent.js            # Doctor agent logic
│   │   ├── KnowledgeAgent.js         # Knowledge agent logic
│   │   └── PatientAgent.js           # Patient agent logic
│   ├── services/
│   │   ├── GptService.js             # GPT API integration (updated to use .env for API key)
│   │   └── MessageService.js          # Message handling between agents
│   ├── store/
│   │   ├── index.js                  # Redux store configuration
│   │   ├── reducers/
│   │   │   ├── conversationReducer.js # Reducer for conversation state (updated)
│   │   │   └── userReducer.js        # Reducer for user state
│   └── utils/
│       └── agentHelpers.js           # Helper functions for agents
├── .env                               # Environment variables (contains API key)
├── .gitignore                         # Git ignore file (excludes .env)
├── package.json                       # Project dependencies and scripts
├── tailwind.config.js                # Tailwind CSS configuration
└── vite.config.js                    # Vite configuration for development
```

# File Description Inventory
- **prd.json**: Contains project requirements and goals in JSON format.
- **prd.md**: Contains project requirements and goals in Markdown format.
- **system_design.json**: JSON file detailing the system architecture and design.
- **medical_multiagent_class_diagram.mermaid**: Mermaid diagram for class structure.
- **medical_multiagent_sequence_diagram.mermaid**: Mermaid diagram for sequence of interactions.
- **medical_multiagent_system_design.md**: Documentation of the system design approach.

# Technology Stack
- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Caching**: Redis
- **Deployment**: AWS S3 for backup
- **Real-time Communication**: WebSocket, Socket.io
- **API**: OpenAI GPT-4

# Usage
To set up and run the project:
1. Navigate to the `react_template` directory.
2. Create a `.env` file and add the GPT API key using the format `VITE_API_KEY=your_api_key`.
3. Install dependencies:
   ```bash
   pnpm i @reduxjs/toolkit react-redux
   ```
4. Run the linter to check for issues:
   ```bash
   pnpm run lint
   ```
5. Build the project:
   ```bash
   pnpm run build
   ```
6. Start the development server:
   ```bash
   pnpm run dev
   ```
