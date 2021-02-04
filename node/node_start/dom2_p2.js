
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



fs.writeFile('./arr.txt', `${tempArr}`, 'utf8', (err) => {
    if (err) {
        console.log('ERRRR')
    };
   })

console.log(tempArr)


} 

});