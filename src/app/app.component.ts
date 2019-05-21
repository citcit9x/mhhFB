import { Component } from '@angular/core';
import {AppService} from './app.service';
import {ExcelService} from './excel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _serviceGet: AppService, private excelService:ExcelService){
    this.excelService = excelService;
  }
  
  exportToExcel(event) {
    this.excelService.exportAsExcelFile(this.obj, 'obj');
  }

  private check1: boolean = false;
  private check2:boolean = true;
  private obj;
  private id_fb: string;
  private token_fb: string;

  private status1(){
    this.check1 = true;
    this.check2 = false;
  }

  private status2(){
    this.check1 = false;
    this.check2 = true;
  }


  private getFL():void{
    this._serviceGet.getListFriend(this.id_fb, this.token_fb).subscribe(
      data => {
        this.obj = data.data;
      },
      error => {},
      () => {}
    );
  }

  public pieChartLabels:string[] = ['Chien', 'Cong', 'Quang', 'Cuong', 'Duc', 'Thanh'];
  public pieChartData:number[] = [300, 500, 100,300, 500, 100,];
  public pieChartType:string = 'pie';
 

  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
