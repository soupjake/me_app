import React from "react";
import { Theme } from "@material-ui/core/styles";
import { Line } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";
import { useTheme } from "@material-ui/styles";
import Event from "../../models/event";
import { chartFont, tooltipStyle, createGradient } from "../../helpers/chart-helper";

interface LineChartProps {
  experience: Event[];
  values: number[];
  smAndDown: boolean;
}

export default function LineChart(props: LineChartProps) {
  const theme: Theme = useTheme();
  const { experience, smAndDown } = props;
  const color: string = theme.palette.primary.main;
  const height: number = smAndDown ? 300 : 400;

  function formatData(canvas: HTMLCanvasElement): ChartData {
    return {
      datasets: [
        {
          data: experience.map((event: Event) => ({ x: event.date, y: event.value })),
          pointRadius: 0,
          fill: true,
          backgroundColor: createGradient(canvas, color, height),
          borderColor: color,
          borderJoinStyle: "round",
          lineTension: 0.2,
          pointHoverBorderWidth: 4,
          hoverBorderColor: color,
          pointBackgroundColor: function (context) {
            let index = context.dataIndex;
            let value = context.dataset.data[index];
            return value < 0
              ? "red" // draw negative values in red
              : index % 2
              ? "blue" // else, alternate values in blue and green
              : "green";
          }
        }
      ]
    };
  }

  const chartOptions: ChartOptions = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [
        {
          type: "time",
          distribution: "series",
          time: {
            displayFormats: {
              day: "D MMM",
              month: "MMM 'YY"
            },
            unit: "month"
          },
          gridLines: {
            display: false
          },
          ticks: {
            ...chartFont(theme),
            display: true,
            maxRotation: 0,
            autoSkip: true,
            autoSkipPadding: theme.spacing(4)
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            display: false
          }
        }
      ]
    },
    tooltips: tooltipStyle(theme)
  };

  return (
    <Line
      height={smAndDown ? 300 : 400}
      data={canvas => formatData(canvas as HTMLCanvasElement)}
      options={chartOptions}
    />
  );
}
