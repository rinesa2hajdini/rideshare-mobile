## Prova 1 — Ndryshimi i të dhënave në Neon

**Hapat:** Ndryshova orarin e një udhëtimi në databazën Neon dhe pastaj hapa faqen e udhëtimeve në aplikacion.

**Rezultati:** Orari i ndryshuar u shfaq në website, duke konfirmuar se aplikacioni i merr të dhënat nga databaza.

## Prova 2 — Lista pa udhëtime

**Hapat:** E provova faqen kur lista e udhëtimeve nuk kishte asnjë udhëtim. Pastaj i riktheva të dhënat që kartat të shfaqeshin përsëri.

**Rezultati:** Aplikacioni shfaqi mesazhin “Nuk ka udhëtime për momentin.” Kur të dhënat u rikthyen, kartat u shfaqën përsëri.

## Prova 3 — Gabimi i lidhjes me databazën

**Hapat:** E riemërtova përkohësisht variablën `DATABASE_URL` në mënyrë që aplikacioni të mos mund të lidhej me databazën. Pas testimit, e riktheva emrin e saktë të variablës.

**Rezultati:** Aplikacioni shfaqi mesazhin “Nuk u lidhëm me databazën. Provo përsëri.” Pas rikthimit të konfigurimit, e përfundova testimin dhe e riktheva lidhjen.