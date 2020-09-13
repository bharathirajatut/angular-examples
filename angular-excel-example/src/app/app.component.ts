import { Component } from '@angular/core';

import { Workbook } from 'exceljs';
import * as fs from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-excel-example';

  json_data=[{
		"name": "Raja",
		"age": 20
	},
	{
		"name": "Mano",
		"age": 40
	},
	{
		"name": "Tom",
		"age": 40
	},
	{
		"name": "Devi",
		"age": 40
	},
	{
		"name": "Mango",
		"age": 40
	}
]

downloadExcel()
{

  //create new excel work book
let workbook = new Workbook();

//add name to sheet
let worksheet = workbook.addWorksheet("Employee Data");

//add column name
let header=["Name","Age"]
let headerRow = worksheet.addRow(header);
//headerRow.font = { size: 14, bold: true };

for (let x1 of this.json_data)
{
  let x2=Object.keys(x1);
  let temp=[]
  for(let y of x2)
  {
    temp.push(x1[y])
  }
  worksheet.addRow(temp)
} 
//set downloadable file name
let fname="Emp Data Sep 2020"

//add data and file name and download
workbook.xlsx.writeBuffer().then((data) => {
  let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  fs.saveAs(blob, fname+'-'+new Date().valueOf()+'.xlsx');
});

}


}
