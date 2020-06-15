export const Weights = {
  "W": [1, 1, 1, 1, 1],
  "w1": [1, 0.8, 0.8, 0.6, 0.7, 0.6, 0.8],
  "w2": [1, 0.9, 0.8],
  "w3": [0.8, 0.7],
  "w4": [1, 0.9, 1, 0.6],
  "w5": [1, 0.9, 0.6, 0.8, 0.9, 0.8],
}

export const TreeTypes = [
  "jednotlivec",
  "alej",
  "stromořadí",
  "skupina"
]

export interface ClassificationSubCatInterface {
  H: string;
  I: number;
  info: string[];
}

export interface ClassificationInterface {
  H: string;
  I: number;
  subCat: ClassificationSubCatInterface[];
}

export const ClassificationSchema: ClassificationInterface[] = [
  {
    H: "Stromy s kulturně - historickým významem",
    I: 7,
    subCat: [
      {
        H:"Stromy připomínající mezníky ve vývoji naší státnosti",
        I: 3,
        info: [
          "Strom byl vysazen na paměť události připomínající naši státnost, státní zřízení či formování naší demokratické a svobodné společnosti. Jedná se o strom, který byl vysazen oficiálně za stát nebo samosprávný celek (kraj, obec). Příklady: stromy republiky, demokracie, osvobození, Evropy.",
          "Strom byl vysazen na paměť události připomínající naši státnost, státní zřízení či formování naší demokratické a svobodné společnosti. Jedná se o strom, který byl vysazen oficiálně spolky a dalšími institucemi či neformálními skupinami osob. Příklady: stromy republiky, demokracie, osvobození, Evropy.",
          "Strom byl vysazen na paměť události připomínající naši státnost, státní zřízení či formování naší demokratické a svobodné společnosti. Jedná se o strom, který byl vysazen jednotlivci či velice úzkou skupinou osob. Příklady: stromy republiky, demokracie, osvobození, Evropy."
        ]
      },
      {
        H:"Stromy osobností",
        I: 4,
        info: [
          "Strom byl vysazen na paměť či je pojmenován po význačné osobnosti, která v celorepublikovém (ev. nadnárodním) měřítku dosáhla ve společnosti vysokého uznání, ohlasu nebo povědomí. Příklady: stromy M. J. Husa, T. G. Masaryka, A. Švehly, J. Nerudy, G. Preisové, M. Tyrše.",
          "Strom byl vysazen na paměť či je pojmenován po význačné osobnosti, která v regionálním měřítku dosáhla vysokého uznání, ohlasu nebo povědomí. Příklad: strom Oldřicha Hlavsy v Rybné nad Zdobicí (akademický malíř náladových krajin Orlického podhůří).",
          "Strom byl vysazen na paměť či je pojmenován po osobnosti, která v místním měřítku (v rámci obce) dosáhla vysokého uznání, ohlasu nebo povědomí. Příklady: Heroldova lípa na Praze 10 (někdejší starosta), Lípa Františka Voláka v Pečkách (významný činovník Sokola v Pečkách).",
          "Strom byl vysazen na paměť či je pojmenován po osobnosti, která dosáhla uznání pouze v úzké skupině obyvatel."
        ]
      },
      {
        H:"Stromy výroční (jubilejní)",
        I: 3,
        info: [
          "Strom byl vysazen na paměť výroční události celostátního významu. Příklady: stromy tisíciletí (milénia).",
          "Strom byl vysazen na paměť vzniku či mezníku ve vývoji (např. povýšení obce na město) sídel. Příklad: strom na výročí 700. let od založení města Úvaly.",
          "Strom byl vysazen na paměť výročí založení instituce (ústavu, organizace), spolku. Příklad: strom na památku 120. let založení hasičského sboru v Šonově"
        ]
      },
      {
        H:"Stromy přátelství, podpory, porozumění a míru",
        I: 3,
        info: [
          "Strom byl vysazen na paměť přátelství mezi státy, obcemi (městy) se zahraničními partnerskými obcemi (městy), strom hlásající poselství míru. Příklady: stromy slovinsko- českého přátelství, stromy míru.",
          "Strom byl vysazen na paměť přátelství mezi obcemi v rámci republiky, strom vysazen na podporu a porozumění nadregionální záležitosti. Příklad: Lípa sousedství v Sobíně, strom harmonie v Albeři.",
          "Strom byl vysazen na podporu a porozumění v místní záležitosti (problému). Příklad: Lípa podpory v Úvalech (proti kácení v Klánovickém lese)."
        ]
      },
      {
        H:"Stromy - památníky historie, stromy osobností, rodové a slavnostní",
        I: 4,
        info: [
          "Strom byl vysazen v rámci Dne stromů, Dne Země či dalších stromkových slavností připomínající důležitost dřevin na Zemi či oslavující jejich hodnotu. Strom připomínající tradici význačného rodu (příbuzenství) v národním a regionálním významu. Příklad: Lípy před školou ve Slivenci (vysazeny v rámci stromkových slavností), Strom dětí v Uhříněvsi (vysazen v rámci Dne Země).",
          "Strom připomínající tradici rodu (příbuzenství) v rámci obce. Příklad: rodové stromy hospodářů. Stromy připomínající zaniklé sídlo. Příklad: Jírovcová alej v býv. městě Litrbachy",
          "Strom připomínající sňatek, narození či úmrtí, který má význam pro jednotlivce či úzkou skupinu obyvatel."
        ]
      },
      {
        H:"Stromy v lidové próze",
        I: 2,
        info: [
          "Strom vystupující v pověstech, legendách, povídkách, pohádkách, za předpokladu dohledatelnosti a existence konkrétního jedince, ke kterému je příběh vztažen.",
          "Strom vystupující v zaznamenaných místních příbězích (regionální literatura), za předpokladu dohledatelnosti a existence konkrétního jedince ke kterému je příběh vztažen."
        ]
      },
      {
        H:"Stromy památek zahradního a krajinářského umění",
        I: 5,
        info: [
          "Strom podstatnou měrou vytváří kompozici v zámeckém nebo jiném historickém parku či zahradě, nebo je klíčovou solitérou, či exotickým taxonem, který je dosud autentickým sortimentem, nebo byl vysazen dle původního záměru zakladatele (nese princip původní podstaty a jako jedinec je v kompozici nenahraditelný).",
          "Strom spoluurčující kompozici v zámeckém nebo jiném historickém parku či zahradě, či je dominantním jedincem. Strom lemující či umocňující památkově chráněné stavby tvořící charakteristickou - nejčastěji symetrickou – kompozici, či je dokladem principů lidového krajinářství. (spoluurčuje kompozici, je obtížně nahraditelný bez viditelného narušení kompozice)",
          "Strom je funkční součástí kompozice v zámeckém nebo jiném historickém parku, zahradě, či dalších sadovnických děl, která jsou významnými doklady historického a společenského vývoje, životního stylu a zahradní kultury minulosti. Strom, jenž je nedílnou součástí zahradně architektonického či krajinářského díla (např. aleje, významné skupiny apod., avšak je nahraditelný bez zásadního a dlouhodobého narušení kompozice).",
          "Strom původně ve stupni významnosti 1 až 3, který již ztrácí svoji funkci v kompozici (např. žijící torzo, dožívající strom). Výpadek takového jedince z kompozice nenaruší její funkční podstatu, je snadno nahraditelný.",
          "Strom, který je umístěn v průhledu či jiným způsobem narušuje kompozici či snižuje hodnotu zámeckého nebo jiného historického parku, zahrady či dalších děl (např. nevhodný druh, jedinec, který je suchý či výrazně poškozený)."
        ]
      }
    ]
  },
  {
    H: "Stromy památek zahradního a krajinářského umění",
    I: 3,
    subCat: [
      {
        H:"Krajinné dominanty",
        I: 5,
        info: [
          "Solitérně rostoucí strom představující mimořádnou krajinnou dominantu povědomou v celostátním měřítku. Má výraznou krajinotvornou funkci. Příklad: Dub šípák rostoucí v kaňonu Soutěsky, který je zobrazen v oficiálním logu CHKO Pálava.",
          "Solitérní strom nebo strom tvořící podstatnou součást solitérní skupiny stromů aleje či stromořadí představující krajinnou dominantu v regionálním měřítku. Příklad: Velká solitérní lípa v poli či na louce, která tvoří dominantní (prostorově i vizuálně výrazný) prvek v krajině, strom součástí solitérní dvojice či malé skupiny, okrajový strom velmi významné aleje či stromořadí apod.",
          "Solitérní strom nebo strom tvořící funkční součást významné samostatné skupiny stromů, aleje či stromořadí, který je vizuálně identifikovatelnou krajinnou dominantou pouze v měřítku konkrétní lokality. Např. dominantní vzrostlá lípa na návsi, strom součástí solitérní skupiny u osamocených božích muk, strom součástí významné aleje či stromořadí apod.). Stromy, které jsou charakteristické pro určité oblasti a jsou součástí historického dědictví. Např. oskeruše na Slovácku, solit...",
          "Solitérní strom nebo součást samostatné skupiny stromů, aleje či stromořadí s malou nebo jen potenciální funkcí krajinné dominanty Např. strom ve vzrostlém tvarově stabilním stromořadí, avšak dosud splývajícím s okolními stromy či porosty. Nebo solitérní strom, který může v budoucnu díky svému vzrůstu, tvaru či poloze být považován za krajinnou dominantu, avšak zatím funkci krajinné dominanty ještě neplní.",
          "Strom, který s ohledem na jeho vzrůst, tvar ani polohu funkci krajinné dominanty neplní."
        ]
      },
      {
        H:"Stromy spjaté s architektonickými objekty v krajině",
        I: 5,
        info: [
          "Stromy, které tvoří podstatnou součást krajinného obrazu architektonického objektu nebo stromy, které jsou podstatnou součástí urbanistické kompozice architektonického objektu. Strom zvyšuje estetickou hodnotu objektu (typicky stará lípa u horské chalupy jako ochrana před bleskem). Odstranění či absence stromu zásadně sníží (poškodí) urbanistickou a architektonickou hodnotu samotného stavebního objektu. Příklady: Starý mohutný jasan při vstupu do zámeckého parku v Čechách pod dotvářející charakteristický obraz zámku. Staré mohutné lípy nad kapličkou nebo u sochy svatého.",
          "Stromy, tvořící funkční součást urbanistické koncepce začlenění stavebního objektu v krajině. Odstranění či absence stromu sníží (poškodí) urbanistickou a architektonickou hodnotu samotného stavebního objektu.",
          "Strom tvořící kulisu pro architektonický objekt. Odstranění nebo absence tohoto stromu nemusí snížit architektonickou, estetickou nebo urbanistickou hodnotu  samotného stavebního objektu.",
          "Stromy, jejichž vazba ke konkrétnímu architektonickému objektu nebyla záměrná, např. vznikla náhodným působením sukcese, avšak z určitých specifických důvodů je tato vazba zajímavá (např. jako předmět specializovaného výzkumu). Příklad: Strom jako prvek tzv. nové divočiny vznikající v brownfields.",
          "Stromy, které nemají žádnou identifikovatelnou vazbu ke konkrétnímu architektonickému objektu, stromy které narušující dendrologickou kompozici objektu nebo stromy, které přímo narušují architektonické objekty. Příklad: Stromy náletového původu, objevující se v zámeckém parku v důsledku zanedbané péče o dendrologické dědictví tohoto parku a které kořenovým systémem narušují stabilitu historické zídky kolem parku."
        ]
      },
      {
        H:"Stromy orientační a hraniční",
        I: 5,
        info: [
          "Stromy symbolicky označující (připomínající) místa významná pro zachování národní identity. Stromy jako nositelé nadregionálně významného poselství v rámci paměti krajiny, historie národa, či hranic státu. Příklad: Žižkovy nebo Husovy duby/lípy apod.",
          "Stromy, označující historické hranice panství, obecních katastrů nebo křižovatky starých stezek (i zaniklých). Strom jako symbolický nositel paměti krajiny v regionálním měřítku. Příklad: Osamělý starý mohutný strom v polích v místě dřívějšího křížení dnes již zaniklých polních cest.",
          "Stromy označující místa spjatá s pamětí krajiny v lokálním měřítku (např. věkovité stromy vysazené u smírčího kříže). Příklad: Starý mohutný strom s obrázkem svatého na místě historické či tradované tragické místní události.",
          "Stromy označující místo události v nedávné minulosti. Příklad: Typicky strom s křížkem označujícím místo tragické dopravní nehody.",
          "Stromy bez orientačního a hraničního významu."
        ]
      }
    ]
  },
  {
    H: "Stromy s mimořádného ekologického významu",
    I: 2,
    subCat: [
      {
        H:"Stromy jako biotopy vzácných druhů rostlin, hub a živočichů",
        I: 5,
        info: [
          "Stromy s prokázaným výskytem zvláště chráněných druhů živočichů (ZCHD), dle plané vyhlášky MŽP, ptactva či bezobratlých, s předpokládanou perspektivou zachování habitatů v horizontu desítek let, umožňující dlouhodobou existenci vázaných druhů.",
          "Stromy s prokázaným výskytem zvláště chráněných druhů živočichů, ptactva či bezobratlých, se sníženou perspektivou zachování habitatů v horizontu jednotek let, nebo stromy s prokázaným výskytem chráněných druhů živočichů, ptactva či bezobratlých uvedených v červeném seznamu ohrožených druhů.",
          "Stromy s výskytem živočichů, ptactva či bezobratlých, nikoli však ZCHD či druhů z červeného seznamu ohrožených živočichů, nebo stromy poskytující vhodné habitaty pro existenci vázaných organizmů, které jsou dlouhodobě perspektivní a nejsou prostorově izolované a rostou ve vhodné lokalitě.",
          "Stromy poskytující habitaty s možností výskytu živočichů, ptactva či bezobratlých, ale s omezenou možností kolonizace, anebo omezenou životností. Alochtonní druhy s omezenou možností vazby na domácí druhy.",
          "Taxony bez vazby na chráněné druhy doprovodných organizmů, bez výskytu vhodných habitatů (dutin, trhlin apod.); stromy s nízkým potenciálem poskytovat vhodné habitaty či potravu pro doprovodné organizmy, nebo stromy rostoucí v oblastech bez možnosti výskytu ZCHD."
        ]
      },
      {
        H:"Stromy jako součást jedinečných ekosystémů",
        I: 5,
        info: [
          "Stromy, z hlediska vybrané funkce nepostradatelné, bez možnosti náhrady. Příklad: Klíčové stromy zelené infrastruktury, stromy na svahových deformacích udržující stabilitu půdy.",
          "Stromy, z hlediska ekologické funkce nepostradatelné, ale s možností eventuální náhrady; dominantní stromy městské zeleně.",
          "Stromy, plnící ekologické funkce, které však nejsou nepostradatelné, ale jejich náhrada je ztížena; Příklad: Stromy porostního pláště, doprovod vodotečí a součást větrolamů, součást biocenter a biokoridorů.",
          "Stromy, plnící ekologické funkce, snadno nahraditelné nebo postradatelné; stromy uvnitř remízů a remízků a porostních skupin; stromy v okrajových částech parků, extravilán.",
          "Stromy neplnící žádné ekologické funkce, snadno nahraditelné či postradatelné nebo stromy neschopné plnit sledované funkce, vzhledem ke svému stavu (např. suchý strom neposkytuje plody apod.)"
        ]
      }
    ]
  },
  {
    H:"Stromy s výrazným dendrologickým potenciálem",
    I: 4,
    subCat: [
      {
        H:"Stromy výjimečných dendrologických taxonů a stromy sbírkové",
        I: 5,
        info: [
          "Taxon mimořádně vzácný (raritní) svým výskytem, (desítky ks, viz tabulka v příloze)",
          "Taxon velmi vzácný svým výskytem, (max. stovky ks)",
          "Vzácněji se vyskytující taxon (max. tisíce ks)",
          "Méně častý taxon (max. desetitisíce až statisíce ks)",
          "Běžný taxon (miliony ks a více)"
        ]
      },
      {
        H:"Stromy mimořádného vzrůstu, vzezření, dimenzí",
        I: 5,
        info: [
          "Strom, jehož výška, obvod kmene, mohutnost koruny či bizarnost tvaru, případně jejich kombinace, dosahuje zcela mimořádných parametrů vzhledem k běžné charakteristice druhu či kultivaru a jeho obvyklému vzezření.",
          "Strom, jehož výška, obvod kmene, mohutnost koruny či bizarnost tvaru, případně jejich kombinace, dosahuje neobvyklých parametrů vzhledem k běžné charakteristice druhu či kultivaru a jeho obvyklému vzezření.",
          "Strom, jehož výška, obvod kmene, mohutnost koruny či bizarnost tvaru, případně jejich kombinace, dosahuje maximálních parametrů vzhledem k běžné charakteristice druhu či kultivaru a jeho obvyklému vzezření.",
          "Strom, jehož výška, obvod kmene, mohutnost koruny či bizarnost tvaru, případně jejich kombinace, se blíží maximálním parametrům vzhledem k běžné charakteristice druhu či kultivaru a jeho obvyklému vzezření.",
          "Strom běžných parametrů vzhledem k charakteristice druhu či kultivaru a jeho obvyklému vzezření, odpovídající jeho vývojové fázi."
        ]
      },
      {
        H:"Stromy mimořádného stáří",
        I: 5,
        info: [
          "Mimořádně starý strom, který prokazatelně dosáhl mimořádně vysokého věku (věk je doložen z kronik, maleb, fotografií, literatury, dobových záznamů, dendrochronologického hodnocení apod.)",
          "Mimořádně starý strom, který dosáhl vysokého věku (věk není doložen z kronik, maleb, fotografií, literatury, dobových záznamů apod.)",
          "Starý strom –  strom, který již dosáhl plné dospělosti s příznaky stárnutí, např. ústup primární koruny.",
          "Dospělý strom – jedinec s většinově ukončenou fází výškového přírůstu",
          "Mladý nebo dospívající strom - jedinec s trvající preferencí výškového přírůstu"
        ]

      },
      {
        H:"Stromy genofondové",
        I: 5,
        info:[
          "Stromy geograficky původní s vysoce hodnotným genofondem, rodičovské stromy (vzácné ovocné odrůdy) – zdroj testovaného reprodukčního materiálu",
          "Stromy geograficky původní s hodnotným genofondem (využitelné jako zdroj), vzácné ovocné odrůdy",
          "Stromy geograficky původní i nepůvodní – selektovaný reprodukční materiál",
          "Stromy běžné, využitelné, s potenciálně využitelným genofondem",
          "Stromy nevyužívané z hlediska genofondu"
        ]
      }
    ]
  },
  {
    H:"Právně chráněné, v červených seznamech",
    I: 6,
    subCat: [
      {
        H:"Památné stromy",
        I: 5,
        info: [
          "some text",
          "some text",
          "some text",
          "some text",
          "some text"
        ]
      },
      {
        H:"Strom, jenž je významným krajinným prvkem či jeho nedílnou součástí",
        I: 5,
        info: [
          "some text",
          "some text",
          "some text",
          "some text",
          "some text"
        ]
      },
      {
        H:"Chráněné druhy stromů",
        I: 2,
        info:[
          "Jedinec druhu, který je uveden na seznamu chráněných druhů (bez ohledu na tom, do jaké kategorie je zařazen). Strom rostoucí v areálech přirozeného výskytu, nepěstován v kulturách (např. sadové úpravy, školky apod.). Např: jeřáb krkonošský - Sorbus sudetica muk (jeřáb) český - Sorbus bohemika tis červený - Taxus baccata dub pýřitý (šípák) - Quercus pubescens dřín obecný - Cornus mas",
          "Jedinec druhu, který není uveden na seznamu chráněných druhů"
        ]
      },
      {
        H:"Památkově chráněný strom ve smyslu zák. č. 20/1987 Sb., o státní památkové péči",
        I: 3,
        info: [
          "Strom spoluvytvářející hodnotu, pro kterou je objekt či území chráněno jako národní kulturní památka (NKP)",
          "Strom spoluvytvářející hodnotu, pro kterou je objekt či území chráněno jako kulturní památka (KP), nebo památková rezervace",
          "Strom spoluvytvářející hodnotu, pro kterou je objekt či území chráněno jako památková zóna nebo ochranné pásmo kulturní památky, rezervace či zóny"
        ]
      },
      {
        H:"Stromy v červených seznamech",
        I: 3,
        info: [
          "Druhy stromů v evropském nebo státním červeném seznamu",
          "Druhy stromů v regionálních červených seznamech",
          "Druhy stromů v lokálních červených seznamech"
        ]
      },
      {
        H:"Stromy zvláště oceněné (diplomy, soutěže)",
        I: 5,
        info:[
          "Strom umístěný na 1., 2. či 3. místě mezinárodní soutěže (např. „Evropský strom roku“)",
          "Vítěz celonárodní soutěže (např. „Strom roku“)",
          "Finalista národní soutěže (např. každý z 12 nominovaných stromů v anketě „Strom roku“)",
          "Strom neoceněný v národní či regionální soutěži"
        ]
      }
    ]
  }
]

