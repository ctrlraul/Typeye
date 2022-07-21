import { Typeye, GetTypeyeT } from '../Typeye';

export const separator = ' | ';

/** Union */
export function Uni<T extends Typeye<unknown>[]>(...types: T): Typeye<GetTypeyeT<T[number]>> {
  return new Typeye(
    
    function check(value) {
      return types.some(type => type.check(value));
    },
    
    function toString() {
      return types.map(type => type.toString()).join(separator);
    },

  );
}
