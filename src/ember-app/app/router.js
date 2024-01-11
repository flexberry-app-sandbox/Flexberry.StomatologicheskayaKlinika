import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-stomatologicheskaya-klinika-должность-l');
  this.route('i-i-s-stomatologicheskaya-klinika-должность-e',
  { path: 'i-i-s-stomatologicheskaya-klinika-должность-e/:id' });
  this.route('i-i-s-stomatologicheskaya-klinika-должность-e.new',
  { path: 'i-i-s-stomatologicheskaya-klinika-должность-e/new' });
  this.route('i-i-s-stomatologicheskaya-klinika-запись-l');
  this.route('i-i-s-stomatologicheskaya-klinika-запись-e',
  { path: 'i-i-s-stomatologicheskaya-klinika-запись-e/:id' });
  this.route('i-i-s-stomatologicheskaya-klinika-запись-e.new',
  { path: 'i-i-s-stomatologicheskaya-klinika-запись-e/new' });
  this.route('i-i-s-stomatologicheskaya-klinika-кабинет-l');
  this.route('i-i-s-stomatologicheskaya-klinika-кабинет-e',
  { path: 'i-i-s-stomatologicheskaya-klinika-кабинет-e/:id' });
  this.route('i-i-s-stomatologicheskaya-klinika-кабинет-e.new',
  { path: 'i-i-s-stomatologicheskaya-klinika-кабинет-e/new' });
  this.route('i-i-s-stomatologicheskaya-klinika-клиент-l');
  this.route('i-i-s-stomatologicheskaya-klinika-клиент-e',
  { path: 'i-i-s-stomatologicheskaya-klinika-клиент-e/:id' });
  this.route('i-i-s-stomatologicheskaya-klinika-клиент-e.new',
  { path: 'i-i-s-stomatologicheskaya-klinika-клиент-e/new' });
  this.route('i-i-s-stomatologicheskaya-klinika-материал-l');
  this.route('i-i-s-stomatologicheskaya-klinika-материал-e',
  { path: 'i-i-s-stomatologicheskaya-klinika-материал-e/:id' });
  this.route('i-i-s-stomatologicheskaya-klinika-материал-e.new',
  { path: 'i-i-s-stomatologicheskaya-klinika-материал-e/new' });
  this.route('i-i-s-stomatologicheskaya-klinika-оплата-l');
  this.route('i-i-s-stomatologicheskaya-klinika-оплата-e',
  { path: 'i-i-s-stomatologicheskaya-klinika-оплата-e/:id' });
  this.route('i-i-s-stomatologicheskaya-klinika-оплата-e.new',
  { path: 'i-i-s-stomatologicheskaya-klinika-оплата-e/new' });
  this.route('i-i-s-stomatologicheskaya-klinika-производитель-l');
  this.route('i-i-s-stomatologicheskaya-klinika-производитель-e',
  { path: 'i-i-s-stomatologicheskaya-klinika-производитель-e/:id' });
  this.route('i-i-s-stomatologicheskaya-klinika-производитель-e.new',
  { path: 'i-i-s-stomatologicheskaya-klinika-производитель-e/new' });
  this.route('i-i-s-stomatologicheskaya-klinika-сотрудник-l');
  this.route('i-i-s-stomatologicheskaya-klinika-сотрудник-e',
  { path: 'i-i-s-stomatologicheskaya-klinika-сотрудник-e/:id' });
  this.route('i-i-s-stomatologicheskaya-klinika-сотрудник-e.new',
  { path: 'i-i-s-stomatologicheskaya-klinika-сотрудник-e/new' });
  this.route('i-i-s-stomatologicheskaya-klinika-услуга-l');
  this.route('i-i-s-stomatologicheskaya-klinika-услуга-e',
  { path: 'i-i-s-stomatologicheskaya-klinika-услуга-e/:id' });
  this.route('i-i-s-stomatologicheskaya-klinika-услуга-e.new',
  { path: 'i-i-s-stomatologicheskaya-klinika-услуга-e/new' });
});

export default Router;
