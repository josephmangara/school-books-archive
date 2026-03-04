
import longhorn from "../assets/longhorn.png";
import oxford from "../assets/oxford.png";
import moran from "../assets/moran.png";

export default function Publishers() {
  const publishers = [
    {
      name: "Oxford University Press East Africa",
      description: "A branch of the global Oxford University Press, serving Kenya and East/Central Africa with primary, secondary and tertiary textbooks.",
      logo: oxford,
      homepage: "https://oxford.co.ke/",
    },
    {
      name: "Longhorn Publishers PLC",
      description: "A Kenyan based publishing house established in 1965, now a leading provider of educational and creative books across East Africa.",
      logo: longhorn,
      homepage: "https://www.longhornpublishers.com/",
    },
    {
      name: "Moran (E.A.) Publishers Limited",
      description: "Publisher of print and digital textbooks for primary and secondary schools in East Africa.",
      logo: moran,
      homepage: "https://moranpublishers.com/",
    },
    {
      name: "Kenya Literature Bureau (KLB)",
      description: "",
      logo: "https://klb.co.ke/wp-content/uploads/2019/10/KLB-LOGO-with-publishing-and-printing-for-YOU-2018.png",
      homepage: "http://www.klb.co.ke/",
    },
    {
      name: "East African Educational Publishers (EAEP)",
      description: "",
      logo: "https://www.eastafricanpublishers.com/wp-content/uploads/2021/08/Favicon.jpg",
      homepage: "http://www.eaepbooks.com/",
    },
    {
      name: "Jomo Kenyatta Foundation",
      description: "",
      logo: "https://www.jkf.co.ke/images/headers/jkflogo1.jpg",
      homepage: "http://www.jkf.co.ke/",
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-8 text-center">Leading Kenyan Publishers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        {publishers.map((pub, index) => (
          <div
            key={index}
            className="bg-white overflow-hidden hover:shadow-md transition-shadow duration-300"
          >
            <div className="h-48 flex items-center justify-center bg-gray-100">
              <img
                src={pub.logo}
                alt={`${pub.name} logo`}
                className="max-h-48 w-auto object-contain transition duration-500 ease-in-out hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{pub.name}</h3>
              {/* <p className="text-gray-600 text-sm">{pub.description}</p> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
