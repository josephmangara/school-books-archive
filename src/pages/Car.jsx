export default function Car() {
  const cards = [1, 2, 3, 4, 5, 6];

  return (
    <div className="w-full overflow-hidden border-4 border-green-500 py-10">
      <div className="flex w-max animate-marquee gap-6">
        {[...cards, ...cards].map((num, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-40 h-40 bg-blue-600 text-white text-3xl rounded-xl flex items-center justify-center"
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
}