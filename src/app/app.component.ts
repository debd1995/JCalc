import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
export class AppComponent implements OnInit {
  title = 'JCalc';

  // form controls
  inputFG = new FormGroup({
    metalFC: new FormControl('g916'),
    mcTypeFC: new FormControl('pgm'),
    fixedMc: new FormControl(''),
    itemWeightFC: new FormControl(''),
  });


  constructor(private dialog: MatDialog,
    private storageService: StorageService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    // by default 'per gram' M.C is selected. So Fixed M.C field is disabled
    this.inputFG.controls['fixedMc'].disable();
  }

  onMCTypeChange(event: any) {
    console.log(event.value);
    let mcType = event.value;
    if (mcType === 'pgm') {
      this.inputFG.controls['fixedMc'].disable();
    } else if (mcType === 'ppc') {
      this.inputFG.controls['fixedMc'].enable();
    }
  }

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
