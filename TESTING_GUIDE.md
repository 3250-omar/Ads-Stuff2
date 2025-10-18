# Testing Guide for Internationalization

## Quick Start

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Access the application:**
   - English: `http://localhost:3000/en`
   - Arabic: `http://localhost:3000/ar`
   - Root: `http://localhost:3000` (will redirect to `/en`)

## Test Checklist

### ✅ Language Switching
- [ ] Click the language toggle in the navbar
- [ ] Verify dropdown shows "English" and "Arabic" options
- [ ] Switch to Arabic - page should reload with Arabic text
- [ ] Switch back to English - page should reload with English text
- [ ] Refresh the page - selected language should persist

### ✅ RTL/LTR Support
- [ ] In English mode, text should be left-to-right
- [ ] In Arabic mode, text should be right-to-left
- [ ] Check that `<html dir="rtl">` is set in Arabic mode
- [ ] Check that `<html dir="ltr">` is set in English mode

### ✅ Navigation
Test all navigation links in both languages:

**English URLs:**
- [ ] `/en` - Home page
- [ ] `/en/projects` - Projects page
- [ ] `/en/skills` - Skills page
- [ ] `/en/contacts` - Contacts page
- [ ] `/en/about` - About page

**Arabic URLs:**
- [ ] `/ar` - صفحة الرئيسية
- [ ] `/ar/projects` - صفحة المشاريع
- [ ] `/ar/skills` - صفحة المهارات
- [ ] `/ar/contacts` - صفحة الاتصال
- [ ] `/ar/about` - صفحة عنّي

### ✅ Dark Mode with Language Toggle
- [ ] Dark mode toggle should work independently of language
- [ ] Switch to dark mode in English
- [ ] Change language to Arabic - dark mode should remain active
- [ ] Switch back to light mode - should work in both languages

### ✅ Content Translation
Verify these elements are translated:

**Navigation Bar:**
- [ ] "Home" / "الرئيسية"
- [ ] "Projects" / "المشاريع"
- [ ] "Skills" / "المهارات"
- [ ] "Contacts" / "اتصل بنا"
- [ ] "About" / "عنّي"
- [ ] "Language" / "اللغة"

**Home Page:**
- [ ] "Welcome to My Portfolio" / "مرحبًا بك في معرض أعمالي"
- [ ] "Explore my work and get in touch" / "استكشف أعمالي وتواصل معي"

**Footer:**
- [ ] "All rights reserved" / "جميع الحقوق محفوظة"
- [ ] "Made with ❤️" / "صُنع بـ ❤️"

## Browser Testing

Test in multiple browsers:
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Mobile browsers

## Common Issues & Solutions

### Issue: URL shows `/undefined` or missing locale
**Solution:** Ensure middleware is configured correctly in `middleware.ts`

### Issue: Translations not showing
**Solution:** 
1. Check that JSON files have no syntax errors
2. Verify translation keys match in code and JSON files
3. Restart dev server

### Issue: Hydration mismatch error
**Solution:** Ensure `suppressHydrationWarning` is set on `<html>` tag in layout

### Issue: Language doesn't persist after refresh
**Solution:** Check that cookie is being set correctly in `languageToggle.tsx`

### Issue: RTL layout broken
**Solution:** 
1. Verify Tailwind CSS RTL support is working
2. Check CSS for hardcoded directional properties

## Build Testing

Before deploying:

1. **Run production build:**
   ```bash
   npm run build
   ```

2. **Check for errors:**
   - No TypeScript errors
   - No build warnings
   - All pages compile successfully

3. **Test production build:**
   ```bash
   npm start
   ```

4. **Verify static generation:**
   - Check `.next/server/app` folder
   - Both `/en` and `/ar` folders should exist
   - All pages should be pre-rendered

## Next Steps After Testing

1. **Add more translations** for your actual content
2. **Add SEO metadata** for each locale
3. **Implement language detection** from browser preferences
4. **Add sitemap** with locale paths
5. **Configure CDN** to serve localized content efficiently

## Performance Checklist

- [ ] Check page load time for both locales
- [ ] Verify bundle size hasn't increased significantly
- [ ] Test lazy loading of translation files
- [ ] Check Core Web Vitals scores
- [ ] Test on slow 3G connection

## Accessibility Testing

- [ ] Screen reader announces language changes
- [ ] Keyboard navigation works in both RTL/LTR
- [ ] Focus indicators visible in both modes
- [ ] Language toggle has proper ARIA labels
