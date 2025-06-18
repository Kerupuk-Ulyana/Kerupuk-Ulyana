function Products() {
  return (
    <section id="produk" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-bold text-green-900 mb-12 text-center select-none">
        Produk Kami
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <article className="glass-card p-6 flex flex-col rounded-lg">
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5107794d-05bc-407f-ba60-81111489cedf.png"
            alt="Gambar produk Kerupuk Kulit Original dari Bu Ulyanah Cap Matahari berwarna kuning keemasan dengan kemasan yang menarik"
            className="rounded-lg mb-6 shadow-md object-cover w-full max-w-full h-48"
          />
          <h3 className="text-xl font-semibold mb-2 text-brown-muted">
            Kerupuk Kulit Original
          </h3>
          <p className="flex-grow text-gray-800 mb-4">
            Kerupuk kulit tradisional dengan rasa gurih dan renyah yang khas,
            cocok sebagai teman makan atau camilan.
          </p>
          <button className="btn-primary self-start mt-auto">Beli Sekarang</button>
        </article>

        <article className="glass-card p-6 flex flex-col rounded-lg">
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b719230c-35f8-404f-8fc6-226c39932a36.png"
            alt="Gambar produk Kerupuk Kulit Pedas dari Bu Ulyanah Cap Matahari dengan warna hijau gelap menunjukkan rasa pedas dan menggugah selera"
            className="rounded-lg mb-6 shadow-md object-cover w-full max-w-full h-48"
          />
          <h3 className="text-xl font-semibold mb-2 text-brown-muted">
            Kerupuk Kulit Pedas
          </h3>
          <p className="flex-grow text-gray-800 mb-4">
            Varian pedas dengan cita rasa menggigit sangat cocok untuk kamu yang
            suka sensasi ekstra.
          </p>
          <button className="btn-primary self-start mt-auto">Beli Sekarang</button>
        </article>

        <article className="glass-card p-6 flex flex-col rounded-lg">
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fdb2978c-71b9-491d-8af2-f81a96d53910.png"
            alt="Gambar produk Kerupuk Kulit Lemon dari Bu Ulyanah Cap Matahari dengan warna coklat muda segar menggambarkan varian rasa lemon yang unik"
            className="rounded-lg mb-6 shadow-md object-cover w-full max-w-full h-48"
          />
          <h3 className="text-xl font-semibold mb-2 text-brown-muted">
            Kerupuk Kulit Lemon
          </h3>
          <p className="flex-grow text-gray-800 mb-4">
            Rasa lemon segar menambah sensasi baru dalam menikmati kerupuk kulit
            yang gurih dan renyah.
          </p>
          <button className="btn-primary self-start mt-auto">Beli Sekarang</button>
        </article>
      </div>
    </section>
  );
}


export default Products;