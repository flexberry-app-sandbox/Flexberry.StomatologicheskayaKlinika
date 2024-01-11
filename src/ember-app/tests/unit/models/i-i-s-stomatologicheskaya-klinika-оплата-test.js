import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-stomatologicheskaya-klinika-оплата', 'Unit | Model | i-i-s-stomatologicheskaya-klinika-оплата', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
