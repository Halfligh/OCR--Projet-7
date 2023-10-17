import { useEffect } from "react";

const usePageInfo = (pageInfo) => {
  useEffect(() => {
    document.title = pageInfo.title;

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute("content", pageInfo.description);
    }
  }, [pageInfo]);
};

export default usePageInfo;
