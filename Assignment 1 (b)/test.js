let NewRow =function(){
    let fRow,cell,row;
  let table=document.getElementById("tbl");
  row=table.insertRow(-1);//add row last at the last  
  fRow=table.rows[0];
  cell=row.insertCell(0);//add cell at last 
  cell.innerHTML=(table.rows.length-1);//it insert value in 1th(0) place in last row
  for (let a=1;a<fRow.cells.length;a++){
    cell=row.insertCell(1)
    switch (a){
      case 1:
        cell.innerHTML="India";
        break;
      case 2:
        cell.innerHTML="Kalyan";
        break;
      case 3:
        cell.innerHTML="Parmar";
        break;  
      case 4:
        cell.innerHTML="Vineet";
        break;        
    }
  }  
}


let NewRowTop =function(){
  let fRow,cell,row;
let table=document.getElementById("tbl");
fRow=table.rows[0];
row=table.insertRow(0);
cell=row.insertCell(-1);
cell.innerHTML=(table.rows.length+1-2*2);
for (let a=1;a<fRow.cells.length;a++){
  cell=row.insertCell(1)
  switch (a){
    case 1:
      cell.innerHTML="India";
      break;
    case 2:
      cell.innerHTML="Kalyan";
      break;
    case 3:
      cell.innerHTML="Parmar";
      break;  
    case 4:
      cell.innerHTML="Vineet";
      break;        
  }
}  
}