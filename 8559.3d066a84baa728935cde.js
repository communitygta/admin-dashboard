(self.webpackChunkcommunitygta_admin_panel=self.webpackChunkcommunitygta_admin_panel||[]).push([[8559],{8559:(n,e,t)=>{"use strict";t.r(e),t.d(e,{FocusesPageModule:()=>h});var o=t(8583),i=t(3679),c=t(3083),s=t(1182),r=t(4762),a=t(639),p=t(5332),l=t(1352);function g(n,e){if(1&n){const n=a.EpF();a.TgZ(0,"ion-chip",10),a.TgZ(1,"ion-label"),a._uU(2),a.qZA(),a.TgZ(3,"ion-icon",11),a.NdJ("click",function(){const e=a.CHM(n).$implicit;return a.oxw().delete(e)}),a.qZA(),a.qZA()}if(2&n){const n=e.$implicit;a.xp6(2),a.Oqu(n.name)}}const u=[{path:"",component:(()=>{class n{constructor(n,e,t){this.dashboardService=n,this.inAppMessageService=e,this.alertController=t,this.focuses$=this.dashboardService.getAllFocuses()}ngOnInit(){}create(){this.newFocusName?this.dashboardService.createFocus({name:this.newFocusName}).subscribe(n=>{this.newFocusName=null,this.focuses$=this.dashboardService.getAllFocuses()}):this.inAppMessageService.simpleToast("Please input a new focus name","top")}delete(n){return(0,r.mG)(this,void 0,void 0,function*(){(yield this.alertController.create({header:"Hint",message:"Are you sure to delete this focus?",buttons:[{role:"cancel",handler:()=>{},text:"Cancel"},{text:"Yes, delete",cssClass:"danger",handler:()=>{this.dashboardService.deleteFocus(n).subscribe(n=>{this.inAppMessageService.simpleToast("The focus has been deleted","bottom"),this.focuses$=this.dashboardService.getAllFocuses()})}}]})).present()})}}return n.\u0275fac=function(e){return new(e||n)(a.Y36(p.s),a.Y36(l.r),a.Y36(c.Br))},n.\u0275cmp=a.Xpm({type:n,selectors:[["app-focuses"]],decls:17,vars:4,consts:[["slot","start"],[1,"wrapper"],[1,"content-wrapper",2,"padding","0","width","350px"],["lines","none"],["title","input a name for the new focus","slot","start","placeholder","new focus name",3,"ngModel","ngModelChange"],["title","create a new focus","color","primary","slot","end","fill","clear","size","large",1,"icon-only",3,"click"],["name","add-outline"],[1,"content-wrapper"],[1,"list"],["color","primary","outline","true",4,"ngFor","ngForOf"],["color","primary","outline","true"],["name","close",3,"click"]],template:function(n,e){1&n&&(a.TgZ(0,"ion-header"),a.TgZ(1,"ion-toolbar"),a.TgZ(2,"ion-buttons",0),a._UZ(3,"ion-menu-button"),a.qZA(),a.TgZ(4,"ion-title"),a._uU(5,"Manage Focuses"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(6,"ion-content"),a.TgZ(7,"div",1),a.TgZ(8,"div",2),a.TgZ(9,"ion-item",3),a.TgZ(10,"ion-input",4),a.NdJ("ngModelChange",function(n){return e.newFocusName=n}),a.qZA(),a.TgZ(11,"ion-button",5),a.NdJ("click",function(){return e.create()}),a._UZ(12,"ion-icon",6),a.qZA(),a.qZA(),a.qZA(),a.TgZ(13,"div",7),a.TgZ(14,"div",8),a.YNc(15,g,4,1,"ion-chip",9),a.ALo(16,"async"),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&n&&(a.xp6(10),a.Q6J("ngModel",e.newFocusName),a.xp6(5),a.Q6J("ngForOf",a.lcZ(16,2,e.focuses$)))},directives:[c.Gu,c.sr,c.Sm,c.fG,c.wd,c.W2,c.Ie,c.pK,c.j9,i.JJ,i.On,c.YG,c.gu,o.sg,c.hM,c.Q$],pipes:[o.Ov],styles:["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{margin:20px 30px;border-radius:15px;box-shadow:0 3px 10px #0003;overflow:hidden;padding:10px 0;width:100%}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--inner-padding-end:0}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{margin-right:0;flex:auto;width:auto}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-left:0}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}"]}),n})()}];let d=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[s.Bz.forChild(u)],s.Bz]}),n})(),h=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[o.ez,i.u5,c.Pc,d]]}),n})()}}]);