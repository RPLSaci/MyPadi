let token = localStorage.getItem("user"); // Assuming the token is stored in localStorage
token = JSON.parse(token).token;
if (!localStorage.getItem("id")) generateId();
async function generateId() {
    const response = await fetch(globalvar.api + "ai/generateId", {
        method: "GET"
    });
    let res = await response.json();
    console.log(res);
    localStorage.setItem("id", res.message);
}
async function pertanyaan() {
    question = document.getElementById("tanya").value;
    document.getElementById("tanya").value = "";
    id = localStorage.getItem("id");
    const userData = {
        question,
        id
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
            "Authorization": `Bearer ${token}`,
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

//# sourceMappingURL=pawi.ccd2ca84.js.map
