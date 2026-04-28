import React from "react";
import { Navigate } from "react-router-dom";

// V6 simplified (2026-04-26): single mid-tier OTO ($497 Wiring) lives at /agency-oto1.
// Diagnostic $197 was rejected as redundant. AgencyOTO2 deprecated, redirects to thank-you.
export default function AgencyOTO2() {
  return <Navigate to="/agency-thank-you" replace />;
}
