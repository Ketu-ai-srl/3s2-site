// Textele NOI ale paginii de start, cerute de gramatica REF-V: eroul, banda de intrebare,
// cele doua carduri, tab-urile celor trei etape, introducerea grilei de domenii, banda de
// incredere si banda de incheiere.
//
// CE STA AICI SI CE NU. Aici stau doar textele pe care structura noua le cere si care nu
// existau in continutul de azi. Tot ce exista deja se CITESTE de unde e: numele si
// rezumatele domeniilor din `segmente.ts`, numele paginilor din `rute.ts`, identitatea
// firmei din `entitate.ts`. Nu se copiaza aici, fiindca o copie si originalul diverg la
// prima editare, iar textul lor se rescrie in paralel, in alta felie, sub aceleasi chei.
//
// VOCEA, dupa REF-V: propozitii scurte, litera obisnuita, punct la final, beneficiul
// inaintea mecanismului, adresare la persoana a doua plural. Fara majuscule de afis, fara
// ton de depozit, fara liniute lungi.
//
// ADEVARUL. Nicio cifra noua si nicio certificare. Faptele din banda de incredere sunt
// afirmatiile deja inregistrate in `src/content/afirmatii/pagina-principala.json`, scrise
// atribuit: ce face ADRIA, firma-mama, si ce se intampla la preluare. Ce nu detinem se
// scrie pe pagina, nu se ocoleste.

export type CardImagine = {
  nume: string;
  alt: string;
  eticheta: string;
};

export type CardMic = {
  eticheta: string;
  titlu: string;
  text: string;
  href: string;
};

export const EROU = {
  eticheta: "Arhivare fizică, digitizare, căutare cu sursă",
  titluRand1: "Hârtia stă la depozit.",
  titluRand2: "Răspunsul vine pe telefon.",
  text: "Documentele rămân pe raft, cu cotă și inventar. Întrebarea o puneți în română. Răspunsul vine cu documentul și pagina din care a fost scos.",
  buton: { href: "/contact", text: "Discuție de 30 de minute" },
  garantie: "Fără ofertă a doua zi. Plecați cu o estimare de volum scrisă.",
};

// Cele patru carduri-imagine care ies din banda eroului. Fotografiile sunt cele din
// `public/img/`, ilustrative, cu licenta in `public/img/LICENTA.md`.
//
// Textul alternativ e scris aici, nu citit din `src/content/fotografii.ts`, fiindca pagina de
// start isi tine textele in fisierul asta. Cheile sunt aceleasi, deci cand se schimba setul de
// fotografii - cum s-a intamplat pe 2026-09-06, ca site-ul sa nu mai poarte cadrele site-ului
// din care a fost copiat - se rescriu AMBELE locuri, altfel alt-ul descrie o fotografie care
// nu mai exista. De
// asta se ocupa acum o verificare: `tests/fotografii.test.ts` cere ca fiecare `alt` de aici sa
// fie cuvant cu cuvant cel din registru.
//
// ANCORA DECUPAJULUI NU SE SCRIE AICI. Cardurile astea nu poarta `pozitie`: pagina de start o
// citeste din `FOTOGRAFII`, cu cheia de mai jos. O a treia copie a unei cifre masurate ar
// diverge la prima remasurare, si nimic nu se uita la ea.
export const CARDURI_EROU: CardImagine[] = [
  {
    nume: "rafturi",
    alt: "Rafturi metalice înalte de depozit, pe mai multe niveluri, încărcate cu cutii de carton și cu paleți înfoliați, fotografie ilustrativă",
    eticheta: "Depozit",
  },
  {
    nume: "cutii",
    alt: "Trei cutii de arhivă din carton kraft, așezate pe un birou alb, cu dosare suspendate prinse în ele; o mână așază unul dintre dosare, fotografie ilustrativă",
    eticheta: "Preluare",
  },
  {
    nume: "dosare",
    alt: "Teancuri de dosare vechi de carton, cu filele ieșind dintre coperți, în lumină caldă de prim-plan, fotografie ilustrativă",
    eticheta: "Digitizare",
  },
  {
    // Alt-ul s-a rescris pe 2026-09-07 fiindca s-a schimbat CADRUL, nu formularea: cadrul vechi
    // (6550462) arata aceeasi sala de catalog ca site-ul precedent, iar rezervele lui purtau
    // etichete intr-un alfabet nelatin. Fila „Cautare" e chiar cardul in care se vede, deci un
    // alt lasat neschimbat ar fi descris o fotografie care nu mai exista. De ce cadrul asta si ce
    // NU afirma alt-ul despre el: in registru, langa cheie.
    nume: "sertare",
    alt: "Fronturile mai multor sertare plate suprapuse, cu mânere de sârmă, văzute în prim-plan apropiat și oblic; benzile lor merg de la negru și maro închis la tonuri de nisip, alb, gri și un galben, fotografie ilustrativă",
    eticheta: "Căutare",
  },
];

export const INTREBARE = {
  titluNegru: "Întrebați în română.",
  titluViolet: "Răspunsul citează pagina.",
  text: "Un rezumat fără sursă nu se afișează. Fiecare frază se deschide la documentul și pagina din care a fost scoasă, ca să puteți verifica singuri.",
};

export const CARD_MARE = {
  eticheta: "Investiția",
  titlu: "Plătiți volumul real, nu un pachet.",
  text: "Costul pornește de la metrii liniari măsurați la preluare și de la ce se cere des. Factorii sunt scriși, unul câte unul.",
  buton: { href: "/investitia", text: "Vedeți cum se calculează" },
};

