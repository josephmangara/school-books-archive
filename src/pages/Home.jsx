
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
                className="object-cover w-full h-60 transform group-hover:scale-105 transition duration-500 ease-in-out"
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
    </div>
  );
}
