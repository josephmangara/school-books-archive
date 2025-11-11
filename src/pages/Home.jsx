
import sun from "../assets/When-the-Sun-Goes-Down.jpg";
import kidagaa from "../assets/kidagaa.jpg";
import utengano from "../assets/utengano.jpeg";
import caucasian from "../assets/caucasian-chalk-circle.webp";
import ghost from "../assets/The-ghost-of-Garba Tula.jpg";
import moses from "../assets/moses-and-the-kidnappers_0.jpg";
import matata from "../assets/Goat-matata.webp";
import kifimboCheza from "../assets/KifimboCheza.jpg";

export default function Home() {

  return (
    <>
      <h1>Book repository</h1>
      <p>This project documents the primary school storybooks we read in the 2000s and 2010s. It also includes the highschool setbooks, both English and Kiswahili books, that have been examined in KCSE since the inception of the 8-4-4 system.</p>
      <div>
        <div>
          <h2>Primary school storybooks</h2>
          <img src="https://i.pinimg.com/736x/e7/e6/67/e7e66764523423e79ba246cf77a5b69c.jpg" alt="Read with us, New friends, and Hallo children books" />
          <img src={ghost} alt="The ghost of Garba Tula" />
          <img src={moses} alt="Moses and the kidnappers" />
          <img src={matata} alt="Goat matata" />
          <img src={kifimboCheza} alt="Kifimbo Cheza" />
        </div>
        <div>
          <h2>Highschool setbooks</h2>
          <img src="https://i.pinimg.com/736x/0e/aa/a3/0eaaa33ab615d2aa6cde5487ebdae309.jpg" alt="The river and the source" />
          <img src={sun} alt="When the sun goes down" />
          <img src={kidagaa} alt="Kidagaa kimemwozea" />
          <img src={utengano} alt="Utengano" />
          <img src={caucasian} alt="Caucasian-chalk-circle" />
        </div>
      </div>
    </>
  )
}