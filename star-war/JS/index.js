let auto_div = document.getElementById("autocom-box");

  let timerId;

  async function searchName() {
    let query = document.getElementById("query").value;

    if (query.length <= 2) {
      return false;
    }

    let res = await fetch(`https://swapi.dev/api/people/?search=${query}`);

    let data = await res.json();
    return data.results;
  }

  function throttleFunction() {
    //1. User made first req (ave)
    //2.Making an API request
    //3. User typed more letters (aveng)
    //4. Make an API request aven, aveng

    // with setTimeout, continuos requests (making it after 2 sec)

    //5. Use setTimeout to delay a request

    timerId = setTimeout(() => {
      main();
      timerId = null;
    }, 200);
  }

  function appendName(d) {
    auto_div.innerHTML = null;
    d.forEach((el) => {
        // console.log(Title);
      let p = document.createElement("div");
      p.setAttribute("class", "suggestions")
      p.addEventListener("click",function transferText() {
        localStorage.setItem("character", JSON.stringify(el))
        window.location.href="character.html"
      })
      p.innerHTML = `<div>
        <p>${el.name}</p>
        <p class="smalltext">(${el.birth_year})</p>
        </div>
      <p class="smalltext">${el.gender}</p>`;
      auto_div.append(p);
    });
  }

  async function main() {
    let name = await searchName();
    console.log(name);
    appendName(name);
  }
