import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeBannerComponent } from '../components/home-banner/home-banner.component';
declare var $: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HomeBannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  greetingText = 'Welcome';
  greetingsArr = [
    'Welcome',
    'पधारो सा',
    'સ્વાગત છે',
    'வரவேற்பு',
    'ಸ್ವಾಗತ',
    'സ്വാഗതം',
    'ସ୍ୱାଗତ',
    'ਸੁਆਗਤ ਹੈ',
  ];

  headerCategories = [
    {
      imgPath: 'assets/icons/home.png',
      name: 'Home Supplies',
    },
    {
      imgPath: 'assets/icons/industrial.png',
      name: 'Industrial Machinery',
    },
    {
      imgPath: 'assets/icons/electronics.png',
      name: 'Electronics and Electronic',
    },
    {
      imgPath: 'assets/icons/hospital.png',
      name: 'Hospital & Medical Supplies',
    },
    {
      imgPath: 'assets/icons/construction.png',
      name: 'Construction & Real State',
    },
    {
      imgPath: 'assets/icons/machinery.png',
      name: 'Machinery',
    },
  ];

  constructor() {
    console.log('in con');
    this.changeGreeting();
  }

  openLogin() {
    console.log('in fun');
    $('#basicModal').modal('show');
    console.log($('#basicModal'), 'modal');
  }
  // openProductDesc() {
  //   $('#openProductDesc').modal('show');
  // }

  // openAddProduct() {
  //   console.log('add product section open');
  //   $('#addProductModal').modal('show');
  //   console.log($('#addProductModal'), 'modal');
  // }
  // openAddCategory() {
  //   $('#addCategoryModal').modal('show');
  // }

  changeGreeting() {
    let env = this;
    var greetCount = 0;

    setInterval(function () {
      if (greetCount == 6) {
        greetCount = 0;
      } else {
        greetCount++;
      }
      env.greetingText = env.greetingsArr[greetCount];
    }, 5000);
  }
}
