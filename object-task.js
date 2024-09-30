const c = {
    red : "#ff00",
    green: "#00ff00",
    blue:"#000ff",
    brown:{
        dark:'#5C4033',
        light:'#C4A484',
        normal:'#A52A2A',
        'extra-dark': '#5C4033',
    }
}
// console.log(c.blue);

// adding a property in an object 

Object.defineProperty(c, "yellow",{value:"#FFFF00"});
console.log(c)

