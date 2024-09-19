import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  // Method สำหรับการคัดลอกข้อมูลไปยังคลิปบอร์ด
  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      alert(`${text} has been copied to your clipboard!`);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }

  // Method สำหรับการเปิดลิงก์แพลตฟอร์มต่างๆ
  openLink(platform: string) {
    let url = '';
    switch (platform) {
      case 'facebook':
        url = 'https://www.facebook.com/your-profile';
        break;
      case 'instagram':
        url = 'https://www.instagram.com/your-profile';
        break;
      case 'email':
        url = 'mailto:your-email@example.com';
        break;
      case 'phone':
        this.copyToClipboard('+66 123-456-789'); // คัดลอกเบอร์โทรไปยังคลิปบอร์ด
        return; // ไม่ต้องเปิดลิงก์ใหม่
      default:
        break;
    }
    window.open(url, '_blank');
  }
}
