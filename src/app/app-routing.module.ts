import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogPreviewComponent } from './components/blog/blog-preview/blog-preview.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogsComponent } from './components/blog/blogs/blogs.component';
import { ContactComponent } from './components/contact/contact.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { HobbitComponent } from './components/hobbies/hobbit/hobbit.component';
import { HobbyComponent } from './components/hobbies/hobby/hobby.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'Home' } },
  { path: 'about', component: AboutComponent, data: { animation: 'About' } },
  { path: 'services', component: ServicesComponent, data: { animation: 'Services' } },
  {
    path: '',
    component: HobbiesComponent,
    children: [
      { path: 'hobbies', component: HobbyComponent },
      { path: 'hobby', component: HobbitComponent },
    ]
    , data: { animation: 'Hobbies' }
  },
  {
    path: '',
    component: BlogComponent,
    children: [
      { path: 'blogs', component: BlogsComponent },
      { path: 'blog', component: BlogPreviewComponent },
    ]
    , data: { animation: 'Blogs' }
  },
  { path: 'contact', component: ContactComponent, data: { animation: 'Contact' } },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // Restore the last scroll position
    scrollPositionRestoration: "top",
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
