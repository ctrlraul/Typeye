import { Typeye, GetTypeyeT } from '../Typeye';

/** Record */
export function Rec<T extends Record<string, Typeye<unknown>>>(record: T): Typeye<{ [K in keyof T]: GetTypeyeT<T[K]> }> {

  const entries = Object.entries(record);

  return new Typeye(
    
    function(value) {

      if (typeof value !== 'object' || value === null) {
        return false;
      }

      return entries.every(([key, Type]) => {
        return Type.check(value[key])
      })

    },
    
    function() {
      return `{ ${entries.map(([key, value]) => `${key}: ${value}`).join(', ')} }`;
    },

  );
}
