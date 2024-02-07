// function insert_Row() {
//     //Write your code here
//   let table = document.getElementById("sampleTable");
	
//   let newRow = document.createElement('tr');
//   let td1 =document.createElement('td');
//   let td2 =document.createElement('td');
// 	td1.innerText = "New Cell1";
// 	td2.innerText = "New Cell2";
// 	newRow.appendChild(td1);
// 	newRow.appendChild(td2);

// 	table.prepend(newRow);
	
// }

function insert_Row() {
    //Write your code here
	var table = document.getElementById("sampleTable");
    var newRow = table.insertRow(0); // Inserts a new row at index 1 (just after the header row)

    var cell1 = newRow.insertCell(0); // Inserts a cell at index 0
    var cell2 = newRow.insertCell(1);
	// Inserts a cell at index 1

    // You can set the content of the cells here, for example:
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
	 
	
  
  
}
