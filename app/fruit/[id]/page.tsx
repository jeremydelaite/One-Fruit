import { getFruitById, getAllFruits } from "@/lib/fruits"
import { notFound } from "next/navigation"
import FruitDetail from "@/components/fruits/FruitDetail"

type Props = {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const fruits = getAllFruits()
  return fruits.map((f) => ({ id: f.id }))
}

export default async function FruitPage({ params }: Props) {
  const { id } = await params
  const fruit = getFruitById(id)

  if (!fruit) notFound()

  return <FruitDetail fruit={fruit} />
}