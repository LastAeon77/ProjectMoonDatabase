import React from "react";
import Navbar from "../components/navbar";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Link from "next/link";

const lor = () => {
  return (
    <div className="bg-lor bg-fixed font-square">
      {/* <Navbar /> */}
      <div className="flex flex-col items-center">
        <div className="decoration-clone h-screen w-3/4 px-5 text-yellow-300 content-center bg-black bg-opacity-50 font-lor font-extrabold">
          <div className="flex flex-row" style={{ minHeight: 100 }}>
            <div className="flex-1 grid place-items-center px-4">
              <Card
                sx={{ minWidth: 275, borderRadius: "10%" }}
                style={{ backgroundColor: "black" }}
              >
                <Link href="/lor/allcards" passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      alt="Finn"
                      image="https://aeonmoon2.herokuapp.com/static/LoR_Data/Card/Canard/Basic/Basic_Thrust.png"
                    />
                    <CardContent>
                      <Typography variant="h5" component="div" color="yellow">
                        Cards
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Click here</Button>
                    </CardActions>
                  </CardActionArea>
                </Link>
              </Card>
            </div>
            <div className="flex-1 grid place-items-center px-4">
              <Card
                sx={{ minWidth: 275, borderRadius: "10%" }}
                style={{ backgroundColor: "black" }}
              >
                <Link href="/lor/abno" passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="100"
                      alt="Finn"
                      image="https://aeonmoon2.herokuapp.com/static/LoR_Data/Abnormality%20Pages/Floor%20of%20History/Happy%20Teddy%20Bear/Happy%20Memories.png"
                    />
                    <CardContent>
                      <Typography variant="h5" component="div" color="yellow">
                        Abnormalities
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Click here</Button>
                    </CardActions>
                  </CardActionArea>
                </Link>
              </Card>
            </div>
            <div className="flex-1 grid place-items-center px-4">
              <Card
                sx={{ minWidth: 300, borderRadius: "10%", minHeight: 430 }}
                style={{ backgroundColor: "black" }}
              >
                <Link href="/lor/deck" passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="100"
                      alt="Finn"
                      image="https://aeonmoon2.herokuapp.com/static/LoR_Data/Page.png"
                      sx={{ width: "55%", marginLeft: "23%" }}
                    />
                    <CardContent>
                      <Typography variant="h5" component="div" color="yellow">
                        Decks
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Click here</Button>
                    </CardActions>
                  </CardActionArea>
                </Link>
              </Card>
            </div>            
          </div>
        </div>
      </div>
    </div>
  );
};

export default lor;
