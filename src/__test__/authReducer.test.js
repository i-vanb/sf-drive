import {setAuthorized} from "../redux/action/auth";
import auth from "../redux/reducer/auth";

const mockUser = {id: 2}

describe('auth', () => {
    it('should get authorized when got true', () => {
        const action = setAuthorized(true, mockUser)
        let state = {
            isAuthorized: false
        }
        let newState = auth(state, action)
        expect(newState.isAuthorized).toBeTruthy()
    });
    it('should get unauthorized when got false', () => {
        const action = setAuthorized(false)
        let state = {
            isAuthorized: true
        }
        let newState = auth(state, action)
        expect(newState.isAuthorized).toBeFalsy()
    });

})
