import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { abno_card } from "../../../components/types";
import { choose_color } from "../../../components/abnormality";
import { Box } from "@mui/system";
import { imgur_or_static } from "../../../components/misc";

const AbnoOne = () => {
  const router = useRouter();
  const [abno, setabno] = useState<abno_card>();
  useEffect(() => {
    const id = router.query.Abno;
    axios
      .get(`lor/api/abno/${id}`)
      .then((res) => setabno(res.data as abno_card))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="bg-lor bg-fixed font-square h-screen">
      <div className="flex flex-col items-center text-white">
        <Box
          key={abno?.id}
          sx={{
            width: 1800,
            height: 850,
            backgroundColor: "black",
            borderRadius: "2rem",
          }}
          style={{
            backgroundColor: "black",
            margin: "6px",
            boxShadow: `1px -20px 60px -20px ${
              abno && choose_color(abno.emotion_type)
            } inset, 0px 0px 5px -1px ${
              abno && choose_color(abno.emotion_type)
            } inset`,
          }}
        >
          <div className="flex flex-col justify-center items-center">
            <div className="text-6xl">{abno?.name}</div>
            <div className="flex flex-row">
              <div className="flex flex-col w-1/2 m-2">
                <img
                  src={imgur_or_static(abno?.ImgPath)}
                  alt="Image"
                  width={800}
                  height={400}
                />
              </div>
              <div className="flex-1 w-1/2">
                <div className="flex flex-col text-4xl items-center">
                  <div>Emotion Level: {abno?.emotion_level}</div>
                  <div className="mt-20">{abno?.description}</div>
                  <br></br>
                  <div
                    style={{
                      color: `${abno && choose_color(abno.emotion_type)}`,
                    }}
                  >
                    {abno?.effects}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default AbnoOne;
