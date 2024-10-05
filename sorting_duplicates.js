const sorted = [];

function duplicate(str){
    for(let i of str){
        if(sorted.includes(i) === false){
            sorted.push(i);
        }
    }
    return sorted;
}
const names = ['selina', 'salina gomez', 'rahim', 'mina', 'tom', 'raju', 'Jawad', 'jawad', 'jawad', 'qulsum', 'tahsin','tamanna'];
const sort=duplicate(names);
console.log(sort);