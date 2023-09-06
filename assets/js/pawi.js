(() => {
let $21423540d6d3b1e4$var$token = localStorage.getItem("user"); // Assuming the token is stored in localStorage
$21423540d6d3b1e4$var$token = JSON.parse($21423540d6d3b1e4$var$token).token;
if (!localStorage.getItem("id")) $21423540d6d3b1e4$var$generateId();
function $21423540d6d3b1e4$var$resetId() {
    localStorage.removeItem("id");
    document.location.href = "./pawi.html";
}
async function $21423540d6d3b1e4$var$generateId() {
    const response = await fetch(globalvar.api + "ai/generateId", {
        method: "GET"
    });
    let res = await response.json();
    console.log(res);
    localStorage.setItem("id", res.message);
}
let $21423540d6d3b1e4$var$Tanya = false;
async function $21423540d6d3b1e4$var$pertanyaan() {
    if (tanya === true) return;
    $21423540d6d3b1e4$var$Tanya = true;
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
            "Authorization": `Bearer ${$21423540d6d3b1e4$var$token}`,
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
    $21423540d6d3b1e4$var$Tanya = false;
}

})();
//# sourceMappingURL=pawi.js.map
