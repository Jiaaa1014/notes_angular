import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { MessageComponent } from './components/message/message.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserComponent } from './components/user/user.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';

import { UserService } from './services/user/user.service';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessageComponent,
    MessageListComponent,
    ChildComponent,
    ParentComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    HeaderComponent,
    UsersComponent,
    UserDetailsComponent,
    UserComponent,
    PlaceholderComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
