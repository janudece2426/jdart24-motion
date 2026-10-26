import { lazy, Suspense, useMemo, useState } from 'react'
import portfolio from './data/portfolio.generated.json'

const HeroLight = lazy(() =>
  import('./components/HeroLight').then((module) => ({ default: module.HeroLight })),
)

const HERO_COPY = {
  label: 'JDART24 · GIF / WebP PORTFOLIO',
  title: '상세페이지에 생동감을 더하다',
  description: '고객의 시선을 자연스럽게 머물게 하는\n움직이는 콘텐츠를 확인해 보세요.',
}

function findPortfolioItem(id) {
  for (const category of portfolio.categories) {
    const item = category.items.find((candidate) => candidate.id === id)
    if (item) return item
  }
  return null
}

function HeroCopy() {
  return (
    <div className="hero-copy">
      <p className="hero-label">{HERO_COPY.label}</p>
      <h1>{HERO_COPY.title}</h1>
      <p className="hero-description">
        {HERO_COPY.description.split('\n').map((line) => (
          <span key={line}>{line}</span>
        ))}
      </p>
    </div>
  )
}

function LightEffect({ variant }) {
  return (
    <Suspense fallback={<div className={`hero-light hero-light--${variant} is-fallback`} aria-hidden="true" />}>
      <HeroLight variant={variant} />
    </Suspense>
  )
}

function MotionStage({ items, dark = false }) {
  const [left, center, right] = items

  return (
    <div className={`motion-stage${dark ? ' motion-stage--dark' : ''}`} aria-label="JDART24 대표 모션 작업물">
      <LightEffect variant={dark ? 'dark' : 'light'} />
      <figure className="motion-card motion-card--left" aria-hidden="true">
        <img src={left.thumbnail} alt="" />
      </figure>
      <figure className="motion-card motion-card--center">
        <img src={center.webp} alt="누적 판매량 숫자가 움직이는 JDART24 모션 작업물" />
      </figure>
      <figure className="motion-card motion-card--right" aria-hidden="true">
        <img src={right.thumbnail} alt="" />
      </figure>
    </div>
  )
}

function LightHero({ items }) {
  return (
    <section className="hero hero--light" aria-label="시안 A: 밝은 갤러리형 상단">
      <div className="hero-inner">
        <HeroCopy />
        <MotionStage items={items} />
      </div>
    </section>
  )
}

function DarkHero({ items }) {
  return (
    <section className="hero hero--dark" aria-label="시안 B: 어두운 스튜디오형 상단">
      <LightEffect variant="dark" />
      <div className="hero-dark-shield" aria-hidden="true" />
      <div className="hero-inner">
        <HeroCopy />
        <MotionStage items={items} dark />
      </div>
    </section>
  )
}

export default function App() {
  const [variant, setVariant] = useState('light')
  const heroItems = useMemo(
    () => [findPortfolioItem('08-01'), findPortfolioItem('03-01'), findPortfolioItem('02-07')],
    [],
  )

  if (heroItems.some((item) => !item)) {
    return <p className="error-message">상단 작업물을 불러오지 못했습니다.</p>
  }

  return (
    <main>
      {variant === 'light' ? <LightHero items={heroItems} /> : <DarkHero items={heroItems} />}

      <div className="preview-switcher" role="group" aria-label="상단 디자인 시안 선택">
        <span>상단 시안 비교</span>
        <button
          type="button"
          className={variant === 'light' ? 'is-active' : ''}
          aria-pressed={variant === 'light'}
          onClick={() => setVariant('light')}
        >
          A · 밝은 갤러리
        </button>
        <button
          type="button"
          className={variant === 'dark' ? 'is-active' : ''}
          aria-pressed={variant === 'dark'}
          onClick={() => setVariant('dark')}
        >
          B · 어두운 스튜디오
        </button>
      </div>
    </main>
  )
}

