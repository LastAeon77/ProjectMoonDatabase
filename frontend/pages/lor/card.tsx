import React from "react";
import { useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar";
axios.defaults.baseURL = "http://localhost:8000/"
type game_card = {
  office: string;
  rank: string;
  Name: string;
  Cost: number;
  On_Play_Effect: string | null;
  Dice_Number: number;
  ImgPath: string | null;
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
const card = () => {
  const [data, setdata] = useState<Array<game_card> | null>();
  React.useEffect(() => {
    axios
      .get("lor/api/card/")
      // .then((res) => console.log(res))
      .then((res) => setdata(res.data as Array<game_card>))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="bg-lor font-square h-screen">
      <Navbar />
      Lollol
      <div>Data Here: {data && data[0].Name}</div>
    </div>
  );
};

export default card;
