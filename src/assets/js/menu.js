const query = new URLSearchParams(window.location.search)

let provider = query.get("provider")

console.log(`MainMenu of ${provider}`)
let page = 1
menu()
async function menu() {
    let api = localStorage.getItem("API");
    try {
        // search bar prov
        document.querySelector("#prov").value = provider
        // end search bar prov
        let data = await fetch(api + "api/extension?extension=" + provider)
        data = await data.json();
        document.querySelector("#topCard").innerHTML += `
            <div class="w-full p-4 text-center bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">${data.name}</h5>
                <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">${getCountryName(data.lang)}</p>
            </div>
        `

        let homePage = await fetch(api + "api/menu?provider=" + provider)
        const homeres = await homePage.json()
        loadLatest(homeres)
        loadPopular(homeres)
    } catch (error) {
        document.querySelector("#topCard").innerHTML += `
            <div class="w-full p-4 text-center bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Not Found</h5>
                <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Make sure you are connected to api</p>
            </div>
        `
    }
}

async function more(){
    let api = localStorage.getItem("API");
    page++
    let homePage = await fetch(api + "api/menu?provider=" + provider + `&page=${page}`)
    const homeres = await homePage.json()
    loadLatest(homeres)
    loadPopular(homeres)
}


async function loadLatest(data){
    for (let i = 0; i < data.latest.length; i++) {
    let anime = data.latest[i]
    document.querySelector("#latest dl").innerHTML +=`
    <div class="flex flex-col items-center justify-center">
    <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
       <a href="./detail.html?provider=${provider}&id=${anime.url}">
           <img class="p-8 roundex-lg rounded-t-lg m-auto" src="${anime.thumbnail_url}" alt="product image" />
       </a>
       <div class="px-5 pb-5">
           <a href="./detail.html?provider=${provider}&id=${anime.url}">
               <h5 class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">${anime.title}</h5>
           </a>
           <div class="flex items-center justify-between">
               <span class="text-xl font-bold text-gray-900 dark:text-white">${anime.totalEps}</span>
               <a href="./detail.html?provider=${provider}&id=${anime.url}" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Watch</a>
           </div>
       </div>
   </div>
 </div>`
    }
}

async function loadPopular(data){
    for (let i = 0; i < data.popular.length; i++) {
    let anime = data.popular[i]
    document.querySelector("#popular dl").innerHTML +=`
    <div class="flex flex-col items-center justify-center">
    <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
       <a href="./detail.html?provider=${provider}&id=${anime.url}">
           <img class="p-8 rounded-lg rounded-t-lg m-auto" src="${anime.thumbnail_url}" alt="product image" />
       </a>
       <div class="px-5 pb-5">
           <a href="./detail.html?provider=${provider}&id=${anime.url}">
               <h5 class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">${anime.title}</h5>
           </a>
           <div class="flex items-center justify-between">
               <span class="text-xl font-bold text-gray-900 dark:text-white">${anime.totalEps}</span>
               <a href="./detail.html?provider=${provider}&id=${anime.url}" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Watch</a>
           </div>
       </div>
   </div>
 </div>`
    }
}