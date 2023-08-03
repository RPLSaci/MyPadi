main()
async function main() {
    if(!localStorage.getItem("API")){
        localStorage.setItem("API", "https://APITcunim.tcukawi.tech/")
    }
    let api = localStorage.getItem("API");
    try{
        const response = await fetch(api+"api/getExtensions")
        const json = await response.json();
        for(let i = 0; i < json.length; i++){
            const extension = json[i];
            const extInfo = await fetch(api+"api/extension?extension="+extension)
            let data = await extInfo.json()
            if((data.nsfw && JSON.parse(localStorage.getItem("allowNSFW")) === true) || !data.nsfw) {
                loadExt(data)
            }
        }
    } catch (err){
        document.querySelector("#main").innerHTML += `Faliled to fetching data, try refreshing the page or change api url`
        return
    }
}


function loadExt(data){
        document.querySelector("#main").innerHTML += `
        <a href="./menu.html?provider=${data.name}" class="block mt-12 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${data.name}</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">${getCountryName(data.lang)}</p>
        </a>
     `

}
