(this["webpackJsonpjake-lashenik-portfolio"]=this["webpackJsonpjake-lashenik-portfolio"]||[]).push([[0],{16:function(e,t,s){},17:function(e,t,s){},27:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),i=s(9),r=s.n(i),o=(s(27),s(34)),n=s.p+"static/media/home.3b69b258.svg",l=s.p+"static/media/work.dcab95a0.svg",d=s.p+"static/media/about.f1aa6c9a.svg",j=s.p+"static/media/resumenav.64247ac3.svg",h=s(0),b=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(o.a,{fixed:"top",className:" nav d-flex justify-content-center",children:Object(h.jsxs)("div",{className:"navcontain",children:[Object(h.jsx)("div",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(h.jsx)("img",{className:"navhome",src:n,alt:"home"})}),Object(h.jsx)("div",{children:Object(h.jsx)("a",{href:"#about",children:Object(h.jsx)("img",{className:"navabout",src:d,alt:"about"})})}),Object(h.jsx)("div",{children:Object(h.jsx)("a",{href:"#work",children:Object(h.jsx)("img",{className:"navwork",src:l,alt:"work"})})}),Object(h.jsx)("div",{children:Object(h.jsx)("a",{target:"_blank",href:"https://drive.google.com/file/d/1qWfI4xuKsbo4cv1dX5e9IHmsA8XTs-Q3/view?usp=sharing",children:Object(h.jsx)("img",{className:"navresume",src:j,alt:"resume"})})})]})})})},m=(s(16),s(2)),u=s(8),g=function(e){var t=Object(a.useState)({isPlaying:!1,progress:0,speed:1,isMuted:!1}),s=Object(u.a)(t,2),c=s[0],i=s[1];Object(a.useEffect)((function(){c.isPlaying?e.current.play():e.current.pause()}),[c.isPlaying,e]);return Object(a.useEffect)((function(){c.isMuted?e.current.muted=!0:e.current.muted=!1}),[c.isMuted,e]),{playerState:c,togglePlay:function(){i(Object(m.a)(Object(m.a)({},c),{},{isPlaying:!c.isPlaying}))},handleOnTimeUpdate:function(){var t=e.current.currentTime/e.current.duration*100;i(Object(m.a)(Object(m.a)({},c),{},{progress:t}))},handleVideoProgress:function(t){var s=Number(t.target.value);e.current.currentTime=e.current.duration/100*s,i(Object(m.a)(Object(m.a)({},c),{},{progress:s}))},handleVideoSpeed:function(t){var s=Number(t.target.value);e.current.playbackRate=s,i(Object(m.a)(Object(m.a)({},c),{},{speed:s}))},toggleMute:function(){i(Object(m.a)(Object(m.a)({},c),{},{isMuted:!c.isMuted}))}}},x=(s(31),function(e){var t=e.VideoSource,s=Object(a.useRef)(null),c=g(s),i=c.playerState,r=c.togglePlay,o=c.handleOnTimeUpdate,n=c.handleVideoProgress,l=c.handleVideoSpeed,d=c.toggleMute;return Object(h.jsx)("div",{className:"container-video",children:Object(h.jsxs)("div",{className:"video-wrapper",children:[Object(h.jsx)("video",{src:t,ref:s,onTimeUpdate:o}),Object(h.jsxs)("div",{className:"controls",children:[Object(h.jsx)("div",{className:"actions",children:Object(h.jsx)("button",{onClick:r,children:i.isPlaying?Object(h.jsx)("i",{className:"bx bx-pause"}):Object(h.jsx)("i",{className:"bx bx-play"})})}),Object(h.jsx)("input",{type:"range",min:"0",max:"100",value:i.progress,onChange:function(e){return n(e)}}),Object(h.jsxs)("select",{className:"velocity",value:i.speed,onChange:function(e){return l(e)},children:[Object(h.jsx)("option",{value:"0.50",children:"0.50x"}),Object(h.jsx)("option",{value:"1",children:"1x"}),Object(h.jsx)("option",{value:"1.25",children:"1.25x"}),Object(h.jsx)("option",{value:"2",children:"2x"})]}),Object(h.jsx)("button",{className:"mute-btn",onClick:d,children:i.isMuted?Object(h.jsx)("i",{className:"bx bxs-volume-mute"}):Object(h.jsx)("i",{className:"bx bxs-volume-full"})})]})]})})}),p=s.p+"static/media/JakeLogo.be099d23.svg",O=s.p+"static/media/git.0f039362.svg",v=s.p+"static/media/linkedin.231ac21d.svg",f=s.p+"static/media/mail.fffbb8d7.svg",N=(s(17),function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"footer-container",children:[Object(h.jsxs)("div",{className:"footer-icons",children:[Object(h.jsx)("a",{target:"_blank",href:"https://github.com/jmlashen",children:Object(h.jsx)("img",{className:"github",src:O,alt:"footer image"})}),Object(h.jsx)("a",{href:"mailto: jmlashen@gmail.com",children:Object(h.jsx)("img",{className:"mail",src:f,alt:"footer image"})}),Object(h.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/jake-lashenik/",children:Object(h.jsx)("img",{className:"linkedin",src:v,alt:"footer image"})})]}),Object(h.jsx)("div",{children:Object(h.jsx)("h3",{children:"This website is not a template. Designed and developed by me, for you!"})})]})})}),k=s(35),w=s.p+"static/media/caddie.84c153fb.png",y=s.p+"static/media/C51.d726f1e0.svg",C=s.p+"static/media/workhead.25d95ff3.svg",T=s.p+"static/media/mobile.2c907cc0.svg",P=s.p+"static/media/JakeGuitar.63171853.svg",S=s.p+"static/media/desktop.a6c7a507.svg",I=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{id:"work",className:"content"}),Object(h.jsx)("div",{className:"mainworkcontainer",children:Object(h.jsx)("div",{className:"workhead-container",children:Object(h.jsx)("img",{className:"workhead",src:C,alt:"Card Caddie logo"})})}),Object(h.jsx)("div",{className:"worksection",children:Object(h.jsx)("div",{className:"workbox",children:Object(h.jsxs)("div",{className:"caddie-content",children:[Object(h.jsx)("div",{className:"workmain-left",children:Object(h.jsxs)("div",{className:"first-box",children:[Object(h.jsx)("div",{className:"workcontain-main"}),Object(h.jsx)("div",{className:"c51logo-top",children:Object(h.jsx)("img",{className:"c51",src:y,alt:"Card Caddie logo"})}),Object(h.jsxs)("div",{className:"C51-description",children:[Object(h.jsx)("div",{children:Object(h.jsx)("h4",{className:"h4",children:"Cohort-51 Website"})}),Object(h.jsxs)("h6",{className:"h6",children:["This group project was the most rewarding project I've ever had the pleasure of working on. Our goal was to showcase our software development and UI/UX skills with a personality and flair to facilitate getting hired quickly by an employer that is a good fit. With significant group planning, data collection, and user testing, we learned a lot about UX and the processes that precede the launch of the final product. We even revealed a pain point in the School curriculum relating to graduation requirements during the process!",Object(h.jsx)("h6",{className:"h6",children:"Everyone in the group equally made significant contributions. My key contributions include logo design, the design and styling of the developer section, and prototyping. One favorite piece of code was the helper function I wrote that changes the colored ring around a developer's photo. The color-coordinated conditional was to help distinguish between one of two developer types. We had such a terrific time creating this website together!"})]})]})]})}),Object(h.jsxs)("div",{className:"workbuttons",children:[Object(h.jsx)("div",{children:Object(h.jsx)("a",{target:"_blank",href:"https://nss-day-cohort-51.github.io/",children:Object(h.jsx)(k.a,{size:"lg",children:"Try It Out"})})}),Object(h.jsx)("div",{children:Object(h.jsx)("a",{target:"_blank",href:"https://github.com/nss-day-cohort-51/nss-day-cohort-51.github.io",children:Object(h.jsx)(k.a,{Button:!0,size:"lg",children:"View Repo"})})})]}),Object(h.jsx)("div",{className:"first-box-video",children:Object(h.jsx)("div",{className:"caddie-video-container",children:Object(h.jsx)(x,{VideoSource:"https://res.cloudinary.com/djnk0ey5p/video/upload/v1642519654/c51demo_fjo5ic.mp4"})})}),Object(h.jsx)("div",{className:"workmain-left",children:Object(h.jsxs)("div",{className:"first-box",children:[Object(h.jsx)("div",{className:"workcontain-main"}),Object(h.jsxs)("div",{className:"C51-description",children:[Object(h.jsx)("div",{className:"c51logo-top-caddie",children:Object(h.jsx)("img",{className:"caddie",src:w,alt:"Card Caddie logo"})}),Object(h.jsx)("div",{children:Object(h.jsx)("h4",{className:"h4",children:"Card Caddie"})}),Object(h.jsx)("h6",{className:"h6",children:"This user-specific app helps golfers keep track of scores and reflections from their rounds. Users can also add a new course and crowdsource courses from other users. Card Caddie has full CRUD capability (React, API fetch calls, React-Routing, and JSON server) with styling achieved through CSS, Cloudinary, and Reactstrap for an approachable user experience."})]})]})}),Object(h.jsxs)("div",{className:"workbuttons",children:[Object(h.jsx)("div",{children:Object(h.jsx)("a",{target:"_blank",href:"https://card-caddie.herokuapp.com/",children:Object(h.jsx)(k.a,{Button:!0,size:"lg",children:"Try It Out"})})}),Object(h.jsx)("div",{children:Object(h.jsx)("a",{target:"_blank",href:"https://github.com/jmlashen/cardcaddie",children:Object(h.jsx)(k.a,{Button:!0,size:"lg",children:"View Repo"})})})]}),Object(h.jsx)("div",{className:"first-box-video",children:Object(h.jsx)("div",{className:"caddie-video-container",children:Object(h.jsx)(x,{VideoSource:"https://res.cloudinary.com/djnk0ey5p/video/upload/v1641503833/My_Movie_2_aagjvj.mp4"})})}),Object(h.jsx)("div",{className:"first-box",children:Object(h.jsxs)("div",{className:"C51-description",children:[Object(h.jsxs)("div",{className:"prototype",children:[Object(h.jsx)("div",{className:"logo-prototype-mobile",children:Object(h.jsx)("a",{target:"_blank",href:"https://www.figma.com/proto/5TqtET6dRZyc1YjqgODj0X/C-51-Prototype---Mobile?page-id=0%3A1&node-id=2%3A818&viewport=241%2C48%2C0.34&scaling=scale-down&starting-point-node-id=2%3A818",children:Object(h.jsx)("img",{className:"mobile",src:T,alt:"prototype mobile"})})}),Object(h.jsx)("div",{className:"logo-prototype-desktop",children:Object(h.jsx)("a",{target:"_blank",href:"https://www.figma.com/proto/RjPnJ4xrvjgEBBPvwayI9M/C-51-Prototype---Desktop?page-id=0%3A1&node-id=54%3A700&viewport=241%2C48%2C0.18&scaling=scale-down&starting-point-node-id=54%3A700&show-proto-sidebar=1",children:Object(h.jsx)("img",{className:"desktop",src:S,alt:"prototype desktop"})})})]}),Object(h.jsxs)("div",{className:"proto-head",children:[Object(h.jsx)("h4",{className:"h4",children:"Prototypes"})," ",Object(h.jsx)("div",{className:"planning",children:Object(h.jsxs)("h6",{children:["view all planning resources for the Cohort-51 Website Group Project  ",Object(h.jsx)("a",{target:"_blank",href:"https://github.com/nss-day-cohort-51/nss-day-cohort-51.github.io",children:"here."})]})})]}),Object(h.jsx)("h6",{className:"h6",children:"Based on user data and group planning for the Cohort-51 Website, I created mobile and desktop prototypes for the project using Figma. Prototyping is one of my favorite processes that precede the launch of the final product and helps present a clear vision."})]})})]})})}),Object(h.jsx)("div",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},className:"jakeguitar",children:Object(h.jsx)("img",{src:P,alt:"c51 logo"})})]})},M=s.p+"static/media/AboutMe.be708712.svg",_=s.p+"static/media/group.b856c356.svg",A=s.p+"static/media/art2.ed540134.PNG",B=s.p+"static/media/aboutPro.5bb1a3a2.jpg",R=s.p+"static/media/techTools.1b718be5.svg",U=s.p+"static/media/uiux.64bf3c66.svg",J=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{id:"about",className:"about-section",children:Object(h.jsxs)("div",{className:"about-box",children:[Object(h.jsx)("div",{className:"amoutme",children:Object(h.jsx)("img",{className:"aboutme-img",src:M,alt:"c51 logo"})}),Object(h.jsx)("div",{className:"about-content2",children:Object(h.jsxs)("div",{className:"first-box-about",children:[Object(h.jsxs)("div",{className:"about-green-box",children:[Object(h.jsx)("div",{className:"jakeAbout-img",children:Object(h.jsx)("img",{className:"JakeAbout",src:B,alt:"c51 logo"})}),Object(h.jsxs)("div",{className:"about-text-main",children:[Object(h.jsx)("h1",{children:"My colleagues have described me as:"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:"a motivator"}),Object(h.jsx)("li",{children:"great in a team"}),Object(h.jsx)("li",{children:"always striving to be fair"}),Object(h.jsx)("li",{children:"a true creative"}),Object(h.jsx)("li",{children:"humble"}),Object(h.jsx)("li",{children:"an infectious personality"}),Object(h.jsx)("li",{children:"naturally a leader"}),Object(h.jsx)("li",{children:"good with challenges"})]}),Object(h.jsx)("div",{className:"aboutgroup",children:Object(h.jsx)("img",{className:"aboutgroup-img",src:_,alt:"c51 logo"})})]})]}),Object(h.jsxs)("div",{className:"about-green-box",children:[Object(h.jsx)("div",{className:"jakeAbout-img",children:Object(h.jsx)("img",{className:"artabout",src:R,alt:"c51 logo"})}),Object(h.jsxs)("div",{className:"tech-text-box",children:[Object(h.jsx)("h1",{className:"about-text-art",children:"Tech and Tools"}),Object(h.jsx)("h6",{className:"about-text2",children:"I enjoy the challenge and ongoing learning process of being a developer. I have established a solid foundation with the language and framework of JavaScript and the use of State, Props, and the browser-independent DOM system of React. My styling and design skills are achieved through my knowledge using CSS, SASS, Figma, and Photoshop. I also have experience with data by building a Back-End using JSON server with fetch calls and testing APIs using Postman. Other tools included Cloudinary for image and video hosting and the best use and practices when using Git."})]})]}),Object(h.jsxs)("div",{className:"about-green-box",children:[Object(h.jsx)("div",{className:"jakeAbout-img",children:Object(h.jsx)("img",{className:"artabout",src:U,alt:"c51 logo"})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"about-text-art",children:"UI/UX"}),Object(h.jsx)("h6",{className:"about-text2",children:"I find myself naturally drawn to the user experience and client-side. With my experiences in collaboration and leadership as an educator, I have always enjoyed the intrinsic rewards of helping others achieve their goals and overcome challenges. The Nashville Software School program challenged our small group to create the Cohort's website. We gained valuable experience learning the principles and processes of UI/UX. From wireframes to prototypes, user testing, informational architecture, and visual hierarchy\u2013we got our hands dirty with every step."})]})]}),Object(h.jsxs)("div",{className:"about-green-box",children:[Object(h.jsx)("div",{className:"jakeAbout-img",children:Object(h.jsx)("img",{className:"artabout",src:A,alt:"c51 logo"})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"about-text-art",children:"Art and Design"}),Object(h.jsx)("h6",{className:"about-text2",children:"My background in design comes from working as a freelance graphic designer. Most of my work is designing album art for several musical artists, including Jason Wade, of Lifehouse. I also have experience working with a diverse set of clients. I have worked with companies and clients ranging from beverage companies to TV shows. Through these interactions, I have gained experience passionately working with clients to best represent their ideas with a finished product we can both be proud of."}),Object(h.jsx)("div",{className:"h6-about",children:Object(h.jsxs)("h6",{className:"h6-about-text",children:["Check out some of my artwork ",Object(h.jsx)("a",{target:"_blank",href:"https://www.instagram.com/jake_diggity/?hl=en",children:"here"})," on Instagram."]})})]})]})]})})]})})})},V=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"footer-container-top",children:[Object(h.jsxs)("div",{className:"footer-icons",children:[Object(h.jsx)("a",{target:"_blank",href:"https://github.com/jmlashen",children:Object(h.jsx)("img",{className:"github",src:O,alt:"footer image"})}),Object(h.jsx)("a",{href:"mailto: jmlashen@gmail.com",children:Object(h.jsx)("img",{className:"mail",src:f,alt:"footer image"})}),Object(h.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/jake-lashenik/",children:Object(h.jsx)("img",{className:"linkedin",src:v,alt:"footer image"})})]}),Object(h.jsx)("div",{children:Object(h.jsx)("h3",{children:"This website is not a template. Designed and developed by me, for you!"})})]})})},W=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"navbar-container",children:Object(h.jsx)(b,{id:"App"})}),Object(h.jsx)("div",{className:"disclaimer",children:Object(h.jsx)("h6",{className:"disclaimer-text",children:"Check back soon for mobile view. Best viewed on desktop. Thanks for your paitence!"})}),Object(h.jsxs)("div",{className:"landcontainer",children:[Object(h.jsx)("div",{className:"jake-logo-containter",children:Object(h.jsx)("img",{className:"jakelogo",src:p,alt:"C51"})}),Object(h.jsx)("div",{className:"disclaimer",children:Object(h.jsx)("h6",{className:"disclaimer-text",children:"Check back soon for mobile view. Best viewed on desktop. Thanks for your paitence!"})}),Object(h.jsx)("div",{className:"main-video-container",children:Object(h.jsx)(x,{VideoSource:"https://res.cloudinary.com/djnk0ey5p/video/upload/v1642173955/Jake_intro_g2ufsq.mp4"})})]}),Object(h.jsxs)("div",{className:"footer-container",children:[Object(h.jsx)("div",{className:"disclaimer",children:Object(h.jsx)("h6",{className:"disclaimer-text",children:"Check back soon for mobile view. Best viewed on desktop. Thanks for your paitence!"})}),Object(h.jsx)(V,{})]}),Object(h.jsx)("div",{className:"disclaimer",children:Object(h.jsx)("h6",{className:"disclaimer-text",children:"Check back soon for mobile view. Best viewed on desktop. Thanks for your paitence!"})}),Object(h.jsx)("div",{children:Object(h.jsx)(J,{})}),Object(h.jsx)("div",{className:"disclaimer",children:Object(h.jsx)("h6",{className:"disclaimer-text",children:"Check back soon for mobile view. Best viewed on desktop. Thanks for your paitence!"})}),Object(h.jsx)(I,{className:"workarea"}),Object(h.jsx)("div",{className:"disclaimer",children:Object(h.jsx)("h6",{className:"disclaimer-text",children:"Check back soon for mobile view. Best viewed on desktop. Thanks for your paitence!"})}),Object(h.jsx)("div",{className:"footer-container",children:Object(h.jsx)(N,{})})]})};r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(W,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.6e4758f0.chunk.js.map