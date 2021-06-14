const header = document.querySelector("#header");
const content = document.querySelector("#content");

function getJoke() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      const joke = data.data.content;
      console.log(joke);

      header.textContent = joke.text_head;
      content.textContent = joke.text !== "" ? joke.text : joke.text_hidden;
    });
}
getJoke();

document.addEventListener("click", getJoke);
