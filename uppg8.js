function uppg8() {
  // skapa en array med fem person obkjet
  // varje person objekt ska ha två properties, name och age
  const people = [
    { name: "Obi-Wan Cannoli", age: 25 },
    { name: "Manikin Skywalker", age: 35 },
    { name: "Juan Solo", age: 28 },
    { name: "Luke Skystalker", age: 32 },
    { name: "Leia Oregano", age: 29 },
  ]

  // skapa en fuktion som tar in en array som argument
  function peopleOver30(peopleArray) {
    for (let person of peopleArray) {
      // skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
      //  över 30 år som skrivs ut i konsolen
      if (person.age > 30) {
        console.log(person.name)
      }
    }
  }

  // anropa funktionen och skicka med arrayen som argument
  peopleOver30(people)
}

module.exports = { uppg8 }
