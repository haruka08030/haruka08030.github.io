import type { NextConfig } from 'next'

// Configure static export for GitHub Pages
const useRootPages = process.env.USE_ROOT_PAGES === 'true' || process.env.USE_ROOT_PAGES === '1'
const repoName = process.env.REPO_NAME || ''
const basePath = useRootPages ? '' : (repoName ? `/${repoName}` : '')
const assetPrefix = basePath || ''

const config: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // Only set when using project pages
  ...(basePath ? { basePath } : {}),
  ...(assetPrefix ? { assetPrefix } : {}),
}

export default config

