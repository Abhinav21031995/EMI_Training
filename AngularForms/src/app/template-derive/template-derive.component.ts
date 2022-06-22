import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { User } from "../user";


@Component({
  selector: "app-template-derive",
  templateUrl: "./template-derive.component.html",
  styleUrls: ["./template-derive.component.css"],
})
export class TemplateDeriveComponent implements OnInit {
  model = new User();
 //userForm: any;
  constructor() {}
  Skill: string[] = ["Angular", "Csharp", "PHP", "ROR", "SQL Server"];
  ngOnInit() {}
  onSubmit(userForm:NgForm) {
 userForm.reset(userForm);
  }
  
}
// FormBuilder=>
// FormControl
//formGroup
