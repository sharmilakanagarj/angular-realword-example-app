import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class TimsService {

  constructor(   private firestore: AngularFirestore   ) {}
  form = new FormGroup({        
    enr_no: new FormControl(''),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    dob:new FormControl(''),
    father_name:new FormControl(''),
    mother_name:new FormControl(''),
    spouse_name:new FormControl(''),
    email_id:new FormControl(''),
    mobile_number:new FormControl(''),
gender: new FormControl(''),
Address:new FormControl(''),
city_name:new FormControl(''),
pincode:new FormControl(''),
state:new FormControl(''),
country_name:new FormControl(''),
qualification:new FormControl(''),
experience:new FormControl('')
})

createTims(data:any) {
  return new Promise<any>((resolve, reject) =>{

      this.firestore
          .collection("tims")
          .add(data)
          .then(res => {}, err => reject(err));
  });
}
}
