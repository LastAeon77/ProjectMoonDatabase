import Link from "next/link";
import { abno_card } from "./abnormality";
import { game_card } from "./card";
export const render_cards = (
  data: Array<abno_card | game_card>,
  floor_name: string,
  hidden: boolean
) => {
  return (
    <div className={hidden ? "hidden" : undefined}>
      <div>{floor_name}</div>
      <div className="flex flex-row justify-center">
        <div>
          {data &&
            data.map((object, i) => (i % 3 == 0 ? one_abno(object) : null))}
        </div>
        <div>
          {data &&
            data.map((object, i) => (i % 3 == 1 ? one_abno(object) : null))}
        </div>
        <div>
          {data &&
            data.map((object, i) => (i % 3 == 2 ? one_abno(object) : null))}
        </div>
      </div>
    </div>
  );
};

export const imgur_or_static = (img_link: string) => {
  // Django database sometimes has image as just links while other as pure static. We fix it here
  if (img_link.slice(0, 8) === "LoR_Data") {
    return `http://localhost:8000/static/${img_link}`.replaceAll(" ", "%20");
  } else {
    return img_link;
  }
};
export const page_number = (
  pageNumber: number,
  card_per_page: number,
  link: string
) => {
  let pageNumArr: Array<number> = [];
  for (let i = 1; i <= Math.ceil(pageNumber / card_per_page) - 1; i++) {
    pageNumArr.push(i);
  }
  return (
    pageNumArr &&
    pageNumArr.map((object) => (
      <Link href={link + String(object)}>
        <button className="bg-white-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {object}
        </button>
      </Link>
    ))
  );
};
