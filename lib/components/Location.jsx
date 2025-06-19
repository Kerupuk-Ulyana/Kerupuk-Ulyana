import { ClientOnly } from "vite-react-ssg";
import useWindowDimensions from "../hooks/useWindowDimension";

function _Location() {
  const { width } = useWindowDimensions();

  let mapHeight = 0;
  let mapWidth = 0;

  if (width <= 768) {
    mapWidth = width / 1.2;
    mapHeight = 250;
  } else {
    mapWidth = width / 3;
    mapHeight = 500;
  }

  return (
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
  );
}

function Location() {
  return (
    <ClientOnly>
      {() => {
        return <_Location />;
      }}
    </ClientOnly>
  );
}

export default Location;
