import { Typeye } from '../Typeye';

/** Undefined */
export const Und = new Typeye<undefined>(

  function (value) {
    return value === undefined;
  },

  function () {
    return 'undefined';
  },

);
