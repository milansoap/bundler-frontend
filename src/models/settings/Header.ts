import { Configuration } from "../Configuration";

export interface HeaderSettings extends Partial<Configuration> {}

export interface Header {
  title: string;
  settings: HeaderSettings;
}
