# Data Model: Brand Story

## Entities

### BrandInfo
- **title**: string (from i18n `whoWeAre.title`)
- **description**: string (from i18n `whoWeAre.description`)

### ServiceGrid
- **title**: string (from i18n `services.title`)
- **items**: string[] (from i18n `services.items.*`)
  - Social Media
  - Graphic Design
  - Media Production
  - Media Buying
  - Video Editing
  - Web Development

### PlatformLinks
- **title**: string (from i18n `platforms.title`)
- **links**: Array<{ id, name, social_media_url }> (from `useGetSocialMedia`)

## Layout Mapping
- **Card A (Large)**: BrandInfo
- **Card B (Medium)**: ServiceGrid
- **Card C (Small/Bar)**: PlatformLinks
