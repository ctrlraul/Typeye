import { Typeye } from '../Typeye';

/** Boolean */
export const Boo = new Typeye<boolean>(

  function (value) {
    return typeof value === 'boolean';
  },

  function () {
    return 'boolean';
  },

);
