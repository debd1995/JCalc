import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ISettings } from 'src/app/models/settings';
import { StorageService } from 'src/app/services/storage-service';

@Component({
  selector: 'app-setting-dialog',
  templateUrl: './setting-dialog.component.html',
  styleUrls: ['./setting-dialog.component.scss']
})
export class SettingDialogComponent implements OnInit {

  settingFG = new FormGroup({
    g916: new FormControl('', Validators.required),
    g750: new FormControl('', Validators.required),
    g22k: new FormControl('', Validators.required),
    slv: new FormControl('', Validators.required),

    ghb3: new FormControl('', Validators.required),
    gha3: new FormControl('', Validators.required),
    gkb3: new FormControl('', Validators.required),
    gka3: new FormControl('', Validators.required),

    hm: new FormControl('', Validators.required),
  });

  constructor(public dialogRef: MatDialogRef<SettingDialogComponent>,
    private storageService: StorageService) { }

  ngOnInit(): void {
    this.getSavedSettings();
  }

  close(): void {
    this.dialogRef.close();
  }

  getSavedSettings() {
    let data: ISettings | null = this.storageService.getSettings();
    if (data) {
      this.settingFG.patchValue(data);
    }
  }

}
