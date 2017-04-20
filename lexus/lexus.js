class Car{
  constructor(){
    this.wheels = 4
    this.horn = "beep"
    this.lights = "off"
    this.signalsRight = "off"
    this.signalsLeft = "off"
  }
  honk(){
    return "beep"
  }
}

class Lexus extends Car{
  constructor(){
    super()
  }
  rightSignal(){
    if(this.signalsRight == "off"){
      this.signalsRight = "on"
      return this.signalsRight
    }else{
      this.signalsRight = "off"
      return this.signalsRight
    }
  }
  leftSignal(){
    if(this.signalsLeft == "off"){
      this.signalsLeft = "on"
      return this.signalsLeft
    }else{
      this.signalsLeft = "off"
      return this.signalsLeft
    }
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
    return "beep"
  }
}

module.exports = Car
module.exports = Lexus
