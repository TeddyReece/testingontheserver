
class Car{
  constructor(){
    this.wheels = 4
    this.horn = "beep"
    this.lights = "off"
    this.speed = 0
  }
  honk(){
    return "beep"
  }
}
const YEAR = 2017
class Tesla extends Car{

  constructor(){
    super()
    this.year = YEAR
  }
  accelerate(){
    this.speed += 10
    return this.speed
  }
  brake(){
    this.speed -= 7
    return this.speed
  }
  headLights(){
    if(this.lights == "off"){
      this.lights = "on"
      return this.lights
    }else{
      this.lights = "off"
      return this.lights
    }
  }
  honk(){
    return "Beep-bee-bee-boop-bee-doo-weep"
  }
}

module.exports = Car
module.exports = Tesla

// Story: As a programmer, I can tell which model year a vehicle is from. Model years never change.
// Hint: Make model year part of the initialization.
