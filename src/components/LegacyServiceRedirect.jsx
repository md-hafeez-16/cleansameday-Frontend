import { Navigate, useParams } from "react-router-dom";
import { redirectMap } from "../utils/redirectMap";

/**
 * Redirects old /servicedetails/:id URLs to current slug-based routes.
 * Needed because the SPA has no matching route for two-segment legacy paths
 * (refresh would otherwise show a blank page between header and footer).
 */
export default function LegacyServiceRedirect() {
  const { id } = useParams();
  const legacyPath = `/servicedetails/${id}`;
  const target = redirectMap[legacyPath];

  if (target) {
    return <Navigate to={target} replace />;
  }

  return <Navigate to="/service" replace />;
}
