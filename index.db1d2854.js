!async function(){localStorage.getItem("API")||localStorage.setItem("API","https://APITcunim.tcukawi.tech/");let e=localStorage.getItem("API");try{let t=await fetch(e+"api/getExtensions"),a=await t.json();for(let t=0;t<a.length;t++){let r=a[t],n=await fetch(e+"api/extension?extension="+r),o=await n.json();(o.nsfw&&!0===JSON.parse(localStorage.getItem("allowNSFW"))||!o.nsfw)&&(document.querySelector("#main").innerHTML+=`
        <a href="./menu.html?provider=${o.name}" class="block mt-12 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${o.name}</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">${getCountryName(o.lang)}</p>
        </a>
     `)}}catch(e){document.querySelector("#main").innerHTML+="Faliled to fetching data, try refreshing the page or change api url";return}}();
//# sourceMappingURL=index.db1d2854.js.map
