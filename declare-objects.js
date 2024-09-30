// objects 

const a = {
    name: 'Jack the ripper',
    age: 65,
    color: "white",
    isMurderer: true
}

// console.log(a.name);


// const v = Object.values(a);
// console.log(v);

////////////////////////////////////////////////

// for(const p in a){
//     console.log(p);
//     console.log(a[p]);
// }


const k = Object.keys(a);
console.log(k);
for(const z of k){
    console.log(z,a[z]);
}