export const Dangers = {
  "A": {
    "name": "Stupně ohrožení dalším provozem",
    "grades": [
      "podupání okolí, psí záchody",
      "vandalství ve městech",
      "nevhodná péče"
    ]
  },
  "B": {
    "name": "Stupně ohrožené dopravou",
    "grades": [
      "vzdálenost od dopravní trasy, účast v dopravních nehodách",
      "bezpečnost dopravní trasy - výhled řidiče",
      "kolize s prvky elektrifikace či ITS",
      "bezpečnost chodců cyklistů - výhled na vozovku"
    ]
  },
  "C": {
    "name": "Stupně poškození životního prostředí",
    "grades": [
      "imisní ohrožení",
      "zábor pro zastavěné plochy",
      "riziko kontaminace půdy"
    ]
  },
  "D": {
    "name": "Stupně ohrožení developerskými projekty",
    "grades": [
      "bytová výstavba",
      "výstavba kancelářských objektů",
      "výstaba komerčních objektů",
      "kolize s veřejným zájmem"
    ]
  },
  "E": {
    "name": "Stupně ohrožení ve smyslu ochrany přírody",
    "grades": [
      "sucho",
      "nedostatek osvětlení",
      "nedostatečná odborná péče",
      "turistické vandalství"
    ]
  }
}

