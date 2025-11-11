
import longhorn from "../assets/longhorn.png";
import oxford from "../assets/oxford.png";
import moran from "../assets/moran.png";

export default function Publishers() {
  const publishers = [
    {
      name: "Oxford University Press East Africa",
      description: "A branch of the global Oxford University Press, serving Kenya and East/Central Africa with primary, secondary and tertiary textbooks.",
      logo: oxford,
    },
    {
      name: "Longhorn Publishers PLC",
      description: "A Kenyan based publishing house established in 1965, now a leading provider of educational and creative books across East Africa.",
      logo: longhorn,
    },
    {
      name: "Moran (E.A.) Publishers Limited",
      description: "Publisher of print and digital textbooks for primary and secondary schools in East Africa.",
      logo: moran,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto mb-20">
      <h2 className="text-2xl font-semibold text-blue-700 mb-8 text-center">Leading Kenyan Publishers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {publishers.map((pub, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={pub.logo}
              alt={`${pub.name} logo`}
              className="w-full h-48 object-cover transform hover:scale-105 transition duration-500 ease-in-out"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-lg mb-2">{pub.name}</h3>
              {/* <p className="text-gray-600 text-sm">{pub.description}</p> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
