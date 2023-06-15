import { Bars } from "react-loader-spinner";

export const PageLoader = () => {
  return (
    <div className="loading-wrapper fixed w-full h-full top-0 left-0">
      <div className="flex w-full h-full items-center justify-center">
        <Bars
          height="50"
          width="50"
          color="#fcfcff"
          ariaLabel="bars-loading"
          visible={true}
        />
      </div>
    </div>
  );
};
