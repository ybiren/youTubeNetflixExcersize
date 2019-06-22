import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  public videoId: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) data,
    private dialogRef: MatDialogRef<PlayerComponent>) {
      this.videoId = data.videoId;
   }

  ngOnInit() {

  }


  close() {
    this.dialogRef.close();
  }

}
