const SEND_MESSAGE = 'SEND_MESSAGE'

type DialogType = {
    id: number
    name: string
}

type MessagesType = {
    id: number
    message: string
}

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
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Привет!'},
        {id: 2, message: 'Эти сообщения хранятся в стэйте и не уходят на сервер'},
        {id: 3, message: 'Максимально допустимый размер сообщения 50 символов'}
    ] as Array<MessagesType>
};

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState,
                        action: any):InitialStateType => {

   switch (action.type) {
      case SEND_MESSAGE:
           let body = action.newMessageBody;
           return {
               ...state,
               messages: [ ...state.messages,{id: 4, message: body} ]
           };


       default:
           return state;
   }
}

type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const sendMessageCreator = (newMessageBody:string):SendMessageCreatorActionType =>
    ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer