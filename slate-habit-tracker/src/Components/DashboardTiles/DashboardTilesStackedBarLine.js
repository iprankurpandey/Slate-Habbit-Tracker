import { useEffect } from "../../Utils/SystemUtils";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useLabelContext } from "../../Context/IndexAllContext";
import { getLabelFn } from "../../Services/LabelServices";

function DashboardTilesStackedBarLine() {
  const { label, labelFn } = useLabelContext();
  const labelTrue = label.map((l) => l === true);
  const labelFalse = label.map((l) => l === false);

  useEffect(() => {
    getLabelFn(labelFn);
  }, []);

  return (
    <div>
      <div class="flex justify-center  h-96 w-96">
        <div class=" flex flex-col md:flex-row md:max-w-xl rounded-lg bg-gray-200 shadow-lg">
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>

            <Line
              datasetIdKey="id"
              data={{
                labels: ["Aug"],
                datasets: [
                  {
                    id: 1,
                    label: `Task Pending False`,
                    data: [labelTrue && labelTrue.length],
                  },
                  {
                    id: 2,
                    label: `Task Completed True`,
                    data: [
                      labelFalse && labelFalse.length,
                      1,
                      2,
                      3,
                      4,
                      5,
                      6,
                      7,
                      8,
                      9,
                      10,
                    ],
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardTilesStackedBarLine;
