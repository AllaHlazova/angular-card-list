export interface IChartConfig {
  height: number;
  width: number;
  size: number;
  innerSize: number;
  data: any;
  text: string;
  useHTML: boolean;
  name: string | number;
}

export function generateColor(): string {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return 'rgb(' + red + ',' + green + ',' + blue + ')';
}
