import {getBookingList} from "../redux/action/booking";
import {booking} from "../redux/reducer/booking";

const mockBookingList = [
    {id: 1, passengerID: 1, carID: 1, ownerID: 2, begin: '', end: '', duration: '', description: '', isCarDelivery: false, totalPrice: 1, carDeliveryPrice: 1000, isChildSeat: false, childSeatPrice: 1000, isAnyPlaceEnd: false, anyPlaceEndPrice: 1000, isArchived: false, mark: '', model: '', year: 1000, expires_in: '', is_payed: false},
    {id: 2, passengerID: 1, carID: 2, ownerID: 2, begin: '', end: '', duration: '', description: '', isCarDelivery: false, totalPrice: 1, carDeliveryPrice: 1000, isChildSeat: false, childSeatPrice: 1000, isAnyPlaceEnd: false, anyPlaceEndPrice: 1000, isArchived: false, mark: '', model: '', year: 1000, expires_in: '', is_payed: false},
    {id: 3, passengerID: 1, carID: 3, ownerID: 2, begin: '', end: '', duration: '', description: '', isCarDelivery: false, totalPrice: 1, carDeliveryPrice: 1000, isChildSeat: false, childSeatPrice: 1000, isAnyPlaceEnd: false, anyPlaceEndPrice: 1000, isArchived: false, mark: '', model: '', year: 1000, expires_in: '', is_payed: false},
]

describe('booking', () => {
    it('should get list', () => {
        const action = getBookingList(mockBookingList)
        let state = {
            list: []
        }
        let newState = booking(state, action)
        expect(newState.list.length).toBe(3)
    });

})
