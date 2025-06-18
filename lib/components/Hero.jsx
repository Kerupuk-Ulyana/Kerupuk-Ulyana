function Hero() {
  return (
    <section className="flex-grow flex items-center justify-center px-4 text-center py-20 max-w-7xl mx-auto">
      <div data-aos="zoom-in" data-aos-duration="1000" className="max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gradient leading-tight select-none">
          Kerupuk Kulit Bu Ulyanah
          <br />
          Cap Matahari
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="text-lg md:text-xl mb-10 text-green-900/90 max-w-3xl mx-auto"
        >
          Kerupuk Kulit Bu Ulyanah Cap Matahari, berlokasi di Serang, Banten,
          menerima pesanan grosir dan eceran dengan cita rasa gurih dan renyah
          yang otentik. Nikmati kualitas terbaik dari kerupuk kulit kami, siap
          memenuhi kebutuhan camilan Anda!
        </p>
        <a href="#produk" className="btn-primary">
          Lihat Produk
        </a>
      </div>
    </section>
  );
}

export default Hero;
