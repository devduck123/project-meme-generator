import React from "react";

export default function MemeForm() {
  let defaultMeme = {
    url: "https://static.boredpanda.com/blog/wp-content/uploads/2019/10/guy-fired-over-meme-job-work-post-facebook-cody-hidalgo-2-5db6a03595c00__605.jpg",
    top: "",
    bottom: "",
  };

  let [meme, setMeme] = React.useState(defaultMeme);
  let [allMemes, setAllMemes] = React.useState({});

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMemes(data));
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  async function generateMeme() {
    let memes = allMemes.data.memes;
    let randomIndex = Math.floor(Math.random() * memes.length);
    let randomMeme = memes[randomIndex].url;
    setMeme((prevMeme) => {
      return {
        url: randomMeme,
        top: meme.top,
        bottom: meme.bottom,
      };
    });
  }

  return (
    <main>
      <form>
        <div>
          <input
            className="input-text"
            placeholder="top text"
            type="text"
            name="top"
            value={meme.top}
            onChange={handleChange}
          />
          <input
            className="input-text"
            placeholder="bottom text"
            type="text"
            name="bottom"
            value={meme.bottom}
            onChange={handleChange}
          />
        </div>
        <button onClick={generateMeme} type="button">
          Generate a Meme!
        </button>
      </form>
      <section className="meme-wrapper">
        <img className="image-meme" src={meme.url} alt="meme" />
        <h3 className="meme-text top">{meme.top}</h3>
        <h3 className="meme-text bottom">{meme.bottom}</h3>
      </section>
    </main>
  );
}
