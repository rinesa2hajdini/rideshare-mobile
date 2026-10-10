RideShare — Java 3

RideShare është një aplikacion për gjetjen e udhëtimeve drejt AAB-së. Projekti është krijuar me Next.js, React dhe TypeScript.

Funksionalitetet

Shfaqja e listës së udhëtimeve të disponueshme.

Shfaqja e detajeve të secilit udhëtim.

Shfaqja e orës së nisjes dhe vendtakimit.

Shfaqja e numrit të vendeve të lira.

Hapja e faqes për kërkesë rezervimi kur ka vende të lira.

Shfaqja e mesazhit kur nuk ka vende të lira.

Shfaqja e faqes kur udhëtimi nuk gjendet.

Shënim: Ky është version demonstrues. Të dhënat e udhëtimeve ruhen në një listë në kod. Kërkesat për rezervim nuk ruhen në databazë.

Teknologjitë

Next.js

React

TypeScript

CSS

Si të ekzekutohet projekti

1. Instalimi i varësive

Hape terminalin në dosjen e projektit dhe ekzekuto:

npm install

2. Nisja e serverit

Ekzekuto:

npm run dev

3. Hapja e aplikacionit

Hape në shfletues adresën që shfaqet në terminal, zakonisht:

http://localhost:3000

Nëse porta 3000 është e zënë, Next.js mund të përdorë një portë tjetër, si 3001.

Struktura e projektit

app/page.tsx — faqja kryesore me listën e udhëtimeve.

app/layout.tsx — struktura kryesore e aplikacionit.

app/globals.css — stilet e aplikacionit.

app/udhetimi/[id]/page.tsx — faqja me detajet e udhëtimit.

app/udhetimi/[id]/kerkesa/page.tsx — faqja për kërkesën e rezervimit.

app/udhetimi/[id]/not-found.tsx — faqja që shfaqet kur udhëtimi nuk gjendet.

components/KartaUdhetimi.tsx — komponenti për shfaqjen e kartës së udhëtimit.

lib/udhetimet.ts — të dhënat e udhëtimeve dhe funksioni për gjetjen e tyre.

Dokumentacioni

Dokumentacioni i Next.js

Mëso Next.js

GitHub Repository

Publikimi i aplikacionit

Aplikacioni mund të publikohet duke përdorur Vercel.