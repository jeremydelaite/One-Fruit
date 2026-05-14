import { fetchAllFruits } from "@/lib/queries"
import HomeClient from "@/components/home/HomeClient"

export default async function Home() {
  const fruits = await fetchAllFruits()
  return <HomeClient initialFruits={fruits} />
}