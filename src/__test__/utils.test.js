import {toPriceView} from "../utils/toPriceView";

describe('util toPriceView', () => {
    it('should return "10" string', () => {
        expect(toPriceView(10).length).toBe(2)
    });
    it('should return "100" string', () => {
        expect(toPriceView(100).length).toBe(3)
    });
    it('should return "1 000" string', () => {
        expect(toPriceView(1000).length).toBe(5)
    });
    it('should return "100 000" string', () => {
        expect(toPriceView(100000).length).toBe(7)
    });
});
