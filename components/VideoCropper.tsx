"use client";
import React, { useEffect, useState } from "react";
import VideoPlayerWithCropper from "./VideoPlayerWithCropper";

const VideoCropper = () => {
  const [showCropper, setShowCropper] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [showPreviewSession, setShowPreviewSession] = useState(true);
  const [recordingData, setRecordingData] = useState<any[]>([]);

  useEffect(() => {
    if (!showCropper) {
      setShowPreview(false);
    }
  }, [showCropper]);

  return (
    <div className={styles.container}>
      <div>
        <div>
          <VideoPlayerWithCropper
            showCropper={showCropper}
            showPreview={showPreview}
            setRecordingData={setRecordingData}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoCropper;
