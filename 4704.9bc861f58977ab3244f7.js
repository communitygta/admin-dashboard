(self.webpackChunkcommunitygta_admin_panel=self.webpackChunkcommunitygta_admin_panel||[]).push([[4704],{4704:(n,o,e)=>{"use strict";e.r(o),e.d(o,{OrganizationsPageModule:()=>O});var t=e(8583),i=e(3679),r=e(3083),a=e(1182),s=e(3190),g=e(263),l=e(639),c=e(5332);function u(n,o){if(1&n&&(l.TgZ(0,"ion-select-option",17),l._uU(1),l.qZA()),2&n){const n=o.$implicit;l.Q6J("value",n.id),l.xp6(1),l.Oqu(n.name)}}function h(n,o){if(1&n){const n=l.EpF();l.TgZ(0,"div",13),l.TgZ(1,"ion-item"),l.TgZ(2,"ion-label",8),l._uU(3,"Neighbourhood filter"),l.qZA(),l.TgZ(4,"ion-select",14),l.NdJ("ionChange",function(o){return l.CHM(n),l.oxw(2).onNeighbourhoodSelect(o)})("ngModelChange",function(o){return l.CHM(n),l.oxw(2).selectedNeighbourhoodId=o}),l.TgZ(5,"ion-select-option",15),l._uU(6,"None"),l.qZA(),l.YNc(7,u,2,2,"ion-select-option",16),l.qZA(),l.qZA(),l.qZA()}if(2&n){const n=l.oxw(2);l.xp6(4),l.Q6J("ngModel",n.selectedNeighbourhoodId),l.xp6(3),l.Q6J("ngForOf",n.availableNeighbourhoods)}}function d(n,o){if(1&n&&(l.ynx(0),l.TgZ(1,"ion-note"),l._uU(2),l.qZA(),l.BQk()),2&n){const n=l.oxw().$implicit;l.xp6(2),l.Oqu(n.neighbourhood.name)}}const p=function(n){return["/organizations",n]};function f(n,o){if(1&n&&(l.TgZ(0,"ion-item",18),l.TgZ(1,"ion-label",19),l._uU(2),l.YNc(3,d,3,1,"ng-container",0),l.qZA(),l.TgZ(4,"ion-note",3),l._uU(5),l.qZA(),l.qZA()),2&n){const n=o.$implicit,e=l.oxw(2);l.Q6J("routerLink",l.VKq(4,p,n.id)),l.xp6(2),l.hij(" ",n.name," "),l.xp6(1),l.Q6J("ngIf",e.showNeighbourhoodName),l.xp6(2),l.hij("Programs: ",n.total_programs,"")}}function b(n,o){1&n&&(l.TgZ(0,"ion-item"),l.TgZ(1,"ion-label"),l._uU(2,"No results"),l.qZA(),l.qZA())}const Z=function(){return["/organization-create"]};function m(n,o){if(1&n){const n=l.EpF();l.ynx(0),l.TgZ(1,"ion-header"),l.TgZ(2,"ion-toolbar",1),l.TgZ(3,"ion-buttons",2),l._UZ(4,"ion-menu-button"),l.qZA(),l.TgZ(5,"ion-title"),l._uU(6),l.qZA(),l.TgZ(7,"ion-buttons",3),l.TgZ(8,"ion-button",4),l._UZ(9,"ion-icon",5),l._uU(10," \xa0 Create "),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(11,"ion-content"),l.TgZ(12,"div",6),l.TgZ(13,"div",7),l.TgZ(14,"ion-item"),l.TgZ(15,"ion-label",8),l._uU(16,"Organization name filter"),l.qZA(),l.TgZ(17,"ion-input",9),l.NdJ("ionChange",function(o){return l.CHM(n),l.oxw().onFilter(o)})("ngModelChange",function(o){return l.CHM(n),l.oxw().filterInput=o}),l.qZA(),l.qZA(),l.qZA(),l.YNc(18,h,8,2,"div",10),l.TgZ(19,"div",11),l.YNc(20,f,6,6,"ion-item",12),l.YNc(21,b,3,0,"ion-item",0),l.qZA(),l.qZA(),l.qZA(),l.BQk()}if(2&n){const n=l.oxw();l.xp6(6),l.hij("",null==n.organizations?null:n.organizations.length," Organizations"),l.xp6(2),l.Q6J("routerLink",l.DdM(6,Z)),l.xp6(9),l.Q6J("ngModel",n.filterInput),l.xp6(1),l.Q6J("ngIf",n.availableNeighbourhoods),l.xp6(2),l.Q6J("ngForOf",n.organizations),l.xp6(1),l.Q6J("ngIf",!n.organizations.length)}}const w=[{path:"",component:(()=>{class n{constructor(n,o){this.authService=n,this.dashboardService=o,this.showNeighbourhoodName=!1}ngOnInit(){}onFilter(n){const o=n.target.value;this.organizations=this.oriOrganizations.filter(n=>{let e=!0,t=!0;return e=-1!==n.name.toLowerCase().indexOf(o.toLowerCase()),+this.selectedNeighbourhoodId&&(t=n.neighbourhood.id===this.selectedNeighbourhoodId),e&&t})}onNeighbourhoodSelect(n){const o=+n.target.value;this.organizations=this.oriOrganizations.filter(n=>{let e=!0,t=!0;return this.filterInput&&(e=-1!==n.name.toLowerCase().indexOf(this.filterInput.trim().toLowerCase())),o&&(t=n.neighbourhood.id===o),e&&t})}ionViewWillEnter(){this.authService.userRole===g.i4.superAdmin&&(this.showNeighbourhoodName=!0,this.dashboardService.getAllNeighbourhoods().pipe((0,s.w)(n=>(this.availableNeighbourhoods=n,this.dashboardService.getAllOrganizations()))).subscribe(n=>{n.map(n=>n.neighbourhood=this.availableNeighbourhoods.find(o=>o.id===n.neighbourhood)),this.organizations=n,this.oriOrganizations=n})),this.authService.userRole===g.i4.neighbourhoodAdmin&&this.dashboardService.getOrganizationsByNeighbourhoodId(this.authService.userProfile$.getValue().profile.neighbourhood.id).subscribe(n=>{this.organizations=n,this.oriOrganizations=n})}}return n.\u0275fac=function(o){return new(o||n)(l.Y36(g.e8),l.Y36(c.s))},n.\u0275cmp=l.Xpm({type:n,selectors:[["app-organizations"]],decls:1,vars:1,consts:[[4,"ngIf"],["color","light"],["slot","start"],["slot","end"],["fill","solid","expand","block","color","primary",3,"routerLink"],["name","add-outline"],[1,"wrapper"],[1,"content-wrapper","filter"],["position","stacked"],["clearInput","","placeholder","filter by organization name",3,"ngModel","ionChange","ngModelChange"],["class","content-wrapper selection",4,"ngIf"],[1,"content-wrapper"],["button","","lines","full",3,"routerLink",4,"ngFor","ngForOf"],[1,"content-wrapper","selection"],["placeholder","filter by neighbourhood",3,"ngModel","ionChange","ngModelChange"],["value","0"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["button","","lines","full",3,"routerLink"],[1,"ion-text-wrap"]],template:function(n,o){1&n&&l.YNc(0,m,22,7,"ng-container",0),2&n&&l.Q6J("ngIf",o.organizations)},directives:[t.O5,r.Gu,r.sr,r.Sm,r.fG,r.wd,r.YG,r.YI,a.rH,r.gu,r.W2,r.Ie,r.Q$,r.pK,r.j9,i.JJ,i.On,t.sg,r.t9,r.QI,r.n0,r.uN],styles:["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{margin:30px;border-radius:15px;box-shadow:0 3px 10px #0003;overflow:hidden;padding:10px 0;width:100%}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:14px}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper.filter[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper.selection[_ngcontent-%COMP%]{max-width:350px}"]}),n})()}];let C=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=l.oAB({type:n}),n.\u0275inj=l.cJS({imports:[[a.Bz.forChild(w)],a.Bz]}),n})(),O=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=l.oAB({type:n}),n.\u0275inj=l.cJS({imports:[[t.ez,i.u5,r.Pc,C]]}),n})()}}]);