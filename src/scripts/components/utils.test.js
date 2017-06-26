import { add, subtract, merge } from './utils.js';




//import assert from 'assert';
import { should, expect, assert } from 'chai';


describe('utils.js helper library', function () {

    describe('add method', function () {

        var total = 0;

        before(function () {
            total = add(1, 1);
        });

        it('should return 2 when 1, 1 provider', function () {
            assert.equal(2, total);
        });

        it('should return a number', function () {
            expect(total).to.be.a('number');
        });

    });

    describe('merge method', function () {

        let a = {
            forename: 'John'
        };

        let b = {
            surname: 'Smith'
        };

        let c = merge(a, b);

        it('should return an object', function () {
            expect(c).to.be.a('object');
        });

        it('should have a forename prop', function () {
            expect(c).to.have.property('forename');
        });

        it('should have a surname prop', function () {
            expect(c).to.have.property('surname');
        });

    });

});