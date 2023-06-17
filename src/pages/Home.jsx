import { useFullPageLoader } from "../hooks/useFullPageLoader";
import { MusicPlayer } from "../components/MusicPlayer";

import "../styles/Home.css";

export const Home = () => {
  const [loader, showLoader, hideLoader] = useFullPageLoader();

  return (
    <section
      id="home"
      className="mt-40 my-20 lg:my-0 lg:min-h-screen flex justify-center items-center"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-40">
        <MusicPlayer showLoader={showLoader} hideLoader={hideLoader} />
        <div className="lg:w-[600px] flex flex-col items-center gap-10">
          <div className="listen-img w-60 h-60 lg:w-80 lg:h-80 bg-cDarkGray rounded-full shadow-md"></div>
          <h1 className="text-2xl lg:text-5xl text-center font-bold">
            Listen to <br />
            Sri Lanka&apos;s Biggest hits <br />
            24/7.
          </h1>
        </div>
      </div>
      {/* loader */}
      {loader}
    </section>
  );
};
