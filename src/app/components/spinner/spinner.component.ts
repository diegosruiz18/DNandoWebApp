import { Component, OnInit } from '@angular/core';
import { SpinnerServiceService } from 'src/app/services/spinner-service.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  constructor(
    public spinnerService: SpinnerServiceService
  ) { }

  flag: boolean = this.spinnerService.flagSpinner;

  ngOnInit(): void {
  }

}
