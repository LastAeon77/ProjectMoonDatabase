export type card_id = {
  id: number;
  Name: string;
  ImgPath: string;
};
export type office_id = {
  id: number;
  Name: string;
};
export type page_id = {
  Name: string;
  id: number;
};
export type effect_id = {
  id: number;
  Name: string;
  Description: string;
};
export type rank_id = {
  id: number;
  Name: string;
  Slogan: string;
  Description: string;
  ImgPath: string;
  slug: string;
};

export type game_card_light = {
    office: number;
    rank: number;
    Name: string;
    Cost: number;
    On_Play_Effect: string | null;
    Dice_Number: number;
    ImgPath: string;
    Roll1: string | null;
    Rarity: string | null;
    Eff1: string | null;
    Type1: string | null;
    CardType: string;
    Roll2: string | null;
    Eff2: string | null;
    Type2: string | null;
    Roll3: string | null;
    Eff3: string | null;
    Type3: string | null;
    Roll4: string | null;
    Eff4: string | null;
    Type4: string | null;
    Roll5: string | null;
    Eff5: string | null;
    Type5: string | null;
    slug: string;
  };