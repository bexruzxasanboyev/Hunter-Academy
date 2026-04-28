document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".webinar-cta"),t=document.getElementById("registrationModal"),n=document.getElementById("closeModalBtn"),o=document.querySelector(".homeModalOverlay"),l=document.getElementById("registrationForm"),r=document.getElementById("name"),d=document.getElementById("nameError"),a=document.getElementById("phone"),c=document.getElementById("phoneError"),i=document.getElementById("submitBtn"),s=document.getElementById("selectedCountry"),u=document.getElementById("selectedCountryCode"),m=document.getElementById("countryDropdown"),y=document.getElementById("dropdownIcon"),p=setupPhoneFormatter({inputEl:a,codeLabelEl:u,dropdownEl:m,triggerEl:s,iconEl:y,errorEl:c,defaultCode:"+998"});let E=!1,g=0;function f(){t&&(E=!0,g=window.scrollY,t.style.display="block",document.body.style.overflow="hidden",d.style.display="none",c.style.display="none")}function v(){t&&E&&(E=!1,t.style.display="none",document.body.style.overflow="",document.body.style.position="",document.body.style.top="",window.scrollTo(0,g))}e.forEach(e=>e.addEventListener("click",f)),n&&n.addEventListener("click",v),o&&o.addEventListener("click",v),document.querySelectorAll(".title, .event__list__title, .text span, .expert__img").forEach(function(e){e.style.cursor="pointer",e.addEventListener("click",f)}),l.addEventListener("submit",function(e){e.preventDefault();const t=r.value.trim(),n=a.value.trim();let o=!1;if(t?d.style.display="none":(d.style.display="block",o=!0),p.validate(n)?c.style.display="none":(c.style.display="block",o=!0),o)return;i.textContent="YUBORILMOQDA...",i.disabled=!0;const l=new Date,s=l.toLocaleDateString("uz-UZ"),u=l.toLocaleTimeString("uz-UZ"),m={Ism:t,TelefonRaqam:p.getCurrentCode()+" "+n,SanaSoat:s+" - "+u};localStorage.setItem("formData",JSON.stringify(m)),window.location.href="/thankYou.html",i.textContent="DAVOM ETISH",i.disabled=!1,r.value="",a.value="",v()})}),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".webinar-faq__dropdown").forEach(e=>{const t=e.querySelector(".webinar-faq__dropdown__head");t&&t.addEventListener("click",function(){if(e.classList.contains("is-open"))e.classList.remove("is-open"),e.style.maxHeight="80px";else{e.classList.add("is-open"),e.style.maxHeight="200px";const t=e.scrollHeight;e.style.maxHeight=t+"px"}})})}),document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("timer");if(!e)return;let t=120;const n=setInterval(()=>{const o=Math.floor(t/60),l=t%60;e.textContent=`${String(o).padStart(2,"0")}:${String(l).padStart(2,"0")}`,t<=0&&clearInterval(n),t--},1e3)}),document.addEventListener("DOMContentLoaded",function(){if("function"!=typeof setupPhoneFormatter)return;const e=document.getElementById("applyPhone");if(!e)return;const t=setupPhoneFormatter({inputEl:e,codeLabelEl:document.getElementById("applyCode"),dropdownEl:document.getElementById("applyDropdown"),triggerEl:document.getElementById("applyCountry"),iconEl:document.getElementById("applyCaret"),errorEl:document.getElementById("applyPhoneError"),defaultCode:"+998"}),n=document.getElementById("applyForm"),o=document.getElementById("applyPhoneError"),l=document.getElementById("applyType"),r=document.getElementById("applyRooms"),d=document.getElementById("applyAddress"),a=document.getElementById("applyName"),c=n?n.querySelector(".apply__btn"):null;function i(e){if(!e)return"";if(e.value)return e.value;const t=e.options&&e.options[e.selectedIndex];return t?t.text:""}n&&(n.addEventListener("submit",function(n){n.preventDefault();const s=e.value.trim();if(!t.validate(s))return o&&(o.style.display="block"),void e.focus();o&&(o.style.display="none");const u=a&&a.value.trim()||"",m=i(l),y=i(r),p=d&&d.value.trim()||"";c&&(c.textContent="YUBORILMOQDA...",c.disabled=!0);const E=new Date,g=E.toLocaleDateString("uz-UZ"),f=E.toLocaleTimeString("uz-UZ"),v={Ism:u,TelefonRaqam:t.getCurrentCode()+" "+s,SanaSoat:g+" - "+f,XonadonTuri:m,XonalarSoni:y,Manzil:p};localStorage.setItem("applyFormData",JSON.stringify(v)),window.location.href="/thankYou.html"}),e.addEventListener("input",function(){o&&(o.style.display="none")}))}),document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".gallery__viewport"),t=document.querySelector(".gallery__grid");if(!e||!t)return;const n=t.querySelectorAll(".gallery__image"),o=document.querySelector(".gallery__nav-btn--prev"),l=document.querySelector(".gallery__nav-btn--next"),r=document.querySelector(".gallery__dots"),d=n.length;if(!d)return;let a,c=0,i=0,s=0,u=!1,m=0;if(r){r.innerHTML="";for(let e=0;e<d;e++){const t=document.createElement("button");t.type="button",t.className="gallery__dot"+(0===e?" is-active":""),t.setAttribute("aria-label","Slide "+(e+1)),t.addEventListener("click",function(){g(e)}),r.appendChild(t)}}function y(e){t.style.transition=e?"transform 450ms cubic-bezier(0.25, 0.8, 0.3, 1)":"none"}function p(e){t.style.transform="translate3d("+e+"px, 0, 0)"}function E(){return e.getBoundingClientRect().width}function g(e,t){c=(e+d)%d,y(!1!==t),p(-c*E()),r&&r.querySelectorAll(".gallery__dot").forEach((e,t)=>{e.classList.toggle("is-active",t===c)}),f()}function f(){clearInterval(a),a=setInterval(()=>g(c+1),4e3)}function v(e){u=!0,i=e,s=e,m=Date.now(),y(!1),clearInterval(a)}function h(e){if(!u)return;s=e;const t=s-i;p(-c*E()+t)}function I(){if(!u)return;u=!1;const e=s-i,t=Date.now()-m,n=E(),o=e/t;let l=c;(Math.abs(e)>.2*n||Math.abs(o)>.5)&&(l=c+(e<0?1:-1)),g(l)}o&&o.addEventListener("click",()=>g(c-1)),l&&l.addEventListener("click",()=>g(c+1)),t.addEventListener("touchstart",e=>v(e.touches[0].clientX),{passive:!0}),t.addEventListener("touchmove",e=>h(e.touches[0].clientX),{passive:!0}),t.addEventListener("touchend",I),t.addEventListener("touchcancel",I),t.addEventListener("mousedown",e=>{e.preventDefault(),v(e.clientX)}),window.addEventListener("mousemove",e=>{u&&h(e.clientX)}),window.addEventListener("mouseup",I),t.addEventListener("dragstart",e=>e.preventDefault()),window.addEventListener("resize",()=>{y(!1),p(-c*E())}),g(0,!1),f()}),(()=>{const e=document.getElementById("timers");if(!e)return;let t=+e.dataset.secondsLeft;const n=document.getElementById("minutess"),o=document.getElementById("secondss");if(!n||!o)return;const l=e=>String(e).padStart(2,"0");let r;const d=()=>{n.textContent=l(t/60|0),o.textContent=l(t%60),t-- >0||clearInterval(r)};d(),r=setInterval(d,1e3)})(),(()=>{const e=document.getElementById("thoughtSlider");if(!e)return;const t=e.querySelector(".thought__slides"),n=e.querySelector(".thought__nav--prev"),o=e.querySelector(".thought__nav--next");if(!t||!n||!o)return;const l=t.children.length;let r=0;const d=e=>{r=(e+l)%l,t.style.transform=`translateX(-${100*r}%)`};n.onclick=()=>d(r-1),o.onclick=()=>d(r+1)})();

