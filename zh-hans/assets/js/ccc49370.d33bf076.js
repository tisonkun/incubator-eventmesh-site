(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[103],{3146:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var n=a(7294),l=a(6010),r=a(3905),i=a(4973),s=a(6742),o=a(9306),m=a(7277),c=a(1217),d=a(6146),u="blogPostTitle_GeHD",g="blogPostData_291c",v="blogPostDetailsFull_3kfx";var p=function(e){var t,a,p,b=(a=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),E=e.children,h=e.frontMatter,f=e.metadata,_=e.truncated,N=e.isBlogPostPage,k=void 0!==N&&N,Z=f.date,I=f.formattedDate,T=f.permalink,w=f.tags,L=f.readingTime,P=f.title,x=f.editUrl,C=h.author,y=h.image,M=h.keywords,R=h.author_url||h.authorURL,A=h.author_title||h.authorTitle,B=h.author_image_url||h.authorImageURL;return n.createElement(n.Fragment,null,n.createElement(c.Z,{keywords:M,image:y}),n.createElement("article",{className:k?void 0:"margin-bottom--xl"},(p=k?"h1":"h2",n.createElement("header",null,n.createElement(p,{className:u},k?P:n.createElement(s.Z,{to:T},P)),n.createElement("div",{className:(0,l.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:Z},I),L&&n.createElement(n.Fragment,null," \xb7 ",b(L))),n.createElement("div",{className:"avatar margin-vert--md"},B&&n.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:R},n.createElement("img",{src:B,alt:C})),n.createElement("div",{className:"avatar__intro"},C&&n.createElement(n.Fragment,null,n.createElement("div",{className:"avatar__name"},n.createElement(s.Z,{href:R},C)),n.createElement("small",{className:"avatar__subtitle"},A)))))),n.createElement("div",{className:"markdown"},n.createElement(r.Zo,{components:m.Z},E)),(w.length>0||_)&&n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(t={},t[v]=k,t))},w.length>0&&n.createElement("div",{className:"col"},n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),w.map((function(e){var t=e.label,a=e.permalink;return n.createElement(s.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),k&&x&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.Z,{editUrl:x})),!k&&_&&n.createElement("div",{className:"col text--right"},n.createElement(s.Z,{to:f.permalink,"aria-label":"Read more about "+P},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},4147:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var n=a(7294),l=a(6016),r=a(3146),i=a(4973),s=a(6742);var o=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(s.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},m=a(5601),c=a(571),d=a(9306);var u=function(e){var t=e.content,a=e.sidebar,i=t.frontMatter,s=t.metadata,u=s.title,g=s.description,v=s.nextItem,p=s.prevItem,b=i.hide_table_of_contents;return n.createElement(l.Z,{title:u,description:g,wrapperClassName:d.kM.wrapper.blogPages,pageClassName:d.kM.page.blogPostPage},t&&n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("aside",{className:"col col--3"},n.createElement(m.Z,{sidebar:a})),n.createElement("main",{className:"col col--7"},n.createElement(r.Z,{frontMatter:i,metadata:s,isBlogPostPage:!0},n.createElement(t,null)),(v||p)&&n.createElement(o,{nextItem:v,prevItem:p})),!b&&t.toc&&n.createElement("div",{className:"col col--2"},n.createElement(c.Z,{toc:t.toc})))))}},5601:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var n=a(7294),l=a(6010),r=a(6742),i="sidebar_2ahu",s="sidebarItemTitle_2hhb",o="sidebarItemList_2xAf",m="sidebarItem_2UVv",c="sidebarItemLink_1RT6",d="sidebarItemLinkActive_12pM",u=a(4973);function g(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(i,"thin-scrollbar"),"aria-label":(0,u.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(s,"margin-bottom--md")},t.title),n.createElement("ul",{className:o},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:m},n.createElement(r.Z,{isNavLink:!0,to:e.permalink,className:c,activeClassName:d},e.title))}))))}},571:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}});var n=a(7294),l=a(6010);var r=function(e,t,a){var l=(0,n.useState)(void 0),r=l[0],i=l[1];(0,n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var l=0,s=!1,o=document.getElementsByClassName(e);l<o.length&&!s;){var m=o[l],c=m.href,d=decodeURIComponent(c.substring(c.indexOf("#")+1));n.id===d&&(r&&r.classList.remove(t),m.classList.add(t),i(m),s=!0),l+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i="tableOfContents_35-E",s="table-of-contents__link";function o(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(o,{isChild:!0,toc:e.children}))}))):null}var m=function(e){var t=e.toc;return r(s,"table-of-contents__link--active",100),n.createElement("div",{className:(0,l.Z)(i,"thin-scrollbar")},n.createElement(o,{toc:t}))}}}]);