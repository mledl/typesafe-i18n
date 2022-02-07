// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */

import { initFormatters } from './formatters-template.actual'
import type { Locales, Translations } from './types.actual'
import { loadedFormatters, loadedLocales, locales } from './util.actual'

const localeTranslationLoaders = {
	de: () => import('./de'),
	en: () => import('./en'),
	it: () => import('./it'),
}

export const loadLocaleAsync = async (locale: Locales) => {
	if (loadedLocales[locale]) return

	loadedLocales[locale] = (await (localeTranslationLoaders[locale])()).default as unknown as Translations
	loadFormatters(locale)
}

export const loadAllLocalesAsync = () => Promise.all(locales.map(loadLocaleAsync))

export const loadFormatters = (locale: Locales) => {
	loadedFormatters[locale] = initFormatters(locale)
}
