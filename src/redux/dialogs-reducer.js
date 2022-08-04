const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Artur" },
    { id: 2, name: "Edgar" },
    { id: 3, name: "Vadim" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Bye!11" },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 4, message: newMessage }],
        newMessageText: "",
      };
      // stateCopy.messages = [...state.messages];
      // stateCopy.messages.push({ id: 4, message: newMessage });
      // stateCopy.newMessageText = "";
      // return stateCopy;
    }
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
