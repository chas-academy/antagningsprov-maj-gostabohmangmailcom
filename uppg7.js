function uppg7() {
  // skapa en funktion som tar in två tal som argument
  function sum(numA, numB) {
    // funktionen ska returnera summan av talen
    return numA + numB
  }

  // kalla på funktionen i en return statement och ge den parametrarna 5 och 10
  return sum(5, 10)
}

module.exports = { uppg7 }
