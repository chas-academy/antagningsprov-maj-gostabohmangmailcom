function uppg5() {
  // skriv en if-sats som jämför två tal
  // om det första talet är större än det andra, skriv ut "Det första talet är större än det andra"
  // annars skriv ut "Det andra talet är större än det första"

  const firstNumber = 5
  const secondNumber = 10

  if (firstNumber > secondNumber) {
    console.log("Det första talet är större än det andra")
  } else {
    // Här skulle jag egentligen vilja ha en else if-sats för att kunna hantera om talen är lika,
    // men av instruktionen och testet att döma så verkar det inte vara en del av uppgiften
    console.log("Det andra talet är större än det första")
  }
}

module.exports = { uppg5 }
