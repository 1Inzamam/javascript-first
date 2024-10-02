const color = ["red", "blue", "yellow", "green", "indigo"];
const reversed = [];

// for(let i=color.length -1; i>=0; i--){
//     const re_num = color[i];
//     reversed.push(re_num);
// }
// console.log(reversed);

//////////////////////////////////////////////////////////////

// for(const num of color){
//     reversed.unshift(num);
// }
// console.log(reversed);

///////////////////////////////////////////////////////

// for(let i=0; i<color.length; i++){
//     const num = color[i];
//     reversed.unshift(num);
// }
// console.log(reversed);

//////////////////////////EVEN NUMBER///////////////////////////////////////////////////

const array = [11, 9, 12, 43, 7, 8, 22, 2, 1, 99, 100];
const final_array = [];
for (let i = 0; i < array.length; i++) {
  const num = array[i];
  if (num % 2 == 0) {
    final_array.push(num);
  }
}
const final_as = final_array.sort(function (a, b) {
  return a - b;
});
console.log(final_as);
