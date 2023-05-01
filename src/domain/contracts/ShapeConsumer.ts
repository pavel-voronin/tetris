import { ShapeProvider } from "./ShapeProvider";

export interface ShapeConsumer {
  provider?: ShapeProvider;

  link(provider: ShapeProvider): void;
}
