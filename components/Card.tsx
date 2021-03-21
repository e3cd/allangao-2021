import {
  elementResolver,
  seperator,
  cardTitle,
} from "./../utils/elementsResolver";

interface Props {
  cardContent: CardAttributes;
}

interface CardAttributes {
  attributes: object;
  html: string;
}

type CardContentAttributes = {
  card_list_items: Array<object>;
  seperator: boolean;
  title: string;
};

export default function Card({ cardContent }: Props, i: number) {
  //@ts-ignore
  const { attributes }: CardContentAttributes = cardContent;

  // console.log(attributes);

  return (
    <div
      className="w-full lg:w-3/4 mb-4 bg-paragraph transition duration-500 ease-in-out transform shadow-2xl lg:px-12 bg-white dark:bg-darkGrey group hover:-translate-y-2 rounded-lg glass-bg-light dark:glass-bg-dark"
      key={`card-${i}`}
    >
      <div className="px-5 py-20 mx-auto text-left ">
        {cardTitle(attributes)}
        {seperator(attributes)}
        {attributes.card_list_items
          ? attributes.card_list_items.map((item: any, i: number) => {
              return elementResolver(item, i);
            })
          : null}
      </div>
    </div>
  );
}
