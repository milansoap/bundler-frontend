import React from "react";
import { Header } from "../../../../../models/settings/Header";

interface PanelContentHeaderProps {
  headers: Header[];
}

const PanelContentHeader: React.FC<PanelContentHeaderProps> = ({ headers }) => {
  return (
    <div className="content-header">
      {headers.map((header, index) => (
        <div className="header-item" key={index}>
          {header.title}
        </div>
      ))}
    </div>
  );
};

export default PanelContentHeader;
