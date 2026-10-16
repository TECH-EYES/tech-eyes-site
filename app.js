(function(){
  const data=window.SITE_CONTENT||{};
  const $=(s)=>document.querySelector(s);
  const esc=(s)=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const courses=data.courses||[];
  $("#course-grid").innerHTML=courses.map(c=>`<article class="course-card accent-${esc(c.accent)}"><div class="course-top"><span class="course-icon" aria-hidden="true">${esc(c.icon)}</span><span class="course-category">${esc(c.category)}</span></div><h3>${esc(c.title)}</h3><p>${esc(c.description)}</p><div class="course-meta"><span>${esc(c.level)}</span><span>${esc(c.lessons)} <span aria-hidden="true">→</span></span></div></article>`).join("");
  const articles=data.articles||[];
  $("#article-grid").innerHTML=articles.map(a=>`<article class="article-card accent-${esc(a.accent)}"><div class="article-art" aria-hidden="true"><span class="article-symbol">${esc(a.symbol)}</span></div><div class="article-content"><div class="article-category"><span>${esc(a.category)}</span><span>${esc(a.date)}</span></div><h3>${esc(a.title)}</h3><p>${esc(a.excerpt)}</p><div class="article-foot"><span>${esc(a.read)} de lecture</span><a href="#contact" aria-label="Poser une question sur ${esc(a.title)}">↗</a></div></div></article>`).join("");
  const videos=data.videos||[];
  if(videos.length){const v=videos[0];$("#featured-video-title").textContent=v.title;$("#featured-video-link").href=v.url;$("#featured-video .big-play").addEventListener("click",()=>window.open(v.url,"_blank","noopener,noreferrer"));}
  $("#youtube-link").href=data.youtubeChannel||"https://www.youtube.com/";
  const email=data.email||"contact@tech-eyes.example", whatsapp=(data.whatsapp||"").replace(/\D/g,"");
  $("#contact-details").innerHTML=`<div><span class="contact-detail-label">E-MAIL</span><a href="mailto:${esc(email)}">${esc(email)}</a></div>${whatsapp?`<div><span class="contact-detail-label">WHATSAPP</span><a href="https://wa.me/${esc(whatsapp)}" target="_blank" rel="noopener noreferrer">Nous écrire ↗</a></div>`:""}`;
  $("#contact-form").addEventListener("submit",e=>{e.preventDefault();const f=new FormData(e.currentTarget),subject=encodeURIComponent("Message depuis le site TECH-EYES — "+f.get("name")),body=encodeURIComponent(`Bonjour TECH-EYES,\n\n${f.get("subject")}\n\nNom : ${f.get("name")}\nE-mail : ${f.get("email")}`);window.location.href=`mailto:${email}?subject=${subject}&body=${body}`;});
  $("#year").textContent=new Date().getFullYear();
  const toggle=$(".nav-toggle"),nav=$("#primary-nav");toggle.addEventListener("click",()=>{const open=toggle.getAttribute("aria-expanded")!=="true";toggle.setAttribute("aria-expanded",String(open));nav.classList.toggle("open",open);});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");}));
})();
