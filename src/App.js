import LineChartPage from "./components/LineChart/LineChart";
import StackedAreaChart from "./components/StackedAreaChart/StackedAreaChart";
import VerticalLineChart from "./components/VerticalLineChart/VerticalLineChart";

import './App.css'
import AreaChartFilledByValue from "./components/AreaChartFilledByValue/AreaChartFilledByValue";
import Bartchart from "./components/BarChart/Bartchart";
import ScatterChartPage from "./components/ScatterChart/ScatterChart";
import PieChartPage from "./components/PieChart/PieChart";
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
        <li>
          <AreaChartFilledByValue/>
        </li>
        <li>
          <Bartchart/>
        </li>
        <li>
          <ScatterChartPage/>
        </li>
        <li>
          <PieChartPage/>
        </li>
      </ul>



    </div>
  );
}

export default App;
