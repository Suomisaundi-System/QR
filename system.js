// QR capability adapter. Actual QR encoding/decoding needs a verified library.
export const qrCapabilities=Object.freeze({
  nativeDetection:typeof BarcodeDetector!=="undefined",
  camera:!!navigator.mediaDevices?.getUserMedia,
  canvas:typeof HTMLCanvasElement!=="undefined",
  svg:typeof SVGSVGElement!=="undefined"
});
export async function detectQR(source){
  if(!qrCapabilities.nativeDetection)throw Error("BarcodeDetector unavailable; install a trusted QR decoder");
  const supported=await BarcodeDetector.getSupportedFormats();
  if(!supported.includes("qr_code"))throw Error("QR detection unsupported");
  const detector=new BarcodeDetector({formats:["qr_code"]});
  return detector.detect(source);
}
export function qrPayloadURL(value,base=location.href){
  const u=new URL(value,base);
  if(!["https:","http:"].includes(u.protocol))throw Error("Unsupported QR URL scheme");
  return u.href;
}
