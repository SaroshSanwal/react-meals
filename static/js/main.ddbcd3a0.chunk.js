(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__3FcQt",total:"Cart_total__2RYXh",actions:"Cart_actions__3lA4I","button--alt":"Cart_button--alt__3DHVC",button:"Cart_button__1b0kx"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3G8_x",summary:"CartItem_summary__1WIuI",price:"CartItem_price__2fGZv",amount:"CartItem_amount__q3uP0",actions:"CartItem_actions__116d-"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__1umy2",icon:"HeaderCartButton_icon__2Tdf4",badge:"HeaderCartButton_badge__TKi3A",bump:"HeaderCartButton_bump__XxIlm"}},function(e,t,n){e.exports={meal:"MealItem_meal__2Sx_Q",description:"MealItem_description__Xy0Ox",price:"MealItem_price__3-_f2"}},,function(e,t,n){e.exports={backdrop:"Modal_backdrop__1Vk3Z",modal:"Modal_modal__3YyRA","slide-down":"Modal_slide-down__2X7bt"}},function(e,t,n){e.exports={input:"Input_input__5KdkX"}},,function(e,t,n){e.exports={header:"Header_header__3UhxL","main-image":"Header_main-image__3pAPe"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__1x0xz","meals-appear":"MealsSummary_meals-appear__1lP5t"}},function(e,t,n){e.exports={form:"MealItemForm_form__13aq_"}},,function(e,t,n){e.exports={card:"Card_card__3KF50"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__1Thbn","meals-appear":"AvailableMeals_meals-appear__30XoM"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=(n(25),n(3)),r=n(1),s=n.n(r),o=n(2),l=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),m=n(11),u=n.n(m),d=n(0),j=function(e){return Object(d.jsx)("div",{className:u.a.backdrop,onClick:e.onClose})},b=function(e){return Object(d.jsx)("div",{className:u.a.modal,children:Object(d.jsx)("div",{className:u.a.content,children:e.children})})},x=function(e){var t=document.getElementById("overlays");return Object(d.jsxs)(d.Fragment,{children:[c.a.createPortal(Object(d.jsx)(j,{onClose:e.onClose}),t),c.a.createPortal(Object(d.jsx)(b,{children:e.children}),t)]})},p=n(4),O=n.n(p),h=n(5),_=n.n(h),f=function(e){var t="$".concat(e.price.toFixed(2));return Object(d.jsxs)("li",{className:_.a["cart-item"],children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:e.name}),Object(d.jsxs)("div",{className:_.a.summary,children:[Object(d.jsx)("span",{className:_.a.price,children:t}),Object(d.jsxs)("span",{className:_.a.amount,children:["x ",e.amount]})]})]}),Object(d.jsxs)("div",{className:_.a.actions,children:[Object(d.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(d.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},v=function(e){var t=Object(r.useContext)(l),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.removeItem(e)},i=function(e){t.addItem(Object(o.a)(Object(o.a)({},e),{},{amount:1}))},s=Object(d.jsx)("ul",{className:O.a["cart-items"],children:t.items.map((function(e){return Object(d.jsx)(f,{name:e.name,amount:e.amount,price:e.price,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e)},e.id)}))});return Object(d.jsxs)(x,{onClose:e.onClose,children:[s,Object(d.jsxs)("div",{className:O.a.total,children:[Object(d.jsx)("span",{children:"Total Amount"}),Object(d.jsx)("span",{children:n})]}),Object(d.jsxs)("div",{className:O.a.actions,children:[Object(d.jsx)("button",{className:O.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(d.jsx)("button",{className:O.a.button,children:"Order"})]})]})},C=n.p+"static/media/meals.2971f633.jpg",A=n(14),N=n.n(A),g=n(8),y=n.n(g),I=function(){return Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(d.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},M=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useContext)(l).items,o=s.reduce((function(e,t){return e+t.amount}),0),m="".concat(y.a.button," ").concat(a?y.a.bump:"");return Object(r.useEffect)((function(){if(0!==s.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("button",{className:m,onClick:e.onClick,children:[Object(d.jsx)("span",{className:y.a.icon,children:Object(d.jsx)(I,{})}),Object(d.jsx)("span",{children:"Your Cart "}),Object(d.jsx)("span",{className:y.a.badge,children:o})]})})},k=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("header",{className:N.a.header,children:[Object(d.jsx)("h1",{children:"ReactMeals"}),Object(d.jsx)(M,{onClick:e.onShowCart})]}),Object(d.jsx)("div",{className:N.a["main-image"],children:Object(d.jsx)("img",{src:C,alt:"A table full of delicious food!"})})]})},w=n(15),F=n.n(w),H=function(){return Object(d.jsxs)("section",{className:F.a.summary,children:[Object(d.jsx)("h2",{className:F.a.h2,children:"Delicious Food, Delivered To You"}),Object(d.jsx)("p",{children:"Choose your favourite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at a home."}),Object(d.jsx)("p",{children:"All our meals, are cooked with high-quality ingredients, Just-in-time and ofcourse by experienced chefs!"})]})},S=n(18),B=n.n(S),R=function(e){return Object(d.jsx)("div",{className:B.a.card,children:e.children})},T=n(19),D=n.n(T),E=n(9),P=n.n(E),V=n(12),X=n.n(V),z=s.a.forwardRef((function(e,t){return Object(d.jsxs)("div",{className:X.a.input,children:[Object(d.jsx)("label",{htmlFor:e.input.id,className:X.a.label,children:e.label}),Object(d.jsx)("input",Object(o.a)(Object(o.a)({ref:t},e.input),{},{className:X.a.input}))]})})),Y=n(16),q=n.n(Y),G=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useRef)();return Object(d.jsxs)("form",{className:q.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(d.jsx)(z,{ref:s,label:"Amount",input:{id:"amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(d.jsx)("button",{className:q.a.button,children:"+ Add"}),!a&&Object(d.jsx)("p",{children:"Please enter a Valid Amount (1-5) ."})]})},J=function(e){var t=Object(r.useContext)(l),n="$".concat(e.price.toFixed(2));return Object(d.jsx)("li",{children:Object(d.jsxs)("div",{className:P.a.meal,children:[Object(d.jsx)("h3",{className:P.a.h3,children:e.name}),Object(d.jsx)("div",{className:P.a.description,children:e.description}),Object(d.jsx)("div",{className:P.a.price,children:n}),Object(d.jsx)(G,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})]})})},K=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],$=function(){var e=K.map((function(e){return Object(d.jsx)(J,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(d.jsx)("section",{className:D.a.meals,children:Object(d.jsx)(R,{children:Object(d.jsx)("ul",{children:e})})})},Q=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(H,{}),Object(d.jsx)($,{})]})},Z=n(20),L=n(17),U={items:[],totalAmount:0},W=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(o.a)(Object(o.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(L.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,l=e.items.findIndex((function(e){return e.id===t.id})),m=e.items[l],u=e.totalAmount-m.price;if(1===m.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(o.a)(Object(o.a)({},m),{},{amount:m.amount-1});Object(L.a)(e.items),Object(Z.a)("updatedItem"),s[l]=d}return{items:s,totalAmount:u}}return U},ee=function(e){var t=Object(r.useReducer)(W,U),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(d.jsx)(l.Provider,{value:s,children:e.children})};var te=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)(ee,{children:[n&&Object(d.jsx)(v,{onClose:function(){a(!1)}}),Object(d.jsx)(k,{onShowCart:function(){a(!0)}}),Object(d.jsx)("main",{children:Object(d.jsx)(Q,{})})]})};c.a.render(Object(d.jsx)(te,{}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.ddbcd3a0.chunk.js.map