(self.webpackChunkcommunitygta_admin_panel=self.webpackChunkcommunitygta_admin_panel||[]).push([[2493],{2493:(n,e,t)=>{"use strict";t.r(e),t.d(e,{ProgramsPageModule:()=>P});var o=t(8583),i=t(3679),r=t(3083),a=t(1182),g=t(263),s=t(639),c=t(5332),l=t(4382);function p(n,e){1&n&&(s.ynx(0),s._uU(1,"s"),s.BQk())}function u(n,e){if(1&n&&(s.TgZ(0,"ion-select-option",18),s._uU(1),s.qZA()),2&n){const n=e.$implicit;s.Q6J("value",n.id),s.xp6(1),s.Oqu(n.name)}}function d(n,e){if(1&n){const n=s.EpF();s.TgZ(0,"div",12),s.TgZ(1,"ion-item",13),s.TgZ(2,"ion-label",14),s._uU(3,"Select an organization"),s.qZA(),s.TgZ(4,"ion-select",15),s.NdJ("ionChange",function(e){return s.CHM(n),s.oxw(2).onSelect(e)})("ngModelChange",function(e){return s.CHM(n),s.oxw(2).selectedOrganization=e}),s.TgZ(5,"ion-select-option",16),s._uU(6,"None"),s.qZA(),s.YNc(7,u,2,2,"ion-select-option",17),s.ALo(8,"async"),s.qZA(),s.qZA(),s.qZA()}if(2&n){const n=s.oxw(2);s.xp6(4),s.Q6J("ngModel",n.selectedOrganization),s.xp6(3),s.Q6J("ngForOf",s.lcZ(8,2,n.availableOrganizations$))}}function h(n,e){if(1&n&&(s.ynx(0),s.TgZ(1,"ion-note",24),s._uU(2),s.qZA(),s.BQk()),2&n){const n=s.oxw().$implicit;s.xp6(2),s.Oqu(n.organization.name)}}function m(n,e){1&n&&(s.TgZ(0,"ion-note",3),s._UZ(1,"ion-icon",25),s._uU(2," Enabled "),s.qZA())}function f(n,e){1&n&&(s.TgZ(0,"ion-note",3),s._UZ(1,"ion-icon",26),s._uU(2," Disabled "),s.qZA())}const O=function(n){return["/programs",n]};function Z(n,e){if(1&n&&(s.TgZ(0,"ion-item",19),s.TgZ(1,"ion-label",20),s._uU(2),s.YNc(3,h,3,1,"ng-container",0),s.qZA(),s.TgZ(4,"ion-label",21),s.YNc(5,m,3,0,"ion-note",22),s.YNc(6,f,3,0,"ion-note",22),s.TgZ(7,"ion-note",3),s._UZ(8,"ion-icon",23),s._uU(9),s.qZA(),s.qZA(),s.qZA()),2&n){const n=e.$implicit,t=s.oxw(2);s.Q6J("routerLink",s.VKq(6,O,n.id)),s.xp6(2),s.hij("",n.name," "),s.xp6(1),s.Q6J("ngIf",(0===t.userRole||1===t.userRole)&&n.organization),s.xp6(2),s.Q6J("ngIf",n.enabled),s.xp6(1),s.Q6J("ngIf",!n.enabled),s.xp6(3),s.hij(" ",n.view_count," Views ")}}function C(n,e){1&n&&(s.TgZ(0,"ion-item"),s.TgZ(1,"ion-label"),s._uU(2,"No results"),s.qZA(),s.qZA())}const _=function(){return["/program-create"]};function w(n,e){if(1&n){const n=s.EpF();s.ynx(0),s.TgZ(1,"ion-header"),s.TgZ(2,"ion-toolbar",1),s.TgZ(3,"ion-buttons",2),s._UZ(4,"ion-menu-button"),s.qZA(),s.TgZ(5,"ion-title"),s._uU(6),s.YNc(7,p,2,0,"ng-container",0),s.qZA(),s.TgZ(8,"ion-buttons",3),s.TgZ(9,"ion-button",4),s._UZ(10,"ion-icon",5),s._uU(11," \xa0 Create "),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(12,"ion-content"),s.TgZ(13,"div",6),s.TgZ(14,"div",7),s.TgZ(15,"ion-item"),s.TgZ(16,"ion-input",8),s.NdJ("ionChange",function(e){return s.CHM(n),s.oxw().onFilter(e)})("ngModelChange",function(e){return s.CHM(n),s.oxw().filterInput=e}),s.qZA(),s.qZA(),s.qZA(),s.YNc(17,d,9,4,"div",9),s.TgZ(18,"div",10),s.YNc(19,Z,10,8,"ion-item",11),s.YNc(20,C,3,0,"ion-item",0),s.qZA(),s.qZA(),s.qZA(),s.BQk()}if(2&n){const n=s.oxw();s.xp6(6),s.hij("",null==n.programs?null:n.programs.length," Program"),s.xp6(1),s.Q6J("ngIf",(null==n.programs?null:n.programs.length)>1),s.xp6(2),s.Q6J("routerLink",s.DdM(7,_)),s.xp6(7),s.Q6J("ngModel",n.filterInput),s.xp6(1),s.Q6J("ngIf",n.availableOrganizations$),s.xp6(2),s.Q6J("ngForOf",n.programs),s.xp6(1),s.Q6J("ngIf",!n.programs.length)}}const x=[{path:"",component:(()=>{class n{constructor(n,e,t){this.authService=n,this.dashboardService=e,this.appService=t}ngOnInit(){}getOrganizationSelections(n){this.availableOrganizations$=this.dashboardService.getOrganizationsByNeighbourhoodId(n)}onFilter(n){const e=n.target.value;this.programs=this.oriPrograms.filter(n=>{var t;return+this.selectedOrganization?-1!==n.name.toLowerCase().indexOf(e.trim().toLowerCase())&&(null===(t=n.organization)||void 0===t?void 0:t.id)===+this.selectedOrganization:-1!==n.name.toLowerCase().indexOf(e.trim().toLowerCase())})}onSelect(n){const e=n.target.value;this.programs=this.oriPrograms.filter(n=>{var t,o;return this.filterInput&&this.filterInput.trim()?-1!==n.name.toLowerCase().indexOf(this.filterInput.trim().toLowerCase())&&((null===(t=n.organization)||void 0===t?void 0:t.id)===+e||!+e):(null===(o=n.organization)||void 0===o?void 0:o.id)===+e||!+e})}ionViewWillEnter(){if(this.userRole=this.authService.userRole,this.authService.userRole===g.i4.superAdmin&&this.dashboardService.getAllPrograms().subscribe(n=>{this.programs=n,this.oriPrograms=n}),this.authService.userRole===g.i4.organizationAdmin&&this.dashboardService.getProgramsByOrganization(this.authService.userProfile$.getValue().profile.organization.id).subscribe(n=>{this.programs=n,this.oriPrograms=n}),this.authService.userRole===g.i4.neighbourhoodAdmin){const n=this.authService.userProfile$.getValue().profile.neighbourhood.id;this.getOrganizationSelections(n),this.dashboardService.getProgramsByNeighbourhood(n).subscribe(n=>{this.programs=n,this.oriPrograms=n})}}}return n.\u0275fac=function(e){return new(e||n)(s.Y36(g.e8),s.Y36(c.s),s.Y36(l.z))},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-programs"]],decls:1,vars:1,consts:[[4,"ngIf"],["color","light"],["slot","start"],["slot","end"],["fill","solid","expand","block","color","primary",3,"routerLink"],["name","add-outline"],[1,"wrapper"],[1,"content-wrapper","filter"],["clearInput","","placeholder","filter by program name",3,"ngModel","ionChange","ngModelChange"],["class","content-wrapper selection",4,"ngIf"],[1,"content-wrapper"],["button","","lines","full",3,"routerLink",4,"ngFor","ngForOf"],[1,"content-wrapper","selection"],[2,"--padding-start","0"],[2,"display","none"],["placeholder","filter by organization",3,"ngModel","ionChange","ngModelChange"],["value","0"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["button","","lines","full",3,"routerLink"],[1,"ion-text-wrap"],["slot","end",1,"ion-text-wrap","ion-text-right"],["slot","end",4,"ngIf"],["size","large","name","eye","color","primary"],[1,"organization-name"],["size","large","name","checkmark-circle","color","success"],["size","large","name","remove-circle","color","warning"]],template:function(n,e){1&n&&s.YNc(0,w,21,8,"ng-container",0),2&n&&s.Q6J("ngIf",e.programs)},directives:[o.O5,r.Gu,r.sr,r.Sm,r.fG,r.wd,r.YG,r.YI,a.rH,r.gu,r.W2,r.Ie,r.pK,r.j9,i.JJ,i.On,o.sg,r.Q$,r.t9,r.QI,r.n0,r.uN],pipes:[o.Ov],styles:["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{margin:20px 30px;border-radius:15px;box-shadow:0 3px 10px #0003;overflow:hidden;padding:10px 0;width:100%}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper.filter[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper.selection[_ngcontent-%COMP%]{max-width:350px}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]{max-width:100%;width:100%}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:14px}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   ion-note.organization-name[_ngcontent-%COMP%]{font-size:13px}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:5px;width:24px;height:24px}"]}),n})()}];let M=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[a.Bz.forChild(x)],a.Bz]}),n})(),P=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[o.ez,i.u5,r.Pc,M]]}),n})()}}]);