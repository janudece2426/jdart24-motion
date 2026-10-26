import { useEffect, useMemo, useRef, useState } from 'react'
import portfolio from './data/portfolio.generated.json'

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

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 8h9M9 4.5 12.5 8 9 11.5" />
    </svg>
  )
}

function HeroEnergyIllustration() {
  return (
    <svg
      className="hero-energy-illustration"
      viewBox="0 0 1600 800"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="energy-ribbon" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f2c57d" stopOpacity="0.14" />
          <stop offset="0.46" stopColor="#e9a23b" stopOpacity="0.42" />
          <stop offset="1" stopColor="#d96b00" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="energy-trace" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#d96b00" stopOpacity="0.1" />
          <stop offset="0.52" stopColor="#d96b00" stopOpacity="0.5" />
          <stop offset="1" stopColor="#efbd72" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        className="energy-ribbon energy-ribbon--wide"
        d="M-120 782 C132 780 340 700 520 560 C760 332 1018 326 1218 476 C1392 606 1510 704 1668 674"
        stroke="url(#energy-ribbon)"
      />
      <path
        className="energy-ribbon energy-ribbon--soft"
        d="M-100 812 C170 792 430 754 650 700 C850 548 1030 566 1192 640 C1358 716 1494 688 1648 544"
        stroke="url(#energy-ribbon)"
      />
      <path
        className="energy-trace"
        d="M-80 760 C150 748 370 684 548 606 C792 398 1010 414 1196 540 C1360 652 1494 720 1630 656"
        stroke="url(#energy-trace)"
      />
    </svg>
  )
}

function MotionStage({ items }) {
  const [left, center, right] = items

  return (
    <div className="motion-stage" aria-label="JDART24 대표 모션 작업물">
      <figure className="motion-card motion-card--left" aria-hidden="true">
        <img src={left.thumbnail} alt="" />
      </figure>
      <figure className="motion-card motion-card--center">
        <img src={center.webp} alt="숫자가 자연스럽게 움직이는 JDART24 모션 작업물" />
      </figure>
      <figure className="motion-card motion-card--right" aria-hidden="true">
        <img src={right.thumbnail} alt="" />
      </figure>
    </div>
  )
}

