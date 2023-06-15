import { useState } from "react";
import { PageLoader } from "../components/pageLoader";

export const useFullPageLoader = () => {
  const [loading, setLoading] = useState(false);
  return [
    loading ? <PageLoader /> : null,
    () => setLoading(true),
    () => setLoading(false),
  ];
};
