let calculator = {
  read() {
    this.a = +prompt("a?");
    this.b = +prompt("b?");
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  }
}

calculator.read();
alert("Cумма: " + calculator.sum());
alert("Произведение: " + calculator.mul());