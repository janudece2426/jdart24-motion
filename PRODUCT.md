# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React + Vite. Public production deployment will use Vercel.

## Users

- Primary users are Korean ecommerce sellers and brand owners arriving from Kmong.
- They need to judge motion-design quality quickly and identify an example they want customized.

## Product Purpose

JDART24 presents GIF and WebP motion work for ecommerce detail pages. Visitors browse static thumbnails, open the corresponding animated result, and communicate the design identifier when requesting work.

## Positioning

The portfolio proves the service through real, selectable motion examples rather than generic promises. JDART24 can either customize a chosen example or add motion directly to an existing detail-page design.

## Operating Context

- Visitors browse the public site on desktop and mobile.
- The owner manages portfolio assets locally in category folders.
- Each portfolio item consists of a thumbnail, GIF, and WebP file.
- New or replaced assets are collected automatically during the build and become public after redeployment.

## Capabilities and Constraints

- Show all categories vertically on one page.
- Use unique public identifiers in `category-item` form such as `01-01`.
- Provide separate `GIF 보기` and `WebP 보기` actions.
- Open motion files in an accessible same-page modal.
- Close the modal with its close button, backdrop click, or Escape, then restore the visitor's scroll position.
- Load animated files only when requested because some source files are large.
- Support responsive desktop, tablet, and mobile layouts.
- Respect reduced-motion preferences.
- Show the KakaoTalk ID and email near the production methods and repeat them in the footer.

## Brand Commitments

- Brand name: JDART24.
- Korean copy should be direct, concise, and natural.
- The interface should feel professional and minimal while letting portfolio work supply most of the color.
- The hero copy must remain clearly legible regardless of background motion.

## Evidence on Hand

- Portfolio assets: `Gif Portfolio/`
- Rough structural reference: `design sample.png`
- Editable structural source: `design sample.psd`
- Gallery design reference: `DESIGN-mobbin.md`
- Real work includes twelve categories and sixty-two portfolio items.
- No customer claims, testimonials, pricing, or performance metrics have been supplied and none should be invented.
- Contact: KakaoTalk `jd2310`, email `jdart2026@gmail.com`.

## Product Principles

1. Show the work before explaining it.
2. Keep motion purposeful and keep copy stable.
3. Make every portfolio choice easy to identify and request.
4. Keep asset maintenance simple for the owner.
5. Preserve fast loading by loading animations on demand.

