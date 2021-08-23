import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  articles: Article[];

  constructor(public articleService: ArticleService) {
    this.articles = this.articleService.getArticles();
   }

  ngOnInit(): void {
  }

  setArticleToDisplay(i: number){
    this.articleService.setArticleToDisplay(i);
  }

}
