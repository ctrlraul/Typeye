import { Typeye } from '../Typeye';

/** Number */
export const Num = new Typeye<number>(

  function (value) {
    return typeof value === 'number';
  },

  function () {
    return 'number';
  },

);
