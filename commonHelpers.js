import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                     */import{f as h,i as p}from"./assets/vendor-77e16229.js";const r=document.querySelector("#datetime-picker"),a=document.querySelector("[data-start]");a.disabled="notActive";let e=null;const n={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){e=t[0],e-n.defaultDate,e>n.defaultDate?a.disabled=!1:e<n.defaultDate&&p.show({messageColor:"white",position:"topRight",color:"red",message:"Please choose a date in the future"})}};h(r,n);function S(t){const d=Math.floor(t/864e5),u=Math.floor(t%864e5/36e5),f=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:u,minutes:f,seconds:m}}a.addEventListener("click",v);let c=null;function v(){a.disabled="notActive",r.disabled="notActive",c=setInterval(()=>{const t=e-Date.now();y(S(t)),t<1e3&&(clearInterval(c),r.disabled=!1)},1e3)}const o=document.querySelectorAll(".value");function y({days:t,hours:i,minutes:s,seconds:l}){[...o][0].textContent=t.toString().padStart(2,"0"),[...o][1].textContent=i.toString().padStart(2,"0"),[...o][2].textContent=s.toString().padStart(2,"0"),[...o][3].textContent=l.toString().padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
