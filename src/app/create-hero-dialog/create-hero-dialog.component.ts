import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

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

  close() {
    this.dialogRef.close();
  }
}
