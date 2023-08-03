function setLocalStorage(key, value) {
    localStorage.setItem(key, value);

    document.querySelector("#alerts").innerHTML = `
    <div class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
        <span class="font-medium">Success alert!</span> Api uri has changed
    </div>`
    setTimeout(() => {
        document.querySelector("#alerts").innerHTML = "";
    }, 3000);
}

async function submitAPI() {
    let value = document.querySelector("#API").value || localStorage.getItem("API");
    let valueNsfw = document.querySelector("#NSFW").checked
    console.log(valueNsfw)
    let res = await fetch(value+"api/ping")
    if(!res.ok){
        document.querySelector("#alerts").innerHTML = `
        <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
            <span class="font-medium">Danger alert!</span> Change a few things up and try submitting again.
        </div>`
        // remove in 3 seconds
        setTimeout(() => {
            document.querySelector("#alerts").innerHTML = "";
        }, 3000);
        return
    }
    setLocalStorage("API", value);
    setLocalStorage("allowNSFW", valueNsfw.toString());
    document.location.reload()
}
main()
function main(){
    let currentapi = localStorage.getItem("API")
    if(currentapi == null){
        localStorage.setItem("API","https://ApiTcunim.tcukawi.tech/")
        currentapi = localStorage.getItem("API")
    }
    let currentNsfw = localStorage.getItem("allowNSFW")
    if(currentNsfw == null){
        localStorage.setItem("allowNSFW","false")
        currentNsfw = localStorage.getItem("allowNSFW")
    }
    document.querySelector("#NSFW").checked = JSON.parse(currentNsfw)
    document.querySelector("#status").innerHTML += `<div class="text-xl">Current API URI: ${currentapi}</div>`
    document.querySelector("#status").innerHTML += `<div class="text-xl">Current NSFW Status: ${currentNsfw}</div>`
}