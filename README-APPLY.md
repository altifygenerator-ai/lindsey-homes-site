Lindsey Homes — IMAGE OWNERSHIP / BUCKET CORRECTION

This is cumulative over the prior client-final overlay.

Corrected:
- Elia Grove now uses ONLY the images from the supplied "elia (2).zip".
- Blackwood Estate now uses ONLY the images from the supplied "blackwood.zip" plus the already supplied Blackwood exterior/presentation/floor plan.
- General Whitney images are separated into the requested buckets:
  Great Rooms
  Kitchens
  Bathrooms
  Foyers & Mudrooms
  Primary Closets
  Pantry / Prep Kitchen
  Features
- Project-specific Elia and Blackwood images are NOT reused in the general design buckets.
- Removed all Pexels / outside-stock image references from the code in this overlay.
- Custom Homes and About now use Whitney-supplied general imagery instead of outside stock.
- The RENOVATE AI-labeled image (IMG_20260924_161749.jpg) is intentionally excluded.
- IMG_20260924_202204.png, explicitly requested for deletion, is intentionally excluded.
- No "Luxury Homes" bucket is restored.

Note:
Older image files from previous overlays may still physically exist in public/ after extracting this overlay,
but the corrected code does not reference or render them. This avoids destructive folder deletion while making
the visible site use only the approved image assignments.

Apply:
1. Extract the CONTENTS of this ZIP over the repo root.
2. Run: npm run build
3. Review locally, then commit/push if it looks right.

The ZIP is repo-relative with no wrapper folder.
