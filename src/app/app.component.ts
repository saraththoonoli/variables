import { Component } from '@angular/core';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
ngOnInit(): void {
  this.variables();
  this.examples();
  this.examplesfor();
  
}  

//  examples for var, let and const variable

 variables(){
  let example1="names";
  var example2="welcome";
  const example3="adress";

  if(2>1){
    let example1="bye";
    var example2="come";

    console.log( "1" ,example1);
    console.log( "2" , example2);
    console.log( "3" , example3);
    
  }
  console.log( "4" , example1);
  console.log( "5" , example2);
  console.log( "6 ",  example3);
 }

//  examples for let variable

 examples(){
  let value1 = "name"

  if(5>1){
    let value1 = "sarath"

    console.log( "name:", value1);
  }
  console.log( "no change:", value1);
  
 }


//  examples for var variable

 examplesfor(){
  var value2 = "adress";
  if(6>1){
    var value2 = "House"
    console.log( 'adress:' , value2);
    
  }
  console.log('anychange', value2);

 }
}
