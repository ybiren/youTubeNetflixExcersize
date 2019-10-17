import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISource } from '../interfaces';
import { ToastrService } from 'ngx-toastr';
import { PlayerComponent } from '../player/player.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Observable } from 'rxjs';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss']
})
export class AppContainerComponent implements OnInit {

  public sourceArr$: Observable<ISource[]>;
  public selectedVideoId: string;
  public selSource = 'YOUTUBE';

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private svc: SearchService) { }

  ngOnInit() {
    this.sourceArr$ = this.svc.GetSources();
    this.updateSource()
  }

  updateSource() {
    this.svc.UpdateSelectedSource(this.selSource);
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
