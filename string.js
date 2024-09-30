// to compare strings we should always convert them to lowercase or uppercase

const a = 'female';
const b = 'Female';
if(a.toLowerCase == b.toLowerCase){
    console.log('same gender');
}else{
    console.log("different gender");
}