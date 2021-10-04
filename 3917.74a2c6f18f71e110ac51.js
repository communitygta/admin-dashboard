(self.webpackChunkcommunitygta_admin_panel=self.webpackChunkcommunitygta_admin_panel||[]).push([[3917],{3917:(n,e,o)=>{"use strict";o.r(e),o.d(e,{UserProfilePageModule:()=>A});var t=o(8583),i=o(3679),r=o(3083),s=o(1182),a=o(263),l=o(639),c=o(4382),p=o(1352),u=o(5332);function d(n,e){if(1&n&&(l.TgZ(0,"ion-item",3),l.TgZ(1,"ion-label"),l._uU(2,"Managing"),l.qZA(),l.TgZ(3,"ion-note",4),l._uU(4),l.qZA(),l.qZA()),2&n){const n=l.oxw();l.xp6(4),l.Oqu(n.userProfile.managing.name)}}function g(n,e){1&n&&l._UZ(0,"ion-icon",18)}function m(n,e){1&n&&l._UZ(0,"ion-icon",19)}function f(n,e){1&n&&l._UZ(0,"ion-icon",18)}function w(n,e){1&n&&l._UZ(0,"ion-icon",19)}function _(n,e){1&n&&l._UZ(0,"ion-icon",18)}function h(n,e){1&n&&l._UZ(0,"ion-icon",19)}const Z=[{path:"",component:(()=>{class n{constructor(n,e,o,t,i){this.authService=n,this.appService=e,this.inAppMessageService=o,this.fb=t,this.dashboardService=i}ngOnInit(){this.initEditForm(),this.initForm(),this.formatProfile()}get email(){return this.editForm.controls.email}get old_password(){return this.form.controls.old_password}get new_password(){return this.form.controls.new_password}initEditForm(){this.editForm=this.fb.group({email:[null,[i.kI.required,i.kI.email]]})}initForm(){this.form=this.fb.group({old_password:[null,[i.kI.required,i.kI.minLength(8),i.kI.maxLength(16),i.kI.pattern(/^(?=.*[\d])(?=.*[a-zA-Z])[\w]{8,16}$/)]],new_password:[null,[i.kI.required,i.kI.minLength(8),i.kI.maxLength(16),i.kI.pattern(/^(?=.*[\d])(?=.*[a-zA-Z])[\w]{8,16}$/)]]})}formatProfile(){const n=this.authService.userProfile$.getValue();this.userProfile={username:n.user.username,email:n.user.email,firstname:n.user.first_name,lastname:n.user.last_name,role:null,managing:null},this.authService.userRole===a.i4.superAdmin&&(this.userProfile.role="Super User"),this.authService.userRole===a.i4.neighbourhoodAdmin&&(this.userProfile.role="Neighbourhood Administrator",this.userProfile.managing=n.profile.neighbourhood),this.authService.userRole===a.i4.organizationAdmin&&(this.userProfile.role="Organization Administrator",this.userProfile.managing=n.profile.organization),this.editForm.controls.email.patchValue(this.userProfile.email)}updateEmail(){this.editForm.invalid?this.inAppMessageService.simpleToast("Please input a valid email address.","middle"):this.authService.updateUserEmailByOwner(this.editForm.value).subscribe(()=>{this.inAppMessageService.simpleToast("Email updated.","bottom")})}updatePassword(){this.form.invalid||this.authService.updatePassword(this.form.value).subscribe(()=>{this.form.reset(),this.inAppMessageService.simpleAlert(null,"Your password has been updated.")})}}return n.\u0275fac=function(e){return new(e||n)(l.Y36(a.e8),l.Y36(c.z),l.Y36(p.r),l.Y36(i.qu),l.Y36(u.s))},n.\u0275cmp=l.Xpm({type:n,selectors:[["app-user-profile"]],decls:57,vars:12,consts:[["slot","start"],[1,"wrapper"],[1,"content-wrapper",3,"formGroup"],["lines","none"],["slot","end"],["lines","none",4,"ngIf"],["name","checkmark-circle","color","success",4,"ngIf"],["name","alert-circle","color","warning",4,"ngIf"],["formControlName","email"],["size","small",2,"margin","10px 16px 10px 0","float","right",3,"disabled","click"],[1,"content-wrapper","update-password",3,"formGroup","ngSubmit"],["lines","full"],["formControlName","old_password","type","password","required","","readonly","","autocorrect","off","spellcheck","false","autocomplete","off",3,"ionFocus"],["oldPassword",""],["formControlName","new_password","type","password","required","","readonly","","autocorrect","off","spellcheck","false","autocomplete","off",3,"ionFocus"],["newPassword",""],["type","submit","mode","md","size","small",2,"margin","10px 16px 10px 0","float","right",3,"click"],[1,"content-wrapper","password-rules"],["name","checkmark-circle","color","success"],["name","alert-circle","color","warning"]],template:function(n,e){if(1&n){const n=l.EpF();l.TgZ(0,"ion-header"),l.TgZ(1,"ion-toolbar"),l.TgZ(2,"ion-buttons",0),l._UZ(3,"ion-menu-button"),l.qZA(),l.TgZ(4,"ion-title"),l._uU(5,"My Profile"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(6,"ion-content"),l.TgZ(7,"div",1),l.TgZ(8,"form",2),l.TgZ(9,"ion-item",3),l.TgZ(10,"ion-label"),l._uU(11,"User Name"),l.qZA(),l.TgZ(12,"ion-note",4),l._uU(13),l.qZA(),l.qZA(),l.TgZ(14,"ion-item",3),l.TgZ(15,"ion-label"),l._uU(16,"Role"),l.qZA(),l.TgZ(17,"ion-note",4),l._uU(18),l.qZA(),l.qZA(),l.YNc(19,d,5,1,"ion-item",5),l.TgZ(20,"ion-item",3),l.TgZ(21,"ion-label"),l._uU(22,"Email "),l.YNc(23,g,1,0,"ion-icon",6),l.YNc(24,m,1,0,"ion-icon",7),l.qZA(),l._UZ(25,"ion-input",8),l.qZA(),l.TgZ(26,"ion-button",9),l.NdJ("click",function(){return e.updateEmail()}),l._uU(27,"update"),l.qZA(),l.qZA(),l.TgZ(28,"form",10),l.NdJ("ngSubmit",function(){return e.updatePassword()}),l.TgZ(29,"ion-item",11),l.TgZ(30,"ion-label"),l._uU(31,"Old Password "),l.YNc(32,f,1,0,"ion-icon",6),l.YNc(33,w,1,0,"ion-icon",7),l.qZA(),l.TgZ(34,"ion-input",12,13),l.NdJ("ionFocus",function(){return l.CHM(n),l.MAs(35).readonly=!1}),l.qZA(),l.qZA(),l.TgZ(36,"ion-item",11),l.TgZ(37,"ion-label"),l._uU(38,"New Password "),l.YNc(39,_,1,0,"ion-icon",6),l.YNc(40,h,1,0,"ion-icon",7),l.qZA(),l.TgZ(41,"ion-input",14,15),l.NdJ("ionFocus",function(){return l.CHM(n),l.MAs(42).readonly=!1}),l.qZA(),l.qZA(),l.TgZ(43,"ion-button",16),l.NdJ("click",function(){return e.updatePassword()}),l._uU(44,"Update password"),l.qZA(),l.qZA(),l.TgZ(45,"div",17),l.TgZ(46,"p"),l._uU(47,"Password rules:"),l.qZA(),l.TgZ(48,"ul"),l.TgZ(49,"li"),l._uU(50,"Password must contain 8 to 16 characters"),l.qZA(),l.TgZ(51,"li"),l._uU(52,"Password must contain at least one number and one letter"),l.qZA(),l.TgZ(53,"li"),l._uU(54,"Password must not contain a special character"),l.qZA(),l.TgZ(55,"li"),l._uU(56,"Password must not be a commonly used password"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()}2&n&&(l.xp6(8),l.Q6J("formGroup",e.editForm),l.xp6(5),l.Oqu(e.userProfile.username),l.xp6(5),l.Oqu(e.userProfile.role),l.xp6(1),l.Q6J("ngIf",e.userProfile.managing),l.xp6(4),l.Q6J("ngIf",e.email.dirty&&e.email.valid),l.xp6(1),l.Q6J("ngIf",e.email.dirty&&e.email.invalid),l.xp6(2),l.Q6J("disabled",!e.email.dirty),l.xp6(2),l.Q6J("formGroup",e.form),l.xp6(4),l.Q6J("ngIf",e.old_password.dirty&&e.old_password.valid),l.xp6(1),l.Q6J("ngIf",e.old_password.dirty&&e.old_password.invalid),l.xp6(6),l.Q6J("ngIf",e.new_password.dirty&&e.new_password.valid),l.xp6(1),l.Q6J("ngIf",e.new_password.dirty&&e.new_password.invalid))},directives:[r.Gu,r.sr,r.Sm,r.fG,r.wd,r.W2,i._Y,i.JL,i.sg,r.Ie,r.Q$,r.uN,t.O5,r.pK,r.j9,i.JJ,i.u,r.YG,i.Q7,r.gu],styles:["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{display:flex;align-items:self-start;flex-wrap:wrap}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{margin:30px;border-radius:15px;box-shadow:0 3px 10px #0003;overflow:hidden;padding:10px 0;position:relative;width:100%;max-width:380px}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper.password-rules[_ngcontent-%COMP%]{padding-left:16px;padding-right:16px}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper.password-rules[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;font-weight:700;color:#444}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper.password-rules[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{font-size:13px;padding-left:20px;color:#707070}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:14px;color:#444}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{font-size:13px;color:#707070}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{text-align:right}"]}),n})()}];let P=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=l.oAB({type:n}),n.\u0275inj=l.cJS({imports:[[s.Bz.forChild(Z)],s.Bz]}),n})(),A=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=l.oAB({type:n}),n.\u0275inj=l.cJS({imports:[[t.ez,i.u5,i.UX,r.Pc,P]]}),n})()}}]);