/*globals jasmine, describe, it, beforeEach, expect*/

// This file will generate a coverage report

jest.dontMock('../index.js');
var lib;

describe('Lib tests', function() {
    beforeEach(function() {
        lib = require('../index.js');
    });

    it('asserts truth', function() {
        expect(lib()).toEqual(true);
    });
});