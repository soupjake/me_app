import { fade, Theme } from "@material-ui/core/styles";

export function createGradient(canvas: HTMLCanvasElement, color: string, height: number): CanvasGradient | undefined {
  const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");

  if (!ctx) {
    return;
  }

  const gradient: CanvasGradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, fade(color, 0.5));
  gradient.addColorStop(1, fade(color, 0));

  return gradient;
}

export function registerVerticalLinePlugin(color: string) {
  return {
    afterDraw: function (chart: any, easing: any) {
      if (chart.data.datasets[0] && chart.data.datasets[0].data.length === 0) {
        const ctx = chart.chart.ctx;
        const width = chart.chart.width;
        const height = chart.chart.height;
        chart.clear();

        ctx.save();
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "16px normal 'Gordita sans-serif'";
        ctx.fillText("Data cannot be shown at this time interval", width / 2, height / 2);
        ctx.restore();
      }

      if (chart.tooltip._active && chart.tooltip._active.length) {
        const activePoint = chart.controller.tooltip._active[0];
        const ctx = chart.ctx;
        const x = activePoint.tooltipPosition().x;
        const topY = chart.scales["y-axis-0"].top;
        const bottomY = chart.scales["y-axis-0"].bottom;

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x, topY);
        ctx.lineTo(x, bottomY);
        ctx.setLineDash([6]);
        ctx.lineWidth = 2;
        ctx.strokeStyle = fade(color, 0.5);
        ctx.stroke();
        ctx.restore();
      }
    }
  };
}

export function chartFont(theme: Theme) {
  return {
    fontColor: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
    fontSize: 16,
    fontStyle: "bold"
  };
}

export function tooltipStyle(theme: Theme, displayColors: boolean) {
  return {
    displayColors: displayColors,
    backgroundColor: theme.palette.background.paper,
    titleFontSize: 0,
    titleMarginBottom: 2,
    bodyFontSize: 16,
    bodyFontColor: theme.palette.text.primary,
    bodyFontStyle: "bold",
    intersect: false
  };
}
