import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projeto-final-modulo5';

  firstblock = {
    title: "Aproveite na TV.",
    history: "Assista em Smart TVs, Playstation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.",
    image: "./assets/images/1tv.png",
    width:"570",
    image2:"./assets/images/netflix.png",
    width2: " 238",
    ordem: "true",
  }

  secondblock = {
    image: "./assets/images/2mobile.png",
    width: "535",
    title: "Baixe séries para assistir offline.",
    history: "alve seus títulos favoritos e sempre tenha algo para assistir.",

  }

  thirdblock = {
    title: "Assista quando quiser.",
    history: "Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso.",
    image: "./assets/images/3tv_2.png",
    width:"568 ",
    ordem: "true",
  }

  fourthblock= {
    image: "./assets/images/4infantil.png",
    width:"514" ,
    title: "Crie perfis para crianças",

  }


}
