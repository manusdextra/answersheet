import type {
  LevelTest,
  Reading1,
  Reading2,
  Reading3,
} from "../declarations.d";

export const readingPart1: Reading1 = {
  instructions:
    "Read the text below and decide which answer best fits each gap. There is an example at the beginning.",
  text: `
  Nowadays we are all […] pressure to increase the amount of work we can achieve in the shortest possible time. […] of this we may spend time looking […] short-cuts in our working lives. However, many of these time-saving measures may actually cause more problems than they […].
  Some organisations seem to expect their staff to work more than the usual eight or nine hours a day, without recognising the fact that tiredness causes people to […] silly mistakes. We all tend to […] those who can multi-task because we think they are working hard—but do all the electronic gadgets they use make them more efficient in the long […]? It's possible they actually distract them from the task […] and lead to a loss of concentration. So maybe […] every email or answering every mobile phone call immediately is not the most efficient use of our time.
`,
  questions: [
    {
      id: 0,
      example: true,
      rightanswer: "under",
      wronganswers: ["in", "at", "with"],
    },
    {
      id: 1,
      rightanswer: "As a result",
      wronganswers: ["Therefore", "Owing", "Due"],
    },
    {
      id: 2,
      rightanswer: "for",
      wronganswers: ["through", "out", "in"],
    },
    {
      id: 3,
      rightanswer: "solve",
      wronganswers: ["answer", "explain", "settle"],
    },
    {
      id: 4,
      rightanswer: "make",
      wronganswers: ["get", "do", "have"],
    },
    {
      id: 5,
      rightanswer: "look up to",
      wronganswers: ["get through to", "catch up with", "go out with"],
    },
    {
      id: 6,
      rightanswer: "run",
      wronganswers: ["walk", "race", "hike"],
    },
    {
      id: 7,
      rightanswer: "in hand",
      wronganswers: ["on hand", "by hand", "with hand"],
    },
    {
      id: 8,
      rightanswer: "dealing with",
      wronganswers: ["keeping in", "setting out", "taking on"],
    },
  ],
};

export const readingPart2: Reading2 = {
  instructions:
    "Read the text below and think of the word which best fits each gap. Use only one word in each gap. There is an example at the beginning.",
  text: `
  We think we understand dogs, but we're often wrong about […] they're trying to "say". imagine trying to communicate […] someone who doesn't understand any of your language. Dogs find […] in this situation every day, and […] are many examples of misunderstandings.
    As […] example of this, if a dog pants, we assume it's due to the heat. Of course, that may be true, but it could also indicate stress. […] yawning might suggest tiredness, it could also signify an attempt to calm other dogs who are acting aggressively.
    We think a dog wags its tail because it's happy, but there may be other meanings, depending […] the position of the tail and the type of wag. […] instance, when a dog holds its tail high and stiff, it's giving a warning. A dog does […] if it thinks someone is trying to take its food, and may bite if the signal is ignored.
    Clearly sometimes it's important to understand "dog"!
  `,
  questions: [
    { id: 0, example: true, rightanswer: "for" },
    { id: 1, rightanswer: "with" },
    { id: 2, rightanswer: "themselves" },
    { id: 3, rightanswer: "there" },
    { id: 4, rightanswer: "an" },
    { id: 5, rightanswer: "although" },
    { id: 6, rightanswer: "on" },
    { id: 7, rightanswer: "for" },
    { id: 8, rightanswer: "this" },
  ],
};

export const readingPart3: Reading3 = {
  instructions:
    "Read the text below. Use the word given in capitals at the end of some of the lines to form a word that fits in the gap in the same line. There is an example at the beginning.",
  text: `
  People assume there is a […] between a tourist and a traveller and that "tourist" is a negative term. Is this true?
  In general, it seems a tourist goes to a new place to have a fun, […] time, and to replace the energy used up by working in a […] job. A traveller wanders from place to place driven on by a deep […] about everything new and the desire to explore. A tourist escapes from the […] routine of everyday life seeking relaxation, whereas all a traveller wants is to be on the road. A tourist goes somewhere, is amazed, but then returns with his or her everyday life […] by the experience; a traveller continues to roam around, seeking anything that enhances his or her […] of the world. A tourist goes home but a traveller moves on, perhaps unwilling to stop anywhere permanently.
    But could it be possible that the two are […] the same? After all, they share a pleasure in the world and an […] of the wonders in it.
  `,
  questions: [
    { id: 0, example: true, prompt: "different", rightanswer: "difference" },
    { id: 1, prompt: "enjoy", rightanswer: "enjoyable" },
    { id: 2, prompt: "stress", rightanswer: "stressful" },
    { id: 3, prompt: "curious", rightanswer: "curiosity" },
    { id: 4, prompt: "bore", rightanswer: "boring" },
    { id: 5, prompt: "change", rightanswer: "changed" },
    { id: 6, prompt: "understand", rightanswer: "understanding" },
    { id: 7, prompt: "actual", rightanswer: "actually" },
    { id: 8, prompt: "appreciate", rightanswer: "appreciation" },
  ],
};

export const freestyle: LevelTest = {
  instructions: "For every question, choose the correct answer",
  questions: [
    {
      id: 0,
      question:
        "Ipsum ea impedit rerum commodi voluptas architecto id voluptates. ",
      rightanswer: "Aut minus consequuntur porro dicta quos.",
      wronganswers: [
        "Non accusamus et tenetur repudiandae eos nobis porro si",
        "Libero rerum sunt voluptatem rerum expedita odit.",
        "Maiores sequi sit et nisi sequi consectetur.",
      ],
    },
    {
      id: 1,
      question:
        "Velit qui voluptatem aperiam. Laudantium dolorem voluptatum non nesciunt. ",
      rightanswer: "voluptatum non nesciunt.",
      wronganswers: [
        "Ex quis accusamus eveniet inventore non. ",
        "Vitae non ipsum sunt quos quis amet aut.",
        "Ipsum ea impedit rerum commodi voluptas architecto id voluptates. ",
      ],
    },
    {
      id: 2,
      question:
        "Vitae non ipsum sunt quos quis amet aut. Aspernatur quia id pariatur non eum et unde veritatis. ",
      rightanswer: "Laudantium dolorem ",
      wronganswers: [
        "Voluptas perferendis eos animi maiores qui",
        "Corporis eveniet ut dolor libero eos sed dolores quia. ",
        "Voluptatem quia minus temporibus molestias quo.",
      ],
    },
  ],
};
