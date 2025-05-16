import{a as u,S as f,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="50324197-16ec26870062a9854cfe1529b",m="https://pixabay.com/api/";async function y(a){const s={key:p,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await u.get(m,{params:s})).data}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(a){const s=a.map(t=>`
      <li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
        </a>
        <div class="gallery-info">
          <div class="info-block">
            <p class="label">Likes</p>
            <p class="value">${t.likes}</p>
          </div>
          <div class="info-block">
            <p class="label">Views</p>
            <p class="value">${t.views}</p>
          </div>
          <div class="info-block">
            <p class="label">Comments</p>
            <p class="value">${t.comments}</p>
          </div>
          <div class="info-block">
            <p class="label">Downloads</p>
            <p class="value">${t.downloads}</p>
          </div>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",s),g.refresh()}function v(){l.innerHTML=""}function b(){c.classList.remove("hidden")}function L(){c.classList.add("hidden")}const d=document.querySelector(".form"),w=d.elements["search-text"];d.addEventListener("submit",async a=>{a.preventDefault();const s=w.value.trim();if(!s){n.warning({title:"Warning",message:"Please enter a search term."});return}v(),b();try{const t=await y(s);t.hits.length===0?n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):h(t.hits)}catch{n.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{L()}});
//# sourceMappingURL=index.js.map
