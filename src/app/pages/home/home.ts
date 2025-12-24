import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  images: string[] = [
    'https://drive.google.com/uc?id=123DC4gjLEXsm2T-mjwfeUIa47Vmptlv_',
    'https://drive.google.com/uc?id=17Mkj8wB4sJbWSjA6qsj5n2N_OK99e9WS',
    'https://drive.google.com/uc?id=1953LYpbdSEnLSEaoslEilwZ5xyhV8RPC'
  ];
  currentIndex = 0;
  showContact = false;
  constructor(  ) {}

  ngOnInit() {
    //this.getImages();
  }

  getImages() {
    fetch('https://script.google.com/macros/s/AKfycbzHyRWLFkpY8SijJTIOZzfvHXjUB41bhhyTyy6Q5f_eoYKtgFdp2X5zpdEp5Jo-jrFanQ/exec')
    .then(res => res.json())
    .then(data => {
      this.images = data;
    });
  }

  next() {
    this.currentIndex =
      (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
  openContact() {
    this.showContact = true;
  }

  closeContact() {
    this.showContact = false;
  }
  openWhatsApp() {
    window.open('https://wa.me/918281568250', '_blank');
  }

  openInstagram() {
    window.open('https://www.instagram.com/arcsnspaces', '_blank');
  }

  callPhone() {
    window.location.href = 'tel:+918281569250';
  }
}
