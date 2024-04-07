(()=>{"use strict";var n={385:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),e.hash&&(n+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(n)?'"'.concat(n,'"'):n):n}},993:(n,e,t)=>{n.exports=t.p+"assets/style.css"}},e={};function t(a){var c=e[a];if(void 0!==c)return c.exports;var r=e[a]={exports:{}};return n[a](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var a=e.getElementsByTagName("script");if(a.length)for(var c=a.length-1;c>-1&&(!n||!/^http(s?):/.test(n));)n=a[c--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,(()=>{var n=t(385),e=t.n(n),a=new URL(t(993),t.b);e()(a);class c{createMain(){const n=document.createElement("main");return n.classList.add("container"),n}createHeader(){const n=document.createElement("header");return n.classList.add("header"),n.innerHTML='\n      <header class="header">\n        <button class="btn garage">To Garage</button>\n        <button class="btn winners">To Winners</button>\n      </header>\n    ',n}createGenerator(){const n=document.createElement("section");return n.classList.add("generator"),n.innerHTML='\n      <section class="generator">\n        <div class="generator-create">\n          <input \n            type="text" \n            class="generator-text"\n            id="create-name"\n            required\n          >\n          <input \n            type="color" \n            class="generator-color"\n            id="create-color"\n            value="#ffffff"\n          >\n          <button class="btn create" type="submit">Create</button>\n        </div>\n        <div class="generator-update">\n          <input \n            type="text" \n            class="generator-text"\n            id="update-name"\n            required\n          >\n          <input \n            type="color" \n            class="generator-color"\n            id="update-color"\n            value="#ffffff"\n          >\n          <button class="btn update">Update</button>\n        </div>\n      </section>\n    ',n}createGarage(n){const e=document.createElement("section");e.classList.add("garage");let t="";const a=n.length;return n.forEach((n=>{t+=this.createCar(n.name,n.color,n.id)})),e.innerHTML=`\n    <h1 class="garage-header-cars-counter">Garage (${a} cars)</h2>\n    <p class="garage-header-page-counter">Page #{Service.pageNumber}</p>\n    <ul class="garage-list">\n      ${t}\n    </ul>\n    `,e}createCar(n,e,t){const a=`\n    <li class="garage-list-item">\n      <div class="garage-list-item-header">\n        <button class="btn select" id="select-${t}">Select</button>\n        <button class="btn remove" id="remove-${t}">Remove</button>\n        <span class="garage-list-item-car-name">${n}</span>\n      </div>\n      <div class="garage-list-item-race">\n        <button class="btn start" id="start-${t}}">A</button>\n        <button class="btn stop" id="stop-${t}}">B</button>\n        <div class="garage-list-item-car-image" id="car-image-${t}">\n          ${(n=>`\n  <svg version="1.1" id="car-image" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 100 100"\n    xml:space="preserve">\n    <path\n      d="M66 47.5c-.4-.5-5.1 0-5.7 0H22.9c-1.8 0-4.9.6-6.5 0 .8-2.5 3.4-3.9 5.7-5 6.5-3.1 13.3-5.7 20.3-7.6 10-2.8 16.1 2 22.5 11.1l1.1 1.5z"\n      fill="${n}" />\n    <path\n      d="M62.3 46.2c-5.6-7.9-10.9-12.1-19.6-9.7-1.5.4-3 .9-4.5 1.4-.9.3-1.5 1.1-1.5 2l-.3 5.2c-.1 1.3 1 2.4 2.3 2.4h19.7c.5 0 4.7-.4 5 0l-1.1-1.3z"\n      fill="#333" />\n    <path\n      d="M25 43.2c-1.6.8-3.4 1.7-4.4 3.1-.4.6 0 1.4.7 1.4 1.4.1 3.1-.2 4.3-.2h8c.5 0 .9-.4.9-.9l.4-6.3c0-.7-.6-1.1-1.2-.9-3 1.2-5.9 2.4-8.7 3.8z"\n      fill="#333" />\n    <path\n      d="M89.4 54.1c-2.3-3.5-5.9-6.2-9.8-7.6-1.2-.4-2.5-.8-3.8-.9-11.8-.6-23.9 0-35.7 0h-23c-3 0-5.6 2.2-6.1 5.1 0 .1-.1.2-.1.3l-.5 3.8-.8 3.4c0 2.2 1.8 4 4 4H62.7c5.6 0 11.2.2 16.8 0 .6 0 1.2 0 1.8-.1 1.1 0 2.2-.1 3.2-.1 2.1-.1 6.5-.1 6.8-3 .1-.9-.2-1.8-.6-2.6-.4-.8-.8-1.6-1.3-2.3z"\n      fill="${n}" />\n    <path d="M14.2 50.7H11c-.2 0-.3.1-.3.3l-.4 3.3c0 .2.1.5.3.5h3.6c.9 0 1.6-.8 1.6-1.8v-.5c-.1-1-.8-1.8-1.6-1.8z"\n      fill="#343434" />\n    <path d="M87.9 51c-.2-.2-.5-.4-.8-.4h-3c-.8 0-1.4.5-1.4 1.1v1.5c0 .8.8 1.6 1.8 1.6h5c.6 0 .7-.5.4-1l-2-2.8z"\n      fill="#e0e0e0" />\n    <path d="M90.3 57.8H9.6s-.4 0-.4.4c0 2.4 1.7 4 4.1 4h77c1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.2-2.2-2.2z" fill="#f8b26a" />\n    <g>\n      <circle cx="25.3" cy="57.2" r="7.3" fill="#fff" />\n      <path\n        d="M25.3 51.3c3.2 0 5.8 2.6 5.8 5.8S28.5 63 25.3 63s-5.8-2.6-5.8-5.8 2.6-5.9 5.8-5.9m0-3c-4.9 0-8.8 3.9-8.8 8.8s3.9 8.8 8.8 8.8 8.8-3.9 8.8-8.8-4-8.8-8.8-8.8z"\n        fill="#333" />\n    </g>\n    <g>\n      <circle cx="25.3" cy="57.2" r="4" fill="#e6e6e6" />\n    </g>\n    <g>\n      <circle cx="71.9" cy="57.2" r="7.3" fill="#fff" />\n      <path\n        d="M71.9 51.3c3.2 0 5.8 2.6 5.8 5.8S75.1 63 71.9 63s-5.8-2.6-5.8-5.8 2.6-5.9 5.8-5.9m0-3c-4.9 0-8.8 3.9-8.8 8.8s3.9 8.8 8.8 8.8 8.8-3.9 8.8-8.8-3.9-8.8-8.8-8.8z"\n        fill="#333" />\n    </g>\n    <g>\n      <circle cx="71.9" cy="57.2" r="4" fill="#e6e6e6" />\n    </g>\n    <path d="M59.1 55.9H41c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h18c.8 0 1.5.7 1.5 1.5.1.8-.6 1.5-1.4 1.5z"\n      fill="#343434" />\n    <path d="M17 43l-7.2-.7c-1.1-.1-2-1-2.1-2.2l-.1-1.5c-.1-1 .9-1.8 1.9-1.5l10.2 3.3c0 1.5-1.3 2.7-2.7 2.6z"\n      fill=""${n}" />\n    <path fill=""${n}" d="M18.7 46.2l-2.9 2.5-4.9-8.1 1.9-1.6z" />\n  </svg>\n`)(e)}\n        </div>\n        <div class="garage-list-item-finish id="finish-${t}">\n          \n  <svg version="1.1" id="finish-image" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" \n  viewBox="0 0 297 297" xml:space="preserve">\n    <g>\n    <g>\n    <g>\n      <path style="fill:#5E4534;" d="M175.786,251.417L175.786,251.417c3.124-0.962,4.877-4.274,3.915-7.398l-36.002-116.962\n        l-11.313,3.482l36.002,116.962C169.35,250.626,172.662,252.379,175.786,251.417z"/>\n    </g>\n    <g>\n      <path style="fill:#32373B;" d="M118.513,45.319c8.387,27.249,16.775,54.497,25.162,81.746\n        c-6.833,4.931-14.185,8.175-21.853,10.394L96.66,55.713C104.327,53.494,111.68,50.25,118.513,45.319z"/>\n    </g>\n    <g>\n      <path style="fill:#D0D5D9;" d="M72.411,60.002c8.268-0.827,16.423-2.024,24.249-4.289l25.162,81.746\n        c-7.826,2.265-15.98,3.462-24.249,4.289L72.411,60.002z"/>\n    </g>\n    <g>\n      <path style="fill:#32373B;" d="M47.48,62.076c8.28-0.788,16.662-1.247,24.931-2.073l25.162,81.746\n        c-8.268,0.827-16.65,1.286-24.931,2.073L47.48,62.076z"/>\n    </g>\n    <g>\n      <path style="fill:#D0D5D9;" d="M22.683,66.261c8.007-2.235,16.349-3.381,24.797-4.185l25.162,81.746\n        c-8.448,0.804-16.79,1.95-24.797,4.185L22.683,66.261z"/>\n    </g>\n    <g>\n      <path style="fill:#32373B;" d="M22.683,66.261l25.162,81.746c-7.967,2.224-15.604,5.523-22.683,10.631\n        C16.775,131.389,8.387,104.14,0,76.892C7.079,71.783,14.716,68.484,22.683,66.261z"/>\n    </g>\n    <g>\n      <path style="fill:#D0D5D9;" d="M118.513,45.319l6.291,20.436c-6.833,4.931-14.185,8.175-21.853,10.394L96.66,55.713\n        C104.327,53.494,111.68,50.25,118.513,45.319z"/>\n    </g>\n    <g>\n      <path style="fill:#32373B;" d="M72.411,60.002c8.268-0.827,16.423-2.024,24.249-4.289l6.291,20.436\n        c-7.826,2.265-15.98,3.462-24.249,4.289L72.411,60.002z"/>\n    </g>\n    <g>\n      <path style="fill:#D0D5D9;" d="M47.48,62.076c8.28-0.788,16.662-1.247,24.931-2.073l6.291,20.436\n        c-8.268,0.827-16.65,1.286-24.931,2.073L47.48,62.076z"/>\n    </g>\n    <g>\n      <path style="fill:#32373B;" d="M22.683,66.261c8.007-2.235,16.349-3.381,24.797-4.185l6.291,20.436\n        c-8.448,0.804-16.79,1.95-24.797,4.185L22.683,66.261z"/>\n    </g>\n    <g>\n      <path style="fill:#D0D5D9;" d="M22.683,66.261l6.291,20.436C21.006,88.921,13.37,92.22,6.291,97.328L0,76.892\n        C7.079,71.783,14.716,68.484,22.683,66.261z"/>\n    </g>\n    <g>\n      <path style="fill:#D0D5D9;" d="M131.094,86.192l6.291,20.436c-6.833,4.931-14.185,8.175-21.853,10.394l-6.291-20.436\n        C116.908,94.367,124.261,91.123,131.094,86.192z"/>\n    </g>\n    <g>\n      <path style="fill:#32373B;" d="M84.992,100.875c8.268-0.827,16.423-2.024,24.249-4.289l6.291,20.436\n        c-7.826,2.265-15.98,3.462-24.249,4.289L84.992,100.875z"/>\n    </g>\n    <g>\n      <path style="fill:#D0D5D9;" d="M60.061,102.948c8.28-0.788,16.662-1.247,24.931-2.073l6.291,20.436\n        c-8.268,0.827-16.65,1.286-24.931,2.073L60.061,102.948z"/>\n    </g>\n    <g>\n      <path style="fill:#32373B;" d="M35.264,107.133c8.007-2.235,16.349-3.381,24.797-4.185l6.291,20.436\n        c-8.448,0.804-16.79,1.95-24.797,4.185L35.264,107.133z"/>\n    </g>\n    <g>\n      <path style="fill:#D0D5D9;" d="M35.264,107.133l6.291,20.436c-7.967,2.224-15.604,5.523-22.683,10.631l-6.291-20.436\n        C19.661,112.656,27.297,109.357,35.264,107.133z"/>\n    </g>\n    </g>\n    <g>\n    <g>\n      <path style="fill:#905835;" d="M121.214,251.417L121.214,251.417c-3.124-0.962-4.877-4.274-3.915-7.398l36.002-116.962\n        l11.313,3.482l-36.002,116.962C127.65,250.626,124.338,252.379,121.214,251.417z"/>\n    </g>\n    <g>\n      <path style="fill:#32373B;" d="M178.487,45.319c-8.387,27.249-16.775,54.497-25.162,81.746\n        c6.833,4.931,14.185,8.175,21.853,10.394l25.162-81.746C192.673,53.494,185.32,50.25,178.487,45.319z"/>\n    </g>\n    <g>\n      <path style="fill:#D0D5D9;" d="M224.589,60.002c-8.268-0.827-16.423-2.024-24.249-4.289l-25.162,81.746\n        c7.826,2.265,15.98,3.462,24.249,4.289L224.589,60.002z"/>\n    </g>\n    <g>\n      <path style="fill:#32373B;" d="M249.52,62.076c-8.28-0.788-16.662-1.247-24.931-2.073l-25.162,81.746\n        c8.268,0.827,16.65,1.286,24.931,2.073L249.52,62.076z"/>\n    </g>\n    <g>\n      <path style="fill:#D0D5D9;" d="M274.317,66.261c-8.007-2.235-16.349-3.381-24.797-4.185l-25.162,81.746\n        c8.448,0.804,16.79,1.95,24.797,4.185L274.317,66.261z"/>\n    </g>\n    <g>\n      <path style="fill:#32373B;" d="M274.317,66.261l-25.162,81.746c7.967,2.224,15.604,5.523,22.683,10.631\n        c8.387-27.249,16.775-54.497,25.162-81.746C289.921,71.783,282.284,68.484,274.317,66.261z"/>\n    </g>\n    <g>\n      <path style="fill:#D0D5D9;" d="M178.487,45.319l-6.291,20.436c6.833,4.931,14.185,8.175,21.853,10.394l6.291-20.436\n        C192.673,53.494,185.32,50.25,178.487,45.319z"/>\n    </g>\n    <g>\n      <path style="fill:#32373B;" d="M224.589,60.002c-8.268-0.827-16.423-2.024-24.249-4.289L194.05,76.15\n        c7.826,2.265,15.98,3.462,24.249,4.289L224.589,60.002z"/>\n    </g>\n    <g>\n      <path style="fill:#D0D5D9;" d="M249.52,62.076c-8.28-0.788-16.662-1.247-24.931-2.073l-6.291,20.436\n        c8.268,0.827,16.65,1.286,24.931,2.073L249.52,62.076z"/>\n    </g>\n    <g>\n      <path style="fill:#32373B;" d="M274.317,66.261c-8.007-2.235-16.349-3.381-24.797-4.185l-6.291,20.436\n        c8.448,0.804,16.79,1.95,24.797,4.185L274.317,66.261z"/>\n    </g>\n    <g>\n      <path style="fill:#D0D5D9;" d="M274.317,66.261l-6.291,20.436c7.967,2.224,15.604,5.523,22.683,10.631L297,76.892\n        C289.921,71.783,282.284,68.484,274.317,66.261z"/>\n    </g>\n    <g>\n      <path style="fill:#D0D5D9;" d="M165.906,86.192l-6.291,20.436c6.833,4.931,14.185,8.175,21.853,10.394l6.291-20.436\n        C180.092,94.367,172.739,91.123,165.906,86.192z"/>\n    </g>\n    <g>\n      <path style="fill:#32373B;" d="M212.008,100.875c-8.268-0.827-16.423-2.024-24.249-4.289l-6.291,20.436\n        c7.826,2.265,15.98,3.462,24.249,4.289L212.008,100.875z"/>\n    </g>\n    <g>\n      <path style="fill:#D0D5D9;" d="M236.939,102.948c-8.28-0.788-16.662-1.247-24.931-2.073l-6.291,20.436\n        c8.268,0.827,16.65,1.286,24.931,2.073L236.939,102.948z"/>\n    </g>\n    <g>\n      <path style="fill:#32373B;" d="M261.736,107.133c-8.007-2.235-16.349-3.381-24.797-4.185l-6.291,20.436\n        c8.448,0.804,16.79,1.95,24.797,4.185L261.736,107.133z"/>\n    </g>\n    <g>\n      <path style="fill:#D0D5D9;" d="M261.736,107.133l-6.291,20.436c7.967,2.224,15.604,5.523,22.683,10.631l6.291-20.436\n        C277.339,112.656,269.703,109.357,261.736,107.133z"/>\n    </g>\n    </g>\n    </g>\n  </svg>\n\n        </div>\n      </div>\n    </li>\n    `;return a}addCar(n,e,t){document.querySelector(".garage-list").innerHTML+=this.createCar(n,e,t)}createControls(){const n=document.createElement("section");return n.classList.add("controls"),n.innerHTML='\n      <section class="controls">\n      <button class="btn race" id="race">Race</button>\n      <button class="btn reset" id="reset" disabled>Reset</button>\n      <button class="btn generate" id="generate">Generate</button>\n    </section>\n    ',n}}c.pagesLimit=10;const r=c;var l=function(n,e,t,a){return new(t||(t=Promise))((function(c,r){function l(n){try{i(a.next(n))}catch(n){r(n)}}function s(n){try{i(a.throw(n))}catch(n){r(n)}}function i(n){var e;n.done?c(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(l,s)}i((a=a.apply(n,e||[])).next())}))};const s=class{constructor(){this.BASE_URL="http://127.0.0.1:3000"}carsGet(){return l(this,arguments,void 0,(function*(n=1,e=r.pagesLimit){return yield fetch(`${this.BASE_URL}/garage?_page=${n}&_limit=${e}`).then((n=>n.json()))}))}carGet(n){return l(this,void 0,void 0,(function*(){return yield fetch(`${this.BASE_URL}/garage/${n}`).then((n=>n.json()))}))}carPost(n,e){return l(this,void 0,void 0,(function*(){return yield fetch(`${this.BASE_URL}/garage/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,color:e})}).then((n=>n.json()))}))}carDelete(n){return l(this,void 0,void 0,(function*(){return yield fetch(`${this.BASE_URL}/garage/${n}`,{method:"DELETE"}).then((n=>n.json()))}))}carPut(n,e,t){return l(this,void 0,void 0,(function*(){return yield fetch(`${this.BASE_URL}/garage/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,color:e})}).then((n=>n.json()))}))}};var i=function(n,e,t,a){return new(t||(t=Promise))((function(c,r){function l(n){try{i(a.next(n))}catch(n){r(n)}}function s(n){try{i(a.throw(n))}catch(n){r(n)}}function i(n){var e;n.done?c(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(l,s)}i((a=a.apply(n,e||[])).next())}))};const o=class{constructor(){this.api=new s,this.page=new r,this.id="",this.pageNumber=1,this.carNumber=1}createCar(n,e,t){return i(this,void 0,void 0,(function*(){yield this.api.carPost(e,t).then((n=>{this.page.addCar(n.name,n.color,n.id)}))}))}updateCar(n,e,t,a){return i(this,void 0,void 0,(function*(){this.id&&this.api.carPut(e,t,a).then((()=>{const n=document.getElementById(a),c=n.querySelector(".garage-list-item-car-name"),r=n.querySelector(".car-image-${id}");c.textContent=e,r.style.fill=t}))}))}};(new class{constructor(){this.api=new s,this.page=new r,this.service=new o,this.body=document.querySelector("body")}renderGarage(){this.api.carsGet(this.service.pageNumber).then((n=>{const e=this.page.createGarage(n),t=this.page.createControls(),a=this.page.createMain();a.append(this.page.createHeader(),this.page.createGenerator(),e,t),this.body.append(a),this.startEvents()}))}startEvents(){const n=document.querySelector("#create-name"),e=document.querySelector("#create-name"),t=document.querySelector("#create-name"),a=document.querySelector("#create-name");this.body.addEventListener("click",(c=>{const r=c.target;r&&r.classList.contains(".btn.create")&&this.service.createCar(r,n.value,e.value),r&&r.classList.contains(".btn.update")&&this.service.updateCar(r,t.value,a.value,this.service.id)}))}}).renderGarage()})()})();