import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISStomatologicheskaya_KlinikaДолжностьLForm from './forms/i-i-s-stomatologicheskaya-klinika-должность-l';
import IISStomatologicheskaya_KlinikaЗаписьLForm from './forms/i-i-s-stomatologicheskaya-klinika-запись-l';
import IISStomatologicheskaya_KlinikaКабинетLForm from './forms/i-i-s-stomatologicheskaya-klinika-кабинет-l';
import IISStomatologicheskaya_KlinikaКлиентLForm from './forms/i-i-s-stomatologicheskaya-klinika-клиент-l';
import IISStomatologicheskaya_KlinikaМатериалLForm from './forms/i-i-s-stomatologicheskaya-klinika-материал-l';
import IISStomatologicheskaya_KlinikaОплатаLForm from './forms/i-i-s-stomatologicheskaya-klinika-оплата-l';
import IISStomatologicheskaya_KlinikaПроизводительLForm from './forms/i-i-s-stomatologicheskaya-klinika-производитель-l';
import IISStomatologicheskaya_KlinikaСотрудникLForm from './forms/i-i-s-stomatologicheskaya-klinika-сотрудник-l';
import IISStomatologicheskaya_KlinikaУслугаLForm from './forms/i-i-s-stomatologicheskaya-klinika-услуга-l';
import IISStomatologicheskaya_KlinikaДолжностьEForm from './forms/i-i-s-stomatologicheskaya-klinika-должность-e';
import IISStomatologicheskaya_KlinikaЗаписьEForm from './forms/i-i-s-stomatologicheskaya-klinika-запись-e';
import IISStomatologicheskaya_KlinikaКабинетEForm from './forms/i-i-s-stomatologicheskaya-klinika-кабинет-e';
import IISStomatologicheskaya_KlinikaКлиентEForm from './forms/i-i-s-stomatologicheskaya-klinika-клиент-e';
import IISStomatologicheskaya_KlinikaМатериалEForm from './forms/i-i-s-stomatologicheskaya-klinika-материал-e';
import IISStomatologicheskaya_KlinikaОплатаEForm from './forms/i-i-s-stomatologicheskaya-klinika-оплата-e';
import IISStomatologicheskaya_KlinikaПроизводительEForm from './forms/i-i-s-stomatologicheskaya-klinika-производитель-e';
import IISStomatologicheskaya_KlinikaСотрудникEForm from './forms/i-i-s-stomatologicheskaya-klinika-сотрудник-e';
import IISStomatologicheskaya_KlinikaУслугаEForm from './forms/i-i-s-stomatologicheskaya-klinika-услуга-e';
import IISStomatologicheskaya_KlinikaДокументыModel from './models/i-i-s-stomatologicheskaya-klinika-документы';
import IISStomatologicheskaya_KlinikaДолжностьModel from './models/i-i-s-stomatologicheskaya-klinika-должность';
import IISStomatologicheskaya_KlinikaЗаписьModel from './models/i-i-s-stomatologicheskaya-klinika-запись';
import IISStomatologicheskaya_KlinikaКабинетModel from './models/i-i-s-stomatologicheskaya-klinika-кабинет';
import IISStomatologicheskaya_KlinikaКлиентModel from './models/i-i-s-stomatologicheskaya-klinika-клиент';
import IISStomatologicheskaya_KlinikaМатериалModel from './models/i-i-s-stomatologicheskaya-klinika-материал';
import IISStomatologicheskaya_KlinikaОказаниеУслугModel from './models/i-i-s-stomatologicheskaya-klinika-оказание-услуг';
import IISStomatologicheskaya_KlinikaОплатаModel from './models/i-i-s-stomatologicheskaya-klinika-оплата';
import IISStomatologicheskaya_KlinikaПроизводительModel from './models/i-i-s-stomatologicheskaya-klinika-производитель';
import IISStomatologicheskaya_KlinikaСоставУслугиModel from './models/i-i-s-stomatologicheskaya-klinika-состав-услуги';
import IISStomatologicheskaya_KlinikaСотрудникModel from './models/i-i-s-stomatologicheskaya-klinika-сотрудник';
import IISStomatologicheskaya_KlinikaУслугаModel from './models/i-i-s-stomatologicheskaya-klinika-услуга';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-stomatologicheskaya-klinika-документы': IISStomatologicheskaya_KlinikaДокументыModel,
    'i-i-s-stomatologicheskaya-klinika-должность': IISStomatologicheskaya_KlinikaДолжностьModel,
    'i-i-s-stomatologicheskaya-klinika-запись': IISStomatologicheskaya_KlinikaЗаписьModel,
    'i-i-s-stomatologicheskaya-klinika-кабинет': IISStomatologicheskaya_KlinikaКабинетModel,
    'i-i-s-stomatologicheskaya-klinika-клиент': IISStomatologicheskaya_KlinikaКлиентModel,
    'i-i-s-stomatologicheskaya-klinika-материал': IISStomatologicheskaya_KlinikaМатериалModel,
    'i-i-s-stomatologicheskaya-klinika-оказание-услуг': IISStomatologicheskaya_KlinikaОказаниеУслугModel,
    'i-i-s-stomatologicheskaya-klinika-оплата': IISStomatologicheskaya_KlinikaОплатаModel,
    'i-i-s-stomatologicheskaya-klinika-производитель': IISStomatologicheskaya_KlinikaПроизводительModel,
    'i-i-s-stomatologicheskaya-klinika-состав-услуги': IISStomatologicheskaya_KlinikaСоставУслугиModel,
    'i-i-s-stomatologicheskaya-klinika-сотрудник': IISStomatologicheskaya_KlinikaСотрудникModel,
    'i-i-s-stomatologicheskaya-klinika-услуга': IISStomatologicheskaya_KlinikaУслугаModel
  },

  'application-name': 'Stomatologicheskaya_ klinika',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Stomatologicheskaya_ klinika',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Stomatologicheskaya_ klinika',
          title: 'Stomatologicheskaya_ klinika'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'stomatologicheskaya-klinika': {
          caption: 'Stomatologicheskaya_Klinika',
          title: 'Stomatologicheskaya_Klinika',
          'i-i-s-stomatologicheskaya-klinika-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-stomatologicheskaya-klinika-услуга-l': {
            caption: 'Услуга',
            title: ''
          },
          'i-i-s-stomatologicheskaya-klinika-производитель-l': {
            caption: 'Производитель',
            title: ''
          },
          'i-i-s-stomatologicheskaya-klinika-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-stomatologicheskaya-klinika-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-stomatologicheskaya-klinika-материал-l': {
            caption: 'Материал',
            title: ''
          },
          'i-i-s-stomatologicheskaya-klinika-кабинет-l': {
            caption: 'Кабинет',
            title: ''
          },
          'i-i-s-stomatologicheskaya-klinika-оплата-l': {
            caption: 'Оплата',
            title: ''
          },
          'i-i-s-stomatologicheskaya-klinika-запись-l': {
            caption: 'Запись',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-stomatologicheskaya-klinika-должность-l': IISStomatologicheskaya_KlinikaДолжностьLForm,
    'i-i-s-stomatologicheskaya-klinika-запись-l': IISStomatologicheskaya_KlinikaЗаписьLForm,
    'i-i-s-stomatologicheskaya-klinika-кабинет-l': IISStomatologicheskaya_KlinikaКабинетLForm,
    'i-i-s-stomatologicheskaya-klinika-клиент-l': IISStomatologicheskaya_KlinikaКлиентLForm,
    'i-i-s-stomatologicheskaya-klinika-материал-l': IISStomatologicheskaya_KlinikaМатериалLForm,
    'i-i-s-stomatologicheskaya-klinika-оплата-l': IISStomatologicheskaya_KlinikaОплатаLForm,
    'i-i-s-stomatologicheskaya-klinika-производитель-l': IISStomatologicheskaya_KlinikaПроизводительLForm,
    'i-i-s-stomatologicheskaya-klinika-сотрудник-l': IISStomatologicheskaya_KlinikaСотрудникLForm,
    'i-i-s-stomatologicheskaya-klinika-услуга-l': IISStomatologicheskaya_KlinikaУслугаLForm,
    'i-i-s-stomatologicheskaya-klinika-должность-e': IISStomatologicheskaya_KlinikaДолжностьEForm,
    'i-i-s-stomatologicheskaya-klinika-запись-e': IISStomatologicheskaya_KlinikaЗаписьEForm,
    'i-i-s-stomatologicheskaya-klinika-кабинет-e': IISStomatologicheskaya_KlinikaКабинетEForm,
    'i-i-s-stomatologicheskaya-klinika-клиент-e': IISStomatologicheskaya_KlinikaКлиентEForm,
    'i-i-s-stomatologicheskaya-klinika-материал-e': IISStomatologicheskaya_KlinikaМатериалEForm,
    'i-i-s-stomatologicheskaya-klinika-оплата-e': IISStomatologicheskaya_KlinikaОплатаEForm,
    'i-i-s-stomatologicheskaya-klinika-производитель-e': IISStomatologicheskaya_KlinikaПроизводительEForm,
    'i-i-s-stomatologicheskaya-klinika-сотрудник-e': IISStomatologicheskaya_KlinikaСотрудникEForm,
    'i-i-s-stomatologicheskaya-klinika-услуга-e': IISStomatologicheskaya_KlinikaУслугаEForm
  },

});

export default translations;
