import { Injectable } from '@angular/core';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articleToDisplayId: number = 0;
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
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor orci ac enim tincidunt porta et id diam. Cras pharetra vel elit ac fringilla. Nulla dictum consectetur eros, eleifend molestie lorem ornare non. Maecenas mollis magna nec enim gravida bibendum. Mauris eget nibh id lectus congue ornare. Nulla neque nunc, hendrerit nec mattis non, faucibus non urna. Nunc auctor mauris semper odio sagittis scelerisque. Donec vitae mollis magna, at sollicitudin augue. Praesent a congue massa. Donec eget nulla vitae lectus pharetra pulvinar ornare nec dui. Donec malesuada aliquam nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus suscipit pretium elit aliquet vulputate. Donec consequat mattis vestibulum. Praesent et dolor ligula. Suspendisse potenti. Ut lacinia eu leo quis imperdiet. Ut eget justo a nunc semper porta at eget dui. Nulla cursus, nisl in porta fringilla, nulla sem laoreet massa, sit amet egestas dolor leo eget diam. Cras nec arcu a tellus gravida tincidunt. Vestibulum mattis orci vel nibh facilisis sagittis. Integer sit amet nisi hendrerit erat sodales finibus. Fusce commodo rhoncus rutrum. Aenean erat mauris, feugiat vel posuere sit amet, luctus vitae augue. Nulla dignissim luctus est et convallis. Maecenas at eros suscipit orci vehicula mattis eu eu nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras eget posuere lacus. Pellentesque pellentesque semper congue.Suspendisse potenti. Fusce feugiat pulvinar lectus, vel luctus libero dictum vel. Vestibulum eu ultrices erat, ut congue ligula. Mauris laoreet elit vitae elit iaculis, sed sodales lorem volutpat. Quisque orci mauris, posuere rutrum nibh in, volutpat tincidunt ipsum. Nunc elit urna, pulvinar ac urna eget, varius dapibus justo. Cras condimentum, enim ac auctor commodo, quam turpis volutpat diam, in elementum arcu risus et arcu.Donec at lacus ultricies, feugiat neque at, ornare mauris. Morbi posuere rhoncus eros et feugiat. Curabitur bibendum sem eu sollicitudin rhoncus. Sed at est at magna accumsan blandit. Nulla id justo et justo pharetra tincidunt at in lacus. Mauris sit amet facilisis sem. Ut vitae odio convallis, suscipit justo lacinia, imperdiet libero. Nulla egestas aliquet neque, sit amet feugiat metus ullamcorper nec. Praesent fermentum luctus sapien. Nunc lectus odio, tincidunt sit amet nunc quis, dictum consectetur enim. Morbi sit amet tortor bibendum, tempor lacus ac, accumsan purus.Etiam eu lacus at neque dapibus euismod. Vivamus dictum elementum feugiat. Nulla facilisi. Suspendisse potenti. Nunc nec purus ligula. Fusce auctor at lectus et euismod. Quisque lacinia non magna id feugiat. Morbi nec nisi eu sem rhoncus sodales quis eu nunc."
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
      shortText: "Ceci est un mini text décrivant l'article est un mini text décrivant l'article est un mini text décrivant l'article est un mini text décrivant l'article est un mini text décrivant l'article est un mini text décrivant l'article ..",
      text: "Ceci est le texte de l'article est un mini text décrivant l'article est un mini text décrivant l'article est un mini text décrivant l'article est un mini text décrivant l'article"
    },


  ]

  constructor() {

  }

  public getArticle(i: number) {
    return i < this.articles.length ? this.articles[i] : undefined;
  }
  public getArticles() {
    return this.articles;
  }

  public getArticleToDisplay() {
    return this.articles[this.articleToDisplayId];
  }

  public setArticleToDisplay(i: number) {
    this.articleToDisplayId = i;
  }

}
