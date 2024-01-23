function solve(input){
  
    let result = {};
  
    for (let command of input) {
    let [city, pop] = command.split(' <-> ');
    pop = Number(pop);
    
      if (!result.hasOwnProperty(city)){
         result[city] = pop;
        continue;
      } 
      
          result[city] += pop;   
    
  }
   for (let name in result){
     console.log(`${name} : ${result[name]}`);
   }
  }

  solve(['Istanbul <-> 100000',
  'Honk Kong <-> 2100004',
  'Jerusalem <-> 2352344',
  'Mexico City <-> 23401925',
  'Istanbul <-> 1000']
  )