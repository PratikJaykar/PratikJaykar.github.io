import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.scss']
})
export class SuperAdminComponent implements OnInit {
  
  options: FormGroup;
  userForm: FormGroup;
  listData: any;
  selectedValue: string;

  
  constructor(private fb: FormBuilder) {
    
    this.listData = [];
    this.userForm = this.fb.group({
      stationeryId: [''],
      stationeryName: [''],
      stationeryQty: [''],
      stationeryRemark: [''],
      stationeryDesc: [''],
      stationeryStatus: [''],
      stationeryOrderStatus: ['']
    })
    
    this.options = fb.group({
      fixed: false
    });
    
  }
  
  ngOnInit() {
  }
  
  foods: Food[] = [
    {value: 'Available', viewValue: 'Available'},
    {value: 'Out of Stock', viewValue: 'Out Of Stock'}
  ];

  
  public addRow(): void {
    this.listData.push(this.userForm.value);
    this.userForm.reset();
  }

  reset() {
    this.userForm.reset();
  }

  remove(element) {
    this.listData.forEach((value, index) => {
      if (value == element)
        this.listData.splice(index, 1);

    });
  }

}
