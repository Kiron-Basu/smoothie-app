(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports={Oats:"SmoothieIngredient__Oats__2aJ71",Banana:"SmoothieIngredient__Banana__gMMOE",Strawberries:"SmoothieIngredient__Strawberries__1hi5M",Raspberries:"SmoothieIngredient__Raspberries__14yea",Kiwi:"SmoothieIngredient__Kiwi__dah8N",Blueberries:"SmoothieIngredient__Blueberries__2r3DY",Kale:"SmoothieIngredient__Kale__BkcTT",Pineapple:"SmoothieIngredient__Pineapple__1v4dD",Mango:"SmoothieIngredient__Mango__2xWgD"}},12:function(e,t,a){e.exports={Container:"Blender__Container__226dZ",textBoxWrapper:"Blender__textBoxWrapper__x9BVw",Overlay:"Blender__Overlay__3_EUW","text-box-wrapper":"Blender__text-box-wrapper__2TQjD",baseTrapezium:"Blender__baseTrapezium__2vI6n",baseRectangle:"Blender__baseRectangle__2nKrb",topper:"Blender__topper__ntkSN",topperFoundation:"Blender__topperFoundation__2pcBH",shake:"Blender__shake__2G7_K"}},14:function(e,t,a){e.exports={SideDrawer:"SideDrawer__SideDrawer__3wvlM",Open:"SideDrawer__Open__3xsf8",Close:"SideDrawer__Close__2S6c7",Logo:"SideDrawer__Logo__10IHv"}},15:function(e,t,a){e.exports={BuildControl:"BuildControl__BuildControl__Ym-_y",Label:"BuildControl__Label__20aLP",Less:"BuildControl__Less__3lFNH",More:"BuildControl__More__2JDi_",ControlGroup:"BuildControl__ControlGroup__12RV6"}},16:function(e,t,a){e.exports={ContactData:"ContactData__ContactData__2l1V-",Input:"ContactData__Input__3C3o1"}},17:function(e,t,a){e.exports={BuildControls:"BuildControls__BuildControls__2ADBF",Wrap:"BuildControls__Wrap__1mKaV",Price:"BuildControls__Price__3o7-8",OrderButton:"BuildControls__OrderButton__kK4m3",enable:"BuildControls__enable__1_9h0"}},21:function(e,t,a){e.exports={Toolbar:"Toolbar__Toolbar__2hkfg",Logo:"Toolbar__Logo__24rue",DesktopOnly:"Toolbar__DesktopOnly__15Sc_"}},24:function(e,t,a){e.exports={NavigationItem:"NavigationItem__NavigationItem__3YSjr",active:"NavigationItem__active__2GQz1"}},25:function(e,t,a){e.exports={Smoothie:"Smoothie__Smoothie__2H3H1"}},26:function(e,t,a){e.exports={Button:"Button__Button__ajevi",Success:"Button__Success__1DMln",Danger:"Button__Danger__18hYt"}},34:function(e,t,a){e.exports={Content:"Layout__Content__1DWrA"}},35:function(e,t,a){e.exports=a.p+"static/media/smoothie-logo.33734e66.png"},36:function(e,t,a){e.exports={Logo:"Logo__Logo__2A07e"}},37:function(e,t,a){e.exports={NavigationItems:"NavigationItems__NavigationItems__3HY9i"}},39:function(e,t,a){e.exports={MenuToggle:"MenuToggle__MenuToggle__3vBdI"}},40:function(e,t,a){e.exports={Backdrop:"Backdrop__Backdrop__eeZpu"}},41:function(e,t,a){e.exports={Modal:"Modal__Modal__cd320"}},43:function(e,t,a){e.exports={Loader:"Spinner__Loader__3dgUo",load8:"Spinner__load8__3MmNW"}},44:function(e,t,a){e.exports={CheckoutSummary:"CheckoutSummary__CheckoutSummary__-avOx"}},45:function(e,t,a){e.exports={Order:"Order__Order__W-Npf"}},46:function(e,t,a){e.exports=a(95)},52:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(33),l=a.n(o),i=a(97),c=(a(52),a(2)),s=a(3),u=a(5),d=a(4),p=a(6),m=a(98),h=a(96),_=a(34),g=a.n(_),b=a(21),f=a.n(b),v=a(35),E=a.n(v),y=a(36),k=a.n(y),O=function(e){return r.a.createElement("div",{className:k.a.Logo},r.a.createElement("img",{src:E.a,alt:"Smoothie Logo"}))},C=a(37),w=a.n(C),j=a(99),S=a(24),N=a.n(S),x=function(e){return r.a.createElement("li",{className:N.a.NavigationItem},r.a.createElement(j.a,{to:e.link,activeClassName:N.a.active,exact:!0},e.children))},B=function(e){return r.a.createElement("ul",{className:w.a.NavigationItems},r.a.createElement(x,{link:"/",exact:e.exact},"Smoothie Maker"),r.a.createElement(x,{link:"/orders"},"Orders"))},I=a(39),D=a.n(I),P=function(e){return r.a.createElement("div",{className:D.a.MenuToggle,onClick:e.toggleClick},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},H=function(e){return r.a.createElement("header",{className:f.a.Toolbar},r.a.createElement(P,{toggleClick:e.clicked}),r.a.createElement("div",{className:f.a.Logo},r.a.createElement(O,null)),r.a.createElement("nav",{className:f.a.DesktopOnly},r.a.createElement(B,null)))},M=a(14),L=a.n(M),T=a(40),W=a.n(T),F=function(e){return e.show?r.a.createElement("div",{className:W.a.Backdrop,onClick:e.clicked}):null},R=function(e){var t=[L.a.SideDrawer,L.a.Close];return e.open&&(t=[L.a.SideDrawer,L.a.open]),r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:L.a.Logo},r.a.createElement(O,null)),r.a.createElement("nav",null,r.a.createElement(B,null))))},A=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},a.sideDrawerClosedHandler=function(){a.setState({showSideDrawer:!1}),console.log("reached clsoed handler")},a.sideDrawerOpenedHandler=function(){a.setState(function(e){return console.log("got here"),{showSideDrawer:!e.showSideDrawer}})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(H,{clicked:this.sideDrawerOpenedHandler}),r.a.createElement(R,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler})),r.a.createElement("main",{className:g.a.Content},this.props.children))}}]),t}(n.Component),K=a(13),Y=a(20),U=a(25),z=a.n(U),J=a(11),q=a.n(J),G=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"oats":e=r.a.createElement("div",{className:q.a.Oats});break;case"banana":e=r.a.createElement("div",{className:q.a.Banana});break;case"strawberries":e=r.a.createElement("div",{className:q.a.Strawberries});break;case"raspberries":e=r.a.createElement("div",{className:q.a.Raspberries});break;case"kiwi":e=r.a.createElement("div",{className:q.a.Kiwi});break;case"blueberries":e=r.a.createElement("div",{className:q.a.Blueberries});break;case"kale":e=r.a.createElement("div",{className:q.a.Kale});break;case"pineapple":e=r.a.createElement("div",{className:q.a.Pineapple});break;case"mango":e=r.a.createElement("div",{className:q.a.Mango});break;default:e=null}return e}}]),t}(n.Component),V=a(12),Z=a.n(V),Q=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Z.a.topper}),r.a.createElement("div",{className:Z.a.topperFoundation}),r.a.createElement("div",{className:Z.a.Overlay},r.a.createElement("div",{className:Z.a.textBoxWrapper},r.a.createElement("div",null,e.ingredients))),r.a.createElement("div",{className:Z.a.baseTrapezium}),r.a.createElement("div",{className:Z.a.baseRectangle}))},$=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(Y.a)(Array(e.ingredients[t])).map(function(e,a){return r.a.createElement(G,{key:t+a,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients!")),r.a.createElement("div",{className:z.a.Smoothie},r.a.createElement(Q,{className:z.a.Zindex,ingredients:t}))},X=a(17),ee=a.n(X),te=a(15),ae=a.n(te),ne=function(e){return r.a.createElement("div",{className:ae.a.ControlGroup},r.a.createElement("div",{className:ae.a.BuildControl},r.a.createElement("div",{className:ae.a.Label},e.label),r.a.createElement("button",{className:ae.a.Less,onClick:e.remove,disabled:e.disabledInfo},"Less"),r.a.createElement("button",{className:ae.a.More,onClick:e.add},"More")))},re=[{label:"Oats",type:"oats"},{label:"Banana",type:"banana"},{label:"Strawberries",type:"strawberries"},{label:"Raspberries",type:"raspberries"},{label:"Kiwi",type:"kiwi"},{label:"Blueberries",type:"blueberries"},{label:"Kale",type:"kale"},{label:"Pineapple",type:"pineapple"},{label:"Mango",type:"mango"}],oe=function(e){return r.a.createElement("div",{className:ee.a.BuildControls},r.a.createElement("p",{className:ee.a.Price},"Current Price: ",r.a.createElement("strong",null,"\xa3",e.price.toFixed(2))),r.a.createElement("div",{className:ee.a.Wrap},re.map(function(t){return r.a.createElement(ne,{key:t.label,label:t.label,type:t.type,add:function(){return e.add(t.type)},remove:function(){return e.remove(t.type)},disabledInfo:e.disabledInfo[t.type]})})),r.a.createElement("button",{className:ee.a.OrderButton,onClick:e.ordered,disabled:!e.purchasable},"ORDER NOW"))},le=a(41),ie=a.n(le),ce=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{className:ie.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(n.Component),se=a(26),ue=a.n(se),de=function(e){return r.a.createElement("button",{onClick:e.clicked,className:[ue.a.Button,ue.a[e.btnType]].join(" ")},e.children)},pe=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillUpdate",value:function(){console.log("will update in ordersummary triggered")}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map(function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.props.ingredients[t])});return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"Your smoothie has the follwing ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: \xa3 ",this.props.price.toFixed(2))),r.a.createElement("p",null,"Do you want to contine to the checkout?"),r.a.createElement(de,{btnType:"Danger",clicked:this.props.purchaseCancelled},"CANCEL"),r.a.createElement(de,{btnType:"Success",clicked:this.props.purchaseContinued},"CONTINUE"))}}]),t}(n.Component),me=a(42),he=a.n(me).a.create({baseURL:"https://react-my-burger-e7faf.firebaseio.com/"}),_e=function(e,t){return function(a){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(r)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(p.a)(n,a),Object(s.a)(n,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use(function(t){return e.setState({error:null}),t}),this.resInterceptor=t.interceptors.response.use(function(e){return e},function(t){e.setState({error:t})})}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ce,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),n}(n.Component)},ge=a(43),be=a.n(ge),fe=function(){return r.a.createElement("div",{className:be.a.Loader},"Loading...")},ve={oats:.2,banana:.2,strawberries:.4,raspberries:.3,kiwi:.2,blueberries:.4,kale:.3,pineapple:.25,mango:.35},Ee=_e(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:null,totalPrice:0,purchaseable:!1,purchasing:!1,loading:!1,error:!1},a.purchaseHandler=function(){a.setState({purchasing:!0})},a.cancelPurchaseHandler=function(){a.setState({purchasing:!1})},a.continuePurchaseHandler=function(){var e=[];for(var t in a.state.ingredients)e.push(encodeURIComponent(t)+"="+encodeURIComponent(a.state.ingredients[t]));e.push("price="+a.state.totalPrice);var n=e.join("&");a.props.history.push({pathname:"/checkout",search:"?"+n})},a.addIngredientHandler=function(e){var t=Object(K.a)({},a.state.ingredients);if(Object.keys(t).reduce(function(e,a){return e+t[a]},0)>12)a.tooManyIngredientsHandler();else{t[e]++;var n=a.state.totalPrice+ve[e];a.setState({ingredients:t,totalPrice:n}),a.updatePurchaseState(t)}},a.removeIngredientHandler=function(e){var t=Object(K.a)({},a.state.ingredients);t[e]--;var n=a.state.totalPrice-ve[e];a.setState({ingredients:t,totalPrice:n}),a.updatePurchaseState(t)},a.tooManyIngredientsHandler=function(){alert("You have reached the maximum number of ingredients allowed!")},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props),he.get("https://react-my-burger-e7faf.firebaseio.com/ingredients.json").then(function(t){e.setState({ingredients:t.data})}).catch(function(t){e.setState({error:!0})})}},{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=null;this.state.loading&&(e=r.a.createElement(fe,null));var t=Object(K.a)({},this.state.ingredients);for(var a in t)t[a]=t[a]<=0;var n=this.state.error?r.a.createElement("p",null,"Ingredients can't be loaded"):r.a.createElement(fe,null);return this.state.ingredients&&(n=r.a.createElement(r.a.Fragment,null,r.a.createElement($,{ingredients:this.state.ingredients}),r.a.createElement(oe,{add:this.addIngredientHandler,remove:this.removeIngredientHandler,disabledInfo:t,price:this.state.totalPrice,ordered:this.purchaseHandler,purchasable:this.state.purchasable})),e=r.a.createElement(pe,{ingredients:this.state.ingredients,purchaseCancelled:this.cancelPurchaseHandler,purchaseContinued:this.continuePurchaseHandler,price:this.state.totalPrice})),this.state.loading&&(e=r.a.createElement(fe,null)),r.a.createElement(r.a.Fragment,null,r.a.createElement(ce,{show:this.state.purchasing,modalClosed:this.cancelPurchaseHandler},e),n)}}]),t}(n.Component),he),ye=a(44),ke=a.n(ye),Oe=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(Y.a)(Array(e.ingredients[t])).map(function(e,a){return r.a.createElement(G,{key:t+a,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients!")),r.a.createElement("div",{className:ke.a.checkoutSummary},r.a.createElement("h1",null,"Enjoy your meal!"),r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(Q,{ingredients:t,style:{position:"relative"}})),r.a.createElement(de,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),r.a.createElement(de,{btnType:"Success",clicked:e.checkoutContinued},"CONINUE"))},Ce=a(16),we=a.n(Ce),je=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",adress:{street:"",postalCode:""},loading:!1},a.orderHandler=function(e){e.preventDefault(),console.log(a.props.ingredients),a.setState({loading:!0});var t={ingredients:a.props.ingredients,price:a.props.price,customer:{name:"Tom Jones",address:{street:"William Street",postCode:"SN31JP",country:"England"},email:"test@test.com"},deliveryMethod:"fastest"};he.post("/orders.json",t).then(function(e){console.log(e),a.setState({loading:!1}),a.props.history.push("/")}).catch(function(e){console.log(e),a.setState({loading:!1})})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=r.a.createElement("form",null,r.a.createElement("input",{className:we.a.Input,type:"text",name:"name",placeholder:"Your name"}),r.a.createElement("input",{className:we.a.Input,type:"email",name:"email",placeholder:"Your email"}),r.a.createElement("input",{className:we.a.Input,type:"text",name:"street",placeholder:"Street"}),r.a.createElement("input",{className:we.a.Input,type:"text",name:"postal",placeholder:"Postal Code"}),r.a.createElement(de,{btnType:"Success",clicked:this.orderHandler},"ORDER"));return this.state.loading&&(e=r.a.createElement(fe,null)),r.a.createElement("div",{className:we.a.ContactData},r.a.createElement("h4",null,"Enter your contact details"),e)}}]),t}(n.Component),Se=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:null,totalPrice:0},a.checkoutCancelledHandler=function(){a.props.history.goBack()},a.checkoutContinuedHandler=function(){a.props.history.replace("/checkout/contact-data")},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=new URLSearchParams(this.props.location.search);console.log("this is the query var --\x3e ",e);var t={},a=0,n=!0,r=!1,o=void 0;try{for(var l,i=e.entries()[Symbol.iterator]();!(n=(l=i.next()).done);n=!0){var c=l.value;console.log("ingredients[param] = "+t[c]+"  ingredients[param[0]] = "+t[c[0]]+"  ingredients[param[1]] =   "+t[c[1]]),"price"===c[0]?a=c[1]:t[c[0]]=+c[1]}}catch(s){r=!0,o=s}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}console.log(t),this.setState({ingredients:t,totalPrice:a})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(Oe,{ingredients:this.state.ingredients,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),r.a.createElement(h.a,{path:this.props.match.path+"/contact-data",render:function(t){return r.a.createElement(je,Object.assign({ingredients:e.state.ingredients,price:e.state.totalPrice},t))}}))}}]),t}(n.Component),Ne=a(45),xe=a.n(Ne),Be=function(e){var t=[];for(var a in e.ingredients)t.push({name:a,amount:e.ingredients[a]});var n=t.map(function(e){return r.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"2px 8px",border:"1px solid grey",padding:"5px"},key:e.name},e.name," (",e.amount,") ")});return r.a.createElement("div",{className:xe.a.Order},r.a.createElement("p",null,"Ingredients: ",n),r.a.createElement("p",null," Price: ",r.a.createElement("strong",null,"\xa3",e.price.toFixed(2))))},Ie=_e(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={orders:[],loading:!0},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;he.get("/orders.json").then(function(t){var a=[];for(var n in t.data)a.push(Object(K.a)({},t.data[n],{id:n}));console.log(a),e.setState({loading:!1,orders:a})}).catch(function(t){e.setState({loading:!1})})}},{key:"render",value:function(){return r.a.createElement("div",{style:{padding:"20px 0",height:"100vh"}},this.state.orders.map(function(e){return r.a.createElement(Be,{key:e.id,ingredients:e.ingredients,price:+e.price})}))}}]),t}(n.Component),he),De=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(A,null,r.a.createElement(m.a,null,r.a.createElement(h.a,{path:"/checkout",component:Se}),r.a.createElement(h.a,{path:"/orders",exact:!0,component:Ie}),r.a.createElement(h.a,{path:"/",exact:!0,component:Ee}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Pe=r.a.createElement(i.a,null,r.a.createElement(De,null));l.a.render(Pe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[46,2,1]]]);
//# sourceMappingURL=main.8c8a0a77.chunk.js.map