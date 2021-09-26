(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),l=a(20),r=a.n(l),i=a(5),c=a(6),o=a(8),u=a(7),m=a(28),d=a(21),g=a(48),h={msg:{},status:null,id:null},p=a(24),b={token:localStorage.getItem("token"),isAuthenticated:null,isLoading:!1,user:null},v=Object(d.b)({error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return{msg:t.payload.msg,status:t.payload.status,id:t.payload.id};case"CLEAR_ERRORS":return{msg:{},status:null,id:null};default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOADING":return Object(p.a)({},e,{isLoading:!0});case"USER_LOADED":return Object(p.a)({},e,{isAuthenticated:!0,isLoading:!1,user:t.payload});case"LOGIN_SUCCESS":case"REGISTER_SUCCESS":return localStorage.setItem("token",t.payload.token),Object(p.a)({},e,{},t.payload,{isAuthenticated:!0,isLoading:!1});case"LOGIN_FAIL":case"REGISTER_FAIL":case"AUTH_ERROR":case"LOGOUT_SUCCESS":return localStorage.removeItem("token"),Object(p.a)({},e,{token:null,user:null,isAuthenticated:!1,isLoading:!1});default:return e}}}),E=[g.a],y=Object(d.d)(v,{},Object(d.c)(d.a.apply(void 0,E))),w=a(115),N=a(116),f=a(117),C=a(120),S=a(118),Y=a(9),A=a(3),k=a(49),q=a.n(k),O=a(59),I=a(119);function x(e){var t=e.children,a=Object(s.useState)(!0),l=Object(O.a)(a,2),r=l[0],i=l[1];return Object(s.useEffect)((function(){setTimeout((function(){i(!1)}),1500)}),[]),n.a.createElement("div",{className:"cstReactPageLoader"},r?n.a.createElement(I.a,{color:"primary"}):t)}var M=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement(x,null,n.a.createElement("div",{className:"container"},n.a.createElement("section",{className:"jumbotron text-center"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"jumbotron-heading"},"Welcome to StrategyAdvisor Cloud!"),n.a.createElement("p",{className:"lead text-muted"},'"StrategyAdvisor Cloud is a rule-based expert system for providing strategy recommendations. The software has been developed using the graph-based methodology by \u0130lter \u0130rdesel, G\xfcrdal Ertek, and Ahmet Demirelli and based on the strategic management know-how introduced by A.J. Slywotzky et al. Please select the module, answer the questions in order, and obtain the list of possible strategies you can apply, together with suitability score for each strategy."'),n.a.createElement("img",{src:q.a,alt:""})))))}}]),a}(s.Component),L=a(12),j=(a(73),a(33)),R=(a(74),a(51)),T=a.n(R),V=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).suggestions=new Map,s.percentageMap=new Map,s.numbers=[0,1,2,3,4,5,6,7,8,9,10],s.setAnswer=s.setAnswer.bind(Object(L.a)(s)),s.handleNext=s.handleNext.bind(Object(L.a)(s)),s.handleBack=s.handleBack.bind(Object(L.a)(s)),s.findQuestionFromId=s.findQuestionFromId.bind(Object(L.a)(s)),s.calculateSuggestions=s.calculateSuggestions.bind(Object(L.a)(s)),s.findSuggestion=s.findSuggestion.bind(Object(L.a)(s)),s.checkLabel=s.checkLabel.bind(Object(L.a)(s)),s.store=[],s.exportedSuggestions=[],s.moduleStart={},s.nodes=[],s.state={question:[],answer:-1,type:"",isSurveyFinished:!1},s}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;T.a.get("".concat("http://strategyadvisor.ertekprojects.com:5000","/api/getModule"),{params:{moduleId:this.props.moduleId}}).then((function(t){console.log(t.data[0]),0===t.data.length?new Error("Cannot get"):(e.nodes=t.data[0].nodes,e.moduleStart=t.data[0].moduleStart,e.exportedSuggestions=t.data[0].suggestions,e.setState({question:e.nodes[0],type:e.nodes[0].nodeType}))})).catch((function(e){return console.log(e)}))}},{key:"findGenuineAnswer",value:function(e){return e<5?1:2}},{key:"setAnswer",value:function(e){this.setState({answer:e})}},{key:"handleNext",value:function(){var e,t=this.findGenuineAnswer(this.state.answer);if("Question"===this.state.type){if(this.moduleStart.textEN="",-1===this.state.answer)return;if(e=this.state.question.answers["answer"+t].nextQuestion,this.state.question.answers.isLinkToSuggestion){var a=this.state.answer;if(this.state.question.answers.answer1.RelatedToSuggestion.isRelated){"0"===this.state.question.answers.answer1.Is_On_Right_in_User_Interface.$numberInt&&(a=10-a);var s=this.state.question.answers.answer1.RelatedToSuggestion.relatedSuggestionID;this.suggestions.set(s,(this.suggestions.get(s)||[]).concat(a))}else{var n=this.state.answer;"0"===this.state.question.answers.answer2.Is_On_Right_in_User_Interface.$numberInt&&(n=10-n);var l=this.state.question.answers.answer2.RelatedToSuggestion.relatedSuggestionID;this.suggestions.set(l,(this.suggestions.get(l)||[]).concat(n))}}}else e=this.state.question.nextNode;this.store.push(this.state);var r=this.findQuestionFromId(e);if(!r)return this.calculateSuggestions(),this.props.handleSuggestionImage(),void this.setState({isSurveyFinished:!0});"Continue"===r.nodeType&&(e=r.nextNode,(r=this.findQuestionFromId(e))||(console.log("Suggestion page"),this.calculateSuggestions(),this.props.handleSuggestionImage(),this.setState({isSurveyFinished:!0}))),this.setState({question:r,answer:-1,type:r.nodeType})}},{key:"calculateSuggestions",value:function(){var e=this;console.log(this.suggestions),this.suggestions.forEach((function(t,a,s){var n=t.reduce((function(e,t){return e+t}),0)/t.length*10;e.percentageMap.set(e.findSuggestion(a),n)}))}},{key:"findSuggestion",value:function(e){for(var t=0;t<this.exportedSuggestions.length;++t)if(this.exportedSuggestions[t].suggestionID===String(e))return this.exportedSuggestions[t].titleEN;return"undefined"}},{key:"handleBack",value:function(){if("Question"===this.state.type&&!this.state.question.isLinkToSuggestion&&-1!==this.state.answer)if(this.state.question.answers["answer"+this.findGenuineAnswer(this.state.answer)].RelatedToSuggestion.isRelated){var e=this.suggestions.get(this.state.question.answers["answer"+this.findGenuineAnswer(this.state.answer)].RelatedToSuggestion.relatedSuggestionID);e&&e.pop()}else console.log(this.state.question.answers["answer"+(3-this.findGenuineAnswer(this.state.answer))].RelatedToSuggestion.relatedSuggestionID),this.suggestions.get(this.state.question.answers["answer"+(3-this.findGenuineAnswer(this.state.answer))].RelatedToSuggestion.relatedSuggestionID);console.log(this.suggestions),this.setState(this.store.pop())}},{key:"findQuestionFromId",value:function(e){for(var t=0;t<this.nodes.length;++t)if(this.nodes[t].nodeID===String(e))return this.nodes[t]}},{key:"isMarked",value:function(e){return e===this.state.answer?"marked":"notMarked"}},{key:"checkLabel",value:function(e){return"Question"===this.state.type?this.state.question.answers["answer"+e].Is_On_Right_in_User_Interface.$numberInt===String(e-1)?this.state.question.answers["answer"+e].labelEN:this.state.question.answers["answer"+(3-e)].labelEN:""}},{key:"render",value:function(){var e=this,t=!1;t="Question"===this.state.type?n.a.createElement("div",null,n.a.createElement("span",{className:"cstLeftCheckLabelMobile mt-1 mb-3 text-left"},this.checkLabel(1)),n.a.createElement("div",{className:"choices justify-content-center"},n.a.createElement("span",{className:"cstLeftCheckLabelDesktop alert alert-dark my-0"},this.checkLabel(1)),n.a.createElement("span",{className:"hSpacer"}),this.numbers.map((function(t,a){return n.a.createElement("span",{key:a,onClick:function(){return e.setAnswer(t)},className:"choice mt-2 ".concat(e.state.type+"C"," ").concat(e.isMarked(t))},t)})),n.a.createElement("span",{className:"hSpacer"}),n.a.createElement("span",{className:"cstRightCheckLabelDesktop alert alert-dark my-0"},this.checkLabel(2))),n.a.createElement("span",{className:"cstRightCheckLabelMobile mt-3 mb-2 text-right"},this.checkLabel(2))):n.a.createElement("div",null);var a=n.a.createElement("div",{className:"questionContainer"},n.a.createElement("div",{className:"buttonHolder"},n.a.createElement("div",{className:"title"},this.moduleStart.textEN,n.a.createElement("div",null),"Continue"===this.state.type?"":this.state.question.titleEN),n.a.createElement("div",{className:"vSpacer"}),n.a.createElement("div",{className:"vSpacer"}),n.a.createElement("div",null,t),n.a.createElement("div",{className:"vSpacer"}),n.a.createElement("button",{className:"btn btn-primary float-left",onClick:this.handleBack},"Back"),n.a.createElement("button",{className:"btn btn-primary float-right ".concat(this.store===[]?"empty":""),onClick:this.handleNext},"Next"))),s=new Map(Object(j.a)(this.percentageMap.entries()).sort((function(e,t){return t[1]-e[1]})));return console.log(s),this.state.isSurveyFinished?n.a.createElement("div",{className:"cstSuggestions"},n.a.createElement("h3",{className:"py-3"},"Suggestions"),n.a.createElement("ul",null,Object(j.a)(this.percentageMap.keys()).map((function(t){return"undefined"===t||n.a.createElement("li",{className:"pb-3",key:t},Math.round(e.percentageMap.get(t)),"%,"," ",t)}))),n.a.createElement("div",{className:"text-center py-3"},n.a.createElement(Y.b,{to:"/Modules",className:"btn btn-primary text-white cstNavItem"},"Go Back to Modules Page"))):a}}]),a}(s.Component),D=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).setSuggestionImage=s.setSuggestionImage.bind(Object(L.a)(s)),s.state={modulePhotoURL:"0"+s.props.location.moduleId+"_question"},s}return Object(c.a)(a,[{key:"setSuggestionImage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.location.moduleId;this.setState({modulePhotoURL:"0".concat(e,"_suggestion")})}},{key:"render",value:function(){return n.a.createElement(x,null,n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"flex cstHeaderTitle"},this.props.location.moduleTitle),n.a.createElement("br",null),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-3 col-md-12 col-sm-12 col-xs-12 card card-block justify-content-center cstQuestionImgCard"},n.a.createElement("img",{src:"".concat("http://strategyadvisor.ertekprojects.com","/pics/").concat(this.state.modulePhotoURL,".jpg"),className:"img-fluid img-thumbnail cstQuestionImg",alt:"Question"})),n.a.createElement("div",{className:"col-lg-8 col-md-12 col-sm-12 col-xs-12 card card-block justify-content-center cstQuestionDetailsCard"},n.a.createElement(V,{handleSuggestionImage:this.setSuggestionImage,moduleId:this.props.location.moduleId})))))}}]),a}(s.Component),W=a(52),B=a.n(W),J=a(53),F=a.n(J),G=a(54),Q=a.n(G),U=a(55),P=a.n(U),Z=a(56),X=a.n(Z),K=a(57),z=a.n(K),H=a(58),_=a.n(H),$=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement(x,null,n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"flex text-uppercase text-center display-4 pb-2"},"Modules"),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4 col-sm-6 mb-4"},n.a.createElement("div",{className:"card h-100 text-center"},n.a.createElement("img",{className:"card-img-top",src:B.a,alt:""}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title text-uppercase mb-3"},"Channel"),n.a.createElement(Y.b,{to:{pathname:"/ModulePage",moduleId:1,moduleTitle:"Channel"},className:"nav-link btn btn-primary text-white"},"Go to Module")))),n.a.createElement("div",{className:"col-lg-4 col-sm-6 mb-4"},n.a.createElement("div",{className:"card h-100 text-center"},n.a.createElement("img",{className:"card-img-top",src:F.a,alt:""}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title text-uppercase mb-3"},"Customer"),n.a.createElement(Y.b,{to:{pathname:"/ModulePage",moduleId:2,moduleTitle:"Customer"},className:"nav-link btn btn-primary text-white"},"Go to Module")))),n.a.createElement("div",{className:"col-lg-4 col-sm-6 mb-4"},n.a.createElement("div",{className:"card h-100 text-center"},n.a.createElement("img",{className:"card-img-top",src:_.a,alt:""}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title text-uppercase mb-3"},"Value Chain"),n.a.createElement(Y.b,{to:{pathname:"/ModulePage",moduleId:3,moduleTitle:"Value Chain"},className:"nav-link btn btn-primary text-white"},"Go to Module")))),n.a.createElement("div",{className:"col-lg-4 col-sm-6 mb-4"},n.a.createElement("div",{className:"card h-100 text-center"},n.a.createElement("img",{className:"card-img-top",src:Q.a,alt:""}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title text-uppercase mb-3"},"Knowledge"),n.a.createElement(Y.b,{to:{pathname:"/ModulePage",moduleId:4,moduleTitle:"Knowledge"},className:"nav-link btn btn-primary text-white"},"Go to Module")))),n.a.createElement("div",{className:"col-lg-4 col-sm-6 mb-4"},n.a.createElement("div",{className:"card h-100 text-center"},n.a.createElement("img",{className:"card-img-top",src:P.a,alt:""}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title text-uppercase mb-3"},"Mega"),n.a.createElement(Y.b,{to:{pathname:"/ModulePage",moduleId:5,moduleTitle:"Mega"},className:"nav-link btn btn-primary text-white"},"Go to Module")))),n.a.createElement("div",{className:"col-lg-4 col-sm-6 mb-4"},n.a.createElement("div",{className:"card h-100 text-center"},n.a.createElement("img",{className:"card-img-top",src:X.a,alt:""}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title text-uppercase mb-3"},"Organization"),n.a.createElement(Y.b,{to:{pathname:"/ModulePage",moduleId:6,moduleTitle:"Organization"},className:"nav-link btn btn-primary text-white"},"Go to Module")))),n.a.createElement("div",{className:"col-lg-4 col-sm-6 mb-4"},n.a.createElement("div",{className:"card h-100 text-center"},n.a.createElement("img",{className:"card-img-top",src:z.a,alt:""}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title text-uppercase mb-3"},"Product"),n.a.createElement(Y.b,{to:{pathname:"/ModulePage",moduleId:7,moduleTitle:"Product"},className:"nav-link btn btn-primary text-white"},"Go to Module"))))))))}}]),a}(s.Component),ee=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){console.log("recordsday\u0131m"),console.log(y.getState())}},{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"flex"},"Records"),n.a.createElement("p",null,"You will see the records here."))}}]),a}(s.Component),te=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),l=0;l<s;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={isOpen:!1},e.toggle=function(){e.setState({isOpen:!e.state.isOpen})},e}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(Y.a,null,n.a.createElement(w.a,{color:"dark",dark:!0,expand:"sm",className:"mb-5"},n.a.createElement(N.a,null,n.a.createElement(Y.b,{to:"/",className:"navbar-brand"},"StrategyAdvisor Cloud"),n.a.createElement(f.a,{onClick:this.toggle}),n.a.createElement(C.a,{isOpen:this.state.isOpen,navbar:!0},n.a.createElement(S.a,{className:"nav nav-pills nav-justified pl-4 cstNavItemUl",navbar:!0},n.a.createElement(Y.b,{to:"/Modules",className:"nav-link btn btn-sm btn-primary text-white cstNavItem"},"Modules"))))),n.a.createElement(A.c,null,n.a.createElement(A.a,{path:"/",exact:!0,component:M}),n.a.createElement(A.a,{path:"/Modules",exact:!0,component:$}),n.a.createElement(A.a,{path:"/Records",exact:!0,component:ee}),n.a.createElement(A.a,{path:"/ModulePage",exact:!0,component:D}))))}}]),a}(s.Component),ae=Object(m.b)((function(e){return{auth:e.auth}}),null)(te),se=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement(m.a,{store:y},n.a.createElement("div",{className:"App"},n.a.createElement(ae,null)))}}]),a}(s.Component);a(101);r.a.render(n.a.createElement(se,null),document.getElementById("root"))},49:function(e,t){e.exports="data:image/png;base64,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"},52:function(e,t,a){e.exports=a.p+"static/media/Channel.38dc3154.jpg"},53:function(e,t,a){e.exports=a.p+"static/media/Customer.3df3dd77.jpg"},54:function(e,t,a){e.exports=a.p+"static/media/Knowledge.a13ba6cf.jpg"},55:function(e,t,a){e.exports=a.p+"static/media/Mega.a12aa895.jpg"},56:function(e,t,a){e.exports=a.p+"static/media/Organization.6dbda4d3.jpg"},57:function(e,t,a){e.exports=a.p+"static/media/Product.637dfc0c.jpg"},58:function(e,t,a){e.exports=a.p+"static/media/ValueChain.e923bbe4.jpg"},61:function(e,t,a){e.exports=a(102)},74:function(e,t,a){}},[[61,1,2]]]);
//# sourceMappingURL=main.bb1560f7.chunk.js.map