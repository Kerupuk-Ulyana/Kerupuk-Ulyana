import Location from "./Location";

function Contact() {
  return (
    <section id="kontak" className="px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-bold text-green-900 mb-8 text-center select-none">
        Hubungi Kami
      </h2>
      <div className="max-w-3xl mx-auto space-y-6 text-green-900">
        <p className="flex items-center justify-center md:justify-start gap-2">
          <span className="material-icons">location_on</span>Jl. Kp. Baru,
          Panancangan, Kec. Cipocok Jaya, Kota Serang, Banten 42124, Indonesia
        </p>
        <p className="flex items-center justify-center md:justify-start gap-2">
          <span className="material-icons">phone</span> 081296612090
        </p>
        {/* <p className="flex items-center justify-center md:justify-start gap-2">
          <span className="material-icons">email</span>
          kontakt@bualyanahcapmatahari.co.id
        </p> */}

        <center>
          <Location />
        </center>
      </div>
    </section>
  );
}

export default Contact;
