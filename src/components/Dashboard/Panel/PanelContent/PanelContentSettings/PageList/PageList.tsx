import { useEffect, useState, useContext } from "react";
import { useAuth } from "../../../../../../hooks/UseAuth";

import { Page } from "../../../../../../models/Page"; // your page model import
import PageService from "../../../../../../services/PagesService";
import PageListItem from "./PageListItem.tsx/PageListItem";

const PageList: React.FC = () => {
  const { auth } = useAuth();
  const [pages, setPages] = useState<Page[]>([]);

  useEffect(() => {
    if (auth.user && auth.user.id) {
      PageService.getPagesByUserId(auth.user.id).then((pages) => {
        if (pages) {
          console.log("Received pages:", pages);
          setPages(pages);
        }
      });
    }
  }, [auth.user]);

  return (
    <div className="page-list">
      {pages.map((page) => (
        <PageListItem key={page.id} id={page.id} title={page.title} />
      ))}
      <div className="justify-center text-center mt-4 w-100">
        <button className="btn__primary w-50"> ADD NEW PAGE </button>
      </div>
    </div>
  );
};

export default PageList;
