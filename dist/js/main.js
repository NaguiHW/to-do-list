!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);const r=document.querySelector("#title-project-input"),a=document.querySelector("#task-form-title"),l=document.querySelector("#task-form-description"),s=document.querySelector("#date"),o=document.querySelector("#priority"),c=()=>{r.value=""},i=document.querySelector(".errors"),d=e=>{const t=document.createElement("p");t.setAttribute("class","notification is-danger"),t.innerHTML=e,i.appendChild(t),setTimeout(()=>t.remove(),4e3)};class u{constructor(e){this.title=e,this.task=[]}}const p=document.querySelector("#title-project-input");class m{static getProjects(){let e=[];return e=null===localStorage.getItem("project")?[]:JSON.parse(localStorage.getItem("project"))}static addProject(e){const t=m.getProjects();t.push(e),localStorage.setItem("project",JSON.stringify(t))}}const E=document.querySelector("#project-list"),h=()=>{const e=m.getProjects();for(let t=0;t<e.length;t+=1){const n=document.createElement("option");n.setAttribute("value",`${e[t].title}`),n.innerHTML=e[t].title,E.appendChild(n)}},g=()=>{E.innerHTML=""},f=(e,t)=>{const n=document.createElement("div");n.classList.add("task");const r=document.createElement("div");r.classList.add("task-description");const a=document.createElement("h3");a.innerHTML=`<b>${e.taskName}</b>`;const l=document.createElement("p");l.innerHTML=`${e.description}`;const s=document.createElement("p");s.innerHTML=`Due date: ${e.date}`;const o=document.createElement("p");r.appendChild(a),r.appendChild(l),r.appendChild(s),r.addEventListener("click",e=>{((e,t,n)=>{const r=m.getProjects(),a=e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.cellIndex,l=e.parentElement.parentElement.parentElement.rowIndex;r[a].task[l].status?(n.innerHTML="Status: Pending",r[a].task[l].status=!1,localStorage.setItem("project",JSON.stringify(r)),t.classList.remove("true"),t.classList.add("false")):(n.innerHTML="Status: Complete",r[a].task[l].status=!0,localStorage.setItem("project",JSON.stringify(r)),t.classList.remove("false"),t.classList.add("true"))})(e.target,n,o)}),e.status?(o.innerHTML="Status: Complete",n.classList.add("true")):(o.innerHTML="Status: Pending",n.classList.add("false")),r.appendChild(o),"Low"===e.priority?n.classList.add("low"):"Medium"===e.priority?n.classList.add("medium"):n.classList.add("high");const c=document.createElement("div"),i=document.createElement("i");i.setAttribute("class","fas fa-trash delete-icon"),i.addEventListener("click",e=>{const t=m.getProjects(),n=e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.cellIndex,r=e.target.parentElement.parentElement.parentElement.rowIndex;t[n].task.splice(r,1),localStorage.setItem("project",JSON.stringify(t)),e.target.parentElement.parentElement.parentElement.parentElement.deleteRow(r)});const d=document.createElement("i");d.setAttribute("class","fas fa-edit edit-icon");const u=document.createElement("i");u.setAttribute("class","fas fa-save save-icon"),d.addEventListener("click",e=>{const t=m.getProjects(),a=e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.cellIndex,l=e.target.parentElement.parentElement.parentElement.rowIndex,s=document.createElement("div"),o=document.createElement("input");o.setAttribute("type","text"),o.setAttribute("class","input is-small edit-title"),o.value=t[a].task[l].taskName;const i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("class","input is-small edit-description"),i.value=t[a].task[l].description;const p=document.createElement("input");p.setAttribute("type","date"),p.setAttribute("class","edit-date"),p.value=t[a].task[l].date;const E=document.createElement("select");E.setAttribute("class","edit-priority");const h=document.createElement("option");h.setAttribute("value","Low"),h.innerHTML="Low";const g=document.createElement("option");g.setAttribute("value","Medium"),g.innerHTML="Medium";const f=document.createElement("option");f.setAttribute("value","High"),f.innerHTML="High",E.appendChild(h),E.appendChild(g),E.appendChild(f),E.value=t[a].task[l].priority,s.appendChild(o),s.appendChild(i),s.appendChild(p),s.appendChild(E),s.classList.add("task-description"),s.classList.add("task-description-edit"),c.replaceChild(u,d),n.replaceChild(s,r)}),u.addEventListener("click",e=>{const t=m.getProjects(),o=e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.cellIndex,i=e.target.parentElement.parentElement.parentElement.rowIndex,p=e.target.parentElement.parentElement.firstChild,E=e.target.parentElement.parentElement.firstChild.childNodes[0],h=e.target.parentElement.parentElement.firstChild.childNodes[1],g=e.target.parentElement.parentElement.firstChild.childNodes[2],f=e.target.parentElement.parentElement.firstChild.childNodes[3];t[o].task[i].taskName=E.value,t[o].task[i].description=h.value,t[o].task[i].date=g.value,"Low"===f.value?(e.target.parentElement.parentElement.classList.remove(`${t[o].task[i].priority.toLowerCase()}`),e.target.parentElement.parentElement.classList.add("low")):"Medium"===f.value?(e.target.parentElement.parentElement.classList.remove(`${t[o].task[i].priority.toLowerCase()}`),e.target.parentElement.parentElement.classList.add("medium")):(e.target.parentElement.parentElement.classList.remove(`${t[o].task[i].priority.toLowerCase()}`),e.target.parentElement.parentElement.classList.add("high")),t[o].task[i].priority=f.value,localStorage.setItem("project",JSON.stringify(t)),a.innerHTML=`<b>${E.value}</b>`,l.innerHTML=`${h.value}`,s.innerHTML=`Due date: ${g.value}`,n.replaceChild(r,p),c.replaceChild(d,u)}),c.appendChild(i),c.appendChild(d),c.setAttribute("class","task-options"),n.appendChild(r),n.appendChild(c);const p=t.insertRow(-1);p.classList.add("task-row"),p.appendChild(n)},y=document.querySelector("#table-row");let v=[];const k=e=>{const t=document.createElement("div");t.setAttribute("class","project panel");const n=document.createElement("h1");n.setAttribute("class","task-title"),n.innerHTML=e.title;const r=document.createElement("table"),a=document.createElement("tbody");if(a.setAttribute("class","task-body"),e.task.length>0)for(let t=0;t<e.task.length;t+=1)f(e.task[t],a);r.appendChild(a);const l=document.createElement("div");l.setAttribute("class","buttons");const s=document.createElement("button");s.setAttribute("class","button is-danger delete-project"),s.innerHTML="Delete Project",s.addEventListener("click",e=>{(e=>{const t=e.parentElement.parentElement.parentElement.cellIndex,n=JSON.parse(localStorage.project);n.splice(t,1),localStorage.setItem("project",JSON.stringify(n)),document.querySelector("#table-row").deleteCell(t),g(),h()})(e.target)}),l.appendChild(s),t.appendChild(n),t.appendChild(r),t.appendChild(l),y.insertCell(-1).appendChild(t)},L=document.querySelector(".post-project-button"),S=document.querySelector(".new-project-button"),j=document.querySelector(".project-form"),b=document.querySelector("#title-project-input"),C=[],T=()=>{L.addEventListener("click",e=>{if(""===b.value)d("Please fill all the fields");else{e.preventDefault();const t=m.getProjects();for(let e=0;e<t.length;e+=1)C.push(t[e].title);C.includes(b.value)?d("Title is already used"):((()=>{const e=new u(p.value);m.addProject(e)})(),j.classList.add("hide"),S.innerText="Create Project",(()=>{const e=(v=m.getProjects())[v.length-1];k(e)})(),c(),g(),h())}})},P=document.querySelector(".new-project-button"),w=document.querySelector(".project-form");let q=[];class M{constructor(e,t,n,r){this.taskName=e,this.description=t,this.date=n,this.priority=r}}const x=document.querySelector("#task-form-title"),A=document.querySelector("#task-form-description"),H=document.querySelector("#date"),I=document.querySelector("#priority"),N=document.querySelector("#project-list");let O;const J=document.querySelector("#create-task"),$=document.getElementById("create-task-button"),D=document.querySelector("#project-list"),_=document.querySelector("#task-form-title"),F=document.querySelector("#date"),B=document.querySelector("#priority"),R=document.querySelector(".task-form"),Y=()=>{$.addEventListener("click",e=>{""===_.value||""===F.value||""===B.value?d("Please fill all the fields"):(e.preventDefault(),(()=>{const e=new M(x.value,A.value,H.value,I.value),t=m.getProjects();for(let n=0;n<t.length;n+=1)N.value===t[n].title&&(t[n].task.push(e),O=n,localStorage.setItem("project",JSON.stringify(t)))})(),((e,t)=>{const n=document.querySelector("#table-row"),r=m.getProjects();for(let a=0;a<r.length;a+=1)if(r[a].title===t){const t=r[a].task.length-1,l=r[a].task[t],s=n.childNodes[e].childNodes[0].childNodes[1];f(l,s)}})(O,D.value),R.classList.add("hide"),J.innerText="Add Task To Project",a.value="",l.value="",s.value="",o.value="",g())})},z=document.querySelector("#create-task"),G=document.querySelector(".task-form");n(0),n(1);T(),P.addEventListener("click",e=>{"Close Form"===e.target.innerText?(w.classList.add("hide"),P.innerText="Create Project",c()):"Create Project"===e.target.innerText&&(w.classList.remove("hide"),P.innerText="Close Form")}),Y(),z.addEventListener("click",e=>{"Close Form"===e.target.innerText?(G.classList.add("hide"),z.innerText="Add Task To Project",g(),c()):"Add Task To Project"===e.target.innerText&&(G.classList.remove("hide"),g(),h(),z.innerText="Close Form")}),(()=>{const e=new u("Example Project"),t=new M("This is a default project","It always going to load","2019-12-12","Low"),n=new M("You can change the status","Clicking on the tasks","2019-11-11","Medium");n.status=!0;const r=new M("Background colors","Depend on the status","2019-10-10","High");r.status=!0;const a=new M("You can add more tasks",'Clicking on the "Add Task To Project" button',"2019-10-10","Medium");e.task.push(t),e.task.push(n),e.task.push(r),e.task.push(a);const l=m.getProjects();l.length>0&&l[0].title!==e.title?l.unshift(e):0===l.length?l.push(e):l[0].title===e.title&&(l.shift(),l.unshift(e)),localStorage.setItem("project",JSON.stringify(l))})(),null===(q=m.getProjects())?q=[]:q.forEach(e=>{k(e)})}]);