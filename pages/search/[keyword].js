import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Search({ giphys }) {
  const [inputs, setInputs] = useState({});
  const router = useRouter();

  const search = async (event) => {
    event.preventDefault()
    router.push(`/search/${inputs.keyword}`);
  }

  const handleInputs = (event) => {
    const { name, value } = event.target
    setInputs({ ...inputs, [name]: value })
  }

  return (
    <div className="container">
      <Head>
        <title>Web nâng cao demo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Giphy search</h1>
      <form onSubmit={search}>
        <div className="mb-3">
          <label htmlFor="keyword" className="form-label">Từ khóa</label>
          <input onChange={handleInputs} type="text" className="form-control" id="keyword" name="keyword" />
        </div>
        <button type="submit" className="btn btn-primary">Tìm kiếm</button>
      </form>
      <Link href="/">Quay về trang chủ</Link>
      <h1>Kết quả</h1>
      {giphys.map((giphy) => {
        return (
          <div key={giphy.id}>
            <h3>{giphy.title}</h3>
            <img src={giphy.images.original.url} alt={giphy.title} />
          </div>
        )
      })}
    </div>
  )
}

export async function getServerSideProps({ query }) {
  const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=HkQws7cfJUWuNlWSYhOlhBE5tAozyxny&q=${query.keyword}&limit=5&offset=0&rating=g&lang=en`);
  const { data: giphys } = await res.json();
  return {
    props: { giphys }
  }
}