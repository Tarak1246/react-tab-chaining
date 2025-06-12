import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import MainLayout from "./components/MainLayout";
import sidebarMenu from "./sidebarConfig.js";

const DashboardOverview = lazy(() => import("./pages/Dashboard/Overview.jsx"));
const DashboardActivity = lazy(() => import("./pages/Dashboard/Activity.jsx"));
const ReportsSales = lazy(() => import("./pages/Reports/Sales.jsx"));
const ReportsUsers = lazy(() => import("./pages/Reports/Users.jsx"));
const SettingsProfile = lazy(() => import("./pages/Settings/Profile.jsx"));
const SettingsPreferences = lazy(() => import("./pages/Settings/Preferences.jsx"));
const HelpDocs = lazy(() => import("./pages/Help/Docs.jsx"));
const HelpContact = lazy(() => import("./pages/Help/Contact.jsx"));
const ReportsSalesMonthly = lazy(() => import("./pages/Reports/SalesMonthly.jsx"));
const ReportsSalesAnnual = lazy(() => import("./pages/Reports/SalesAnnual.jsx"));

const App = () =>{
  return (
    <BrowserRouter>
      <Header />
      <main className="pt-20 px-4 text-gray-800">
        <Suspense fallback={<div className="text-center mt-10 text-blue-500">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard/overview" />} />
            <Route path="/dashboard" element={<MainLayout base="dashboard" subTabs={["overview", "activity"]} />}>
              <Route path="overview" element={<DashboardOverview />} />
              <Route path="activity" element={<DashboardActivity />} />
            </Route>

            <Route path="/reports" element={<MainLayout base="reports" subTabs={sidebarMenu.reports} />}>
              <Route path="sales" element={<ReportsSales />} />
              <Route path="sales/monthly" element={<ReportsSalesMonthly />} />
              <Route path="sales/annual" element={<ReportsSalesAnnual />} />
              <Route path="users" element={<ReportsUsers />} />
            </Route>


            <Route path="/settings" element={<MainLayout base="settings" subTabs={["profile", "preferences"]} />}>
              <Route path="profile" element={<SettingsProfile />} />
              <Route path="preferences" element={<SettingsPreferences />} />
            </Route>

            <Route path="/help" element={<MainLayout base="help" subTabs={["docs", "contact"]} />}>
              <Route path="docs" element={<HelpDocs />} />
              <Route path="contact" element={<HelpContact />} />
            </Route>

            <Route path="*" element={<div className="text-red-500">404 - Page Not Found</div>} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
}

export default App;