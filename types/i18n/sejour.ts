export type SejourMessages = {
  hero: {
    title: string;
    highlight: string;
  };
  livingArea: {
    title: string;
    items: {
      salonPiano: string;
      diningWoodStove: string;
      veranda: string;
    };
    note: string;
  };
  kitchen: {
    title: string;
    items: {
      induction: string;
      oven: string;
      dishwasher: string;
      fridgeFreezer: string;
      racletteFondue: string;
      kettle: string;
      coffeeMaker: string;
      blender: string;
    };
  };
  closing: {
    main: string;
    smallLounge: {
      title: string;
      text: string;
    };
  };
};
