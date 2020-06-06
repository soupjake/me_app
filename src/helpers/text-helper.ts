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

export function getHeaderSize(smAndDown: boolean) {
  return smAndDown ? "h4" : "h2";
}

export function getSubheaderSize(smAndDown: boolean) {
  return smAndDown ? "h5" : "h4";
}
