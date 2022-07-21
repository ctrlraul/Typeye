import { GetTypeyeT, Typeye } from '../Typeye';


// Props to anyone who can simplify this monster type

type GenericsTuple <A extends Typeye<unknown>[], T extends unknown[] = []> = (
  T['length'] extends A['length']
  ? T
  : GenericsTuple<A, [...T, GetTypeyeT<A[T['length']]>]>
)


/** Tuple */
export function Tup<T extends Typeye[]>(...Types: T): Typeye<GenericsTuple<T>> {

  return new Typeye(
    
    function check(value) {

      if (!Array.isArray(value) || value.length !== Types.length) {
        return false;
      }

      return Types.every((Type, i) => Type.check(value[i]));

    },

    function() {
      return `[${Types.map(Type => Type.toString()).join(', ')}]`;
    },

  );
}
