import { Typeye, GetTypeyeT } from '../Typeye';
import { Und } from './Und';
import { separator } from './Uni';

/** Optional values might be undefined, see also Nullable */
export function Optional<T extends Typeye>(Type: T): Typeye<GetTypeyeT<T> | undefined> {
  return new Typeye(

    function (value) {
      return Type.check(value) || Und.check(value);
    },
  
    function () {
      return Type.toString() + separator + Und.toString();
    },
  
  );
}
