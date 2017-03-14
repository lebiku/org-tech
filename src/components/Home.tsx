import * as React from "react";
import "office-ui-fabric-react/dist/css/fabric.min.css";

import KapoCallout from "./Callout";
import { Translations } from "../assets/icons";

export class OrgHome extends React.Component<{}, {}> {
  render() {
    return <div className="kapo-org">
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1268" height="756" viewBox="0 0 1268 756">
        <image id="Ebene_0" data-name="Ebene 0" x="66" y="20" width="1131" height="722" xlinkHref={Translations.getByKey("Images.Organisation")} />
        {/*<KapoCallout name="Chef Technik" x={523} y={20} width={215} height={76} />
        <KapoCallout name="Wissenschaftliche MA" x={331} y={111} width={215} height={45} />*/}
        <KapoCallout name="Mutationskoordination" title="Titel" termId="f29497c1-eafc-4909-9942-8540fd87cd54" x={845} y={293} width={200} height={45} />
        <KapoCallout name="Fachbereich Basisdienste" title="Titel" termId="f29497c1-eafc-4909-9942-8540fd87cd54" x={66} y={488} width={172} height={79} />
        <KapoCallout name="Fachbereich Applikationen" title="Titel" termId="f29497c1-eafc-4909-9942-8540fd87cd54" x={258} y={488} width={172} height={79} />
        <KapoCallout name="Fachbereich Motorfahrzeugbetr." title="Titel" termId="f29497c1-eafc-4909-9942-8540fd87cd54" x={450} y={488} width={172} height={79} />
        <KapoCallout name="Fachbereich Telekommunikation" title="Titel" termId="f29497c1-eafc-4909-9942-8540fd87cd54" x={642} y={488} width={172} height={79} />
        <KapoCallout name="Fachbereich Gebäudetechnik" title="Titel" termId="f29497c1-eafc-4909-9942-8540fd87cd54" x={834} y={488} width={172} height={79} />
        <KapoCallout name="Fachbereich Logistik" title="Titel" termId="f29497c1-eafc-4909-9942-8540fd87cd54" x={1026} y={488} width={172} height={79} />
        <KapoCallout name="Applikationen" title="Titel" termId="f29497c1-eafc-4909-9942-8540fd87cd54" x={258} y={583} width={170} height={45} />
        <KapoCallout name="REZ" title="Titel" termId="f29497c1-eafc-4909-9942-8540fd87cd54" x={258} y={641} width={170} height={45} />
        <KapoCallout name="Multimediadienste" title="Titel" termId="f29497c1-eafc-4909-9942-8540fd87cd54" x={258} y={698} width={170} height={45} />

        {/*<a href="https://de.wikipedia.org/wiki/George_Washington">
          <rect x="258" y="640" fill="#fff" opacity="0.5" className="kapo-image-map" strokeWidth="3" stroke="rgb(255,0,0)" width="170" height="45" />
        </a>    */}
      </svg>
    </div>;
  }
}
