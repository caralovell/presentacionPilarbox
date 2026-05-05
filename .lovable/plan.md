

## Make both logos much bigger

**Ascires logo** (line 45): Change `h-40` → `h-64` (from 10rem to 16rem)

**Logopost logo** (line 82): Change `h-5` → `h-16` (from 1.25rem to 4rem), also increase `gap-2` → `gap-4` and remove `opacity-50` to make it stand out more.

### Files to edit
- `src/components/HeroSection.tsx` — two changes:
  1. Line 45: `h-40` → `h-64`
  2. Line 76: remove `opacity-50`, change `gap-2` → `gap-4`
  3. Line 82: `h-5` → `h-16`

