import React, { useEffect } from "react";
import { HeroComponent } from "./HeroComponent";

export function CameraRender() {
  useEffect(() => {
    var player = document.getElementById("recording-see");
    var handleSuccess = function (stream) {
      player.srcObject = stream;
    };

    var handlePermissionsError = function (error) {
      console.log(error);
    };

    navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then(handleSuccess)
      .catch(handlePermissionsError);

    navigator.permissions.query({ name: "camera" }).then(function (result) {
      if (result.state == "granted") {
      } else if (result.state == "prompt") {
      } else if (result.state == "denied") {
      }
      result.onchange = function () {};
    });
  }, []);
  return (
    <>
      <HeroComponent />
    </>
  );
}
