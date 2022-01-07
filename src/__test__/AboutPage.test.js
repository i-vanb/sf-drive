import {shallow} from "enzyme";
import About from "../About/About";

const wrapper = shallow(<About />)

describe('About', () => {
    it('should be rendered', () => {
        expect(wrapper).toBeDefined()
    });
    it('snapshot matching', () => {
        expect(wrapper).toMatchSnapshot()
    });
});
