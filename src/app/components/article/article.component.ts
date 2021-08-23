import { Article } from './../../models/article';
import { ArticleService } from './../../services/article.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: Article = {title: "", text:"", shortText:"", subhead: ""}

  constructor(articleService: ArticleService) {
    this.article = articleService.getArticleToDisplay();
  }

  ngOnInit(): void {
  }

}
