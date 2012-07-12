var patt = RegExp("hello");

switch("hello") {
  case /heldse/:
    debug("wrong");
    break;
  case patt:
    debug("right")
    break;
  default:
    debug("wrong: reached default")
    break;
}
