import {
  africa,
  africaDesktop,
  architecturals,
  architecturalsDesktop,
  behindWaves,
  behindWavesDesktop,
  calm,
  calmDesktop,
  cityskapes,
  cityskapesDesktop,
  corners,
  cornersDesktop,
  darkForest,
  darkForestDesktop,
  dreams,
  dreamsDesktop,
  milkyway,
  milkywayDesktop,
  mountains,
  mountainsDesktop,
  running,
  runningDesktop,
  sea,
  seaDesktop,
  somwarpet,
  somwarpetDesktop,
  tour,
  tourDesktop,
  trip,
  tripDesktop,
  voyage,
  voyageDesktop,
} from "@/assets/stories";

interface Story {
  date: string;
  title: string;
  author: string;
  path: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

const Items: Story[] = [
  {
    date: "april 16 2020",
    title: "the mountains",
    author: "by John Appleseed",
    path: {
      mobile: mountains,
      tablet: mountainsDesktop,
      desktop: mountainsDesktop,
    },
  },

  {
    date: "april 14 2020",
    title: "sunset cityscapes",
    author: "by benjamin crue",
    path: {
      mobile: cityskapes,
      tablet: cityskapesDesktop,
      desktop: cityskapesDesktop,
    },
  },
  {
    date: "april 11 2020",
    title: "18 days voyage",
    author: "by John Appleseed",
    path: {
      mobile: voyage,
      tablet: voyageDesktop,
      desktop: voyage,
    },
  },
  {
    date: "april 9 2020",
    title: "architecturals",
    author: "by John Appleseed",
    path: {
      mobile: architecturals,
      tablet: architecturalsDesktop,
      desktop: architecturalsDesktop,
    },
  },

  {
    date: "april 7 2020",
    title: "world tour 2019",
    author: "by John Appleseed",
    path: {
      mobile: tour,
      tablet: tourDesktop,
      desktop: tourDesktop,
    },
  },
  {
    date: "april 3 2020",
    title: "unforeseen corners",
    author: "by John Appleseed",
    path: {
      mobile: corners,
      tablet: cornersDesktop,
      desktop: cornersDesktop,
    },
  },
  {
    date: "march 29 2020",
    title: "King of africa: part II",
    author: "by John Appleseed",
    path: {
      mobile: africa,
      tablet: africaDesktop,
      desktop: africaDesktop,
    },
  },
  {
    date: "april 16 2020",
    title: "the trip to nowhere",
    author: "by John Appleseed",
    path: {
      mobile: trip,
      tablet: tripDesktop,
      desktop: tripDesktop,
    },
  },
  {
    date: "april 16 2020",
    title: "rage of the sea",
    author: "by John Appleseed",
    path: {
      mobile: sea,
      tablet: seaDesktop,
      desktop: seaDesktop,
    },
  },
  {
    date: "april 16 2020",
    title: "running free",
    author: "by John Appleseed",
    path: {
      mobile: running,
      tablet: runningDesktop,
      desktop: runningDesktop,
    },
  },
  {
    date: "april 16 2020",
    title: "behind the waves",
    author: "by John Appleseed",
    path: {
      mobile: behindWaves,
      tablet: behindWavesDesktop,
      desktop: behindWavesDesktop,
    },
  },
  {
    date: "april 16 2020",
    title: "calm water",
    author: "by John Appleseed",
    path: {
      mobile: calm,
      tablet: calmDesktop,
      desktop: calmDesktop,
    },
  },
  {
    date: "april 16 2020",
    title: "the milky way",
    author: "by John Appleseed",
    path: {
      mobile: milkyway,
      tablet: milkywayDesktop,
      desktop: milkywayDesktop,
    },
  },
  {
    date: "april 16 2020",
    title: "night at the forest",
    author: "by John Appleseed",
    path: {
      mobile: darkForest,
      tablet: darkForestDesktop,
      desktop: darkForestDesktop,
    },
  },
  {
    date: "april 16 2020",
    title: "somwarpet's beauty",
    author: "by John Appleseed",
    path: {
      mobile: somwarpet,
      tablet: somwarpetDesktop,
      desktop: somwarpetDesktop,
    },
  },
  {
    date: "april 16 2020",
    title: "land of dreams",
    author: "by John Appleseed",
    path: {
      mobile: dreams,
      tablet: dreamsDesktop,
      desktop: dreamsDesktop,
    },
  },
];

export default Items;
