import { adjectiveList } from "./data/adjectives";
import { resultDescriptions } from "./data/resultDescriptions";

const ResultSetter = ({ adjectives }) => {
  const keys = []; // ex: ['8', '2', '39', '1', '17', '23']
  const candidates = {}; // ex: {egg: 1, waffle: 1, tea: 2, cloud: 2, moon: 1}

  //   add to keys array all adjectiveList keys that have a value in user's selected adjectives
  adjectives.forEach((adj) => {
    Object.keys(adjectiveList).find((key) => {
      if (adjectiveList[key].includes(adj.toLowerCase())) keys.push(key);
      return adjectiveList[key].includes(adj.toLowerCase());
    });
  });

  // put in candidates 1 point per results option that matches a key in keys array
  for (const key in resultDescriptions) {
    resultDescriptions[key].adjectiveKeys.forEach((num) => {
      if (keys.includes(num.toString())) {
        if (key in candidates) {
          candidates[key] += 1;
        } else {
          candidates[key] = 1;
        }
      }
    });
  }

  // find which candidate has the max points
  let max = [0];
  let maxKey = [""];
  let maxKeyDescription = [""];

  for (let key in candidates) {
    if (candidates[key] > max[0]) {
      max = [candidates[key]];
      maxKey = [key];
      maxKeyDescription = [resultDescriptions[key].description];
    } else if (candidates[key] === max[0]) {
      max.push(candidates[key]);
      maxKey.push(key);
      maxKeyDescription.push(resultDescriptions[key].description);
    }
  }

  // if there is a tie, select randomly
  if (max.length > 1) {
    let index = Math.floor(Math.random() * max.length);
    maxKey[0] = maxKey[index];
    maxKeyDescription[0] = maxKeyDescription[index];
  }

  return [maxKey[0], maxKeyDescription[0]];
};

export default ResultSetter;
