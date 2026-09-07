// Textele NOI de interfata ale celor patru pagini de decizie: /investitia, /comparatie,
// /despre si /contact. E fisierul de continut al feliei 4, valul S1-b.
//
// CE INTRA AICI SI CE NU. Aici stau numai lucrurile pe care le CERE gramatica paginii
// interioare REF-V si care nu existau in continutul de dinainte: etichete de card, titluri
// de sectiune care nu erau scrise nicaieri, intrebarile acordeonului, gruparea celor sapte
// elemente de cost in trei carduri. Faptele raman unde erau - `src/content/comparatie.ts`,
// `src/content/despre.ts`, `src/content/entitate.ts` - si se citesc de acolo, verbatim.
// Fisierele acelea sunt inghetate in valul asta: nu se rescrie nici textul, nici cheile.
//
// CAZUL CARE ERA GATA SA DEVINA O EXCEPTIE. Banda inchisa de pe /despre cere perechi
// titlu-text, iar `MOSTENIT` din `despre.ts` e o lista de siruri. Tentatia era sa rescriu aici
// cele cinci fapte in forma ceruta - adica sa existe doua versiuni ale aceluiasi fapt, care
// diverg la prima editare a continutului si pe care nimic nu le-ar fi comparat. Aici stau doar
// ETICHETELE, cate una per rand; textele raman in `despre.ts` si se imperecheaza la randare.
// `tests/interior-felie4.test.ts` masoara si ca sunt tot atatea etichete cate randuri, si ca
// niciun text din `MOSTENIT` nu e copiat in fisierul asta.
//
// VOCE REF-A (rescris 2026-09-07): titlul de sectiune e o AFIRMATIE de doua-patru cuvinte,
// cu punct, iar linia de sub el e o singura propozitie, intre 15 si 35 de cuvinte. Etichetele
// au unul pana la patru cuvinte si NU au punct - o eticheta cu punct e agramata, si a fost
// defect reparat in valul S1-a. Adresarea ramane „dumneavoastra", diacriticele cu virgula.

/** O grupa de elemente de cost, adica un card din sectiunea de factori a paginii /investitia. */
export type GrupaFactori = {
  eticheta: string;
  titlu: string;
  lead: string;
  /** Indicii din `INVESTITIA.factori`, in ordinea in care se citesc pe card. */
  indici: number[];
  /** Cardul din mijloc e inchis, ca in REF-V. Unul singur pe rand. */
  inchis?: boolean;
};

/** O intrebare de acordeon: intrebarea e noua, raspunsul vine din continutul existent. */
export type IntrebareInterior = {
  intrebare: string;
  /** Cheia raspunsului, rezolvata in pagina din continutul deja scris. */
  cheie: string;
};

// ---------------------------------------------------------------------------
// /investitia
// ---------------------------------------------------------------------------

export const INVESTITIA_INTERIOR = {
  /**
   * Randul de garantii de sub antet. Fiecare rand rezuma ceva deja scris pe site:
   * primul e al doilea element din `INVESTITIA.nuPrimiti`, al doilea vine din
   * `INVESTITIA.factori[0]`, al treilea din `ARATAM` de pe /despre. Fara punct: sunt
   * etichete, nu propozitii, si de la valul S2-a au cel mult patru cuvinte.
   */
  garantii: [
    "Fără ofertă pripită",
    "Măsurăm înainte de cifră",
    "Contract în română",
  ],

  factoriEticheta: "Ce intră în cost",
  factoriTitlu: "Șapte elemente, trei grupe.",
  factoriLead:
    "Sunt lucrurile pe care le măsurăm la fața locului, fiecare cu condițiile în care crește și în care scade, ca să vă puteți așeza singur fondul undeva pe scară.",

  /**
   * Cele sapte elemente din `INVESTITIA.factori`, grupate cate doua-trei. Indicii acopera
   * multimea 0-6 exact o data: proba `tests/interior-felie4.test.ts` o masoara, ca o
   * regrupare viitoare sa nu piarda un element si sa nu-l scrie de doua ori.
   */
  grupe: [
    {
      eticheta: "Fondul",
      titlu: "Mărimea și starea.",
      lead: "Primele două se măsoară cu ruleta și cu ochiul, la fața locului, înainte de orice discuție despre bani.",
      indici: [0, 4],
    },
    {
      eticheta: "Timpul",
      titlu: "Timpul și frecvența.",
      lead: "Grupa din mijloc hotărăște partea recurentă: un fond care se atinge rar înseamnă depozitare, unul din care se cere zilnic înseamnă muncă.",
      indici: [3, 2],
      inchis: true,
    },
    {
      eticheta: "Ce se cere de la noi",
      titlu: "Munca până la căutare.",
      lead: "Ultimele trei depind de timpul de om, nu de mărimea fondului: ce se scanează, pe ce drum ajunge hârtia la noi și cine hotărăște termenul.",
      indici: [1, 5, 6],
    },
  ] as GrupaFactori[],

  structuraTitlu: "O dată și lunar.",
  structuraLead:
    "Împărțirea contează mai mult decât suma: partea unică rămâne făcută, partea recurentă se adună cât ține contractul. Două oferte cu același total pot fi foarte diferite aici.",

  discutiaEticheta: "Discuția de 30 de minute",
  discutiaTitlu: "Ce iese din discuție.",
  discutiaLead:
    "Se măsoară, se scrie și pleacă la dumneavoastră, chiar dacă la final decideți să rămâneți la dulapul din birou.",
  refuzTitlu: "Ce nu promitem.",
  refuzLead:
    "Le scriem aici fiindcă sunt exact lucrurile pe care le cere un cumpărător grăbit. Un furnizor grăbit le promite.",

  ctaNota:
    "Nu afișăm număr de telefon: cererile intră prin poșta electronică, ca să rămână o urmă scrisă a cererii dumneavoastră și a răspunsului nostru.",

  intrebariEticheta: "Întrebări despre preț",
  intrebariTitlu: "Întrebările despre bani.",
  intrebari: [
    { intrebare: "De ce nu scrie un preț pe pagina asta?", cheie: "fara-pret-0" },
    { intrebare: "Ce se schimbă dacă publicați totuși o cifră?", cheie: "fara-pret-1" },
    { intrebare: "Cum comparăm două oferte de arhivare?", cheie: "fara-pret-2" },
    { intrebare: "Ce nu intră nici în costul unic, nici în cel lunar?", cheie: "nota-costuri" },
    { intrebare: "Când primim în sfârșit o cifră?", cheie: "incheiere" },
  ] as IntrebareInterior[],
};

