extLoad()
async function extLoad() {
    if(!localStorage.getItem("API")){
        localStorage.setItem("API", "https://APITcunim.tcukawi.tech/")
    }
    let api = localStorage.getItem("API");
    
    const response = await fetch(api+"api/getExtensions")
    const json = await response.json();

    for(let i = 0; i < json.length; i++){
        const extension = json[i];
        const extInfo = await fetch(api+"api/extension?extension="+extension)
        let data = await extInfo.json()
        if((data.nsfw && JSON.parse(localStorage.getItem("allowNSFW")) === true) || !data.nsfw) {
            loadbars(data)
        }
    }
}

function loadbars(data){
    document.querySelector("#navLi").innerHTML += `
    <li>
    <a href="./menu.html?provider=${data.name}" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">${data.name}</a>
    </li>`
    var sideLi = document.getElementById('sideLi');
    if (!sideLi) return;
    document.querySelector("#sideLi").innerHTML += `
    <li>
        <a href="./menu.html?provider=${data.name}"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <span class="ml-3">${data.name}</span>
        </a>
    </li>
 `
}
