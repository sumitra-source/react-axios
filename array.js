const names=['Sumitra Shrestha','Nikita Rijal','Nabina Kusi']
const orderedNames=[...names].sort((name1,name2)=>name1.split('')[1].localeCompare(name2.split('')[1]))
console.log(names);