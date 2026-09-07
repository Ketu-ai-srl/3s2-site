// Continutul celor doua pagini de decizie: `/comparatie` si `/investitia`.
//
// De ce stau in acelasi fisier: sunt cele doua pagini pe care le citeste acelasi om, in
// aceeasi jumatate de ora, inainte sa ceara o discutie. Una raspunde la "fata de ce",
// cealalta la "cat ma costa". Textul lor se reciteste impreuna la runda de editare cu
// clientul, deci se tine intr-un singur loc.
//
// REGULA DE CONTINUT, aceeasi ca pe restul site-ului: zero cifre pe care nu le putem
// sustine, zero certificari, zero preturi - nici interval, nici exemplu. Vechimea si
// autorizarea se scriu ATRIBUIT catre ADRIA Servicii Arhivare SRL, firma-mama.
//
// REGULA PROPRIE PAGINII DE COMPARATIE: randul pe care il pierdem se scrie primul, si e
// o sectiune de sine statatoare, nu o nota de subsol. O comparatie care iese in avantajul
// nostru pe fiecare rand nu e o comparatie, e o reclama, si un client institutional o
// citeste ca atare.
//
// Fiecare afirmatie verificabila de mai jos are o intrare in
// `src/content/afirmatii/comparatie-investitia.json`, cu stare `neconfirmat`.
//
// VOCE REF-A (rescris 2026-09-07): titlul care sustine ceva e o AFIRMATIE de doua-patru
// cuvinte, cu punct, urmata de o singura propozitie de explicatie, intre 15 si 35 de
// cuvinte. Numele celor patru variante raman NUME - sunt etichete de coloana, nu afirmatii,
// deci nu au punct si nu se transforma in propozitii. Celulele tabelului raspund pe scurt,
// fara superlative si fara comparatie de reclama.

/** O coloana din tabelul de comparatie: una dintre cele patru variante reale. */
export type ColoanaComparatie = {
  /** Cheia de React si nimic altceva. Nu ajunge in text. */
  id: string;
  /** Numele scurt, cat sa incapa pe un cap de coloana. */
  nume: string;
  /** O linie care spune ce este varianta. Apare sub nume, pe coloana. */
  rezumat: string;
  /**
   * Varianta pe care o vindem noi. Se marcheaza o singura data: componenta deduce din ea
   * accentul vizual, ca sa nu existe doua locuri care decid acelasi lucru.
   */
  aNoastra?: boolean;
};

/**
 * Un rand din tabel: intrebarea pe care si-o pune clientul, cu raspunsul pentru fiecare
 * dintre cele patru variante. Campul `celule` are aceeasi lungime si aceeasi ordine ca
 * lista de coloane; componenta verifica la randare si refuza sa deseneze un rand incomplet.
 */
export type RandComparatie = {
  axa: string;
  celule: string[];
};

/** O pereche titlu-text: o varianta descrisa, un rand de pierdere, un caz in care nu merita. */
export type FisaComparatie = {
  titlu: string;
  text: string;
};

/** Un element care determina costul, cu cele doua directii in care il misca. */
export type FactorCost = {
  titlu: string;
  text: string;
  creste: string;
  scade: string;
};

// ---------------------------------------------------------------------------
// /comparatie
// ---------------------------------------------------------------------------

