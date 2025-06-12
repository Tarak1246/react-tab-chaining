const sidebarMenu = {
    dashboard: [
      { label: "Overview", path: "overview" },
      { label: "Activity", path: "activity" },
    ],
    reports: [
      {
        label: "Sales",
        path: "sales",
        children: [
          { label: "Monthly", path: "sales/monthly" },
          { label: "Annual", path: "sales/annual" },
        ],
      },
      { label: "Users", path: "users" },
    ],
    settings: [
      {
        label: "Profile",
        path: "profile",
      },
      {
        label: "Preferences",
        path: "preferences",
        children: [
          { label: "Notifications", path: "preferences/notifications" },
          { label: "Language", path: "preferences/language" },
        ],
      },
    ],
  };
  
  export default sidebarMenu;
  