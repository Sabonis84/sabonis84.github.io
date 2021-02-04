
const request = require('request');
const fs = require('fs');
request('http://dou.ua', function (error, response, body) {
  if (error) {
    console.log('ERROR!!!')
  } else {

let str = body;
let strLen = 'CACHE/images/img/announces/'.length;
let tempArr = str.split('>')
.map(el => el.slice(el.indexOf('CACHE/images/img/announces')))
.filter(el => el.includes('announces'))
.map(el => el.slice(0, el.indexOf('"')))
.map(el => el.slice(strLen))
.map(el => el.split('/'))

console.log(tempArr)

tempArr.forEach(elem1 => {
  console.log(elem1[0], elem1[1])
   request(`https://s.dou.ua/CACHE/images/img/announces/${elem1[0]}/${elem1[1]}`).pipe(fs.createWriteStream(`./images/${elem1[1]}`))  
 });

} 

});

    