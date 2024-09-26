
const a = isNaN('11');  // output: false because javascript can convert the string "11" in to a number so the NaN "not a number" returns false
console.log(a)

const b = "eleven";     // output: true the string "eleven" cannot be converted in to a number so NaN "not a number" returns true
console.log(isNaN(b))

const c = isNaN(2-11);         // false
console.log(c)

const d = 11;           //false
console.log(isNaN(d))