export const COMPARATIE = {
  titluMeta: "Dulap propriu sau arhivă administrată",
  descriereMeta:
    "Patru feluri de a ține arhiva: dulapul din birou, colegul care se ocupă de ea, depozitarea fără căutare și arhiva administrată. Plus cazurile în care nu merită.",
  eticheta: "Comparație",
  h1: "Dulapul nu trimite factură.",
  // Sub 40 de cuvinte, regula directiei. Motivul pentru care nu comparam spatii de stocare
  // intre ele - documentele clientului sunt inca hartie - sta in linia sectiunii I, unde sunt
  // si cele patru variante descrise pe indelete. Nimic nu s-a pierdut.
  lead:
    "Documentele dumneavoastră sunt încă hârtie, la câțiva pași de birou, deci comparăm cele patru situații reale dintre care alegeți, cu rândul pe care îl pierdem scris primul.",

  variante: [
    {
      titlu: "Dulapul din birou",
      text:
        "Documentele rămân la câțiva pași, fără contract și fără plată lunară, dar ordinea, condițiile de păstrare și evidența ies din timpul dumneavoastră, iar rafturile ocupă metri pătrați de birou.",
    },
    {
      titlu: "Colegul care se ocupă",
      text:
        "Cineva din firmă cunoaște fondul și găsește repede ce a aranjat singur, dar sarcina nu are fișă separată, iar ordinea fondului stă în memoria unei singure persoane.",
    },
    {
      titlu: "Depozitare fără căutare",
      text:
        "Cutiile pleacă din birou și condițiile de păstrare devin problema depozitului, însă drumul până la un act rămâne același: cereți o cutie după inventar și așteptați.",
    },
    {
      titlu: "Arhivă administrată",
      text:
        "Fondul intră pe cote, ce se cere des se scanează, întrebarea pusă în română primește documentul și pagina, iar originalul rămâne al dumneavoastră și se aduce la cerere.",
    },
  ] as FisaComparatie[],

  coloane: [
    {
      id: "dulap",
      nume: "Dulapul din birou",
      rezumat: "Arhiva rămâne la dumneavoastră, în sediu.",
    },
    {
      id: "angajat",
      nume: "Colegul care se ocupă",
      rezumat: "O persoană din firmă ține fondul, pe lângă sarcinile ei.",
    },
    {
      id: "depozit",
      nume: "Depozit fără căutare",
      rezumat: "Cutiile pleacă, se cer înapoi după inventar.",
    },
    {
      id: "administrata",
      nume: "Arhivă administrată",
      rezumat: "Fond pe cote, căutare care citează pagina.",
      aNoastra: true,
    },
  ] as ColoanaComparatie[],

  randuri: [
    {
      axa: "Cine răspunde la o lipsă",
      celule: [
        "Dumneavoastră, în fața celui care cere actul, fiindcă nimeni nu poate spune când a ieșit din raft și cine l-a scos.",
        "Tot dumneavoastră: persoana care se ocupă poartă sarcina, iar fără o semnătură la preluare nu se reconstituie nimic.",
        "Depozitul răspunde de cutia predată, în limitele procesului-verbal, iar ce nu s-a numărat la preluare rămâne o discuție fără hârtie.",
        "Răspundem de ce am preluat numărat, iar ieșirile și returul originalelor se consemnează pe cotă.",
      ],
    },
    {
      axa: "Ce se vede la control",
      celule: [
        "Documentul există, dovada ordinii lui nu, iar nomenclatorul și inventarul ajung să fie căutate chiar în ziua în care sunt cerute.",
        "Depinde de cât a apucat să scrie persoana care se ocupă, fiindcă de obicei fondul e ordonat în capul ei.",
        "Aveți procesul-verbal și inventarul cutiilor, dar lipsește legătura dintre cererea inspectorului și pagina din document.",
        "Inventarul pe cote și nomenclatorul există înainte de control, iar actul cerut vine cu documentul și pagina; termenul avizului rămâne al Arhivelor Naționale.",
      ],
    },
    {
      axa: "Cât ia un act din 2009",
      celule: [
        "Cât îi ia cuiva să urce la rafturi și să deschidă bibliorafturile în ordinea în care își amintește, iar dacă anul e greșit în minte se reia.",
        "Puțin, dacă persoana e la birou și a aranjat ea fondul; altfel, cât ia unui coleg să reconstituie logica ei.",
        "Cât ia să identificați cutia în inventar, să o cereți și să sosească, iar dacă actul nu e acolo ciclul se reia.",
        "Cât ia să scrieți întrebarea, fiindcă răspunsul vine cu documentul și pagina; originalul se cere separat, când vă trebuie hârtia semnată.",
      ],
    },
    {
      axa: "Ce rămâne când pleacă omul",
      celule: [
        "Rămâne dulapul, fără cheia lui de citire, fiindcă ordinea era în memoria cuiva care a plecat cu preavizul.",
        "Pleacă deodată și sarcina, și harta fondului, iar cine vine după reconstituie ordinea de la zero, cutie cu cutie.",
        "Inventarul cutiilor rămâne, deci nu se pierde tot, dar se pierde legătura dintre o cerere concretă și cutia potrivită.",
        "Cota, inventarul și indexul rămân scrise, deci cine vine după citește un inventar din prima zi.",
      ],
    },
    {
      axa: "Cât costă spațiul ocupat",
      celule: [
        "Metrii pătrați ocupați de arhivă se plătesc la prețul biroului, iar costul nu apare pe nicio factură fiindcă e deja în chirie.",
        "Același cost al spațiului, plus orele în care cineva plătit pentru altceva caută prin cutii.",
        "Spațiul se eliberează, iar costul devine vizibil pe factură, măsurat pe metru liniar.",
        "Spațiul se eliberează și costul devine o linie pe care o comparați, la care se adaugă digitizarea a ceea ce se caută des.",
      ],
    },
    {
      axa: "Ce rămâne dacă vă opriți",
      celule: [
        "Nimic de desfăcut, fiindcă documentele sunt deja la dumneavoastră și nu depind de nimeni.",
        "La fel, iar riscul aici este plecarea persoanei, nu încheierea unui contract.",
        "Se cere restituirea și se așteaptă termenul din contract, iar cutiile se întorc așa cum au plecat.",
        "Fondul fizic se restituie cu proces-verbal și inventar, iar cel digital se predă în format deschis, ca preluarea lui să nu depindă de noi.",
      ],
    },
  ] as RandComparatie[],

  notaTabel:
    "Rândurile de mai sus descriu mecanisme, nu măsurători: nu punem durate și nu punem sume pentru niciuna dintre cele patru variante, fiindcă nu am măsurat fondul dumneavoastră, iar o cifră luată din media altor arhive ar arăta a dovadă fără să fie.",

  pierdem: [
    {
      titlu: "Costul vine înainte.",
      text:
        "Preluarea, inventarierea și digitizarea se plătesc înainte să vedeți primul răspuns cu pagina citată, iar dacă bugetul de anul acesta nu are loc pentru ele, comparația se oprește aici.",
    },
    {
      titlu: "Originalul pleacă din birou.",
      text:
        "Aducem originalul la cerere, cu termen scris în contract, dar termenul acela se adaugă la fiecare cerere, deci pentru fondul viu, cel din anul în curs, dulapul din birou câștigă.",
    },
    {
      titlu: "Apare un contract.",
      text:
        "După preluare, între dumneavoastră și cutie stau un contract, un termen și o persoană de la noi, deci câștigați evidență scrisă și pierdeți imediatețea unui biblioraft deschis pe loc.",
    },
    {
      titlu: "Colegul știe contextul.",
      text:
        "Omul care ține fondul de ani buni știe de ce s-a făcut un lucru, iar contextul acela nu stă în niciun document, deci pe un fond mic el bate orice index.",
    },
  ] as FisaComparatie[],

  nuMerita: [
    {
      titlu: "Arhiva încape într-un dulap.",
      text:
        "Când fondul stă într-un dulap, se caută rar și îl ține cineva care nu pleacă, un contract de arhivare adaugă cost și hârtii; cutii, un inventar de mână și puțină disciplină rezolvă mai bine.",
    },
    {
      titlu: "Documentele sunt deja scanate.",
      text:
        "Când fondul e deja digital, cu nume de fișier care înseamnă ceva, rafturile, transportul și inventarierea nu vă folosesc, deci comparați numai stratul de căutare, cu furnizorii care vând asta.",
    },
    {
      titlu: "Fondul iese la selecționare.",
      text:
        "Nu se plătesc depozitarea și digitizarea a ceea ce se elimină legal peste câteva luni, deci întâi selecționarea, cu avizul cerut de lege, apoi discuția despre ce rămâne.",
    },
    {
      titlu: "Caietul cere o certificare.",
      text:
        "Când achiziția condiționează contractul de o certificare anume, spuneți-o în prima discuție: nu afișăm certificări pe care nu le avem, iar dacă cerința nu se poate acoperi, aflați în aceeași zi cu noi.",
    },
  ] as FisaComparatie[],

  incheiere: {
    titlu: "Măsurăm împreună.",
    text:
      "O comparație publică nu știe câți metri liniari aveți, ce se cere din ei și cât de des, iar jumătatea de oră există ca să măsurăm fondul și să spunem, inclusiv, dacă nu merită.",
  },
};

