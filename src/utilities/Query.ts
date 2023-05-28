import qs from 'qs';

export class QueryUtil {
  static stringify = (obj: object) => {
    return qs.stringify(obj, { skipNulls: true });
  }
}
