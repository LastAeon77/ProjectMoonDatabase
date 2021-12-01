import { Box } from "@mui/system";
import { imgur_or_static } from "./misc";
import Image from 'next/image'

export type abno_card = {
  id: number;
  office: string;
  name: string;
  effects: string;
  description: string;
  ImgPath: string;
  emotion_type: string;
  emotion_level: number;
};
const choose_color = (emotiontype: string) => {
  switch (emotiontype) {
    case "BD":
      return "red";
    case "AW":
      return "green";
  }
};
export const one_abno = (data: abno_card) => {
  return (
      <Box
        key={data.id}
        sx={{
          width: 600,
          height: 210,
          backgroundColor: "black",
          borderRadius: "1em",
          "&:hover": {
            backgroundColor: "black",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
        style={{
          backgroundColor: "black",
          margin: "6px",
          boxShadow: `1px -20px 60px -20px ${choose_color(
            data?.emotion_type
          )} inset, 0px 0px 5px -1px ${choose_color(data?.emotion_type)} inset`,
        }}
      >
        <div className="flex flex-col items-center">
          <div className="text-white text-2xl">{data?.name}</div>
          <div className="flex flex-row items-left text-white">
            <div className="flex flex-col items-center justify-center">
              <div className="w-48">
                <Image
                  src={data.ImgPath && imgur_or_static(data.ImgPath)}
                  alt="Image"
                  width={800}
                />
              </div>
              <div>{data?.emotion_level}</div>
            </div>
            <div>{data?.effects}</div>
          </div>
        </div>
      </Box>
  );
};
