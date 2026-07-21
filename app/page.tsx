import HomeClient from '@/components/HomeClient'
import { getAllPostMeta } from '@/lib/posts'

export default function Home() {
  return <HomeClient posts={getAllPostMeta()} />
}
