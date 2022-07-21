import { Typeye } from '../Typeye';

/** Literal */
export function Lit<T extends string | number>(literal: T): Typeye<T> {
  return new Typeye(

    function (value) {
      return value === literal;
    },
  
    function () {
      return typeof literal === 'string' ? `"${literal}"` : literal.toString();
    },
  
  );
}
