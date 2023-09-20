import React from "react";
import { Header } from "../../../../../models/settings/Header";

interface PanelContentHeaderProps {
  headers: Header[];
  setSelectedHeader: (element: Header) => void;
  selectedHeader: Header | null;
}

const PanelContentHeader: React.FC<PanelContentHeaderProps> = ({
  headers,
  setSelectedHeader,
  selectedHeader,
}) => {

  return (
    <div className="content-header">
      {headers.map((header, index) => (
        <div
          className={
            selectedHeader && selectedHeader.title === header.title
              ? "header-item-active"
              : "header-item"
          }
          key={index}
          onClick={() => setSelectedHeader(header)}
        >
          {header.title}
        </div>
      ))}
    </div>
  );
};

export default PanelContentHeader;
