import { fetchAllFruits } from "@/lib/queries/fruits"
import HomeClient from "@/app/HomeClient"

export default async function Home() {
  const fruits = await fetchAllFruits()
  return <HomeClient initialFruits={fruits} />
}