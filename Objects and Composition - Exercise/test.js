function solve() {

  //let canCast = (state) =>({ 
  //    cast: (spell) => {
  //        console.log(`${state.name} cast ${spell}`);
  //        state.mana --;
  //    }
  //});

  function canCast(state) {
    return {
      cast(spell) {
        console.log(`${state.name} cast ${spell}`);
          state.mana --;
      }
    }
  }
   
  function mage(name) {
      let state = {
          name,
          health: 100,
          mana: 100
      }
      return Object.assign(state, canCast(state));

  };
  
    return {mage: mage};
    
};

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

console.log(scorcher.mana);
