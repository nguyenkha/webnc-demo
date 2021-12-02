import Link from 'next/link'

export default function About() {
  return (
    <div className="container">
      <h1>About</h1>
      <p>Demo Next.js của môn Phát triển ứng dụng Web nâng cao</p>
      <Link href="/">Quay về trang chủ</Link>
    </div>
  )
}