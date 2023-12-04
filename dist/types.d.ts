
import type { ModuleOptions } from './module'


declare module '@nuxt/schema' {
  interface NuxtConfig { ['myModule']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['myModule']?: ModuleOptions }
}

declare module 'nuxt/schema' {
  interface NuxtConfig { ['myModule']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['myModule']?: ModuleOptions }
}


export type { ModuleOptions, default } from './module'
