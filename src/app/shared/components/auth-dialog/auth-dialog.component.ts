import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'dr-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss']
})
export class AuthDialogComponent {

  constructor(
    public authService: AuthService,
    public dialogRef: MatDialogRef<AuthDialogComponent>,
    public snackBar: MatSnackBar) {}

  login(provider: string) {
    this.authService
      .login(provider)
      .subscribe((errorMessage: string) => {
        if (errorMessage) {
          const snackBarRef = this.snackBar.open(errorMessage, null, { duration: 3000 });
          console.log('errorMessage', errorMessage, this.snackBar, snackBarRef);
        } else {
          this.dialogRef.close();
        }
      });
  }
}
