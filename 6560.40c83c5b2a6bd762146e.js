(self.webpackChunkcommunitygta_admin_panel=self.webpackChunkcommunitygta_admin_panel||[]).push([[6560],{6560:(n,t,e)=>{"use strict";e.r(t),e.d(t,{OrganizationCreatePageModule:()=>O});var o=e(8583),i=e(3679),r=e(3083),a=e(131),g=e(263),c=e(2340),l=e(639),s=e(5332),p=e(1352),d=e(2186),_=e(9075);function u(n,t){if(1&n){const n=l.EpF();l.TgZ(0,"ion-button",23),l.NdJ("click",function(){const t=l.CHM(n).$implicit;return l.oxw().toggleLanguage(t)}),l._uU(1),l.qZA()}if(2&n){const n=t.$implicit;l.ekj("selected",n.selected),l.xp6(1),l.Oqu(n.name)}}const C=[{path:"",component:(()=>{class n{constructor(n,t,e,o,i,r,a,g){this.authService=n,this.dashboardService=t,this.activatedRoute=e,this.fb=o,this.inAppMessageService=i,this.appService=r,this.sanitizer=a,this.navController=g,this.logoDomain=c.N.appUrl,this.languages=this.appService.appData.Language,this.defaultNewImageUrl="assets/images/add-image.svg",this.newImageUrl=this.sanitizer.bypassSecurityTrustResourceUrl(this.defaultNewImageUrl)}ngOnInit(){this.authService.userRole===g.i4.neighbourhoodAdmin&&(this.neighbourhoodId=this.authService.userProfile$.getValue().profile.neighbourhood.id),this.initForm()}initForm(){this.form=this.fb.group({address:[null],charity_number:[null],email:[null],founded:[null],full_time_staff:[null],id:[null],images:[null],languages:[null],logo:[null],mission:[null],name:[null],neighbourhood:[this.neighbourhoodId],part_time_staff:[null],phone:[null],postal_code:[null],profile_code:[null],video_links:[null],view_count:[0],website:[null]})}toggleLanguage(n){this.form.markAsDirty(),n.selected=!n.selected}create(){const n=Object.assign({},this.form.value);delete n.logo;const t=this.languages.filter(n=>n.selected);n.languages=t,this.dashboardService.createOrganization(n).subscribe(n=>{this.inAppMessageService.simpleAlert("Message","Organization has been created.","OK",!1,()=>this.navController.navigateRoot(`organization-edit/${n.id}`))})}}return n.\u0275fac=function(t){return new(t||n)(l.Y36(g.e8),l.Y36(s.s),l.Y36(a.gz),l.Y36(i.qu),l.Y36(p.r),l.Y36(d.z),l.Y36(_.H7),l.Y36(r.SH))},n.\u0275cmp=l.Xpm({type:n,selectors:[["app-organization-create"]],decls:66,vars:4,consts:[["slot","start"],["text","",3,"defaultHref"],["slot","end"],["fill","solid","expand","block","color","primary",3,"disabled","click"],["name","save-outline"],[1,"content-wrapper"],[3,"formGroup"],["position","stacked"],["formControlName","name"],["formControlName","mission","autoGrow",""],["formControlName","email"],["formControlName","phone"],["formControlName","website"],["formControlName","address"],["formControlName","postal_code"],["lines","full"],[1,"languages-selection"],["fill","outline",3,"selected","click",4,"ngFor","ngForOf"],["formControlName","charity_number"],["formControlName","profile_code"],["formControlName","full_time_staff"],["formControlName","part_time_staff"],["formControlName","founded"],["fill","outline",3,"click"]],template:function(n,t){1&n&&(l.TgZ(0,"ion-header"),l.TgZ(1,"ion-toolbar"),l.TgZ(2,"ion-buttons",0),l._UZ(3,"ion-back-button",1),l.qZA(),l.TgZ(4,"ion-title"),l._uU(5,"Create Organization"),l.qZA(),l.TgZ(6,"ion-buttons",2),l.TgZ(7,"ion-button",3),l.NdJ("click",function(){return t.create()}),l._UZ(8,"ion-icon",4),l._uU(9," \xa0 Create "),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(10,"ion-content"),l.TgZ(11,"div",5),l.TgZ(12,"form",6),l.TgZ(13,"ion-item"),l.TgZ(14,"ion-label",7),l._uU(15,"Name"),l.qZA(),l._UZ(16,"ion-input",8),l.qZA(),l.TgZ(17,"ion-item"),l.TgZ(18,"ion-label",7),l._uU(19,"Mission"),l.qZA(),l._UZ(20,"ion-textarea",9),l.qZA(),l.TgZ(21,"ion-item"),l.TgZ(22,"ion-label",7),l._uU(23,"Email"),l.qZA(),l._UZ(24,"ion-input",10),l.qZA(),l.TgZ(25,"ion-item"),l.TgZ(26,"ion-label",7),l._uU(27,"Phone"),l.qZA(),l._UZ(28,"ion-input",11),l.qZA(),l.TgZ(29,"ion-item"),l.TgZ(30,"ion-label",7),l._uU(31,"Website"),l.qZA(),l._UZ(32,"ion-input",12),l.qZA(),l.TgZ(33,"ion-item"),l.TgZ(34,"ion-label",7),l._uU(35,"Address"),l.qZA(),l._UZ(36,"ion-input",13),l.qZA(),l.TgZ(37,"ion-item"),l.TgZ(38,"ion-label",7),l._uU(39,"Postal Code"),l.qZA(),l._UZ(40,"ion-input",14),l.qZA(),l.TgZ(41,"ion-item",15),l.TgZ(42,"ion-label",7),l._uU(43,"Languages"),l.qZA(),l.TgZ(44,"div",16),l.YNc(45,u,2,3,"ion-button",17),l.qZA(),l.qZA(),l.TgZ(46,"ion-item"),l.TgZ(47,"ion-label",7),l._uU(48,"Charity Number"),l.qZA(),l._UZ(49,"ion-input",18),l.qZA(),l.TgZ(50,"ion-item"),l.TgZ(51,"ion-label",7),l._uU(52,"Profile Code"),l.qZA(),l._UZ(53,"ion-input",19),l.qZA(),l.TgZ(54,"ion-item"),l.TgZ(55,"ion-label",7),l._uU(56,"Full-time Staff"),l.qZA(),l._UZ(57,"ion-input",20),l.qZA(),l.TgZ(58,"ion-item"),l.TgZ(59,"ion-label",7),l._uU(60,"Part-time Staff"),l.qZA(),l._UZ(61,"ion-input",21),l.qZA(),l.TgZ(62,"ion-item"),l.TgZ(63,"ion-label",7),l._uU(64,"Founded"),l.qZA(),l._UZ(65,"ion-input",22),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&n&&(l.xp6(3),l.Q6J("defaultHref","organizations"),l.xp6(4),l.Q6J("disabled",!t.form.dirty),l.xp6(5),l.Q6J("formGroup",t.form),l.xp6(33),l.Q6J("ngForOf",t.languages))},directives:[r.Gu,r.sr,r.Sm,r.oU,r.cs,r.wd,r.YG,r.gu,r.W2,i._Y,i.JL,i.sg,r.Ie,r.Q$,r.pK,r.j9,i.JJ,i.u,r.g2,o.sg],styles:["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{margin:30px;border-radius:15px;box-shadow:0 3px 10px #0003;overflow:hidden;padding:10px 0}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]{cursor:pointer;position:relative;padding:20px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .edit-overlay[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;justify-content:center;align-items:center;background-color:#ffffff80;display:none;top:0;left:0}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]:hover   .edit-overlay[_ngcontent-%COMP%]{display:flex}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]{width:220px}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .languages-selection[_ngcontent-%COMP%]{margin:12px 0 10px}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .languages-selection[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--border-style:dashed;--border-width:1px}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .languages-selection[_ngcontent-%COMP%]   ion-button.selected[_ngcontent-%COMP%]{--border-style:solid;--border-width:1px;--background:var(--ion-color-primary);--color:#fff}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .video-links[_ngcontent-%COMP%]{margin:20px;border:1px solid #ddd;padding:16px;border-radius:10px}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .video-links[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:16px;font-weight:700;color:#444}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .video-links[_ngcontent-%COMP%]   .link-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #ddd;padding-left:16px;font-size:14px}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .video-links[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .video-links[_ngcontent-%COMP%]   .add-video-link[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:14px;margin:5px 0;outline:none;box-shadow:none;border:1px solid #999;border-radius:4px;width:300px;padding-left:6px}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:20px;border:1px solid #ddd;padding:16px;border-radius:10px}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:16px;font-weight:700;color:#444;width:100%}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{width:250px;margin:20px 10px}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .add-image-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;height:150px;align-items:center;justify-content:center;background:#eee;cursor:pointer}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:14px;color:#444;display:flex;justify-content:space-between;min-height:35px;line-height:30px;align-items:stretch}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:14px;outline:none;box-shadow:none;border:1px solid #999;border-radius:4px;padding-left:6px;max-width:100%}"]}),n})()}];let m=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=l.oAB({type:n}),n.\u0275inj=l.cJS({imports:[[a.Bz.forChild(C)],a.Bz]}),n})(),O=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=l.oAB({type:n}),n.\u0275inj=l.cJS({imports:[[o.ez,i.u5,i.UX,r.Pc,m]]}),n})()}}]);