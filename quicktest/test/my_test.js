var expect = require('chai').expect
var TimeClass = require('../timeconvertor')

describe('Given a time', function () {
  describe('when the time is converted to words', function(){

    it("returns midnight", function () {
      var currentTime = new TimeClass('00:00');
      expect(currentTime.convert()).to.equal('midnight ');

    });

    it("returns noon", function () {
      var currentTime = new TimeClass('12:00');
      expect(currentTime.convert()).to.equal('noon ');

    });

    it("returns 1 O'clock", function () {
      var currentTime = new TimeClass('01:00');
      expect(currentTime.convert()).to.equal("1 O'clock");

    });
    it("returns 2 O'clock", function () {
      var currentTime = new TimeClass('02:00');
      expect(currentTime.convert()).to.equal("2 O'clock");
   
    });
    it("returns 3 O'clock", function () {
    var currentTime = new TimeClass('03:00');
    expect(currentTime.convert()).to.equal("3 O'clock");

  });
  it("returns 4 O'clock", function () {
  var currentTime = new TimeClass('04:00');
  expect(currentTime.convert()).to.equal("4 O'clock");
 });
 
 it("returns 5 O'clock", function () {
  var currentTime = new TimeClass('05:00');
  expect(currentTime.convert()).to.equal("5 O'clock");
 });

 it("returns 6 O'clock", function () {
  var currentTime = new TimeClass('06:00');
  expect(currentTime.convert()).to.equal("6 O'clock");
 });
 it("returns 7 O'clock", function () {
  var currentTime = new TimeClass('07:00');
  expect(currentTime.convert()).to.equal("7 O'clock");
 });
 it("returns 8 O'clock", function () {
  var currentTime = new TimeClass('08:00');
  expect(currentTime.convert()).to.equal("8 O'clock");
 });
 it("returns 9 O'clock", function () {
  var currentTime = new TimeClass('09:00');
  expect(currentTime.convert()).to.equal("9 O'clock");
 });
 it("returns 10 O'clock", function () {
  var currentTime = new TimeClass('10:00');
  expect(currentTime.convert()).to.equal("10 O'clock");
 });
 it("returns 11 O'clock", function () {
  var currentTime = new TimeClass('11:00');
  expect(currentTime.convert()).to.equal("11 O'clock");
 });
 it("returns 1 O'clock", function () {
  var currentTime = new TimeClass('13:00');
  expect(currentTime.convert()).to.equal("1 O'clock");
 });
 it("returns 2 O'clock", function () {
  var currentTime = new TimeClass('14:00');
  expect(currentTime.convert()).to.equal("2 O'clock");
 });
 it("returns 3 O'clock", function () {
  var currentTime = new TimeClass('15:00');
  expect(currentTime.convert()).to.equal("3 O'clock");
 });
 it("returns 4 O'clock", function () {
  var currentTime = new TimeClass('16:00');
  expect(currentTime.convert()).to.equal("4 O'clock");
 });
 it("returns 5 O'clock", function () {
  var currentTime = new TimeClass('17:00');
  expect(currentTime.convert()).to.equal("5 O'clock");
 });
 it("returns 6 O'clock", function () {
  var currentTime = new TimeClass('18:00');
  expect(currentTime.convert()).to.equal("6");
 });
 it("returns 7 O'clock", function () {
  var currentTime = new TimeClass('19:00');
  expect(currentTime.convert()).to.equal("7");
 });
 it("returns 8 23 past", function () {
  var currentTime = new TimeClass('20:23');
  expect(currentTime.convert()).to.equal("20:23");
 });
 it("returns 9 O'clock", function () {
  var currentTime = new TimeClass('21:00');
  expect(currentTime.convert()).to.equal("9");
 });
 it("returns 10 O'clock", function () {
  var currentTime = new TimeClass('22:00');
  expect(currentTime.convert()).to.equal("10");
 });
 it("returns 11 O'clock", function () {
  var currentTime = new TimeClass('23:00');
  expect(currentTime.convert()).to.equal("11");
 });
 it("returns Half ten", function () {
   var currentTime = new TimeClass('22:30');
   expect(currentTime.convert()).to.equal("Half ten");
 });
});
});
