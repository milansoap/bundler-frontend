import React, { useContext } from "react";
import { useCurrentPage } from "../../../../../../../context/CurrentPageProvider";

interface PageListItemProps {
  id: number;
  title: string;
}

const PageListItem: React.FC<PageListItemProps> = ({ id, title }) => {
  const { pageId, setPageId } = useCurrentPage();

  const changeCurrentPage = () => {
    setPageId(id);
    console.log(pageId);
  };

  return (
    <div
      className={`page-list-item ${pageId === id ? "active" : ""}`}
      key={id}
    >
      <div className="page-title">{title}</div>
      <div className="page-actions">
        <button className="icon-button">👁️</button>
        <button className="icon-button" onClick={changeCurrentPage}>
          ✏️
        </button>
      </div>
    </div>
  );
};

export default PageListItem;
