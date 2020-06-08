import React from "react";
import { Theme } from "@material-ui/core/styles";
import { Pie } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";
import { useTheme } from "@material-ui/styles";
import Skill from "../../models/skill";
import { chartFont, tooltipStyle } from "../../helpers/chart-helper";
import { pink, purple, deepPurple } from "@material-ui/core/colors";

interface PieChartProps {
  skills: Skill[];
  handleOnHover: (name: string) => void;
  smAndDown: boolean;
}

export default function PieChart(props: PieChartProps) {
  const theme: Theme = useTheme();
  const { skills, handleOnHover, smAndDown } = props;
  const labels: string[] = [];
  const values: number[] = [];
  const colors: string[] = [pink[500], purple[500], deepPurple[500]];
  skills.forEach((skill: Skill) => {
    labels.push(skill.name);
    values.push(skill.value);
  });

  function formatData(): ChartData {
    return {
      labels: labels,
      datasets: [
        {
          data: values,
          backgroundColor: labels.map((_, index) => colors[index]),
          borderColor: theme.palette.background.default,
          borderWidth: theme.spacing(0.5)
        }
      ]
    };
  }

  const chartOptions: ChartOptions = {
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: "right",
      align: "center",
      labels: {
        ...chartFont(theme),
        usePointStyle: true
      }
    },
    rotation: 0.5 * Math.PI,
    tooltips: {
      ...tooltipStyle(theme, true),
      callbacks: {
        label: function (tooltipItem: Chart.ChartTooltipItem, data: ChartData) {
          if (tooltipItem.index !== undefined) {
            return `${labels[tooltipItem.index]}: ${skills[tooltipItem.index].level}`;
          }
          return "";
        }
      }
    },
    onHover: function (this: Chart, event: MouseEvent, activeElements: Array<any>) {
      if (activeElements.length) {
        const hoverIndex: number = activeElements[0]._index;
        handleOnHover(skills[hoverIndex].name);
      } else {
        handleOnHover("");
      }
    }
  };

  return <Pie height={smAndDown ? 300 : 400} data={formatData()} options={chartOptions} />;
}
