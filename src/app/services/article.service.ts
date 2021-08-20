import { Injectable } from '@angular/core';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articles: Article[] = [
    //*********** *** début de la partie à copier pour créer un nouvel article */
    {
      title: "La postulation",
      subhead: "publié le 12/01/199",
      shortText: "Ceci est un mini text décrivant l'article est un mini text décrivant l'article est un mini text décrivant l'article est un mini text décrivant l'article est un mini text décrivant l'article est un mini text décrivant l'article ...",
      text: "Ceci est le texte de l'article"
    },
    //*********** *** fin de la partie à copier pour créer un nouvel article */

    {
      title: "Le droit des affaires",
      subhead: "publié le 12/01/199",
      shortText: "Ceci est un mini text décrivant l'article est un mini text décrivant l'article est un mini text décrivant l'article est un mini text décrivant l'article est un mini text décrivant l'article est un mini text décrivant l'article ..",
      text: "Ceci est le texte de l'article"
    },

    {
      title: "Le droit des affaires",
      subhead: "publié le 12/01/199",
      shortText: "Ceci est un mini text décrivant l'article est un mini text décrivant l'article est un mini text décrivant l'article est un mini text décrivant l'article est un mini text décrivant l'article est un mini text décrivant l'article ..",
      text: "Ceci est le texte de l'article est un mini text décrivant l'article est un mini text décrivant l'article est un mini text décrivant l'article est un mini text décrivant l'article"
    },

    {
      title: "Le droit des affaires",
      subhead: "publié le 12/01/199",
      shortText:  "Ceci est un mini text décrivant l'article est un mini text décrivant l'article est un mini text décrivant l'article est un mini text décrivant l'article est un mini text décrivant l'article est un mini text décrivant l'article ..",
      text: "Ceci est le texte de l'article est un mini text décrivant l'article est un mini text décrivant l'article est un mini text décrivant l'article est un mini text décrivant l'article"
    },


  ]

  constructor() {

  }

  public getArticle(i: number){
    return i<this.articles.length ? this.articles[i] : undefined;
  }
  public getArticles(){
    return this.articles;
  }
}
