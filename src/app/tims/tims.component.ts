import { Component, OnInit } from '@angular/core';
import { TimsService } from "../shared/tims.service";
import { FormGroup, FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-tims',
  templateUrl: './tims.component.html',
  styleUrls: ['./tims.component.css']
})
export class TimsComponent implements OnInit {

  constructor(public timsService:TimsService){}

  ngOnInit(): void {
  }

  onSubmit() {

    let data = this.timsService.form.value;

   this.timsService.createTims(data)


          window.alert('Hi Welcome! This is Simple Alert');



}

}
