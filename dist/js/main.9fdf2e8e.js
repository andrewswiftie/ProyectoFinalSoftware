(()=>{"use strict";var e={613:(e,s,a)=>{var r=a(751),t=a(641),n=a(33);const o={id:"app"},i={key:0},l=(0,t.Lk)("h1",{class:"title"},"FerroAR",-1),u={class:"nav-buttons"},d={key:2,class:"user-info"},c=(0,t.Lk)("footer",null,[(0,t.Lk)("p",null,"© 2024 FerroAR")],-1);function p(e,s,a,r,p,m){const g=(0,t.g2)("router-link"),h=(0,t.g2)("router-view");return(0,t.uX)(),(0,t.CE)("div",o,["/ar"!==e.$route.path?((0,t.uX)(),(0,t.CE)("header",i,[(0,t.bF)(g,{to:"/",class:"home-link"},{default:(0,t.k6)((()=>[l])),_:1}),(0,t.Lk)("nav",null,[(0,t.Lk)("div",u,[e.isAuthenticated?(0,t.Q3)("",!0):((0,t.uX)(),(0,t.Wv)(g,{key:0,to:"/login",class:"btn"},{default:(0,t.k6)((()=>[(0,t.eW)("Iniciar Sesión")])),_:1})),e.isAuthenticated?(0,t.Q3)("",!0):((0,t.uX)(),(0,t.Wv)(g,{key:1,to:"/register",class:"btn"},{default:(0,t.k6)((()=>[(0,t.eW)("Registrarse")])),_:1})),e.isAuthenticated?((0,t.uX)(),(0,t.CE)("div",d,[(0,t.Lk)("span",null,"Bienvenido, "+(0,n.v_)(e.currentUser.username),1),(0,t.Lk)("button",{onClick:s[0]||(s[0]=(...e)=>m.logout&&m.logout(...e)),class:"btn"},"Cerrar Sesión"),e.isAdmin?((0,t.uX)(),(0,t.Wv)(g,{key:0,to:"/manage-users",class:"btn"},{default:(0,t.k6)((()=>[(0,t.eW)("Gestionar Usuarios")])),_:1})):(0,t.Q3)("",!0)])):(0,t.Q3)("",!0),(0,t.bF)(g,{to:"/maps",class:"btn"},{default:(0,t.k6)((()=>[(0,t.eW)("Mapas")])),_:1})])])])):(0,t.Q3)("",!0),(0,t.Lk)("main",null,[(0,t.bF)(h)]),c])}var m=a(278);const g={name:"App",computed:{...(0,m.aH)(["user"]),...(0,m.L8)(["isAuthenticated","currentUser","isAdmin"])},methods:{...(0,m.i0)(["logoutUser"]),logout(){this.logoutUser(),this.$router.push("/")}}};var h=a(262);const k=(0,h.A)(g,[["render",p]]),v=k;var b=a(220);const f=a.p+"img/ar2.d068d1a5.jpg",L=a.p+"img/arphoto.4fe525e2.jpg",w={class:"index-page"},y={class:"background-container"},A={class:"center-content"},C=(0,t.Fv)('<h1 class="title" data-v-66b124c4>Explora el Parque con FerroAR</h1><p class="description" data-v-66b124c4> Bienvenido a FerroAR, una experiencia única que combina la rica historia de nuestro parque con la innovadora tecnología de Realidad Aumentada (AR). Descubre lugares emblemáticos y sumérgete en su fascinante pasado a través de animaciones interactivas y narrativas, diseñadas para enriquecer tu visita. </p><img src="'+f+'" alt="AR" class="additional-image2" data-v-66b124c4><p class="description" data-v-66b124c4> La Realidad Aumentada (AR) nos permite superponer información visual sobre el mundo real, brindando una nueva dimensión a la experiencia del visitante. Con FerroAR, puedes apuntar tu dispositivo hacia puntos de interés específicos y desbloquear una variedad de contenido multimedia, desde recreaciones históricas hasta emocionantes relatos de antaño. </p><img src="'+L+'" alt="AR" class="additional-image" data-v-66b124c4><p class="description" data-v-66b124c4> Características de FerroAR: <ul data-v-66b124c4><li data-v-66b124c4>Explora la fusión entre el mundo real y el virtual.</li><li data-v-66b124c4>Descubre la historia enriquecida de nuestro parque a través de animaciones interactivas.</li><li data-v-66b124c4>Vive una experiencia de visita guiada única e inmersiva.</li><li data-v-66b124c4>Disfruta de narrativas envolventes que cobran vida ante tus ojos.</li></ul></p>',6);function U(e,s,a,r,n,o){return(0,t.uX)(),(0,t.CE)("div",w,[(0,t.Lk)("div",y,[(0,t.Lk)("div",A,[C,(0,t.Lk)("button",{class:"ar-button",onClick:s[0]||(s[0]=(...e)=>o.navigateToARPage&&o.navigateToARPage(...e))},"¡Explora con FerroAR!")])])])}const E={methods:{navigateToARPage(){this.$router.push("/ar")}}},x=(0,h.A)(E,[["render",U],["__scopeId","data-v-66b124c4"]]),M=x,_=e=>((0,t.Qi)("data-v-24773614"),e=e(),(0,t.jt)(),e),R={class:"background-container"},I={class:"card"},S=_((()=>(0,t.Lk)("h1",null,"Iniciar sesión",-1))),j=_((()=>(0,t.Lk)("label",{for:"username"},"Nombre de usuario:",-1))),O=_((()=>(0,t.Lk)("br",null,null,-1))),P=_((()=>(0,t.Lk)("br",null,null,-1))),X=_((()=>(0,t.Lk)("label",{for:"password"},"Contraseña:",-1))),T=_((()=>(0,t.Lk)("br",null,null,-1))),W=_((()=>(0,t.Lk)("br",null,null,-1))),q=_((()=>(0,t.Lk)("input",{type:"submit",value:"Iniciar sesión"},null,-1))),F={key:0,class:"result-message success-message"},J={key:1,class:"result-message error-message"};function Q(e,s,a,o,i,l){const u=(0,t.g2)("router-link");return(0,t.uX)(),(0,t.CE)("div",R,[(0,t.Lk)("div",I,[S,(0,t.Lk)("form",{onSubmit:s[2]||(s[2]=(0,r.D$)(((...e)=>l.loginUser&&l.loginUser(...e)),["prevent"]))},[j,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"username","onUpdate:modelValue":s[0]||(s[0]=e=>i.username=e),required:""},null,512),[[r.Jo,i.username]]),O,P,X,(0,t.bo)((0,t.Lk)("input",{type:"password",id:"password","onUpdate:modelValue":s[1]||(s[1]=e=>i.password=e),required:""},null,512),[[r.Jo,i.password]]),T,W,q],32),(0,t.Lk)("p",null,[(0,t.eW)("¿No tienes una cuenta? "),(0,t.bF)(u,{to:"/register"},{default:(0,t.k6)((()=>[(0,t.eW)("Registrarse")])),_:1})]),(0,t.Lk)("p",null,[(0,t.eW)("¿Olvidaste tu contraseña? "),(0,t.bF)(u,{to:"/reset-password"},{default:(0,t.k6)((()=>[(0,t.eW)("Recuperar contraseña")])),_:1})]),i.successMessage?((0,t.uX)(),(0,t.CE)("div",F,(0,n.v_)(i.successMessage),1)):(0,t.Q3)("",!0),i.errorMessage?((0,t.uX)(),(0,t.CE)("div",J,(0,n.v_)(i.errorMessage),1)):(0,t.Q3)("",!0)])])}var V=a(325),N=a.n(V);const $={data(){return{username:"",password:"",successMessage:"",errorMessage:""}},methods:{...(0,m.i0)(["loginUser"]),loginUser(){const e={username:this.username,password:this.password};e.username&&e.password?fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.ok?e.json():e.json().then((e=>{throw new Error(e.error)})))).then((e=>{this.$store.dispatch("loginUser",e.user),N().fire({title:"Éxito",text:"Inicio de sesión exitoso",icon:"success",confirmButtonText:"Ir a la página principal"}).then((e=>{e.isConfirmed&&this.$router.push("/")})),this.username="",this.password=""})).catch((e=>{N().fire({title:"Error",text:e.message,icon:"error",confirmButtonText:"Intentar de nuevo"}),this.errorMessage=e.message})):this.errorMessage="Por favor, complete todos los campos."}}},B=(0,h.A)($,[["render",Q],["__scopeId","data-v-24773614"]]),D=B,z=e=>((0,t.Qi)("data-v-7799b556"),e=e(),(0,t.jt)(),e),G={class:"background-container"},H={class:"card"},K=z((()=>(0,t.Lk)("h1",null,"Registro",-1))),Y=z((()=>(0,t.Lk)("label",{for:"username"},"Nombre de usuario:",-1))),Z=z((()=>(0,t.Lk)("br",null,null,-1))),ee=z((()=>(0,t.Lk)("br",null,null,-1))),se=z((()=>(0,t.Lk)("label",{for:"email"},"Correo electrónico:",-1))),ae=z((()=>(0,t.Lk)("br",null,null,-1))),re=z((()=>(0,t.Lk)("br",null,null,-1))),te=z((()=>(0,t.Lk)("label",{for:"password"},"Contraseña:",-1))),ne=z((()=>(0,t.Lk)("br",null,null,-1))),oe=z((()=>(0,t.Lk)("br",null,null,-1))),ie=z((()=>(0,t.Lk)("input",{type:"submit",value:"Registrarse"},null,-1))),le={key:0,class:"success-message"},ue={key:1,class:"error-message"};function de(e,s,a,o,i,l){const u=(0,t.g2)("router-link");return(0,t.uX)(),(0,t.CE)("div",G,[(0,t.Lk)("div",H,[K,(0,t.Lk)("form",{onSubmit:s[3]||(s[3]=(0,r.D$)(((...e)=>l.registerUser&&l.registerUser(...e)),["prevent"]))},[Y,(0,t.bo)((0,t.Lk)("input",{type:"text",id:"username","onUpdate:modelValue":s[0]||(s[0]=e=>i.username=e),required:""},null,512),[[r.Jo,i.username]]),Z,ee,se,(0,t.bo)((0,t.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":s[1]||(s[1]=e=>i.email=e),required:""},null,512),[[r.Jo,i.email]]),ae,re,te,(0,t.bo)((0,t.Lk)("input",{type:"password",id:"password","onUpdate:modelValue":s[2]||(s[2]=e=>i.password=e),required:""},null,512),[[r.Jo,i.password]]),ne,oe,ie],32),(0,t.Lk)("p",null,[(0,t.eW)("¿Ya tienes una cuenta? "),(0,t.bF)(u,{to:"/login"},{default:(0,t.k6)((()=>[(0,t.eW)("Iniciar sesión")])),_:1})]),i.successMessage?((0,t.uX)(),(0,t.CE)("div",le,(0,n.v_)(i.successMessage),1)):(0,t.Q3)("",!0),i.errorMessage?((0,t.uX)(),(0,t.CE)("div",ue,(0,n.v_)(i.errorMessage),1)):(0,t.Q3)("",!0)])])}const ce={data(){return{username:"",email:"",password:"",successMessage:"",errorMessage:""}},methods:{registerUser(){const e={username:this.username,email:this.email,password:this.password};fetch("/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.ok?e.json():e.json().then((e=>{throw new Error(e.error)})))).then((e=>{this.successMessage="Registro exitoso. Redirigiendo...",N().fire({title:"Éxito",text:"Registro exitoso",icon:"success",confirmButtonText:"Ir a la página principal"}).then((e=>{e.isConfirmed&&(window.location.href="/")})),this.username="",this.email="",this.password=""})).catch((e=>{this.errorMessage=e.message,N().fire({title:"Error",text:this.errorMessage,icon:"error",confirmButtonText:"Intentar de nuevo"})}))}}},pe=(0,h.A)(ce,[["render",de],["__scopeId","data-v-7799b556"]]),me=pe,ge=e=>((0,t.Qi)("data-v-3294396f"),e=e(),(0,t.jt)(),e),he={class:"background-container"},ke={class:"card"},ve=ge((()=>(0,t.Lk)("h1",null,"Restablecer contraseña",-1))),be=ge((()=>(0,t.Lk)("p",null,"Ingresa tu correo electrónico y tu nueva contraseña:",-1))),fe=ge((()=>(0,t.Lk)("label",{for:"email"},"Correo electrónico:",-1))),Le=ge((()=>(0,t.Lk)("br",null,null,-1))),we=ge((()=>(0,t.Lk)("br",null,null,-1))),ye=ge((()=>(0,t.Lk)("label",{for:"newPassword"},"Nueva contraseña:",-1))),Ae=ge((()=>(0,t.Lk)("br",null,null,-1))),Ce=ge((()=>(0,t.Lk)("br",null,null,-1))),Ue=ge((()=>(0,t.Lk)("input",{type:"submit",value:"Restablecer contraseña"},null,-1))),Ee={key:0,class:"success-message"},xe={key:1,class:"error-message"};function Me(e,s,a,o,i,l){const u=(0,t.g2)("router-link");return(0,t.uX)(),(0,t.CE)("div",he,[(0,t.Lk)("div",ke,[ve,be,(0,t.Lk)("form",{onSubmit:s[2]||(s[2]=(0,r.D$)(((...e)=>l.resetPassword&&l.resetPassword(...e)),["prevent"]))},[fe,(0,t.bo)((0,t.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":s[0]||(s[0]=e=>i.email=e),required:""},null,512),[[r.Jo,i.email]]),Le,we,ye,(0,t.bo)((0,t.Lk)("input",{type:"password",id:"newPassword","onUpdate:modelValue":s[1]||(s[1]=e=>i.newPassword=e),required:""},null,512),[[r.Jo,i.newPassword]]),Ae,Ce,Ue],32),(0,t.Lk)("p",null,[(0,t.eW)("¿Recuerdas tu contraseña? "),(0,t.bF)(u,{to:"/login"},{default:(0,t.k6)((()=>[(0,t.eW)("Iniciar sesión")])),_:1})]),i.successMessage?((0,t.uX)(),(0,t.CE)("div",Ee,(0,n.v_)(i.successMessage),1)):(0,t.Q3)("",!0),i.errorMessage?((0,t.uX)(),(0,t.CE)("div",xe,(0,n.v_)(i.errorMessage),1)):(0,t.Q3)("",!0)])])}const _e={data(){return{email:"",newPassword:"",successMessage:"",errorMessage:""}},methods:{resetPassword(){const e={email:this.email,newPassword:this.newPassword};fetch("/reset-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.ok?e.json():e.json().then((e=>{throw new Error(e.error)})))).then((e=>{this.successMessage="Restablecimiento de contraseña exitoso. Redirigiendo...",N().fire({title:"Éxito",text:"Restablecimiento de contraseña exitoso",icon:"success",confirmButtonText:"Ir a la página principal"}).then((e=>{e.isConfirmed&&(window.location.href="/")})),this.email="",this.newPassword=""})).catch((e=>{this.errorMessage=e.message,N().fire({title:"Error",text:this.errorMessage,icon:"error",confirmButtonText:"Intentar de nuevo"})}))}}},Re=(0,h.A)(_e,[["render",Me],["__scopeId","data-v-3294396f"]]),Ie=Re;function Se(e,s,a,r,n,o){return(0,t.uX)(),(0,t.CE)("div")}const je={mounted(){window.location.href="/realidad.html"}},Oe=(0,h.A)(je,[["render",Se]]),Pe=Oe;function Xe(e,s,a,r,n,o){return(0,t.uX)(),(0,t.CE)("div")}const Te={mounted(){window.location.href="/indexMapas.html"}},We=(0,h.A)(Te,[["render",Xe]]),qe=We,Fe=e=>((0,t.Qi)("data-v-fb4ca070"),e=e(),(0,t.jt)(),e),Je={class:"background-container"},Qe={class:"card"},Ve=Fe((()=>(0,t.Lk)("h1",null,"Gestionar Usuarios",-1))),Ne=Fe((()=>(0,t.Lk)("thead",null,[(0,t.Lk)("tr",null,[(0,t.Lk)("th",null,"ID"),(0,t.Lk)("th",null,"Nombre de Usuario"),(0,t.Lk)("th",null,"Email"),(0,t.Lk)("th",null,"Contraseña"),(0,t.Lk)("th",null,"Acciones")])],-1))),$e=["onUpdate:modelValue","disabled"],Be=["onUpdate:modelValue","disabled"],De=["onUpdate:modelValue","disabled"],ze={class:"actions"},Ge=["onClick"],He=Fe((()=>(0,t.Lk)("i",{class:"fas fa-edit"},null,-1))),Ke=["onClick"],Ye=Fe((()=>(0,t.Lk)("i",{class:"fas fa-save"},null,-1))),Ze=["onClick"],es=Fe((()=>(0,t.Lk)("i",{class:"fas fa-trash"},null,-1)));function ss(e,s,a,o,i,l){return(0,t.uX)(),(0,t.CE)("div",Je,[(0,t.Lk)("div",Qe,[Ve,(0,t.Lk)("table",null,[Ne,(0,t.Lk)("tbody",null,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(i.users,(e=>((0,t.uX)(),(0,t.CE)("tr",{key:e.id},[(0,t.Lk)("td",null,(0,n.v_)(e.id),1),(0,t.Lk)("td",null,[(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":s=>e.username=s,disabled:!e.editing},null,8,$e),[[r.Jo,e.username]])]),(0,t.Lk)("td",null,[(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":s=>e.email=s,disabled:!e.editing},null,8,Be),[[r.Jo,e.email]])]),(0,t.Lk)("td",null,[(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":s=>e.password=s,disabled:!e.editing,type:"password"},null,8,De),[[r.Jo,e.password]])]),(0,t.Lk)("td",ze,[e.editing?((0,t.uX)(),(0,t.CE)("button",{key:1,onClick:s=>l.updateUser(e)},[Ye,(0,t.eW)("Guardar ")],8,Ke)):((0,t.uX)(),(0,t.CE)("button",{key:0,onClick:s=>l.enableEditing(e)},[He,(0,t.eW)("Editar ")],8,Ge)),(0,t.Lk)("button",{onClick:s=>l.deleteUser(e.id)},[es,(0,t.eW)("Eliminar ")],8,Ze)])])))),128))])])])])}var as=a(335);const rs={name:"ManageUsers",data(){return{users:[]}},created(){this.fetchUsers()},methods:{async fetchUsers(){try{const e=await as.A.get("/manage-users");this.users=e.data.map((e=>({...e,editing:!1})))}catch(e){console.error("Error al obtener los usuarios:",e)}},enableEditing(e){e.editing=!0},async updateUser(e){if(confirm("¿Estás seguro de que deseas actualizar este usuario?"))try{await as.A.put(`/manage-users/${e.id}`,{username:e.username,email:e.email,password:e.password}),e.editing=!1,alert("Usuario actualizado con éxito")}catch(s){console.error("Error al actualizar el usuario:",s)}},async deleteUser(e){if(confirm("¿Estás seguro de que deseas eliminar este usuario?"))try{await as.A.delete(`/manage-users/${e}`),this.users=this.users.filter((s=>s.id!==e))}catch(s){console.error("Error al eliminar el usuario:",s)}}}},ts=(0,h.A)(rs,[["render",ss],["__scopeId","data-v-fb4ca070"]]),ns=ts,os=[{path:"/",component:M},{path:"/login",component:D},{path:"/register",component:me},{path:"/reset-password",component:Ie},{path:"/ar",component:Pe},{path:"/maps",component:qe},{path:"/manage-users",name:"ManageUsers",component:ns}],is=(0,b.aE)({history:(0,b.LA)("/"),routes:os}),ls=is,us=(0,m.y$)({state:{user:JSON.parse(localStorage.getItem("user"))||null,isAdmin:JSON.parse(localStorage.getItem("isAdmin"))||!1},mutations:{setUser(e,s){e.user=s,e.isAdmin=s.isAdmin||!1,localStorage.setItem("user",JSON.stringify(s)),localStorage.setItem("isAdmin",JSON.stringify(e.isAdmin))},clearUser(e){e.user=null,e.isAdmin=!1,localStorage.removeItem("user"),localStorage.removeItem("isAdmin")}},actions:{loginUser({commit:e},s){e("setUser",s),"admin"===s.username&&"adminpassword"===s.password?e("setAdmin",!0):e("setAdmin",!1)},logoutUser({commit:e}){e("clearUser")}},getters:{isAuthenticated:e=>!!e.user,currentUser:e=>e.user,isAdmin:e=>e.isAdmin}}),ds=us;(0,r.Ef)(v).use(ls).use(ds).mount("#app")}},s={};function a(r){var t=s[r];if(void 0!==t)return t.exports;var n=s[r]={exports:{}};return e[r].call(n.exports,n,n.exports,a),n.exports}a.m=e,(()=>{var e=[];a.O=(s,r,t,n)=>{if(!r){var o=1/0;for(d=0;d<e.length;d++){for(var[r,t,n]=e[d],i=!0,l=0;l<r.length;l++)(!1&n||o>=n)&&Object.keys(a.O).every((e=>a.O[e](r[l])))?r.splice(l--,1):(i=!1,n<o&&(o=n));if(i){e.splice(d--,1);var u=t();void 0!==u&&(s=u)}}return s}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[r,t,n]}})(),(()=>{a.n=e=>{var s=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(s,{a:s}),s}})(),(()=>{a.d=(e,s)=>{for(var r in s)a.o(s,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:s[r]})}})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s)})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.p="/"})(),(()=>{var e={792:0};a.O.j=s=>0===e[s];var s=(s,r)=>{var t,n,[o,i,l]=r,u=0;if(o.some((s=>0!==e[s]))){for(t in i)a.o(i,t)&&(a.m[t]=i[t]);if(l)var d=l(a)}for(s&&s(r);u<o.length;u++)n=o[u],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(d)},r=self["webpackChunkproyecto"]=self["webpackChunkproyecto"]||[];r.forEach(s.bind(null,0)),r.push=s.bind(null,r.push.bind(r))})();var r=a.O(void 0,[504],(()=>a(613)));r=a.O(r)})();
//# sourceMappingURL=main.9fdf2e8e.js.map