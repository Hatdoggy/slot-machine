(this.webpackJsonpspin=this.webpackJsonpspin||[]).push([[0],{12:function(e){e.exports=JSON.parse('[{"src":"./img/svg/bar.svg","alt":"bar"},{"src":"./img/svg/seven.svg","alt":"seven"},{"src":"./img/svg/melon.svg","alt":"melon"},{"src":"./img/svg/crown.svg","alt":"crown"},{"src":"./img/svg/cherry.svg","alt":"cherry"},{"src":"./img/svg/diamond.svg","alt":"diamond"},{"src":"./img/svg/lemon.svg","alt":"lemon"},{"src":"./img/svg/ten.svg","alt":"ten"}]')},24:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(15),l=s.n(n),r=s(9),i=s(5),o=s(4),x=s.n(o),b=s(14),j=s(11),h=s(16),d=s(17),f=s(12),m=void 0,u=function(e){for(var t=Object(d.a)(e).slice(0),s=t.length;s;){var c=Math.floor(Math.random()*s--),a=[t[c],t[s]];t[s]=a[0],t[c]=a[1]}return t},p=function(e,t,s,c){var a=document.createElement("img");a.classList.add("box"),a.src=e[c].src,a.alt=e[c].alt,a.style.width=s.clientWidth+"px",a.style.height=s.clientHeight+"px",t.appendChild(a)};function w(){return(w=Object(h.a)(x.a.mark((function e(){var t,s,c,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.querySelectorAll(".door"),v(!1,1,2),s=Object(j.a)(t),e.prev=3,a=x.a.mark((function e(){var t,s,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.value,s=t.querySelector(".boxes"),a=parseInt(s.style.transitionDuration),s.style.transform="translateY(0)",e.next=6,new Promise((function(e){return setTimeout(e,100*a)}));case 6:case"end":return e.stop()}}),e)})),s.s();case 6:if((c=s.n()).done){e.next=10;break}return e.delegateYield(a(),"t0",8);case 8:e.next=6;break;case 10:e.next=15;break;case 12:e.prev=12,e.t1=e.catch(3),s.e(e.t1);case 15:return e.prev=15,s.f(),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[3,12,15,18]])})))).apply(this,arguments)}var O=function(){return w.apply(this,arguments)},g=function(e,t){e.transitionstart=function(){t.dataset.spinned="1",m.querySelectorAll(".box").forEach((function(e){e.style.filter="blur(1px)"}))},e.transitionend=function(){m.querySelectorAll(".box").forEach((function(e,t){e.style.filter="blur(0)"}))}},v=function(){var e,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=document.querySelectorAll(".door"),n=Object(j.a)(a);try{for(n.s();!(e=n.n()).done;){var l=e.value;if(t)l.dataset.spinned="0";else if("1"===l.dataset.spinned)return;var r=l.querySelector(".boxes"),i=r.cloneNode(!1),o=[];if(o.push(f[0]),g(i,l),!t){for(var x=[],h=0;h<(s>0?s:1);h++)x.push.apply(x,Object(b.a)(f));o.push.apply(o,Object(b.a)(u(x)))}for(var d=o.length-1;d>=0;d--)p(o,i,l,d);i.style.transitionDuration="".concat(c>0?c:1,"s"),i.style.transform="translateY(-".concat(l.clientHeight*(o.length-1),"px)"),l.replaceChild(i,r)}}catch(m){n.e(m)}finally{n.f()}},N=s(0),y=function(){return Object(N.jsxs)("header",{className:"flx flx-jc-sb flx-ai-ce w-100",children:[Object(N.jsxs)("div",{className:"flx flx-ai-ce w-50 ",children:[Object(N.jsx)("p",{className:"w-auto mont-b txt-wht",children:"Spins left"}),Object(N.jsx)("p",{className:"w-50 m-l-2 rob bg-main txt-wht p-5 txt-al-ce brd-50",children:"3"})]}),Object(N.jsxs)("div",{className:"flx flx-jc-end flx-ai-ce m-l-auto w-50",children:[Object(N.jsx)("p",{className:"w-auto mont-b txt-wht",children:"Your wallet"}),Object(N.jsx)("p",{className:"w-50 m-l-2 rob bg-main txt-wht p-5 txt-al-ce brd-50",children:"$100"})]})]})},S=function(){return Object(N.jsxs)("section",{className:"flx flx-jc-sb flx-ai-ce h-90 w-100 m-t-2 doors",children:[Object(N.jsx)("span",{className:"brd-50 bg-wht h-100 w-30 shdw door ovr-hide trans",children:Object(N.jsx)("div",{className:"boxes"})}),Object(N.jsx)("span",{className:"brd-50 bg-wht h-100 w-30 shdw door ovr-hide trans m-l-2 m-r-2",children:Object(N.jsx)("div",{className:"boxes"})}),Object(N.jsx)("span",{className:"brd-50 bg-wht h-100 w-30 shdw door ovr-hide trans",children:Object(N.jsx)("div",{className:"boxes"})})]})},E=function(e){return Object(N.jsxs)("div",{className:"flx flx-col flx-jc-ce flx-ai-ce m-t-2 mes",children:[Object(N.jsx)("button",{className:"brd-50 btn-clr mont-b w-30",onClick:function(){return function(){var t=e.show,s=e.pop;s.ctr<3?O():t(Object(i.a)(Object(i.a)({},s),{},{win:!0}))}()},children:"Spin"}),Object(N.jsx)("p",{className:"txt-al-ce txt-wht rob w-50 p-20",children:"A total of 300 FREE SPINS have been given out to 100 persons. If you see this spinner you can still use your 3 FREE SPINS but please hurry the deadline to use them is near. "})]})},k=function(e){return Object(N.jsxs)("main",{className:"w-vw flx flx-ai-ce flx-jc-ce h-90",children:[Object(N.jsx)("div",{className:"brd-50 h-80 w-50 flx flx-jc-ce flx-ai-ce w-100 cont",children:Object(N.jsxs)("div",{className:"bg-glass flx flx-col flx-jc-ce flx-ai-ce p-20 brd-50 h-90 brd-wht w-80",children:[Object(N.jsx)(y,{}),Object(N.jsx)(S,{})]})}),Object(N.jsxs)("div",{className:"flx flx-col flx-jc-ce flx-ai-ce w-50",children:[Object(N.jsx)("img",{src:"./img/logo.png",alt:"logo",className:"logo m-t-2"}),Object(N.jsx)(E,{show:e.show,pop:e.pop})]})]})},C=function(){return Object(N.jsxs)("footer",{className:"flx flx-jc-ce flx-ai-ce h-10 bg-main",children:[Object(N.jsx)("img",{src:"./img/18.png",alt:"18",className:"warn"}),Object(N.jsx)("span",{className:"rob w-70 txt-wht m-l-2",children:"We use cookies to optimize your experience of this site - Leave if you are not okay with cookies This is a 3rd-party ad and is not hosted by Spin Casino"})]})},T=function(e){return Object(c.useEffect)((function(){setTimeout((function(){e.show(Object(i.a)(Object(i.a)({},e.pop),{},{mes:!1,win:!1}))}),2e3)})),Object(N.jsx)("main",{className:"bg-pop pos-abs w-100 h-vh flx flx-jc-ce flx-ai-ce fade ",children:Object(N.jsxs)("div",{className:"w-30 flx flx-col flx-jc-ce flx-ai-ce p-50 brd-50 txt-wht bg-rev shdw trans pop",children:[Object(N.jsx)("h4",{className:"rob",children:"Message"}),Object(N.jsx)("h1",{className:"mont-b m-t-5 h-50",children:"-20"}),Object(N.jsxs)("p",{className:"mont-r m-t-5 brd-50 p-10 txt-al-ce brd-wht w-50 flx",children:["Your Wallet ",Object(N.jsx)("span",{className:"mont-b m-l-auto",children:"insert"})]}),Object(N.jsx)("p",{className:"rob m-t-2",children:"Num of spins left"})]})})},q=function(){return Object(N.jsx)("main",{className:"bg-pop pos-abs w-100 h-vh flx flx-jc-ce flx-ai-ce fade ",children:Object(N.jsxs)("div",{className:"w-30 flx flx-col flx-jc-ce flx-ai-ce p-50 h-80 brd-50 txt-wht bg-rev shdw trans popWin",children:[Object(N.jsx)("h4",{className:"mont-b",children:"CONGRATULATIONS"}),Object(N.jsx)("p",{className:"rob m-t-5 txt-al-ce W-50",children:"Congratulations - Only 2% of the users won this: $1000 + 50 FREE Spins as Welcome Bonus on Spin Casino! You are eligible to pick up $1000 + 50 free spins when creating your account with Spin Casino"}),Object(N.jsx)("img",{src:"./img/logo.png",alt:"logo",className:"m-t-5"}),Object(N.jsx)("button",{className:"mont-b btn-wht brd-50 w-50 m-t-10",children:"Claim my bonus!"})]})})},A=function(e){return Object(N.jsx)("main",{className:"bg-pop pos-abs w-100 h-vh flx flx-jc-ce flx-ai-ce fade ",children:Object(N.jsxs)("div",{className:"w-30 flx flx-col flx-jc-ce flx-ai-ce p-50 brd-50 txt-wht bg-rev shdw trans pop",children:[Object(N.jsx)("h4",{className:"mont-b",children:"ABOUT TO EXPIRE!"}),Object(N.jsx)("p",{className:"rob m-t-2",children:"This is our last try - The 3 FREE SPINS will expire end of tomorrow: Sunday 25 Of July Wednesday 21 Of July!"}),Object(N.jsx)("button",{className:"mont-b btn-wht brd-50 w-50 m-t-10",onClick:function(){return e.hide(!1)},children:"LETS GO!"})]})})},I=function(e){return Object(c.useEffect)((function(){v()})),Object(N.jsxs)("main",{className:"w-vw flx flx-col flx-ai-ce flx-jc-ce h-90",children:[Object(N.jsx)("img",{src:"./img/logo.png",alt:"logo",className:"logo m-t-2"}),Object(N.jsx)("div",{className:"m-t-2 brd-50 h-80 w-50 flx flx-jc-ce flx-ai-ce w-100 cont",children:Object(N.jsxs)("div",{className:"bg-glass flx flx-col flx-jc-ce flx-ai-ce p-20 brd-50 h-90 brd-wht w-80",children:[Object(N.jsx)(y,{}),Object(N.jsx)(S,{})]})}),Object(N.jsx)(E,{show:e.show,pop:e.pop})]})},W=s(13);var M=function(){var e=Object(W.useMediaQuery)({query:"(min-width : 481px) and (max-width : 1000px)"}),t=Object(W.useMediaQuery)({query:"(min-width : 760px) and (max-width : 1000px) and (orientation:portrait)"}),s=Object(c.useState)(!0),a=Object(r.a)(s,2),n=a[0],l=a[1],i=Object(c.useState)({mes:!1,win:!1,ctr:0}),o=Object(r.a)(i,2),x=o[0],b=o[1],j=Object(c.useState)(!1),h=Object(r.a)(j,2);return h[0],h[1],n?Object(N.jsx)(A,{hide:l}):Object(N.jsxs)("div",{className:"h-100 w-100 pos-rel fade",children:[x.win&&Object(N.jsx)(q,{}),x.mes&&Object(N.jsx)(T,{show:b,pop:x}),e&&!t?Object(N.jsx)(k,{show:b,pop:x}):Object(N.jsx)(I,{show:b,pop:x}),Object(N.jsx)(C,{})]})};l.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(M,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.fc8ce99d.chunk.js.map