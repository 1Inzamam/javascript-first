// to compare strings we should always convert them to lowercase or uppercase

const a = 'female';
const b = 'Female';
if(a.toLowerCase == b.toLowerCase){
    console.log('same gender');
}else{
    console.log("different gender");
}

// use of slice

const c = "chamber";
const d = c.slice(3,6);
console.log(d);

//