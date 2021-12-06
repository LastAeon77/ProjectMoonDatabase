import React from "react";
import { useState } from "react";
import axios from "axios";
import Navbar from "../../../components/navbar";
import Link from "next/link";
import { useRouter } from "next/router";
import { One_Card, game_card } from "../../../components/card";
// axios.defaults.baseURL = "http://localhost:8000/";
// axios.defaults.baseURL = "http://aeonmoon.herokuapp.com/"

const page_number = (pageNumber: number,contentperpage:number) => {
  const card_per_page = 9;
  let pageNumArr: Array<number> = [];
  for (let i = 1; i <= Math.ceil(pageNumber / card_per_page) - 1; i++) {
    pageNumArr.push(i);
  }
  return (
    pageNumArr &&
    pageNumArr.map((object,key) => (
      <Link href={"/lor/cards/" + String(object)} key={key} passHref>
        <button className="bg-white-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {object}
        </button>
      </Link>
    ))
  );
};
const Cards = () => {
  const card_per_page: number = 9;
  // Getting data by sending request to backend
  const [dataRaw, setdataRaw] = useState<Array<game_card> | null>();
  const [data, setdata] = useState<Array<game_card> | null>();
  const [pageNumber, setpageNumber] = useState<number>(50);
  const router = useRouter();
  React.useEffect(() => {
    axios
      .get("lor/api/card")
      .then((res) => {
        setdataRaw(res.data as Array<game_card>);
        setpageNumber(res.data.length - 1);
      })
      .catch((error) => console.log(error));
  }, []);
  React.useEffect(() => {
    const pid = parseInt(router.query.cards as string, 10);
    setdata(dataRaw?.slice(pid * card_per_page, (pid + 1) * card_per_page));
  }, [router.isReady, router.query.cards, dataRaw]);

  return (
    <div className="bg-lor bg-fixed overflow-auto bg-contain h-full">
      {/* <Navbar /> */}
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
        <div className="box-border w-2/3">{page_number(pageNumber,9)}</div>
      </div>
    </div>
  );
};

export default Cards;
