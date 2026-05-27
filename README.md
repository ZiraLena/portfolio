# Portfolio Site — Asset Placement Guide

## Setup
```bash
npm install
npm run dev
```

## Drop your assets into `/public/assets/` with EXACTLY these filenames:

### Home Section
| File | What it is |
|------|-----------|
| `BG-Index-design.png` | Spiral/radial background graphic |
| `Cutout-Design.png` | Yellow tape vertical strip (far left edge) |
| `title.png` | PORTFOLIO speech bubble graphic |
| `Desc.png` | Skills ribbon below portfolio bubble |
| `Face.png` | Person cutout photo (transparent bg) |
| `Star1.png` | Large 4-point gold star |
| `Star2.png` | Medium gold star |
| `Star3.png` | Small gold star |
| `Lines.png` | Decorative horizontal lines bar |
| `Contact-Icon.png` | Envelope/contact icon |

### Navigation
| File | What it is |
|------|-----------|
| `HOME-Active.png` | HOME tab — white bg (active state) |
| `HOME-Inactive.png` | HOME tab — dark (inactive state) |
| `CONTACTS-Inactive.png` | CONTACTS tab |
| `WORKS-Active.png` | WORKS tab — white bg (active state) |
| `WORKS-Inactive.png` | WORKS tab — dark (inactive state) |

### Works Section 1 (Title Page)
| File | What it is |
|------|-----------|
| `WORKS-Bg.png` | Full dark background (also used for Contacts) |
| `WORKS-cutout-design.png` | Bottom cutout / masking tape graphic |
| `WORKS-line-design.png` | Decorative line divider |

### Works Section 2 (Folder)
| File | What it is |
|------|-----------|
| `WORKS-SECTION-2-card.png` | Polaroid card with red pin |
| `WORKS-SECTION-2-cutout-design.png` | Bottom decorative cutout |
| `WORKS-SECTION-2-Folder.png` | Folder body background graphic |

## Project images (Works folder content)
Put them in `/public/assets/project-images/` and update the `<img>` tags
in `WorksFolderSection` inside `src/App.tsx`.
