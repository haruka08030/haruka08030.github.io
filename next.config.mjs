// Configure static export for GitHub Pages
const useRootPages = process.env.USE_ROOT_PAGES === 'true' || process.env.USE_ROOT_PAGES === '1'
const repoName = process.env.REPO_NAME || ''
const basePath = useRootPages ? '' : (repoName ? `/${repoName}` : '')
const assetPrefix = basePath || ''

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  images: { unoptimized: true },
  ...(basePath ? { basePath } : {}),
  ...(assetPrefix ? { assetPrefix } : {}),
}

export default config
