(() => {
async function $81db66f57de44e2f$var$checkLogin() {
    try {
        let token = localStorage.getItem("user"); // Assuming the token is stored in localStorage
        token = JSON.parse(token).token;
        if (!token) {
            alert("Anda belum masuk. Silakan masuk terlebih dahulu.");
            return document.location.href = "./login.html";
        }
        const response = await fetch(globalvar.api + "checkLogin", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        if (response.status === 401) {
            alert("Token tidak valid atau sesi telah berakhir. Silakan masuk kembali.");
            // If the token is invalid, you can also consider clearing the token from localStorage
            localStorage.clear();
            return;
        }
        const data = await response.json();
        if (response.ok) {
            console.log(`Halo ${data.user}! Anda sudah masuk.`);
            document.getElementById("cards").classList.remove("hidden");
        } else alert("Gagal memeriksa status masuk.");
        $81db66f57de44e2f$var$checkUserInfo();
    } catch (error) {
        console.error(error);
        alert("Kamu Belum Masuk");
        document.location.href = "./login.html";
    }
}
async function $81db66f57de44e2f$var$checkUserInfo() {
    try {
        let token = localStorage.getItem("user"); // Assuming the token is stored in localStorage
        token = JSON.parse(token).token;
        const response = await fetch(globalvar.api + "checkLogin", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
    } catch (error) {}
    try {
        $81db66f57de44e2f$var$getLocation();
    } catch (error) {
        alert("Please allow location detecting");
    }
}
function $81db66f57de44e2f$var$getLocation() {
    if (navigator.geolocation) navigator.geolocation.getCurrentPosition($81db66f57de44e2f$var$showPosition);
    else alert("Geolocation is not supported by this browser.");
}
function $81db66f57de44e2f$var$fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}
async function $81db66f57de44e2f$var$showPosition(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    const userData = {
        lat: lat,
        long: long
    };
    const response = await fetch(globalvar.api + "getLocation", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });
    const data = await response.json();
    console.log(data);
    document.getElementById("cuaca").classList.remove("hidden");
    document.getElementById("lokasi").innerText = data.location.name;
    document.getElementById("status").innerText = data.cond.weather.description;
    document.getElementById("temp").innerText = data.cond.weather.temp.cur + "\xb0 C";
    document.getElementById("urlFoto").setAttribute("src", data.cond.weather.icon.url);
// 
//                            <h2 class="card-title" id="lokasi">Purwakarta</h2>
// <p id="status">sedikit berawan</p>
// <p id="temp">26°C</p>
}
$81db66f57de44e2f$var$checkLogin();
let $81db66f57de44e2f$var$strToCards = `

`;

})();
//# sourceMappingURL=index.js.map