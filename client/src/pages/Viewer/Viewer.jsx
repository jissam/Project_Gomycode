import React, { Component } from "react";
import launchViewer from "./ViewerFunctions";
import { AppBar } from "@mui/material";
import Login from "../../Components/Login";
import ListBoxModel from "../../Components/ListBoxModel";
import Model3D from "../../Components/Model3D";

const ViewerPage = ({}) => {
  return (
    <>
      <ListBoxModel />
      <Model3D />
    </>
  );
};

export default ViewerPage;
