// Code your solution in this file!

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}
//
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
   return function(arg){
     return arg * int
   }
}

const fareDoubler = function (fare) {
  return createFareMultiplier(2)(fare)
}

const fareTripler = function (fare){
  return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(arr, func){
   return func(arr)
}
