!async function(){localStorage.getItem("API")||localStorage.setItem("API","https://APITcunim.tcukawi.tech/");let e=localStorage.getItem("API"),t=await fetch(e+"api/getExtensions"),a=await t.json();for(let t=0;t<a.length;t++){let n=a[t],r=await fetch(e+"api/extension?extension="+n),o=await r.json();(o.nsfw&&!0===JSON.parse(localStorage.getItem("allowNSFW"))||!o.nsfw)&&(document.querySelector("#navLi").innerHTML+=`
    <li>
    <a href="./menu.html?provider=${o.name}" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">${o.name}</a>
    </li>`,document.getElementById("sideLi")&&(document.querySelector("#sideLi").innerHTML+=`
    <li>
        <a href="./menu.html?provider=${o.name}"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <span class="ml-3">${o.name}</span>
        </a>
    </li>
 `))}}();
//# sourceMappingURL=index.f6b45947.js.map
