import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SettingDialogComponent } from './components/setting-dialog/setting-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JCalc';

  // form controls
  metalFC = new FormControl('G');

  constructor(public dialog: MatDialog) { }

  openSettingDialog() {
    const dialogRef = this.dialog.open(SettingDialogComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
