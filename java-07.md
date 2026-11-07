# RideShare · Java 7

Ruaje si **java-07.md**, pranë README në rrënjën e repository-t tënd. Plotëso me vëzhgimet e tua dhe plotëso çdo vend bosh përpara dorëzimit. Ruaj titujt dhe etiketat. Para/Pas janë dy URL të plota commit-esh nga i njëjti repository, me kodin e plotë prej 40 shenjash.

Pas Commit dhe Push, hap formularin e lëndës për **Java 7** dhe vendos linkun kryesor të repository-t. Rezultati vjen te komenti **Kontrolli automatik i dorëzimit**, nga github-actions[bot], në Issue-n tënd. Lexo 5/5 dhe çdo ✅/❌; nëse korrigjon, bëj Push dhe komento **rikontrollo** te i njëjti Issue. 5/5 është kontroll teknik, jo notë.

## Rasti im
GitHub: rinesa2hajdini
Kodi: P7-299
Skenari i zgjedhur (numri dhe titulli, nga Rastet 1–5): [1 – Lista dhe detajet]
ID i udhëtimit në projektin tim: [2]
Të dhënat fiktive të rastit: Mitrovicë → AAB, 09:25, 3 vende. Ora për provën e re: 09:30.

## Parashikimi
[Pres qe ne liste te shfaqen udhetimet me te dhenat e tyre, si nisja, destinacioni, ora dhe vendet e lira. Kur te klikoj te ID 2, pres te hapen detajet e po atij udhetimi dhe te jene te njejta me ato ne liste. Nese kerkoj nje ID qe nuk ekziston, pres te shfaqet mesazhi se udhetimi nuk u gjet] Para kodimit: çfarë pret në listë, detaje dhe te skenari që zgjodhe? Shkruaj me fjalët e tua.

## Dy probleme
1. Në kartelat e listës nuk shfaqej vendtakimi. E vërejta duke hapur faqen kryesore dhe duke krahasuar informacionet në kartelë me faqen e detajeve.

2. Përdoruesi duhej të hapte detajet për ta parë vendtakimin, edhe pse ky informacion është i rëndësishëm për udhëtimin.

## Korrigjimi
Shtova shfaqjen e vendtakimit në kartelën e secilit udhëtim, duke përdorur `udhetim.vendtakimi`. Kështu përdoruesi e sheh këtë informacion drejtpërdrejt në listë, pa pasur nevojë të hapë detajet.

## Versionet
Para: [https://github.com/rinesa2hajdini/rideshare-mobile/commit/79934a5daf0c016768a166e714765f35e48b767e)]
Pas: [(https://github.com/rinesa2hajdini/rideshare-mobile/commit/bb463d26b5db1b76f16b275e6955c2c8aa643136)]

## Provat që bëra
### Prova 1
Hapat: [Hapa listën e udhëtimeve dhe klikova te udhëtimi me ID 2]
Pritshmëria: [Prisja që të hapeshin detajet e udhëtimit të zgjedhur]
Vëzhgimi: [U hapën detajet Fushë Kosovë – AAB, ora 08:15, me 1 vend të lirë. Të dhënat përputheshin me udhëtimin në listë]

### Prova 2
Hapat: [Hapa adresën /udhetimi/999/kerkesa]
Pritshmëria: [Prisja të shfaqej mesazhi se udhëtimi nuk ekziston]
Vëzhgimi: [U shfaq mesazhi “Udhëtimi nuk u gjet”]

### Prova 3
Hapat: [Hapa adresën /udhetimi/abc/kerkesa]
Pritshmëria: [Prisja të shfaqej mesazhi se udhëtimi nuk ekziston, sepse ID-ja nuk është e vlefshme]
Vëzhgimi: [U shfaq mesazhi “Udhëtimi nuk u gjet”]

Provat pas korrigjimit

Prova 1
Hapat: Hapa faqen kryesore dhe kontrollova tri kartelat e udhëtimeve.
Pritshmëria: Prisja që vendtakimi të shfaqej në secilën kartelë.
Vëzhgimi: Vendtakimi u shfaq saktë në të tri kartelat.

Prova 2
Hapat: Hapa detajet e udhëtimit me ID 2.
Pritshmëria: Prisja që vendtakimi të ishte i njëjtë me atë në kartelë.
Vëzhgimi: Në të dyja faqet shfaqej “Te stacioni kryesor”.

Prova 3
Hapat: Kontrollova udhëtimin me ID 3, i cili kishte 0 vende të lira.
Pritshmëria: Prisja që vendtakimi të shfaqej në kartelë dhe të mos lejohej kërkesa për vend.
Vëzhgimi: Vendtakimi “Qendra e qytetit” u shfaq dhe në detaje u shfaq “Nuk ka vende të lira”.


## Ndryshimi i ri
Nuk e kam demonstruar ende ndryshimin e hyrjes nga një koleg. Prandaj nuk kam parashikim dhe rezultat për këtë provë.

## Ndihma nga AI
Përdora AI për të shqyrtuar kodin, për të identifikuar një paqartësi në kartelat e udhëtimeve dhe për të marrë udhëzime për korrigjimin. Ndryshimin e vendtakimit në kartela dhe rezultatet e provave i verifikova vetë në aplikacion.