import {shallow} from "enzyme";
import Footer from "../components/Footer";


describe('links', function () {
    it('should be in footer', function () {
        const footer = shallow(<Footer />);
        expect(footer.find('a').length).toBe(3)
    });
    it('snapshot matching', function () {
        const footer = shallow(<Footer />);
        expect(footer).toMatchSnapshot()
    });
});
