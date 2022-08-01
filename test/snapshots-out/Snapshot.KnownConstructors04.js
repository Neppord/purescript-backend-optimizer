import * as $runtime from "../runtime.js";
import * as Data$dHeytingAlgebra from "../Data.HeytingAlgebra/index.js";
import * as Data$dSemigroup from "../Data.Semigroup/index.js";
import * as Snapshot$dKnownConstructors04$foreign from "./foreign.js";
const f = Snapshot$dKnownConstructors04$foreign.f;
const test3 = x => {
  if (x > 42) { return false; }
  $runtime.fail();
};
const test2 = x => {
  if (x > 42) { return f("Hello, World")("Hello, Universe"); }
  $runtime.fail();
};
const test1 = x => {
  if (x > 42) { return ["Hello, World", "Hello, Universe"]; }
  $runtime.fail();
};
export {f, test1, test2, test3};
export * from "./foreign.js";