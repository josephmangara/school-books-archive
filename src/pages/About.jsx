


export default function About(){

  return (
    <>
      <h1>About the project</h1>
      <p>School Books Archive is a documentation of the literature I encountered throughout school.
        It preserves memories of the books that everyone who studied under the 8-4-4 system read.</p>

        {/* --- Page Styling Container --- */}
<div className="bg-gray-50 text-gray-800 px-6 py-16">
  
  {/* --- Historical Context Section --- */}
  <section className="max-w-5xl mx-auto mb-20">
    <h2 className="text-3xl font-bold text-blue-700 mb-4">The Significance of Setbooks</h2>
    <p className="text-gray-700 leading-relaxed">
      High school setbooks in Kenya have always been more than just exam material — they’ve been a
      reflection of society, inspiring empathy, critical thought, and awareness. From
      <em> The River and the Source</em> to <em>Betrayal in the City</em>, each text has encouraged
      students to question power, justice, and identity.
    </p>
    <p className="mt-4 text-gray-700 leading-relaxed">
      Through these literary works, learners not only improved their language and analysis skills but
      also developed a deeper appreciation for Kenya’s social and cultural landscape.
    </p>
  </section>

  {/* --- Educational Impact Section --- */}
  <section className="max-w-5xl mx-auto mb-20 bg-white shadow-sm rounded-2xl p-8">
    <h2 className="text-2xl font-semibold text-blue-700 mb-4">A Generation of Readers</h2>
    <p className="text-gray-700 leading-relaxed">
      Primary school storybooks like <em>Goat Matata</em> and <em>Moses and the Kidnappers</em> were
      more than classroom tools — they shaped childhood imagination and moral understanding. They
      introduced young readers to adventure, humor, and lessons about friendship, kindness, and
      perseverance.
    </p>
    <p className="mt-3 text-gray-700 leading-relaxed">
      These stories built literacy foundations and a love for reading that stayed with many into
      adulthood — creating storytellers, educators, and lifelong learners.
    </p>
  </section>

  {/* --- Literary Evolution Timeline --- */}
  <section className="max-w-5xl mx-auto mb-20">
    <h2 className="text-2xl font-semibold text-blue-700 mb-6">The Evolution of Setbooks</h2>
    <div className="bg-white rounded-2xl shadow-sm divide-y divide-gray-200">
      {[
        {
          period: "1980s–1990s",
          details:
            "Classics like Encounter from Africa and Betrayal in the City explored post-independence identity and political turmoil.",
        },
        {
          period: "2000s",
          details:
            "The River and the Source and An Enemy of the People addressed gender roles, modernization, and social justice.",
        },
        {
          period: "2010s–2020s",
          details:
            "Works like Blossoms of the Savannah and Fathers of Nations examined cultural change, governance, and generational conflicts.",
        },
      ].map((item, index) => (
        <div key={index} className="p-6 hover:bg-gray-100 transition duration-200">
          <h3 className="font-semibold text-lg text-gray-800">{item.period}</h3>
          <p className="text-gray-600 mt-1">{item.details}</p>
        </div>
      ))}
    </div>
  </section>

  {/* --- Cultural Reflection Section --- */}
  <section className="max-w-5xl mx-auto mb-20 bg-white shadow-sm rounded-2xl p-8">
    <h2 className="text-2xl font-semibold text-blue-700 mb-4">Reflections of Society</h2>
    <p className="text-gray-700 leading-relaxed">
      Setbooks and storybooks often mirrored Kenya’s evolving cultural and political landscape.
      Themes such as corruption, gender equality, and resistance against oppression were common —
      sparking conversations about justice and the human condition.
    </p>
    <p className="mt-3 text-gray-700 leading-relaxed">
      They also celebrated resilience, integrity, and community — teaching generations that
      literature can be both a mirror and a catalyst for change.
    </p>
  </section>

  {/* --- Author Highlights Section --- */}
  <section className="max-w-6xl mx-auto mb-20">
    <h2 className="text-2xl font-semibold text-blue-700 mb-8 text-center">Notable Authors</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
      {[
        {
          name: "Margaret Ogola",
          knownFor: "The River and the Source",
          img: "https://via.placeholder.com/200x250?text=Margaret+Ogola",
        },
        {
          name: "Francis Imbuga",
          knownFor: "Betrayal in the City",
          img: "https://via.placeholder.com/200x250?text=Francis+Imbuga",
        },
        {
          name: "Ken Walibora",
          knownFor: "Kidagaa Kimemwozea",
          img: "https://via.placeholder.com/200x250?text=Ken+Walibora",
        },
        {
          name: "Henrik Ibsen",
          knownFor: "A Doll’s House",
          img: "https://via.placeholder.com/200x250?text=Henrik+Ibsen",
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
            <h3 className="font-semibold text-gray-800 text-lg">{author.name}</h3>
            <p className="text-sm text-gray-600 italic mt-1">
              Known for: {author.knownFor}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* --- Memory & Nostalgia Section --- */}
  <section className="max-w-4xl mx-auto text-center mb-20">
    <h2 className="text-2xl font-semibold text-blue-700 mb-4">Memories that Shaped Us</h2>
    <p className="text-gray-700 leading-relaxed">
      Which storybook or setbook left the biggest mark on your memory?  
      Share your favorite classroom debate, unforgettable character, or quote that stuck with you.
    </p>
    <button
      onClick={() => (window.location.href = "/memories")}
      className="mt-6 bg-blue-600 text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-blue-700 transition duration-300"
    >
      Share Your Story
    </button>
  </section>

  {/* --- About This Project Section --- */}
  <section className="max-w-4xl mx-auto text-center border-t border-gray-200 pt-12">
    <h2 className="text-2xl font-semibold text-blue-700 mb-4">About This Project</h2>
    <p className="text-gray-700 leading-relaxed">
      This project is a digital archive celebrating the literary legacy that shaped students under
      the 8-4-4 system. It honors the authors, teachers, and readers who made storytelling an
      essential part of education — preserving Kenya’s cultural and literary history for generations
      to come.
    </p>
  </section>
</div>

    </>
  )
}