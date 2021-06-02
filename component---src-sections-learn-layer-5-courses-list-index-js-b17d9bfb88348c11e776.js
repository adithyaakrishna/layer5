(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[4307],{83426:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var a=t(67294),r=t(70456).ZP.div.withConfig({displayName:"learn-cardstyle__CardWrapper",componentId:"ka8159-0"})(["\n    max-width:375px;\n    min-height: 335px;\n    margin: auto;\n    border-radius: 1rem;\n\n    .card-link{\n        color: black;\n    }\n\n    .card-parent{\n        border-radius: 2rem;\n    }\n\n    .card-head{\n        display: flex;\n        padding: 1rem;\n        span{\n            background-color: white;\n            border-radius : 1rem;\n            padding: 0 0.6rem;\n            font-size:0.8rem;\n        }\n    }\n\n    .card-desc{\n        padding: 0 1rem;\n        p{\n            font-size: 1rem;\n        }\n    \n    }\n    .card-image{\n        text-align: center;\n        \n        img{\n            height: 100px;\n            width: auto;\n            padding: 1rem;\n        }\n    }\n\n    @media(max-width: 1300px){\n        margin: 1rem auto;\n    }\n"]),l=t(96371),i=t(25444),m=function(e){var n=e.tutorial,t=e.link;return a.createElement(r,null,a.createElement(i.Link,{to:t||n.fields.learnpath,className:"card-link"},a.createElement("div",{style:{backgroundColor:n.frontmatter.themeColor},className:"card-parent"},a.createElement("div",null,a.createElement("div",{className:"card-head"},a.createElement("h3",null,n.frontmatter.title?n.frontmatter.title:n.frontmatter.courseTitle),n.frontmatter.status?a.createElement("p",null,a.createElement("span",null,"New")):null),a.createElement("div",{className:"card-desc"},a.createElement("p",null,n.frontmatter.description),a.createElement("p",null,n.frontmatter.learningPaths," learning paths"))),a.createElement("div",{className:"card-image"},a.createElement(l.Z,Object.assign({},n.frontmatter.cardImage,{alt:n.frontmatter.title}))))))}},96371:function(e,n,t){"use strict";var a=t(19756),r=t(67294),l=(t(25444),t(62347));n.Z=function(e){var n=e.childImageSharp,t=e.extension,i=e.publicURL,m=e.alt,c=(0,a.Z)(e,["childImageSharp","extension","publicURL","alt"]);return n||"svg"!==t?r.createElement(l.G,Object.assign({image:n.gatsbyImageData},c,{alt:m})):r.createElement("div",{className:"old-gatsby-image-wrapper"},r.createElement("img",{src:i,alt:m}))}},35318:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var a=t(67294),r=t(25444),l=t(88449),i=t.n(l),m=t(70456).ZP.div.withConfig({displayName:"pageHeaderstyle__PageHeaderWrapper",componentId:"bliqzc-0"})(["\n        position: relative;\n        overflow: hidden;\n        z-index:1;\n        .page-header {\n            text-align: center;\n            position: relative;\n            height: auto;\n            margin: 3rem auto;\n            padding: 0 1rem 0;\n            z-index: 99;\n            h1 {\n                padding-top: 3rem;\n            }\n        }\n        \n        .feature-image{\n            margin: 2rem auto;\n            max-height: 62.5rem;\n            max-width: 31rem;\n            object-fit: contain;    \n        }\n        .breadcrumbs {\n            display: flex;\n            justify-content: center;\n            margin-top: 1.5rem;  \n            h5 {\n                display: inline-block;\n                margin:0 0.4rem;\n                opacity: .7;\n            }\n            p{\n                margin: 0;\n                display: inline-block;\n            }\n        } \n    }\n"]),c=t(96371),s=function(e,n){return a.createElement(a.Fragment,null,n?a.createElement(r.Link,{to:"/community/members/"+i()(e.name)},a.createElement("span",null,e.name)):a.createElement("span",null,e.name))},o=function(e){var n=e.category,t=e.title,l=e.subtitle,o=e.author,d=e.thumbnail,u=!1;o&&(u=(0,r.useStaticQuery)("1485533831").allMdx.nodes.some((function(e){return e.frontmatter.name==o.name})));return a.createElement(m,null,a.createElement("div",{className:"page-header"},d&&a.createElement("div",{className:"feature-image"},a.createElement(c.Z,Object.assign({},d,{imgStyle:{objectFit:"contain"},alt:t}))),a.createElement("h1",{className:"page-title"},t),l&&a.createElement("h3",null,l),n&&a.createElement("div",{className:"breadcrumbs"},a.createElement("span",null,a.createElement("h5",null,"Category:"),a.createElement("p",{key:n},a.createElement(r.Link,{to:"/blog/category/"+i()(n)},a.createElement("span",null,n)))),o&&a.createElement(a.Fragment,null,a.createElement("span",null,a.createElement("h5",null,"By:"),a.createElement("p",null,s(o,u))))),!n&&o&&a.createElement("div",{className:"breadcrumbs post"},a.createElement("h5",null,"By:"),a.createElement("span",null,s(o,u)))))}},87869:function(e,n,t){"use strict";t.d(n,{g:function(){return a}});var a=t(70456).ZP.div.withConfig({displayName:"blogGridstyle__BlogPageWrapper",componentId:"sc-1m69vla-0"})(["\n\n    .blog-grid-wrapper{\n        margin: 5rem auto;\n    }\n\n    @media only screen and (max-width: 992px) {\n        .blog-page-wrapper{\n            margin-bottom: 5rem;\n        }\n    }\n\n    @media only screen and (max-width: 575px) {\n        .blog-grid-wrapper{\n            margin: 0 auto 5rem;\n        }\n    }\n"])},83748:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var a=t(67294),r=t(57067),l=t(35318),i=t(70456),m=t(87869),c=i.ZP.div.withConfig({displayName:"coursesliststyle__LearnPathWrapper",componentId:"sc-1rs2x9t-0"})(["\n    ",";\n    .course-list-cont {\n        padding: 5rem; \n        button{\n            margin: 2rem;\n        }\n    }\n\n"],m.g),s=t(83426),o=t(22626),d=t(20092),u=t(36179),p=t(97264),g=t(68812),h=t(97956),E=t(38155),f=function(e){return console.log(e.data),a.createElement(i.f6,{theme:E.Z},a.createElement(d.Z,null,a.createElement(h.Z,null),a.createElement(u.Z,{title:"Learn Service Mesh",description:"Learn Service Meshes: Istio, Linkerd, Envoy, Consul, Maesh, Kuma, App Mesh, Citrix, Tanzu Service Mesh",image:"/images/workshops.png"}),a.createElement(p.Z,null),a.createElement(c,null,a.createElement(l.Z,{title:"Learn Layer5 Courses List"}),a.createElement("div",{className:"course-list-cont"},a.createElement(o.Z,{url:"/learn-ng",title:"Go Back"}),a.createElement(r.X2,{className:"learning-path-cards"},e.data.allMdx.nodes.map((function(e,n){return a.createElement(r.JX,{sm:12,md:6,xl:4,key:n},a.createElement(s.Z,{tutorial:e,key:n,link:e.fields.course}))}))))),a.createElement(g.Z,null)))}},88449:function(e){e.exports=function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}}]);
//# sourceMappingURL=component---src-sections-learn-layer-5-courses-list-index-js-b17d9bfb88348c11e776.js.map