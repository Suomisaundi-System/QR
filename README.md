# Suomisaundi System — QR

Subsystem foundation. The main entry point is https://suomisaundi-system.github.io/.

 bootstraps ;  provides importable functionality. Direct subsidiary visitors are redirected after ten seconds.

QR scanning uses the browser BarcodeDetector where supported. QR generation requires a reviewed encoding library and is not implemented yet.

## QR generation
Import `qr-generator.js` and call `createQRCodeSVG(text)` to receive SVG markup or `renderQRCode(element,text)` to display a QR code in a browser. This implementation bundles the open-source `qrcode` encoder v1.5.4 (MIT license; see `QRCODE-LICENSE.txt`), so it works without a runtime CDN dependency.

QR scanning remains dependent on browser BarcodeDetector support; cross-browser fallback is not yet bundled. Generated QR content is not authenticated; validate URLs and untrusted payloads before acting on them.
