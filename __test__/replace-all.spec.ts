import { expect } from 'chai';
import { replaceAll } from '../src/bianky-helpers';

describe('Replace all search matched values with replacement ones', () => {
    it('Must find Replacement in passed text', () => {
        const text = "Hello world! and again Hello world";
        
        expect(replaceAll(text, 'world', 'bianky')).not.have.includes('world');
    })
})