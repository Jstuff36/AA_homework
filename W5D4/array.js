function sandwhichmaker(magicIngredient) {
  return function(filling) {
    return magicIngredient + " and " + filling;
  };
}

let test = sandwhichmaker("ham");
console.log(test("cheese"));