// ---------------------------------------------------------------------------
// /comparatie
// ---------------------------------------------------------------------------

export const COMPARATIE_INTERIOR = {
  varianteEticheta: "Variantele",
  varianteTitlu: "Patru situații reale.",
  varianteLead:
    "Comparăm ce comparați dumneavoastră de fapt, fiindcă documentele nu sunt încă fișiere. Trei dintre cele patru variante nu sunt ale noastre și sunt descrise cum le-ar descrie cine le folosește.",

  tabelEticheta: "Comparația",
  tabelTitlu: "Șase întrebări de pus.",
  tabelLead:
    "Sunt întrebările care apar în discuție, în ordinea lor. Pe ecran lat se citesc pe coloane. Pe telefon fiecare întrebare devine un card, cu numele variantei pe fiecare răspuns.",

  pierdemEticheta: "Unde pierdem",
  pierdemTitlu: "Ce pierdeți cu noi.",

  nuMeritaEticheta: "Când nu merită",
  nuMeritaTitlu: "Patru situații de refuz.",
  nuMeritaLead:
    "Le auzim oricum în prima jumătate de oră, când s-a consumat deja timpul dumneavoastră. Se citesc mai bine aici.",
};

// ---------------------------------------------------------------------------
// /despre
// ---------------------------------------------------------------------------

export const DESPRE_INTERIOR = {
  impartireaEticheta: "Împărțirea",
  impartireaTitlu: "Două firme, două vechimi.",
  impartireaLead:
    "ADRIA arhivează din 2019, 3S se înființează anul acesta. Cititorul care le confundă semnează cu impresia greșită despre cine îi ține hârtia. Scriem întâi împărțirea.",

  adriaTitlu: "ADRIA ține hârtia.",
  treiSTitlu: "3S construiește răspunsul.",

  stareaEticheta: "Starea de azi",
  stareaTitlu: "Firma nu e înmatriculată.",
  stareaLead:
    "Dosarul de înmatriculare este în lucru. Până se încheie, firma nu are cod fiscal, număr de registru, sediu declarat sau telefon, și site-ul scrie că lipsesc.",

  numeleEticheta: "Numele",
  numeleTitlu: "Trei verbe, în ordine.",
  numeleLead:
    "Scan, Store, Solve sunt lucrurile care se fac cu un document, de la cutia din subsol până la răspunsul de pe telefon. Împărțirea de mai sus spune cine răspunde de fiecare.",

  limiteEticheta: "Limite",
  limiteTitlu: "Ce nu putem susține.",
  limiteLead:
    "Într-o achiziție publică, afirmația nesusținută costă mai mult decât tăcerea. Prima listă adună ce lipsește de pe site fiindcă nu putem dovedi. A doua spune ce punem în loc.",

  /**
   * Banda inchisa: faptele atribuite firmei-mama. `BandaIncredere` cere perechi titlu-text,
   * iar `MOSTENIT` din `src/content/despre.ts` e o lista de siruri - deci aici stau NUMAI
   * etichetele, cate una pentru fiecare rand, in aceeasi ordine. Textele raman cele din
   * `despre.ts`, verbatim: pagina le imperecheaza la randare, si asa nu exista nicaieri o a
   * doua copie a lor care sa poata diverge. Proba masoara ca lungimile coincid.
   */
  bandaEticheta: "Firma-mamă",
  bandaTitlu: "Ce aparține ADRIEI.",
  bandaEtichete: ["Vechimea", "Depozitul", "Autorizațiile", "Preluarea", "Oamenii"],
};

// ---------------------------------------------------------------------------
// /contact
// ---------------------------------------------------------------------------

/** Iconita cardului de drum. Desenul e in componenta; aici sta numai alegerea. */
export type IconitaDrum = "posta" | "telefon" | "sediu";

export const CONTACT_INTERIOR = {
  drumuriEticheta: "Drumuri",
  drumuriTitlu: "Trei drumuri, unul deschis.",
  drumuriLead:
    "Cardurile de mai jos se citesc din configurarea firmei. Unde valoarea lipsește, scrie că lipsește: nici substituent, nici datele firmei-mamă puse în locul lor.",

  mesajEticheta: "Primul mesaj",
  mesajTitlu: "Cinci rânduri scurtează discuția.",
  mesajLead:
    "Scrieți cât vreți și în ce ordine vreți. Prima listă este ce ne trebuie oricum ca să răspundem cu ceva concret din primul mesaj, nu de pe al treilea.",

  dateleEticheta: "Datele din mesaj",
  dateleTitlu: "Ce facem cu mesajul.",
  dateleLead:
    "Un mesaj către un furnizor de arhivare conține adesea numele instituției, ce se caută des și uneori un termen de control. Merită spus dinainte ce se întâmplă cu el.",
  dateleIntrebari: [
    "Ce se întâmplă cu mesajul pe care ni-l trimiteți?",
    "Ce nu vă cerem în primul mesaj?",
  ],
};
