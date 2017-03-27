import {Component, OnInit, ElementRef, Renderer} from '@angular/core';
import {portfolioItem} from "../interfaces";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectItems: portfolioItem[];

  constructor() {}

  ngOnInit() {
    this.projectItems = [
      {
        title: "Gull's Nest (kesken)",
        info: "Työpöytäsovellus tiedostojen hallintaa varten web-kehittäjille. Toteutetaan Electronilla kahden hengen ryhmässä.",
        image: "assets/dunno.jpg",
        link: "https://github.com/PerttuSavolainen/Gull-s-Nest"
      },
      {
        title: "Energiankulutusprojekti",
        info: `Kolmannen vuoden Projekti-opintojakson projekti oikealle asiakkaalle. 
        Toimeksiantajana toimi SC5 Online Oy ja toimialan asiantuntijana Enegia Oy (SC5:n asiakas). 
        Projektissa konseptoitiin ja validoitiin erilaisia tapoja löytää ja esittää havainnollisesti poikkeamia energiankulutuksessa sekä 
        toteutettiin toimiva poikkeamia tunnistava sovelluksen prototyyppi.
        Projektissa tutustuttiin koneoppimisen menetelmiin. Prototyyppi oppii käytännössä vanhasta kulutusdatasta tuntikohtaisesti, 
        mikä kulutus on normaalia ja mikä ei. Toteutettiin neljän hengen ryhmässä.`,
        image: "assets/yellowcake.jpg"
      },
      {
        title: "NFSea",
        info: "Kolmannen vuoden kouluprojekti. Tutkimus NFC:stä Android-ympäristössä. Sisälsi myös demosovelluksen, jolla esitettiin NFC:n käyttöä viestien lähettämisessä laitteiden välillä. Toteutettiin kahden hengen ryhmässä.",
        image: "assets/nfsea.png",
        link: "https://github.com/CNname/NFSea"
      },
      {
        title: "Pics",
        info: "Toisen vuoden kouluprojekti. Fiktiivinen kuvapalvelu, jossa käyttäjät voivat lähettää ja kommentoida kuvia. Toteutettiin Laravel frameworkilla.",
        image: "assets/pics.jpg"
      },
      {
        title: "Lemon Ways - TED",
        info: "Toisen vuoden kouluprojekti. Websovellus toteutettuna Angularia, Google Maps APIa ja Firebasea hyödyntäen. Toteutettiin kolmen hengen ryhmässä.",
        image: "assets/Lemon-Ways-TED.jpg"
      },
      {
        title: "Need For Music",
        info: "Ensimmäisen vuoden kouluprojekti. Musiikkiaiheinen HTML5 -websovellus. Toteutettiin 4 hengen ryhmässä.",
        image: "assets/nfm.jpg"
      }

    ];
  }

}
