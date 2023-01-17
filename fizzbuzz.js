var box = [];
var count = 1;
function fizzbuzz() {
  if (count % 3 == 0) {
    box.push("fizz");
  } else if (count % 5 == 0) {
    box.push("buzz");
  } else if (count % 3 == 0 && count % 5 == 0) {
    box.push("fizzbuzz");
  } else {
    box.push(count);
  }
  count++;
  console.log(box);
}