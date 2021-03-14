export const getCardsContent = () => {
  const cardsContent = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      const cardsContent = values[index] as any;

      return {
        ...cardsContent,
      };
    });
    return data;
  })(require.context("../content/cards", true, /\.md$/));

  return cardsContent;
};
