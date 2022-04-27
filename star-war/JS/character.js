let character = JSON.parse(localStorage.getItem("character"));

  function append(el) {
    let div = document.createElement("div");
    div.setAttribute("class", "container");

    div.innerHTML = `<a data-cy="backToHome" href="index.html"
          ><div class="back">
            &#8592;
            <p>Back to home</p>
          </div></a
        >
        <h1>${el.name}</h1>

        <div class="details">
          <div>
            <b>Birth Year</b>
            <p>${el.birth_year}</p>
          </div>
          <div>
            <b>Gender</b>
            <p>${el.gender}</p>
          </div>
          <div>
            <b>Hair Color</b>
            <p>${el.hair_color}</p>
          </div>
          <div>
            <b>Height</b>
            <p>${el.height}</p>
          </div>
          <div>
            <b>Mass</b>
            <p>${el.mass}</p>
          </div>
          <div>
            <b>Skin Color</b>
            <p>${el.skin_color}</p>
          </div>
        </div>`;

    let main = document.getElementById("main");
    main.innerHTML = null;
    main.append(div);
  }

  append(character);