import { Variant } from "@material-ui/core/styles/createTypography";
import moment from "moment";

export function openUrl(url: string): void {
  if (!url) {
    return;
  }

  window.open(url, "_blank");
}

export function toSentenceCase(input: string): string {
  const sentence: string = input.replace(/([A-Z])/g, " $1");
  return `${sentence.charAt(0).toUpperCase()}${sentence.slice(1)}`;
}

export function getHeaderSize(smAndDown: boolean): Variant {
  return smAndDown ? "h3" : "h2";
}

export function getSubheaderSize(smAndDown: boolean): Variant {
  return smAndDown ? "h5" : "h4";
}

export function formatDate(date: string | number | undefined): string {
  return moment(date).format("MMM ' YY");
}
