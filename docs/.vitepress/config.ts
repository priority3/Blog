import { defineConfig } from 'vitepress'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import { getNav } from './theme/data'
import { getSidebar } from './theme/data/helper'
export default async () => {
  const sidebar = await getSidebar()
  return defineConfig({
    title: 'priority',
    description: 'priority website',
    lastUpdated: true,
    vite: {
      plugins: [Unocss({
        presets: [
          presetAttributify(),
          presetUno(),
        ],
      })],
    },
    markdown: {
      theme: 'one-dark-pro',
    },
    themeConfig: {
      footer: {
        message: 'Love & Peace & Vue Ecosystem',
        copyright: 'Copyright © 2022-present priority',
      },
      nav: getNav(),
      socialLinks: [
        { icon: 'github', link: 'https://github.com/priortiy' },
      ],
      sidebar,
    },
  })
}
