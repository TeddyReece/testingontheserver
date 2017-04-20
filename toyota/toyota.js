class Car{
  constructor(){
    this.wheels = 4
    this.horn = "beep"
  }
  honk(){
    return "beep"
  }
}

class Toyota extends Car{
  constructor(){
    super()
  }
  honk(){
    return "whoop"
  }
}

module.exports = Car
module.exports = Toyota
