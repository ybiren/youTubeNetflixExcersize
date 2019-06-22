import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ISource } from '../interfaces';
import { ToastrService } from 'ngx-toastr';
import { PlayerComponent } from '../player/player.component';
import { MatDialog, MatDialogConfig } from '@angular/material';


@Component({
  selector: 'app-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss']
})
export class AppContainerComponent implements OnInit {

  public sourceArr: ISource[] = [];
  public selectedVideoId: string;
  public selSource: ISource;

  constructor(
    private http: Http,
    private toastr: ToastrService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.getSourcrs();
  }

  // Get sources
  getSourcrs() {
    this.http.get('../../assets/sources.json').subscribe((res) => {
      this.sourceArr = <ISource[]>res.json();
      this.selSource = this.sourceArr[0];
    }, (error) => {
      this.toastr.error(JSON.stringify(error), 'Error');
    });
  }


  handleVideoSelected(videoId: string) {
    this.openDialog(videoId);
  }

  // Open player
  public openDialog(videoId: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {videoId: videoId};
    this.dialog.open(PlayerComponent, dialogConfig);
 }

}
