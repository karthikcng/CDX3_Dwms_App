import { CommonModule } from "@angular/common";
import { DashboardSalesRoutingModule } from "../sales/dashboardsales-routing.module";
import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { ChartModule } from "primeng/chart";
import { InputGroupModule } from "primeng/inputgroup";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { InputTextModule } from "primeng/inputtext";
import { MenuModule } from "primeng/menu";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { RippleModule } from "primeng/ripple";
import { TableModule } from "primeng/table";
import { TimelineModule } from "primeng/timeline";
import { DwmsComponent } from "./dwms.component";
import { DWMSService } from "src/app/demo/service/dwms.service";
import { CookieService } from "ngx-cookie-service";

@NgModule({
    imports: [
        CommonModule,
        DashboardSalesRoutingModule,
        MenuModule,
        TimelineModule,
        ButtonModule,
        RippleModule,
        TableModule,
        ChartModule,
        OverlayPanelModule,
        CardModule,
        InputTextModule,
        InputGroupModule,
        InputGroupAddonModule
    ],
    declarations: [
    ],
    //providers: [DWMSService, CookieService]
})
export class DwmsModule { }
