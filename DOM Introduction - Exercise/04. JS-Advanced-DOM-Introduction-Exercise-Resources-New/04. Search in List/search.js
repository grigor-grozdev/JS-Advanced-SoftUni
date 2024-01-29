function search() {
   let input = document.getElementById("searchText").value;
   let resultRef = document.getElementById("result");

   let towns = document.querySelector("#towns").children;
   let arrTowns = Array.from(towns);

   if (input == '') {
      resultRef.textContent = '';
      for (let town of arrTowns) {
         town.style.fontWeight = "normal";
         town.style.textDecoration = "none";
      }
      return;
   }
   for (let town of arrTowns) {
      town.style.fontWeight = "normal";
      town.style.textDecoration = "none";
   }

   resultRef.textContent = '';
   let matches = 0;
   for (let town of arrTowns) {
      if (town.textContent.includes(input)) {
         town.style.fontWeight = "bold";
         town.style.textDecoration = "underline";
         matches++;
      }
   }
   resultRef.textContent = `${matches} matches found`
}
