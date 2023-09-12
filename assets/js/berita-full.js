(() => {
console.log("tes2 berita");
const $7123160fe90a5862$var$queryString = window.location.search;
const $7123160fe90a5862$var$urlParams = new URLSearchParams($7123160fe90a5862$var$queryString);
const $7123160fe90a5862$var$paramValue = $7123160fe90a5862$var$urlParams.get("link");
async function $7123160fe90a5862$var$getBerita() {
    document.querySelector("#berita").innerHTML += `<iframe class="w-[100%] h-[85vh]" src="${$7123160fe90a5862$var$paramValue}"></iframe>`;
}
$7123160fe90a5862$var$getBerita();
async function $7123160fe90a5862$var$rangkum() {
    let response = await fetch(globalvar.api + "ai/summarizeBerita?link=" + $7123160fe90a5862$var$paramValue, {
        method: "GET"
    });
    response = await response.json();
    console.log(response);
    document.querySelector("#rangkuman").innerHTML += response.message;
}
$7123160fe90a5862$var$rangkum();

})();
//# sourceMappingURL=berita-full.js.map
