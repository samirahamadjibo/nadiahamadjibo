import { ArticleComponent } from './components/article/article.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    data: { animation: 'Form' }
  },
  {
    path: 'blog', component: BlogComponent,
    data: { animation: 'Form' }
  },
  {
    path: 'contact', component: ContactComponent,
    data: { animation: 'MainPage' }
  },
  {
    path: 'article', component: ArticleComponent,
    data: { animation: 'Article' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
