

function minimenu(){
  document.querySelector("#minibar").classList.toggle("hidden")
}

function logout() {
  localStorage.clear()
  document.location.href = "./login"
}
async function checkLogin() {
    try {
      let token = localStorage.getItem('user'); // Assuming the token is stored in localStorage

      token = JSON.parse(token).token
      if (!token) {
        alert('Anda belum masuk. Silakan masuk terlebih dahulu.');
        return document.location.href="./login.html";
      }
  
      const response = await fetch(globalvar.api+'checkLogin', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  
      if (response.status === 401) {
        alert('Token tidak valid atau sesi telah berakhir. Silakan masuk kembali.');
        // If the token is invalid, you can also consider clearing the token from localStorage
        localStorage.clear()
        return;
      }
  
      const data = await response.json();
      if (response.ok) {
        document.querySelector("#logoutbtn").classList.toggle("hidden")
        document.querySelector("#namalanding").innerHTML = `Selamat Datang <span style="color: #026b38;">${data.user}</span>.`
        console.log(`Halo ${data.user}! Anda sudah masuk.`);

        // document.getElementById("cards").classList.remove("hidden")
      } else {
        alert('Gagal memeriksa status masuk.');
      }
      checkUserInfo()
    } catch (error) {
      if(document.querySelector("#landing")){
        document.querySelector("#landing").style.marginBottom = "1rem"
      }
      let alertElement1 = document.getElementById('alert');
      alertElement1.style.display = "block"
      setTimeout(() => {
        const alertElement = document.getElementById('alert');
        if (alertElement) {
            alertElement.style.display = 'none';
        }
    }, 3000);

    // Hide alert on button click
    document.getElementById('closeButton').addEventListener('click', () => {
        const alertElement = document.getElementById('alert');
        if (alertElement) {
            alertElement.style.display = 'none';
        }
    });

      console.error(error);
      document.getElementById("loginwoi").classList.toggle("hidden")
      // document.location.href = "./login.html"
    }
}

async function checkUserInfo(){
  try {
    let token = localStorage.getItem('user'); // Assuming the token is stored in localStorage

    token = JSON.parse(token).token

    const response = await fetch(globalvar.api+'checkLogin', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  } catch (error) {
    
  }

  try {
    getLocation()
  } catch (error) {
    alert("Please allow location detecting")
  }
}


function getLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
  } else {
      alert("Geolocation is not supported by this browser.");
  }
}


function fahrenheitToCelsius(fahrenheit) {
  var celsius = (fahrenheit - 32) * 5 / 9;
  return celsius;
}

async function showPosition(position) {
  var lat = position.coords.latitude;
  var long = position.coords.longitude;

  const userData = { lat,long };
  
      const response = await fetch(globalvar.api+'getLocation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

  
      const data = await response.json();
      console.log(data)
      // document.getElementById("cuaca").classList.remove("hidden")
      // document.getElementById("lokasi").innerText = data.location.name
      // document.getElementById("status").innerText = data.cond.weather.description
      // document.getElementById("temp").innerText = data.cond.weather.temp.cur +"° C"
      // document.getElementById("urlFoto").setAttribute("src",data.cond.weather.icon.url)

      // 
      
      //                            <h2 class="card-title" id="lokasi">Purwakarta</h2>
      // <p id="status">sedikit berawan</p>
      // <p id="temp">26°C</p>
  
}

checkLogin()


let strToCards = `

`