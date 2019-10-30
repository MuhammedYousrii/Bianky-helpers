import {expect} from 'chai';
import { buildQueryString } from '../src/bianky-helpers';
describe('Build querystring from object of pairs keys/values', () => {

    it('Should return valid querystring', () => {
        const mobileInformation = {
            name: "S10",
            // tslint:disable-next-line: object-literal-sort-keys
            brand: "samsung"
        }

        expect(buildQueryString(mobileInformation)).to.be.equal('?name=S10&brand=samsung');
    });
});
