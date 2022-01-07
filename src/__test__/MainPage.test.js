import {CarMainList} from "../SearchCar/SearchCarContainer";
import {shallow} from "enzyme";
import Main from "../Main/Main";

const mockCars = [{}]
const mockGetDetails = jest.fn()


describe('Car List', function () {
    it('should be rendered', () => {
        const wrapper = shallow(<CarMainList cars={mockCars} getDetails={mockGetDetails}/>)
        expect(wrapper).toBeDefined()
    });
    it('Detail function should called on click', () => {
        const wrapper = shallow(<CarMainList cars={mockCars} getDetails={mockGetDetails}/>)
        wrapper.find('a').simulate('click')
        expect(mockGetDetails).toBeCalled()
    });
    it('snapshot matching', () => {
        const wrapper = shallow(<CarMainList cars={mockCars} getDetails={mockGetDetails}/>)
        expect(wrapper).toMatchSnapshot()
    });
});

describe('Unauthorized Main page', () => {
    it('snapshot matching', () => {
        const wrapper = shallow(<Main />)
        expect(wrapper).toMatchSnapshot()
    });
});
