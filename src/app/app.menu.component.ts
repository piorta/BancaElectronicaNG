import { Component, Input, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MenuItem, ScrollPanel } from 'primeng/primeng';
import { AppComponent } from './app.component';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit, AfterViewInit {

    @Input() reset: boolean;

    model: any[];

    @ViewChild('layoutMenuScroller') layoutMenuScrollerViewChild: ScrollPanel;

    constructor(public app: AppComponent) { }

    ngOnInit() {
        this.model = [


            // { label: 'DASHBOARD', icon: 'fa fa-fw fa-dashboard', routerLink: ['/']},

            { label: 'Posición Consolidada', icon: 'fa fa-fw fa-area-chart', routerLink: ['/'] },


            {
                label: 'Transferencias', icon: 'fa fa-exchange',
                items: [
                    { label: 'Transferencia Directa', routerLink: ['/transfdirecta'] },
                    { label: 'Transferencia Otros', routerLink: ['/transfotros'] },
                    { label: 'Historial', routerLink: ['/transfhistorial'] }

                ]

            },

            {
                label: 'Préstamos', icon: 'fa fa-money',
                items: [
                    { label: 'Solicitud de Préstamo', routerLink: ['/solicitudp'] },
                    { label: 'Simulador de Préstamo', routerLink: ['/simuladorp'] },
                    { label: 'Pago de Préstamo', routerLink: ['/pagosp'] },
                ]


            },
            { label: 'Movimientos', icon: 'fa fa-spinner', routerLink: ['/movimientos'] },


            //{ label: 'Posición Consolidada', icon: 'fa fa-fw fa-area-chart', routerLink: ['/posicion-consolidada']},
            /*          { label: 'Préstamos', icon: 'fa fa-fw fa-list', routerLink: ['/prestamos']},
                     { label: 'Transferencias', icon: 'fa fa-fw fa-list', routerLink: ['/transferencias']},
                     { label: 'Movimientos', icon: 'fa fa-fw fa-list-alt', routerLink: ['/movimientos']}, */

            /* {
                label: 'TOPBAR COLORS', icon: 'fa fa-fw fa-magic', badge: 10,
                items: [
                    {
                        label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTopbarColor('layout-topbar-light', 'logo-olympia')
                    },
                    {
                        label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTopbarColor('layout-topbar-dark', 'logo-olympia-white')
                    },
                    {
                        label: 'Blue-Grey', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTopbarColor('layout-topbar-bluegrey', 'logo-olympia-white')
                    },
                    {
                        label: 'Purple', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTopbarColor('layout-topbar-purple', 'logo-olympia-white')
                    },
                    {
                        label: 'Cyan', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTopbarColor('layout-topbar-cyan', 'logo-olympia-white')
                    },
                    {
                        label: 'Pink', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTopbarColor('layout-topbar-pink', 'logo-olympia-white')
                    },
                    {
                        label: 'Teal', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTopbarColor('layout-topbar-teal', 'logo-olympia-white')
                    },
                    {
                        label: 'Yellow', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTopbarColor('layout-topbar-yellow', 'logo-olympia')
                    },
                    {
                        label: 'Lime', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTopbarColor('layout-topbar-lime', 'logo-olympia')
                    },
                    {
                        label: 'Green', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTopbarColor('layout-topbar-green', 'logo-olympia')
                    }
                ]
            },
            {
                label: 'MENU COLORS', icon: 'fa fa-fw fa-list',
                items: [
                    { label: 'Light', icon: 'fa fa-fw fa-circle-o', command: event => this.app.lightMenu = true },
                    { label: 'Dark', icon: 'fa fa-fw fa-circle', command: event => this.app.lightMenu = false }
                ]
            },
            {
                label: 'LAYOUTS', icon: 'fa fa-fw fa-desktop',
                items: [
                    { label: 'Static', icon: 'fa fa-fw fa-bars', command: event => this.app.changeMenuMode('static') },
                    { label: 'Overlay', icon: 'fa fa-fw fa-bars', command: event => this.app.changeMenuMode('overlay') },
                    { label: 'Slim', icon: 'fa fa-fw fa-bars', command: event => this.app.changeMenuMode('slim') },
                    { label: 'Horizontal', icon: 'fa fa-fw fa-bars', command: event => this.app.changeMenuMode('horizontal') }
                ]
            },
            {
                label: 'THEMES', icon: 'fa fa-fw fa-paint-brush', badge: 10,
                items: [
                    {
                        label: 'Blue-Grey Teal', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('bluegrey-teal')
                    },
                    {
                        label: 'Green Yellow', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('green-yellow')
                    },
                    {
                        label: 'Purple Blue', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('purple-blue')
                    },
                    {
                        label: 'Blue Orange', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('blue-orange')
                    },
                    {
                        label: 'Indigo Yellow', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('indigo-yellow')
                    },
                    {
                        label: 'Amber Teal', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('amber-teal')
                    },
                    {
                        label: 'Cyan Amber', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('cyan-amber')
                    },
                    {
                        label: 'Brown Cyan', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('brown-cyan')
                    },
                    {
                        label: 'Lime Purple', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('lime-purple')
                    },
                    {
                        label: 'Deep-Orange Blue', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('deeporange-blue')
                    }
                ]
            },
            {
                label: 'COMPONENTS', icon: 'fa fa-fw fa-bars',
                items: [
                    { label: 'Sample Page', icon: 'fa fa-fw fa-columns', routerLink: ['/sample']  },
                    { label: 'Forms', icon: 'fa fa-fw fa-code', routerLink: ['/forms'] },
                    { label: 'Data', icon: 'fa fa-fw fa-table', routerLink: ['/data'] },
                    { label: 'Panels', icon: 'fa fa-fw fa-list-alt', routerLink: ['/panels'] },
                    { label: 'Overlays', icon: 'fa fa-fw fa-square', routerLink: ['/overlays'] },
                    { label: 'Menus', icon: 'fa fa-fw fa-minus-square-o', routerLink: ['/menus'] },
                    { label: 'Messages', icon: 'fa fa-fw fa-circle-o-notch', routerLink: ['/messages'] },
                    { label: 'Charts', icon: 'fa fa-fw fa-area-chart', routerLink: ['/charts'] },
                    { label: 'File', icon: 'fa fa-fw fa-arrow-circle-o-up', routerLink: ['/file'] },
                    { label: 'Misc', icon: 'fa fa-fw fa-user-secret', routerLink: ['/misc'] }
                ]
            },
            {
                label: 'PAGES', icon: 'fa fa-fw fa-cube',
                items: [
                    { label: 'Empty', icon: 'fa fa-fw fa-square-o', routerLink: ['/empty'] },
                    { label: 'Login', icon: 'fa fa-fw fa-sign-in', url: 'assets/pages/login.html', target: '_blank' },
                    { label: 'Landing', icon: 'fa fa-fw fa-certificate', url: 'assets/pages/landing.html', target: '_blank' },
                    { label: 'Error', icon: 'fa fa-fw fa-exclamation-circle', url: 'assets/pages/error.html', target: '_blank' },
                    { label: '404', icon: 'fa fa-fw fa-times', url: 'assets/pages/404.html', target: '_blank' },
                    {
                        label: 'Access Denied', icon: 'fa fa-fw fa-exclamation-triangle',
                        url: 'assets/pages/access.html', target: '_blank'
                    }
                ]
            },
            {
                label: 'HIERARCHY', icon: 'fa fa-fw fa-sitemap',
                items: [
                    {
                        label: 'Submenu 1', icon: 'fa fa-fw fa-sign-in',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    { label: 'Submenu 1.1.1', icon: 'fa fa-fw fa-sign-in' },
                                    { label: 'Submenu 1.1.2', icon: 'fa fa-fw fa-sign-in' },
                                    { label: 'Submenu 1.1.3', icon: 'fa fa-fw fa-sign-in' },
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    { label: 'Submenu 1.2.1', icon: 'fa fa-fw fa-sign-in' }
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'fa fa-fw fa-sign-in',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    { label: 'Submenu 2.1.1', icon: 'fa fa-fw fa-sign-in' },
                                    { label: 'Submenu 2.1.2', icon: 'fa fa-fw fa-sign-in' },
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    { label: 'Submenu 2.2.1', icon: 'fa fa-fw fa-sign-in' },
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                label: 'DOCS', icon: 'fa fa-fw fa-file-code-o', routerLink: ['/documentation']
            },
            {
                label: 'BUY NOW', icon: 'fa fa-fw fa-credit-card-alt', url: ['https://www.primefaces.org/store']
            } */
        ];
    }

    ngAfterViewInit() {
        setTimeout(() => { this.layoutMenuScrollerViewChild.moveBar(); }, 100);
    }

    changeTheme(theme: string) {
        const layoutLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById('layout-css');
        layoutLink.href = 'assets/layout/css/layout-' + theme.split('-')[0] + '.css';
        const themeLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById('theme-css');
        themeLink.href = 'assets/theme/' + 'theme-' + theme + '.css';
    }

    changeTopbarColor(topbarColor, logo) {
        this.app.topbarColor = topbarColor;
        const topbarLogoLink: HTMLImageElement = <HTMLImageElement>document.getElementById('topbar-logo');
        topbarLogoLink.src = 'assets/layout/images/' + logo + '.png';
    }

    onMenuClick(event) {
        if (!this.app.isHorizontal()) {
            setTimeout(() => {
                this.layoutMenuScrollerViewChild.moveBar();
            }, 450);
        }
        this.app.onMenuClick(event);
    }
}

