# RideShare — Java 5

## Përmbledhje

Në këtë javë u shtua autentikimi me GitHub duke përdorur NextAuth. U integrua SessionProvider për menaxhimin e sesionit dhe u shtuan funksionet për hyrje dhe dalje nga llogaria.

## Provat e funksionimit

1. **Faqja kryesore:** Hapja e `http://localhost:3000` shfaqi titullin RideShare dhe tri kartat e udhëtimeve.
2. **Hyrja me GitHub:** Klikimi i butonit “Hyr me GitHub” hapi autorizimin e GitHub dhe, pas autorizimit, hyrja u krye me sukses.
3. **Dalja nga llogaria:** Klikimi i butonit “Dil nga llogaria” e përfundoi sesionin dhe aplikacioni u kthye te mundësia për hyrje.

## Siguria dhe publikimi

Skedari `.env.local` nuk u përfshi në commit-in e publikuar. Vlerat sekrete ruhen në variablat lokale të mjedisit dhe nuk vendosen në repository.

Kodi u publikua në repository-n personal përmes GitHub Desktop me commit-in `Java 5: GitHub authentication`.