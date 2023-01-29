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

  // find which candidate has the max points (OK to choose first one if a tie)
  let max = 0;
  let maxKey = "";
  let maxKeyDescription = "";
  for (let key in candidates) {
    if (candidates[key] > max) {
      max = candidates[key];
      maxKey = key;
      maxKeyDescription = resultDescriptions[key].description;
    }
  }

  return [maxKey, maxKeyDescription];
};

export default ResultSetter;
