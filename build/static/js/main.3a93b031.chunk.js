(this["webpackJsonplandingpage-react-template"]=this["webpackJsonplandingpage-react-template"]||[]).push([[0],{154:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(27),c=t.n(r),i=(t(53),t(1)),s=t(2),o=t(4),m=t(3),d=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={transform:null},e.componentDidMount=function(){window.addEventListener("scroll",e.handleScroll)},e.componentWillUnmount=function(){window.removeEventListener("scroll",e.handleScroll)},e.handleScroll=function(){if(window.pageYOffset>=80){e.setState({transform:10})}else e.setState({transform:null})},e}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{id:"menu",className:this.state.transform?"navbar navbar-default navbar-expand-md navbar-fixed-top active":"navbar navbar-expand-md navbar-default navbar-fixed-top"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"navbar-header"},l.a.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1"}," ",l.a.createElement("span",{className:"sr-only"},"Toggle navigation")," ",l.a.createElement("span",{className:"icon-bar"})," ",l.a.createElement("span",{className:"icon-bar"})," ",l.a.createElement("span",{className:"icon-bar"})," "),l.a.createElement("a",{className:"navbar-brand page-scroll",href:"#page-top"},"Microbic Pro")," "),l.a.createElement("div",{className:"collapse navbar-collapse",id:"bs-example-navbar-collapse-1"},l.a.createElement("ul",{className:"nav navbar-nav navbar-right"},l.a.createElement("li",null,l.a.createElement("a",{href:"#features",className:"page-scroll"},"Features")),l.a.createElement("li",null,l.a.createElement("a",{href:"#about",className:"page-scroll"},"About")),l.a.createElement("li",null,l.a.createElement("a",{href:"#team",className:"page-scroll"},"Team")),l.a.createElement("li",null,l.a.createElement("a",{href:"#testimonials",className:"page-scroll"},"Testimonials")),l.a.createElement("li",null,l.a.createElement("a",{href:"#clients",className:"page-scroll"},"Partners")),l.a.createElement("li",null,l.a.createElement("a",{href:"#contact",className:"page-scroll"},"Contact"))))))}}]),t}(n.Component),u=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("header",{id:"header"},l.a.createElement("div",{className:"hero has-bg-image"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-8 box-txt"},l.a.createElement("h3",null,this.props.data?this.props.data.title:"Loading .."),l.a.createElement("p",null,this.props.data?this.props.data.paragraph:"Loading .."),l.a.createElement("div",{className:"down"},l.a.createElement("a",{href:""},l.a.createElement("i",{className:"fa fa-android txt-green","aria-hidden":"true"}),"Play Store"),l.a.createElement("a",null,l.a.createElement("i",{className:"fa fa-apple txt-white","aria-hidden":"true"}),"Apple Store")),l.a.createElement("h4",{className:"txt-uniq"},"Download Now on")),l.a.createElement("div",{className:"col-sm-4 box-img text-center"},l.a.createElement("img",{src:"images/intro-screen.png",alt:""}))))))}}]),t}(n.Component),p=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"features",className:"text-center"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col-md-10 col-md-offset-1 section-title"},l.a.createElement("h2",null,"Features")),l.a.createElement("div",{className:"row"},this.props.data?this.props.data.map((function(e,a){return l.a.createElement("div",{key:"".concat(e.title,"-").concat(a),className:"col-xs-6 col-md-3"}," ",l.a.createElement("i",{className:e.icon}),l.a.createElement("h3",null,e.title),l.a.createElement("p",null,e.text))})):"Loading...")))}}]),t}(n.Component),E=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"about"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-md-6"}," ",l.a.createElement("img",{src:"img/about.jpg",className:"img-responsive",alt:""})," "),l.a.createElement("div",{className:"col-xs-12 col-md-6"},l.a.createElement("div",{className:"about-text"},l.a.createElement("h2",null,"About Us"),l.a.createElement("p",null,this.props.data?this.props.data.paragraph:"loading..."),l.a.createElement("h3",null,"Why Choose MicrobicPro ?"),l.a.createElement("div",{className:"list-style"},l.a.createElement("div",{className:"col-lg-6 col-sm-6 col-xs-12"},l.a.createElement("ul",null,this.props.data?this.props.data.Why.map((function(e,a){return l.a.createElement("li",{key:"".concat(e,"-").concat(a)},e)})):"loading")),l.a.createElement("div",{className:"col-lg-6 col-sm-6 col-xs-12"},l.a.createElement("ul",null,this.props.data?this.props.data.Why2.map((function(e,a){return l.a.createElement("li",{key:"".concat(e,"-").concat(a)}," ",e)})):"loading"))))))))}}]),t}(n.Component),h=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"testimonials"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"section-title text-center"},l.a.createElement("h2",null,"What our clients say")),l.a.createElement("div",{className:"row"},this.props.data?this.props.data.map((function(e,a){return l.a.createElement("div",{key:"".concat(e.name,"-").concat(a),className:"col-md-4"},l.a.createElement("div",{className:"testimonial"},l.a.createElement("div",{className:"testimonial-image"}," ",l.a.createElement("img",{src:e.img,alt:""})," "),l.a.createElement("div",{className:"testimonial-content"},l.a.createElement("p",null,'"',e.text,'"'),l.a.createElement("div",{className:"testimonial-meta"}," - ",e.name," "))))})):"loading")))}}]),t}(n.Component),f=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"team",className:"text-center"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col-md-8 col-md-offset-2 section-title"},l.a.createElement("h2",null,"Meet the Team"),l.a.createElement("p",null,"A Team of intelligent personalities.")),l.a.createElement("div",{id:"row"},this.props.data?this.props.data.map((function(e,a){return l.a.createElement("div",{key:"".concat(e.name,"-").concat(a),className:"col-sm-6 team"},l.a.createElement("div",{className:"thumbnail"}," ",l.a.createElement("img",{src:e.img,alt:"...",className:"team-img"}),l.a.createElement("div",{className:"caption"},l.a.createElement("h4",null,e.name),l.a.createElement("p",null,e.job))))})):"loading")))}}]),t}(n.Component),g=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{id:"contact"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"section-title"},l.a.createElement("h2",null,"Get In Touch"),l.a.createElement("p",null,"Please fill out the form below to send us an email and we will get back to you as soon as possible.")),l.a.createElement("form",{name:"sentMessage",id:"contactForm",noValidate:!0},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",id:"name",className:"form-control",placeholder:"Name",required:"required"}),l.a.createElement("p",{className:"help-block text-danger"}))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"email",id:"email",className:"form-control",placeholder:"Email",required:"required"}),l.a.createElement("p",{className:"help-block text-danger"})))),l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{name:"message",id:"message",className:"form-control",rows:"4",placeholder:"Message",required:!0}),l.a.createElement("p",{className:"help-block text-danger"})),l.a.createElement("div",{id:"success"}),l.a.createElement("button",{type:"submit",className:"btn btn-custom btn-lg"},"Send Message")))),l.a.createElement("div",{className:"col-md-3 col-md-offset-1 contact-info"},l.a.createElement("div",{className:"contact-item"},l.a.createElement("h3",null,"Contact Info"),l.a.createElement("p",null,l.a.createElement("span",null,l.a.createElement("i",{className:"fa fa-map-marker"})," Address"),this.props.data?this.props.data.address:"loading")),l.a.createElement("div",{className:"contact-item"},l.a.createElement("p",null,l.a.createElement("span",null,l.a.createElement("i",{className:"fa fa-phone"})," Phone")," ",this.props.data?this.props.data.phone:"loading")),l.a.createElement("div",{className:"contact-item"},l.a.createElement("p",null,l.a.createElement("span",null,l.a.createElement("i",{className:"fa fa-envelope-o"})," Email")," ",this.props.data?this.props.data.email:"loading"))),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"social"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:this.props.data?this.props.data.facebook:"/"},l.a.createElement("i",{className:"fa fa-facebook"}))),l.a.createElement("li",null,l.a.createElement("a",{href:this.props.data?this.props.data.twitter:"/"},l.a.createElement("i",{className:"fa fa-twitter"}))),l.a.createElement("li",null,l.a.createElement("a",{href:this.props.data?this.props.data.youtube:"/"},l.a.createElement("i",{className:"fa fa-youtube"}))))))))),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"container content"},l.a.createElement("div",{className:"subscribe"},l.a.createElement("h1",null,"Subscribe to get the latest ",l.a.createElement("span",null,"MicrobicPro updates"),"."),l.a.createElement("form",null,l.a.createElement("input",{type:"email",placeholder:"Your email address"}),l.a.createElement("input",{type:"submit",value:"Subscribe"}))))),l.a.createElement("div",{id:"footer"},l.a.createElement("div",{className:"container text-center"},l.a.createElement("p",null,"\xa9 2020 MicrobicPro."))))}}]),t}(n.Component),b=t(46),v=t(47),N=t(28),y={labels:["present","2050"],datasets:[{label:"Total Deaths From AMR worldwide",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:[7e5,1e7]}]},w={paragraphs:["Anti Microbial resistance causes over 700, 000 deaths globally. This is projected to reach at least 10 million by 2050","Infectious disease is the leading cause of death in Nigeria (66%)."]},j=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"stats",className:"p-3 pt-5"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-md-6"},l.a.createElement(v.HorizontalBar,{data:y})),l.a.createElement("div",{className:"col-xs-12 col-md-6 p-3"},w?w.paragraphs.map((function(e){return l.a.createElement("p",null,e)})):"Loading"))))}}]),t}(n.Component),O=t(16),x=t.n(O),k=t(17),C=t.n(k),P=1e3,D=67,A=49,M=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"reach",className:"text-center"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col-md-10 col-md-offset-1 section-title"},l.a.createElement("h2",null,"Our Reach")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12 col-md-4 container bg-white shadow"},l.a.createElement(x.a,{end:P,redraw:!0},(function(e){var a=e.countUpRef,t=e.start;return l.a.createElement(C.a,{onChange:t,delayedCall:!0},l.a.createElement("span",{ref:a}))})),l.a.createElement("p",null,"Downloads")),l.a.createElement("div",{className:"col-sm-12 col-md-4 container bg-white shadow"},l.a.createElement(x.a,{end:D,redraw:!0},(function(e){var a=e.countUpRef,t=e.start;return l.a.createElement(C.a,{onChange:t,delayedCall:!0},l.a.createElement("span",{ref:a}))})),l.a.createElement("p",null,"Hospitals Served")),l.a.createElement("div",{className:"col-sm-12 col-md-4 container bg-white shadow"},l.a.createElement(x.a,{end:A,redraw:!0},(function(e){var a=e.countUpRef,t=e.start;return l.a.createElement(C.a,{onChange:t,delayedCall:!0},l.a.createElement("span",{ref:a}))})),l.a.createElement("p",null,"Community Phamarcies")))))}}]),t}(n.Component),S=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"clients"},l.a.createElement("div",{className:"container text-center"},l.a.createElement("div",{className:"col-md-10 col-md-offset-1 section-title"},l.a.createElement("h2",null,"Our Partners")),l.a.createElement("div",{className:"row"},this.props.data?this.props.data.clients.map((function(e){return l.a.createElement("div",{className:"col-sm-12 col-md-2"},l.a.createElement("img",{src:e.img,alt:"...",className:"client-img"}))})):"loading")))}}]),t}(n.Component),T=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={landingPageData:{}},e}return Object(s.a)(t,[{key:"getlandingPageData",value:function(){this.setState({landingPageData:b,statData:N})}},{key:"componentDidMount",value:function(){this.getlandingPageData()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement(u,{data:this.state.landingPageData.Header}),l.a.createElement(j,null),l.a.createElement(p,{data:this.state.landingPageData.Features}),l.a.createElement(E,{data:this.state.landingPageData.About}),l.a.createElement(M,{data:this.state.landingPageData.Reaches}),l.a.createElement(S,{data:this.state.landingPageData.Clients}),l.a.createElement(h,{data:this.state.landingPageData.Testimonials}),l.a.createElement(f,{data:this.state.landingPageData.Team}),l.a.createElement(g,{data:this.state.landingPageData.Contact}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},28:function(e){e.exports=JSON.parse("{}")},46:function(e){e.exports=JSON.parse('{"Clients":{"clients":["image1","image2"]},"Reaches":{"Down":1000,"Hosp":86,"Comm":37},"Header":{"title":"Promoting Rational Anti-Microbial Medicines Use","paragraph":"The mobile application that hopes to assist healthcare providers in the provision of empirical therapy for infectious diseases in real-time."},"About":{"paragraph":"We are a healthcare solutions company based in Nigeria. We remain committed towards contributing to Nigeria\u2019s cause of achieving the targets of Sustainable Development Goal 3: Good health and well-being by providing healthcare professionals with expanded access to quality healthcare point-of-reference resources and guidance to facilitate infection diagnosis, treatment and control.","Why":["Improve clinical outcome","Promotes rational use of Antimicrobials","Reduce treatment cost to patient"],"Why2":["Limits spread of Antimicrobial resistance","Reduce Antimicrobial consumption"]},"Services":[{"icon":"fa fa-wordpress","name":"Lorem ipsum dolor","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."},{"icon":"fa fa-cart-arrow-down","name":"Consectetur adipiscing","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."},{"icon":"fa fa-cloud-download","name":"Lorem ipsum dolor","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."}],"Testimonials":[{"img":"img/waje.jpg","text":"\\"MicrobicPro simplifies the tasks of initiating emperical therapy by providing easy access to current guidelines and antibiograms.\\"","name":"Wale Agbaje"}],"Team":[{"img":"img/ayo.jpg","name":"Hassan Diyaolu","job":"CEO/Co-founder"},{"img":"img/const.jpg","name":"Constance Edesiri","job":"Brand/Marketing Manager"}],"Contact":{"address":"2 olusesi close carwash abeokuta","phone":"+234 809171441","email":"info@microbicpro.com","facebook":"fb.com","twitter":"twitter.com","youtube":"youtube.com"},"Features":[{"icon":"fa fa-list-alt","title":"Giudelines","text":"National infectious disease treatment guidelines."},{"icon":"fa fa-drug","title":"Antibiograms","text":"general and specific location antibiogram data."},{"icon":"fa fa-battery","title":"Efficacy Rankings","text":"Automatic Sample based Antibiotics efficacy ranking."},{"icon":"fa fa-gear","title":"Tools","text":"All other MicrobicPro tools."}]}')},48:function(e,a,t){e.exports=t(154)},53:function(e,a,t){}},[[48,1,2]]]);
//# sourceMappingURL=main.3a93b031.chunk.js.map