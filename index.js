//intialize the count as o
// listen for clicks on the increment button
// increment tne count variable when the button is clicked
//change the count_el in the HTML to reflect anew count
let saveEl = document.getElementById("save_el")
let countEl = document.getElementById("count_el") //DOM
//console.log(countEl);
 let count = 0

function increment() {
   //count = count + 1
   count += 1 ;
   countEl.textContent = count
  
}

function save() {
    let countStr = count + "-"
    saveEl.textContent += countStr;
    countEl.textContent = 0
    count = 0
}