


export default function About(){

  return (
    <>
      <h1>About the project</h1>
      <p>School Books Archive is a documentation of the literature I encountered throughout school.
        It preserves memories of the books that everyone who studied under the 8-4-4 system read.</p>

        {/* --- Page Styling Container --- */}
<div className="bg-gray-50 text-gray-800 px-6 py-16">
  
 
  {/* --- Literary Evolution Timeline --- */}
  <section className="max-w-5xl mx-auto mb-20">
    <h2 className="text-2xl font-semibold mb-6">The Evolution of Setbooks</h2>
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
            "Works like Blossoms of the Savannah and Fathers of Nations examined cultural change, governance, and generational conflicts in the 21st century.",
        },
      ].map((item, index) => (
        <div key={index} className="p-6 hover:bg-gray-100 transition duration-200">
          <h3 className="font-semibold text-lg text-gray-800">{item.period}</h3>
          <p className="text-gray-600 mt-1">{item.details}</p>
        </div>
      ))}
    </div>
  </section>


</div>

    </>
  )
}