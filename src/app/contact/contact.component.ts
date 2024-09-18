import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      // Handle form submission logic
      console.log('Form submitted', this.contact);
      // Optionally, you can send this data to a server or display a success message
      this.contact = { name: '', email: '', message: '' }; // Reset form after submission
    } else {
      console.log('Please fill out all fields.');
    }
  }
}
