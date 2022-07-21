import { Typeye } from '../Typeye';

/** Null */
export const Nil = new Typeye<null>(

  function (value) {
    return value === null;
  },

  function () {
    return 'null';
  },

);
