import { toRupiah } from "../helpers/rupiah";
import { createWaHyperlink } from "../helpers/url";

function Products() {
  const products = [
    {
      image:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5107794d-05bc-407f-ba60-81111489cedf.png",
      title: "Kerupuk Kulit Original",
      description:
        "Kerupuk kulit tradisional dengan rasa gurih dan renyah yang khas, cocok sebagai teman makan atau camilan.",
      price: 10000,
    },
    {
      image:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5107794d-05bc-407f-ba60-81111489cedf.png",
      title: "Kerupuk Kulit Original 2",
      description:
        "Kerupuk kulit tradisional dengan rasa gurih dan renyah yang khas, cocok sebagai teman makan atau camilan.",
      price: 20000,
    },
    {
      image:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5107794d-05bc-407f-ba60-81111489cedf.png",
      title: "Kerupuk Kulit Original 3",
      description:
        "Kerupuk kulit tradisional dengan rasa gurih dan renyah yang khas, cocok sebagai teman makan atau camilan.",
      price: 25500,
    },
  ];

  return (
    <section
      id="produk"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <h2 className="text-4xl font-bold text-green-900 mb-12 text-center select-none">
        Produk Kami
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((product, i) => {
          return (
            <article
              key={"product"+i}
              className="glass-card bg-red-500 p-6 flex flex-col rounded-lg"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <img
                src={product.image}
                alt={"Gambar " + product.description.toLowerCase()}
                className="rounded-lg mb-6 shadow-md object-cover w-full max-w-full h-48"
              />
              <h3 className="text-xl font-semibold mb-2 text-brown-muted">
                {product.title}
              </h3>
              <p className="flex-grow text-gray-800 mb-4">
                {product.description}
              </p>
              <p className="flex-grow text-gray-800 mb-4 font-bold">
                {toRupiah(product.price)}
              </p>
              <a
                className="btn-primary self-start mt-auto"
                target="_blank"
                href={createWaHyperlink("Halo kak! mau pesen " + product.title)}
              >
                Beli Sekarang
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Products;
