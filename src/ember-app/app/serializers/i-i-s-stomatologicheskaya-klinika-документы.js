import { Serializer as ДокументыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-stomatologicheskaya-klinika-документы';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДокументыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
