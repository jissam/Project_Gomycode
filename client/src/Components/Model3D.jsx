import React, { useEffect } from "react";
import launchViewer from "../pages/Viewer/ViewerFunctions";
import { useNavigate, useParams } from "react-router-dom";
import ListBoxModel from "./ListBoxModel";

function Model3D() {
  const { modelURN } = useParams(); // Extract modelURN from the URL
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffaaaaaaaaaaa=   ", {
    modelURN,
  });
  const nav = useNavigate();
  useEffect(() => {
    // Replace with the actual logic to use modelURN if needed
    //var documentId = { modelURN };
    //var documentId =
    //  "urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6M2R4X2lmY19xYTIzL3JzdF9iYXNpY19zYW1wbGVfcHJvamVjdC5ydnQ";
    if (!localStorage.getItem("accessToken")) {
      nav("/");
    }
    var documentId = "urn:" + modelURN;
    launchViewer("viewerDiv", documentId);
  }, [modelURN]); // Run this effect whenever modelURN changes

  return (
    <>
      <ListBoxModel></ListBoxModel>
      <div
        style={{ position: "absolute", width: "100%", height: "85%" }}
        id="viewerDiv"
      />
    </>
  );
}

export default Model3D;
