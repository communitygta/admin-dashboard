(self.webpackChunkcommunitygta_admin_panel=self.webpackChunkcommunitygta_admin_panel||[]).push([[3830],{3830:(n,e,t)=>{"use strict";t.r(e),t.d(e,{ProgramCreatePageModule:()=>b});var o=t(8583),i=t(3679),r=t(3083),a=t(1182),s=t(263),g=t(2340),c=t(639),l=t(5332),d=t(1352),u=t(4382),p=t(9075);function m(n,e){1&n&&(c.TgZ(0,"ion-text",24),c._uU(1,"(required)"),c.qZA())}function h(n,e){1&n&&(c.TgZ(0,"ion-text",24),c._uU(1,"(required) "),c.qZA())}function _(n,e){if(1&n&&(c.TgZ(0,"ion-select-option",25),c._uU(1),c.qZA()),2&n){const n=e.$implicit;c.Q6J("value",n.id),c.xp6(1),c.Oqu(n.name)}}function f(n,e){if(1&n){const n=c.EpF();c.TgZ(0,"ion-button",26),c.NdJ("click",function(){const e=c.CHM(n).$implicit;return c.oxw().toggleLanguage(e)}),c._uU(1),c.qZA()}if(2&n){const n=e.$implicit;c.ekj("selected",n.selected),c.xp6(1),c.Oqu(n.name)}}function O(n,e){if(1&n){const n=c.EpF();c.TgZ(0,"ion-button",26),c.NdJ("click",function(){const e=c.CHM(n).$implicit;return c.oxw().toggleFocus(e)}),c._uU(1),c.qZA()}if(2&n){const n=e.$implicit;c.ekj("selected",n.selected),c.xp6(1),c.Oqu(n.name)}}function C(n,e){if(1&n){const n=c.EpF();c.TgZ(0,"ion-button",26),c.NdJ("click",function(){const e=c.CHM(n).$implicit;return c.oxw().togglePopulationGroup(e)}),c._uU(1),c.qZA()}if(2&n){const n=e.$implicit;c.ekj("selected",n.selected),c.xp6(1),c.Oqu(n.name)}}const P=[{path:"",component:(()=>{class n{constructor(n,e,t,o,i,r,a){this.dashboardService=n,this.fb=e,this.inAppMessageService=t,this.appService=o,this.sanitizer=i,this.authService=r,this.navController=a,this.logoDomain=g.N.appUrl,this.defaultNewImageUrl="assets/images/add-image.svg",this.newImageUrl=this.sanitizer.bypassSecurityTrustResourceUrl(this.defaultNewImageUrl),this.initForm()}ngOnInit(){this.dashboardService.getOptions({languages:"true",populationGroups:"true",focuses:"true"}).subscribe(n=>{this.languages=n.languages,this.focuses=n.focuses,this.populationGroups=n.populationGroups}),this.authService.userRole===s.i4.organizationAdmin&&(this.organizationId=this.authService.userProfile$.getValue().profile.organization.id),this.authService.userRole===s.i4.neighbourhoodAdmin&&this.getOrganizationSelections(this.authService.userProfile$.getValue().profile.neighbourhood.id),this.authService.userRole===s.i4.superAdmin&&(this.availableOrganizations$=this.dashboardService.getAllOrganizations()),this.initForm(),this.initAddVideoLinkForm(),this.initAddImageForm()}getOrganizationSelections(n){this.availableOrganizations$=this.dashboardService.getOrganizationsByNeighbourhoodId(n)}initForm(){this.form=this.fb.group({description:[null],eligibility:[null],enabled:[!1],fee:[null],focuses:[null],frequency:[null],how_to_apply:[null],id:[null],images:[null],languages:[null],location:[null],name:[null,[i.kI.required]],neighbourhoods:[null],organization:[this.organizationId,[i.kI.required]],population_groups:[null],staff_contact:[null],staff_name:[null],video_links:[null],view_count:[0]})}initAddVideoLinkForm(){this.addVideoLinkForm=this.fb.group({name:[null,[i.kI.required]],link:[null,[i.kI.required]],program:[this.form.get("id").value]})}initAddImageForm(){this.addImageForm=this.fb.group({name:[null,[i.kI.required]],image:[null,[i.kI.required]],program:[this.form.get("id").value]})}removeVideoLink(n,e,t){this.dashboardService.removeProgramVideoLink(n).subscribe(n=>{e.video_links.splice(t,1)})}addVideoLink(n){this.addVideoLinkForm.invalid||this.dashboardService.addProgramVideoLink(this.addVideoLinkForm.value).subscribe(e=>{this.addVideoLinkForm.reset(),this.inAppMessageService.simpleToast("A new video link has been added.","bottom"),n.video_links.push(e)})}toggleLanguage(n){this.form.markAsDirty(),n.selected=!n.selected}togglePopulationGroup(n){this.form.markAsDirty(),n.selected=!n.selected}toggleFocus(n){this.form.markAsDirty(),n.selected=!n.selected}toggleNeighbourhood(n){this.form.markAsDirty(),n.selected=!n.selected}newImageOnChange(n){if(n.target.files.length>0){const e=n.target.files[0];this.newImageUrl=this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(e)),this.addImageForm.get("image").setValue(e)}}addNewImage(n){this.addImageForm.invalid||this.dashboardService.addProgramImage(this.addImageForm.value).subscribe(e=>{this.addImageForm.reset(),this.inAppMessageService.simpleToast("A new image has been added.","bottom");const t=Object.assign({},e);t.image=this.logoDomain+e.image,n.images.push(t),this.newImageUrl=this.defaultNewImageUrl})}removeImage(n,e,t){this.dashboardService.removeProgramImage(n).subscribe(n=>{e.images.splice(t,1),this.inAppMessageService.simpleToast("Removed.","bottom")})}create(){if(this.form.invalid)return this.form.markAllAsTouched(),void this.inAppMessageService.simpleToast("Please fill in all required fields.","bottom");const n=Object.assign({},this.form.value);n.neighbourhoods=[];const e=this.languages.filter(n=>n.selected),t=this.populationGroups.filter(n=>n.selected),o=this.focuses.filter(n=>n.selected);n.languages=e,n.population_groups=t,n.focuses=o,this.dashboardService.createProgram(n).subscribe(n=>{this.inAppMessageService.simpleAlert("Message","Program has been created.","OK",!1,()=>this.navController.navigateForward(`program-edit/${n.id}`))})}}return n.\u0275fac=function(e){return new(e||n)(c.Y36(l.s),c.Y36(i.qu),c.Y36(d.r),c.Y36(u.z),c.Y36(p.H7),c.Y36(s.e8),c.Y36(r.SH))},n.\u0275cmp=c.Xpm({type:n,selectors:[["app-program-create"]],decls:76,vars:11,consts:[["slot","start"],["text","",3,"defaultHref"],["slot","end"],["fill","solid","expand","block","color","primary",3,"disabled","click"],["name","save-outline"],[1,"content-wrapper"],[3,"formGroup"],["position","stacked"],["color","danger",4,"ngIf"],["formControlName","name"],["formControlName","description","autoGrow",""],["formControlName","location"],["formControlName","eligibility"],["formControlName","fee"],["formControlName","frequency"],["formControlName","how_to_apply"],["lines","full"],["placeholder","Select","formControlName","organization"],[3,"value",4,"ngFor","ngForOf"],[1,"languages-selection"],["fill","outline",3,"selected","click",4,"ngFor","ngForOf"],["formControlName","staff_name"],["formControlName","staff_contact"],["slot","end","formControlName","enabled"],["color","danger"],[3,"value"],["fill","outline",3,"click"]],template:function(n,e){1&n&&(c.TgZ(0,"ion-header"),c.TgZ(1,"ion-toolbar"),c.TgZ(2,"ion-buttons",0),c._UZ(3,"ion-back-button",1),c.qZA(),c.TgZ(4,"ion-title"),c._uU(5,"Create Program"),c.qZA(),c.TgZ(6,"ion-buttons",2),c.TgZ(7,"ion-button",3),c.NdJ("click",function(){return e.create()}),c._UZ(8,"ion-icon",4),c._uU(9," \xa0 Create "),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(10,"ion-content"),c.TgZ(11,"div",5),c.TgZ(12,"form",6),c.TgZ(13,"ion-item"),c.TgZ(14,"ion-label",7),c._uU(15,"Name "),c.YNc(16,m,2,0,"ion-text",8),c.qZA(),c._UZ(17,"ion-input",9),c.qZA(),c.TgZ(18,"ion-item"),c.TgZ(19,"ion-label",7),c._uU(20,"Description"),c.qZA(),c._UZ(21,"ion-textarea",10),c.qZA(),c.TgZ(22,"ion-item"),c.TgZ(23,"ion-label",7),c._uU(24,"Location"),c.qZA(),c._UZ(25,"ion-input",11),c.qZA(),c.TgZ(26,"ion-item"),c.TgZ(27,"ion-label",7),c._uU(28,"Eligibility"),c.qZA(),c._UZ(29,"ion-input",12),c.qZA(),c.TgZ(30,"ion-item"),c.TgZ(31,"ion-label",7),c._uU(32,"Fee"),c.qZA(),c._UZ(33,"ion-input",13),c.qZA(),c.TgZ(34,"ion-item"),c.TgZ(35,"ion-label",7),c._uU(36,"Frequency"),c.qZA(),c._UZ(37,"ion-input",14),c.qZA(),c.TgZ(38,"ion-item"),c.TgZ(39,"ion-label",7),c._uU(40,"How To Apply"),c.qZA(),c._UZ(41,"ion-input",15),c.qZA(),c.TgZ(42,"ion-item",16),c.TgZ(43,"ion-label",7),c._uU(44,"Select an organization "),c.YNc(45,h,2,0,"ion-text",8),c.qZA(),c.TgZ(46,"ion-select",17),c.YNc(47,_,2,2,"ion-select-option",18),c.ALo(48,"async"),c.qZA(),c.qZA(),c.TgZ(49,"ion-item",16),c.TgZ(50,"ion-label",7),c._uU(51,"Languages"),c.qZA(),c.TgZ(52,"div",19),c.YNc(53,f,2,3,"ion-button",20),c.qZA(),c.qZA(),c.TgZ(54,"ion-item",16),c.TgZ(55,"ion-label",7),c._uU(56,"Focuses"),c.qZA(),c.TgZ(57,"div",19),c.YNc(58,O,2,3,"ion-button",20),c.qZA(),c.qZA(),c.TgZ(59,"ion-item",16),c.TgZ(60,"ion-label",7),c._uU(61,"Population Groups"),c.qZA(),c.TgZ(62,"div",19),c.YNc(63,C,2,3,"ion-button",20),c.qZA(),c.qZA(),c.TgZ(64,"ion-item"),c.TgZ(65,"ion-label",7),c._uU(66,"Staff Name"),c.qZA(),c._UZ(67,"ion-input",21),c.qZA(),c.TgZ(68,"ion-item"),c.TgZ(69,"ion-label",7),c._uU(70,"Staff Contact"),c.qZA(),c._UZ(71,"ion-input",22),c.qZA(),c.TgZ(72,"ion-item",16),c.TgZ(73,"ion-label"),c._uU(74,"Enabled"),c.qZA(),c._UZ(75,"ion-toggle",23),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&n&&(c.xp6(3),c.Q6J("defaultHref","/programs"),c.xp6(4),c.Q6J("disabled",!e.form.dirty),c.xp6(5),c.Q6J("formGroup",e.form),c.xp6(4),c.Q6J("ngIf",e.form.controls.name.touched&&e.form.controls.name.invalid),c.xp6(29),c.Q6J("ngIf",e.form.controls.organization.touched&&e.form.controls.organization.invalid),c.xp6(2),c.Q6J("ngForOf",c.lcZ(48,9,e.availableOrganizations$)),c.xp6(6),c.Q6J("ngForOf",e.languages),c.xp6(5),c.Q6J("ngForOf",e.focuses),c.xp6(5),c.Q6J("ngForOf",e.populationGroups))},directives:[r.Gu,r.sr,r.Sm,r.oU,r.cs,r.wd,r.YG,r.gu,r.W2,i._Y,i.JL,i.sg,r.Ie,r.Q$,o.O5,r.pK,r.j9,i.JJ,i.u,r.g2,r.t9,r.QI,o.sg,r.ho,r.w,r.yW,r.n0],pipes:[o.Ov],styles:["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{margin:30px;border-radius:15px;box-shadow:0 3px 10px #0003;overflow:hidden;padding:10px 0;position:relative}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{position:relative}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:20px}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]{width:300px}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .languages-selection[_ngcontent-%COMP%]{margin:12px 0 10px}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .languages-selection[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--border-style:dashed;--border-width:1px}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .languages-selection[_ngcontent-%COMP%]   ion-button.selected[_ngcontent-%COMP%]{--border-style:solid;--border-width:1px;--background:var(--ion-color-primary);--color:#fff}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .video-links[_ngcontent-%COMP%]{margin:20px;border:1px solid #ddd;padding:16px;border-radius:10px}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .video-links[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:16px;font-weight:700;color:#444}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .video-links[_ngcontent-%COMP%]   .link-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #ddd;padding-left:16px;font-size:14px}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .video-links[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .video-links[_ngcontent-%COMP%]   .add-video-link[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:14px;margin:5px 0;outline:none;box-shadow:none;border:1px solid #999;border-radius:4px;width:300px;padding-left:6px}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:20px;border:1px solid #ddd;padding:16px;border-radius:10px}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:16px;font-weight:700;color:#444;width:100%}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{width:250px;margin:20px 10px}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .add-image-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;height:150px;align-items:center;justify-content:center;background:#eee;cursor:pointer}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:14px;color:#444;display:flex;justify-content:space-between;min-height:35px;line-height:30px;align-items:stretch}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:14px;outline:none;box-shadow:none;border:1px solid #999;border-radius:4px;padding-left:6px;max-width:100%}"]}),n})()}];let M=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[[a.Bz.forChild(P)],a.Bz]}),n})(),b=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[[o.ez,i.u5,i.UX,r.Pc,M]]}),n})()}}]);