export type HomeMessages = {
  hero: {
    title: string;
    intro1: string;
    intro2: string;
  };
  groundFloor: {
    title: string;
    items: {
      kitchen: string;
      dining: string;
      tvRoom: string;
      bedroom: string;
      wc: string;
      terrace: string;
    };
  };
  firstFloor: {
    title: string;
    items: {
      bedrooms: string;
      mezzanine: string;
    };
  };
  wellness: {
    title: string;
    text: string;
  };
  baby: {
    title: string;
    items: {
      chairs: string;
      bed: string;
      bath: string;
      kitchen: string;
    };
  };
  accessibility: {
    text: string;
  };
};
