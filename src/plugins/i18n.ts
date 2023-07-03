import { createI18n } from 'vue-i18n'
import en from '@locales/en'
import pl from '@locales/pl'

const messages = {
  pl,
  en
}

const i18n = createI18n({
  globalInjection: true,
  legacy: false,
  locale: 'pl',
  messages
})

export default i18n
