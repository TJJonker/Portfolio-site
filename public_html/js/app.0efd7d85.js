(function(){"use strict";var t={4839:function(t,n,e){e.a(t,(async function(t,e){try{const t="/Projects/Projects.json";let o=await fetch(t),r=await o.json();n.A={async GetProject(t){return await r.Projects[t]}},e()}catch(o){e(o)}}),1)},1406:function(t,n,e){e.a(t,(async function(t,n){try{var o=e(5130),r=e(77),a=e(7482),c=e(4839),s=t([c]);c=(s.then?(await s)():s)[0];const i=(0,o.Ef)(r.A);i.use(a.A),i.provide("$projects",c.A),i.mount("#app"),n()}catch(i){n(i)}}))},7482:function(t,n,e){e.d(n,{A:function(){return Zt}});var o=e(1387),r=e(6768);const a=t=>((0,r.Qi)("data-v-352554f4"),t=t(),(0,r.jt)(),t),c={class:"content"},s=a((()=>(0,r.Lk)("img",{class:"image-button",src:"/Images/Logo/Logo_Dark.svg",alt:"Button Image"},null,-1)));function i(t,n,e,o,a,i){const l=(0,r.g2)("router-link"),d=(0,r.g2)("router-view"),u=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("div",c,[(0,r.bF)(l,{to:"/Home"},{default:(0,r.k6)((()=>[s])),_:1})]),(0,r.bF)(d),(0,r.bF)(u)],64)}var l=e(4232);const d=t=>((0,r.Qi)("data-v-2505949a"),t=t(),(0,r.jt)(),t),u={class:"footer"},v={class:"con"},p={class:"layout"},f={class:"social-media"},m=["href"],h=["src","alt"],g=d((()=>(0,r.Lk)("img",{class:"logo",src:"/Images/Logo/Logo_Light.svg"},null,-1)));function k(t,n,e,o,a,c){const s=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",u,[(0,r.Lk)("div",v,[(0,r.Lk)("div",p,[(0,r.Lk)("div",f,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.icons,((t,n)=>((0,r.uX)(),(0,r.CE)("a",{href:t.url,class:"icon-container wiggle",key:n,style:(0,l.Tr)({"animation-delay":1+.2*n+"s"})},[(0,r.Lk)("img",{class:"icon",src:t.src,alt:t.alt},null,8,h)],12,m)))),128))]),(0,r.bF)(s,{class:"logo",to:"/Home"},{default:(0,r.k6)((()=>[g])),_:1})])])])}var w={data(){return{icons:[{src:"/Images/Icons/Light/LinkedIn.svg",alt:"LinkedIn",url:"https://linkedin.com/in/tj-jonker"},{src:"/Images/Icons/Light/Github.svg",alt:"Github",url:"https://github.com/TJJonker"},{src:"/Images/Icons/Light/Google.svg",alt:"Google",url:"mailto: tjj.jonker@gmail.com"}]}}},j=e(1241);const L=(0,j.A)(w,[["render",k],["__scopeId","data-v-2505949a"]]);var b=L,y={components:{Footer:b}};const C=(0,j.A)(y,[["render",i],["__scopeId","data-v-352554f4"]]);var I=C;function _(t,n,e,o,a,c){const s=(0,r.g2)("hero"),i=(0,r.g2)("about-me"),l=(0,r.g2)("latest-works");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(s),(0,r.bF)(i),(0,r.bF)(l)],64)}const x=t=>((0,r.Qi)("data-v-d300fa76"),t=t(),(0,r.jt)(),t),E={class:"hero"},F={class:"row m-0"},A={class:"col-xl-8"},P={class:"hero-text-container"},X=x((()=>(0,r.Lk)("h1",{class:"name primary-color"},"Tom Jonker",-1))),T=x((()=>(0,r.Lk)("h3",{class:"description primary-text-color"},[(0,r.eW)("Engine- and graphics "),(0,r.Lk)("span",{class:"secondary-text-color",style:{display:"block"}},"programmer")],-1))),G=x((()=>(0,r.Lk)("div",{class:"col-xl-4 bg-project-primary"},[(0,r.Lk)("img",{src:"Images/Misc/Hero-picture.png",alt:""})],-1)));function S(t,n,e,o,a,c){const s=(0,r.g2)("social-media-icons");return(0,r.uX)(),(0,r.CE)("div",E,[(0,r.Lk)("div",F,[(0,r.Lk)("div",A,[(0,r.Lk)("div",P,[(0,r.Lk)("div",null,[X,T,(0,r.bF)(s)])])]),G])])}const H=t=>((0,r.Qi)("data-v-3d88ae3f"),t=t(),(0,r.jt)(),t),M={class:"icons-row mt-4"},O=["href"],Q=["src","alt"],W=H((()=>(0,r.Lk)("img",{class:"arrow",src:"Images/Misc/ArrowGetInTouch.png",alt:""},null,-1)));function K(t,n,e,o,a,c){return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("div",M,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.icons,((t,n)=>((0,r.uX)(),(0,r.CE)("a",{href:t.url,class:"icon-container wiggle",key:n,style:(0,l.Tr)({"animation-delay":1+.2*n+"s"})},[(0,r.Lk)("img",{class:"icon",src:t.src,alt:t.alt},null,8,Q)],12,O)))),128))]),W],64)}var U={data(){return{icons:[{src:"Images/Icons/Dark/LinkedIn.svg",alt:"LinkedIn",url:"https://linkedin.com/in/tj-jonker"},{src:"Images/Icons/Dark/Github.svg",alt:"Github",url:"https://github.com/TJJonker"},{src:"Images/Icons/Dark/Google.svg",alt:"Google",url:"mailto: tjj.jonker@gmail.com"}]}}};const B=(0,j.A)(U,[["render",K],["__scopeId","data-v-3d88ae3f"]]);var z=B,R={components:{SocialMediaIcons:z}};const $=(0,j.A)(R,[["render",S],["__scopeId","data-v-d300fa76"]]);var D=$;const J={class:"con"},q=(0,r.Fv)('<div class="col-s-12 title" data-v-9763daec><h1 data-v-9763daec>Behind the <span class="secondary-text-color" data-v-9763daec>screens</span></h1></div><div class="content" data-v-9763daec><div class="col-sm-12 col-xl-9 text justified-text" data-v-9763daec><p data-v-9763daec>I&#39;m Tom, a final-year Game Development student at the Amsterdam University of Applied Sciences. Since my exchange to Fanshawe College Canada, I have had a passion for engine and graphics programming, and I&#39;m not planning on stopping anytime soon. I am currently invested in creating engaging visual effects, conducting research, and diving into optimization techniques. </p><p data-v-9763daec>I&#39;ve started writing articles and documenting my research and projects. Curious to find out what I&#39;ve made? </p></div><div class="col-sm-12 col-xl-3 images" data-v-9763daec><img src="Images/Misc/Fanshawe.png" alt="" data-v-9763daec><img src="Images/Misc/HvA.png" alt="" data-v-9763daec></div></div>',2),N=[q];function V(t,n,e,o,a,c){return(0,r.uX)(),(0,r.CE)("div",J,N)}var Y={};const Z=(0,j.A)(Y,[["render",V],["__scopeId","data-v-9763daec"]]);var tt=Z;const nt=t=>((0,r.Qi)("data-v-5c82b91a"),t=t(),(0,r.jt)(),t),et={class:"section"},ot=nt((()=>(0,r.Lk)("div",{class:"section-background"},null,-1))),rt={class:"con"},at=nt((()=>(0,r.Lk)("div",{class:"col-s-12 title"},[(0,r.Lk)("h1",null,[(0,r.eW)("What I've been "),(0,r.Lk)("span",{class:"secondary-text-color"},"working on lately")])],-1))),ct={class:"cards"},st=nt((()=>(0,r.Lk)("div",{class:"button-flex"},[(0,r.Lk)("button",{class:"btn button"},"See all my work")],-1)));function it(t,n,e,o,a,c){const s=(0,r.g2)("latest-work-card");return(0,r.uX)(),(0,r.CE)("div",et,[ot,(0,r.Lk)("div",rt,[at,(0,r.Lk)("div",ct,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.projects,((t,n)=>((0,r.uX)(),(0,r.Wv)(s,{key:n,index:n,project:t},null,8,["index","project"])))),128))]),st])])}e(4114);const lt=t=>((0,r.Qi)("data-v-7a248092"),t=t(),(0,r.jt)(),t),dt={ref:"elementToCheck",class:"rectbox"},ut={class:"aspect-ratio-container"},vt={class:"image-container"},pt=["src"],ft={class:"image-overlay"},mt={class:"title"},ht={class:"subtitle"},gt={class:"category-container"},kt={class:"category"},wt=lt((()=>(0,r.Lk)("div",{class:"arrow"},null,-1)));function jt(t,n,e,o,a,c){const s=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",dt,[(0,r.Lk)("div",{class:(0,l.C4)([{"card-mobile-hover":this.isCentered},"card"])},[(0,r.bF)(s,{to:"Projects/"+e.index},{default:(0,r.k6)((()=>[(0,r.Lk)("div",ut,[(0,r.Lk)("div",vt,[(0,r.Lk)("img",{src:c.imageURL,alt:"Card Image",class:"card-image"},null,8,pt),(0,r.Lk)("div",ft,[(0,r.Lk)("div",null,[(0,r.Lk)("h2",mt,(0,l.v_)(e.project.Preview.Title),1),(0,r.Lk)("p",ht,(0,l.v_)(e.project.Preview.Subtitle),1)]),(0,r.Lk)("div",gt,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.project.Categories,(t=>((0,r.uX)(),(0,r.CE)("span",kt,(0,l.v_)(t),1)))),256))]),wt])])])])),_:1},8,["to"])],2)],512)}var Lt={props:["project","index"],computed:{imageURL(){return window.innerWidth>1200?"Projects/"+this.project.ContentFolder+"/Big.png":"Projects/"+this.project.ContentFolder+"/Small.png"}},data(){return{isCentered:!1}},mounted(){window.addEventListener("resize",this.handleResize),window.addEventListener("scroll",this.checkCenter),this.checkCenter()},destroyed(){window.removeEventListener("resize",this.handleResize),window.removeEventListener("scroll",this.checkCenter)},methods:{handleResize(){this.$forceUpdate()},checkCenter(){const t=this.$refs.elementToCheck;try{const n=t.getBoundingClientRect(),e=window.innerHeight||document.documentElement.clientHeight,o=e/2;n.top<o&&n.top+n.height>o?this.isCentered=!0:this.isCentered=!1}catch{}}}};const bt=(0,j.A)(Lt,[["render",jt],["__scopeId","data-v-7a248092"]]);var yt=bt,Ct={components:{LatestWorkCard:yt},data(){return{projects:[]}},async created(){const t=(0,r.WQ)("$projects");for(let n=0;n<3;n++){const e=await t.GetProject(n);this.projects.push(e)}}};const It=(0,j.A)(Ct,[["render",it],["__scopeId","data-v-5c82b91a"]]);var _t=It,xt={components:{Hero:D,AboutMe:tt,LatestWorks:_t}};const Et=(0,j.A)(xt,[["render",_]]);var Ft=Et;const At=t=>((0,r.Qi)("data-v-6f425f9d"),t=t(),(0,r.jt)(),t),Pt={key:0,class:"con"},Xt=At((()=>(0,r.Lk)("p",{class:"link-text"},"< Projects",-1))),Tt=["src"],Gt={class:"category-container"},St={class:"category"};function Ht(t,n,e,o,a,c){const s=(0,r.g2)("router-link"),i=(0,r.g2)("project-markdown");return null!=a.project?((0,r.uX)(),(0,r.CE)("div",Pt,[(0,r.bF)(s,{style:{"text-decoration":"none"},to:"/Home"},{default:(0,r.k6)((()=>[Xt])),_:1}),(0,r.Lk)("img",{class:"banner",src:c.BannerUrl},null,8,Tt),(0,r.Lk)("div",Gt,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.project.Categories,(t=>((0,r.uX)(),(0,r.CE)("p",St,(0,l.v_)(t),1)))),256))]),(0,r.bF)(i,{"file-path":c.MarkdownUrl},null,8,["file-path"])])):(0,r.Q3)("",!0)}const Mt=["innerHTML"];function Ot(t,n,e,o,a,c){return(0,r.uX)(),(0,r.CE)("div",{class:"markdown-content",innerHTML:a.markedContent},null,8,Mt)}var Qt=e(5852),Wt=e(1017),Kt=e.n(Wt),Ut={props:["filePath"],data(){return{markedContent:""}},methods:{async GetContent(){let t=await fetch(this.filePath),n=await t.text();this.markedContent=(0,Qt.xI)(n),this.$nextTick((()=>{window.Prism=window.Prism||{},window.Prism.manual=!0,Kt().highlightAll()}))}},mounted(){this.GetContent()}};const Bt=(0,j.A)(Ut,[["render",Ot]]);var zt=Bt,Rt={props:["index"],components:{ProjectMarkdown:zt},data(){return{project:null}},async created(){const t=(0,r.WQ)("$projects");this.project=await t.GetProject(this.index)},computed:{BannerUrl(){return"/Projects/"+this.project.ContentFolder+"/Banner.png"},MarkdownUrl(){return"/Projects/"+this.project.ContentFolder+"/Content.md"}}};const $t=(0,j.A)(Rt,[["render",Ht],["__scopeId","data-v-6f425f9d"]]);var Dt=$t;function Jt(t,n){return null}const qt={},Nt=(0,j.A)(qt,[["render",Jt]]);var Vt=Nt;const Yt=(0,o.aE)({history:(0,o.LA)(),routes:[{path:"",redirect:"/Home",component:I,children:[{path:"/Home",component:Ft},{path:"/projects",component:Vt},{path:"/projects/:index",component:Dt,props:!0}]}]});Yt.beforeEach(((t,n,e)=>{window.scrollTo(0,0),e()}));var Zt=Yt},77:function(t,n,e){e.d(n,{A:function(){return i}});var o=e(6768);function r(t,n,e,r,a,c){const s=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.Wv)(s)}var a={components:{}},c=e(1241);const s=(0,c.A)(a,[["render",r]]);var i=s}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return t[o].call(a.exports,a,a.exports,e),a.exports}e.m=t,function(){var t="function"===typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",n="function"===typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"===typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=function(t){t&&t.d<1&&(t.d=1,t.forEach((function(t){t.r--})),t.forEach((function(t){t.r--?t.r++:t()})))},a=function(e){return e.map((function(e){if(null!==e&&"object"===typeof e){if(e[t])return e;if(e.then){var a=[];a.d=0,e.then((function(t){c[n]=t,r(a)}),(function(t){c[o]=t,r(a)}));var c={};return c[t]=function(t){t(a)},c}}var s={};return s[t]=function(){},s[n]=e,s}))};e.a=function(e,c,s){var i;s&&((i=[]).d=-1);var l,d,u,v=new Set,p=e.exports,f=new Promise((function(t,n){u=n,d=t}));f[n]=p,f[t]=function(t){i&&t(i),v.forEach(t),f["catch"]((function(){}))},e.exports=f,c((function(e){var r;l=a(e);var c=function(){return l.map((function(t){if(t[o])throw t[o];return t[n]}))},s=new Promise((function(n){r=function(){n(c)},r.r=0;var e=function(t){t!==i&&!v.has(t)&&(v.add(t),t&&!t.d&&(r.r++,t.push(r)))};l.map((function(n){n[t](e)}))}));return r.r?s:c()}),(function(t){t?u(f[o]=t):d(p),r(i)})),i&&i.d<0&&(i.d=0)}}(),function(){var t=[];e.O=function(n,o,r,a){if(!o){var c=1/0;for(d=0;d<t.length;d++){o=t[d][0],r=t[d][1],a=t[d][2];for(var s=!0,i=0;i<o.length;i++)(!1&a||c>=a)&&Object.keys(e.O).every((function(t){return e.O[t](o[i])}))?o.splice(i--,1):(s=!1,a<c&&(c=a));if(s){t.splice(d--,1);var l=r();void 0!==l&&(n=l)}}return n}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[o,r,a]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={524:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var r,a,c=o[0],s=o[1],i=o[2],l=0;if(c.some((function(n){return 0!==t[n]}))){for(r in s)e.o(s,r)&&(e.m[r]=s[r]);if(i)var d=i(e)}for(n&&n(o);l<c.length;l++)a=c[l],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(d)},o=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[504],(function(){return e(1406)}));o=e.O(o)})();
//# sourceMappingURL=app.0efd7d85.js.map