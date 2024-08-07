// Hey Codewarrior!

// You already implemented a Cube class, but now we need your help again! I'm talking about constructors. We don't have one. Let's code two: One taking an integer and one handling no given arguments!

// Also we got a problem with negative values. Correct the code so negative values will be switched to positive ones!

// The constructor taking no arguments should assign 0 to Cube's Side property.

class Cube {
  constructor(side) {
    this.setSide(side);
  }
  getSide() {
    return this.side;
  }
  setSide(n) {
    this.side = n ? Math.abs(n) : 0;
  }
}

// I didn't answer this Kata (I actually don't even understand this solution) by myself. I'm pushing this only because I looked at the solutions, but now I'm actually going to study more about classes and constructors.
