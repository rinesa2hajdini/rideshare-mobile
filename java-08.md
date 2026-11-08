# RideShare — Java 8

## Çfarë ndërtova

Këtë javë implementova funksionalitetin për zgjedhjen e vendtakimit në aplikacionin RideShare. Shtova butonin “Përdor vendndodhjen time”, i cili kërkon leje nga përdoruesi vetëm pasi të klikohet. Nëse përdoruesi e lejon vendndodhjen, aplikacioni merr dhe shfaq koordinatat GPS. Nëse leja refuzohet ose shfletuesi nuk e mbështet këtë funksionalitet, përdoruesi mund ta shkruajë vendtakimin manualisht.

## Provat që bëra

### Prova 1: Leja nuk kërkohet sapo hapet faqja.

-Hapat: E hapa faqen e kërkesës për rezervim pa klikuar butonin e vendndodhjes.
Rezultati i pritur: Faqja të hapet pa kërkuar leje për GPS.
Çfarë ndodhi: Faqja u hap normalisht dhe nuk u shfaq kërkesë për leje.

### Prova 2: Refuzimi i lejes nuk e bllokon përdoruesin.

- Hapat: Klikova butonin “Përdor vendndodhjen time” dhe refuzova lejen në Chrome. Pastaj provova fushën për vendtakimin manual.
- Rezultati i pritur: Aplikacioni shfaq një mesazh që leja është refuzuar dhe lejon vendosjen manuale të vendtakimit.
- Çfarë ndodhi: U shfaq mesazhi “Leja për vendndodhje u refuzua. Shkruaje vendtakimin manualisht.” Fusha manuale funksionoi.

### Prova 3: Dëshmitë në GitHub nuk tregojnë adresën time reale.

- Hapat: [PLOTËSO PASI TË PËRGATIS DHE KONTROLLOJ DËSHMITË PËR GITHUB.]
- Rezultati i pritur: Dëshmitë përdorin vetëm vendndodhje dhe koordinata fiktive.
- Çfarë ndodhi: [PLOTËSO PAS VERIFIKIMIT.]

## Ku gjendet puna

Skedarët kryesorë:

- `components/ZgjedhVendtakimin.tsx` – komponenti për zgjedhjen e vendtakimit dhe marrjen e koordinatave.
- `app/udhetimi/[id]/kerkesa/page.tsx` – faqja ku është integruar komponenti.
- `app/globals.css` – stilet për komponentin e vendtakimit.

Linku i demonstrimit: Ende nuk është publikuar.

## Çfarë mbetet për përmirësim

Aktualisht aplikacioni shfaq koordinatat GPS dhe jo emrin e adresës. Vendtakimi ende nuk ruhet në databazë. Në të ardhmen mund të shtohet shndërrimi i koordinatave në adresë dhe ruajtja e vendtakimit.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)

Përdora ChatGPT për udhëzime gjatë implementimit të komponentit, integrimin në faqen e kërkesës, CSS dhe përgatitjen e testeve. Kodin e implementova dhe e verifikova vetë duke provuar marrjen e vendndodhjes, refuzimin e lejes dhe mungesën e mbështetjes për GPS.

## Prova me një hyrje të re

Hyrja që provova: Ndryshova vendtakimin manualisht.
Parashikimi im para klikimit: Vendtakimi i ri do të shfaqet në faqe.
Çfarë pashë realisht: Vendtakimi u ndryshua dhe u shfaq menjëherë.
Skedari dhe funksioni që e shpjegojnë: ZgjedhVendtakimin.tsx, funksioni setVendtakimi.
Çfarë kuptova ose korrigjova: Kuptova se React e përditëson vlerën e vendtakimit përmes useState

Këtë pjesë e shpjegoj në klasë. Kontrolli automatik nuk verifikon vërtetësinë e provës.