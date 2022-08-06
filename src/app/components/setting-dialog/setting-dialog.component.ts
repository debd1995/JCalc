import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-setting-dialog',
  templateUrl: './setting-dialog.component.html',
  styleUrls: ['./setting-dialog.component.scss']
})
export class SettingDialogComponent implements OnInit {

  settingFG = new FormGroup({
    g916: new FormControl('', Validators.required),
    g750: new FormControl('', Validators.required),
    g22K: new FormControl('', Validators.required),
    slv: new FormControl('', Validators.required),

    ghb3: new FormControl('', Validators.required),
    gha3: new FormControl('', Validators.required),
    gkb3: new FormControl('', Validators.required),
    gka3: new FormControl('', Validators.required),

  });

  constructor() { }

  ngOnInit(): void {
  }

}
