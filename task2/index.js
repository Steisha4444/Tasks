function calculate(n) {

  let displace = 0;

  for (let i = 0; i < n; i++) {

      let row = "";

      for (let k = 97 + displace; k < 97 + n + displace; k++) {

          let letter = k;

          if (letter > 122) {

              letter -= 26 * Math.floor((letter - 97) / 26);
          }

          row = row + String.fromCharCode(letter) + " ";
      }

      displace++;
      console.log(row, "\n");
  }

}
calculate(50)