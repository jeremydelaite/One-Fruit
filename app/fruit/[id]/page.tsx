import { Suspense } from "react"
import { fetchFruitById, fetchAllFruits } from "@/lib/queries/fruits"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import FruitDetail from "@/components/fruits/FruitDetail"

type Props = {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const fruits = await fetchAllFruits()
  return fruits.map((f) => ({ id: f.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const fruit = await fetchFruitById(id)

  if (!fruit) return { title: "Fruit introuvable" }

  return {
    title: `${fruit.names.japanese} | One Fruit`,
    description: fruit.abilities.fr,
  }
}

export default async function FruitPage({ params }: Props) {
  const { id } = await params
  const fruit = await fetchFruitById(id)

  if (!fruit) notFound()

  return (
    <Suspense fallback={null}>
      <FruitDetail fruit={fruit} />
    </Suspense>
  )
}