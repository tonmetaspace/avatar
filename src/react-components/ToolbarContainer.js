import React from "react";
import { Toolbar } from "./Toolbar";
import { UploadButton } from "./UploadButton";
import { MoreMenu } from "./MoreMenu";
import { dispatch } from "../dispatch";
import constants from "../constants";

function dispatchResetView() {
  dispatch(constants.resetView);
}

function dispatchExportAvatar() {
  dispatch(constants.exportAvatar);
}

export function ToolbarContainer({ onGLBUploaded, randomizeConfig }) {
  return (
    <Toolbar>
      <div className="toolbarContent">
        <span className="appName">TON CON Avatar Maker</span>
        <MoreMenu
          items={
            <>
              <UploadButton onGLBUploaded={onGLBUploaded} />
              <a href="https://github.com/DAO-TON-CON/avatar" target="_blank">
                GitHub
              </a>
            </>
          }
        ></MoreMenu>
        <button onClick={randomizeConfig}>Randomize avatar</button>
        <button onClick={dispatchResetView}>Reset camera view</button>
        <button onClick={dispatchExportAvatar} className="primary">
          Export avatar
        </button>
      </div>
      <div className="toolbarNotice">
        <span>The 3D models used in this app are ©2020-2022 by individual <a href="https://toncon.space" target="_blank" noreferrer>mozilla.org</a> contributors.
          Content available under a <a href="https://www.mozilla.org/en-US/foundation/licensing/website-content/" target="_blank" noreferrer>Creative Commons license</a>.</span>
      </div>
    </Toolbar>
  );
}
