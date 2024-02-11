function solve(arr){
  
    let juices = {};
    let result = [];
    let bottles = {};
    
     
     for (let row of arr) {
       let [juice, qty] = row.split(' => ');
       qty = Number(qty);
       if (juices.hasOwnProperty(juice)){
         juices[juice] += qty;
       } else {
         juices[juice] = qty;
       }  
       
       if (juices[juice] >= 1000) {
         if (!result.includes(juice)){
           result.push(juice)
         }
         if(bottles.hasOwnProperty(juice)){
           bottles[juice] += Math.floor(juices[juice] / 1000);
           juices[juice] = juices[juice] - (Math.floor(juices[juice] / 1000)) * 1000;
         } else {
           bottles[juice] = Math.floor(juices[juice] / 1000);
           juices[juice] = juices[juice] - (Math.floor(juices[juice] / 1000)) * 1000;
         }
       }
       
     }
     
     for (let el of result){
       console.log(`${el} => ${bottles[el]}`)
     }
   }