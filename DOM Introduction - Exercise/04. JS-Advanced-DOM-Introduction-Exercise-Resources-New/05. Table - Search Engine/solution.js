function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let searchRef = document.getElementById("searchField");
   let tableRows = Array.from(document.querySelectorAll("tbody tr"));

   function onClick() {
      let search = searchRef.value;
      for (let tableRow of tableRows) {
         let tableData = Array.from(tableRow.children);
         for (let data of tableData) {
            if (data.textContent.includes(search)) {
               tableRow.classList.add("select");
               break;
            } else {
               tableRow.classList.remove("select");
            }
         }
      }
      searchRef.value = '';
   }
}