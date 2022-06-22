import { Component, OnInit, OnChanges } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { CustomValidatorService } from "../custom-validator.service";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.css"],
})
export class ReactiveFormComponent implements OnInit {
  signupForm: FormGroup;
  Submitted = false;
  events: any;
  constructor(
    private service: CustomValidatorService,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.signupForm = this.formbuilder.group(
      {
        name: ["sss", [Validators.required, Validators.minLength(3)]],
        email: ["", [Validators.required, Validators.email]],
        username: ["", Validators.required],
        password: [
          "",
          [
            Validators.required,
            Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"),
          ],
        ],
        confirmPassword: ["", Validators.required],
      },
      {
        validator: this.service.MustMatch("password", "confirmPassword"),
      }
    );

    this.signupForm.get("name").valueChanges.subscribe((uname) => {
      console.log(uname);
   });
  //  this.signupForm.controls["name"].setValue("SSS", { eventEmit: false });
  // this.signupForm.get("name").setValue("", { eventEmit: false });
  //   this.signupForm.get("name").statusChanges.subscribe((status) => {
  //     console.log("Name Status is ", status);
  //  });
  }

  onSubmit() {
    this.Submitted = true;
    alert("Submitted");
    if (this.signupForm.valid) {
      console.table(this.signupForm.value);
    }
  }

  Onreset() {
    this.signupForm.reset();
  }
}
