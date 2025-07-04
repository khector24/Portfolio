import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}
// This component listens for changes in the URL path and scrolls to the top of the page whenever the path changes.
// It uses the `useLocation` hook from `react-router-dom` to get the current pathname and the `useEffect` hook to trigger the scroll action.
// The `window.scrollTo`
