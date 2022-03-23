import trollface from "../images/trollface.png";

export default function Header() {
  return (
    <header>
      <nav>
        <img src={trollface} alt="troll-face" />
        <h1>Meme Generator</h1>
      </nav>
    </header>
  );
}
