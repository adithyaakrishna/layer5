(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[6107],{96371:function(e,n,t){"use strict";var r=t(19756),a=t(67294),i=(t(25444),t(62347));n.Z=function(e){var n=e.childImageSharp,t=e.extension,l=e.publicURL,m=e.alt,o=(0,r.Z)(e,["childImageSharp","extension","publicURL","alt"]);return n||"svg"!==t?a.createElement(i.G,Object.assign({image:n.gatsbyImageData},o,{alt:m})):a.createElement("div",{className:"old-gatsby-image-wrapper"},a.createElement("img",{src:l,alt:m}))}},71069:function(e,n,t){"use strict";t.r(n);var r=t(67294),a=t(70456),i=t(20092),l=t(36179),m=t(97264),o=t(34967),c=t(69190),s=t(37123),u=t(97956),p=t(38155);n.default=function(){return r.createElement(a.f6,{theme:p.Z},r.createElement(i.Z,null,r.createElement(u.Z,null),r.createElement(l.Z,{title:"Open Source Internship Programs",description:"The Service Mesh Community at Layer5 - Learn, Share, Engage. Join the largest collection of service mesh projects and their maintainers in the world."}),r.createElement(m.Z,null),r.createElement(s.Z,null),r.createElement(c.Z,{category:["internships"]}),r.createElement(o.Z,null)))}},35318:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(67294),a=t(25444),i=t(88449),l=t.n(i),m=t(70456).ZP.div.withConfig({displayName:"pageHeaderstyle__PageHeaderWrapper",componentId:"bliqzc-0"})(["\n        position: relative;\n        overflow: hidden;\n        z-index:1;\n        .page-header {\n            text-align: center;\n            position: relative;\n            height: auto;\n            margin: 3rem auto;\n            padding: 0 1rem 0;\n            z-index: 99;\n            h1 {\n                padding-top: 3rem;\n            }\n        }\n        \n        .feature-image{\n            margin: 2rem auto;\n            max-height: 62.5rem;\n            max-width: 31rem;\n            object-fit: contain;    \n        }\n        .breadcrumbs {\n            display: flex;\n            justify-content: center;\n            margin-top: 1.5rem;  \n            h5 {\n                display: inline-block;\n                margin:0 0.4rem;\n                opacity: .7;\n            }\n            p{\n                margin: 0;\n                display: inline-block;\n            }\n        } \n    }\n"]),o=t(96371),c=function(e,n){return r.createElement(r.Fragment,null,n?r.createElement(a.Link,{to:"/community/members/"+l()(e.name)},r.createElement("span",null,e.name)):r.createElement("span",null,e.name))},s=function(e){var n=e.category,t=e.title,i=e.subtitle,s=e.author,u=e.thumbnail,p=!1;s&&(p=(0,a.useStaticQuery)("1485533831").allMdx.nodes.some((function(e){return e.frontmatter.name==s.name})));return r.createElement(m,null,r.createElement("div",{className:"page-header"},u&&r.createElement("div",{className:"feature-image"},r.createElement(o.Z,Object.assign({},u,{imgStyle:{objectFit:"contain"},alt:t}))),r.createElement("h1",{className:"page-title"},t),i&&r.createElement("h3",null,i),n&&r.createElement("div",{className:"breadcrumbs"},r.createElement("span",null,r.createElement("h5",null,"Category:"),r.createElement("p",{key:n},r.createElement(a.Link,{to:"/blog/category/"+l()(n)},r.createElement("span",null,n)))),s&&r.createElement(r.Fragment,null,r.createElement("span",null,r.createElement("h5",null,"By:"),r.createElement("p",null,c(s,p))))),!n&&s&&r.createElement("div",{className:"breadcrumbs post"},r.createElement("h5",null,"By:"),r.createElement("span",null,c(s,p)))))}},37123:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(67294),a=t(25444),i=t(57067),l=t(35318),m=t(96371),o=t(70456).ZP.div.withConfig({displayName:"ProgramGridstyle__ProgramsPageWrapper",componentId:"sc-1ikyabo-0"})(["\n    \n    margin-top: -2rem;\n\n    .programs-page-wrapper{\n        margin: 4rem 0;\n\n        h5{\n            font-weight: 600;\n            text-align: center;\n        }\n    }\n    .sub-header_wrapper{\n        margin: 1rem 0;\n\n        h5{\n            font-size: 1.1rem; \n            font-weight: 600;\n            color: black;\n        }\n    }\n\n    .icon{\n        height: 12rem;\n        width: 12rem;\n        margin: 0 auto 1.5rem auto;\n        position: relative;\n        \n        img{\n            display: block;\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            margin: auto;\n        }\n    }\n    .sub-section_icon{\n        height: 8rem;\n        width: 8rem;\n    }\n\n    .program{\n        height: 18rem;\n        width: 20rem;\n        padding: 5px;\n        margin: auto;\n        background: rgba(247,247,247,1);\n        justify-content: center;\n        border-radius: 1rem;\n        transition: all 0.2s;\n        transition-timing-function: ease-in-out;\n        \n        &:hover{\n            box-shadow: 0px 4px 20px 2px ",";\n        }\n    }\n    .sub-section_program{\n        width: 18rem;\n        height: 13rem;\n    }\n\n    .programs-col{\n        flex: 0 0 33%;\n        max-width: 100%;\n        margin: 1rem 0;\n    }\n    @media only screen and (max-width:1200px){\n        .programs-col{\n            flex: 0 0 50%;\n        }\n    }\n    @media only screen and (max-width:700px){\n        .programs-col{\n            flex: 0 0 100%;\n        }\n    }\n"],(function(e){return e.theme.shadowLightColor})),c=function(e){var n=e.hide_path,t=e.sub_section,c=(0,a.useStaticQuery)("2376360048"),s=n?"":"Programs",u=[],p=c.allMdx.nodes.filter((function(e){return!(u.indexOf(e.frontmatter.program)>=0)&&(u.push(e.frontmatter.program),!0)}));return r.createElement(o,null,r.createElement(l.Z,{title:"Open Source Internship Programs",subtitle:"Build Your Career at Layer5",path:s}),r.createElement("div",{className:t?"sub-header_wrapper":"programs-page-wrapper"},r.createElement(i.W2,null,r.createElement("div",{className:"program-grid-wrapper"},r.createElement(i.X2,null,p.reverse().map((function(e){var n=e.id,l=e.frontmatter,o=e.fields;return r.createElement(i.JX,{key:n,className:"programs-col"},r.createElement(a.Link,{to:"Layer5"===l.program?o.slug:"/programs/"+l.programSlug},r.createElement("div",{className:"program "+(t?"sub-section_program":"")},r.createElement("div",{className:"icon "+(t?"sub-section_icon":"")},r.createElement(m.Z,Object.assign({},l.thumbnail,{imgStyle:{objectFit:"contain"},alt:l.title}))),r.createElement("h5",null,l.program))))})))),r.createElement("p",null,"Layer5 is driven by its people, who are the stewards of our culture and principles. Join us on the journey to enabling the world's most innovative companies make the transition to cloud navtive and multi-cloud through engineering-empowered automation."))))}},88449:function(e){e.exports=function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}}]);
//# sourceMappingURL=component---src-pages-careers-programs-js-93267b513ccd44b9f5c8.js.map