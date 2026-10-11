RideShare — Java 4

1. Përshkrimi i punës

Në Java 4 e lidha aplikacionin RideShare me databazën PostgreSQL në Neon. Aplikacioni përdor Next.js dhe TypeScript. Të dhënat e udhëtimeve lexohen nga databaza dhe shfaqen në faqen kryesore dhe në faqen e detajeve.

2. Databaza

Krijova tabelën udhetimet me këto fusha:

id — identifikuesi unik i udhëtimit.

nisja — vendi i nisjes.

destinacioni — destinacioni.

ora — ora e udhëtimit.

vendtakimi — vendi i takimit.

vende — numri i vendeve të lira.

Krijova tri udhëtime me të dhëna fiktive për testim. Skema e databazës ruhet në skedarin schema.sql.

3. Lidhja me Neon

Përdora paketat @neondatabase/serverless dhe server-only.

Skedari lib/db.ts krijon lidhjen me Neon përmes variablës DATABASE_URL. Kredencialet ruhen në .env.local dhe nuk duhet të publikohen në GitHub.

Në skedarin lib/udhetimet.ts krijova funksionet:

lexoUdhetimet() — i merr të gjitha udhëtimet nga databaza.

gjejUdhetimin(id) — e gjen një udhëtim sipas ID-së.

4. Funksionalitetet

Shfaqja e udhëtimeve në faqen kryesore.

Shfaqja e detajeve të udhëtimit sipas ID-së.

Shfaqja e një mesazhi kur lista është bosh.

Shfaqja e një mesazhi kur lidhja me databazën dështon.

Shfaqja e faqes për simulimin e kërkesës për një vend.

Simulimi i kërkesës nuk e ruan një rezervim real dhe nuk e njofton shoferin.

5. Testimi

Prova 1 — Ndryshimi i të dhënave

E ndryshova përkohësisht orën e udhëtimit me ID 2 nga 08:15 në 08:25 në Neon SQL Editor. Pas rifreskimit të aplikacionit, ndryshimi u shfaq në listën e udhëtimeve. Kjo dëshmoi se aplikacioni lexon të dhënat nga databaza.

Prova 2 — Lista bosh

E shtova përkohësisht WHERE false në pyetjen SQL të funksionit lexoUdhetimet(). Aplikacioni shfaqi mesazhin “Nuk ka udhëtime për momentin.” Pas heqjes së kushtit, tri kartat u shfaqën përsëri.

Prova 3 — Gabimi i lidhjes

E riemërtova përkohësisht variablën DATABASE_URL në DATABASE_URL_PA_TEST në .env.local. Pas rinisjes së serverit, aplikacioni shfaqi mesazhin “Nuk u lidhëm me databazën. Provo përsëri.” Pastaj e riktheva emrin e saktë të variablës dhe lidhja funksionoi përsëri.

6. Përfundimi

Me këtë detyrë e lidha aplikacionin RideShare me një databazë PostgreSQL në Neon. Mësova si të lexoj të dhënat nga databaza, si t'i shfaq në faqe dhe si t'i trajtoj rastet kur lista është bosh ose lidhja me databazën dështon.

Të dhënat e përdorura janë fiktive dhe shërbejnë për ushtrime.