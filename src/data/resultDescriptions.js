let luckyNumbers = [
  Math.floor(Math.random() * 5),
  Math.floor(Math.random() * 54),
  Math.floor(Math.random() * 15),
  Math.floor(Math.random() * 100),
];

export const resultDescriptions = {
  flapjacks: {
    description:
      "FLAPJACKS! You bring a smile to people's faces and warmth to their hearts. No matter the time of day, you're always a delight. Keep on flappin'!",
    adjectiveKeys: [5, 11, 13, 14, 18, 19, 21, 24],
  },
  egg: {
    description:
      "EGG! So smooth, so rich. In a delicate situation, you're the perfect companion. At any cocktail party, you sparkle like a yolky sun. Are you Fabergé?",
    adjectiveKeys: [0, 1, 15, 16, 25, 26, 30, 37],
  },
  waffle: {
    description:
      "WAFFLE! You take what life throws at you and make it delicious. Atop your crisp, sturdy structure, you bear maple syrup waves and berry piles with a smile.",
    adjectiveKeys: [5, 8, 11, 13, 21, 27, 28, 34],
  },
  tea: {
    description:
      "TEA! Your soothing presence warms from within, and you handle difficulties deftly. You have black tea's universal appeal, chamomile's calm, and green's positive energy. Mmm!",
    adjectiveKeys: [4, 5, 6, 20, 23, 24, 26, 30],
  },
  fries: {
    description:
      "FRIES! Backbone of any road trip, savior of the late-night scallywag, you take life as it comes. No ketchup? No problem! Not feeling so hot? Well, you're still good. CHOMP!",
    adjectiveKeys: [5, 12, 13, 14, 18, 19, 28, 33],
  },
  cactus: {
    description:
      "CACTUS! Alone in the desert or amidst potted plants, you abide by your own code, unruffled by outside influence. Stick to it!",
    adjectiveKeys: [9, 18, 22, 25, 27, 28, 29, 33],
  },
  cloud: {
    description:
      "CLOUD! Floating high above in ever-shifting forms, yours is an enchantment of ages. Puffy cumulus or misty cirrus, inimitable wonder is guaranteed.",
    adjectiveKeys: [1, 3, 7, 8, 10, 16, 31, 33],
  },
  moon: {
    description:
      "MOON! Poet's muse, witch's aide, this soothing soul brings peace to hearts and minds to higher planes. Shine on, you silver dream!",
    adjectiveKeys: [0, 2, 6, 7, 10, 15, 30, 31],
  },
  sun: {
    description:
      "SUN! With fire and warmth, you make the cosmos glow and the flowers grow. You bring your formidable force to all aspects of life. Flame on!",
    adjectiveKeys: [12, 22, 28, 29, 32, 34, 35, 36],
  },
  fortuneCookie: {
    description: `FORTUNE COOKIE! You've got a way with words that's not easily unravelled. Is life a game? You'll never tell! Your lucky numbers are ${luckyNumbers[0]}, ${luckyNumbers[1]}, ${luckyNumbers[2]}, & ${luckyNumbers[3]}.`,
    adjectiveKeys: [1, 2, 3, 4, 7, 8, 9, 11],
  },
  onigiri: {
    description:
      "ONIGIRI! Perfect for lunch or a snack during commute, you're a balanced character who gets it done. Pickled plum, anyone?",
    adjectiveKeys: [0, 17, 18, 26, 33, 34, 36, 37],
  },
  ramen: {
    description:
      "RAMEN! With a heart as big as yours, there's plenty to go around for everyone! Your soothing broth is the perfect end to a long day. Sluuurp!",
    adjectiveKeys: [6, 10, 12, 20, 21, 23, 27, 35],
  },
  takoSan: {
    description:
      "OCTO-WIENER! You're the star of any bento, the jester of the lunch. Shall we swim you through the air? PWOING-oing your tentacles? You're down for anything. Whee!",
    adjectiveKeys: [9, 11, 12, 13, 14, 16, 17, 19],
  },
  tamagoyaki: {
    description:
      "TAMAGOYAKI! You sweet wrapped egg, could you be any easier to enjoy? Your softness and sweetness are legend, and you brighten up any situation. Yum!",
    adjectiveKeys: [5, 13, 15, 16, 21, 24, 31, 37],
  },
  avocado: {
    description:
      "AVOCADO! Watching over all protectively, you reassure and calm the world. That creamy pastel green is a sign that everything's gonna be alright--and delish. Scooop!",
    adjectiveKeys: [5, 6, 12, 20, 23, 24, 25, 27],
  },
  mushroom: {
    description:
      "MUSHROOM! Oh, my. Aren't you an uncanny package. Neither vegetable nor mineral, your mystical air only adds to your deliciousness. Hop on top of my pizza anytime!",
    adjectiveKeys: [1, 3, 4, 7, 8, 10, 17, 31],
  },
  pineapple: {
    description:
      "PINEAPPLE! That spiny, tough exterior helps you face the world head-on. You're willing to take chances others won't, like combining tart sweetness with pizza. Keep rollin'!",
    adjectiveKeys: [22, 27, 28, 29, 34, 35, 36, 37],
  },
  flan: {
    description:
      "FLAN! A fancier twist on plain ol' pudding, your creamy custard and caramel sauce are a pleasant yet elevated combo. You're a credit to those who know you.",
    adjectiveKeys: [4, 6, 15, 23, 26, 30, 31, 32],
  },
  macaron: {
    description:
      "MACARON! So many colors, and all so lovely! In a kaleidoscope of flavors, you draw attention with pastel allure. You may speak softly, but your heart beats loud!",
    adjectiveKeys: [2, 10, 15, 24, 25, 26, 30, 32],
  },
  cupcake: {
    description:
      "CUPCAKE! Fluffy cake, rich icing, and a rainbow of sprinkles...could anyone be happier you're around? If only there were more of you, but people this sweet are rare.",
    adjectiveKeys: [8, 9, 11, 13, 14, 16, 23, 24],
  },
};
