export interface StromI {
  IDEX: string|null;
  NAME: string|null;
  TYP_OBJ: string;
  DATIN: string | Date;
  DATAK: string | Date | null;
  DATVY: string | Date | null;
  VLAST: string;
  EXURL: string | null;
  IDNAZ: string | null;
  PRIJEM: string;
}

export interface LokalI {
  LON: string;
  LAT: string;
}

export interface KategI {
  KATEG1: string | null;
  KATEG2: string | null;
  KATEG3: string | null;
  KATEG4: string | null;
  KATEG5: string | null;
}

export interface PisemneDI {
  URL: string[];
}

export interface ObrazoveDI {
  URL: string[];
}

export interface OhroI {
  OHRO1: string | null;
  OHRO2: string | null;
  OHRO3: string | null;
  OHRO4: string | null;
  OHRO5: string | null;
}


export interface CommentI {
  COM_U: string;
  COM_A: string;
}

export interface TreeI {
  S: StromI;
  L: LokalI;
  PD: PisemneDI;
  OD: ObrazoveDI;
  K: KategI;
  C: CommentI;
  O: OhroI;
}

export class Tree implements TreeI {
  id: number = 0;
  S: StromI = {
    IDEX: '',
    NAME: '',
    TYP_OBJ: '',
    DATIN: '',
    DATAK: '',
    DATVY: '',
    VLAST: '',
    EXURL: '',
    IDNAZ: '',
    PRIJEM: ''
  }
  L: LokalI = {
    LON: '',
    LAT: ''
  };
  PD: PisemneDI = {
    URL: []
  };
  OD: ObrazoveDI = {
    URL: []
  };
  K: KategI = {
    KATEG1: '',
    KATEG2: '',
    KATEG3: '',
    KATEG4: '',
    KATEG5: ''
  };
  C: CommentI = {
    COM_U: '',
    COM_A: ''
  };
  O: OhroI = {
    OHRO1: '',
    OHRO2: '',
    OHRO3: '',
    OHRO4: '',
    OHRO5: ''
  }
}