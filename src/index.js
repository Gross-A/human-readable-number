module.exports = function toReadable (number) {
  let   arrNumber= {
      0 : 'zero',
      1 : 'one',
      2 : 'two',
      3 : 'three',
      4 : 'four',
      5 : 'five',
      6 : 'six',
      7 : 'seven',
      8 : 'eight',
      9 : 'nine',
      10 : 'ten',
      11 : 'eleven',
      12 : 'twelve',
      13 : 'thirteen',
      14 : 'fourteen',
      15 : 'fifteen',
      16 : 'sixteen',
      17 : 'seventeen',
      18 : 'eighteen',
      19 : 'nineteen',
      20 : 'twenty',
      30 : 'thirty',
      40 : 'forty',
      50 : 'fifty',
      60 : 'sixty',
      70 : 'seventy',
      80 : 'eighty',
      90 : 'ninety',
      100 : 'hundred'
  }
  if (number >= 0 && number <= 20) {
    return (arrNumber[number])
    // return arrNumber[number];
  } 

  else if (number > 20 && number < 100 && number%10 === 0){
    return (arrNumber[number])
  }

  else if (number > 20 && number < 100 ) {
    return (arrNumber[Math.trunc(number/10) * 10] + ' ' + arrNumber[number%10])
  }

  else if (number%100 === 0){
    return (arrNumber[number/ 100] + ' ' + arrNumber[100])
  }

  else if (number%100 > 0 && number%100 <= 20 && number < 1000){
    return (arrNumber[Math.trunc(number/100)] + ' '  + arrNumber[100] + ' ' + arrNumber[number%100])
  }

  else if (number%100 > 20 && number%100 < 100 && number%10 === 0){
    return (arrNumber[Math.trunc(number/100)] + ' '  + arrNumber[100] + ' ' + arrNumber[number%100])
  }


  else if (number > 100 && number < 1000 && number%10 != 0 ){
    return (arrNumber[Math.trunc(number/100)] + ' '  + arrNumber[100] + ' ' + arrNumber[Math.trunc((number - Math.trunc(number/100) * 100)/10) * 10] + ' ' + arrNumber[number%10])
  }

}
