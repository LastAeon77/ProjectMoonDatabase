import Link from "next/link";

export const imgur_or_static = (img_link: string | undefined) => {
  // Django database sometimes has image as just links while other as pure static. We fix it here
  if (img_link) {
    if (img_link.slice(0, 8) === "LoR_Data") {
      return `http://localhost:8000/static/${img_link}`.replaceAll(" ", "%20");
    } else {
      return img_link;
    }
  } else return "";
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
    pageNumArr.map((object, key) => (
      <Link href={link + String(object)} passHref key={key}>
        <button className="bg-white-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {object}
        </button>
      </Link>
    ))
  );
};
