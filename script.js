function insert_Row() {
    //Write your code here
  let newRow = document.createElement('tr');
  let td1 =document.createElement('td');
  let td2 =document.createElement('td');
	td1.innerText = "New Cell1";
	newRow.appendChild(td1);
	td2.innerText = "New Cell2";
	newRow.appendChild(td2);

  let table = document.getElementById("sampleTable");
	table.prepend(newRow);
	
}
