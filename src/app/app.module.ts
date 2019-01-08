import {  AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { DepositmanagerComponent } from './admin/depositmanager/depositmanager.component';
import { DetailPaneComponent } from './admin/depositmanager/detail-pane/detail-pane.component';
import { LoginComponent } from './admin/login/login.component';
import { PagesmanageComponent } from './admin/pagesmanage/pagesmanage.component';
import { UsersmanageComponent } from './admin/usersmanage/usersmanage.component';
import { AboutComponent } from './components/about/about.component';
import { BannermanComponent } from './components/bannerman/bannerman.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { KyguiComponent } from './components/kygui/kygui.component';
import { MainPageComponent } from './components/mainpage/mainpage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PagemanComponent } from './components/pageman/pageman.component';
import { PhaplyComponent } from './components/phaply/phaply.component';
import { ProdDialogComponent } from './components/prod-dialog/prod-dialog.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { PageService } from './services/page.service';
import { DepositService } from './services/deposit.service';
import { BannerService } from './services/banner.service';
import { MaterialModule } from './material.module';

import './polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports:      [BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule, BrowserModule, FormsModule, AppRoutingModule, MaterialModule ],
  declarations: [ AppComponent, DashboardComponent, DepositmanagerComponent, DetailPaneComponent, LoginComponent, PagesmanageComponent, UsersmanageComponent, AboutComponent, BannermanComponent, CarouselComponent, FooterComponent, HomeComponent, KyguiComponent, MainPageComponent, NavbarComponent, PagemanComponent, PhaplyComponent, ProdDialogComponent, ProductdetailComponent, SearchboxComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PageService, DepositService, BannerService]
})
export class AppModule { }
