# JDART24 Design System

This file adapts the gallery restraint of `DESIGN-mobbin.md` to the JDART24 motion portfolio. It is the source of truth for the site implementation.

## 1. Visual Theme and Atmosphere

The site is a quiet gallery for animated ecommerce work. Interface chrome recedes and the portfolio supplies the visual energy. The default page is true white with near-black typography, soft neutral divisions, and generous whitespace. The hero may use controlled dark and warm-gold light as a presentation surface, but the text zone must remain visually still and immediately legible.

The experience is premium through precision rather than decoration: strong Korean typography, measured spacing, clean media frames, thin hairlines, and restrained motion. Avoid generic glassmorphism, neon, excessive glow, and repeated floating-card effects.

## 2. Color Palette and Roles

- **Canvas White** (`#FFFFFF`): default page background.
- **Ink Black** (`#141414`): primary text, primary controls, and dark hero surface.
- **Soft Ink** (`#2A2A2A`): secondary dark surfaces.
- **Muted Text** (`#6E6E6E`): supporting copy on light surfaces.
- **Muted Light** (`#C8C8C8`): supporting copy on dark surfaces.
- **Soft Canvas** (`#F4F4F4`): subtle grouped surfaces and resting controls.
- **Hairline** (`#E2E2E2`): borders and dividers.
- **Studio Gold** (`#D79A3B`): provisional hero illumination derived from the selected real work; use only for light, focus, and active emphasis. This is not yet a permanent brand color.
- **Hero Orange** (`#D96B00`): clear warm display accent used only on `생동감` in the hero title. It echoes the work imagery while maintaining readable contrast on the ivory hero surface.

Portfolio images retain their original colors. Do not tint or recolor source work.

## 3. Typography Rules

- Korean font stack: `Pretendard Variable`, `Pretendard`, `SUIT Variable`, `Noto Sans KR`, `Apple SD Gothic Neo`, `Malgun Gothic`, sans-serif.
- Display headline: bold, compact, balanced across at most two lines.
- Hero title lines use optical left-edge alignment; `생동감` alone receives the Hero Orange accent.
- Section headings: strong weight with clear separation from body text.
- Body copy: regular or medium weight with relaxed line height.
- Identifiers and button labels: medium to semibold, never browser-default styling.
- Do not use gradient text, decorative monospace, or exaggerated letter spacing.

## 4. Geometry and Components

- Media frames: 16px corner radius.
- Large hero media: 24px corner radius.
- Small controls and buttons: pill-shaped only where compact action controls benefit from it.
- Cards use one depth signal: a thin border or a soft surface difference, never border plus heavy shadow.
- GIF and WebP buttons have equal visual priority and remain visible at rest.
- Modal uses a dark backdrop, a clear close control, constrained media sizing, and stable focus treatment.

## 5. Layout Principles

- Desktop portfolio grid: three columns.
- Tablet portfolio grid: two columns.
- Mobile portfolio grid: one column.
- All twelve categories appear in vertical sequence.
- Major sections use generous vertical space, with more space above headings than below them.
- The hero protects a dedicated text zone from moving imagery.
- Desktop hero may use three different real works: one dominant animated center work and two quieter supporting works.
- Mobile hero shows one dominant work only.

## 6. Motion Principles

- The hero has one authored motion moment: the central real WebP. The background remains static.
- A restrained vector energy ribbon flows from the middle toward the lower edge in pale gold and orange, adding direction without competing with the work or headline.
- Supporting hero panels remain static or move very slowly.
- Portfolio thumbnails do not autoplay.
- Thumbnail hover scales the image to roughly `1.02` over about `200ms` and strengthens the frame edge without adding a heavy shadow.
- Button hover changes fill and text color with a similarly short transition.
- Reduced-motion mode removes decorative movement and preserves content.

## 7. Content and Interaction Rules

- Keep the hero copy exactly as approved unless the user revises it.
- Display unique identifiers such as `01-01` on every portfolio item.
- Load GIF or WebP only after its corresponding button is activated.
- Modal close methods: close button, backdrop, and Escape. Clicking the media itself does not close it.
- Restore the previous scroll position after the modal closes.
- All pointer interactions receive matching keyboard focus treatment.

## 8. Approved Copy

### Hero

`JDART24 · GIF / WebP PORTFOLIO`

`상세페이지에 생동감을 더하다`

`고객의 시선을 자연스럽게 머물게 하는 움직이는 콘텐츠를 확인해 보세요.`

### Production Methods

`두 가지 방식으로 제작해 드립니다`

`1. 마음에 드는 디자인으로 제작`

`아래 작업물 중 마음에 드는 디자인 번호를 알려주세요.`

`고객님의 제품과 브랜드에 맞춰 문구와 컬러를 수정해 드립니다.`

`2. 기존 상세페이지에 모션 추가`

`현재 사용 중인 상세페이지의 디자인은 그대로 유지하고, 그래프·이미지·문구 등 원하는 요소에 모션을 더해 드립니다.`

### Contact

`작업 문의`

`마음에 드는 작업 번호와 함께 문의해 주세요.`

`카카오톡 jd2310`

`이메일 jdart2026@gmail.com`

## 9. Hero Comparison Direction

- **Option A — Gallery Light:** true-white canvas, protected dark text zone, dominant real work on the right, restrained warm light behind the media.
- **Option B — Studio Dark:** near-black hero surface, protected white text zone, three distinct real-work planes, and slow shader-driven studio light.
- Both options must use original JDART24 work during implementation. Generated concept imagery is compositional reference only.

