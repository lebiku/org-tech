import { ITaxonomyItem } from "./SPItems";
import * as pnp from "sp-pnp-js";

import "whatwg-fetch";
// what a comment
export default class TaxonomyClient {

  public static get(termId: string, options?: any): Promise<ITaxonomyItem> {

    return new Promise<ITaxonomyItem>((resolve: any) => {
      resolve(this._getTerm(termId));
    });
  }

  private static _getTerm(termId: string): Promise<ITaxonomyItem> {

    return new Promise<ITaxonomyItem>((resolve: any, reject: any) => {

      this._loadTermstore(function () {
        let context = SP.ClientContext.get_current();
        let taxonomySession = SP.Taxonomy.TaxonomySession.getTaxonomySession(context);
        let termStore = taxonomySession.getDefaultSiteCollectionTermStore();
        let term = termStore.getTerm(new SP.Guid(termId));

        context.load(term);

        context.executeQueryAsync(function () {
          let item: ITaxonomyItem = {
            Id: term.get_id().toString(),
            Title: _spPageContextInfo.currentLanguage !== 1036 ? term.get_localCustomProperties()["TitelDe"] : term.get_localCustomProperties()["TitelFr"],
            Content: _spPageContextInfo.currentLanguage !== 1036 ? term.get_localCustomProperties()["InhaltDe"] : term.get_localCustomProperties()["InhaltFr"]
          };

          // item.Id = term.get_id().toString();
          // item.Title = _spPageContextInfo.currentLanguage !== 1036 ? term.get_localCustomProperties()["TitelDe"] : term.get_localCustomProperties()["TitelFr"];
          // item.Content = _spPageContextInfo.currentLanguage !== 1036 ? term.get_localCustomProperties()["InhaltDe"] : term.get_localCustomProperties()["InhaltFr"];

          resolve(item);

        }, reject);
      });
    });
  };

  private static _loadTermstore(callback: any): void {
    SP.SOD.executeFunc("sp.js", "SP.ClientContext", function () { });

    SP.SOD.executeOrDelayUntilScriptLoaded(function () {

      SP.SOD.registerSod("sp.taxonomy.js", "/_layouts/15/sp.taxonomy.js");
      SP.SOD.executeFunc("sp.taxonomy.js", "sp.taxonomy", function () { });

      SP.SOD.executeOrDelayUntilScriptLoaded(function () {
        callback();
      }, "sp.taxonomy.js");
    }, "SP.js");
  }
}
