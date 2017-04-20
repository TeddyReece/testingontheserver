var mocha = require('mocha')
var expect = require('chai').expect
let genericCar = require("../firstcar/firstcar")
let Toyota = require("../toyota/toyota")
let Lexus = require("../lexus/lexus")
let Tesla = require("../tesla/tesla")
// describe('Sample Application', function(){
//   it("should run tests", function(){
//     expect(true).to.be.true
//   })
// })

// Story: As a programmer, I can make a vehicle.
// Hint: Test that new Vehicle() does not raise any errors.

describe('genericCar()', function(){
    it ("should make a car", function(){
      let result = new genericCar()
      expect(result).to.be.an('object')
    })
  })
describe('Toyota()', function(){
    it ("should make a 'whoop' sound", function(){
      let result = new Toyota()
      expect(result.honk()).to.contain('whoop')
    })
})
describe('Toyota()', function(){
    it ("should have wheels", function(){
      let result = new Toyota()
      expect(result.wheels).to.equal(4)
    })
})
describe('Lexus()', function(){
    it ("should make a 'beep' sound", function(){
      let result = new Lexus()
      expect(result.honk()).to.contain('beep')
    })
})
describe('Tesla()', function(){
    it ('should make a "Beep-bee-bee-boop-bee-doo-weep" sound', function(){
      let result = new Tesla()
      expect(result.honk()).to.contain("Beep-bee-bee-boop-bee-doo-weep")
    })
})
describe('Tesla()', function(){
    it ("should have the model year 2017", function(){
      let result = new Tesla()
      expect(result.year).to.equal(2017)
    })
})
describe('Lexus()', function(){
    it ("should turn lights on and off", function(){
      let result = new Lexus()
      expect(result.headLights()).to.equal('on')
      expect(result.headLights()).to.equal('off')
    })
})
describe('Tesla()', function(){
    it ("should turn lights on and off", function(){
      let result = new Tesla()
      expect(result.headLights()).to.equal('on')
      expect(result.headLights()).to.equal('off')
    })
})
describe('Lexus()', function(){
    it ("should turn right signal on or off", function(){
      let result = new Lexus()
      expect(result.rightSignal()).to.equal('on')
      expect(result.rightSignal()).to.equal('off')
    })
})
describe('Lexus()', function(){
    it ("should turn left signal on or off", function(){
      let result = new Lexus()
      expect(result.leftSignal()).to.equal('on')
      expect(result.leftSignal()).to.equal('off')
    })
})
describe('Tesla()', function(){
    it ("should increase speed", function(){
      var result = new Tesla()
      var fn = function() { result.accelerate() }
      expect(fn).to.increase(result, 'speed')
    })
  })
  describe('Tesla()', function(){
      it ("should decrease speed", function(){
        var result = new Tesla()
        var fn = function() { result.brake() }
        expect(fn).to.decrease(result, 'speed')
      })
    })
