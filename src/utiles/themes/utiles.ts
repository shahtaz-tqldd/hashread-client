export function applyTheme(theme: Record<string, string>): void {
  const root = document.documentElement;
  Object.keys(theme).forEach((cssVar) => {
    root.style.setProperty(cssVar, theme[cssVar]);
  });
}

export function createTheme({
  tan,
  cot,
  sec,
  sin,
  cos,
  cosec
}: {
  tan: string;
  cot: string;
  sec: string;
  sin: string;
  cos: string;
  cosec: string;
}): Record<string, string> {
  return {
    "--theme-tan": tan,
    "--theme-cot": cot,
    "--theme-sec": sec,
    "--theme-sin": sin,
    "--theme-cos": cos,
    "--theme-cosec": cosec,
  };
}
