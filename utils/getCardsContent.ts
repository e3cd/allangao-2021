export const getCardsContent = () => {
  const cardsContent = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    // @ts-ignore

    const data = keys.map((key, index) => {
      const cardsContent = values[index] as any;

      return {
        ...cardsContent,
      };
    });
    return data;
    //@ts-ignore
  })(require.context("../content/cards", true, /\.md$/));

  return cardsContent;
};
