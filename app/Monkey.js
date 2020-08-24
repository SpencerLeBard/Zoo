class Monkey {
  constructor(
    name = '',
    color = '',
    gender = '',
    weight = 0,
    teethSize = '',
  ) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.teethSize = teethSize;
  }
  eat(food) {
    console.log(`Chomp ${food}!`)
  }
  speak(noise) {
    console.log(`The ${this.name} says ${noise}`)
  }
}
export default Monkey 