import React, { Component } from "react";
import launchViewer from "../pages/Viewer/ViewerFunctions";

class Model3D extends Component {
  componentDidMount() {
    var documentId =
      "urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6M2R4X2lmY19xYTIzL3JzdF9iYXNpY19zYW1wbGVfcHJvamVjdC5ydnQ";
    launchViewer("viewerDiv", documentId);
  }

  render() {
    return (
      <div
        style={{ position: "absolute", width: "100%", height: "85%" }}
        id="viewerDiv"
      />
    );
  }
}

export default Model3D;
