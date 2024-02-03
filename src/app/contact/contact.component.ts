import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

declare let Email: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit{
  @ViewChild('contactForm') contactForm: ElementRef | undefined;

  fullname: string = '';
  email: string = '';
  phone: string = '';
  subject: string = '';
  message: string = '';


  constructor(private titleService: Title) { // whenever this component is loaded, title below shows
    this.titleService.setTitle("Leonard Martin - Contact");
   }


  async loadScript() {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://smtpjs.com/v3/smtp.js';
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  async ngAfterViewInit() {
    try {
      await this.loadScript();
      
    } catch (error) {
      console.error("Error loading smtp.js:", error);
    }
  }



    sendEmail() {

      const bodyMessage = `Full Name: ${this.fullname}<br> Email: ${this.email}<br> Phone Number: ${this.phone}<br> Message: ${this.message}`;
      
      if (typeof Email !== 'undefined') {
        Email.send({
          Host : "smtp.elasticemail.com",
          Username : "lmartin2422@gmail.com",
          Password : "B047E466A030F5A8D5E070BBE7E22B61BCA0",
          To : 'lmartin2422@gmail.com',
          From : "lmartin2422@gmail.com",
          Subject : this.subject,
          Body : bodyMessage
      }).then(
        (message: any) => {
          if (message == "OK") {
            console.log("Great job Leonard")
          }
        }
      );
    } else {
      console.error("Email object is not defined. Make sure smtp.js is properly loaded.");
    }
  }  

  onSubmit() {
    if (this.contactForm) {
      this.sendEmail();
    }

  }

}
