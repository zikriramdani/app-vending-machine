(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[752],{424:function(n,e,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/machine",function(){return c(9290)}])},2684:function(n,e,c){"use strict";function s(n){return(n=n||0).toString().split("").reverse().join("").match(/\d{1,3}/g).join(".").split("").reverse().join("")}c.d(e,{x:function(){return s}})},9290:function(n,e,c){"use strict";c.r(e);var s=c(5893);c(7294);var r=c(2134),i=function(n){var e=n.productsList,c=n.coins,i=n.onBuy;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"row",children:e&&e.map(function(n,e){return(0,s.jsx)("div",{className:"col-6 mb-3 d-flex flex-column",children:(0,s.jsx)(r.default,{id:n.id,name:n.name,price:n.price,stock:n.stock,coins:c,onBuy:i},n.id)},e)})})})};e.default=i},2134:function(n,e,c){"use strict";c.r(e);var s=c(5893);c(7294);var r=c(2684),i=function(n){var e=n.id,c=n.name,i=n.price,t=n.stock,a=n.coins,d=n.onBuy;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"card h-100",children:(0,s.jsxs)("div",{className:"card-body",children:[(0,s.jsx)("h5",{className:"card-title",children:c||"Name "+e}),(0,s.jsxs)("p",{className:"card-text mb-0",children:["Rp. ",(0,r.x)(i||"")]}),(0,s.jsxs)("small",{children:["stock : ",t||"0"]}),t>=1?(0,s.jsx)(s.Fragment,{children:i<=a?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("a",{onClick:function(){d(i,e)},className:"btn btn-primary w-100",children:"Beli"})}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"btn btn-secondary w-100",children:"Coin belum cukup"})})}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"btn btn-dark w-100",children:"Stok habis"})})]})})})};e.default=i}},function(n){n.O(0,[774,888,179],function(){return n(n.s=424)}),_N_E=n.O()}]);