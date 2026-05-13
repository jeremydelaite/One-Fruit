import { Suspense } from "react"
import { getFruitById, getAllFruits } from "@/lib/fruits"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import FruitDetail from "@/components/fruits/FruitDetail"

type Props = {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const fruits = getAllFruits()
  return fruits.map((f) => ({ id: f.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const fruit = getFruitById(id)

  if (!fruit) return { title: "Fruit introuvable" }

  return {
    title: `${fruit?.names.japanese} | One Fruit`,
    description: fruit.abilities.fr
  }
}

export default async function FruitPage({ params }: Props) {
  const { id } = await params
  const fruit = getFruitById(id)

  if (!fruit) notFound()

  // Suspense permet à Next.js de gérer le chargement de useSearchParams sans planter l'application.
  return (
    <Suspense fallback={null}>
      <FruitDetail fruit={fruit} />
    </Suspense>
  )
}