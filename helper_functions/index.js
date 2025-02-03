const checkPrime = require('./checkPrime');
const getFunFact = require('./getFunFact');
const isPerfect = require('./isPerfect');
const properties = require('./properties');
const sumDigits = require('./sumDigits');

module.exports = {
    ...checkPrime, 
    ...getFunFact, 
    ...isPerfect,
    ...properties, 
    ...sumDigits
}