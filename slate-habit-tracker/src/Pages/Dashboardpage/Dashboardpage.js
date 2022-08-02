import {
  Header,
  Sidebar,
  DashboardCompleteTaskBoard,
  DashboardHabitCard,
  DashboardTilesQuotes,
  DashboardTilesStackedBarLine,
} from "../../Components/IndexAllComponents";

function Dashboardpage() {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="ml-72 mr-24 mt-20 mb-4 flex items-center justify-around">
        <DashboardTilesStackedBarLine />
        <DashboardTilesQuotes />
        {/* <DashboardCompletedTasksBoard /> */}
      </div>
      <DashboardHabitCard />
    </div>
  );
}

export default Dashboardpage;
