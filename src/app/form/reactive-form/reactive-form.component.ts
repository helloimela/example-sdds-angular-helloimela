import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "reactive-form",
  template: "reactive form"
})
export class ReactiveForm implements OnInit {
  username = "Add username";
  myForm: FormGroup;
  myValue: any = {};
  initialValue: any = {};
  list = [
    { value: "opt-1", label: "Jakarta" },
    { value: "opt-2", label: "Stockholm" },
    { value: "opt-3", label: "Barcelona" }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
}
