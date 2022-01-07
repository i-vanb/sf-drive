import {shallow} from "enzyme";
import Faq from "../Faq/Faq";

const wrapper = shallow(<Faq />)

describe('Faq', () => {
    it('should be rendered', () => {
        expect(wrapper).toBeDefined()
    });
    it('snapshot matching', () => {
        expect(wrapper).toMatchSnapshot()
    });
});
