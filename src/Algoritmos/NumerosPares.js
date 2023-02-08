const parArray = [];

function numerosPares() {
  for (var i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      parArray.push(i);
    }
  }
  console.log(parArray);
}

numerosPares();
