(()=>{async function e(){try{let e=localStorage.getItem("user");// Assuming the token is stored in localStorage
e=JSON.parse(e).token,await fetch(globalvar.api+"checkLogin",{method:"GET",headers:{Authorization:`Bearer ${e}`}})}catch(e){}try{navigator.geolocation?navigator.geolocation.getCurrentPosition(t):alert("Geolocation is not supported by this browser.")}catch(e){alert("Please allow location detecting")}}async function t(e){var t=e.coords.latitude,a=e.coords.longitude;let o=await fetch(globalvar.api+"getLocation",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lat:t,long:a})}),n=await o.json();console.log(n),document.getElementById("cuaca").classList.remove("hidden"),document.getElementById("lokasi").innerText=n.location.name,document.getElementById("status").innerText=n.cond.weather.description,document.getElementById("temp").innerText=n.cond.weather.temp.cur+"\xb0 C",document.getElementById("urlFoto").setAttribute("src",n.cond.weather.icon.url);// 
//                            <h2 class="card-title" id="lokasi">Purwakarta</h2>
// <p id="status">sedikit berawan</p>
// <p id="temp">26°C</p>
}!async function(){try{let t=localStorage.getItem("user");// Assuming the token is stored in localStorage
if(!(t=JSON.parse(t).token))return alert("Anda belum masuk. Silakan masuk terlebih dahulu."),document.location.href="./login.html";let a=await fetch(globalvar.api+"checkLogin",{method:"GET",headers:{Authorization:`Bearer ${t}`}});if(401===a.status){alert("Token tidak valid atau sesi telah berakhir. Silakan masuk kembali."),// If the token is invalid, you can also consider clearing the token from localStorage
localStorage.clear();return}let o=await a.json();a.ok?(console.log(`Halo ${o.user}! Anda sudah masuk.`),document.getElementById("cards").classList.remove("hidden")):alert("Gagal memeriksa status masuk."),e()}catch(e){console.error(e),alert("Kamu Belum Masuk"),document.location.href="./login.html"}}()})();