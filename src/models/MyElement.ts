import { Configuration } from "./Configuration";

export class MyElement {
  id!: number;
  type!: string;
  name!: string;
  is_custom!: boolean;
  configuration!: Configuration;
}
