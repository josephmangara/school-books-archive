
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
    <div className="px-6 py-10 max-w-6xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Book Repository</h1>
        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
          This project documents the primary school storybooks we read in the 2000s and 2010s.
          It also includes the high school setbooks, both English and Kiswahili, that have been
          examined in KCSE since the inception of the 8-4-4 system.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold text-gray-700">Primary School Storybooks</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
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
              className="relative overflow-hidden rounded-lg shadow-sm group hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={book.src}
                alt={book.alt}
                className="object-cover w-full h-72 transform group-hover:scale-105 transition duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-start mt-8">
          <button
            onClick={() => (window.location.href = "/primary")}
            className="bg-blue-600 text-white text-sm font-medium px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
          > View More Primary School Books </button>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold text-gray-700">
          High School Setbooks
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            {
              src: "https://i.pinimg.com/736x/0e/aa/a3/0eaaa33ab615d2aa6cde5487ebdae309.jpg",
              alt: "The river and the source",
            },
            { src: sun, alt: "When the sun goes down" },
            { src: kidagaa, alt: "Kidagaa kimemwozea" },
            { src: utengano, alt: "Utengano" },
            { src: caucasian, alt: "Caucasian chalk circle" },
          ].map((book, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-sm group hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={book.src}
                alt={book.alt}
                className="object-cover w-full h-72 transform group-hover:scale-105 transition duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-start mt-8">
          <button
            onClick={() => (window.location.href = "/highschool")}
            className="bg-blue-600 text-white text-sm font-medium px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
          >
            View More High School Books
          </button>
        </div>
      </section>
      <section className="mt-20">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Significance of Setbooks</h2>
        <p className="text-gray-600 leading-relaxed">
          High school setbooks in Kenya have long been more than exam requirements — they’ve been a mirror
          of our society, shaping thought, language, and identity. From <em>The River and the Source</em> to
          <em> Betrayal in the City</em>, each generation of learners encountered powerful stories that
          explored justice, gender, and the meaning of freedom in a changing nation.
        </p>
        <p className="mt-3 text-gray-600 leading-relaxed">
          Through these literary works, students developed critical thinking, empathy, and a deeper
          appreciation of Kenya’s diverse social and cultural heritage.
        </p>
      </section>
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">A Generation of Readers</h2>
        <p className="text-gray-600 leading-relaxed">
          For many, primary school storybooks were the first windows into imagination and adventure. Titles
          like <em>Moses and the Kidnappers</em>, <em>Goat Matata</em>, and <em>Kifimbo Cheza</em> brought
          laughter, curiosity, and moral lessons into classrooms and homes.
        </p>
        <p className="mt-3 text-gray-600 leading-relaxed">
          These stories built foundational literacy skills and nurtured a love for storytelling that
          carried forward into adulthood — inspiring readers, writers, and educators alike.
        </p>
      </section>
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">The Evolution of Setbooks</h2>
        <div className="space-y-4 text-gray-600">
          <div>
            <h3 className="font-semibold text-gray-700">1980s–1990s</h3>
            <p>Classics like <em>Encounter from Africa</em> and <em>Betrayal in the City</em> introduced themes of political unrest and identity.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">2000s</h3>
            <p>Books such as <em>The River and the Source</em> and <em>An Enemy of the People</em> tackled gender, modernization, and social justice.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">2010s–2020s</h3>
            <p><em>Blossoms of the Savannah</em>, <em>A Doll’s House</em>, and <em>Fathers of Nations</em> reflected the global and contemporary issues of the 21st century.</p>
          </div>
        </div>
      </section>
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Reflections of Society</h2>
        <p className="text-gray-600 leading-relaxed">
          Setbooks often mirrored the moral, political, and cultural issues of their times. They examined
          topics like corruption, patriarchy, and power while celebrating values such as resilience,
          justice, and courage. Through literature, students engaged with the deeper questions of identity,
          nationhood, and human dignity.
        </p>
      </section>
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Notable Authors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-gray-700">
          {[
            { name: "Margaret Ogola", knownFor: "The River and the Source" },
            { name: "Francis Imbuga", knownFor: "Betrayal in the City" },
            { name: "Ken Walibora", knownFor: "Kidagaa Kimemwozea" },
            { name: "Henrik Ibsen", knownFor: "A Doll’s House" },
          ].map((author, index) => (
            <div key={index} className="border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="font-semibold text-lg mb-1">{author.name}</h3>
              <p className="text-sm text-gray-600 italic">Known for: {author.knownFor}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Memories that Shaped Us</h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Which storybook or setbook do you remember most vividly?  
          Share your favorite moment, quote, or classroom memory — from lively debates to unforgettable
          performances that brought literature to life.
        </p>
        <button
          onClick={() => (window.location.href = "/memories")}
          className="mt-6 bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Share Your Story
        </button>
      </section>
    </div>
  );
}
