import { getProducts } from "@/lib/get-products";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";

export default async function CategoryPage(
    { params }: 
    { params: Promise<{ categoryId: string }>
}) {


  const { categoryId } = await params;
  const { pagination, products } = await getProducts({ categoryId });
  console.log(products);

  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16 min-h-screen">
      <div className="container mx-auto px-4">
        {/* 🔗 Volver al inicio */}
        <Link
          href="/"
          className="inline-block mb-6 text-blue-600 hover:underline dark:text-blue-400"
        >
          ← Return Home
        </Link>

        {/* 🏷️ Título */}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 capitalize">
          Category: {categoryId}
        </h1>

        {/* 🧱 Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.length === 0 && (
            <div className="col-span-full text-center py-20">
              <h5 className="text-xl font-semibold text-gray-600 dark:text-gray-300">
                No products found
              </h5>
            </div>
          )}

          {products.length > 0 &&
            products.map((product) => (
              <div
                key={product.slug}
                className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition dark:bg-gray-800 dark:border-gray-700"
              >
                <Link href={`/product/${product.slug}`}>
                  <img
                    className="p-4 rounded-t-lg aspect-square w-full object-cover"
                    src={product.image}
                    alt={product.name}
                  />
                </Link>
                <div className="px-5 pb-5">
                  <Link href={`/product/${product.slug}`}>
                    <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                      {product.name}
                    </h5>
                  </Link>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-3">
                      <BlocksRenderer content={product.description} />
                    </div>
                  <p className="text-xl font-bold text-gray-900 dark:text-white mt-4">
                    ${product.price}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
