document.addEventListener("DOMContentLoaded",(function(){window.onscroll=function(){window.scrollY>e?n.classList.add("sticky"):n.classList.remove("sticky")};var n=document.getElementById("header"),e=n.offsetTop;document.querySelector(".header-main").innerHTML='\n  <a href=\'../index.html\' class="enlace-logo"><h1 class="logo">Juan Camilo Palacio Castaño</h1></a>\n  <nav class="navbar navbar-expand-lg bg-body-indigo-100 navegacion">\n        <div class="nav-item dropdown"> \n            <button class="btn btn-primary dropdown-toggle menu" type="button" data-bs-toggle="dropdown"\n                aria-expanded="false">\n                Careers\n            </button>\n            <ul class="dropdown-menu">\n                <li><a class="dropdown-item" href="it.html">Career In Information Technology</a></li>\n                <li><a class="dropdown-item" href="investor.html">Career As Investor</a></li>\n                <li><a class="dropdown-item" href="elec.html">Career As Electrical Engineer</a></li>\n            </ul>\n        </div>\n        <div class="nav-item dropdown">\n            <button class="btn btn-primary dropdown-toggle menu" type="button" data-bs-toggle="dropdown"\n                aria-expanded="false">\n                Certificates\n            </button>\n            <ul class="dropdown-menu">\n                  <li><a class="dropdown-item" href="cert_it.html">Information Technology Certificates</a></li>\n                  <li><a class="dropdown-item" href="cert_investor.html">Investor Certificates</a></li>\n                  <li><a class="dropdown-item" href="cert_elec.html">Electrical Engineer Curriculum</a></li>\n            </ul>\n        </div>\n        <div class="nav-item dropdown">\n            <button class="btn btn-primary dropdown-toggle menu" type="button" data-bs-toggle="dropdown"\n                aria-expanded="false">\n                Projects\n            </button>\n            <ul class="dropdown-menu">\n                <li><a class="dropdown-item" href="proj_it.html">IT Projects</a></li>\n                <li><a class="dropdown-item" href="proj_investor.html">Investor Projects</a></li>\n                <li><a class="dropdown-item" href="proj_elec.html">Electrical Engineer Projects</a></li>\n            </ul>\n        </div>\n\n      \n  </nav>\n  ';function t(n,e){const t=n.rows;for(let n=0;n<t.length;n++){const o=t[n].cells;if(o.length>e){const n=o[e];console.log(n),"+"==n.textContent.charAt(0)?n.style.color="green":"-"==n.textContent.charAt(0)&&(n.style.color="red")}}}document.querySelector("footer").childNodes[3].textContent="Last update 2024-02-02.";const o=document.getElementById("table-metrics");t(o,2),t(o,3)}));