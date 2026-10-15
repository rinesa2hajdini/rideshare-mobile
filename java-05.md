# RideShare — Java 5

## Përmbledhje

Në këtë javë u shtua autentikimi me GitHub përmes NextAuth, menaxhimi i sesionit, krijimi i profilit të përdoruesit në Neon dhe rolet `udhetar` dhe `shofer`. U krijua paneli i përdoruesit dhe funksioni për ndryshimin e orës së udhëtimit me kontroll të rolit dhe pronësisë.

## Provat e funksionimit

### Prova 1 — Faqja kryesore

**Hapat:** E nisa aplikacionin me `npm.cmd run dev` dhe hapa `http://localhost:3000`.

**Rezultati:** Faqja RideShare u hap dhe u shfaqën tri kartat e udhëtimeve.

### Prova 2 — Autentikimi me GitHub

**Hapat:** U kyça me GitHub dhe më pas e testova daljen nga llogaria.

**Rezultati:** Hyrja dhe dalja nga llogaria funksionuan dhe sesioni u shfaq në panel.

### Prova 3 — Profili dhe roli

**Hapat:** Hapa `/panel` pasi u kyça me GitHub.

**Rezultati:** U shfaq profili im, ID-ja e GitHub dhe roli `udhetar`.

### Prova 4 — Ndryshimi i orës si shofer

**Hapat:** Në Neon e ndryshova rolin në `shofer` dhe e lidha profilin me udhëtimin me ID `2`. Pastaj e ndryshova orën nga `08:15` në `08:30` përmes panelit.

**Rezultati:** Aplikacioni shfaqi mesazhin e suksesit dhe Neon konfirmoi se ora e udhëtimit ishte `08:30`.

### Prova 5 — Paneli si udhëtar

**Hapat:** Në Neon e ktheva rolin në `udhetar` dhe e rifreskova panelin.

**Rezultati:** Paneli shfaqi rolin `udhetar` dhe formulari për ndryshimin e orës nuk u shfaq.

### Prova 6 — Ndërtimi i projektit

**Hapat:** Ekzekutova `npm.cmd run build`.

**Rezultati:** Ndërtimi përfundoi me sukses dhe TypeScript nuk raportoi gabime.

## Përfundim

U implementuan autentikimi me GitHub, profilet me role, paneli i përdoruesit dhe ndryshimi i orës së udhëtimit me kontrolle në server. U verifikua ruajtja e orës në Neon dhe u krye me sukses ndërtimi i projektit.
