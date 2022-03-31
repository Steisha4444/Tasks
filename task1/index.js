function calculate(expression) {

  const elements = expression.split(" ");
  let result;

  switch (elements[1]) {
      case "+":
          result = elements[0].length + elements[2].length;
          break;
      case "-":
          result = elements[0].length - elements[2].length;
          break;
      case "*":
          result = elements[0].length * elements[2].length;
          break;
      case "//":
          result = elements[0].length / elements[2].length;
          break;
  }

  console.log('.'.repeat(Math.floor(result)));
}

calculate("..... + ...............");
calculate("..... - ...");
calculate("..... - .");
calculate("..... * ...");
calculate("..... * ..");
calculate("..... // ..");
calculate("..... // .");
calculate(". // ..");
calculate(".. - ..");