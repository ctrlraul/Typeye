import { Typeye } from '../Typeye';

/** String */
export const Str = new Typeye<string>(

  function (value) {
    return typeof value === 'string';
  },

  function () {
    return 'string';
  },

);
