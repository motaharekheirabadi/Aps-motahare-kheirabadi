//!  10/11/1400

const getDadJoke = async () => {
  try {

    const res = await axios.get("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    return res.data.joke;
  } catch (error) {
    console.log("no jokes available , sorry");
  }
};

console.log(getDadJoke());

const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addNewJoke = async () => {
  const jokeText = await getDadJoke();

  const newLi = document.createElement("LI");

  
  newLi.append(jokeText);

  jokes.append(newLi);
};

button.addEventListener("click", addNewJoke);

//////////////////////////////////////////////////////////////////////////

const form = document.querySelector("#searchForm");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;


  const res = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${searchTerm}`
  );

  makeImages(res.data);

  form.elements.query.value = "";
});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};

/////////////////////////////////////////////////////////////////

// READ (GET)
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((data) => data.json())
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

