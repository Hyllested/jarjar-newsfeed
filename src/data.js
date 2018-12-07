import jarjarImage from "./jarjar.jpg";
import r2Image from "./r2d2.jpg";
import c3poImage from "./3po.jpg";
import b1droidImage from "./b1droid.jpg";

import moment from "moment";
import uuid from "uuid/v4";

const getRandomDate = () => {
  const randomNumber = Math.floor(Math.random() * Math.floor(5));
  return moment(Date.now())
    .subtract(randomNumber, "days")
    .valueOf();
};

export const comment = (
  by,
  text,
  imageSrc,
  created = getRandomDate(),
  reactions = { good: 0, bad: 0 }
) => ({
  text,
  by,
  created,
  imageSrc,
  id: uuid(),
  reactions
});

const commentsHardCoded = [
  comment(
    "C3P0",
    "Sir, it's very possible this asteroid is not stable",
    c3poImage
  ),
  comment(
    "C3P0",
    "I suggest a new strategy, Artoo: let the Wookie win",
    c3poImage
  ),
  comment("B1 battle droid", "Roger, roger.", b1droidImage)
];

export const update = (
  by,
  text,
  imageSrc,
  comments = commentsHardCoded,
  created = getRandomDate(),
  reactions = { good: 0, bad: 0 }
) => {
  return {
    by,
    text,
    created,
    imageSrc,
    comments,
    id: uuid(),
    reactions
  };
};

export default {
  updates: [
    update(
      "Jar Jar",
      "Mesa called Jar Jar Binks, mesa your humble servant!",
      jarjarImage,
      commentsHardCoded
    ),
    update("R2-D2", "Bleep boop, beep beep.", r2Image, commentsHardCoded),
    update(
      "Jar Jar",
      "Yousa should follow me now, okay? My warning yous: Gungans no like outsiders. Do not 'spect a warm welcome.",
      jarjarImage,
      commentsHardCoded
    ),
    update(
      "Jar Jar",
      "The BOOOM! Getin very scared and grabin that Jedi, the pah ... mesa here",
      jarjarImage,
      commentsHardCoded
    ),
    update(
      "Jar Jar",
      'It\'s-A Clear Desa Separatists Made A Pact Wesa Desa Federation Du Trade. Senators, "Dellow Felagates." In Response To This Direct Threat To The Republic, Mesa Propose That The Senate Immediately Provides Emergency Powers To The Supreme Chancellor.',
      jarjarImage,
      commentsHardCoded
    )
  ]
};
