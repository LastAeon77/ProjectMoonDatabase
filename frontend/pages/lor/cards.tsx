import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { One_Card, game_card } from "../../components/card";
import { useFormik } from "formik";
import { Button, List } from "@mui/material";
import { office_id, rank_id, game_card_light } from "../../components/types";
const Cards = () => {
  const [ranks, setranks] = useState<Array<rank_id>>();
  const [offices, setoffices] = useState<Array<office_id>>();
  const [cards, setcards] = useState<Array<game_card_light>>();
  useEffect(() => {
    axios
      .get("/lor/api/rank")
      .then((res) => setranks(res.data as Array<rank_id>))
      .catch((errors) => console.log(errors));
    axios
      .get("/lor/api/office")
      .then((res) => setoffices(res.data as Array<office_id>))
      .catch((errors) => console.log(errors));
    axios
      .get("/lor/api/cardlight")
      .then((res) => setcards(res.data as Array<game_card_light>))
      .catch((errors) => console.log(errors));
  }, []);
  return (
    <div className="bg-lor bg-fixed overflow-auto bg-contain h-full">
      <div className="flex flex-col items-center"></div>
    </div>
  );
};

export default Cards;
