import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
    standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  form={
    name:'',
    email:'',
    message:''
  };
 onSubmit(){
  console.log('Form submitted:',this.form);
  alert("Thankyou for reaching out");
  this.form={
    name:'',
    email:'',
    message:''
  };
 }
}
