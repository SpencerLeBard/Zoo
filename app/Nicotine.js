class Nicotine {
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
    console.log('Chomp ${noise}!')
  }
  speak(noise) {
    alert(`The ${this.constructor.name} `)
  }
}
export default Nicotine 