import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  Doughnut=[];

  ngOnInit() {
  	this.Doughnut = new Chart('doughnut', {
      type: 'doughnut',
      data: {
      	labels: ["MîLåNâ", "Phibbix", "VS Gaming"],
          datasets: [
            {
              labels: 'My First dataset',
              data: [855, 2535, 1232],
              backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
              ]
            }
          ]
      },
      options: {
      	cutoutPercentage: 65,
      	legend: {
	        position: 10,
	      },
      }
    });
  }

}
