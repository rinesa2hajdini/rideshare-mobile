# RideShare — Java 3

## Përshkrimi i projektit

RideShare është një aplikacion i krijuar me Next.js, React dhe TypeScript për shfaqjen e udhëtimeve drejt AAB-së.

## Provat e kryera

- **Faqja kryesore:** E hapa aplikacionin në browser dhe u shfaqën tri udhëtimet me orën e nisjes dhe numrin e vendeve të lira.
- **Detajet e udhëtimit:** Klikova te “Shiko detajet” dhe u shfaqën të dhënat për udhëtimin e zgjedhur.
- **Kërkesa për rezervim:** Për një udhëtim me vende të lira hapa faqen “Kërko vend” dhe u shfaq mesazhi se rezervimi është vetëm demonstrim dhe nuk ruhet në databazë.
- **Udhëtimi pa vende të lira:** E hapa udhëtimin nga Lipjani dhe aplikacioni shfaqi mesazhin “Nuk ka vende të lira”.
- **Udhëtimi që nuk ekziston:** E hapa adresën `/udhetimi/999` dhe u shfaq faqja “Udhëtimi nuk u gjet”.

## Kufizimet aktuale

Të dhënat e udhëtimeve ruhen në një listë brenda kodit. Kërkesat për rezervim nuk ruhen në databazë.

## Teknologjitë e përdorura

- Next.js
- React
- TypeScript
- CSS
- Git dhe GitHub
