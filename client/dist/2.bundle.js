(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{49:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(1),i=n(8),l=n.n(i);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var a=m(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=o.a.div.withConfig({displayName:"RatingStars__StarsContainer",componentId:"sc-1djn8fm-0"})(["unicode-bidi:bidi-override;color:#e0e0e0;font-size:22px;height:22px;line-height:22px;position:relative;padding:0;text-shadow:0px 1px 0 #a2a2a2;&.top{width:","%;color:#80ccc4;padding:0;position:absolute;z-index:1;display:block;top:0;left:0;overflow:hidden;}&.bottom{padding:0;color:#e0e0e0;display:block;z-index:0;}"],(function(e){return e.rating/5*100})),v=o.a.div.withConfig({displayName:"RatingStars__InputStarWrapper",componentId:"sc-1djn8fm-1"})(["fontSize:25px;color:#FDD700;cursor:pointer;"]),y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(i,e);var t,n,r,o=p(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).state={selectedStars:[1,2,3,4,5],rating:t.props.rating||0,hovered:0,selectedIcon:"★",deselectedIcon:"☆"},t.setRating=t.setRating.bind(f(t)),t.hoverRating=t.hoverRating.bind(f(t)),t}return t=i,(n=[{key:"setRating",value:function(e,t){this.setState({rating:e}),t()}},{key:"hoverRating",value:function(e){this.setState({hovered:e})}},{key:"render",value:function(){var e,t,n=this;return this.props.rating?e=a.a.createElement(h,null,a.a.createElement(h,{className:"top",rating:this.props.rating},a.a.createElement("span",null,"★"),a.a.createElement("span",null,"★"),a.a.createElement("span",null,"★"),a.a.createElement("span",null,"★"),a.a.createElement("span",null,"★")),a.a.createElement(h,{className:"bottom"},a.a.createElement("span",null,"★"),a.a.createElement("span",null,"★"),a.a.createElement("span",null,"★"),a.a.createElement("span",null,"★"),a.a.createElement("span",null,"★"))):t=a.a.createElement(v,null,this.state.selectedStars.map((function(e){var t=n.state.hovered<e?n.state.deselectedIcon:n.state.selectedIcon;return a.a.createElement("span",{key:e,onClick:function(t){n.setRating(e,(function(){return n.props.getRating(e)}))},onMouseEnter:function(){n.hoverRating(e)},onMouseLeave:function(){n.hoverRating(0)}},n.state.rating<e?t:n.state.selectedIcon)}))),a.a.createElement("div",null,e,t)}}])&&s(t.prototype,n),r&&s(t,r),i}(a.a.Component);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=E(e);if(t){var a=E(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return R(this,n)}}function R(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?C(e):t}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var _=o.a.div.withConfig({displayName:"ReviewTile__TileContainer",componentId:"sc-1vbuo4p-0"})(["width:100%;padding:10px 0;border-bottom:1px solid black;display:",";"],(function(e){return e.reportClick?"none":"block"})),S=["January","February","March","April","May","June","July","August","September","October","November","December"],k=o.a.div.withConfig({displayName:"ReviewTile__StarDateWrapper",componentId:"sc-1vbuo4p-1"})(["font-size:1rem;font-weight:300;color:#424242;display:flex;justify-content:space-between;align-items:baseline;"]),j=o.a.div.withConfig({displayName:"ReviewTile__ResponseWrapper",componentId:"sc-1vbuo4p-2"})(["margin:0 auto;background-color:bisque;color:#424242;"]),O=o.a.img.withConfig({displayName:"ReviewTile__ReviewThumbsWrapper",componentId:"sc-1vbuo4p-3"})(["display:inline-flex;justify-content:space-around;align-items:flex-start;border:1px solid #ddd;padding:5px;height:80px;&:hover{box-shadow:0 0 2px 1px rgba(0,140,186,0.5);}"]),N=o.a.div.withConfig({displayName:"ReviewTile__HelpfulnessWrapper",componentId:"sc-1vbuo4p-4"})(["font-size:1rem;font-weight:300;color:#424242;display:flex;justify-content:flex-start;align-items:baseline;padding:5px 0;"]),F=o.a.div.withConfig({displayName:"ReviewTile__ClickTag",componentId:"sc-1vbuo4p-5"})(["padding:2px 1vw 0 1vw;text-decoration:underline;&.not-click{&:hover{cursor:pointer;color:#80CCC4;transform:scale(1.1);}}"]),I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(i,e);var t,n,r,o=x(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).state={review_id:t.props.review.review_id,yesNum:t.props.review.helpfulness,yesClick:!1,reportClick:!1},t.handleClickYes=t.handleClickYes.bind(C(t)),t.handleClickReport=t.handleClickReport.bind(C(t)),t}return t=i,(n=[{key:"handleClickYes",value:function(){var e=this,t=window.location.pathname;l.a.put("".concat(t.slice(-6),"reviews/").concat(this.state.review_id,"/helpful")).then((function(t){e.setState((function(e){return{yesClick:!0,yesNum:e.yesNum+1}}))})).catch((function(e){throw e}))}},{key:"handleClickReport",value:function(){var e=this,t=window.location.pathname;l.a.put("".concat(t.slice(-6),"reviews/").concat(this.state.review_id,"/report")).catch((function(e){throw e})).then((function(){e.setState({reportClick:!0})}))}},{key:"render",value:function(){var e,t,n,r=this.props.review,o=r.date,i=r.rating,l=r.reviewer_name,c=r.summary,s=r.body,u=new Date(o),p=S[u.getUTCMonth()],d=u.getUTCDate(),f=u.getUTCFullYear();return r.recommend&&(e=a.a.createElement("div",null,"✓ I recommend this product")),r.response&&(t=a.a.createElement(j,null,a.a.createElement("h4",null,"Response from seller"),a.a.createElement("p",null,r.response))),r.photos.length>0&&(n=a.a.createElement("div",null,r.photos.map((function(e,t){return a.a.createElement(O,{key:e.id,src:e.url,alt:"".concat(t,"reviewPhoto")})})))),a.a.createElement(_,{reportClick:this.state.reportClick},a.a.createElement(k,null,a.a.createElement(y,{rating:i}),a.a.createElement("span",null,l,","," ",p," ",d,","," ",f)),a.a.createElement("div",null,c),a.a.createElement("p",null,s),n,e,t,a.a.createElement(N,null,"Helpful?",a.a.createElement(F,{className:this.state.yesClick?void 0:"not-click",onClick:this.state.yesClick?void 0:this.handleClickYes},"Yes"," ","(",this.state.yesNum||0,")"),a.a.createElement("div",null,"  |  "),a.a.createElement(F,{className:"not-click",onClick:this.handleClickReport},"Report")))}}])&&w(t.prototype,n),r&&w(t,r),i}(a.a.Component);function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e){return function(e){if(Array.isArray(e))return M(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||B(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||B(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function W(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=U(e);if(t){var a=U(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return q(this,n)}}function q(e,t){return!t||"object"!==A(t)&&"function"!=typeof t?Y(e):t}function Y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var J={Size:["A size too small","½ a size too small","Perfect","½ a size too big","A size too wide"],Width:["Too narrow","Slightly narrow","Perfect","Slightly wide","Too wide"],Comfort:["Uncomfortable","Slightly uncomfortable","OK","Comfortable","Perfect"],Quality:["Poor","Below average","What I expected","Pretty great","Perfect"],Length:["Runs Short","Runs slightly short","Perfect","Runs slightly long","Runs long"],Fit:["Runs tight","Runs slightly tight","Perfect","Runs slightly long","Runs long"]},V=o.a.div.withConfig({displayName:"AddReviewForm__VerticalWrapper",componentId:"kljszx-0"})(["display:flex;align-items:baseline;flex-direction:column;padding:10px 0;"]),H=o.a.div.withConfig({displayName:"AddReviewForm__HorizontalWrapper",componentId:"kljszx-1"})(["display:flex;align-items:baseline;justify-content:space-around;"]),G=o.a.div.withConfig({displayName:"AddReviewForm__NameEmailWraper",componentId:"kljszx-2"})(["width:100%;display:flex;align-items:baseline;margin:0 10px;"]),$=o.a.div.withConfig({displayName:"AddReviewForm__ValueButtonWrapper",componentId:"kljszx-3"})(["display:flex;flex-basis:20%;flex-direction:column;justify-content:center;align-items:center;"]),K=o.a.span.withConfig({displayName:"AddReviewForm__StyledLabel",componentId:"kljszx-4"})(["font-weight:700;padding:5px 0;"]),Q=o.a.div.withConfig({displayName:"AddReviewForm__CharateristicsSelectorWrapper",componentId:"kljszx-5"})(["width:100%;display:flex;justify-content:space-around;align-items:baseline;"]),X=o.a.form.withConfig({displayName:"AddReviewForm__StyledForm",componentId:"kljszx-6"})(["margin:0 auto;padding:10px 30px;background-color:white;width:55vw;height:100%;font-family:'Lato',sans-serif;box-shadow:0 19px 38px #6d6d6d,0 15px 12px #6d6d6d;"]),Z=o.a.input.withConfig({displayName:"AddReviewForm__NameEmailInput",componentId:"kljszx-7"})(["width:23vw;height:3vh;border-color:#424242;margin:5px 0;margin-right:50px;"]),ee=o.a.input.withConfig({displayName:"AddReviewForm__SytledSubmitButton",componentId:"kljszx-8"})(["float:right;font-family:'Lato',sans-serif;background-color:#FFFFFF;border:1px solid #424242;height:6vh;width:15vw;margin:0 12px;font-size:15px;color:#424242;&:hover{cursor:pointer;color:#80CCC4;border:1px solid #80CCC4;box-shadow:0 3px 6px #a0a0a0,0 3px 6px #a0a0a0;};&:focus{outline:none;box-shadow:none;};"]),te=o.a.button.withConfig({displayName:"AddReviewForm__SytledButton",componentId:"kljszx-9"})(["float:right;font-family:'Lato',sans-serif;background-color:#FFFFFF;border:1px solid #424242;height:6vh;width:15vw;font-size:15px;color:#424242;padding:5px;margin:0 12px;&:hover{cursor:pointer;color:#80CCC4;border:1px solid #80CCC4;box-shadow:0 3px 6px #a0a0a0,0 3px 6px #a0a0a0;};&:focus{outline:none;box-shadow:none;};"]),ne=o.a.input.withConfig({displayName:"AddReviewForm__StyledInput",componentId:"kljszx-10"})(["width:45vw;height:3vh;border-color:#424242;"]),re=o.a.textarea.withConfig({displayName:"AddReviewForm__StyledTextarea",componentId:"kljszx-11"})(["width:52vw;height:12vh;border-color:#424242;"]),ae=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(i,e);var t,n,r,o=W(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).state={productId:t.props.productId,rating:0,characteristics:{},recommend:void 0,summary:"",body:"",name:"",email:"",photos:[]},t.getRating=t.getRating.bind(Y(t)),t.handleSubmit=t.handleSubmit.bind(Y(t)),t.handleChange=t.handleChange.bind(Y(t)),t.handlePhotosUpload=t.handlePhotosUpload.bind(Y(t)),t}return t=i,(n=[{key:"handleChange",value:function(e){Number.isNaN(Number(e.target.name))?"recommend"===e.target.name?"true"===e.target.value?this.setState({recommend:!0}):this.setState({recommend:!1}):this.setState(z({},e.target.name,e.target.value)):(e.persist(),this.setState((function(t){Object.assign(t.characteristics,z({},e.target.name,Number(e.target.value)))})))}},{key:"handlePhotosUpload",value:function(e){var t=this;e.persist();var n=e.target.files;n.length>5?alert("The number of the photos you selected is exceeded 5."):Object.entries(n).forEach((function(e){var n=P(e,2),r=(n[0],n[1]);console.log(r.name),t.setState((function(e){return{photos:[].concat(T(e.photos),[r])}}))}))}},{key:"handleSubmit",value:function(e){var t=this,n=new FormData;Object.entries(this.state).forEach((function(e){var r=P(e,2),a=r[0],o=r[1];"photos"===a?Object.entries(t.state.photos).forEach((function(e){var t=P(e,2),r=(t[0],t[1]);n.append("photos",r)})):n.append(a,JSON.stringify(o))}));var r=window.location.pathname;l.a.post("".concat(r.slice(-6),"reviews"),n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){t.props.loadReview(e.data.results)})).catch((function(e){throw e})).then((function(){t.props.toggle()})),e.preventDefault()}},{key:"getRating",value:function(e){this.setState({rating:e})}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.characteristics);return a.a.createElement(X,{onSubmit:this.handleSubmit},a.a.createElement("h2",null,"Write A Review"),a.a.createElement(V,null,a.a.createElement(K,null,"Overall Rating"),a.a.createElement(y,{getRating:this.getRating})),a.a.createElement(V,null,a.a.createElement(K,null,"Do you recommend this product?"),a.a.createElement("div",null,a.a.createElement("input",{type:"radio",name:"recommend",value:"true",required:!0,onChange:this.handleChange}),a.a.createElement("span",null,"Yes"),a.a.createElement("input",{type:"radio",name:"recommend",value:"false",required:!0,onChange:this.handleChange}),a.a.createElement("span",null,"No"))),a.a.createElement("div",null,a.a.createElement(K,null,"Charateristics"),a.a.createElement("ul",{style:{padding:"10px",margin:"0 auto"}},t.map((function(t){return a.a.createElement("li",{key:t},a.a.createElement(K,null,t),a.a.createElement(Q,null,J[t].map((function(n,r){return a.a.createElement($,{key:n},a.a.createElement("span",null,n),a.a.createElement("input",{type:"radio",name:e.props.characteristics[t].id,value:r+1,required:!0,onChange:e.handleChange}))}))))})))),a.a.createElement(V,null,a.a.createElement(K,null,"Review Summary"),a.a.createElement(ne,{type:"text",id:"reviewSummary",name:"summary",cols:"100",maxLength:"60",value:this.state.summary,placeholder:"Example: Best purchase ever!",onChange:this.handleChange})),a.a.createElement(V,null,a.a.createElement(K,null,"Your Review"),a.a.createElement(re,{id:"reviewBody",name:"body",cols:"60",rows:"10",maxLength:"1000",value:this.state.body,placeholder:"Why did you like the product or not?",required:!0,onChange:this.handleChange})),a.a.createElement(H,null,a.a.createElement(K,null,"Upload the photos of your purchase"),a.a.createElement("input",{type:"file",name:"photos",onChange:this.handlePhotosUpload,multiple:!0})),a.a.createElement(G,null,a.a.createElement(V,null,a.a.createElement(K,null,"Your Nickname"),a.a.createElement(Z,{type:"text",id:"reviewer_name",name:"name",maxLength:"60",value:this.state.name,placeholder:"Example: jackson11!",required:!0,onChange:this.handleChange})),a.a.createElement(V,null,a.a.createElement(K,null,"Your Email"),a.a.createElement(Z,{type:"email",id:"email",name:"email",maxLength:"60",value:this.state.email,placeholder:"Example: jackson11@mail.com",required:!0,onChange:this.handleChange}))),a.a.createElement(ee,{type:"submit",name:"submit"}),a.a.createElement(te,{type:"button",onClick:this.props.toggle},"Cancel"))}}])&&L(t.prototype,n),r&&L(t,r),i}(a.a.Component),oe=o.a.div.withConfig({displayName:"ReviewsList__ReviewsWrapper",componentId:"sc-1ulmjy1-0"})(["height:100%;display:flex;flex-basis:65%;flex-wrap:nowrap;flex-direction:column;justify-content:center;padding:2vw;"]),ie=o.a.div.withConfig({displayName:"ReviewsList__ButtonWrapper",componentId:"sc-1ulmjy1-1"})(["width:40vw;padding:15px 0;display:flex;flex-wrap:nowrap;flex-direction:row;align-items:baseline;"]),le=o.a.div.withConfig({displayName:"ReviewsList__ListWrapper",componentId:"sc-1ulmjy1-2"})(["width:100%;display:flex;max-height:100vh;overflow-y:scroll;flex-direction:column;::-webkit-scrollbar{display:none;};-ms-overflow-style:none;scrollbar-width:none;"]),ce=o.a.button.withConfig({displayName:"ReviewsList__ReviewButton",componentId:"sc-1ulmjy1-3"})(["font-weight:700;color:#424242;font-family:'Lato',sans-serif;background-color:#FFFFFF;border:1px solid #424242;height:6vh;width:20vw;margin:0 12px;&:hover{cursor:pointer;color:#80CCC4;border:1px solid #80CCC4;box-shadow:0 3px 6px #a0a0a0,0 3px 6px #a0a0a0;};&:focus{outline:none;box-shadow:none;};"]),se=o.a.div.withConfig({displayName:"ReviewsList__ReviewSortWrapper",componentId:"sc-1ulmjy1-4"})(["display:flex;align-items:baseline;"]),ue=o.a.select.withConfig({displayName:"ReviewsList__SelectTag",componentId:"sc-1ulmjy1-5"})(["width:120px;height:100%;font-size:20px;padding-left:3px;text-decoration:underline;border:0px;outline:0px;font-weight:600;font-family:'Lato',sans-serif;"]),pe=o.a.div.withConfig({displayName:"ReviewsList__ModalBackground",componentId:"sc-1ulmjy1-6"})(["position:fixed;top:0;left:0;width:100%;height:100%;z-index:4;background-color:#42424275;"]),de=o.a.div.withConfig({displayName:"ReviewsList__NoReviewWrapper",componentId:"sc-1ulmjy1-7"})(["color:#424242;font-family:'Lato',sans-serif;font-size:1.3rem;font-weight:700;"]),fe=function(e){var t;e.reviews.length!==e.fullreviewsArr.length&&0!==e.reviews.length&&(t=a.a.createElement(ce,{onClick:e.loadMoreReviews},"MORE REVIEWS"));var n,r=e.reviewsMeta,o=0;return r!=={}&&Object.entries(r.ratings).forEach((function(e){o+=Number(e[1])})),n=0===e.reviews.length?a.a.createElement(de,null,"Be the first one to review the product"):a.a.createElement(a.a.Fragment,null,a.a.createElement(se,null,a.a.createElement("label",null,o," ","reviews, sorted by",a.a.createElement(ue,{onChange:function(t){e.sortSelected(t)}},a.a.createElement("option",{defaultValue:"relevant"},"Relevant"),a.a.createElement("option",{value:"helpful"},"Helpful"),a.a.createElement("option",{value:"newest"},"Newest")))),a.a.createElement(le,null,e.reviews.map((function(t){return a.a.createElement(I,{key:t.review_id,review:t,loadReview:e.loadFirstTwoReviews,handleClickYes:e.handleClickYes})})))),a.a.createElement(oe,null,n,a.a.createElement(ie,null,t,a.a.createElement(ce,{onClick:e.addReviewToggle},"ADD A REVIEW"),e.addReviewShow&&a.a.createElement(pe,null,a.a.createElement(ae,{toggle:e.addReviewToggle,productId:Number(r.product_id),characteristics:r.characteristics,loadReview:e.loadFirstTwoReviews}))))},me=o.a.span.withConfig({displayName:"RatingSummary__RatingScore",componentId:"gha4e3-0"})(["font-size:70px;margin-left:30px;font-weight:bold;"]),he=o.a.div.withConfig({displayName:"RatingSummary__SummaryWrapper",componentId:"gha4e3-1"})(["margin:0 auto;display:flex;justify-content:space-between align-item:flex-start;"]),ve=function(e){var t,n=e.reviewsMeta,r=0,o=0,i=Object.keys(n.ratings);return 0!==i.length?(i.forEach((function(e){r+=Number(e)*Number(n.ratings[e]),o+=Number(n.ratings[e])})),t=(Math.round(r/o*10)/10).toFixed(1)):t="0.0",a.a.createElement(he,null,a.a.createElement(me,null,t),a.a.createElement(y,{rating:t}))},ye=o.a.div.withConfig({displayName:"FilterMessage__ClickTag",componentId:"pnsqsl-0"})(["padding:2px 1vw 0 1vw;text-decoration:underline;&:hover{cursor:pointer;color:#80CCC4;transform:scale(1.1);}"]),ge=o.a.div.withConfig({displayName:"FilterMessage__FilterMessageContainer",componentId:"pnsqsl-1"})(["display:flex;flex-direction:column;align-items:center;padding:10px 5px"]),we=function(e){return a.a.createElement(ge,null,a.a.createElement("div",null,a.a.createElement("span",null,"Showing all "),e.filterStars.sort().map((function(t,n){return n>0&&n!==e.filterStars.length-1?a.a.createElement("span",{key:t},",",t):n>0&&n===e.filterStars.length-1?a.a.createElement("span",{key:t}," ","&",t):a.a.createElement("span",{key:t},t)})),a.a.createElement("span",null," star reviews")),a.a.createElement(ye,{onClick:e.handleRemoveLabelClick},"Remove All Filters"))},be=o.a.div.withConfig({displayName:"CountTag__StyledTag",componentId:"sc-169gb2y-0"})(["width:100%;height:100%;font-size:10px;text-align:center;border-radius:6px;position:absolute;top:-1.2vh;left:50%;z-index:1;margin-left:-60px;"]),xe=function(e){var t;return t=void 0===e.ratingCount?0:e.ratingCount,a.a.createElement(be,null,t," ","votes")};function Re(e){return(Re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ce(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ee(e,t){return(Ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _e(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=je(e);if(t){var a=je(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Se(this,n)}}function Se(e,t){return!t||"object"!==Re(t)&&"function"!=typeof t?ke(e):t}function ke(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function je(e){return(je=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Oe=o.a.div.withConfig({displayName:"RatingBreakDown__BreakDownWrapper",componentId:"sc-1fiadg8-0"})(["display:flex;justify-content:space-around;align-items:baseline;margin:0 auto;padding:5px 10px;"]),Ne=o.a.div.withConfig({displayName:"RatingBreakDown__BarContainer",componentId:"sc-1fiadg8-1"})(["height:10px;width:12vw;position:relative;&:hover{visibility:visible;}"]),Fe=o.a.div.withConfig({displayName:"RatingBreakDown__BaseBox",componentId:"sc-1fiadg8-2"})(["height:100%;position:absolute;left:0;top:0;"]),Ie=Object(o.a)(Fe).withConfig({displayName:"RatingBreakDown__Background",componentId:"sc-1fiadg8-3"})(["background:#e0e0e0;width:100%;"]),Ae=Object(o.a)(Fe).withConfig({displayName:"RatingBreakDown__Percentage",componentId:"sc-1fiadg8-4"})(["background:#80ccc4;width:","%;"],(function(e){return e.percent})),Te=o.a.div.withConfig({displayName:"RatingBreakDown__RecommendPercentage",componentId:"sc-1fiadg8-5"})(["width:18vw;margin:0 auto;padding-top:18px;padding-bottom:5px;font-size:1vw;"]),Pe=o.a.div.withConfig({displayName:"RatingBreakDown__ClickTag",componentId:"sc-1fiadg8-6"})(["padding:2px 1vw 0 0;text-decoration:underline;&:hover{cursor:pointer;color:#80CCC4;transform:scale(1.1);}"]),Be=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ee(e,t)}(i,e);var t,n,r,o=_e(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).state={stars:[5,4,3,2,1],hoverBar:null},t.getPercentage=t.getPercentage.bind(ke(t)),t.getRecommendRate=t.getRecommendRate.bind(ke(t)),t.handleStarFilterClick=t.handleStarFilterClick.bind(ke(t)),t.showRatingCount=t.showRatingCount.bind(ke(t)),t}return t=i,(n=[{key:"handleStarFilterClick",value:function(e,t){this.props.starFilter(t)}},{key:"getPercentage",value:function(e){var t=this.props.reviewsMeta,n=0,r=0;return t.ratings!=={}&&(Object.keys(t.ratings).forEach((function(e){n+=Number(t.ratings[e])})),r=t.ratings[e]/n*100),r}},{key:"getRecommendRate",value:function(){var e=this.props.reviewsMeta;return Object.keys(e.recommended).length>0?Math.round(Number(e.recommended.true)/(Number(e.recommended.true)+Number(e.recommended.false))*100):0}},{key:"showRatingCount",value:function(e){this.setState({hoverBar:Number(e.target.id)}),e.preventDefault()}},{key:"render",value:function(){var e,t=this,n=this.state.stars;return this.props.filterStars.length>0&&(e=a.a.createElement(we,{filterStars:this.props.filterStars,handleRemoveLabelClick:this.props.removeAllFilter})),a.a.createElement("div",null,a.a.createElement("div",null,n.map((function(e){var n;return n=Object.keys(t.props.reviewsMeta.ratings).length>0?t.props.reviewsMeta.ratings[e]:0,a.a.createElement(Oe,{key:e,id:e,onMouseEnter:function(e){return t.showRatingCount(e)},onMouseLeave:function(){return t.setState({hoverBar:null})}},a.a.createElement(Pe,{onClick:function(n){return t.handleStarFilterClick(n,e)}},e," ","stars"),a.a.createElement(Ne,null,t.state.hoverBar===e&&a.a.createElement(xe,{ratingCount:n}),a.a.createElement(Ie,null),a.a.createElement(Ae,{percent:t.getPercentage(e)})))}))),e,a.a.createElement(Te,null,this.getRecommendRate(),"% of reviews recommend this product"))}}])&&Ce(t.prototype,n),r&&Ce(t,r),i}(a.a.Component),Me=o.a.div.withConfig({displayName:"ProductBreakDown__CharacBreakDownWrapper",componentId:"sc-198pmi9-0"})(["padding:10px 5px;width:15vw;"]),ze=o.a.div.withConfig({displayName:"ProductBreakDown__FeedbackWrapper",componentId:"sc-198pmi9-1"})(["display:flex;justify-content:space-between;"]),Le=o.a.div.withConfig({displayName:"ProductBreakDown__CharcBarContainer",componentId:"sc-198pmi9-2"})(["height:10px;width:100%;position:relative;"]),De=o.a.div.withConfig({displayName:"ProductBreakDown__BaseBox",componentId:"sc-198pmi9-3"})(["height:100%;position:absolute;left:0;top:0;"]),We=Object(o.a)(De).withConfig({displayName:"ProductBreakDown__Background",componentId:"sc-198pmi9-4"})(["background:#e0e0e0;width:100%;"]),qe=Object(o.a)(De).withConfig({displayName:"ProductBreakDown__TriangleScaleIcon",componentId:"sc-198pmi9-5"})(["width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:15px solid #80ccc4;left:","vw;"],(function(e){return e.percent/100*15}));var Ye=function(e){var t=e.reviewsMeta;return Object.keys(t.characteristics).map((function(e){var n=(null!==t.characteristics[e].value?t.characteristics[e].value:0)/5*100,r=function(e){return["Size","Width","Length"].includes(e)?["Too small","Perfect","Too large"]:["Poor","Great"]}(e);return a.a.createElement(Me,{key:t.characteristics[e].id},a.a.createElement("div",null,e),a.a.createElement(Le,null,a.a.createElement(We,null),a.a.createElement(qe,{percent:n})),a.a.createElement(ze,null,r.map((function(n){return a.a.createElement("span",{key:t.characteristics[e].id+t.characteristics[e].value+n},n)}))))}))};function Ue(e){return(Ue="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Je(e){return function(e){if(Array.isArray(e))return Ve(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return Ve(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ve(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ve(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function He(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ge(e,t){return(Ge=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function $e(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Xe(e);if(t){var a=Xe(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Ke(this,n)}}function Ke(e,t){return!t||"object"!==Ue(t)&&"function"!=typeof t?Qe(e):t}function Qe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Xe(e){return(Xe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Ze=o.a.div.withConfig({displayName:"Reviews__ReviewsContainer",componentId:"hq3dor-0"})(["width:60vw;display:flex;flex-wrap:nowrap;flex-direction:column;align-items:flex-start;margin:0 auto;padding:10px 20px 10px 20px;font-family:'Lato',sans-serif;"]),et=o.a.div.withConfig({displayName:"Reviews__ReviewsTitle",componentId:"hq3dor-1"})(["color:black;font-size:20px;text-align:left;"]),tt=o.a.div.withConfig({displayName:"Reviews__Wrapper",componentId:"hq3dor-2"})(["width:100%;display:flex;align-items:flex-start;justify-content:space-around;"]),nt=o.a.div.withConfig({displayName:"Reviews__RatingWrapper",componentId:"hq3dor-3"})(["width:100%;height:100%;display:flex;flex-basis:35%;flex-direction:column;align-items:center;margin:0 auto;padding:40px 55px;"]),rt=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ge(e,t)}(i,e);var t,n,r,o=$e(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).state={reviews:[],reviewsMeta:t.props.reviewsMeta,displayLimit:2,fullreviewsArr:[],originalArr:t.props.reviews.results,filterArr:[],addReviewShow:!1,filterStars:[],isModalOpen:!1},t.starFilter=t.starFilter.bind(Qe(t)),t.loadFirstTwoReviews=t.loadFirstTwoReviews.bind(Qe(t)),t.sortSelected=t.sortSelected.bind(Qe(t)),t.loadMoreReviews=t.loadMoreReviews.bind(Qe(t)),t.addReviewToggle=t.addReviewToggle.bind(Qe(t)),t.addOneFilter=t.addOneFilter.bind(Qe(t)),t.removeOneFilter=t.removeOneFilter.bind(Qe(t)),t.removeAllFilter=t.removeAllFilter.bind(Qe(t)),t}return t=i,(n=[{key:"componentDidMount",value:function(){this.loadFirstTwoReviews(this.props.reviews.results)}},{key:"loadFirstTwoReviews",value:function(e){for(var t=[],n=0;n<this.state.displayLimit&&n<e.length;)t.push(e[n]),n+=1;this.setState({reviews:t,fullreviewsArr:e})}},{key:"loadMoreReviews",value:function(){for(var e=[],t=0,n=e.length+this.state.reviews.length;t<this.state.displayLimit&&n<this.state.fullreviewsArr.length;)e.push(this.state.fullreviewsArr[n]),t+=1,n+=1;this.setState((function(t){return{reviews:[].concat(Je(t.reviews),e)}}))}},{key:"addOneFilter",value:function(e){var t=this;this.setState((function(t){return{filterArr:[].concat(Je(t.filterArr),Je(t.originalArr.filter((function(t){return t.rating===e})))),filterStars:[].concat(Je(t.filterStars),[e])}}),(function(){t.loadFirstTwoReviews(t.state.filterArr)}))}},{key:"removeOneFilter",value:function(e){var t=this;this.setState((function(t){var n=t.filterStars.indexOf(e);return t.filterStars.splice(n,1),{filterStars:t.filterStars,filterArr:t.filterArr.filter((function(t){return t.rating!==e}))}}),(function(){0===t.state.filterArr.length||0===t.state.filterStars.length?t.loadFirstTwoReviews(t.state.originalArr):t.loadFirstTwoReviews(t.state.filterArr)}))}},{key:"starFilter",value:function(e){this.state.filterStars.includes(e)?this.removeOneFilter(e):this.addOneFilter(e)}},{key:"removeAllFilter",value:function(){var e=this;this.setState({filterArr:[],filterStars:[]},(function(){e.loadFirstTwoReviews(e.props.reviews.results)}))}},{key:"sortSelected",value:function(e){var t=this,n=window.location.pathname;l.a.get("".concat(n.slice(-6),"reviews/").concat(e.target.value)).then((function(e){t.loadFirstTwoReviews(e.data.results),t.setState({originalArr:e.data.results})})).catch((function(e){throw e})).then((function(){t.setState({filterStars:[],filterArr:[]})})),e.preventDefault()}},{key:"addReviewToggle",value:function(e){e.stopPropagation(),this.setState((function(e){return{addReviewShow:!e.addReviewShow}}))}},{key:"render",value:function(){return a.a.createElement(Ze,{id:"RATINGS"},a.a.createElement(et,null,"RATINGS & REVIEWS"),a.a.createElement(tt,null,a.a.createElement(nt,null,a.a.createElement(ve,{reviewsMeta:this.state.reviewsMeta}),a.a.createElement(Be,{reviewsMeta:this.state.reviewsMeta,starFilter:this.starFilter,removeAllFilter:this.removeAllFilter,filterStars:this.state.filterStars}),a.a.createElement(Ye,{reviewsMeta:this.state.reviewsMeta})),a.a.createElement(fe,{loadFirstTwoReviews:this.loadFirstTwoReviews,fullreviewsArr:this.state.fullreviewsArr,reviews:this.state.reviews,reviewsMeta:this.state.reviewsMeta,loadMoreReviews:this.loadMoreReviews,sortSelected:this.sortSelected,addReviewToggle:this.addReviewToggle,addReviewShow:this.state.addReviewShow,toggleModal:this.toggleModal})))}}])&&He(t.prototype,n),r&&He(t,r),i}(a.a.Component);t.default=rt}}]);