import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Chart} from 'chart.js';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DiamondComponent } from './diamond/diamond.component';
import { CoalComponent } from './coal/coal.component';
import { PlantComponent } from './plant/plant.component';
import { CoinflipComponent } from './coinflip/coinflip.component';
import { ProfileComponent } from './profile/profile.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'vgogem-app';
  Doughnut=[];

  ngOnInit()
  {
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

    $( document ).ready(function() {
      var startJP = (164) + (360 * 3);
      $('.jackpot-pointer').animate({  transform: startJP }, {
          step: function(now,fx) {
            $(this).css('-webkit-transform','rotate('+now+'deg)'); 
          },
          duration:6000
      },'linear');
    });

    $(window).on('load resize', function () {

	    var jpWidth = $( ".jackpot" ).width();
	    var getP = jpWidth * (23/100);
	    var getJPWidth = jpWidth * (6.43/100);
	    var getScoreTextA = jpWidth * (8.93/100);
	    var getScoreTextB = jpWidth * (5.36/100);
	    var getScoreIcon = jpWidth * (9.82/100);

	    if(jpWidth < 560){
	        $( ".jackpot-timer" ).css({"top": getP, "bottom": getP, "left": getP, "right": getP});
	        $( "#doughnut" ).css({"padding": getJPWidth});
	        $( ".jackpot-score" ).css({"padding": getP, "width": jpWidth, "height": jpWidth});
	        $( ".jackpot-score .amount" ).css({"font-size": getScoreTextA});
	        $( ".jackpot-score .skins" ).css({"font-size": getScoreTextB});
	        $( ".jackpot-score .icon" ).css({"width": getScoreIcon, "height": getScoreIcon});

	      }
	    
	  });
  }	
}