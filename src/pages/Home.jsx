import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faStop,
  faVolumeLow,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/Home.css";
import { useFullPageLoader } from "../hooks/useFullPageLoader";

export const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [lowVolume, setLowVolume] = useState(false);

  const streamLink = "https://stream.zeno.fm/s9ebrevcanhvv";
  const audioRef = useRef(null);

  const [loader, showLoader, hideLoader] = useFullPageLoader();

  return (
    <section id="home" className="">
      <div className="flex items-center justify-around">
        {/* card */}
        <div className="">
          <div className="card-img h-96 w-96 rounded-xl flex items-end justify-center">
            {/* actions */}
            <div className="actions w-40 h-20 rounded-2xl flex justify-center gap-4 mb-2">
              {/* buttons */}
              <button
                className="text-white text-3xl hover:text-gray-300 transition ease-out duration-500"
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
                className="text-white text-3xl hover:text-gray-300 transition ease-out duration-500 w-9"
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
        </div>
        <div>
          <h1 className="text-6xl w-[600px]">
            Listen to Sri Lanka&apos;s Biggest hits 24/7.
          </h1>
        </div>
      </div>
      {/* loader */}
      {loader}
    </section>
  );
};
