import Image from "next/image";

export default function GalleryPage() {
  const photos = [
    "/gallery/photo1.jpg",
    "/gallery/photo2.jpg",
    "/gallery/photo3.jpg",
    "/gallery/photo4.jpg",
    "/gallery/photo5.jpg",
    "/gallery/photo6.jpg",
  ];

  return (
    <main className="min-h-screen pt-[80px] pb-20 px-6 sm:px-10 bg-gradient-to-br from-black via-neutral-900 to-neutral-800 text-white">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-yellow-500 mb-10 text-center">
          Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg shadow-lg border border-yellow-500 hover:shadow-yellow-500/40 transition"
            >
              <Image
                src={src}
                alt={`Gallery image ${i + 1}`}
                width={600}             // pick any realistic width/height
                height={400}            // they’re required for <Image />
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform"
                placeholder="blur"      // optional UX nicety
                blurDataURL="/blur.png" // tiny placeholder img if you have one
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
