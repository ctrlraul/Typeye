import { Typeye } from '../Typeye';

/** BigInt */
export const Big = new Typeye<bigint>(

  function (value) {
    return typeof value === 'bigint';
  },

  function () {
    return 'bigint';
  },

);
