# RideShare — Java 6
## PWA dhe lexim offline

### Prova 1 — Manifesti, ikonat dhe Service Worker

**Hapat:** Hapa `/manifest.webmanifest` në browser, kontrollova ikonat `public/icons/icon-192.png` dhe `public/icons/icon-512.png`, pastaj kontrollova te DevTools që Service Worker `/sw.js` ishte aktiv dhe që cache përmbante faqen offline, ikonat dhe `/api/udhetimet`.

**Rezultati:** Manifesti shfaqi konfigurimin e RideShare, të dy ikonat u hapën dhe Service Worker u aktivizua. Cache përmbante `/offline.html`, të dy ikonat dhe `/api/udhetimet`.

### Prova 2 — Leximi i udhëtimeve offline

**Hapat:** Me aplikacionin online, kontrollova që udhëtimi me ID `2` kishte orën `08:15`. Pastaj aktivizova `Offline` te DevTools → Network dhe rifreskova faqen. Ndërkohë që aplikacioni ishte offline, ndryshova orën në databazën Neon në `08:25` dhe e rifreskova përsëri faqen offline.

**Rezultati:** Faqja offline u hap dhe udhëtimi i dytë vazhdoi të shfaqte `08:15`, edhe pasi ora në databazë u ndryshua në `08:25`.

### Prova 3 — Përditësimi pas rikthimit online

**Hapat:** Te DevTools → Network ndryshova gjendjen nga `Offline` në `No throttling` dhe rifreskova faqen RideShare. Pas verifikimit, e riktheva orën e udhëtimit me ID `2` në databazë në `08:15`.

**Rezultati:** Pas rikthimit online, udhëtimi i dytë shfaqi orën e re `08:25`. Në fund, ora në databazë u rikthye në `08:15`.

## Përfundimi

Testova manifestin PWA, ikonat, Service Worker dhe leximin e listës publike të udhëtimeve offline. Verifikova se të dhënat e ruajtura mbeten të disponueshme pa lidhje interneti dhe se lista merr të dhënat e përditësuara pas rikthimit online. Faqja offline është vetëm për lexim dhe nuk mundëson rezervime.