// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'en'

export type Translation = {
	/**
	 * Hi {0?}
	 * @param {unknown} [0]
	 */
	'index': RequiredParams1<'0?'>
	/**
	 * Hi {name?}
	 * @param {unknown} [name]
	 */
	'keyed': RequiredParams1<'name?'>
	/**
	 * Hi {name?}
	 * @param {string} [name]
	 */
	'typed': RequiredParams1<'name?'>
	/**
	 * Hi {name1?} and {name2?}
	 * @param {unknown} [name1]
	 * @param {unknown} [name2]
	 */
	'multiple': RequiredParams2<'name1?', 'name2?'>
	/**
	 * Hi {name1} and {name2?}
	 * @param {unknown} name1
	 * @param {unknown} [name2]
	 */
	'multiple1': RequiredParams2<'name1', 'name2?'>
	/**
	 * Hi {name1?} and {name2}
	 * @param {unknown} [name1]
	 * @param {unknown} name2
	 */
	'multiple2': RequiredParams2<'name1?', 'name2'>
	/**
	 * Hi {name1?|uppercase}
	 * @param {unknown} [name1]
	 */
	'formatter': RequiredParams1<'name1?|uppercase'>
}

export type TranslationFunctions = {
	/**
	 * Hi {0?}
	 */
	'index': (arg0?: unknown) => LocalizedString
	/**
	 * Hi {name?}
	 */
	'keyed': (arg: { name?: unknown }) => LocalizedString
	/**
	 * Hi {name?}
	 */
	'typed': (arg: { name?: string }) => LocalizedString
	/**
	 * Hi {name1?} and {name2?}
	 */
	'multiple': (arg: { name1?: unknown, name2?: unknown }) => LocalizedString
	/**
	 * Hi {name1} and {name2?}
	 */
	'multiple1': (arg: { name1: unknown, name2?: unknown }) => LocalizedString
	/**
	 * Hi {name1?} and {name2}
	 */
	'multiple2': (arg: { name1?: unknown, name2: unknown }) => LocalizedString
	/**
	 * Hi {name1?|uppercase}
	 */
	'formatter': (arg: { name1?: unknown }) => LocalizedString
}

export type Formatters = {
	'uppercase': (value: unknown) => unknown
}

type Param<P extends string> = `{${P}}`

type Params1<P1 extends string> =
	`${string}${Param<P1>}${string}`

type Params2<P1 extends string, P2 extends string> =
	`${string}${Param<P1>}${string}${Param<P2>}${string}`

type RequiredParams1<P1 extends string> =
	| Params1<P1>

type RequiredParams2<P1 extends string, P2 extends string> =
	| Params2<P1, P2>
	| Params2<P2, P1>
