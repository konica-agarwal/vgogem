import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Chart} from 'chart.js';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { ResizedEvent } from 'angular-resize-event/resized-event';


import { DashboardComponent } from './dashboard/dashboard.component';
import { DiamondComponent } from './diamond/diamond.component';
import { CoalComponent } from './coal/coal.component';
import { PlantComponent } from './plant/plant.component';
import { CoinflipComponent } from './coinflip/coinflip.component';
import { ProfileComponent } from './profile/profile.component';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { TopPanelComponent } from './top-panel/top-panel.component';
import { CoinFlipHistoryComponent } from './coin-flip-history/coin-flip-history.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'vgogem-app';

  ngOnInit()
  {
    $( document ).ready(function() {
      var startJP = (164) + (360 * 3);
      $('.jackpot-pointer').animate({  transform: startJP }, {
          step: function(now,fx) {
            $(this).css('-webkit-transform','rotate('+now+'deg)'); 
          },
          duration:6000
      },'linear');
    });

         
      (function() {
        var canvas = document.getElementById('canvas'),
          circlesCreated = false;
        function onScroll() {
          if (!circlesCreated && elementInViewport(canvas)) {
            circlesCreated = true;
            createCircles();
          }
        }
        function elementInViewport(el) {
          var rect = el.getBoundingClientRect();
          return (
            rect.top  >= 0 &&
            rect.left >= 0 &&
            rect.top  <= (window.innerHeight || document.documentElement.clientHeight)
          );
        }
        function createCircles() {
          var colors = [
              ['#595980', '#ffffff']
            ],
            circles = [];
          for (var i = 1; i <= colors.length; i++) {
            var child = document.getElementById('circles-' + i),
              circle = Circles.create({
                id:         child.id,
                value:      10,
                maxValue:   10,
                duration:   10000,
                radius:     getWidth(),
                width:      4,
                colors:     colors[i - 1]
              });
            circles.push(circle);
          }
          window.onload = function(e) {
            for (var i = 0; i < circles.length; i++) {
              circles[i].updateRadius(getWidth());
            }
          };
          window.onresize = function(e) {
            for (var i = 0; i < circles.length; i++) {
              circles[i].updateRadius(getWidth());
            }
          };
          function getWidth() {
            let jpw = $( ".jackpot-timer" ).width();
            return jpw / 2;
          }
        }
        window.onscroll = onScroll;
      })();
  

    
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

      $(window).on('load', function () {
        $(".level > .badge").each(function(k,v){
        let levels = parseInt($(this).text());
        if(levels <= 9 ){
          $(this).addClass("bg-gray");
        }
        if(levels > 9 && levels <= 19 ){
          $(this).addClass("bg-blue");
        }
        if(levels > 19 && levels <= 29 ){
          $(this).addClass("purple-blue");
        }
        if(levels > 29 && levels <= 39 ){
          $(this).addClass("blue-shade");
        }
        if(levels > 39 && levels <= 49 ){
          $(this).addClass("green-shade");
        }
        if(levels > 49 ){
          $(this).addClass("silver-white");
        }
        });
      });

       $(window).on('load resize', function () {
        if ($(window).width() < 1200){
          $(".chat-panel").addClass("collapse in");
        }
        else{
          $(".chat-panel").removeClass("collapse in");
        };
      });
  }	



}