import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StaffService } from '../../services/staff.service';
import {Staff} from "../../interfaces/staff";

@Component({
  selector: 'app-staffs-list',
  templateUrl: './staffs-list.component.html',
  styleUrls: ['./staffs-list.component.css']
})
export class StaffsListComponent implements OnInit {
  student: Staff[] = [];
  public displayedColumns = ['first_name', 'middle_name', 'last_name', 'rating'];
  public dataSource = new MatTableDataSource<Staff>();

  constructor(private staffService: StaffService) { }

  ngOnInit(): void {
    this.staffService.getAll().subscribe(res => {
      console.log(res)
      this.dataSource.data = res;
    });
  }

}
