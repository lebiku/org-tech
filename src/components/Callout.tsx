import * as React from "react";
import { Callout } from "office-ui-fabric-react";

export interface ICalloutState {
  isCalloutVisible?: boolean;
  taxItem: ITaxonomyItem;
}

import { ITaxonomyItem } from "./services/SPItems";
import MockTaxonomyClient from "./services/MockTaxonomyClient";
import TaxonomyClient from "./services/TaxonomyClient";

export interface CalloutProps { name: string; title: string; termId: string; x: number; y: number; width: number; height: number; }

export default class KapoCallout extends React.Component<CalloutProps, ICalloutState> {
  private _menuButtonElement: HTMLElement;

  public constructor(props: CalloutProps) {
    super(props);

    this._onDismiss = this._onDismiss.bind(this);

    this.state = {
      isCalloutVisible: false,
      taxItem: null
    };
  }

  public componentDidMount() {
    this._renderListAsync();
  }

  public render() {
    let { isCalloutVisible } = this.state;
    let { taxItem } = this.state;

    let title = this.props.title;
    let x = this.props.x;
    let y = this.props.y;
    let width = this.props.width;
    let height = this.props.height;

    return (<a ref={ (menuButton) => this._menuButtonElement = menuButton } onClick={ this._onDismiss }>
          <rect x={x} y={y} fill="#fff" opacity="0" className="kapo-image-map" width={width} height={height} />
                  { isCalloutVisible ? (
          <div>
            <Callout
              className="ms-CalloutExample-callout"
              gapSpace={ 0 }
              targetElement={ this._menuButtonElement }
              onDismiss={ (ev: any) => { this._onDismiss(ev); } }
              setInitialFocus={ true }
            >
              <div className="org-callout">
                <p className="org-callout-title">
                  {taxItem.Title}
                </p>
                <p className="org-callout-content" dangerouslySetInnerHTML={{__html: taxItem.Content}}></p>
              </div>
            </Callout>
          </div>
        ) : (null) }
        </a>);
  }

  private _renderListAsync(): void {
    // Local environment
    if (typeof _spBodyOnLoadFunctionNames === "undefined") {
      // no SharePoint
      this._getMockListData().then((response) => {
        this._renderList(response);
      });
    } else {
      // SharePoint
      let termId = this.props.termId;

      TaxonomyClient.get(termId).then((response: any) => {
        this._renderList(response);
      });
    }
  }

  private _getMockListData(): Promise<ITaxonomyItem> {
    return MockTaxonomyClient.get("00000000-0000-0000-0000-000000000000")
      .then((data: ITaxonomyItem) => {
        return data;
      }) as Promise<ITaxonomyItem>;
  }

  private _renderList(item: ITaxonomyItem): void {
    this.setState({
      isCalloutVisible: this.state.isCalloutVisible,
      taxItem: item
    });
  }

  private _onDismiss(ev: any) {
    this.setState({
      isCalloutVisible: !this.state.isCalloutVisible,
      taxItem: this.state.taxItem
    });
  }
}
