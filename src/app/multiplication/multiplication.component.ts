import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent {

  result:number=0
  num1:number=0
  num2:number=0

  multNum(){
    this.result=this.num1*this.num2

}
}
