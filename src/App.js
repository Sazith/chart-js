import LineChartPage from "./components/LineChart/LineChart";
import StackedAreaChart from "./components/StackedAreaChart/StackedAreaChart";
import VerticalLineChart from "./components/VerticalLineChart/VerticalLineChart";

import './App.css'
function App() {
  return (
    <div className="Header">
      <ul>
        <li>
          <LineChartPage />
        </li>
        <li>
          <VerticalLineChart />
        </li>
        <li>
          <StackedAreaChart />
        </li>
      </ul>



    </div>
  );
}

export default App;
