// Import react router dom
import { Route, Routes } from "react-router-dom";

import HomeView from "../views/HomeView";

/**
 * Renders the index of routes.
 * 
 * @returns The JSX element representing the routes index.
 */
function RoutesIndex() {
    return (
        // Renders the routes container
        <Routes>
            {/* Renders the home route */}
            <Route path="/" element={<HomeView />} />
        </Routes>
    );
}

export default RoutesIndex;