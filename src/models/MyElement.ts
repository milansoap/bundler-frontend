import { Configuration } from "./Configuration";

export class MyElement {
  id!: number;
  type!: string;
  dom_id!: string;
  name!: string;
  is_custom!: boolean;
  configuration!: Configuration;
  page_id!: number;
  unique_element_id!: string;
}
