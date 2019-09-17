export interface IChartConfig {
  height: number;
  width: number;
  size: number;
  innerSize: number;
  data: any;
  text: string;
  useHTML: boolean;
  name: string | number;
  // data:{
  //   name: string;
  // };
}

export function generateColor(): string {
  const rand_c1 = Math.floor(Math.random() * 256);
  const rand_c2 = Math.floor(Math.random() * 256);
  const rand_c3 = Math.floor(Math.random() * 256);
  return 'rgb(' + rand_c1 + ',' + rand_c2 + ',' + rand_c3 + ')';
}
