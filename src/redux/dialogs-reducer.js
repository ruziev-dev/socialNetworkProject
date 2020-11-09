const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Димон'},
        {id: 2, name: 'Катя'},
        {id: 3, name: 'Андрей'},
        {id: 4, name: 'Елизавета'},
        {id: 5, name: 'Света'},
        {id: 6, name: 'Валера'},
        {id: 7, name: 'Саша'},
        {id: 8, name: 'Витёк'},
        {id: 9, name: 'Евгений'},
        {id: 10, name: 'Евгения'}
    ],
    messages: [
        {id: 1, message: 'Привет!'},
        {id: 2, message: 'Эти сообщения хранятся в стэйте и не уходят на сервер'},
        {id: 3, message: 'Максимально допустимый размер сообщения 50 символов'}
    ]
};

const dialogsReducer = (state = initialState, action) => {

   switch (action.type) {
      case SEND_MESSAGE:
           let body = action.newMessageBody;
           return {
               ...state,
               messages: [ ...state.messages,{id: 6, message: body} ]
           };


       default:
           return state;
   }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;