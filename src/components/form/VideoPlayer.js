import React from "react";

function VideoPlayer({ srcBlob, audio, videoUrl, recStarted }) {
  if (videoUrl !== "" && !recStarted) {
    return <video src={videoUrl} width={520} height={480} autoPlay controls />;
  }

  if (!srcBlob) {
    return null;
  }

  if (audio) {
    return <audio src={URL.createObjectURL(srcBlob)} controls />;
  }

  return (
    <video
      src={URL.createObjectURL(srcBlob)}
      width={520}
      height={480}
      autoPlay
      controls
    />
  );
}

export default VideoPlayer;
