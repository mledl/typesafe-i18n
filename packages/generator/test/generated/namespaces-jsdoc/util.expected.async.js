// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
// @ts-check
/* eslint-disable */

/**
 * @typedef { import('./types.actual').Locales } Locales,
 * @typedef { import('./types.actual').Translations } Translations
 */

import { initFormatters } from './formatters-template.actual'

import { loadedFormatters, loadedLocales, locales } from './util.actual'

const localeTranslationLoaders = {
	en: () => import('./en'),
}

const localeNamespaceLoaders = {
	en: {
		test: () => import('./en/test')
	}
}

/**
 * @param { Locales } locale
 * @return { Promise<void> }
 */
export const loadLocaleAsync = async (locale) => {
	if (loadedLocales[locale]) return

	loadedLocales[locale] = /** @type { Translations } */ (/** @type { unknown } */ ((await (localeTranslationLoaders[locale])()).default))
	loadFormatters(locale)
}

export const loadAllLocalesAsync = () => Promise.all(locales.map(loadLocaleAsync))

/**
 * @param { Locales } locale
 * @return { void }
 */
export const loadFormatters = (locale) => {
	loadedFormatters[locale] = initFormatters(locale)
}

export const loadNamespaceAsync = async (locale, namespace) =>
	loadedLocales[locale][namespace] = (await (localeNamespaceLoaders[locale][namespace])()).default