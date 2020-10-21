import "styled-components";
import { DefaultTheme as IDefaultTheme } from "c4u-web-components";

declare module "styled-components" {
  export interface DefaultTheme extends IDefaultTheme {}
}
