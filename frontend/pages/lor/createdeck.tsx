import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
type card_id = {
  id: number;
  Name: string;
  ImgPath: string;
};
type office_id = {
  id: number;
  Name: string;
};
type page_id = {
  Name: string;
  InGameId: number;
};
type effect_id = {
  id: number;
  Name: string;
  Description: string;
};
const createdeck = () => {
  // Check if user has logged in
  const router = useRouter();
  const [cards, setcards] = useState<Array<card_id> | null>(null);
  const [offices, setoffices] = useState<Array<office_id> | null>();
  const [pages, setpages] = useState<Array<page_id> | null>();
  const [effects, seteffects] = useState<Array<effect_id> | null>();
  useEffect(() => {
      console.log(localStorage.getItem("access_token"))
    axios
      .get("api/checkauth", {
        headers: {
          Authorization: `JWT ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
          accept: "application/json",
        },
      })
      .catch((errors) => {
        router.push(`/login?prevUrl=lor/createdeck`);
      });
  }, []);
  useEffect(() => {
    axios
      .get("lor/api/cardid")
      .then((res) => setcards(res.data as Array<card_id>))
      .catch((error) => console.log(error));
    axios
      .get("lor/api/pageid")
      .then((res) => setpages(res.data as Array<page_id>))
      .catch((error) => console.log(error));
    axios
      .get("lor/api/officeid")
      .then((res) => setoffices(res.data as Array<office_id>))
      .catch((error) => console.log(error));
    axios
      .get("lor/api/effects")
      .then((res) => seteffects(res.data as Array<effect_id>))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="bg-lor bg-fixed overflow-auto bg-contain h-screen">
      <div className="flex flex-row items-center justify-center"> </div>
    </div>
  );
};

export default createdeck;
