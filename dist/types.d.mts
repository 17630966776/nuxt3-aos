
import type { ModuleOptions } from './module'


declare module '@nuxt/schema' {
  interface NuxtConfig { ['nuxt3Aos']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['nuxt3Aos']?: ModuleOptions }
}

declare module 'nuxt/schema' {
  interface NuxtConfig { ['nuxt3Aos']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['nuxt3Aos']?: ModuleOptions }
}


export type { ModuleOptions, default } from './module'