@Component({
    /* tslint:disable:component-selector */
    selector: '[app-submenu]',
    /* tslint:enable:component-selector */
    template: `
        <ng-template ngFor let-child let-i="index" [ngForOf]="(root ? item : item.items)">
            <li [ngClass]="{'active-menuitem': isActive(i)}" [class]="child.badgeStyleClass" *ngIf="child.visible === false ? false : true">
                <a [href]="child.url||'#'" (click)="itemClick($event,child,i)" (mouseenter)="onMouseEnter(i)"
                   *ngIf="!child.routerLink" [ngClass]="child.styleClass"
                   [attr.tabindex]="!visible ? '-1' : null" [attr.target]="child.target">
                    <i [ngClass]="child.icon" class="layout-menuitem-icon"></i>
                    <span class="layout-menuitem-text">{{child.label}}</span>
                    <i class="fa fa-fw fa-angle-down layout-submenu-toggler" *ngIf="child.items"></i>
                    <span class="menuitem-badge" *ngIf="child.badge">{{child.badge}}</span>
                </a>
                <a (click)="itemClick($event,child,i)" (mouseenter)="onMouseEnter(i)" *ngIf="child.routerLink"
                   [routerLink]="child.routerLink" routerLinkActive="active-menuitem-routerlink" [fragment]="child.fragment"
                   [routerLinkActiveOptions]="{exact: true}" [attr.tabindex]="!visible ? '-1' : null" [attr.target]="child.target">
                    <i [ngClass]="child.icon" class="layout-menuitem-icon"></i>
                    <span class="layout-menuitem-text">{{child.label}}</span>
                    <i class="fa fa-fw fa-angle-down layout-submenu-toggler" *ngIf="child.items"></i>
                    <span class="menuitem-badge" *ngIf="child.badge">{{child.badge}}</span>
                </a>
                <div class="layout-menu-tooltip">
                    <div class="layout-menu-tooltip-arrow"></div>
                    <div class="layout-menu-tooltip-text">{{child.label}}</div>
                </div>
                <ul app-submenu [item]="child" *ngIf="child.items" [visible]="isActive(i)" [reset]="reset" [parentActive]="isActive(i)"
                    [@children]="(app.isSlim()||app.isHorizontal())&&root ? isActive(i) ?
                    'visible' : 'hidden' : isActive(i) ? 'visibleAnimated' : 'hiddenAnimated'"></ul>
            </li>
        </ng-template>
    `,
    animations: [
        trigger('children', [
            state('hiddenAnimated', style({
                height: '0px'
            })),
            state('visibleAnimated', style({
                height: '*'
            })),
            state('visible', style({
                height: '*',
                'z-index': 100
            })),
            state('hidden', style({
                height: '0px',
                'z-index': '*'
            })),
            transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class AppSubMenuComponent {
    @Input() item: MenuItem;
    @Input() root: boolean;
    @Input() visible: boolean;
    _parentActive: boolean;
    _reset: boolean;
    activeIndex: number;
    constructor(public app: AppComponent, public appMenu: AppMenuComponent) { }
    itemClick(event: Event, item: MenuItem, index: number) {
        if (this.root) {
            this.app.menuHoverActive = !this.app.menuHoverActive;
        }
        // avoid processing disabled items
        if (item.disabled) {
            event.preventDefault();
            return true;
        }
        // activate current item and deactivate active sibling if any
        this.activeIndex = (this.activeIndex === index) ? null : index;
        // execute command
        if (item.command) {
            item.command({ originalEvent: event, item: item });
        }
        // prevent hash change
        if (item.items || (!item.url && !item.routerLink)) {
            setTimeout(() => {
                this.appMenu.layoutMenuScrollerViewChild.moveBar();
            }, 450);
            event.preventDefault();
        }
        // hide menu
        if (!item.items) {
            if (this.app.isHorizontal() || this.app.isSlim()) {
                this.app.resetMenu = true;
            } else {
                this.app.resetMenu = false;
            }
            this.app.overlayMenuActive = false;
            this.app.staticMenuMobileActive = false;
            this.app.menuHoverActive = !this.app.menuHoverActive;
        }
    }
    onMouseEnter(index: number) {
        if (this.root && this.app.menuHoverActive && (this.app.isHorizontal() || this.app.isSlim())
            && !this.app.isMobile() && !this.app.isTablet()) {
            this.activeIndex = index;
        }
    }
    isActive(index: number): boolean {
        return this.activeIndex === index;
    }
    @Input() get reset(): boolean {
        return this._reset;
    }
    set reset(val: boolean) {
        this._reset = val;
        if (this._reset && (this.app.isHorizontal() || this.app.isSlim())) {
            this.activeIndex = null;
        }
    }
    @Input() get parentActive(): boolean {
        return this._parentActive;
    }
    set parentActive(val: boolean) {
        this._parentActive = val;
        if (!this._parentActive) {
            this.activeIndex = null;
        }
    }
}
