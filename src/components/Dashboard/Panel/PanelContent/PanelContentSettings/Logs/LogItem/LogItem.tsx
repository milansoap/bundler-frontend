import React from "react";

interface LogItemProps {
  timestamp: string;
  version: number;
}

const LogItem: React.FC<LogItemProps> = ({ version, timestamp }) => {
  return (
    <>
      <div className="log-item">
        <div className="item-version">{version}</div>
        <div className="item-timestamp">{timestamp}</div>
      </div>
    </>
  );
};

export default LogItem;
