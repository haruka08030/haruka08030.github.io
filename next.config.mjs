// Configure static export for GitHub Pages
// Auto-detect repo when running in GitHub Actions so that
// basePath/assetPrefix work even without repository variables.
const ghRepo = process.env.GITHUB_REPOSITORY || '' // e.g. "owner/repo"
const ghRepoName = ghRepo.includes('/') ? ghRepo.split('/')[1] : ''

// Prefer explicit variables, otherwise fall back to GH repo name
const repoName = process.env.REPO_NAME || ghRepoName || ''

// If USE_ROOT_PAGES is explicitly set, honor it. Otherwise infer from repo name.
const inferredRoot = /.+\.github\.io$/i.test(repoName)
const useRootPages = (process.env.USE_ROOT_PAGES === 'true' || process.env.USE_ROOT_PAGES === '1') || inferredRoot

const basePath = useRootPages ? '' : (repoName ? `/${repoName}` : '')
const assetPrefix = basePath || ''

/** @type {import('next').NextConfig} */
const config = {
  images: { unoptimized: true },
  ...(basePath ? { basePath } : {}),
  ...(assetPrefix ? { assetPrefix } : {}),
}

export default config
