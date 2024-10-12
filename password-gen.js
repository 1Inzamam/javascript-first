function password(pass) {
    // for name 
    let name = pass.name;  
    const capital = name[0].toUpperCase();
    const small = name.slice(1);
    name = capital + small;
    
    // for website name 
    let website = pass.website;
    const capitalWeb = website[0].toUpperCase();
    const smallWeb = website.slice(1);
    website = capitalWeb + smallWeb;
   

const generatedPassword = name + "#" + passwordToG.birthYear + "@" + website;
console.log(generatedPassword);
}

const passwordToG = {
  name: "pickupbaba",
  birthYear: 1921,
  website: "yahoo",
};

password(passwordToG);