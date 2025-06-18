import useWindowDimensions from "../hooks/useWindowDimension";

function Contact() {
  const { height, width } = useWindowDimensions();

  let mapHeight = 0;
  let mapWidth = 0;

  if (height <= 768) {
    mapWidth = width / 1.2;
    mapHeight = 250;
  } else {
    mapWidth = width / 3;
    mapHeight = 500;
  }

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
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.122197031562!2d106.20192739999999!3d-6.1142473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e41f5da33287691%3A0x689c597ef3135efa!2sProduksi%20Kerupuk%20Kulit%20(Ibu%20Ulyanah)!5e0!3m2!1sid!2sid!4v1750217729940!5m2!1sid!2sid"
              style={{ border: "0" }}
              height={mapHeight}
              width={mapWidth}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </center>
      </div>
    </section>
  );
}

export default Contact;
