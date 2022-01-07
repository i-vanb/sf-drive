import {shallow} from "enzyme";
import {BookingCard} from "../Bookings/BookingCard";

const mockProps = {mark:'', model:'', year:'', price:'', begin:'', end:''}
const wrapper = shallow(<BookingCard {...mockProps} />);

describe('Booking', () => {
    it('should be defined', () => {
        expect(wrapper).toBeDefined()
    });
    it('snapshot matching', () => {
        expect(wrapper).toMatchSnapshot()
    });
});
