import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Joan David Gomezjurado Sanchez';
  age = 33;
  img = 'https://miro.medium.com/max/480/1*FZDQJ7ZMtUuIDVhQR0mXsw.png';
  btnDisabled = true;
  person = {
    name: 'Joan  Gomezjurado ',
    age: 18,
    avatar: 'https://miro.medium.com/max/480/1*FZDQJ7ZMtUuIDVhQR0mXsw.png'
  }

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  incrementarAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
}
