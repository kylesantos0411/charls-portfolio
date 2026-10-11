# Charls Andrada — Portfolio Website

A high-impact, editorial portfolio website for **Charls Andrada** (Cum Laude Entrepreneurship Graduate & Venture Builder), built with a **modern white-themed Swiss-minimalist aesthetic**, architectural hairline gridlines, technical metadata, and restrained digital glitch accents.

---

## 🚀 Quick Start (Local Testing)

The local development server is already running! You can open it in your browser:

```
http://127.0.0.1:5173/
```

If you ever need to restart the development server in the future:

```powershell
npm run dev
```

---

## ✏️ How to Edit Content & Links

All text, links, social media handles, biography, businesses, projects, and credentials are intentionally stored in a **single, easy-to-edit configuration file**:

📁 **`src/data/portfolioData.ts`**

### What you can customize in `portfolioData.ts`:
1. **Personal Information**:
   - `fullName`, `monogram` (`CA`), `professionalTitle`
   - `academicDistinction` (`"CUM LAUDE • ENTREPRENEURSHIP GRADUATE"`)
   - `heroHeadlinePart1`, `heroHeadlinePart2`, `heroHeadlinePart3`
   - `metadataCoordinates` and technical tags
   - `email` and `location`
2. **About Me**:
   - Biography paragraphs
   - Degree, University, Latin honors distinction
   - Core values and operational strengths
3. **Businesses (Ventures)**:
   - Venture name, category, role, year, tagline, and short description
   - Complete Case Study: Problem, Strategic Solution, Charls' Role, and Key Outcomes
4. **Projects**:
   - Title, category (Strategy, Entrepreneurship, Academic, Digital), tags, and case study overview
5. **Credentials**:
   - Academic degrees, honors, executive certificates, and fellowship residencies
6. **Contact & Socials**:
   - Working `mailto:` email address
   - LinkedIn, X (Twitter), and Instagram profile links
7. **Resume**:
   - Replace `public/resume.pdf` with Charls' actual resume PDF file.

---

## 🖼️ How to Change Photos

- **Hero Portrait**: Replace `public/assets/charls_reference.png` or provide a custom image URL / path in `portfolioData.ts` under `personal.portraitImage`.
- **About Portrait**: Provide a photo URL or local asset path in `portfolioData.ts` under `personal.aboutImage`.
- **Business & Project Thumbnails**: Simply change the `image` URLs inside `businesses.items` and `projects.items` in `portfolioData.ts`.

---

## 🎨 Visual Features

- **Pristine White Theme**: High-contrast black typography (`#0A0A0A`) on crisp white (`#FFFFFF`) with subtle off-white rhythm transitions.
- **Monochrome Dark Mode Toggle**: A minimal toggle button in the navigation bar allows instant switching between the White theme and the Dark reference look.
- **Glitch & Scanline Visuals**: Restrained, accessible glitch displacement on hover and ambient slices on the hero portrait.
- **Architectural Grid**: Fine hairline gridlines (`#E5E7EB`) inspired by Swiss editorial art direction.
- **Interactive Case Study Modal**: Clicking any business or project opens an executive dossier with problem, execution, and verified outcomes.
- **One-Click Email Copier**: Dedicated button in the Contact section to copy Charls' email address to clipboard with instant confirmation toast.
