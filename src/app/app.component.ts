import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'convem';
  value!: string;
  text!: string;
  loading: boolean = false;

  constructor(private apiService: ApiService) {}

  onInput(value: string) {
    this.value = value;
  }
  getApi() {
    this.loading = true;

    this.apiService.getApi({ response: this.value }).subscribe(
      (response) => {
        this.text = response.response;
        this.loading = false;
      },
      (error) => {
        this.text = 'Error - 500';
        this.loading = false;
        throw new Error(error);
      }
    );
  }
}
