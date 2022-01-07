import { MatSnackBar } from '@angular/material/snack-bar';

import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'icon-snack',
  templateUrl: './icon-snack.component.html',
  styleUrls: ['./icon-snack.component.scss']
})
export class IconSnackComponent implements OnInit {
  public icon="file_upload";



  constructor(public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

public icons=['3d_rotation','accessibility','android','account_box','alarm_off'];

openSnackBar(message: string, action: string) {
  this.snackBar.open(message, action, {duration: 115000,});
}


}
