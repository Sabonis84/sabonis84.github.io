const mainAvto = {
  arr: [],
};
const colorAvto = ['желтый', 'зеленый', 'красный', 'синий', 'оранжевый'];
const transmission = ['механическая', 'автоматическая'];
const conditions = ['установлен', 'отсутствует'];
const salon = ['кожа', 'ткань', 'комбинированая'];

function Item(c, tr, con, s) {
  this.colorAvto = c;
  this.transmission = tr;
  this.conditions = con;
  this.salon = s;
}
let count = 1;
colorAvto.forEach(col => {
  transmission.forEach(trans => {
    conditions.forEach(con => {
      salon.forEach(sal => {
        let tempObj = new Item(col, trans, con, sal);
        let tempStr = `X-${String(count).padStart(4, '0')} Y-${col} Z-${trans} W-${con} V-${sal}`;
        tempObj.code = tempStr 
        mainAvto.arr.push(tempObj);
        count ++;
      })
    })
  })
})

console.dir(mainAvto)