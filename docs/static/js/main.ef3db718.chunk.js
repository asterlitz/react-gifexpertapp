(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),r=n(7),i=n.n(r),u=(n(15),n(9)),s=n(2),o=n(0),j=function(t){var e=Object(c.useState)(""),n=Object(s.a)(e,2),a=n[0],r=n[1];return Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),a.trim().length>2&&(t.addNewCategory(a),r(""))},children:Object(o.jsx)("input",{type:"text",value:a,onChange:function(t){r(t.target.value)},placeholder:"Escriba una categoria"})})},d=n(10),l=function(t){var e=t.title,n=t.url;return Object(o.jsxs)("div",{className:"card animate__animated animate__backInDown",children:[Object(o.jsx)("img",{src:n,alt:e}),Object(o.jsx)("p",{children:e})]})},b=n(6),p=n.n(b),f=n(8),h=function(){var t=Object(f.a)(p.a.mark((function t(e){var n,c,a,r,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=VRXV2D2n78slHCshX3sadHEnXX7AbDSZ&q=".concat(encodeURI(e),"&limit=7"),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:return a=t.sent,r=a.data,i=r.map((function(t){return{id:t.id,url:t.images.downsized_medium.url,title:t.title}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){h(t).then((function(t){return r({data:t,loading:!1})}))}),[t]),a}(e),a=n.data,r=n.loading;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:e}),Object(o.jsx)("p",{children:r&&"...loading"}),Object(o.jsx)("div",{className:"card-grid",children:a.map((function(t){return Object(o.jsx)(l,Object(d.a)({},t),t.id)}))})]})},g=function(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),n=e[0],a=e[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"Gif expert app"}),Object(o.jsx)(j,{addNewCategory:function(t){a([t].concat(Object(u.a)(n)))}}),Object(o.jsx)("hr",{}),Object(o.jsx)("ul",{children:n.map((function(t,e){return Object(o.jsx)(O,{category:t},e)}))})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),r(t),i(t)}))};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),x()}},[[18,1,2]]]);
//# sourceMappingURL=main.ef3db718.chunk.js.map