import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.stomatologicheskaya-klinika.caption'),
          title: i18n.t('forms.application.sitemap.stomatologicheskaya-klinika.title'),
          children: [{
            link: 'i-i-s-stomatologicheskaya-klinika-клиент-l',
            caption: i18n.t('forms.application.sitemap.stomatologicheskaya-klinika.i-i-s-stomatologicheskaya-klinika-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.stomatologicheskaya-klinika.i-i-s-stomatologicheskaya-klinika-клиент-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-stomatologicheskaya-klinika-услуга-l',
            caption: i18n.t('forms.application.sitemap.stomatologicheskaya-klinika.i-i-s-stomatologicheskaya-klinika-услуга-l.caption'),
            title: i18n.t('forms.application.sitemap.stomatologicheskaya-klinika.i-i-s-stomatologicheskaya-klinika-услуга-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-stomatologicheskaya-klinika-производитель-l',
            caption: i18n.t('forms.application.sitemap.stomatologicheskaya-klinika.i-i-s-stomatologicheskaya-klinika-производитель-l.caption'),
            title: i18n.t('forms.application.sitemap.stomatologicheskaya-klinika.i-i-s-stomatologicheskaya-klinika-производитель-l.title'),
            children: null
          }, {
            link: 'i-i-s-stomatologicheskaya-klinika-должность-l',
            caption: i18n.t('forms.application.sitemap.stomatologicheskaya-klinika.i-i-s-stomatologicheskaya-klinika-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.stomatologicheskaya-klinika.i-i-s-stomatologicheskaya-klinika-должность-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-stomatologicheskaya-klinika-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.stomatologicheskaya-klinika.i-i-s-stomatologicheskaya-klinika-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.stomatologicheskaya-klinika.i-i-s-stomatologicheskaya-klinika-сотрудник-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-stomatologicheskaya-klinika-материал-l',
            caption: i18n.t('forms.application.sitemap.stomatologicheskaya-klinika.i-i-s-stomatologicheskaya-klinika-материал-l.caption'),
            title: i18n.t('forms.application.sitemap.stomatologicheskaya-klinika.i-i-s-stomatologicheskaya-klinika-материал-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-stomatologicheskaya-klinika-кабинет-l',
            caption: i18n.t('forms.application.sitemap.stomatologicheskaya-klinika.i-i-s-stomatologicheskaya-klinika-кабинет-l.caption'),
            title: i18n.t('forms.application.sitemap.stomatologicheskaya-klinika.i-i-s-stomatologicheskaya-klinika-кабинет-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-stomatologicheskaya-klinika-оплата-l',
            caption: i18n.t('forms.application.sitemap.stomatologicheskaya-klinika.i-i-s-stomatologicheskaya-klinika-оплата-l.caption'),
            title: i18n.t('forms.application.sitemap.stomatologicheskaya-klinika.i-i-s-stomatologicheskaya-klinika-оплата-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-stomatologicheskaya-klinika-запись-l',
            caption: i18n.t('forms.application.sitemap.stomatologicheskaya-klinika.i-i-s-stomatologicheskaya-klinika-запись-l.caption'),
            title: i18n.t('forms.application.sitemap.stomatologicheskaya-klinika.i-i-s-stomatologicheskaya-klinika-запись-l.title'),
            icon: 'building',
            children: null
          }]
        }
      ]
    };
  }),
})