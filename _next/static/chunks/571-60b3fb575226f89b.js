(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[571],{5118:function(t,e,s){"use strict";var n=s(5893);let i=()=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,n.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,n.jsx)("path",{fill:"#0ED290",d:"M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"})]});e.Z=i},4416:function(t,e,s){"use strict";var n=s(5893);let i=()=>(0,n.jsx)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 443 443",style:{enableBackground:"new 0 0 443 443"},xmlSpace:"preserve",children:(0,n.jsxs)("g",{children:[(0,n.jsx)("path",{d:"M321.785,38h-83.384V0H125.169v38H41.785v60h280V38z M155.169,30h53.232v8h-53.232V30z"}),(0,n.jsx)("path",{d:"M295.142,214.31l5.66-86.31H62.769l19.016,290h114.172c-14.861-21.067-23.602-46.746-23.602-74.43 C172.355,274.43,226.849,217.779,295.142,214.31z"}),(0,n.jsx)("path",{d:"M301.785,244.141c-54.826,0-99.43,44.604-99.43,99.429S246.959,443,301.785,443s99.43-44.604,99.43-99.43 S356.611,244.141,301.785,244.141z M355.961,376.533l-21.213,21.213l-32.963-32.963l-32.963,32.963l-21.213-21.213l32.963-32.963 l-32.963-32.963l21.213-21.213l32.963,32.963l32.963-32.963l21.213,21.213l-32.963,32.963L355.961,376.533z"})]})});e.Z=i},8795:function(t,e,s){"use strict";var n=s(5893);s(7294);var i=s(1372),a=s.n(i);let o=t=>{let e=[a().Button];return t.filled&&e.push(a().filled),t.red&&e.push(a().red),(0,n.jsx)("button",{onClick:t.click,className:e.join(" "),children:t.children})};e.Z=o},3221:function(t,e,s){"use strict";var n=s(5893),i=s(7294),a=s(5765),o=s.n(a),r=s(8795),c=s(1198),l=s(2172);let d=t=>{let e=(0,i.useContext)(l.Z),s=(0,i.useRef)(null),a=(0,i.useRef)(null),[d,u]=(0,i.useState)({id:"",title:"",description:"",status:c.x.todo});(0,i.useEffect)(()=>{t.active&&((t.isTodoTask?a:s).current.focus(),t.editData&&u({...t.editData}))},[t.active,t.editData]);let k=(t,e)=>{let s={...d,[e]:t.target.value};u(s)},_=n=>{if(n.preventDefault(),!d.description){a.current===document.activeElement?e.showNotification("The task must has a ".concat(t.isTodoTask?"content":"description","!"),"error"):a.current.focus();return}let i=t.editData?d.id:"task_"+new Date().valueOf(),o={...d,id:i,title:d.title||"untitled",description:d.description||(t.isTodoTask?"without content":"without description")};t.submit(o),u({id:"",title:"",description:"",status:c.x.todo}),(t.isTodoTask?a:s).current.focus()};function h(){t.onCancelFormProcess(),t.isTodoTask||s.current.blur(),a.current.blur(),u({id:"",title:"",description:"",status:c.x.todo})}return(0,n.jsxs)("form",{className:[o().TaskActForm,t.active?o().active:""].join(" "),onSubmit:_,onKeyDown(t){"Escape"===t.key&&h()},children:[t.isTodoTask?null:(0,n.jsx)("input",{type:"text",placeholder:"Title",className:o().title,value:d.title,onChange(t){k(t,"title")},ref:s}),(0,n.jsx)("input",{type:"text",placeholder:t.isTodoTask?"ToDo task":"Short description",className:o().description,value:d.description,onChange(t){k(t,"description")},ref:a}),(0,n.jsx)("div",{className:o().action,children:(0,n.jsx)(r.Z,{children:"Done"})}),(0,n.jsx)("span",{className:o().cancelBtn,onClick:h,children:"x"})]})};e.Z=d},7465:function(t,e,s){"use strict";s.d(e,{Z:function(){return w}});var n=s(5893),i=s(7294),a=s(3054),o=s.n(a),r=s(5082),c=s.n(r),l=s(8394),d=s.n(l);let u=()=>(0,n.jsxs)("div",{className:d().DragIcon,children:[(0,n.jsx)("span",{className:d().lines}),(0,n.jsx)("span",{className:d().lines})]}),k=()=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[(0,n.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,n.jsx)("path",{fill:"#05E39C",d:"M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})]}),_=()=>(0,n.jsx)("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:(0,n.jsx)("g",{id:"text-edit",stroke:"none",strokeWidth:"1",children:(0,n.jsx)("g",{id:"edit",children:(0,n.jsx)("path",{d:"M5,20 L19,20 C19.5522847,20 20,20.4477153 20,21 C20,21.5522847 19.5522847,22 19,22 L5,22 C4.44771525,22 4,21.5522847 4,21 C4,20.4477153 4.44771525,20 5,20 Z M4,15 C4,15 7.33323693,11.6666667 13.9997108,5 L17,8 C10.3333333,14.6666667 7,18 7,18 C6.34392558,18 5.34392558,18 4,18 C4,16.6105922 4,15.6105922 4,15 Z M15,4 L16.9997108,2 L20,5 L17.9989741,7.00102587 L15,4 Z",id:"Shape"})})})});s(4416);var h=s(5118),x=s(9213);let p=(t,e)=>{(0,i.useEffect)(()=>{let s=s=>{t.current&&!t.current.contains(s.target)&&e(s)};return document.addEventListener("click",s),()=>{document.removeEventListener("click",s)}},[t])},m=t=>{let[e,s]=(0,i.useState)(!1),a=(0,i.useRef)(null),o="done"===t.taskStatus?"ri-checkbox-circle-fill":"doing"===t.taskStatus?"ri-time-fill":"ri-checkbox-blank-circle-line",r=e=>{let s=e.target.closest(".".concat(c().TaskBody));t.click(t.taskID),s.classlist=Array.from(s.classList).pop(),s.classList.add(c()[t.taskStatus])},l=()=>{s(t=>!t)};return p(a,e=>{e.target.closest(".".concat(t.taskID))||s(!1)}),(0,n.jsxs)("div",{className:[c().TaskBody,c()[t.taskStatus]].join(" "),onDragStart(t){(0,x.SS)(t,c().dragging)},onDragEnd(t){(0,x.pE)(t,c().dragging)},draggable:!0,children:[(0,n.jsx)("div",{className:c().dragIconContainer,children:(0,n.jsx)(u,{})}),(0,n.jsx)("i",{className:[c().taskStatusBadge,o].join(" "),onClick:r}),(0,n.jsx)("div",{className:c().taskContent,onClick:r,children:t.children}),(0,n.jsx)("i",{className:["ri-play-circle-line",c().subtasksArrow].join(" ")}),(0,n.jsx)("div",{className:[c().moreIconContainer,t.taskID].join(" "),onClick:l,children:(0,n.jsx)(k,{})}),(0,n.jsxs)("div",{className:[c().moreDropdown,e?c().activeDropdown:""].join(" "),ref:a,children:[(0,n.jsxs)("a",{onClick:t.editTaskClicked,className:c().editButton,children:[(0,n.jsx)(_,{})," Edit"]}),(0,n.jsxs)("a",{onClick(){t.deleteTaskClicked(t.taskID)},className:c().deleteButton,children:[(0,n.jsx)("i",{className:"ri-close-circle-line"})," Delete"]}),(0,n.jsxs)("a",{onClick(){t.addSubtaskClicked(t.taskID)},className:c().addSubtaskButton,children:[(0,n.jsx)(h.Z,{})," Add Subtask"]})]})]})};var v=s(2125),g=s.n(v);let f=t=>(0,n.jsx)("ol",{className:g().Main,children:t.children});var j=s(4915),T=s.n(j);let C=t=>{let e=[T().Main];return t.done&&e.push(T().done),(0,n.jsxs)("li",{className:e.join(" "),children:[(0,n.jsx)("p",{className:T().subtaskContent,children:t.children}),(0,n.jsx)("i",{className:[T().deleteIcon,"ri-close-circle-line"].join(" ")})]})},B=t=>(0,n.jsxs)("div",{className:o().Main,children:[(0,n.jsx)(m,{taskID:t.taskID,click:t.onClicked,editTaskClicked:t.onEditTaskClicked,deleteTaskClicked:t.onDeleteTaskClicked,taskStatus:t.taskStatus,children:t.children}),(0,n.jsxs)(f,{children:[(0,n.jsx)(C,{children:"Sit sint ut fugiat."}),(0,n.jsx)(C,{done:!0,children:"Exercitation in."}),(0,n.jsx)(C,{children:"Lorem ipsum exercitation ad dolor eiusmod dolore."}),(0,n.jsx)(C,{children:"Enim dolor minim velit."}),(0,n.jsx)(C,{done:!0,children:"In sint exercitation."})]})]});var w=B},1526:function(t,e,s){"use strict";var n=s(5893);s(7294);var i=s(3484),a=s.n(i),o=s(9213);let r=t=>(0,n.jsx)("section",{className:a().TasksContainer,onDragOver(t){(0,o.CV)(t,a().TasksContainer)},children:t.children});e.Z=r},9213:function(t,e,s){"use strict";s.d(e,{CV:function(){return a},SS:function(){return i},pE:function(){return o}});let n=[],i=(t,e)=>{n.length=0,n.push(e),t.target.classList.add(e)},a=(t,e)=>{t.preventDefault();let s=t.target.closest(".".concat(e)),i=s.querySelector(".".concat(n[0])),a=r(t.clientY,s);a?s.insertBefore(i,a):s.appendChild(i)},o=(t,e)=>{t.target.classList.remove(e)},r=(t,e)=>{let s=Array.from(e.children).filter(t=>!t.classList.contains(n[0])&&"FORM"!==t.nodeName),{el:i}=s.reduce((e,s)=>{let n=s.getBoundingClientRect(),i=n.top+n.height/2-t;return i>0&&i<e.offset?{offset:i,el:s}:e},{offset:Number.POSITIVE_INFINITY});return i}},8394:function(t){t.exports={DragIcon:"DragIcon_DragIcon__srYO3",lines:"DragIcon_lines__B7B7A"}},1372:function(t){t.exports={Button:"Button_Button__7h9P5",filled:"Button_filled__GEop3",red:"Button_red__sPVSr"}},4915:function(t){t.exports={Main:"SubtaskBody_Main__eW4hC",deleteIcon:"SubtaskBody_deleteIcon__N78OC",done:"SubtaskBody_done__rG9DM",subtaskContent:"SubtaskBody_subtaskContent__K7W9g"}},2125:function(t){t.exports={Main:"SubtasksContainer_Main__9PUbR"}},5765:function(t){t.exports={TaskActForm:"TaskActForm_TaskActForm__dP_KY",title:"TaskActForm_title__LCG8d",description:"TaskActForm_description__IOwu2",action:"TaskActForm_action__45LUs",active:"TaskActForm_active__y_TZs",cancelBtn:"TaskActForm_cancelBtn__m1aMe"}},5082:function(t){t.exports={TaskBody:"TaskBody_TaskBody__ldYtM",dragIconContainer:"TaskBody_dragIconContainer__00d1T",moreIconContainer:"TaskBody_moreIconContainer__1ti5c",taskContent:"TaskBody_taskContent__xRJQp",subtasksArrow:"TaskBody_subtasksArrow__mRFfT",todo:"TaskBody_todo__KrQOy",taskStatusBadge:"TaskBody_taskStatusBadge__sk15L",done:"TaskBody_done__PK0SC",doing:"TaskBody_doing__vNEbk",dragging:"TaskBody_dragging__k2tDb",moreDropdown:"TaskBody_moreDropdown__R5r6U",editButton:"TaskBody_editButton__RDskn",deleteButton:"TaskBody_deleteButton__cyEdm",addSubtaskButton:"TaskBody_addSubtaskButton__51_qQ",activeDropdown:"TaskBody_activeDropdown__oPXAj"}},3054:function(t){t.exports={Main:"TaskSet_Main__Mq_oo"}},3484:function(t){t.exports={TasksContainer:"TasksContainer_TasksContainer__T3CE3"}}}]);