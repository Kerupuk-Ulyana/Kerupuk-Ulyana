import { createWaHyperlink } from "../helpers/url";

function FixedContact() {
  return (
    <a
      href={createWaHyperlink("Halo Kak! mau tanya tentang kerupuk kulit")}
      target="_blank"
      className="fixed bottom-0 right-0 p-4 block"
    >
      <img src="./wa.svg" alt="" className="size-10 lg:size-14 mx-auto" />
      <p className="text-[12px] lg:text-md bg-white p-0.5 lg:p-1 rounded-md font-bold drop-shadow-lg">
        Hubungi Kami
      </p>
    </a>
  );
}

export default FixedContact;
