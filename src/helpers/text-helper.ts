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
