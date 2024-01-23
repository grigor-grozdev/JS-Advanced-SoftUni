function solve(arr) {
  
    let heroes = [];
    
    for (let tokens of arr) {
      
      let [name, level, items] = tokens.split(' / ');
      level = Number(level);
      
      items = items ? items.split(', ') : [];
      
      heroes.push({name, level, items});
      
    }
    
    console.log(JSON.stringify(heroes))
  }

  solve(['Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara']
  )