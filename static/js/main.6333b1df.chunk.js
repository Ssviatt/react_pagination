(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(5),c=a.n(n),i=a(2),r=a(1),s=(a(10),function(e){var t=e.contentPerPage,a=e.count,n=Object(r.useState)(1),c=Object(i.a)(n,2),s=c[0],l=c[1],o=Math.ceil(a/t),j=s*t,d=function(e){l((function(t){return e?t===o?t:t+1:1===t?t:t-1}))};return{totalPages:o,nextPage:function(){return d(!0)},prevPage:function(){return d(!1)},setPage:function(e){l(e>o?o:e<1?1:e)},firstContentIndex:j-t,lastContentIndex:j,page:s}});function l(e,t){for(var a=[],n=e;n<=t;n+=1)a.push(n);return a}var o=a(3),j=a.n(o),d=a(0),u=function(e){var t=e.nextPage,a=e.prevPage,n=e.setPage,c=e.totalPages,i=e.page,r=l(1,c);return Object(d.jsxs)("ul",{className:"pagination",children:[Object(d.jsx)("li",{className:j()("page-item",{disabled:1===i}),children:Object(d.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":"true",onClick:a,children:"\xab"})}),r.map((function(e){return Object(d.jsx)("li",{className:j()("page-item",{active:i===e}),children:Object(d.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return n(e)},children:e})},e)})),Object(d.jsx)("li",{className:j()("page-item",{disabled:i===c}),children:Object(d.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":"false",onClick:t,children:"\xbb"})})]})},g=l(1,42),p=function(){var e=Object(r.useState)(5),t=Object(i.a)(e,2),a=t[0],n=t[1],c=s({contentPerPage:a,count:42}),l=c.firstContentIndex,o=c.lastContentIndex,j=c.nextPage,p=c.prevPage,b=c.page,x=c.setPage,h=c.totalPages;return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{children:"Items with Pagination"}),Object(d.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(b," (items ").concat(l+1," - ").concat(o<42?o:42," of 42)")}),Object(d.jsxs)("div",{className:"form-group row",children:[Object(d.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(d.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:a,onChange:function(e){n(+e.target.value),x(1)},children:[Object(d.jsx)("option",{value:"3",children:"3"}),Object(d.jsx)("option",{value:"5",children:"5"}),Object(d.jsx)("option",{value:"10",children:"10"}),Object(d.jsx)("option",{value:"20",children:"20"})]})}),Object(d.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(d.jsx)(u,{nextPage:j,prevPage:p,setPage:x,totalPages:h,page:b}),Object(d.jsx)("ul",{children:g.slice(l,o).map((function(e){return Object(d.jsx)("li",{"data-cy":"item",children:"Item ".concat(e)},e)}))})]})};c.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.6333b1df.chunk.js.map