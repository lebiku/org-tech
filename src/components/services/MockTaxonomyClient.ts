import { ITaxonomyItem } from "./SPItems";

export default class MockTaxonomyClient {

  private static _item: ITaxonomyItem =
    {
      Title: "Fake Titel",
      Id: "1",
      Content: "<ul><li>Hallo</li><li>Welt</li></ul>",
    };

  public static get(termSetId: string, options?: any): Promise<ITaxonomyItem> {
    return new Promise<ITaxonomyItem>((resolve) => {
      resolve(MockTaxonomyClient._item);
    });
  }
}
