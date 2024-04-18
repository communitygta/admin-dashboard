(self.webpackChunkcommunitygta_admin_panel=self.webpackChunkcommunitygta_admin_panel||[]).push([[1146],{1146:(n,t,e)=>{"use strict";e.r(t),e.d(t,{PopulationGroupsPageModule:()=>h});var o=e(8583),i=e(3679),r=e(3083),p=e(1182),a=e(4762),c=e(639),s=e(5332),l=e(1352);function u(n,t){if(1&n){const n=c.EpF();c.TgZ(0,"ion-chip",10),c.TgZ(1,"ion-label"),c._uU(2),c.qZA(),c.TgZ(3,"ion-icon",11),c.NdJ("click",function(){const t=c.CHM(n).$implicit;return c.oxw().delete(t)}),c.qZA(),c.qZA()}if(2&n){const n=t.$implicit;c.xp6(2),c.Oqu(n.name)}}const g=[{path:"",component:(()=>{class n{constructor(n,t,e){this.dashboardService=n,this.inAppMessageService=t,this.alertController=e,this.populationGroups$=this.dashboardService.getAllPopulationGroups()}ngOnInit(){}create(){this.newPopulationGroupName?this.dashboardService.createPopulationGroup({name:this.newPopulationGroupName}).subscribe(n=>{this.newPopulationGroupName=null,this.populationGroups$=this.dashboardService.getAllPopulationGroups()}):this.inAppMessageService.simpleToast("Please input a new population group name","top")}delete(n){return(0,a.mG)(this,void 0,void 0,function*(){(yield this.alertController.create({header:"Hint",message:"Are you sure to delete this population group?",buttons:[{role:"cancel",handler:()=>{},text:"Cancel"},{text:"Yes, delete",cssClass:"danger",handler:()=>{this.dashboardService.deletePopulationGroup(n).subscribe(n=>{this.inAppMessageService.simpleToast("The population group has been deleted","bottom"),this.populationGroups$=this.dashboardService.getAllPopulationGroups()})}}]})).present()})}}return n.\u0275fac=function(t){return new(t||n)(c.Y36(s.s),c.Y36(l.r),c.Y36(r.Br))},n.\u0275cmp=c.Xpm({type:n,selectors:[["app-population-groups"]],decls:17,vars:4,consts:[["slot","start"],[1,"wrapper"],[1,"content-wrapper",2,"padding","0","width","350px"],["lines","none"],["title","input a name for the new population group","slot","start","placeholder","new population group name",3,"ngModel","ngModelChange"],["title","create a new population group","color","primary","slot","end","fill","clear","size","large",1,"icon-only",3,"click"],["name","add-outline"],[1,"content-wrapper"],[1,"list"],["color","primary","outline","true",4,"ngFor","ngForOf"],["color","primary","outline","true"],["name","close",3,"click"]],template:function(n,t){1&n&&(c.TgZ(0,"ion-header"),c.TgZ(1,"ion-toolbar"),c.TgZ(2,"ion-buttons",0),c._UZ(3,"ion-menu-button"),c.qZA(),c.TgZ(4,"ion-title"),c._uU(5,"Manage Population Groups"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(6,"ion-content"),c.TgZ(7,"div",1),c.TgZ(8,"div",2),c.TgZ(9,"ion-item",3),c.TgZ(10,"ion-input",4),c.NdJ("ngModelChange",function(n){return t.newPopulationGroupName=n}),c.qZA(),c.TgZ(11,"ion-button",5),c.NdJ("click",function(){return t.create()}),c._UZ(12,"ion-icon",6),c.qZA(),c.qZA(),c.qZA(),c.TgZ(13,"div",7),c.TgZ(14,"div",8),c.YNc(15,u,4,1,"ion-chip",9),c.ALo(16,"async"),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&n&&(c.xp6(10),c.Q6J("ngModel",t.newPopulationGroupName),c.xp6(5),c.Q6J("ngForOf",c.lcZ(16,2,t.populationGroups$)))},directives:[r.Gu,r.sr,r.Sm,r.fG,r.wd,r.W2,r.Ie,r.pK,r.j9,i.JJ,i.On,r.YG,r.gu,o.sg,r.hM,r.Q$],pipes:[o.Ov],styles:["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{margin:20px 30px;border-radius:15px;box-shadow:0 3px 10px #0003;overflow:hidden;padding:10px 0;width:100%}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--inner-padding-end:0}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{margin-right:0;flex:auto;width:auto}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-left:0}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}"]}),n})()}];let d=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[[p.Bz.forChild(g)],p.Bz]}),n})(),h=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[[o.ez,i.u5,r.Pc,d]]}),n})()}}]);