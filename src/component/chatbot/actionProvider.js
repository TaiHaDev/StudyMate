import { getRequest} from "../../api/Request";

class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }
   chatGPTRequest = async (query) => {
    const response = await getRequest("chatbox/chat?prompt=" + query);
    console.log(response.response);
    const botMessage = this.createChatBotMessage(response.response);
    this.updateChatbotState(botMessage);
   }
   updateChatbotState(message) {     
       this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }))
      }
 }
 
 export default ActionProvider;