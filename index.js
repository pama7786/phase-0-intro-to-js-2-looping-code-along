function writeCards(names) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return thankYouMessages;
  }
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  