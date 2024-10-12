function nameditect(name){
    
    const gn = "good name";
    const bn = "bad name";
    if(typeof name === "string"){
        const lowerCase = name.toLowerCase();
    // console.log(lowerCase);
    const lastChar = lowerCase[lowerCase.length -1];
    // console.log(lastChar);
    if(["a", "e", "i", "o", "u"].includes(lastChar)){
        return gn;
    }
    else{
        return bn;
    }
    }
    else{
        console.log("Wrong Input");
    }
    
}
const names = "Jamal";
const print = nameditect(names);
console.log(print);