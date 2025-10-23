import { getHomeInfo } from "@/lib/get-home-info";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";

export const Hero = async () => {
    const { title, description, image } = await getHomeInfo();

    console.log('image URL:', image);

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold text-white mb-4">
              {title}
            </h1>

            <h2 className=" text-white text-2xl py-3 mb-3 rounded-lg shadow-lg transition-all w-fit">
              <BlocksRenderer content={description} />
            </h2>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all w-fit">
              show categori
            </button>
          </div>
          <div className="flex items-center justify-center">
            <Image 
              src= {image}
              alt="Imagen de un iPhone 17 Pro Max"
              width={400}  // Ancho de la imagen (ajusta según necesites)
              height={500} // Alto de la imagen (ajusta según necesites)
              unoptimized
              className="object-contain rounded-md" // Asegura que la imagen escale bien
            />
          </div>
        </div>
      </main>
    </div>
    )
}