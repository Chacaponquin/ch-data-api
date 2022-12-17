import { schemas } from "chaca";
import { OptionSchema } from "../interfaces/fields.interface";
import { ARGUMENT_TYPE } from "../interfaces/fieldsTypes.enum";

export const LoremOptions: OptionSchema[] = [
  {
    name: "Paragraphs",
    exampleValue: schemas.lorem.paragraphs().getValue(),
    getValue: schemas.lorem.paragraphs().getValue,
    arguments: [
      {
        argument: "paragraphsCount",
        inputType: ARGUMENT_TYPE.NUMBER,
        description: { en: "", es: "" },
      },
      {
        argument: "separator",
        inputType: ARGUMENT_TYPE.TEXT,
        description: { en: "", es: "" },
      },
      {
        argument: "maxSentences",
        inputType: ARGUMENT_TYPE.NUMBER,
        description: { en: "", es: "" },
      },
      {
        argument: "minSentences",
        inputType: ARGUMENT_TYPE.NUMBER,
        description: { en: "", es: "" },
      },
    ],
    description: { en: "", es: "" },
  },
  {
    name: "Sentences",
    exampleValue: schemas.lorem.sentences().getValue(),
    getValue: schemas.lorem.sentences().getValue,
    arguments: [
      {
        argument: "sentencesCount",
        inputType: ARGUMENT_TYPE.NUMBER,
        description: { en: "", es: "" },
      },
      {
        argument: "separator",
        inputType: ARGUMENT_TYPE.TEXT,
        description: { en: "", es: "" },
      },
      {
        argument: "wordsMin",
        inputType: ARGUMENT_TYPE.NUMBER,
        description: { en: "", es: "" },
      },
      {
        argument: "wordsMax",
        inputType: ARGUMENT_TYPE.NUMBER,
        description: { en: "", es: "" },
      },
    ],
    description: { en: "", es: "" },
  },
  {
    name: "Slug",
    exampleValue: schemas.lorem.slug().getValue(),
    getValue: schemas.lorem.slug().getValue,
    arguments: [
      {
        argument: "wordCount",
        inputType: ARGUMENT_TYPE.NUMBER,
        description: { en: "", es: "" },
      },
    ],
    description: { en: "", es: "" },
  },
  {
    name: "Text",
    exampleValue: schemas.lorem.text().getValue(),
    getValue: schemas.lorem.text().getValue,
    arguments: [
      {
        argument: "character_max",
        description: { en: "", es: "" },
        inputType: ARGUMENT_TYPE.NUMBER,
      },
      {
        argument: "character_min",
        description: { en: "", es: "" },
        inputType: ARGUMENT_TYPE.NUMBER,
      },
    ],
    description: { en: "", es: "" },
  },
  {
    name: "Words",
    exampleValue: schemas.lorem.words().getValue(),
    getValue: schemas.lorem.words().getValue,
    arguments: [
      {
        argument: "count",
        inputType: ARGUMENT_TYPE.NUMBER,
        description: { en: "", es: "" },
      },
    ],
    description: { en: "", es: "" },
  },
];
