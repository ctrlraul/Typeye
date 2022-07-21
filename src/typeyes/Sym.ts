import { Typeye } from '../Typeye';

/** Symbol */
export const Sym = new Typeye<symbol>(

  function (value) {
    return typeof value === 'symbol';
  },

  function () {
    return 'symbol';
  },

);
