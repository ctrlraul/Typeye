import { GetTypeyeT, Typeye } from '../Typeye';
import { Nil } from './Nil';
import { separator } from './Uni';

/** Nullable values might be null, see also Optional */
export function Nullable<T extends Typeye>(Type: T): Typeye<GetTypeyeT<T> | null> {
  return new Typeye(

    function (value) {
      return Type.check(value) || Nil.check(value);
    },
  
    function () {
      return Type.toString() + separator + Nil.toString();
    },
  
  );
}
