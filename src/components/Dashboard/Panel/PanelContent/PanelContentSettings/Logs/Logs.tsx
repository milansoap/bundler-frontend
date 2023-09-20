import React, { useEffect, useState } from "react";

import { useCurrentPage } from "../../../../../../context/CurrentPageProvider";
import { Log } from "../../../../../../models/Log";
import LogService from "../../../../../../services/LogService";
import LogItem from "./LogItem/LogItem";

const Logs = () => {
  const [logs, setLogs] = useState<Log[]>([]);
  const { pageId, setPageId } = useCurrentPage();

  useEffect(() => {
    if (pageId != null) {
      LogService.getLogsByPage(pageId).then((logs) => {
        if (logs) {
          console.log("LOGS", logs);
          setLogs(logs);
        }
      });
    }
  }, [pageId]);

  return (
    <div>
      <div className="log-list">
        {logs.map((log) => (
          <LogItem
            key={log.id}
            version={log.version_id}
            timestamp={log.timestamp}
          />
        ))}
      </div>
    </div>
  );
};

export default Logs;
