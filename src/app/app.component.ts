import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SettingDialogComponent } from './components/setting-dialog/setting-dialog.component';
import { ISettings } from './models/settings';
import { StorageService } from './services/storage-service';
import { AppConstant } from './utils/app-constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JCalc';

  // form controls
  metalFC = new FormControl('G');

  constructor(private dialog: MatDialog,
    private storageService: StorageService,
    private snackBar: MatSnackBar) { }

  openSettingDialog() {
    const dialogRef = this.dialog.open(SettingDialogComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        debugger
        let settings: ISettings = result;
        console.log(`Dialog result: ${JSON.stringify(settings)}`);
        this.storageService.saveSettings(settings);
        this.snackBar.open(AppConstant.SETTINGS_SAVED_MSG, "", { duration: 2000 });
      }
    });
  }

}
