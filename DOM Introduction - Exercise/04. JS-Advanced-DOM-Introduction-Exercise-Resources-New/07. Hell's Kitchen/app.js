function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = document.getElementById("inputs").children[1].value;

      let restaurants = {};
      let bestRestaurant = '';
      let bestAvgSalary = 0;
      let finalBestSalary = 0;

      let parsed = JSON.parse(input);

      for (let tokens of parsed) {

         let [name, workersStr] = tokens.split(" - ");

         if (restaurants.hasOwnProperty(name)) {
            let workers = workersStr.split(', ')
            for (let worker of workers) {
               let [work, salary] = worker.split(' ');
               salary = Number(salary);

               restaurants[name].workers.push([work, salary]);
               restaurants[name].totalSalary += salary;
               if (salary > restaurants[name].bestSalary) {
                  restaurants[name].bestSalary = salary;
               }

            }
         } else {

            restaurants[name] = {
               avgSalary: 0,
               bestSalary: 0,
               totalSalary: 0,
               workers: []
            };
            let workers = workersStr.split(', ')
            for (let worker of workers) {
               let [work, salary] = worker.split(' ');
               salary = Number(salary);

               restaurants[name].workers.push([work, salary]);
               restaurants[name].totalSalary += salary;
               if (salary > restaurants[name].bestSalary) {
                  restaurants[name].bestSalary = salary;
               }

            }
         }
         restaurants[name].avgSalary = (restaurants[name].totalSalary / (restaurants[name].workers.length));

         if (restaurants[name].avgSalary > bestAvgSalary) {
            bestAvgSalary = restaurants[name].avgSalary;
            bestRestaurant = name;
            finalBestSalary = restaurants[name].bestSalary;
         }
      }

      let bestResRef = document.querySelector("#bestRestaurant p");
      bestResRef.textContent = `Name: ${bestRestaurant} Average Salary: ${bestAvgSalary.toFixed(2)} Best Salary: ${finalBestSalary.toFixed(2)}`

      restaurants[bestRestaurant].workers.sort((a, b) => b[1] - a[1]);
      //console.log(restaurants[bestRestaurant].workers);
      let bestWork = ''
      for (let i = 0; i < restaurants[bestRestaurant].workers.length; i++) {
         bestWork += `Name: ${restaurants[bestRestaurant].workers[i][0]} `
         bestWork += `With Salary: ${restaurants[bestRestaurant].workers[i][1]} `
      }
      let bestWorkersRef = document.querySelector("#workers p");
      bestWorkersRef.textContent = bestWork;
   }
}