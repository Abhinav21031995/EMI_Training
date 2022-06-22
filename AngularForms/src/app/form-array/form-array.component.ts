import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "app-form-array",
  templateUrl: "./form-array.component.html",
  styleUrls: ["./form-array.component.css"],
})
export class FormArrayComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      EmployeeName: ["", Validators.required],
      Location: ["", Validators.required],
      TrainingConducted: this.fb.array([]),
    });
  }

  get Details(): FormArray {
    return this.formGroup.get("TrainingConducted") as FormArray;
  }
  TrainingDetails(): FormGroup {
    return this.fb.group({
      technology: "",
      experience: "",
    });
  }
  AddSkill() {
    this.Details.push(this.TrainingDetails());
  }
  removeTrainingDetails(i: number) {
    this.Details.removeAt(i);
  }

  onSubmit() {
    console.table(this.formGroup.value);
  }
}
