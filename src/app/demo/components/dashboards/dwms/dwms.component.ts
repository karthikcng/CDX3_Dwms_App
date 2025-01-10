import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DWMSService } from 'src/app/demo/service/dwms.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';


interface MenuData {
  tenant_code: number;
  system_code: string;
  tenant_id: number;
  system_id: number;
  l1_menu_item_name1: string;
  l2_menu_item_name1: string;
  l1_menu_item_display_order: number;
  l2_menu_item_display_order: string;
}


@Component({
  selector: 'app-dwms',
  standalone: true,
  imports: [TableModule,CommonModule],
  templateUrl: './dwms.component.html',
  styleUrl: './dwms.component.scss'
})

export class DwmsComponent implements OnInit {
  menuData: MenuData[] = [];
  isLoading: boolean = false;
  isError: boolean = false;
  block2: any;

  constructor(private router: Router, private dwmsService: DWMSService, private cookieService: CookieService,) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.isError = false;
    this.dwmsService.getMenu({
      tenant_id: 20,
      system_id: 20
    }).subscribe({
      next: (response: any) => {
        this.menuData = response.ml_lab;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching menu data:', error);
        this.isError = true;
        this.isLoading = false;
      }
    });
  }
}