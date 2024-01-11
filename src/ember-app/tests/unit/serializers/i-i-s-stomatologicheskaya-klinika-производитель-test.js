import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-stomatologicheskaya-klinika-производитель', 'Unit | Serializer | i-i-s-stomatologicheskaya-klinika-производитель', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-stomatologicheskaya-klinika-производитель',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-stomatologicheskaya-klinika-единицы',
    'transform:i-i-s-stomatologicheskaya-klinika-тип-оплаты',

    'model:i-i-s-stomatologicheskaya-klinika-документы',
    'model:i-i-s-stomatologicheskaya-klinika-должность',
    'model:i-i-s-stomatologicheskaya-klinika-запись',
    'model:i-i-s-stomatologicheskaya-klinika-кабинет',
    'model:i-i-s-stomatologicheskaya-klinika-клиент',
    'model:i-i-s-stomatologicheskaya-klinika-материал',
    'model:i-i-s-stomatologicheskaya-klinika-оказание-услуг',
    'model:i-i-s-stomatologicheskaya-klinika-оплата',
    'model:i-i-s-stomatologicheskaya-klinika-производитель',
    'model:i-i-s-stomatologicheskaya-klinika-состав-услуги',
    'model:i-i-s-stomatologicheskaya-klinika-сотрудник',
    'model:i-i-s-stomatologicheskaya-klinika-услуга',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
