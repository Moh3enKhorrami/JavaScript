const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

  let text = "";
  for (const x of fruits.entries()){
    text += x + " ";
  }

  console.log(text);