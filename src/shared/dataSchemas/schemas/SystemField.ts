import { faker } from "@faker-js/faker";
import { TypeOptionSchema } from "../../interfaces/fields.interface";

export const SystemField = (): TypeOptionSchema[] => {
  return [
    {
      exampleValue: faker.system.commonFileExt(),
      getValue: () => faker.system.commonFileExt(),
      name: "File Extension",
    },
    {
      exampleValue: faker.system.fileName(),
      getValue: () => faker.system.fileName(),
      name: "File Name",
    },
    {
      exampleValue: faker.system.commonFileType(),
      getValue: () => faker.system.commonFileType(),
      name: "File Type",
    },
    {
      exampleValue: faker.system.fileType(),
      getValue: () => faker.system.fileType(),
      name: "File Type",
    },
    {
      exampleValue: faker.system.directoryPath(),
      getValue: () => faker.system.directoryPath(),
      name: "Directory Path",
    },
    {
      exampleValue: faker.system.filePath(),
      getValue: () => faker.system.filePath(),
      name: "File Path",
    },
    {
      exampleValue: faker.system.semver(),
      getValue: () => faker.system.semver(),
      name: "Sem Server",
    },
  ];
};
