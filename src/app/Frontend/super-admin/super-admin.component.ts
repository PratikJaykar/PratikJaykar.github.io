import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material';
// import { UpdateSuperAdminComponent } from '../others/update-super-admin/update-super-admin.component';

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
  arr: any;
  selectedValue: string;


  constructor(private fb: FormBuilder, private dialog: MatDialog) {

    this.listData = [];
    this.arr = [];
    this.userForm = this.fb.group({
      stationeryId: [''],
      stationeryName: [''],
      stationeryQty: [''],
      // stationeryRemark: [''],
      stationeryDesc: [''],
      // stationeryStatus: [''],
      // stationeryOrderStatus: ['']
    })

    this.options = fb.group({
      fixed: false
    });

  }

  ngOnInit() {
  }

  foods: Food[] = [
    // {value: '', viewValue: ''},
    { value: 'Available', viewValue: 'Available' },
    { value: 'Out of Stock', viewValue: 'Out Of Stock' }
  ];


  public addRow(): void {
    this.listData.push(this.userForm.value);
    this.userForm.reset();
    // this.reset();
  }

  // reset() {
  //   this.userForm.reset;
  // }

  remove(element) {
    this.listData.forEach((value, index) => {
      if (value == element)
        this.listData.splice(index, 1);
    });
  }

  editDialog(element) {
    this.listData.forEach((value, index) => {
      if (value == element) {
        
        this.userForm = this.fb.group({
          stationeryId: (element['stationeryId']),
          stationeryName: (element['stationeryName']),
          stationeryQty: (element['stationeryQty']),
          stationeryDesc: (element['stationeryDesc']),
        })
        
      }
      
    });
    this.remove(element);

  }

  // updateData(element) {
  //   this.listData.forEach((value, index) => {
  //     if (value == element) {

  //       this.userForm = this.fb.group({
  //         stationeryId: [''],
  //         stationeryName: (element['stationeryName']),
  //         stationeryQty: (element['stationeryQty']),
  //         stationeryDesc: (element['stationeryDesc']),
  //       })

  //     }

  //   });
  // }

}
