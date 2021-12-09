import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";
type card_count = {
  card_count: number;
  card_id: string;
};
type name_and_pic = {
  Name: string;
  ImgPath: string;
};
type deck = {
  id: number;
  card_count: card_count[];
  cards: name_and_pic[];
  effect: Array<string>;
  Recc_Floor: string | null;
  Recc_Page: string | null;
  Recc_Rank: string | null;
  creator: string;
  name: string;
  description: string;
  show: boolean;
};
const displaydecklist = (
  deck: deck,
  id: number,
  activenum: number,
  setactivenum: any
) => {
  const click_button = () => {
    console.log(activenum);
    if (activenum === id) {
      setactivenum(-1);
    } else {
      setactivenum(id);
    }
  };
  return (
    <div key={id} className="border-t-4" style={{ borderTopColor: "#7A8288" }}>
      <ListItemButton onClick={click_button}>
        <div className="flex flex-col w-full">
          <div className="flex flex-row w-full">
            <div className="w-1/12">{deck.id}</div>
            <div className="w-4/12">{deck.name}</div>
            <div className="w-4/12">{deck.creator}</div>
            <div className="w-2/12">{deck.Recc_Rank}</div>
            <Link passHref href="/">
              <div className="w-1/12 text-blue-600">Click me!</div>
            </Link>
          </div>
          <Collapse in={id === activenum} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <div className="flex flex-row">
                {deck.card_count.map((object, i) => (
                  <div key={i} className="mr-4 text-yellow-500">
                    {object.card_id} x{object.card_count}
                  </div>
                ))}
              </div>
            </List>
          </Collapse>
        </div>
      </ListItemButton>
    </div>
  );
};
const Deck = () => {
  const [decks, setdecks] = useState<Array<deck>>();
  const [activenum, setactivenum] = useState<number>(-1);
  useEffect(() => {
    axios
      .get("lor/api/deck")
      .then((res) => setdecks(res.data as Array<deck>))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="bg-lor bg-fixed overflow-auto bg-contain h-screen">
      <div className="flex flex-row items-center justify-center text-white">
        <List
          sx={{ width: "100%", maxWidth: 1800, bgcolor: "#272B30" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <div className="flex flex-row w-full justify-center items-center w-full bg-gray-400">
            <div className="w-1/12 ml-3"> ID</div>
            <div className="w-4/12">Name</div>
            <div className="w-4/12">Creator</div>
            <div className="w-2/12">Rank</div>
            <div className="w-1/12">Link</div>
          </div>
          {decks?.map((object, i) =>
            displaydecklist(object, i, activenum, setactivenum)
          )}
        </List>
      </div>
    </div>
  );
};

export default Deck;
