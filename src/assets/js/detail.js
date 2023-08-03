const query = new URLSearchParams(window.location.search)

let provider = query.get("provider")
let id = query.get("id")

console.log(`provider of ${provider}`)
console.log(`id of ${id}`)

menu()
async function menu() {
    let api = localStorage.getItem("API");
    try {
        let data = await fetch(api + "api/extension?extension=" + provider)
        data = await data.json();
        document.querySelector("#topCard").innerHTML += `
            <div class="w-full p-4 text-center bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">${data.name}</h5>
                <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">${getCountryName(data.lang)}</p>
            </div>
        `

        let search = await fetch(api + "api/detail?provider=" + provider + "&id=" + id)
        const sres = await search.json()
        loadData(sres)
    } catch (error) {
        console.log(error)
        document.querySelector("#topCard").innerHTML += `
            <div class="w-full p-4 text-center bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Not Found</h5>
                <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Make sure you are connected to api</p>
            </div>
        `
    }
}

async function loadData(data){
    
    document.querySelector("#content").innerHTML +=  `
    <a class="mt-16 m-auto flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="${data.thumbnail_url}" alt="">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${data.title}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${data.synopsis}</p>
    </div>
    </a>

    <h1 class="text-center text-xl mt-16 text-white font-bold">Watch ${data.title}</h1>
    `
    let lists = ""
    for (let i = 0; i < data.episodes.length; i++) {
        const element = data.episodes[i];
        lists += `
        <li class="pb-3 sm:pb-4 text-center">
        <div class="inline items-center">
            <div class="flex-1 min-w-0">
                <a href="./watch.html?provider=${provider}&id=${element.url}"  class="text-base font-medium text-gray-900 truncate dark:text-white">
                    ${element.title}
                </a>
             </div>
              <div class="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                 ${element.date}
                </div>
            </div>
        </li>`
    }
    let Html = `
    <ul class="mt-4 m-auto divide-y divide-gray-200 dark:divide-gray-700">
        ${lists}
    </ul>
    `
    document.querySelector("#content").innerHTML += Html
}

