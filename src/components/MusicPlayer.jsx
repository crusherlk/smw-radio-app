import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faStop,
  faVolumeLow,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";

import "../styles/MusicPlayer.css";

export const MusicPlayer = (props) => {
  const { showLoader, hideLoader } = props;
  const [isPlaying, setIsPlaying] = useState(false);
  const [lowVolume, setLowVolume] = useState(false);

  const streamLink = "https://stream.zeno.fm/s9ebrevcanhvv";
  const audioRef = useRef(null);

  return (
    <section id="music-player">
      <div className="card-img h-60 w-60 md:h-96 md:w-96 rounded-xl flex items-center md:items-end justify-center shadow-2xl">
        {/* actions */}
        <div className="actions w-full md:w-40 h-20 md:rounded-2xl flex justify-center gap-4 mb-2">
          {/* buttons */}
          <button
            className="text-cWhite text-3xl hover:text-cSilver transition ease-out duration-500"
            onClick={() => {
              if (isPlaying === false) {
                showLoader();
                audioRef.current.load();
                audioRef.current.play();

                setIsPlaying(true);
              } else if (isPlaying === true) {
                audioRef.current.pause();

                setIsPlaying(false);
              }
            }}
          >
            {isPlaying ? (
              <FontAwesomeIcon icon={faStop} />
            ) : (
              <FontAwesomeIcon icon={faPlay} />
            )}
          </button>
          <button
            className="text-cWhite text-3xl hover:text-cSilver  transition ease-out duration-500 w-9"
            onClick={() => {
              if (lowVolume === false) {
                audioRef.current.volume = 0.2;

                setLowVolume(true);
              } else if (lowVolume === true) {
                audioRef.current.volume = 1;

                setLowVolume(false);
              }
            }}
          >
            {lowVolume ? (
              <FontAwesomeIcon icon={faVolumeHigh} />
            ) : (
              <FontAwesomeIcon icon={faVolumeLow} />
            )}
          </button>
        </div>
      </div>
      {/* player.. */}
      <audio
        className="hidden"
        ref={audioRef}
        src={streamLink}
        onLoadedData={() => {
          hideLoader();
        }}
      />
      {/*  */}
    </section>
  );
};
