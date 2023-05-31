const inputElements = [
  ...document.querySelectorAll(
    'input:not([type="submit"]):not([type="color"])'
  ),
];
const form = document.getElementById("form");
const qr = document.getElementById("qrcode");
const configuracion = {
  text: "",
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H,
};

const generarQR = (e) => {
  e.preventDefault();
  const nombre = document.getElementById("name").value;
  const apellido = document.getElementById("lastname").value;
  const tel = document.getElementById("tel").value;
  const email = document.getElementById("email").value;

  const vcard = `BEGIN:VCARD
VERSION:3.0
N:${apellido};${nombre};;;
FN:${nombre} ${apellido}
TEL;TYPE=WORK,VOICE: ${tel}
EMAIL;TYPE=PREF,INTERNET:${email}
END:VCARD`;

  qr.innerHTML = "";
  configuracion.text = vcard;
  sizeQR();
  new QRCode("qrcode", configuracion);
};

form.addEventListener("submit", generarQR);

function sizeQR() {
  const percentage = 0.45;
  let windowWidth = window.innerWidth * percentage;
  let windowHeight = window.innerHeight * percentage;

  configuracion.width = windowWidth;
  configuracion.height = windowHeight;
}
