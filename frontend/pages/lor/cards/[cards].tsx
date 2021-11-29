import React from "react";
import { useState } from "react";
import axios from "axios";
import Navbar from "../../../components/navbar";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Link from "next/link";
import { useRouter } from "next/router";

axios.defaults.baseURL = "http://localhost:8000/";
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
const Dice_Image = (dicetype: string) => {
  // This assigns dice images to each name
  switch (dicetype) {
    case "Blunt":
      return (
        <img
          src="/static/dice_type/AtkBlunt.png"
          alt="Blunt"
          height="50"
          width="50"
        />
      );
    case "Thurst":
      return (
        <img
          src="/static/dice_type/AtkPierce.png"
          alt="Thrust"
          height="50"
          width="50"
        />
      );
    case "Pierce":
      return (
        <img
          src="/static/dice_type/AtkPierce.png"
          alt="Thrust"
          height="50"
          width="50"
        />
      );
    case "Slash":
      return (
        <img
          src="/static/dice_type/AtkSlash.png"
          alt="Slash"
          height="50"
          width="50"
        />
      );
    case "Evade":
      return (
        <img
          src="/static/dice_type/DefEvade.png"
          alt="Evade"
          height="50"
          width="50"
        />
      );
    case "Block":
      return (
        <img
          src="/static/dice_type/DefGuard.png"
          alt="Block"
          height="50"
          width="50"
        />
      );
    case "Blunt Counter":
      return (
        <img
          src="/static/dice_type/StandbyBlunt.png"
          alt="Blunt Counter"
          height="50"
          width="50"
        />
      );
    case "Pierce Counter":
      return (
        <img
          src="/static/dice_type/StandbyPierce.png"
          alt="Thrust Counter"
          height="50"
          width="50"
        />
      );
    case "Slash Counter":
      return (
        <img
          src="/static/dice_type/StandbySlash.png"
          alt="Slash Counter"
          height="50"
          width="50"
        />
      );
    case "Evade Counter":
      return (
        <img
          src="/static/dice_type/StandbyEvade.png"
          alt="Evade Counter"
          height="50"
          width="50"
        />
      );
    case "Block Counter":
      return (
        <img
          src="/static/dice_type/StandbyGuard.png"
          alt="Block Counter"
          height="50"
          width="50"
        />
      );
    default:
      return null;
  }
};
const imgur_or_static = (img_link: string) => {
  // Django database sometimes has image as just links while other as pure static. We fix it here
  if (img_link.slice(0, 8) === "LoR_Data") {
    return `http://localhost:8000/static/${img_link}`;
  } else {
    return img_link;
  }
};
const destroy_NULL = (obj: game_card) => {
  // dJango REST returns null property as string NULL. So We clear it here
  for (const property in obj) {
    if (obj[property] === "NULL") {
      obj[property] = null;
    }
  }
  return obj;
};
const color_assign = (str: string | null) => {
  switch (str) {
    case "Objet d'art":
      return "gold";
    case "Paperback":
      return "green";
    case "Hardcover":
      return "blue";
    case "Limited":
      return "purple";
    case "EGO":
      return "red";
    default:
      return "green";
  }
};
const One_Card = (data2: game_card) => {
  // Generate the Card Element
  const data = destroy_NULL(data2);
  return (
    <div className="text-yellow-100">
      <Card
        sx={{
          maxWidth: 600,
          minWidth: 600,
          maxHeight: 300,
          minHeight: 300,
          borderRadius: "10%",
        }}
        style={{
          backgroundColor: "black",
          border: `5px solid ${color_assign(data.Rarity)}`,
          margin: "6px",
        }}
      >
        <CardActions>
          <div className="flex flex-col items-center">
            <div className="text-white text-2xl">{data?.Name}</div>
            <div className="flex flex-row items-left text-yellow-100">
              <div className="flex flex-col items-center">
                <div className="flex-1">
                  <CardMedia
                    component="img"
                    height="400"
                    alt={data.Name}
                    image={String(
                      data.ImgPath && imgur_or_static(data.ImgPath)
                    )}
                  />
                </div>
                <div className="flex-1 text-4xl">{data?.Cost}</div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col">
                  <div className="p-2">
                    {data.On_Play_Effect && data.On_Play_Effect}
                  </div>
                  <div className="flex flex-row">
                    <div style={{ width: 50, height: 50 }}>
                      {data.Type1 && Dice_Image(data.Type1)}
                    </div>
                    <div className="p-2" style={{ width: 60, height: 50 }}>
                      {data.Roll1 && data.Roll1}
                    </div>
                    <div style={{ width: 300 }}>{data.Eff1 && data.Eff1}</div>
                  </div>
                  <div className="flex flex-row">
                    <div style={{ width: 50, height: 50 }}>
                      {data.Type2 && Dice_Image(data.Type2)}
                    </div>
                    <div className="p-2" style={{ width: 60, height: 50 }}>
                      {data.Roll2 && data.Roll2}
                    </div>
                    <div>{data.Eff2 && data.Eff2}</div>
                  </div>
                  <div className="flex flex-row">
                    <div style={{ width: 50, height: 50 }}>
                      {data.Type3 && Dice_Image(data.Type3)}
                    </div>
                    <div className="p-2" style={{ width: 60, height: 50 }}>
                      {data.Roll3 && data.Roll3}
                    </div>
                    <div>{data.Eff3 && data.Eff3}</div>
                  </div>
                  <div className="flex flex-row">
                    <div style={{ width: 50, height: 50 }}>
                      {data.Type4 && Dice_Image(data.Type4)}
                    </div>
                    <div className="p-2" style={{ width: 60, height: 50 }}>
                      {data.Roll4 && data.Roll4}
                    </div>
                    <div>{data.Eff4 && data.Eff4}</div>
                  </div>
                  <div className="flex flex-row">
                    <div style={{ width: 50, height: 50 }}>
                      {data.Type5 && Dice_Image(data.Type5)}
                    </div>
                    <div className="p-2" style={{ width: 60, height: 50 }}>
                      {data.Roll5 && data.Roll5}
                    </div>
                    <div>{data.Eff5 && data.Eff5}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardActions>
      </Card>
    </div>
  );
};
const page_number = (pageNumber: number) => {
  const card_per_page = 9;
  let pageNumArr: Array<number> = [];
  for (let i = 1; i <= Math.ceil(pageNumber / card_per_page)-1; i++) {
    pageNumArr.push(i);
  }
  return (
    pageNumArr &&
    pageNumArr.map((object) => (
      <Link href={"/lor/cards/" + String(object)}>
        <button className="bg-white-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {object}
        </button>
      </Link>
    ))
  );
};
const cards = () => {
  const card_per_page: number = 9;
  // Getting data by sending request to backend
  const [dataRaw, setdataRaw] = useState<Array<game_card> | null>();
  const [data, setdata] = useState<Array<game_card> | null>();
  const [pageNumber, setpageNumber] = useState<number>(50);
  const router = useRouter();
  React.useEffect(() => {
    const pid = parseInt(router.query.cards as string, 10);
    axios
      .get("lor/api/card/")
      .then((res) => {
        setdataRaw(res.data as Array<game_card>);
        setpageNumber(res.data.length-1);
      })
      .catch((error) => console.log(error));
  }, []);
  React.useEffect(() => {
    const pid = parseInt(router.query.cards as string, 10);
    setdata(dataRaw?.slice(pid * card_per_page, (pid + 1) * card_per_page));
  }, [router.isReady, router.query.cards,dataRaw]);

  return (
    <div className="bg-lor bg-fixed overflow-auto bg-contain h-full">
      <Navbar />
      <div className="flex flex-col items-center">
        <div className="decoration-clone overflow-auto h-screen w-11/12 px-5 text-yellow-100 content-center bg-black bg-opacity-50 font-lor font-extrabold justify-center">
          <div className="flex flex-row justify-center">
            <div>
              {data &&
                data.map((object, i) => (i % 3 == 0 ? One_Card(object) : null))}
            </div>
            <div>
              {data &&
                data.map((object, i) => (i % 3 == 1 ? One_Card(object) : null))}
            </div>
            <div>
              {data &&
                data.map((object, i) => (i % 3 == 2 ? One_Card(object) : null))}
            </div>
          </div>
        </div>
        <div className="box-border w-2/3">{page_number(pageNumber)}</div>
      </div>
    </div>
  );
};

export default cards;
