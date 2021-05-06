import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule, SocialAuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';


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
import { TestComponent } from './components/test/test.component';


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
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TabMenuModule,
    ButtonModule,
    SidebarModule,
    BrowserAnimationsModule, AvatarModule,
    ReactiveFormsModule,
    SocialLoginModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              // '1080951798608-mmm2qmgjvqqnqm10kmpp4qi6mukjc0sc.apps.googleusercontent.com'
              '61095316339-kcba3eek6to8tfan7tqov8k6jlcm26ie.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(
              '372519954101406'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}