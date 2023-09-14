import React from "react";
import { Header } from "../../../../../models/settings/Header";

interface PanelContentHeaderProps {
  headers: Header[];
  setSelectedHeader: (element: Header) => void | null;
}

const PanelContentHeader: React.FC<PanelContentHeaderProps> = ({
  headers,
  setSelectedHeader,
}) => {
  return (
    <div className="content-header">
      {headers.map((header, index) => (
        <div
          className="header-item"
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