function Hero({ items }) {
  return (
    <header className="hero" id="top">
      <HeroEnergyIllustration />
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-label">{HERO_COPY.label}</p>
          <h1>
            <span className="hero-title-line">상세페이지에</span>
            <span className="hero-title-line hero-title-line--second">
              <span className="hero-title-accent">생동감</span>을 더하다
            </span>
          </h1>
          <p className="hero-description">
            {HERO_COPY.description.split('\n').map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
          <a className="hero-link" href="#portfolio">
            작업물 둘러보기
            <ArrowIcon />
          </a>
        </div>
        <MotionStage items={items} />
      </div>
    </header>
  )
}

function ServiceIntro() {
  return (
    <section className="service-section" aria-labelledby="service-title">
      <div className="section-shell service-layout">
        <div className="section-heading">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2 id="service-title">두 가지 방식으로<br />제작해 드립니다</h2>
        </div>

        <div className="service-list">
          <article className="service-item">
            <span className="service-number" aria-hidden="true">01</span>
            <div>
              <h3>마음에 드는 디자인으로 제작</h3>
              <p>아래 작업물 중 마음에 드는 디자인 번호를 알려주세요.</p>
              <p>고객님의 제품과 브랜드에 맞춰 문구와 컬러를 수정해 드립니다.</p>
            </div>
          </article>

          <article className="service-item">
            <span className="service-number" aria-hidden="true">02</span>
            <div>
              <h3>기존 상세페이지에 모션 추가</h3>
              <p>
                현재 사용 중인 상세페이지의 디자인은 그대로 유지하고,<br className="desktop-break" />
                그래프·이미지·문구 등 원하는 요소에 모션을 더해 드립니다.
              </p>
            </div>
          </article>

          <aside className="contact-panel" aria-labelledby="contact-panel-title">
            <div className="contact-panel-copy">
              <h3 id="contact-panel-title">작업 문의</h3>
              <p>마음에 드는 작업 번호와 함께 문의해 주세요.</p>
            </div>
            <dl className="contact-details">
              <div>
                <dt>카카오톡</dt>
                <dd>jd2310</dd>
              </div>
              <div>
                <dt>이메일</dt>
                <dd><a href="mailto:jdart2026@gmail.com">jdart2026@gmail.com</a></dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  )
}

function CategoryNav() {
  return (
    <nav className="category-nav" aria-label="작업물 카테고리 바로가기">
      <div className="category-nav-inner">
        {portfolio.categories.map((category) => (
          <a key={category.id} href={`#category-${category.id}`}>
            <span>{category.id}</span>
            {category.name}
          </a>
        ))}
      </div>
    </nav>
  )
}

function PortfolioCard({ item, categoryName, onOpen }) {
  return (
    <article className="portfolio-card">
      <div className="thumbnail-frame">
        <img
          src={item.thumbnail}
          alt={`${categoryName} 모션 디자인 ${item.id} 썸네일`}
          loading="lazy"
          decoding="async"
        />
        <span className="work-id">{item.id}</span>
      </div>
      <div className="card-actions" aria-label={`${item.id} 모션 형식 선택`}>
        <button type="button" onClick={() => onOpen(item, 'gif')} disabled={!item.gif}>
          GIF 보기
          <ArrowIcon />
        </button>
        <button type="button" onClick={() => onOpen(item, 'webp')} disabled={!item.webp}>
          WebP 보기
          <ArrowIcon />
        </button>
      </div>
    </article>
  )
}

function PortfolioSection({ onOpen }) {
  const totalItems = useMemo(
    () => portfolio.categories.reduce((sum, category) => sum + category.items.length, 0),
    [],
  )

  return (
    <section className="portfolio-section" id="portfolio" aria-labelledby="portfolio-title">
      <div className="section-shell portfolio-intro">
        <div>
          <p className="eyebrow">SELECTED WORK</p>
          <h2 id="portfolio-title">
            움직임을 직접<br className="portfolio-title-break" /> 확인해 보세요
          </h2>
        </div>
        <div className="portfolio-guide">
          <p>
            썸네일에서 마음에 드는 번호를 확인한 뒤<br />GIF 또는 WebP 버튼을 눌러 움직임을 볼 수 있습니다.
          </p>
          <aside className="format-note" aria-labelledby="format-note-title">
            <h3 id="format-note-title">파일 제공 형식 안내</h3>
            <p>기본 파일은 용량이 작고 색상 표현이 선명한 WebP 형식으로 제공됩니다.</p>
            <p>
              WebP를 지원하지 않는 사이트에서 사용하실 경우 말씀해 주세요.
              <br className="format-mobile-break" /> GIF 형식으로 제공해 드립니다.
            </p>
            <p className="format-caution">※ GIF는 WebP보다 파일 용량이 조금 크며, 색상 표현에 약간의 차이가 있을 수 있습니다.</p>
          </aside>
        </div>
        <span className="portfolio-count">{String(totalItems).padStart(2, '0')} WORKS</span>
      </div>

      <CategoryNav />

      <div className="section-shell categories">
        {portfolio.categories.map((category) => (
          <section
            className="category-section"
            id={`category-${category.id}`}
            key={category.id}
            aria-labelledby={`category-title-${category.id}`}
          >
            <div className="category-heading">
              <span>{category.id}</span>
              <h3 id={`category-title-${category.id}`}>{category.name}</h3>
              <p>{String(category.items.length).padStart(2, '0')} WORKS</p>
            </div>
            <div className="portfolio-grid">
              {category.items.map((item) => (
                <PortfolioCard
                  key={item.id}
                  item={item}
                  categoryName={category.name}
                  onOpen={onOpen}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}

function MediaModal({ selection, onClose }) {
  const closeButtonRef = useRef(null)
  const previousFocusRef = useRef(null)

  useEffect(() => {
    if (!selection) return undefined

    const scrollPosition = window.scrollY
    previousFocusRef.current = document.activeElement
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollPosition}px`
    document.body.style.width = '100%'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'Tab') {
        event.preventDefault()
        closeButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      window.scrollTo(0, scrollPosition)
      previousFocusRef.current?.focus()
    }
  }, [selection, onClose])

  if (!selection) return null

  const source = selection.item[selection.format]
  const formatLabel = selection.format === 'gif' ? 'GIF' : 'WebP'

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="media-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="modal-bar">
          <p id="modal-title"><strong>{selection.item.id}</strong><span>{formatLabel} PREVIEW</span></p>
          <button ref={closeButtonRef} type="button" className="modal-close" onClick={onClose} aria-label="미리보기 닫기">
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="m4 4 12 12M16 4 4 16" />
            </svg>
          </button>
        </div>
        <div className="modal-media">
          <img src={source} alt={`${selection.item.id} ${formatLabel} 모션 작업물`} />
        </div>
        <p className="modal-hint">바깥 영역을 클릭하거나 ESC 키를 누르면 닫힙니다.</p>
      </section>
    </div>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-inner">
        <div>
          <p>JDART24</p>
          <h2>브랜드에 맞는 움직임을<br />함께 만들어 보세요.</h2>
        </div>
        <div className="footer-meta">
          <div className="footer-contact" aria-label="JDART24 연락처">
            <span>카카오톡&nbsp; jd2310</span>
            <a href="mailto:jdart2026@gmail.com">jdart2026@gmail.com</a>
          </div>
          <a className="back-to-top" href="#top">맨 위로 <span aria-hidden="true">↑</span></a>
        </div>
      </div>
    </footer>
  )
}

export default function Site() {
  const [selection, setSelection] = useState(null)
  const heroItems = useMemo(
    () => [findPortfolioItem('08-01'), findPortfolioItem('03-01'), findPortfolioItem('02-07')],
    [],
  )

  if (heroItems.some((item) => !item)) {
    return <p className="error-message">상단 작업물을 불러오지 못했습니다.</p>
  }

  const openModal = (item, format) => setSelection({ item, format })

  return (
    <>
      <main>
        <Hero items={heroItems} />
        <ServiceIntro />
        <PortfolioSection onOpen={openModal} />
      </main>
      <Footer />
      <MediaModal selection={selection} onClose={() => setSelection(null)} />
    </>
  )
}
