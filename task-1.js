function normalizeInput(input, to) {
  if (to === "upper") {
    console.log(input.toUpperCase());
  }else{
    console.log(input.toLowerCase());
  }
}
normalizeInput("This ISN'T SpaM", "upper")
normalizeInput("Big SALE", "lower")
normalizeInput("This ISN'T SpaM", "lower")
normalizeInput("Big SALE", "upper")
normalizeInput("Stay Awhile and Listen", "lower")
 normalizeInput("Stay Awhile and Listen", "upper")