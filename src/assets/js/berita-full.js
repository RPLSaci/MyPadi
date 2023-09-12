console.log("tes2 berita")
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const paramValue = urlParams.get('link');

async function getBerita(){

  document.querySelector("#berita").innerHTML += `<iframe class="w-[100%] h-[85vh]" src="${paramValue}"></iframe>`
}

getBerita()

async function rangkum(){
  let response = await fetch(globalvar.api+'ai/summarizeBerita?link='+paramValue, {
    method: 'GET',
  });

  response = await response.json()
  console.log(response)
  document.querySelector("#rangkuman").innerHTML += response.message
}

rangkum()