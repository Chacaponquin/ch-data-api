import { FieldNode } from "./FieldNode";
import { MixedFieldNode } from "./MixedFieldNode";
import { ResultFieldNode } from "./ResultFieldNode";

export class DocumentTree {
  private fields: Array<FieldNode> = [];

  constructor() {}

  public insertNode(n: FieldNode): void {
    this.fields.push(n);
  }

  public getDataObject(): { [key: string]: unknown | unknown[] } {
    let returnObject = {};

    this.fields.forEach((f) => {
      returnObject = { ...returnObject, [f.name]: f.getValue() };
    });

    return returnObject;
  }

  public getValueByLocation(location: string[]): unknown {
    let found: unknown = undefined;
    for (let i = 0; i < this.fields.length && found === undefined; i++) {
      if (location[0] === this.fields[i].id)
        found = this.fields[i].getValueByLocation(location.slice(1));
    }
    return found;
  }
}
