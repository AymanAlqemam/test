import { Component } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@ Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showAge = true ;
  showName = false ;
  showGender = true ;
  title = 'pdfmakertest';
  userArray = [
    {name: 'محمد', age: 26, gender: 'ذكر'},
    {name: 'ولاء', age: 27, gender: 'انثى'},
    // {name: 'B', age: 28, gender: 'male'},
    // {name: 'C', age: 29, gender: 'male'},
    // {name: 'D', age: 30, gender: 'male'},
    // {name: 'E', age: 40, gender: 'male'},
    // {name: 'F', age: 206, gender: 'male'},
    // {name: 'G', age: 5, gender: 'male'},
    // {name: 'H', age: 266, gender: 'male'},
    // {name: 'I', age: 35, gender: 'male'},
    // {name: 'J', age: 36, gender: 'male'},
  ];
  newObj = {};
  bodyArray: any = [];
  tableHeaders = [];
  headersObj = {};
  prop1: any;
  arr: any = [[
      { text: 'Bold value1', style: 'custom' },
      { text: 'Bold value2', style: 'custom' },
      { text: 'Bold value3', style: 'custom' },
      { text: 'Bold value4', style: 'custom' } ],
    [ { text: 'value1', style: 'backGreen' },
    { text: ' value2', style: 'backGreen' },
    { text: ' value3', style: 'backGreen' },
    { text: ' value4', style: 'backGreen' }],
    [{ text: 'value10', style: 'backYellow' },
    { text: ' value20', style: 'backYellow' },
    { text: ' value30', style: 'backYellow' },
    { text: ' value40', style: 'backYellow' }]];
  constructor() {}

  buildTableBody(data, columns) {
    const body = [];
    // debugger;
    // console.log('col:', columns);
    // console.log('col:',typeof columns);
    body.push(columns);
    console.log('body', body);
    // console.log('body', body.length);
    // console.log(typeof body);
    // for(let i = 0; i < body.length; i ++) {
    //   this.headersObj[i] = {text: body[i][i], color: 'red'};

    //   console.log('i:', body[i][i]);
    //   console.log(this.headersObj);
    // }
    // for (var key of Object.keys(body)) {
    //   if(body[key][0] == 'age') {
    //     console.log('hi')
    //   }
    //   console.log(key + " -> " + body[key][0]);
    // }



    //--------------------------------------------------
    // console.log('body', body[0][0].text);
    data.forEach((row) => {
      const dataRow = [];
      // console.log('row', row);
      columns.forEach((column) => {
        // console.log(column, 'g');
        // console.log('cols', column.age);
        // for(var key of Object.keys(column)) {
        //   this.prop1 = key;
        //   console.log('pro', this.prop1);
        // }
        dataRow.push(row[column].toString());
        // console.log('in', index)
        // console.log('col', column);
        // console.log('Datarow', dataRow);
        // dataRow[0].fillColor = 'red';
      });

      body.push(dataRow);
      // body.map((el, i) => {
        // console.log('li:', el[i]);
        // console.log('el:', el , '-------', 'i: ', i);
        // console.log('elText', el['age'].text);
      // })
      // console.log('bodyText', body[0].text);
      // console.log(body);

    });

    return body;
  }
    generatePdf() {
      // debugger;
      // for(let j = 0; j < this.tableHeaders.length; j++) {
      //   console.log(this.tableHeaders[j].text);
      //   let names = this.tableHeaders[j].text;
      //   console.log(this.tableHeaders[j].text)
      //   // this.tableHeaders.push(names.toString());
      // }
      if(this.showGender && this.showAge) {
        console.log('hi');
        // this.tableHeaders = {age: 'age', gender: 'gender'};
        // this.tableHeaders.push(this.tableHeaders[age], this.tableHeaders[gender]);
        // this.headersObj = {age: 'age1', gender: 'gender1'};
        // this.tableHeaders.push(this.headersObj);
        this.tableHeaders.push('name');
        // this.tableHeaders.push(
        //   {text: 'age', color: 'blue', alignment: 'center', fillColor: 'red', bold: true},
        //   {text: 'gender', color: 'blue', alignment: 'center', fillColor: 'red', bold: true}
        // );
        // this.tableHeaders[].fillColor = 'red';
        // this.tableHeaders.map((al, i) => {
          // console.log('al:', al);
        // })
        // for(var key in this.tableHeaders) {
        //   if(key == '0') {
        //     console.log(key.valueOf());
        //   }
        // }
        // console.log(this.tableHeaders);
        // console.log(typeof this.tableHeaders);
      }
      // this.tableHeaders.push('gender');
      if (this.showName) {
        console.log('here');
        this.tableHeaders.push('name');
      }
      for(let i = 0; i < this.userArray.length; i++) {
        if(this.showName == false  ) {
          this.newObj = {age: this.userArray[i].age, gender: this.userArray[i].gender};
          this.bodyArray.push(this.newObj);
        }

      }

      let dd = {
        content: [
          {
            table: {
              widths: ['*','*','*'],
              heights: [30],
              alignment: 'center',
              // body: this.buildTableBody(this.bodyArray, this.tableHeaders)
              body: this.arr.map((item, i) => {
                debugger;
                return [

                  [{text: item[0].text, style: 'custom' }],
                  [{text: item[1].text, style: 'custom' }],
                  [{text: item[2].text, style: 'custom' }]
                  ,
                ];
                // this.buildTableBody(item.text, this.tableHeaders);
              })
          }
          }],
          styles: {
            custom: {
              color: 'blue', alignment: 'center', fillColor: 'red', bold: true, margin: 10
            },
            backYellow: {
              bold: true,
              color: 'blue',
              fillColor: 'red'
            },
            backGreen: {
              bold: true,
              color: 'blue',
              fillColor: 'red'
            }
          }
      };
      // console.log('body:-----', body);

      // this.bodyArray = this.userArray;
      // if(this.showAge == false  ) {
      //   for(let i = 0; i < this.userArray.length; i++) {
      //   // debugger;
      //     this.newObj = {name: this.userArray[i].name, gender: this.userArray[i].gender};
      //     this.bodyArray.push(this.newObj);
      //     // this.bodyArray.push({name: this.userArray[i].name});
      //     // if(this.showAge) {
      //     //   this.bodyArray.push({name: this.userArray[i].name , age: this.userArray[i].age});
      //     // }
      //   }
      // }
      // if(this.showAge == false) {

        // debugger;

        // this.userArray.forEach((v) => {
        //   delete v.age;
        // });
        // this.bodyArray = this.userArray.filter((elm, i) => {
        //   return delete this.userArray[i].age;
        // })
      // }
      // for(let i = 0; i < this.userArray.length; i++) {
      //   // debugger;
      //   if(!this.showAge) {
      //     this.bodyArray.push({name: this.userArray[i].name});
      //     if(this.showAge) {
      //       this.bodyArray.push({name: this.userArray[i].name , age: this.userArray[i].age});
      //     }
      //   }
      // }

      // }

      pdfMake.createPdf(dd).open();
    }


    // body: this.table(this.userArray, ['name', 'age'])}



    // generatePdf() {
    //   const win = window.open('', '_blank');
    //   const documentDefinition = {
    //     // header: 'simple text',
    //     // footer: {
    //     //   columns: [
    //     //     'Left part',
    //     //     { text: 'Right part', alignment: 'right' }
    //     //   ]
    //     // },
    //     content: [
    //         // { text: 'Dynamic parts', style: 'header' },
    //         {table: {
    //           body: this.table(this.userArray, ['name', 'age'])}
    //         }
    //       ]
    //    };
    //   pdfMake.createPdf(documentDefinition).open({}, win);
    // }

}




  // table(data, columns) {
  //     return {
  //         table: {
  //             headerRows: 1,
  //             body: this.buildTableBody(data, columns)
  //         }
  //     };
  // }
