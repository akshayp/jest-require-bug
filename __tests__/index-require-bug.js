/*globals jasmine, describe, it, beforeEach, expect*/

// This file will not generate a coverage report

var modPath = '../index.js';
jest.dontMock(modPath);
var lib;

describe('Lib tests', function() {
    beforeEach(function() {
        lib = require(modPath);
    });

    it('asserts truth', function() {
        expect(lib()).toEqual(true);
    });
});