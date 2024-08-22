import axios from "axios";
import * as THREE from "three";

var viewer;
const Autodesk = window.Autodesk;

function launchViewer(div, urn) {
  var options = {
    env: "AutodeskProduction",
    accessToken: localStorage.getItem("accessToken"),
  };

  Autodesk.Viewing.Initializer(options, function () {
    var htmlDiv = document.getElementById(div);
    viewer = new Autodesk.Viewing.GuiViewer3D(htmlDiv);
    var startedCode = viewer.start();
    if (startedCode > 0) {
      console.error("Failed to create a Viewer: WebGL not supported.");
      return;
    }

    console.log("Initialization complete, loading a model next...");
  });
  var documentId = urn;
  Autodesk.Viewing.Document.load(
    documentId,
    onDocumentLoadSuccess,
    onDocumentLoadFailure
  );

  function onDocumentLoadSuccess(viewerDocument) {
    var defaultModel = viewerDocument.getRoot().getDefaultGeometry();
    viewer.loadDocumentNode(viewerDocument, defaultModel);
  }

  function onDocumentLoadFailure() {
    console.error("Failed fetching Forge manifest");
  }
}

export default launchViewer;
