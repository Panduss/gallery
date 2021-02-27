import {TabType} from "./tabType.model";

export interface Tab {
  id: string;
  title: string;
  subtitle: string;
  type: TabType;
}