// ---------------------------------------------------------------------------
// /investitia
// ---------------------------------------------------------------------------

export const INVESTITIA = {
  titluMeta: "Ce determină costul arhivării",
  descriereMeta:
    "Ce intră în cost înainte de orice cifră: metri liniari, cât se scanează, cât de des se cere un act, termenele legale, transportul. Ce e unic și ce e lunar.",
  eticheta: "Investiția",
  h1: "Prețul vine după măsurătoare.",
  // Sub 40 de cuvinte. Ce primeste omul din discutia de treizeci de minute e chiar
  // sectiunea IV, iar motivul pentru care cifra vine dupa masuratoare e chiar sectiunea III.
  // Nimic nu s-a pierdut.
  lead:
    "Fără prețuri și fără intervale: mai jos stau elementele care determină costul, cele care se plătesc o singură dată și cele care se plătesc lună de lună.",

  factori: [
    {
      titlu: "Metrii liniari de arhivă",
      text:
        "Un fond se măsoară în metri liniari de raft ocupat, nu în dosare și nici în ani, iar măsurătoarea se face la fața locului, cu ruleta, înainte de orice discuție despre bani.",
      creste:
        "fondul este împrăștiat în mai multe sedii, prin dulapuri și subsoluri, și nu a fost niciodată inventariat",
      scade:
        "fondul stă deja în cutii, ordonat pe ani, și se poate măsura dintr-o singură trecere",
    },
    {
      titlu: "Cât se scanează",
      text:
        "Digitizarea este partea cea mai scumpă, iar împărțirea între ce se scanează și ce rămâne pe raft se face înainte de prima cutie deschisă și intră în contract.",
      creste:
        "se cere digitizarea integrală a fondului, inclusiv a ceea ce nu s-a mai deschis de ani buni",
      scade:
        "se scanează întâi categoriile cerute des, iar restul rămâne pe raft și vine la cerere",
    },
    {
      titlu: "Frecvența cererilor",
      text:
        "Un fond care se atinge rar înseamnă în principal depozitare, iar unul din care se cere zilnic ceva înseamnă acces, căutare și scoateri de originale, adică muncă recurentă.",
      creste: "cererile vin zilnic, de la mai multe persoane, și au termen legal de răspuns",
      scade: "fondul se caută de câteva ori pe an, iar cererile nu au termen",
    },
    {
      titlu: "Termenele și nomenclatorul",
      text:
        "Categoriile cu termen lung stau în depozit mult după ce restul fondului a fost eliminat legal, iar nomenclatorul arhivistic decide ce categorie este fiecare document.",
      creste:
        "nomenclatorul lipsește sau nu a fost avizat, deci se întocmește, iar avizul Arhivelor Naționale nu depinde de noi",
      scade:
        "nomenclatorul există, este avizat, iar o parte din fond se poate elimina legal chiar acum",
    },
    {
      titlu: "Starea fizică a fondului",
      text:
        "Hârtia curată, în format obișnuit, se scanează dintr-o trecere, iar documentele legate strâns, capsate, mucegăite sau în formate mari cer manipulare separată, adică timp de om.",
      creste:
        "dosare cusute, capse, hârtie deteriorată, planuri și formate mari, documente lipite între ele",
      scade:
        "hârtie în stare bună, format obișnuit, deja scoasă din bibliorafturi și așezată în cutii",
    },
    {
      titlu: "Transportul și accesul",
      text:
        "Fondul trebuie să ajungă în depozit, iar costul transportului iese din numărul de curse și din cât durează încărcarea la sediul dumneavoastră.",
      creste: "mai multe sedii, subsol fără lift, program de acces limitat, mai multe curse",
      scade:
        "un singur punct de preluare, acces la nivelul străzii, o zi în care se poate lucra fără întrerupere",
    },
    {
      titlu: "Urgența eliberării spațiului",
      text:
        "Un calendar convenit din timp înseamnă loturi așezate pe săptămâni și oameni programați normal, iar un termen impus de altcineva înseamnă echipă suplimentară și lucru în afara programului.",
      creste:
        "termenul vine de la un control anunțat, de la o mutare de sediu sau de la sfârșitul unui contract de chirie",
      scade: "preluarea se poate așeza într-un calendar convenit împreună, pe loturi",
    },
  ] as FactorCost[],

  costUnic: [
    "Preluarea la sediul dumneavoastră, cu proces-verbal, și transportul inițial",
    "Inventarierea fondului pe unități arhivistice, cu cotă pentru fiecare",
    "Întocmirea nomenclatorului arhivistic, atunci când lipsește sau nu este avizat",
    "Digitizarea lotului convenit în scris înainte de prima cutie deschisă",
    "Punerea fondului digitizat în index, ca o întrebare să poată primi documentul și pagina",
  ],

  costRecurent: [
    "Depozitarea, măsurată pe metru liniar ocupat în raft",
    "Accesul și căutarea, pe toată durata contractului",
    "Aducerea originalelor la cerere, cu ieșirea și returul consemnate pe cotă",
    "Selecționarea periodică a fondului, cu avizul cerut de lege",
    "Digitizarea loturilor adăugate după preluarea inițială",
  ],

  notaCosturi:
    "Un element nu intră în nicio coloană: avizul Arhivelor Naționale, cerut la nomenclator și la selecționare. Nu îl emitem, nu îl grăbim și nu îi promitem termenul; îl pregătim, îl depunem, iar restul se așteaptă.",

  deCeFaraPret: [
    {
      titlu: "Nu am măsurat fondul.",
      text:
        "Un preț pe metru liniar scris pe un site este media altor arhive, cu altă stare a hârtiei, iar pus lângă fondul dumneavoastră arată a dovadă fără să fie.",
    },
    {
      titlu: "Prima cifră devine ancoră.",
      text:
        "Un număr publicat devine reperul întregii discuții, chiar dacă fondul dumneavoastră nu seamănă cu cel din care a ieșit, iar ancorarea lucrează în favoarea celui care publică cifra.",
    },
    {
      titlu: "Patru întrebări ajung.",
      text:
        "Cereți fiecărui furnizor unitatea în care se măsoară tariful, ce intră în el și ce se facturează separat, în cât timp ajunge un original cerut și ce se întâmplă cu fondul la încheierea contractului.",
    },
  ] as FisaComparatie[],

  primiti: [
    "O estimare de volum, cu metrii liniari măsurați împreună sau estimați pe ce ne arătați",
    "Un calendar de preluare scris: ce lot pleacă primul, când, și ce rămâne pe loc",
    "Lista categoriilor care se pot elimina legal acum, ca să nu plătiți depozitarea lor",
    "Împărțirea de plecare între ce se scanează și ce rămâne pe raft, cu motivul fiecărei alegeri",
    "Răspunsul scris la cele patru întrebări de mai sus, ca să ne puteți compara cu altcineva",
  ],

  nuPrimiti: [
    "Un preț, cât timp nu s-a văzut arhiva și nu s-au măsurat rafturile",
    "O ofertă trimisă a doua zi, construită pe presupuneri despre fondul dumneavoastră",
    "Un termen pentru avizul Arhivelor Naționale, fiindcă nu îl dăm noi",
    "O reducere condiționată de semnătura de astăzi",
  ],

  incheiere: {
    titlu: "Estimarea pleacă în scris.",
    text:
      "În jumătatea de oră se vede unde stă arhiva, cât ocupă, ce se cere din ea și ce se poate elimina legal acum, iar estimarea și calendarul de preluare pleacă spre dumneavoastră scrise.",
  },
};
