"use strict";(self.webpackChunkyour_pet=self.webpackChunkyour_pet||[]).push([[80],{7998:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var s=t(9439),a=t(2791),r=t(9434),i=t(6048),l=t.n(i),c=t(9126),o=t(4873),u=function(e){return e.news.isLoading},_=function(e){return e.news.totalPages},d=function(e){return e.news.error},m=function(e){return e.news.items},f="newsPage_paginationWrapper__vYyf5",h="newsPage_pagination__5Mp9m",g="newsPage_paginationActive__nUQuo",p="newsPage_title__2dhez",x=t(1213),w="newsList_list__X21XS",j="newsList_item__4+s88",v="newsList_image__uCyW1",N="newsList_itemContainer__MqCrh",L="newsList_title__xwemP",C="newsList_text__+vSI2",b="newsList_itemWrapper__2ldkj",y="newsList_date__6ijuo",P="newsList_link__gyWNM",S="newsList_form__k86Pl",k="newsList_formContainer__5I97x",D="newsList_input__f8RPB",M="newsList_btnSearch__tuFbP",Z="newsList_btnClear__MhwKi",Y=t(3329),z=function(e){var n=e.handleSearchChange,t=(0,a.useState)(""),r=(0,s.Z)(t,2),i=r[0],l=r[1];return(0,Y.jsx)("form",{className:S,onSubmit:function(e){e.preventDefault(),n(i)},children:(0,Y.jsxs)("div",{className:k,children:[(0,Y.jsx)("input",{type:"text",placeholder:"Search",className:D,onChange:function(e){l(e.currentTarget.value.toLowerCase().trim())},value:i,autoComplete:"off",autoFocus:!0}),(0,Y.jsx)("button",{className:M,type:"submit",children:(0,Y.jsx)(c.dVI,{})}),i.length>0&&(0,Y.jsx)("button",{className:Z,onClick:function(e){l("")},children:(0,Y.jsx)(x.ySC,{})})]})})},I=t(3433),U=t(7892),W=t.n(U),E=t.p+"static/media/img_default.4c279755fe2fc0c8afa1.jpg",F=function(e){var n=e.id,t=e.imgUrl,r=e.title,i=e.text,l=e.date,c=e.url,o=W()(l).format("DD/MM/YYYY"),u=(0,a.useState)(!1),_=(0,s.Z)(u,2),d=_[0],m=_[1];return(0,Y.jsxs)("li",{className:j,children:[(0,Y.jsx)("img",{alt:r,loading:"lazy",className:v,src:d?E:t,onError:function(){m(!0)}}),(0,Y.jsxs)("div",{className:N,children:[(0,Y.jsx)("h2",{className:L,children:r}),(0,Y.jsx)("p",{className:C,children:i}),(0,Y.jsxs)("div",{className:b,children:[(0,Y.jsx)("p",{className:y,children:o}),(0,Y.jsx)("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:P,children:"Read more"})]})]})]},n)},Q=function(e){var n=e.news,t=(0,I.Z)(n).sort((function(e,n){return Date.parse(n.date)-Date.parse(e.date)}));return(0,Y.jsx)("ul",{className:w,children:t.map((function(e){var n=e.id,t=e.title,s=e.text,a=e.date,r=e.imgUrl,i=e.url;return(0,Y.jsx)(F,{id:n,title:t,text:s,date:a,imgUrl:r,url:i,loading:"lazy"},n)}))})},R=t(7214),A=function(){var e=(0,r.I0)(),n=(0,r.v9)(m),t=(0,r.v9)(u),i=(0,r.v9)(d),x=(0,r.v9)(_),w=(0,a.useState)(""),j=(0,s.Z)(w,2),v=j[0],N=j[1],L=(0,a.useState)(0),C=(0,s.Z)(L,2),b=C[0],y=C[1];(0,a.useEffect)((function(){e((0,o.a)())}),[e]),(0,a.useEffect)((function(){e((0,o.a)({searchQuery:v}))}),[e,v]);return t&&!i?(0,Y.jsx)(R.Z,{}):(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)("h1",{className:p,children:"News"}),(0,Y.jsx)(z,{handleSearchChange:function(e){N(e),y(0)}}),n.length>0&&(0,Y.jsx)(Q,{news:n}),n.length>0&&(0,Y.jsx)("div",{className:f,children:(0,Y.jsx)(l(),{previousLabel:(0,Y.jsx)(c.And,{}),nextLabel:(0,Y.jsx)(c.lzl,{}),pageCount:Math.ceil(x)||0,onPageChange:function(n){var t=n.selected;window.scrollTo({top:0,behavior:"smooth"});var s=t+1;y(t),e((0,o.a)({searchQuery:v,page:s}))},containerClassName:h,activeClassName:g,pageRangeDisplayed:2,marginPagesDisplayed:2,breakLabel:"...",forcePage:b})})]})}}}]);
//# sourceMappingURL=80.2b586ad1.chunk.js.map