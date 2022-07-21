import { Uni } from './typeyes/Uni';

/** Get type parameter T from a Typeye */
export type GetTypeyeT<C extends Typeye<any>> = C extends Typeye<infer T> ? T : unknown;

export class Typeye <T = unknown> {

  /** Returns a string representation of a value's type.
   * @param value {any} The value to be checked
   * @returns string representation of value's type
   */
  static getTypeString(value: any): string {

    const type = typeof value;

    switch (type) {

      case 'object':

        if (value === null) {
          return 'null';
        }

        if (Array.isArray(value)) {
          return `[${value.map(Typeye.getTypeString).join(', ')}]`;
        }

        return `{ ${Object.entries(value).map(([k, v]) => `${k}: ${Typeye.getTypeString(v)}`).join(', ')} }`;
      
      default:
        return type

    }

  }



  constructor(check: Typeye<T>['check'], toString: Typeye<T>['toString']) {
    this.check = check;
    this.toString = toString;
  }

  
  /** Tells whether the value matches this type
   * @param value {any} The value to be checked
   * @returns Whether the value matches this type
   */
  public check (value: any): boolean {
    throw new Error()
  };

  
  /** Returns the value correctly typed and throws an error if the value doesn't match this type.
   * @param value {any} The value to be checked
   * @returns The value correctly typed
   */
  public assert(value: any): T {

    if (this.check(value)) {
      return value;
    }

    throw new TypeError(`Expected (${this}), got (${Typeye.getTypeString(value)}) instead`);

  }


  /** Returns an union of this and the typeye passed as argument */
  public Or <J extends Typeye>(typeye: J): Typeye<T | GetTypeyeT<J>> {
    return Uni(this, typeye);
  }

}
