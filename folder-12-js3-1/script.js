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