document.querySelectorAll('.programTab').forEach(tab => {
    tab.addEventListener('click', () => {
        const id = tab.dataset.tab;
        document.querySelectorAll('.programTab').forEach(t => t.classList.toggle('active', t === tab));
        document.querySelectorAll('.programPanel').forEach(p => p.classList.toggle('active', p.dataset.panel === id));
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const heroForm = document.getElementById("heroRegistrationForm");
    if (!heroForm) return;
    const heroName = document.getElementById("heroName");
    const heroPhone = document.getElementById("heroPhone");
    const heroNameError = document.getElementById("heroNameError");
    const heroPhoneError = document.getElementById("heroPhoneError");
    const heroSubmitBtn = document.getElementById("heroSubmitBtn");

    const heroFormatter = setupPhoneFormatter({
        inputEl: heroPhone,
        codeLabelEl: document.getElementById("heroSelectedCountryCodeText"),
        dropdownEl: document.getElementById("heroCountryDropdown"),
        triggerEl: document.getElementById("heroSelectedCountry"),
        iconEl: document.getElementById("heroDropdownIcon"),
        errorEl: heroPhoneError,
        defaultCode: "+998"
    });

    heroForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const nameVal = heroName.value.trim();
        const phoneVal = heroPhone.value.trim();
        let hasError = false;
        if (!nameVal) { heroNameError.style.display = "block"; hasError = true; } else heroNameError.style.display = "none";
        if (!heroFormatter.validate(phoneVal)) { heroPhoneError.style.display = "block"; hasError = true; } else heroPhoneError.style.display = "none";
        if (hasError) return;

        heroSubmitBtn.textContent = "YUBORILMOQDA...";
        heroSubmitBtn.disabled = true;
        const now = new Date();
        const dateStr = now.toLocaleDateString("uz-UZ");
        const timeStr = now.toLocaleTimeString("uz-UZ");
        const data = {
            Ism: nameVal,
            TelefonRaqam: heroFormatter.getCurrentCode() + " " + phoneVal,
            SanaSoat: dateStr + " - " + timeStr
        };
        localStorage.setItem("formData", JSON.stringify(data));
        window.location.href = "/thankYou.html";
    });
});


(() => {
    const slider = document.querySelector('.resultsSlider');
    if (!slider) return;
    const dots = document.querySelectorAll('.resultsDot');
    if (dots.length < 2) return;
    const scrollByDir = (dir) => {
        slider.scrollBy({ left: dir * slider.clientWidth, behavior: 'smooth' });
    };
    dots[0].style.cursor = 'pointer';
    dots[1].style.cursor = 'pointer';
    dots[0].addEventListener('click', () => scrollByDir(-1));
    dots[1].addEventListener('click', () => scrollByDir(1));
})();
