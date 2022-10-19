import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addall',
  templateUrl: './addall.component.html',
  styleUrls: ['./addall.component.css']
})
export class AddallComponent implements OnInit {

  constructor(private myapi:ApiService) { }



  dresstype=""
  dresssize=""
  description=""
   price=""
status:boolean=false

   readValues=()=>{
let data={
  "dresstype":this.dresstype,
  "dresssize":this.dresssize,
  "description":this.description,
   "price":this.price
}
console.log(data)
this.myapi.addData(data).subscribe(
  (response)=>{
    console.log(response)
    alert("successfully added")
    this.dresstype=""
    this.dresssize=""
    this.description=""
     this.price=""
    this.status=true
  }
)

   }




  ngOnInit(): void {
  }

}
