
import Publishers from "../components/Publishers"; 

import sun from "../assets/When-the-Sun-Goes-Down.jpg";
import kidagaa from "../assets/kidagaa.jpg";
import utengano from "../assets/utengano.jpeg";
import caucasian from "../assets/caucasian-chalk-circle.webp";
import ghost from "../assets/The-ghost-of-Garba Tula.jpg";
import moses from "../assets/moses-and-the-kidnappers_0.jpg";
import matata from "../assets/Goat-matata.webp";
import kifimboCheza from "../assets/KifimboCheza.jpg";
import ken from "../assets/KenWalibora.jpg";
import imbuga from "../assets/Imbuga.jpeg";
import wallah from "../assets/WallahBinWallah.jpeg";


export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Book Repository</h1>
        <p className=" leading-relaxed max-w-3xl mx-auto">
          This project documents the primary school storybooks we read in the 2000s and 2010s.
          It also includes the high school setbooks, both English and Kiswahili, that have been
          examined in KCSE since the inception of the 8-4-4 system.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold">Primary School Storybooks</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            {
              src: "https://i.pinimg.com/736x/e7/e6/67/e7e66764523423e79ba246cf77a5b69c.jpg",
              alt: "Read with us, New friends, and Hallo children books",
            },
            { src: ghost, alt: "The ghost of Garba Tula" },
            { src: moses, alt: "Moses and the kidnappers" },
            { src: matata, alt: "Goat Matata" },
            { src: kifimboCheza, alt: "Kifimbo Cheza" },
          ].map((book, index) => (
            <div
              key={index}
              className="relative overflow-hidden  shadow-sm group hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={book.src}
                alt={book.alt}
                className="object-cover w-full h-72 transform group-hover:scale-105 transition duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>

        <div className="py-4">
          <button
            onClick={() => (window.location.href = "/primary")}
            className="font-medium p-2 rounded-sm bg-amber-600 hover:bg-blue-700 transition duration-300"
          > View More Primary School Books </button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold">High School Setbooks</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            {
              src: "https://i.pinimg.com/736x/0e/aa/a3/0eaaa33ab615d2aa6cde5487ebdae309.jpg",
              alt: "The river and the source",
            },
            { src: sun, alt: "When the sun goes down" },
            { src: kidagaa, alt: "Kidagaa kimemwozea" },
            { src: utengano, alt: "Utengano" },
            { src: caucasian, alt: "Caucasian chalk circle" },
            {
              src: "https://i.pinimg.com/736x/dd/85/f7/dd85f701f886b6719fbf4d7f644d1749.jpg",
              alt: "Siku Njema",
            },
          ].map((book, index) => (
            <div
              key={index}
              className="relative overflow-hidden shadow-sm group hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={book.src}
                alt={book.alt}
                className="object-cover w-full h-72 transform group-hover:scale-105 transition duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>

        <div className="py-4">
          <button
            onClick={() => (window.location.href = "/highschool")}
            className="font-medium p-2 rounded-sm bg-amber-600 hover:bg-blue-700 transition duration-300"
          > View More High School Books </button>
        </div>
      </section>
      
      <section className="">
        <h2 className="text-2xl font-semibold mb-4">The Significance of Setbooks</h2>
        <p className=" leading-relaxed">
          High school setbooks in Kenya have long been more than exam requirements — they’ve been a mirror
          of our society, shaping thought, language, and identity. From <em>The River and the Source</em> to
          <em> Betrayal in the City</em>, each generation of learners encountered powerful stories that
          explored justice, gender, and the meaning of freedom in a changing nation.
        </p>
        <p className="mt-3  leading-relaxed">
          Through these literary works, students developed critical thinking, empathy, and a deeper
          appreciation of Kenya’s diverse social and cultural heritage.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">A Generation of Readers</h2>
        <p className=" leading-relaxed">
          For many, primary school storybooks were the first windows into imagination and adventure. Titles
          like <em>Moses and the Kidnappers</em>, <em>Goat Matata</em>, and <em>Kifimbo Cheza</em> brought
          laughter, curiosity, and moral lessons into classrooms and homes.
        </p>
        <p className="mt-3  leading-relaxed">
          These stories built foundational literacy skills and nurtured a love for storytelling that
          carried forward into adulthood — inspiring readers, writers, and educators alike.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">The Evolution of Setbooks</h2>
        <div className="bg-white rounded-2xl shadow-sm divide-y divide-gray-200">
          {[
            {
              period: "1980s - 1990s",
              details:
                "Classics like Encounter from Africa and Betrayal in the City explored post-independence identity and political turmoil.",
            },
            {
              period: "2000s",
              details:
                "The River and the Source and An Enemy of the People addressed gender roles, modernization, and social justice.",
            },
            {
              period: "2010s - 2020s",
              details:
                "Works like Blossoms of the Savannah and Fathers of Nations examined cultural change, governance, and generational conflicts in the 21st century.",
            },
          ].map((item, index) => (
            <div key={index} className="p-6 hover:bg-gray-100 transition duration-200">
              <h3 className="font-semibold text-lg text-gray-800">{item.period}</h3>
              <p className=" mt-1">{item.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Reflections of Society</h2>
        <p className=" leading-relaxed">
          Setbooks often mirrored the moral, political, and cultural issues of their times. They examined
          topics like corruption, patriarchy, and power while celebrating values such as resilience,
          justice, and courage. Through literature, students engaged with the deeper questions of identity,
          nationhood, and human dignity.
        </p>
      </section>

      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-8 text-center">Notable Authors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {[
            {
              name: "Margaret Ogola",
              knownFor: "The River and the Source",
              img: "https://i.pinimg.com/736x/8f/07/e1/8f07e1f4116c55ac7c8a0e7b50e26dcd.jpg",
            },
            {
              name: "Francis Imbuga",
              knownFor: "Betrayal in the City",
              img: imbuga,
            },
            {
              name: "Ken Walibora",
              knownFor: "Siku Njema",
              img: ken,
            },
            {
              name: "Wallah Bin Wallah",
              knownFor: "Kiswahili Mufti textbooks",
              img: wallah,
            },
            {
              name: "Ngugi wa Thiong'o",
              knownFor: "River Between",
              img: "https://i.pinimg.com/736x/eb/0b/93/eb0b93d9f9f190a8c10b13a992d95d93.jpg",
            },
          ].map((author, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition duration-300"
            >
              <img
                src={author.img}
                alt={author.name}
                className="w-full h-56 object-cover transform hover:scale-105 transition duration-500 ease-in-out"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{author.name}</h3>
                <p className="text-sm  italic mt-1">
                  Known for: {author.knownFor}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Publishers />
      
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Memories that Shaped Us</h2>
        <p className=" max-w-3xl mx-auto leading-relaxed">
          Which storybook or setbook do you remember most vividly?  
          Share your favorite moment, quote, or classroom memory — from lively debates to unforgettable
          performances that brought literature to life.
        </p>
        <button
          onClick={() => (window.location.href = "/memories")}
          className="mt-6 text-green-950 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Share Your Story
        </button>
      </section>

      <section className="mt-20 border-t pt-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
        <p className=" max-w-3xl mx-auto leading-relaxed">
          This project is a digital archive dedicated to preserving the literary legacy that shaped Kenyan
          learners under the 8-4-4 system.  
          It stands as a tribute to the teachers, authors, and students who made reading an integral part
          of our shared educational journey — a celebration of the stories that defined generations.
        </p>
      </section>
    </div>
  );
}
