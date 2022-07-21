import { Typeye, GetTypeyeT } from '../Typeye';
import { separator } from './Uni';

/** Array */
export function Arr<T extends Typeye<unknown>[] | [Typeye<unknown>]>(...Types: T): Typeye<GetTypeyeT<T[number]>[]> {

  return new Typeye(
    
    function check(values) {

      if (!Array.isArray(values)) {
        return false;
      }

      return values.every(value => Types.some(Type => Type.check(value)));

    },

    function() {

      // TODO: Make it only add () if Types[0] is an Uni. Ironically we need a
      // fancy way to tell the type of a Typeye, for now we use a hack fix.

      const representation = Types[0].toString();

      return (
        representation.includes(separator)
        ? `(${representation})[]`
        : `${representation}[]`
      );

    },

  );
}
