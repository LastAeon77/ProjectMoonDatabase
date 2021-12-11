import type { NextPage } from "next";
import Link from "next/link";
const Home: NextPage = () => {
  return (
    <div className="bg-wings bg-fixed overflow-auto w-screen h-screen bg-center">
      <div className="flex flex-col items-center">
        <div className="text-red text-6xl">Select your source</div>
        <div className="flex flex-row items-center">
          <Link passHref href="/lor">
            <div
              className="transform items-center bg-lorlogo w-1/2 justify-center hover:transition duration-500 hover:scale-125"
              style={{
                height: 360,
                width: 640,
              }}
            />
          </Link>
          <div
            className="transform mr-20 items-center justify-center w-1/2 bg-limbuslogo hover:transition duration-500 hover:scale-125"
            style={{
              height: 487,
              width: 502,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
