(self.webpackChunkcommunitygta_admin_panel=self.webpackChunkcommunitygta_admin_panel||[]).push([[2493],{2493:(n,e,t)=>{"use strict";t.r(e),t.d(e,{ProgramsPageModule:()=>v});var o=t(8583),i=t(3679),r=t(3083),a=t(131),c=t(2996),g=t(263),s=t(639),l=t(5332),p=t(2186);function u(n,e){1&n&&(s.ynx(0),s._uU(1,"s"),s.BQk())}function d(n,e){if(1&n&&(s.TgZ(0,"ion-select-option",17),s._uU(1),s.qZA()),2&n){const n=e.$implicit;s.Q6J("value",n.id),s.xp6(1),s.Oqu(n.name)}}function h(n,e){if(1&n){const n=s.EpF();s.TgZ(0,"div",11),s.TgZ(1,"ion-item",12),s.TgZ(2,"ion-label",13),s._uU(3,"Select an organization"),s.qZA(),s.TgZ(4,"ion-select",14),s.NdJ("ionChange",function(e){return s.CHM(n),s.oxw(2).onSelect(e)})("ngModelChange",function(e){return s.CHM(n),s.oxw(2).selectedOrganization=e}),s.TgZ(5,"ion-select-option",15),s._uU(6,"None"),s.qZA(),s.YNc(7,d,2,2,"ion-select-option",16),s.qZA(),s.qZA(),s.qZA()}if(2&n){const n=s.oxw(2);s.xp6(4),s.Q6J("ngModel",n.selectedOrganization),s.xp6(3),s.Q6J("ngForOf",n.availableOrganizations)}}function f(n,e){if(1&n&&(s.ynx(0),s.TgZ(1,"ion-note",22),s._uU(2),s.qZA(),s.BQk()),2&n){const n=s.oxw().$implicit;s.xp6(2),s.Oqu(n.organization.name)}}function m(n,e){1&n&&(s.TgZ(0,"ion-note",2),s._UZ(1,"ion-icon",23),s._uU(2," Enabled "),s.qZA())}function O(n,e){1&n&&(s.TgZ(0,"ion-note",2),s._UZ(1,"ion-icon",24),s._uU(2," Disabled "),s.qZA())}const C=function(n){return["/programs",n]};function _(n,e){if(1&n&&(s.TgZ(0,"ion-item",18),s.TgZ(1,"ion-label",19),s._uU(2),s.YNc(3,f,3,1,"ng-container",0),s.qZA(),s.YNc(4,m,3,0,"ion-note",20),s.YNc(5,O,3,0,"ion-note",20),s.TgZ(6,"ion-note",2),s._UZ(7,"ion-icon",21),s._uU(8),s.qZA(),s.qZA()),2&n){const n=e.$implicit,t=s.oxw(2);s.Q6J("routerLink",s.VKq(6,C,n.id)),s.xp6(2),s.hij("",n.name," "),s.xp6(1),s.Q6J("ngIf",1===t.userRole),s.xp6(1),s.Q6J("ngIf",n.enabled),s.xp6(1),s.Q6J("ngIf",!n.enabled),s.xp6(3),s.hij(" ",n.view_count," Views ")}}function w(n,e){1&n&&(s.TgZ(0,"ion-item"),s.TgZ(1,"ion-label"),s._uU(2,"No results"),s.qZA(),s.qZA())}const Z=function(){return["/program-create"]};function x(n,e){if(1&n){const n=s.EpF();s.ynx(0),s.TgZ(1,"ion-header"),s.TgZ(2,"ion-toolbar",1),s.TgZ(3,"ion-title"),s._uU(4),s.YNc(5,u,2,0,"ng-container",0),s.qZA(),s.TgZ(6,"ion-buttons",2),s.TgZ(7,"ion-button",3),s._UZ(8,"ion-icon",4),s._uU(9," \xa0 Create "),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(10,"ion-content"),s.TgZ(11,"div",5),s.TgZ(12,"div",6),s.TgZ(13,"ion-item"),s.TgZ(14,"ion-input",7),s.NdJ("ionChange",function(e){return s.CHM(n),s.oxw().onFilter(e)})("ngModelChange",function(e){return s.CHM(n),s.oxw().filterInput=e}),s.qZA(),s.qZA(),s.qZA(),s.YNc(15,h,8,2,"div",8),s.TgZ(16,"div",9),s.YNc(17,_,9,8,"ion-item",10),s.YNc(18,w,3,0,"ion-item",0),s.qZA(),s.qZA(),s.qZA(),s.BQk()}if(2&n){const n=s.oxw();s.xp6(4),s.hij("",null==n.programs?null:n.programs.length," Program"),s.xp6(1),s.Q6J("ngIf",(null==n.programs?null:n.programs.length)>1),s.xp6(2),s.Q6J("routerLink",s.DdM(7,Z)),s.xp6(7),s.Q6J("ngModel",n.filterInput),s.xp6(1),s.Q6J("ngIf",n.availableOrganizations),s.xp6(2),s.Q6J("ngForOf",n.programs),s.xp6(1),s.Q6J("ngIf",!n.programs.length)}}const M=[{path:"",component:(()=>{class n{constructor(n,e,t){this.authService=n,this.dashboardService=e,this.appService=t}ngOnInit(){}getOrganizationSelections(n){this.availableOrganizations=this.appService.appData.Organization.filter(e=>e.neighbourhood===+n)}onFilter(n){const e=n.target.value;this.programs=this.oriPrograms.filter(n=>{var t;return+this.selectedOrganization?-1!==n.name.toLowerCase().indexOf(e.trim().toLowerCase())&&(null===(t=n.organization)||void 0===t?void 0:t.id)===+this.selectedOrganization:-1!==n.name.toLowerCase().indexOf(e.trim().toLowerCase())})}onSelect(n){const e=n.target.value;this.programs=this.oriPrograms.filter(n=>{var t,o;return this.filterInput&&this.filterInput.trim()?-1!==n.name.toLowerCase().indexOf(this.filterInput.trim().toLowerCase())&&((null===(t=n.organization)||void 0===t?void 0:t.id)===+e||!+e):(null===(o=n.organization)||void 0===o?void 0:o.id)===+e||!+e})}ionViewWillEnter(){if(this.userRole=this.authService.userRole,this.authService.userRole===g.i4.organizationAdmin&&this.dashboardService.getProgramsByOrganization(this.authService.userProfile$.getValue().profile.organization.id).pipe((0,c.j)("results")).subscribe(n=>{this.programs=n,this.oriPrograms=n}),this.authService.userRole===g.i4.neighbourhoodAdmin){const n=this.authService.userProfile$.getValue().profile.neighbourhood.id;this.getOrganizationSelections(n),this.dashboardService.getProgramsByNeighbourhood(n).pipe((0,c.j)("results")).subscribe(n=>{this.programs=n,this.oriPrograms=n})}}}return n.\u0275fac=function(e){return new(e||n)(s.Y36(g.e8),s.Y36(l.s),s.Y36(p.z))},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-programs"]],decls:1,vars:1,consts:[[4,"ngIf"],["color","light"],["slot","end"],["fill","solid","expand","block","color","primary",3,"routerLink"],["name","add-outline"],[1,"wrapper"],[1,"content-wrapper","filter"],["clearInput","","placeholder","filter by program name",3,"ngModel","ionChange","ngModelChange"],["class","content-wrapper selection",4,"ngIf"],[1,"content-wrapper"],["button","","lines","full",3,"routerLink",4,"ngFor","ngForOf"],[1,"content-wrapper","selection"],[2,"--padding-start","0"],[2,"display","none"],["placeholder","filter by organization",3,"ngModel","ionChange","ngModelChange"],["value","0"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["button","","lines","full",3,"routerLink"],[1,"ion-text-wrap"],["slot","end",4,"ngIf"],["size","large","name","eye","color","primary"],[1,"organization-name"],["size","large","name","checkmark-circle","color","success"],["size","large","name","remove-circle","color","warning"]],template:function(n,e){1&n&&s.YNc(0,x,19,8,"ng-container",0),2&n&&s.Q6J("ngIf",e.programs)},directives:[o.O5,r.Gu,r.sr,r.wd,r.Sm,r.YG,r.YI,a.rH,r.gu,r.W2,r.Ie,r.pK,r.j9,i.JJ,i.On,o.sg,r.Q$,r.t9,r.QI,r.n0,r.uN],styles:["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{margin:20px 30px;border-radius:15px;box-shadow:0 3px 10px #0003;overflow:hidden;padding:10px 0;width:100%}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper.filter[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper.selection[_ngcontent-%COMP%]{max-width:350px}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]{max-width:100%;width:100%}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:14px}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   ion-note.organization-name[_ngcontent-%COMP%]{font-size:13px}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:5px;width:24px;height:24px}"]}),n})()}];let P=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[a.Bz.forChild(M)],a.Bz]}),n})(),v=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[o.ez,i.u5,r.Pc,P]]}),n})()}}]);