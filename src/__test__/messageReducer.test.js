import {message} from "../redux/reducer/message";
import {addMessage} from "../redux/action/message";

const mockMessage = {id: 1}

describe('message', () => {
    it('should be added', () => {
        const action = addMessage(mockMessage)
        let state = {
            chats: [],
            current: {
                    user_info: {},
                messages: [],
            },
            notification: []
        }
        let newState = message(state, action)
        expect(newState.current.messages.length).toBe(1)
    });

})
