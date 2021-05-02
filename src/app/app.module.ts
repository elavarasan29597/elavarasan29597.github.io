import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MenuComponent } from './components/menu/menu.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { HomeComponent } from './components/home/home.component';
import { AvatarModule } from "primeng/avatar";
import { AboutComponent } from './components/about/about.component';
import { ButtonModule } from 'primeng/button';
import { ServicesComponent } from './components/services/services.component';
import { BlogComponent } from './components/blog/blog.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HobbitComponent } from './components/hobbies/hobbit/hobbit.component';
import { HobbyComponent } from './components/hobbies/hobby/hobby.component';
import { BlogPreviewComponent } from './components/blog/blog-preview/blog-preview.component';
import { BlogsComponent } from './components/blog/blogs/blogs.component';
import { SidebarModule } from 'primeng/sidebar';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    BlogComponent,
    HobbiesComponent,
    ContactComponent,
    FooterComponent,
    HobbitComponent,
    HobbyComponent,
    BlogPreviewComponent,
    BlogsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TabMenuModule,
    ButtonModule,
    SidebarModule,
    BrowserAnimationsModule, AvatarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}