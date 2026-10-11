# RideShare — Java 3

## Përshkrimi i projektit

RideShare është një aplikacion i krijuar me Next.js, React dhe TypeScript për shfaqjen e udhëtimeve drejt AAB-së.

## Provat e kryera

## Provat e kryera

### Prova 1 — Faqja kryesore dhe lista e udhëtimeve

Hapat: E hapa aplikacionin në browser dhe kontrollova listën e udhëtimeve.

Rezultati: U shfaqën tri udhëtimet me destinacionin, orën e nisjes dhe numrin e vendeve të lira.

### Prova 2 — Detajet dhe kërkesa për rezervim

Hapat: Klikova te “Shiko detajet” për një udhëtim me vende të lira dhe pastaj te “Kërko vend”.

Rezultati: U hapën faqja e detajeve dhe faqja e kërkesës për rezervim. Aplikacioni tregoi se rezervimi është demonstrues dhe nuk ruhet në databazë.

### Prova 3 — Udhëtimi pa vende dhe adresa e pavlefshme

Hapat: E hapa udhëtimin nga Lipjani, i cili nuk ka vende të lira, dhe pastaj testova adresën `/udhetimi/999`.

Rezultati: Aplikacioni shfaqi mesazhin “Nuk ka vende të lira” për udhëtimin nga Lipjani dhe faqen “Udhëtimi nuk u gjet” për adresën e pavlefshme.


## Kufizimet aktuale

Të dhënat e udhëtimeve ruhen në një listë brenda kodit. Kërkesat për rezervim nuk ruhen në databazë.

## Teknologjitë e përdorura

- Next.js
- React
- TypeScript
- CSS
- Git dhe GitHub
