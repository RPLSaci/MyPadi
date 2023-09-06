(() => {
console.log("Login loaded");
function $24dffd4072f4447f$var$toggle() {
    if (document.querySelector("#singin").classList.contains("hidden")) {
        document.querySelector("#singin").classList.remove("hidden");
        document.querySelector("#singup").classList.add("hidden");
    } else {
        document.querySelector("#singin").classList.add("hidden");
        document.querySelector("#singup").classList.remove("hidden");
    }
}
$24dffd4072f4447f$var$register();
async function $24dffd4072f4447f$var$register() {
    try {
        const username = document.getElementById("emailreg").value;
        const password = document.getElementById("passwordreg").valute;
        const confirmPassword = document.getElementById("confirm-passwordreg").value;
        const consent = document.getElementById("terms").checked;
        console.log(consent);
        if (!consent) {
            alert("Kamu harus menyetujui syarat dan ketentuan");
            return;
        }
        if (password !== confirmPassword) {
            alert("Konfirmasi kata sandi tidak cocok.");
            return;
        }
        const userData = {
            username: username,
            password: password
        };
        const response = await fetch(globalvar.api + "signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });
        const data = await response.json();
        console.log(data);
        if (response.status > 500) {
            alert(data.error);
            return;
        }
        if (response.ok) {
            alert("Sucess, please login");
            document.location.href = "./";
        }
    } catch (error) {
        console.error(error);
        alert("Something went wrong.");
    }
}
async function $24dffd4072f4447f$var$login() {
    const username = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const userData = {
        username: username,
        password: password
    };
    const response = await fetch(globalvar.api + "login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });
    const data = await response.json();
    if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data));
        alert("Kamu sudah masuk");
        document.location.href = "./index.html";
    } else alert(data.error);
}

})();
