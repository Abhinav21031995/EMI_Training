import { Injectable } from "@angular/core";
import { FormGroup, AbstractControl, ValidatorFn, Form } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class CustomValidatorService {
  MustMatch(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordcontrol = formGroup.controls[password];
      const confirmPassword1 = formGroup.controls[confirmPassword];

      if (passwordcontrol.value !== confirmPassword1.value) {
        confirmPassword1.setErrors({ passwordMisMatch: true });
      } else {
        confirmPassword1.setErrors(null);
      }
    };
  }

  constructor() {}
}
