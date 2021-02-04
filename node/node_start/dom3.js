// const http = require('http');
const request = require('request');
 
// const server = http.createServer((request,response) => {
//     response.write('<h1>hello world</h1>');
//     response.end();
// })

// // server.on(('error', (err) => {
// //     console.log(err);
// // }))


// server.listen(3000, () => {
//     console.log('opened server on port', server.address().port)
// });

request('http://auto.ria.com/uk/search/?indexName=auto,order_auto,newauto_search&body.id[4]=2&year[0].gte=2012&year[0].lte=2012&categories.main.id=1&brand.id[0]=6&price.currency=1&gearbox.id[1]=2&gearbox.id[2]=3&fuel.id[1]=2&drive.id[0]=1&abroad.not=0&custom.not=1&page=0&size=50', function (error, response, body) {
  if (error) {
    console.log('ERROR!!!', error)
  } else {
    //   let str1 = 'ticket-item new_ticket t';
    //   let out = body.split(str1)
    //     .filter(el => el.includes('data-main-price'));

   
    let str = body;
    // let strLen = 'CACHE/images/img/announces/'.length;
    let tempArr = str.split('>')
    .map(el => el.slice(el.indexOf('ticket-item new_ticket t')))
    // .filter(el => el.includes('announces'))
    // .map(el => el.slice(0, el.indexOf('"')))
    // .map(el => el.slice(strLen))
    // .map(el => el.split('/'))
    
    console.log(tempArr)
    
   
    } 
    
    });