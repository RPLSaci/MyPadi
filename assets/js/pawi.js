(() => {
let $a7e0062e22903d72$var$token = localStorage.getItem("user"); // Assuming the token is stored in localStorage
$a7e0062e22903d72$var$token = JSON.parse($a7e0062e22903d72$var$token).token;
if (!localStorage.getItem("id")) $a7e0062e22903d72$var$generateId();
async function $a7e0062e22903d72$var$generateId() {
    const response = await fetch(globalvar.api + "ai/generateId", {
        method: "GET"
    });
    let res = await response.json();
    console.log(res);
    localStorage.setItem("id", res.message);
}
async function $a7e0062e22903d72$var$pertanyaan() {
    question = document.getElementById("tanya").value;
    document.getElementById("tanya").value = "";
    id = localStorage.getItem("id");
    const userData = {
        question: question,
        id: id
    };
    document.querySelector("#chats").innerHTML += `
    <div class="flex justify-end">
    <div class="max-w-xs bg-hijau-300 text-white p-2 rounded-md">
       ${question}
    </div>
 </div>
`;
    const response = await fetch(globalvar.api + "ai/ask", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${$a7e0062e22903d72$var$token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });
    const data = await response.json();
    document.querySelector("#chats").innerHTML += `
      <div class="flex">
      <div class="max-w-xs bg-amber-300 p-2 rounded-md">
         ${data.message}
      </div>
   </div>`;
}

})();