export const CARDURI_MICI: CardMic[] = [
  {
    eticheta: "Termene",
    titlu: "Ani de păstrare, pe categorii",
    text: "Termenele uzuale, fiecare cu actul normativ lângă el. Unde norma lipsește, scrie că lipsește.",
    href: "/instrumente/termene-de-pastrare",
  },
  {
    eticheta: "Comparație",
    titlu: "Depozit propriu sau serviciu",
    text: "Ce se schimbă la cost, la spațiu și la răspundere, dacă arhiva rămâne în sediu.",
    href: "/comparatie",
  },
];

export const ETAPE = {
  titlu: "Trei pași, în ordinea în care se întâmplă.",
  text: "Preluarea, depozitarea și căutarea sunt trei lucruri diferite. Se pot lua separat.",
  file: [
    {
      cheie: "scan",
      eticheta: "Scan",
      titlu: "Se digitizează ce se caută.",
      text: "Nu se scanează tot. Se scanează ce se cere des. Originalul rămâne pe raft, cu cotă, și se aduce pe hârtie atunci când este cerut.",
      legatura: { href: "/cum-functioneaza", text: "Cum funcționează" },
      // `pozitie` SI `alt` sunt copiile celor din `src/content/fotografii.ts`, pentru aceeasi
      // cheie, si o verificare din `tests/fotografii.test.ts` cere sa fie EGALE. Cifrele s-au
      // rescris odata cu setul de fotografii al site-ului (2026-09-06): masurate pe cadrele
      // NOI, la clientWidth 390 si card 358x240, ies dosare 50%, cutii 45% si maini 30%.
      // Motivul fiecareia e scris o singura data, langa cadru, in registru.
      //
      // Pe 2026-09-07 s-a schimbat si alt-ul lui `maini`: numea „un caiet cu spirala", care e in
      // fisierul de 1920 dar nu si in cel de 960, servit sub 768 px. Fila „Solve" e chiar cardul
      // care se vede pe telefon, deci aici alt-ul mintea exact pe marimea livrata. De ce, cu
      // cifrele ferestrei: in registru, langa cheie.
      imagine: {
        nume: "dosare",
        alt: "Teancuri de dosare vechi de carton, cu filele ieșind dintre coperți, în lumină caldă de prim-plan, fotografie ilustrativă",
        pozitie: "center 50%",
      },
    },
    {
      cheie: "store",
      eticheta: "Store",
      titlu: "Fiecare cutie are o cotă.",
      text: "Depozitul este la Golești, județul Argeș. Preluarea se face cu proces-verbal, cu măsurarea metrilor liniari și sigilarea cutiilor. Depozitul poate fi vizitat înainte de semnare.",
      legatura: { href: "/arhivare-fizica", text: "Arhivare fizică" },
      imagine: {
        nume: "cutii",
        alt: "Trei cutii de arhivă din carton kraft, așezate pe un birou alb, cu dosare suspendate prinse în ele; o mână așază unul dintre dosare, fotografie ilustrativă",
        pozitie: "center 45%",
      },
    },
    {
      cheie: "solve",
      eticheta: "Solve",
      titlu: "Răspunsul vine cu pagina.",
      text: "Întrebarea se pune în română, de pe telefon. Răspunsul arată documentul, pagina și articolul din care a fost scos, ca să se poată verifica.",
      legatura: { href: "/instrumente/termene-de-pastrare", text: "Termene de păstrare" },
      imagine: {
        nume: "maini",
        alt: "Mână care scoate un dosar dintr-un suport de documente din carton, cu file de hârtie ieșind dintre despărțitoare, fotografie ilustrativă",
        pozitie: "center 30%",
      },
    },
  ],
};

export const DOMENII = {
  eticheta: "Domenii",
  titlu: "Aceeași arhivă, alte întrebări.",
  text: "Un notar caută altceva decât o primărie. Fiecare domeniu are pagina lui, cu termenele și actele care i se aplică.",
  buton: { href: "/solutii", text: "Toate domeniile" },
};

export const INCREDERE = {
  eticheta: "Ce se poate verifica",
  titlu: "Faptele stau în acte, nu în promisiuni.",
  elemente: [
    {
      titlu: "Depozit care se poate vedea",
      text: "Depozitul este la Golești, lângă Pitești, și poate fi vizitat înainte de semnare.",
    },
    {
      titlu: "Preluare cu proces-verbal",
      text: "Preluarea se face cu proces-verbal de predare-primire, cu măsurarea metrilor liniari și sigilarea cutiilor.",
    },
    {
      titlu: "Nomenclator pregătit",
      text: "Nomenclatorul arhivistic se întocmește și se pregătește pentru avizare la Arhivele Naționale.",
    },
    {
      titlu: "Originalul rămâne al dumneavoastră",
      text: "Originalul se aduce pe hârtie atunci când este cerut. Contract în limba română, sub lege română.",
    },
  ],
};

export const INCHEIERE = {
  titlu: "Treizeci de minute, fără ofertă a doua zi.",
  text: "Ne uităm împreună la ce aveți: câți metri liniari, ce se cere des, ce termene se aplică. Plecați cu o estimare de volum și un calendar de preluare scris.",
  buton: { href: "/contact", text: "Contact" },
  nota: "Nu deținem certificare ISO 27001. Scrie pe pagina de securitate, cu tot ce lipsește.",
};
