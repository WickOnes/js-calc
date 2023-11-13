class Calc {
  static #value = ''
  static #isDot = false

  static add = (newValue) => {
    if (isNaN(this.#value[this.#value.length - 2])) {
      if (
        Number(this.#value[this.#value.length - 1]) === 0 &&
        this.#isDot == false
      ) {
        return null
      }
    }

    this.#value = this.#value.concat(newValue)
    this.#output()
  }
  static dot = () => {
    if (this.#isDot) {
      return null
    }

    if (isNaN(this.#value[this.#value.length - 1])) {
      return null
    }

    this.#value = this.#value.concat('.')
    this.#output()
    this.#isDot = true
  }

  static del = () => {
    this.#value = this.#value.slice(0, -1)
    this.#output()
  }

  static op = (opValue) => {
    this.#isDot = false
    if (isNaN(this.#value[this.#value.length - 1])) {
      return null
    }
    this.#value = this.#value.concat(opValue)
    this.#output()
  }
  static reset = () => {
    this.#value = ''
    this.#output()
    this.#isDot = false
  }

  static #output = () => {
    this.#save()
    window.output.innerHTML = this.#value
  }

  static result = () => {
    this.#value = String(eval(this.#value))
    this.#output()
  }

  static #save = () => {
    window.localStorage.setItem('calc', this.#value)
  }
  static #load = () => {
    this.#value = window.localStorage.getItem('calc') || ''
  }

  static init = () => {
    console.log("calc init");
    this.#load()
    // this.#output()
  }
}

Calc.init()

window.calc = Calc
