import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'hrs-create-hero-dialog',
  templateUrl: './create-hero-dialog.component.html',
  styleUrls: ['./create-hero-dialog.component.scss'],
})
export class CreateHeroDialogComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<CreateHeroDialogComponent>) {}

  ngOnInit(): void {}

  save(name: string) {
    this.dialogRef.close(name);
  }

  close(): void {
    this.dialogRef.close();
  }
}
