"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[147],{3811:function(r,n,e){e.r(n),e.d(n,{default:function(){return S}});var t=e(5861),a=e(9439),i=e(4687),c=e.n(i),o=e(2791),s=e(7689),u=e(824),l=e(9589),d=e(1413),f=e(4925),m=e(5597),p=e(1665),g=e(184),v=["templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"],h=(0,m.G)((function(r,n){var e=r.templateAreas,t=r.gap,a=r.rowGap,i=r.columnGap,c=r.column,o=r.row,s=r.autoFlow,u=r.autoRows,l=r.templateRows,m=r.autoColumns,h=r.templateColumns,x=(0,f.Z)(r,v),b={display:"grid",gridTemplateAreas:e,gridGap:t,gridRowGap:a,gridColumnGap:i,gridAutoColumns:m,gridColumn:c,gridRow:o,gridAutoFlow:s,gridAutoRows:u,gridTemplateRows:l,gridTemplateColumns:h};return(0,g.jsx)(p.m.div,(0,d.Z)({ref:n,__css:b},x))}));h.displayName="Grid";var x=e(2552),b=e(2884),Z=e(2625),w=["columns","spacingX","spacingY","spacing","minChildWidth"],k=(0,m.G)((function(r,n){var e,t=r.columns,a=r.spacingX,i=r.spacingY,c=r.spacing,o=r.minChildWidth,s=(0,f.Z)(r,w),u=(0,x.F)(),l=o?function(r,n){return(0,Z.XQ)(r,(function(r){var e,t=(0,b.LP)("sizes",r,"number"===typeof(e=r)?"".concat(e,"px"):e)(n);return null===r?null:"repeat(auto-fit, minmax(".concat(t,", 1fr))")}))}(o,u):(e=t,(0,Z.XQ)(e,(function(r){return null===r?null:"repeat(".concat(r,", minmax(0, 1fr))")})));return(0,g.jsx)(h,(0,d.Z)({ref:n,gap:c,columnGap:a,rowGap:i,templateColumns:l},s))}));k.displayName="SimpleGrid";var y=e(5090),j=e(6640),_=e(9696),C=e(2715),G=e(1933),N=e.p+"static/media/default_photo.a573b6549d35f288d82d.jpg",S=function(){var r=(0,s.UO)().movieId,n=(0,o.useState)([]),e=(0,a.Z)(n,2),i=e[0],d=e[1];if((0,o.useEffect)((function(){var n=function(){var n=(0,t.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,G.uV)(r);case 3:e=n.sent,d(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[r]),i)return(0,g.jsxs)(u.xu,{mt:10,children:[(0,g.jsx)(l.X,{as:"h2",size:"lg",color:"green.400",mb:4,children:"Movie Cast"}),(0,g.jsx)(k,{minChildWidth:180,spacing:8,children:i.map((function(r){return(0,g.jsxs)(y.Z,{boxShadow:"dark-lg",rounded:"md",children:[(0,g.jsx)(j.E,{src:null===r.profile_path?N:"https://image.tmdb.org/t/p/w300".concat(r.profile_path),alt:r.original_name,objectFit:"cover",h:300,borderTopRadius:"md"}),(0,g.jsxs)(_.e,{p:4,textAlign:"center",children:[(0,g.jsx)(C.x,{py:"2",fontSize:"sm",fontWeight:700,children:r.name}),(0,g.jsxs)(C.x,{py:"2",fontSize:"sm",children:["Character: ",r.character]})]})]},r.id)}))})]})}},1933:function(r,n,e){e.d(n,{Y5:function(){return u},uV:function(){return l},wr:function(){return s}});var t=e(5861),a=e(4687),i=e.n(a),c=e(1243),o="f4f004cf00175f9c9d985cec6ba8ee29";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var r=(0,t.Z)(i().mark((function r(){var n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("trending/movie/day?api_key=".concat(o));case 2:return n=r.sent,r.abrupt("return",n.data.results);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),u=function(){var r=(0,t.Z)(i().mark((function r(n){var e;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(n,"?api_key=").concat(o));case 2:return e=r.sent,r.abrupt("return",e.data);case 4:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),l=function(){var r=(0,t.Z)(i().mark((function r(n){var e;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(n,"/credits?api_key=").concat(o));case 2:return e=r.sent,r.abrupt("return",e.data.cast);case 4:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}()},2625:function(r,n,e){e.d(n,{XQ:function(){return a}});var t=e(6992);Object.freeze(["base","sm","md","lg","xl","2xl"]);function a(r,n){return Array.isArray(r)?r.map((function(r){return null===r?null:n(r)})):(0,t.Kn)(r)?Object.keys(r).reduce((function(e,t){return e[t]=n(r[t]),e}),{}):null!=r?n(r):null}},9696:function(r,n,e){e.d(n,{e:function(){return d}});var t=e(1413),a=e(4925),i=e(2217),c=e(6992),o=e(5597),s=e(1665),u=e(184),l=["className"],d=(0,o.G)((function(r,n){var e=r.className,o=(0,a.Z)(r,l),d=(0,i.v)();return(0,u.jsx)(s.m.div,(0,t.Z)({ref:n,className:(0,c.cx)("chakra-card__body",e),__css:d.body},o))}))},2217:function(r,n,e){e.d(n,{Y:function(){return c},v:function(){return o}});var t=e(9439),a=(0,e(9416).eC)("Card"),i=(0,t.Z)(a,2),c=i[0],o=i[1]},5090:function(r,n,e){e.d(n,{Z:function(){return m}});var t=e(1413),a=e(4925),i=e(2217),c=e(6992),o=e(5597),s=e(2996),u=e(2481),l=e(1665),d=e(184),f=["className","children","direction","justify","align"],m=(0,o.G)((function(r,n){var e=(0,s.Lr)(r),o=e.className,m=e.children,p=e.direction,g=void 0===p?"column":p,v=e.justify,h=e.align,x=(0,a.Z)(e,f),b=(0,u.jC)("Card",r);return(0,d.jsx)(l.m.div,(0,t.Z)((0,t.Z)({ref:n,className:(0,c.cx)("chakra-card",o),__css:(0,t.Z)({display:"flex",flexDirection:g,justifyContent:v,alignItems:h,position:"relative",minWidth:0,wordWrap:"break-word"},b.container)},x),{},{children:(0,d.jsx)(i.Y,{value:b,children:m})}))}))},6640:function(r,n,e){e.d(n,{E:function(){return g}});var t=e(1413),a=e(4925),i=e(7762),c=e(5597),o=e(184),s=["htmlWidth","htmlHeight","alt"],u=(0,c.G)((function(r,n){var e=r.htmlWidth,i=r.htmlHeight,c=r.alt,u=(0,a.Z)(r,s);return(0,o.jsx)("img",(0,t.Z)({width:e,height:i,ref:n,alt:c},u))}));u.displayName="NativeImage";var l=e(9439),d=e(9205),f=e(2791);var m=e(1665),p=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"];var g=(0,c.G)((function(r,n){var e=r.fallbackSrc,c=r.fallback,s=r.src,g=r.srcSet,v=r.align,h=r.fit,x=r.loading,b=r.ignoreFallback,Z=r.crossOrigin,w=r.fallbackStrategy,k=void 0===w?"beforeLoadOrError":w,y=r.referrerPolicy,j=(0,a.Z)(r,p),_=null!=x||b||!(void 0!==e||void 0!==c),C=function(r){var n=r.loading,e=r.src,t=r.srcSet,a=r.onLoad,i=r.onError,c=r.crossOrigin,o=r.sizes,s=r.ignoreFallback,u=(0,f.useState)("pending"),m=(0,l.Z)(u,2),p=m[0],g=m[1];(0,f.useEffect)((function(){g(e?"loading":"pending")}),[e]);var v=(0,f.useRef)(),h=(0,f.useCallback)((function(){if(e){x();var r=new Image;r.src=e,c&&(r.crossOrigin=c),t&&(r.srcset=t),o&&(r.sizes=o),n&&(r.loading=n),r.onload=function(r){x(),g("loaded"),null==a||a(r)},r.onerror=function(r){x(),g("failed"),null==i||i(r)},v.current=r}}),[e,c,t,o,a,i,n]),x=function(){v.current&&(v.current.onload=null,v.current.onerror=null,v.current=null)};return(0,d.G)((function(){if(!s)return"loading"===p&&h(),function(){x()}}),[p,h,s]),s?"loaded":p}((0,t.Z)((0,t.Z)({},r),{},{crossOrigin:Z,ignoreFallback:_})),G=function(r,n){return"loaded"!==r&&"beforeLoadOrError"===n||"failed"===r&&"onError"===n}(C,k),N=(0,t.Z)({ref:n,objectFit:h,objectPosition:v},_?j:function(r){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=Object.assign({},r),a=(0,i.Z)(e);try{for(a.s();!(n=a.n()).done;){var c=n.value;c in t&&delete t[c]}}catch(o){a.e(o)}finally{a.f()}return t}(j,["onError","onLoad"]));return G?c||(0,o.jsx)(m.m.img,(0,t.Z)({as:u,className:"chakra-image__placeholder",src:e},N)):(0,o.jsx)(m.m.img,(0,t.Z)({as:u,src:s,srcSet:g,crossOrigin:Z,loading:x,referrerPolicy:y,className:"chakra-image"},N))}));g.displayName="Image"},2715:function(r,n,e){e.d(n,{x:function(){return f}});var t=e(1413),a=e(4925),i=e(5597),c=e(2481),o=e(2996),s=e(1665),u=e(6992);var l=e(184),d=["className","align","decoration","casing"],f=(0,i.G)((function(r,n){var e=(0,c.mq)("Text",r),i=(0,o.Lr)(r),f=(i.className,i.align,i.decoration,i.casing,(0,a.Z)(i,d)),m=function(r){var n=Object.assign({},r);for(var e in n)void 0===n[e]&&delete n[e];return n}({textAlign:r.align,textDecoration:r.decoration,textTransform:r.casing});return(0,l.jsx)(s.m.p,(0,t.Z)((0,t.Z)((0,t.Z)({ref:n,className:(0,u.cx)("chakra-text",r.className)},m),f),{},{__css:e}))}));f.displayName="Text"}}]);
//# sourceMappingURL=147.310af674.chunk.js.map