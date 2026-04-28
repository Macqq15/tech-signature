import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

// V6 has only 2 OTOs ($197 Diagnostic + $497 Wiring). OTO3 deprecated.
// Any traffic hitting /agency-oto3 (old funnel links, bookmarks) redirects to thank-you.
export default function AgencyOTO3() {
  useEffect(() => {
    // Optional: log redirect for analytics
  }, []);
  return <Navigate to="/agency-thank-you" replace />;
}
