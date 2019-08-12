import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Post } from '../post';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css']
})
export class PostDialogComponent implements OnInit {

  private fileName = '';

  private data = {
    post: new Post("","","","","",""),
    file: null
  }

  constructor(
    public dialogRef: MatDialogRef<PostDialogComponent>
  ) { }

  ngOnInit() {
  }

  fileChange(event) {
    // console.log(event.target.files[0])
    this.fileName = event.target.files[0].name;
    this.data.file = event.target.files[0];
  }

  save() {
    this.dialogRef.close(this.data)
  }

  cancel() {
    this.dialogRef.close(null)
  }

}
