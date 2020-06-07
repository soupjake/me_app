import React from "react";
import { Theme } from "@material-ui/core/styles";
import { Line } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";
import { useTheme } from "@material-ui/styles";
import Event from "../../models/event";
import { chartFont, tooltipStyle, createGradient } from "../../helpers/chart-helper";
import { darkBackground2, lightBackground2 } from "../../styles/styles-base";

interface LineChartProps {
  experience: Event[];
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
          lineTension: 0.0,
          pointHoverBorderWidth: 4,
          hoverBorderColor: color
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
          id: "x-axis-0",
          type: "time",
          distribution: "series",
          time: {
            displayFormats: {
              day: "D MMM",
              month: "MMM 'YY"
            },
            unit:
              dateTab === DateRange.OneWeek || dateTab === DateRange.OneMonth || dateTab === DateRange.SixMonth
                ? "day"
                : "month"
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
        },
        {
          id: "x-axis-1",
          type: "time",
          distribution: fiveOrMax ? "linear" : "series",
          gridLines: {
            display: false
          },
          ticks: {
            display: false
          }
        }
      ],
      yAxes: [
        {
          id: "y-axis-0",
          scaleLabel: {
            ...chartFont(theme),
            display: !smAndDown,
            labelString: "GBX"
          },
          gridLines: {
            color: theme.palette.divider,
            zeroLineColor: theme.palette.divider,
            display: true
          },
          ticks: {
            ...chartFont(theme),
            display: true,
            autoSkip: true
          }
        },
        {
          id: "y-axis-1",
          gridLines: {
            display: false
          },
          ticks: {
            max: Math.max(...volumes.map(volume => volume.y as number)) * 3,
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
