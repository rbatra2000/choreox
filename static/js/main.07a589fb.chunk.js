(this.webpackJsonpchoreox=this.webpackJsonpchoreox||[]).push([[0],{176:function(e,t,a){e.exports=a.p+"static/media/audio.aab9cdd0.mp3"},198:function(e,t,a){e.exports=a(253)},203:function(e,t,a){},251:function(e,t,a){},252:function(e,t,a){},253:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),c=a.n(o),i=(a(203),a(24)),l=a(22),u=a(52),s=a.n(u),m=a(73),d=a(307),p=a(294),f=a(291),h=a(302),g=a(295),v=a(303),E=a(74),b=a.n(E),y=a(97),x=a(290),O=a(33),j=a(27),w=a(286);function N(){var e=Object(O.a)(["\n  margin: 0;\n  padding: 0 !important;\n"]);return N=function(){return e},e}function k(){var e=Object(O.a)(["\n  font-size: 6em;\n"]);return k=function(){return e},e}function C(){var e=Object(O.a)(["\n  font-size: 1.125em;\n"]);return C=function(){return e},e}function S(){var e=Object(O.a)(["\n  font-size: 1.5em;\n"]);return S=function(){return e},e}function I(){var e=Object(O.a)(["\n  font-size: 2.25em;\n"]);return I=function(){return e},e}function A(){var e=Object(O.a)(['\n  font-size: 3.75em;\n  font-weight: bold;\n  margin: 0;\n  font-family: "Helvetica Neue", "Avenir Next";\n']);return A=function(){return e},e}var R=j.a.h1(A()),T=(Object(j.a)(R)(I()),Object(j.a)(R)(S()),Object(j.a)(R)(C()),Object(j.a)(R)(k()),Object(j.a)(w.a)(N()),a(42)),F=T.initializeApp({apiKey:"AIzaSyCP7f-0gM04PNKyg_61zNHrEcoGuv5csww",authDomain:"choreox.firebaseapp.com",databaseURL:"https://choreox.firebaseio.com",projectId:"choreox",storageBucket:"choreox.appspot.com",messagingSenderId:"282857958796",appId:"1:282857958796:web:a4823f4d0f62548ee9baa9",measurementId:"G-G85QRHSBW3"}),P=T.firestore(),W=T.apps.length?T.app():T.initializeApp(F),D=a(289);function M(){return r.a.createElement(y.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(D.a,{color:"inherit",href:"https://material-ui.com/"},"Formatio")," ",(new Date).getFullYear(),".")}var z=Object(x.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function B(e){var t=z(),a=e.history,o=Object(n.useCallback)(function(){var e=Object(m.a)(s.a.mark((function e(t){var n,r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.elements,r=n.email,o=n.password,e.prev=2,e.next=5,W.auth().signInWithEmailAndPassword(r.value,o.value);case 5:a.push("/home"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),[a]);return r.a.createElement(w.a,{component:"main",maxWidth:"xs"},r.a.createElement(f.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(d.a,{className:t.avatar},r.a.createElement(b.a,null)),r.a.createElement(y.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:t.form,onSubmit:o},r.a.createElement(h.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),r.a.createElement(h.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Sign In"),r.a.createElement(g.a,{container:!0},r.a.createElement(g.a,{item:!0,xs:!0},r.a.createElement(i.b,{to:"/forgot",variant:"body2"},"Forgot password?")),r.a.createElement(g.a,{item:!0},r.a.createElement(i.b,{to:"/register",variant:"body2"},"Don't have an account? Sign Up"))))),r.a.createElement(v.a,{mt:8},r.a.createElement(M,null)))}var U=a(90),L=a.n(U);function V(){return r.a.createElement(y.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(D.a,{color:"inherit",href:"https://material-ui.com/"},"Formatio")," ",(new Date).getFullYear(),".")}var _=Object(x.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function q(e){var t=_(),a=e.history,o=Object(n.useCallback)(function(){var e=Object(m.a)(s.a.mark((function e(t){var n,r,o,c,i,l,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.elements,r=n.firstName,o=n.lastName,c=n.email,i=n.password,e.prev=2,e.next=5,W.auth().createUserWithEmailAndPassword(c.value,i.value);case 5:l=W.auth().currentUser,P.collection("users").doc(l.uid).set({userEmail:l.email,firstName:r.value,lastName:o.value,teams:[]}),u=l.uid,L.a.get("http://127.0.0.1:5000/register/userid="+u).then((function(e){console.log(e.data)})),a.push("/home"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),alert(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}(),[a]);return r.a.createElement(w.a,{component:"main",maxWidth:"xs"},r.a.createElement(f.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(d.a,{className:t.avatar},r.a.createElement(b.a,null)),r.a.createElement(y.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:t.form,onSubmit:o},r.a.createElement(g.a,{container:!0,spacing:2},r.a.createElement(g.a,{item:!0,xs:12,sm:6},r.a.createElement(h.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})),r.a.createElement(g.a,{item:!0,xs:12,sm:6},r.a.createElement(h.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname"})),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(h.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(h.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}))),r.a.createElement(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Sign Up"),r.a.createElement(g.a,{container:!0,justify:"flex-end"},r.a.createElement(g.a,{item:!0},r.a.createElement(i.b,{to:"/login",variant:"body2"},"Already have an account? Sign in"))))),r.a.createElement(v.a,{mt:5},r.a.createElement(V,null)))}function H(){return r.a.createElement(y.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(D.a,{color:"inherit",href:"https://material-ui.com/"},"Formatio")," ",(new Date).getFullYear(),".")}var G=Object(x.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function Y(e){var t=G(),a=e.history,o=Object(n.useCallback)(function(){var e=Object(m.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.elements.email,e.prev=2,e.next=5,W.auth().sendPasswordResetEmail(n.value);case 5:a.push("/login"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),[a]);return r.a.createElement(w.a,{component:"main",maxWidth:"xs"},r.a.createElement(f.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(d.a,{className:t.avatar},r.a.createElement(b.a,null)),r.a.createElement(y.a,{component:"h1",variant:"h5"},"Forgot Password"),r.a.createElement("form",{className:t.form,onSubmit:o},r.a.createElement(h.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),r.a.createElement(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Send Reset Email"),r.a.createElement(i.b,{to:"/login"},"Go Back"))),r.a.createElement(v.a,{mt:8},r.a.createElement(H,null)))}var K=a(17),X=a(15),J=a(13),Q=a(153),Z=a(154),$=a(108),ee=a(183),te=a(181),ae=a(301),ne=a(306),re=a(296),oe=a(174),ce=a(91).a.get("window").width,ie=ce/8,le=a(45),ue=a(155),se=a.n(ue),me=function(e,t){switch(t.type){case"NEXT_FORMATION":return Object(le.a)(Object(le.a)({},e),{},{formNum:e.formNum+1});case"PREV_FORMATION":return Object(le.a)(Object(le.a)({},e),{},{formNum:e.formNum-1});case"RESET_FORMATION":return Object(le.a)(Object(le.a)({},e),{},{formNum:0});case"SET_FORMATION":return Object(le.a)(Object(le.a)({},e),{},{formNum:t.num});case"ADD_FORMATION":var a=se.a.cloneDeep(e.database[e.formNum]);return e.database.splice(e.formNum+1,0,a),e.starts.splice(e.formNum+1,0,t.time),Object(le.a)(Object(le.a)({},e),{},{formNum:e.formNum+1});default:return e}},de={formNum:0,database:[{dancers:{rohit:{x:-.5,y:2.5,color:"lightblue"},ritik:{x:.5,y:2.5,color:"pink"},maya:{x:0,y:2,color:"pink"}},duration:250},{dancers:{rohit:{x:-.5,y:.5,color:"lightblue"},ritik:{x:.5,y:.5,color:"pink"},maya:{x:0,y:0,color:"pink"}},duration:500},{dancers:{rohit:{x:0,y:1,color:"lightblue"},ritik:{x:0,y:.5,color:"pink"},maya:{x:0,y:1.5,color:"pink"}},duration:400},{dancers:{rohit:{x:.5,y:1.5,color:"lightblue"},ritik:{x:-.5,y:1.5,color:"pink"},maya:{x:0,y:1.5,color:"pink"}},duration:750}],starts:[0,5,8,10],error:null},pe=Object(n.createContext)(de),fe=function(e){var t=e.children,a=Object(n.useReducer)(me,de),o=Object(K.a)(a,2),c=o[0],i=o[1];return r.a.createElement(pe.Provider,{value:[c,i]},t)},he=function(e){Object(ee.a)(a,e);var t=Object(te.a)(a);function a(e){var n;return Object(Q.a)(this,a),(n=t.call(this,e)).changeLoc=e.handler,n.state={coordinates:"("+String(n.convert(e.x,"R"))+","+String(n.convert(e.y,"C"))+")",scale:new ae.a.Value(1),pan:new ae.a.ValueXY({x:0,y:0}),name:e.name,color:e.color},n.state.pan.x=new ae.a.Value(e.x),n.state.pan.y=new ae.a.Value(e.y),n.position={x:e.x,y:e.y},n.state.pan.addListener((function(e){return n.position=e})),n.coord={x:e.x,y:e.y},n.panResponder=ne.a.create({onStartShouldSetPanResponder:function(e,t){return!0},onPanResponderTerminationRequest:function(){return!0},onPanResponderGrant:function(e,t){n.state.pan.setOffset({x:n.position.x,y:n.position.y}),n.state.pan.setValue({x:0,y:0}),n.state.pan.extractOffset(),ae.a.spring(n.state.scale,{toValue:1.5,friction:3}).start()},onPanResponderMove:function(e,t){n.coord.x<ce/-2||n.coord.x>ce/2||n.coord.y>500||n.coord.y<0?n.coord={x:parseInt(n.position.x),y:parseInt(n.position.y)}:n.updateText(),ae.a.event([null,{dx:n.state.pan.x,dy:n.state.pan.y}])(e,t)},onPanResponderRelease:function(e,t){n.state.pan.flattenOffset(),ae.a.spring(n.state.scale,{toValue:1,friction:4}).start(),(n.coord.x<ce/-2||n.coord.x>ce/2||n.coord.y>500||n.coord.y<0)&&(ae.a.spring(n.state.pan,{toValue:{x:0,y:0},friction:4}).start(),n.coord={x:0,y:0},n.setState({coordinates:"("+String(n.coord.x)+","+String(n.coord.y)+")"})),n.changeLoc(n.context[0].formNum,n.state.name,parseFloat(n.convert(n.coord.x,"R")),parseFloat(n.convert(n.coord.y,"C")))}}),n.updateText=n.updateText.bind(Object($.a)(n)),n}return Object(Z.a)(a,[{key:"getRandomInt",value:function(e){return Math.floor(Math.random()*Math.floor(e))}},{key:"changeColor",value:function(e){this.setState({color:e})}},{key:"move",value:function(e,t,a){this.coord={x:e*ie,y:125*t},ae.a.timing(this.state.pan,{toValue:{x:this.coord.x,y:this.coord.y},duration:a,easing:re.a.linear}).start(),this.setState({coordinates:"("+String(e)+","+String(t)+")"})}},{key:"convert",value:function(e,t){var a=125;return"R"===t&&(a=ie),(.25*Math.round(e/a/.25)).toFixed(2)}},{key:"updateText",value:function(){this.coord={x:parseInt(this.position.x),y:parseInt(this.position.y)},this.setState({coordinates:"("+String(this.convert(this.coord.x,"R"))+","+String(this.convert(this.coord.y,"C"))})}},{key:"render",value:function(){return r.a.createElement(X.a,null,this.renderDraggable())}},{key:"renderDraggable",value:function(){var e=this.state,t=e.pan,a=e.scale,n=[t.x,t.y],o={transform:[{translateX:n[0]},{translateY:n[1]},{rotate:"0deg"},{scale:a}]};return r.a.createElement(X.a,{style:ge.draggy},r.a.createElement(ae.a.View,Object.assign({},this.panResponder.panHandlers,{style:[o,ge.circle,{backgroundColor:this.state.color}]}),r.a.createElement(oe.a,{style:ge.ballText},this.state.coordinates),r.a.createElement(oe.a,null,this.state.name)))}}]),a}(n.Component);he.contextType=pe;var ge=J.a.create({draggy:{alignItems:"center",justifyContent:"center",cursor:"move",userSelect:"none"},circle:{width:60,height:60,borderRadius:30,alignItems:"center",justifyContent:"center",zIndex:10,position:"absolute"},ballText:{fontSize:10}}),ve=he,Ee=a(126),be=Object(n.forwardRef)((function(e,t){var a=Object(n.useContext)(pe),o=Object(K.a)(a,2),c=o[0],i=o[1],l=Object(n.useState)(c.database),u=Object(K.a)(l,2),s=u[0],m=u[1];Object(n.useImperativeHandle)(t,(function(){return{nextFormation:function(){c.formNum===s.length-1?i({type:"RESET_FORMATION"}):i({type:"NEXT_FORMATION"})},prevFormation:function(){0===c.formNum?i({type:"SET_FORMATION",num:s.length-1}):i({type:"PREV_FORMATION"})}}}));var d={};function p(e,t,a,n){var r=s;r[e].dancers[t].x=a,r[e].dancers[t].y=n,m(r)}Object(n.useEffect)((function(){for(var e in d){var t=s[c.formNum];d[e].move(t.dancers[e].x,t.dancers[e].y,t.duration),d[e].changeColor(t.dancers[e].color)}}),[c.formNum]);for(var f=[],h=function(){var e=Object(K.a)(v[g],2),t=e[0],a=e[1];f.push(r.a.createElement(ve,{handler:p,x:a.x*ie,y:125*a.y,name:t,color:a.color,key:t,ref:function(e){return d[t]=e}}))},g=0,v=Object.entries(s[c.formNum].dancers);g<v.length;g++)h();return r.a.createElement(X.a,{style:ye.mainContainer},r.a.createElement(X.a,{style:ye.grid},r.a.createElement(Ee.b,{id:"grid",flow:"row dense",columns:8,style:{position:"absolute",width:"100%",height:"100%"},gap:"3px"},function(e){for(var t=[],a=r.a.createElement(Ee.a,{width:1,style:{backgroundColor:"lightgray",position:"relative"}}),n=0;n<32;n++)t.push(a);return t}()),r.a.createElement(X.a,null,f)))})),ye=J.a.create({mainContainer:{flex:1,alignItems:"center",justifyContent:"center"},grid:{width:"100%",height:"500px",borderColor:"black",alignItems:"center"}}),xe=be,Oe=a(175),je=a.n(Oe),we=a(176),Ne=a.n(we),ke=Object(n.forwardRef)((function(e,t){var a=Object(n.useState)(null),o=Object(K.a)(a,2),c=o[0],i=o[1],l=Object(n.useContext)(pe),u=Object(K.a)(l,2),s=u[0],m=u[1],d=Object(n.useState)(!0),p=Object(K.a)(d,2),f=p[0],h=p[1];Object(n.useImperativeHandle)(t,(function(){return{playAudio:function(){c.player.play()},pauseAudio:function(){c.player.pause()},dropPoint:function(){c.points.add({time:c.player.getCurrentTime(),labelText:"Test point",color:"black"}),m({type:"ADD_FORMATION",time:c.player.getCurrentTime()})}}}));function g(e){var t=function e(t,a,n,r){if(r-n<=1)return n;if(a>=t[r])return r;var o=Math.floor((n+r)/2);return t[o]>a?e(t,a,n,o):e(t,a,o,r)}(s.starts,e,0,s.starts.length-1);m({type:"SET_FORMATION",num:t})}Object(n.useEffect)((function(){v()}),[]),Object(n.useEffect)((function(){null!=c&&f&&(c.on("player.timeupdate",g),h(!1))}),[c,f]);var v=function(){for(var e=new(window.AudioContext||window.webkitAudioContext),t=[],a=0;a<s.starts.length;a++)t.push({time:s.starts[a],labelText:"Formation #"+a,color:"#FF0000"});var n={containers:{overview:document.getElementById("overview-container"),zoomview:document.getElementById("zoomview-container")},mediaElement:document.querySelector("audio"),webAudio:{audioContext:e},timeLabelPrecision:2,points:t};i(je.a.init(n,(function(e,t){e&&console.error("Failed to initialize Peaks instance: "+e.message)})))};return r.a.createElement("div",null,r.a.createElement("div",{id:"peaks-container"},r.a.createElement("div",{id:"zoomview-container"}),r.a.createElement("div",{id:"overview-container"})),r.a.createElement("audio",null,r.a.createElement("source",{src:Ne.a})),s.starts.toString(),r.a.createElement("br",null),r.a.createElement("br",null))}));function Ce(){var e=Object(O.a)(["\n    width: 100px;\n    margin: 10px;\n"]);return Ce=function(){return e},e}function Se(){var e=Object(O.a)(["\n  align-items: center;\n  text-align:center;\n  margin: 10px;\n  width: 100%;\n  flex: 1;\n  column-gap: 20px;\n  justify-content: space-between;\n"]);return Se=function(){return e},e}var Ie=j.a.div(Se()),Ae=Object(j.a)(p.a)(Ce()),Re=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null),a=Object(n.useState)("Play"),o=Object(K.a)(a,2),c=o[0],i=o[1],l=Object(n.useState)(0),u=Object(K.a)(l,2),s=u[0];u[1];return r.a.createElement("div",null,r.a.createElement(xe,{ref:e}),r.a.createElement(Ie,null,s,r.a.createElement("hr",null),r.a.createElement(Ae,{variant:"contained",color:"secondary",onClick:function(){e.current.prevFormation()}},"Previous"),r.a.createElement(Ae,{variant:"contained",color:"secondary",onClick:function(){e.current.nextFormation()}},"Next"),r.a.createElement(Ae,{variant:"contained",color:"secondary",onClick:function(){"Play"===c?(i("Pause"),t.current.playAudio()):(i("Play"),t.current.pauseAudio())}},c),r.a.createElement(Ae,{variant:"contained",color:"secondary",onClick:function(){t.current.dropPoint()}},"New")),r.a.createElement("div",{style:{textAlign:"center",margin:"10px",height:"450px"}},r.a.createElement(ke,{ref:t})))};function Te(){var e=Object(O.a)(["\n    width: 100px;\n    margin: 10px;\n"]);return Te=function(){return e},e}var Fe=Object(j.a)(p.a)(Te());T.apps.length||T.initializeApp({apiKey:"AIzaSyCP7f-0gM04PNKyg_61zNHrEcoGuv5csww",authDomain:"choreox.firebaseapp.com",databaseURL:"https://choreox.firebaseio.com",projectId:"choreox",storageBucket:"choreox.appspot.com",messagingSenderId:"282857958796",appId:"1:282857958796:web:a4823f4d0f62548ee9baa9",measurementId:"G-G85QRHSBW3"});var Pe=function(e){return r.a.createElement("div",null,r.a.createElement(Fe,{variant:"contained",color:"secondary",onClick:function(){return T.auth().currentUser,void L.a.get("http://localhost:5000/create_spreadsheet/1").then((function(e){var t=e;console.log(t)})).catch((function(e){console.log(e)}))}},"Create Spreadsheet"),r.a.createElement(Fe,{variant:"contained",color:"secondary",onClick:function(){return function(){T.auth().currentUser;var e={userid:1,spreadsheetid:"1WfNvpe6Me8YEXejkjazcBUP6VZt9GEst4Q9uSKe2HjY",formation:{songA:{formation1:{A:{x:2,y:3},B:{x:2,y:1}},formation2:{A:{x:3,y:3},B:{x:2,y:1}}},songB:{formation1:{A:{x:2,y:3},B:{x:2,y:1}},formation2:{A:{x:3,y:3},B:{x:2,y:1}}}},dancers:["A","B"]};console.log("sending"),L.a.post("http://localhost:5000/export2",e).then((function(t){console.log(e),console.log(t),console.log(t.status)})).catch((function(t){console.log(e),console.log(t)}))}()}},"Update Spreadsheet"),r.a.createElement(Fe,{variant:"contained",color:"secondary",onClick:function(){return function(){var t=e.history;T.auth().signOut().then((function(){t.push("./login")})).catch((function(e){console.log(e)}))}()}},"Log Out"))},We=(a(251),function(){return r.a.createElement("div",{className:"cont"},"\xa0 \xa0 \xa0",r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"gandalf"},r.a.createElement("div",{className:"fireball"}),r.a.createElement("div",{className:"skirt"}),r.a.createElement("div",{className:"sleeves"}),r.a.createElement("div",{className:"shoulders"},r.a.createElement("div",{className:"hand left"}),r.a.createElement("div",{className:"hand right"})),r.a.createElement("div",{className:"head"},r.a.createElement("div",{className:"hair"}),r.a.createElement("div",{className:"beard"}))),r.a.createElement("div",{className:"message"},r.a.createElement("h1",null,"403 - You Shall Not Pass"),r.a.createElement("p",null,"Uh oh, Gandalf is blocking the way!",r.a.createElement("br",null),"Maybe you have a typo in the url? Or you meant to go to a different location? Like...Hobbiton?")),r.a.createElement("p",null,r.a.createElement(i.b,{to:"/login"},"Back to Login"))))});a(252);function De(){var e=Object(O.a)(["\n    border: 16px solid #ffffff; \n    border-top: 16px solid #000000;\n    border-radius: 50%;\n    margin: auto;\n    margin-top: 40vh;\n    width: 120px;\n    height: 120px;\n    animation: spin 2s linear infinite;\n"]);return De=function(){return e},e}var Me=r.a.createContext(),ze=j.a.div(De()),Be=function(e){var t=e.children,a=Object(n.useState)(null),o=Object(K.a)(a,2),c=o[0],i=o[1],l=Object(n.useState)(!0),u=Object(K.a)(l,2),s=u[0],m=u[1];return Object(n.useEffect)((function(){W.auth().onAuthStateChanged((function(e){i(e),m(!1)}))}),[]),s?r.a.createElement(ze,null):r.a.createElement(Me.Provider,{value:{currentUser:c}},t)},Ue=a(182),Le=function(e){var t=e.component,a=Object(Ue.a)(e,["component"]),o=Object(n.useContext)(Me).currentUser;return r.a.createElement(l.b,Object.assign({},a,{render:function(e){return o?r.a.createElement(t,e):r.a.createElement(l.a,{to:"/unauthorized"})}}))},Ve=(a(5),a(305)),_e=a(293),qe=a(300),He=a(297),Ge=a(298),Ye=a(299),Ke=a(177),Xe=a.n(Ke),Je=a(178),Qe=a.n(Je),Ze=Object(x.a)({list:{width:250},fullList:{width:"auto"},link:{textDecoration:"none",color:"#252525"}}),$e=Object(n.forwardRef)((function(e,t){var a=Ze(),o=Object(n.useState)(!1),c=Object(K.a)(o,2),l=c[0],u=c[1],s=Object(n.useState)([]),m=Object(K.a)(s,2),d=m[0],p=m[1];Object(n.useImperativeHandle)(t,(function(){return{toggle:function(){u(!l)}}}));var f=function(){h(),u(!l)};Object(n.useEffect)((function(){h()}),[]);var h=function(){P.collection("users").doc(W.auth().currentUser.uid).get().then((function(e){e.exists?p(e.data().teams):console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)}))};return r.a.createElement("div",null,r.a.createElement(Ve.a,{anchor:"left",open:l,onClose:f},r.a.createElement("div",{className:a.list,role:"presentation",onClick:f,onKeyDown:f},r.a.createElement(_e.a,null,d.map((function(e,t){return r.a.createElement(He.a,{button:!0,key:e},r.a.createElement(Ge.a,null,t%2===0?r.a.createElement(Xe.a,null):r.a.createElement(Qe.a,null)),r.a.createElement(Ye.a,{primary:e}))}))),r.a.createElement(qe.a,null),r.a.createElement(_e.a,null,r.a.createElement(i.b,{to:"/register",onClick:function(){W.auth().signOut().then((function(){})).catch((function(e){alert(e)}))},className:a.link},r.a.createElement(He.a,{button:!0,key:"Logout"},r.a.createElement(Ye.a,{primary:"Logout"})))))))})),et=a(114),tt=a.n(et);function at(){var e=Object(n.useRef)();return r.a.createElement("div",null,r.a.createElement($e,{ref:e}),r.a.createElement(p.a,{onClick:function(){return e.current.toggle()}},r.a.createElement(tt.a,{style:{fontSize:45,height:"5vh"}})),r.a.createElement(w.a,{maxWidth:"lg",style:{height:"95vh"}},r.a.createElement(g.a,{container:!0,align:"center",justify:"center",alignItems:"center",direction:"column",style:{height:"80vh"}},r.a.createElement("h1",null,"Formatio"),r.a.createElement(i.b,{to:"/create",style:{textDecoration:"none"}},r.a.createElement(p.a,{variant:"contained",color:"primary",style:{margin:"10px"}},"CREATE A NEW TEAM")),r.a.createElement(p.a,{variant:"contained",color:"primary",style:{margin:"10px"}},"JOIN A TEAM"))))}var nt=a(180),rt=a.n(nt),ot=a(179),ct=a.n(ot);function it(){var e=Object(n.useRef)(),t=Object(n.useState)(""),a=Object(K.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(""),u=Object(K.a)(l,2),s=u[0],m=u[1],d=Object(n.useState)(7),f=Object(K.a)(d,2),v=f[0],E=f[1],b=Object(n.useState)(4),y=Object(K.a)(b,2),x=y[0],O=y[1],j=Object(n.useState)(""),N=Object(K.a)(j,2),k=N[0],C=N[1];return Object(n.useEffect)((function(){c(function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",a=t.length;""===e;){e="";for(var n=0;n<5;n++)e+=t.charAt(Math.floor(Math.random()*a))}return e}())}),[]),r.a.createElement("div",null,r.a.createElement($e,{ref:e}),r.a.createElement(p.a,{onClick:function(){return e.current.toggle()}},r.a.createElement(tt.a,{style:{fontSize:45,height:"5vh"}})),r.a.createElement(w.a,{maxWidth:"lg",style:{height:"95vh"}},r.a.createElement(g.a,{container:!0,align:"center",spacing:3},r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement("h1",null,"Formatio"),r.a.createElement("h2",null,"Create Team"),r.a.createElement(rt.a,{style:{fontSize:45}})),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(h.a,{margin:"normal",fullWidth:!0,id:"standard-read-only-input",label:"Team ID (Write this down)",name:"teamid",variant:"filled",value:o,InputProps:{readOnly:!0}})),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(h.a,{margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Team Name",name:"name",variant:"filled",value:s,onChange:function(e){return m(e.target.value)},autoFocus:!0})),r.a.createElement(g.a,{item:!0,xs:6},r.a.createElement(h.a,{margin:"normal",required:!0,fullWidth:!0,name:"length",variant:"filled",id:"standard-number",label:"Length",type:"number",value:v,onChange:function(e){return E(e.target.value)},InputLabelProps:{shrink:!0}})),r.a.createElement(g.a,{item:!0,xs:6},r.a.createElement(h.a,{margin:"normal",required:!0,fullWidth:!0,name:"depth",variant:"filled",id:"standard-number",label:"Depth",type:"number",value:x,onChange:function(e){return O(e.target.value)},InputLabelProps:{shrink:!0}})),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(h.a,{variant:"filled",fullWidth:!0,id:"standard-multiline-static",label:"Invitations (separate emails with comma)",multiline:!0,value:k,onChange:function(e){return C(e.target.value)},rows:3})),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(i.b,{to:"/create",style:{textDecoration:"none"}},r.a.createElement(p.a,{onClick:function(){P.collection(o).doc("config").set({name:s,length:v,depth:x,initialInvites:k}),P.collection("users").doc(W.auth().currentUser.uid).get().then((function(e){e.exists?console.log("Document data:",e.data()):console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)}));var e=W.auth().currentUser.uid;P.collection("users").doc(e).update({teams:ct.a.firestore.FieldValue.arrayUnion(o)})},fullWidth:!0,variant:"contained",color:"primary"},"Create Team"))),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(i.b,{to:"/dashboard",variant:"body2"},"Cancel")))))}function lt(){return r.a.createElement(Be,null,r.a.createElement(i.a,null,r.a.createElement(fe,null,r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/register",component:q}),r.a.createElement(Le,{exact:!0,path:"/spreadsheet",component:Pe}),r.a.createElement(Le,{exact:!0,path:"/formations",component:Re}),r.a.createElement(Le,{exact:!0,path:"/create",component:it}),r.a.createElement(l.b,{exact:!0,path:"/unauthorized",component:We}),r.a.createElement(l.b,{exact:!0,path:"/forgot",component:Y}),r.a.createElement(l.b,{exact:!0,path:"/drawer",component:$e}),r.a.createElement(Le,{path:"/home",component:at}),r.a.createElement(l.b,{path:"/",component:B})))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(lt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[198,1,2]]]);
//# sourceMappingURL=main.07a589fb.chunk.js.map