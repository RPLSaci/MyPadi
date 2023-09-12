console.log("tes berita")
async function getBerita(n){
  n = n ? n : 1
  let response = await fetch(globalvar.api+'berita/news?page='+n, {
    method: 'GET',
  });

  response = await response.json()

  let html = ``
  for (let i = 0; i < response.length; i++) {
    const el = response[i];
    console.log(el)
    html += `<div class="card lg:card-side bg-amber-300 shadow-xl">
    <figure class="w-[100%]"><img class="h-[100%] w-[100%]" src="${el.image.split("?")[0]}" /></figure>
    <div class="card-body">
      <h2 class="card-title">${el.title}</h2>
      <p>${el.description}</p>
      <div class="card-actions justify-end">
        <a href="./berita-full.html?link=${el.url}" class="bg-hijau-300 text-white btn border-none">Buka</a>
      </div>
    </div>
 </div>`
  }

  document.querySelector("#berita").innerHTML += html
}

getBerita()

async function rangkum(){
  let response = await fetch(globalvar.api+'ai/summarizeNews', {
    method: 'GET',
  });

  response = await response.json()
  console.log(response)
  document.querySelector("#rangkuman").innerHTML += response.berita
}

rangkum()