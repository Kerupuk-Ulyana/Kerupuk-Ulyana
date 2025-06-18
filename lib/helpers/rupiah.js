export function toRupiah(input) {
  // Ubah input ke angka valid
  const number =
    typeof input === "string"
      ? parseInt(input.replace(/[^\d]/g, ""), 10)
      : input;

  if (isNaN(number)) return "Rp0";

  // Format angka pakai titik ribuan (manual)
  const formatted = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return "Rp" + formatted;
}
