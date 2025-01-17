import { Component, ElementRef, ViewChild } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
})
export class AppTopbarComponent {
    @ViewChild('menuButton') menuButton!: ElementRef;

    @ViewChild('mobileMenuButton') mobileMenuButton!: ElementRef;

    @ViewChild('searchInput') searchInput!: ElementRef;

    constructor(
        public layoutService: LayoutService,
        public el: ElementRef,
        private cookieService: CookieService
    ) {}

    activeItem!: number;

    model: MegaMenuItem[] = [
        {
            label: 'DWMS',
            items: [
                [
                    {
                        label: 'dwms main',
                        items: [
                            {
                                label: 'Form Layout',
                                icon: 'pi pi-fw pi-id-card',
                                routerLink: ['/uikit/formlayout'],
                            },
                            {
                                label: 'Input',
                                icon: 'pi pi-fw pi-check-square',
                                routerLink: ['/uikit/input'],
                            },
                            {
                                label: 'Float Label',
                                icon: 'pi pi-fw pi-bookmark',
                                routerLink: ['/uikit/floatlabel'],
                            },
                            {
                                label: 'Button',
                                icon: 'pi pi-fw pi-mobile',
                                routerLink: ['/uikit/button'],
                            },
                            {
                                label: 'File',
                                icon: 'pi pi-fw pi-file',
                                routerLink: ['/uikit/file'],
                            },
                        ],
                    },
                ],
            ],
        },
        {
            label: 'UTILITIES',
            items: [
                [
                    {
                        label: 'UTILITIES 1',
                        items: [
                            {
                                label: 'Icons',
                                icon: 'pi pi-fw pi-prime',
                                routerLink: ['utilities/icons'],
                            },
                            {
                                label: 'PrimeFlex',
                                icon: 'pi pi-fw pi-desktop',
                                url: 'https://www.primefaces.org/primeflex/',
                                target: '_blank',
                            },
                        ],
                    },
                ],
            ],
        },
    ];

    get mobileTopbarActive(): boolean {
        return this.layoutService.state.topbarMenuActive;
    }

    onMenuButtonClick() {
        this.layoutService.onMenuToggle();
    }

    onRightMenuButtonClick() {
        window.location.href = '/context-selection';
        // this.layoutService.openRightSidebar();
    }

    handleSignOut(): void {
        this.clearLoginInfo();
        window.location.href = '/';
    }

    clearLoginInfo(): void {
        const allCookies = this.cookieService.getAll();

        Object.keys(allCookies).forEach((cookieName) => {
            this.cookieService.delete(cookieName, '/');
        });
        document.cookie =
            'KEYCLOAK_IDENTITY=; Path=/realms/compliance365/; Expires=Thu, 01 Jan 1970 00:00:00 GMT;';
        document.cookie =
            'KEYCLOAK_SESSION=; Path=/realms/compliance365/; Expires=Thu, 01 Jan 1970 00:00:00 GMT;';
    }

    onMobileTopbarMenuButtonClick() {
        this.layoutService.onTopbarMenuToggle();
    }

    focusSearchInput() {
        setTimeout(() => {
            this.searchInput.nativeElement.focus();
        }, 0);
    }
}
