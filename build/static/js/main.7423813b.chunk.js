(this["webpackJsonpmk-contact-form"]=this["webpackJsonpmk-contact-form"]||[]).push([[0],{206:function(e,t,a){},207:function(e,t,a){},313:function(e,t){},358:function(e,t,a){var n={"./amplify-amazon-button_5.entry.js":[362,16],"./amplify-auth-container.entry.js":[363,17],"./amplify-auth-fields_9.entry.js":[364,18],"./amplify-authenticator.entry.js":[365,5],"./amplify-button_3.entry.js":[366,19],"./amplify-chatbot.entry.js":[367,4],"./amplify-checkbox.entry.js":[368,20],"./amplify-confirm-sign-in_7.entry.js":[369,6],"./amplify-container.entry.js":[370,21],"./amplify-federated-buttons_2.entry.js":[371,22],"./amplify-federated-sign-in.entry.js":[372,23],"./amplify-form-field_4.entry.js":[373,24],"./amplify-greetings.entry.js":[374,25],"./amplify-icon-button.entry.js":[375,26],"./amplify-icon.entry.js":[376,7],"./amplify-link.entry.js":[377,27],"./amplify-nav_2.entry.js":[378,28],"./amplify-photo-picker.entry.js":[379,29],"./amplify-picker.entry.js":[380,30],"./amplify-radio-button_3.entry.js":[381,8],"./amplify-s3-album.entry.js":[382,9],"./amplify-s3-image-picker.entry.js":[383,10],"./amplify-s3-image.entry.js":[384,11],"./amplify-s3-text-picker.entry.js":[385,12],"./amplify-s3-text.entry.js":[386,13],"./amplify-select-mfa-type.entry.js":[387,31],"./amplify-sign-in-button.entry.js":[388,14],"./amplify-tooltip.entry.js":[389,32]};function i(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],i=t[0];return a.e(t[1]).then((function(){return a(i)}))}i.keys=function(){return Object.keys(n)},i.id=358,e.exports=i},359:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(18),s=a.n(r),o=(a(206),a(207),a(181)),l={aws_project_region:"us-west-2",aws_cognito_identity_pool_id:"us-west-2:c947bdb2-1da3-4c38-a2aa-0f72ef84379b",aws_cognito_region:"us-west-2",aws_user_pools_id:"us-west-2_FDxQ6DinW",aws_user_pools_web_client_id:"695tgnqsgn50b6qur499jnu39d",oauth:{},aws_cognito_login_mechanisms:["EMAIL"],aws_cognito_signup_attributes:["EMAIL"],aws_cognito_mfa_configuration:"OFF",aws_cognito_mfa_types:["SMS"],aws_cognito_password_protection_settings:{passwordPolicyMinLength:8,passwordPolicyCharacters:[]},aws_content_delivery_bucket:"amplify-mkcontactform-dev-93839-deployment-dev",aws_content_delivery_bucket_region:"us-west-2",aws_content_delivery_url:"http://amplify-mkcontactform-dev-93839-deployment-dev.s3-website-us-west-2.amazonaws.com"},m=a(453),c=a(455),d=a(451),u=a(444),p=a(448),j=a(449),h=a(454),y=a(27),b=a(51),f=a(7),x=function(){var e={marginTop:10,width:"140px",height:"50px",background:"teal",color:"white",fontSize:"18px",fontWeight:"bold"},t=b.b().shape({firstName:b.c().required("Required"),lastName:b.c().required("Required"),companyName:b.c().required("Required"),phoneNum:b.a().typeError("Enter valid Phone Number").required("Required"),email:b.c().email("Enter valid email").required("Required"),message:b.c().required("Required")});return Object(f.jsx)(u.a,{elevation:5,style:{padding:"20px 20px",width:550,margin:"0px auto",borderRadius:20},children:Object(f.jsx)(y.d,{initialValues:{firstName:"",lastName:"",companyName:"",phoneNum:"",email:"",message:""},validationSchema:t,onSubmit:function(e,t){console.log(e,t)},children:function(t){return Object(f.jsxs)(y.c,{id:"contactForm",noValidate:!0,autoComplete:"off",children:[Object(f.jsxs)("div",{style:{maxWidth:500,margin:"10px auto",padding:"10px 30px"},children:[Object(f.jsx)(p.a,{style:{marginTop:"5px",textAlign:"left",fontWeight:"bolder"},gutterBottom:!0,variant:"h3",color:"initial",children:"Contact Us"}),Object(f.jsx)(p.a,{style:{marginBottom:"15px",textAlign:"left"},gutterBottom:!0,variant:"h5",color:"initial",children:"We want to hear from you!"})]}),Object(f.jsxs)(j.a,{container:!0,spacing:1,children:[Object(f.jsxs)(j.a,{xs:12,sm:6,item:!0,children:[Object(f.jsx)(y.b,{as:d.a,style:{borderRadius:"60px"},name:"firstName",type:"text",id:"firstName",label:"First Name",placeholder:"Enter First Name",variant:"outlined",fullWidth:!0,value:t.values.firstName,onChange:t.handleChange,required:!0,helperText:Object(f.jsx)(y.a,{name:"firstName"}),error:t.errors.firstName&&t.touched.firstName}),Object(f.jsx)("br",{})]}),Object(f.jsxs)(j.a,{xs:12,sm:6,item:!0,children:[Object(f.jsx)(y.b,{as:d.a,type:"text",name:"lastName",id:"lastName",label:"Last Name",placeholder:"Enter Last Name",variant:"outlined",fullWidth:!0,value:t.values.lastName,onChange:t.handleChange,helperText:Object(f.jsx)(y.a,{name:"lastName"}),required:!0,error:t.errors.lastName&&t.touched.lastName}),Object(f.jsx)("br",{})]}),Object(f.jsxs)(j.a,{xs:12,sm:12,item:!0,children:[Object(f.jsx)(y.b,{as:d.a,id:"companyName",name:"companyName",label:"Company Name",placeholder:"Enter Company's Name",variant:"outlined",fullWidth:!0,value:t.values.companyName,onChange:t.handleChange,helperText:Object(f.jsx)(y.a,{name:"companyName"}),required:!0,error:t.errors.companyName&&t.touched.companyName}),Object(f.jsx)("br",{})]}),Object(f.jsxs)(j.a,{xs:12,sm:6,item:!0,children:[Object(f.jsx)(y.b,{as:d.a,id:"phoneNum",name:"phoneNum",type:"tel",label:"Phone Number",placeholder:"Enter Phone Number",variant:"outlined",fullWidth:!0,helperText:Object(f.jsx)(y.a,{name:"phoneNum"}),required:!0,error:t.errors.phoneNum&&t.touched.phoneNum}),Object(f.jsx)("br",{})]}),Object(f.jsxs)(j.a,{xs:12,sm:6,item:!0,children:[Object(f.jsx)(y.b,{as:d.a,name:"email",id:"email",type:"email",label:"Email",placeholder:"Enter Email",variant:"outlined",fullWidth:!0,value:t.values.email,onChange:t.handleChange,helperText:Object(f.jsx)(y.a,{name:"email"}),error:t.errors.email&&t.touched.email,required:!0}),Object(f.jsx)("br",{})]}),Object(f.jsxs)(j.a,{xs:12,sm:12,item:!0,children:[Object(f.jsx)(y.b,{as:d.a,name:"message",id:"message",type:"text",multiline:!0,rows:4,label:"Message",variant:"outlined",placeholder:"How may we assist you?",fullWidth:!0,value:t.values.message,onChange:t.handleChange,helperText:Object(f.jsx)(y.a,{name:"message"}),error:t.errors.message&&t.touched.message,required:!0}),Object(f.jsx)("br",{})]}),Object(f.jsx)(h.a,{type:"submit",id:"submitBtn",style:e,variant:"contained",children:"Submit"})]})]})}})})};o.default.configure(l);var g=Object(c.a)((function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)("div",{style:{display:"flex",flexWrap:"wrap"},children:[Object(f.jsx)("div",{style:{maxWidth:600,width:100,margin:"auto",padding:"150px 400px"},children:Object(f.jsx)(x,{})}),Object(f.jsx)("div",{style:{maxWidth:50,textAlign:"center",margin:"50px auto",padding:"0px 50px"},children:Object(f.jsx)(m.d,{})})]})})})),_=function(e){e&&e instanceof Function&&a.e(35).then(a.bind(null,469)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),r(e),s(e)}))};s.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(g,{})}),document.getElementById("root")),_()}},[[359,2,3]]]);
//# sourceMappingURL=main.7423813b.chunk.js.map