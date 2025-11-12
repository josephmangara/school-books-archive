

export default function Magazines() {
  const magazines = [
  {
    name: "Shujaaz",
    description:
      "A Kenyan youth platform launched in 2010 combining comic magazine, radio and digital media in Sheng to reach teens across the country.",
    logoSrc: "https://i.pinimg.com/736x/22/c1/13/22c1132562ea514538d9bfc9f7e99767.jpg",
  },
  {
    name: "The insyder",
    description:
      "Magazine and online platform covering education, entrepreneurship, employment and lifestyle for Kenyan youth.",
    logoSrc: "https://via.placeholder.com/200x250?text=Youth+Village+Kenya",
  },
  {
    name: "Supa Strikas",
    description:
      "Sports comic",
    logoSrc: "https://i.pinimg.com/736x/91/5a/43/915a43407073fbd1b5715a14ae1047b3.jpg",
  },
  {
    name: "Kwani? Magazine",
    description:
      "Kenya’s influential literary magazine founded in 2003 by the Kwani Trust; a major youth/creative publication though less school-specific.",
    logoSrc: "https://via.placeholder.com/200x250?text=Kwani?+Magazine",
  },
  {
    name: "4-K Clubs Magazine",
    description:
      "Magazine of the Kenyan 4-K Clubs programme (Kuungana, Kufanya, Kusaidia Kenya) for primary/junior secondary schools focusing on agriculture, citizenship and leadership.",
    logoSrc: "https://via.placeholder.com/200x250?text=4K+Clubs+Magazine",
  },
];


  return (
    <section className="max-w-6xl mx-auto mb-20">
      <h2 className="text-2xl font-semibold text-blue-700 mb-8 text-center">
        Popular High-School Magazines
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {magazines.map((mag, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition duration-300"
          >
            <img
              src={mag.logoSrc}
              alt={`${mag.name} logo`}
              className="w-full h-56 object-cover transform hover:scale-105 transition duration-500 ease-in-out"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-lg mb-2">
                {mag.name}
              </h3>
              <p className="text-gray-600 text-sm">{mag.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
