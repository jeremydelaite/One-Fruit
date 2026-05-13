import { supabase } from "@/lib/supabase"
import type { DevilFruit } from "@/types/fruit"
import type { FruitRow, FruitUserRow } from "@/lib/types/supabase"
import { mapFruitRow, mapUserRow } from "./mappers"

export async function fetchAllFruits(): Promise<DevilFruit[]> {
    const { data: fruitsData, error: fruitsError } = await supabase
        .from("fruits")
        .select("*")
        .order("first_appearance_chapter", { ascending: true })

    if (fruitsError || !fruitsData) {
        console.error(fruitsError)
        return []
    }

    const { data: usersData, error: usersError } = await supabase
        .from("fruit_users")
        .select("*")

    if (usersError || !usersData) {
        console.error(usersError)
        return []
    }

    return (fruitsData as FruitRow[]).map((f) => {
        const users = (usersData as FruitUserRow[])
            .filter((u) => u.fruit_id === f.id)
            .map(mapUserRow)
        return mapFruitRow(f, users)
    })
}

export async function fetchFruitById(id: string): Promise<DevilFruit | null> {
    const { data: f, error } = await supabase
        .from("fruits")
        .select("*")
        .eq("id", id)
        .single()

    if (error || !f) return null

    const { data: usersData } = await supabase
        .from("fruit_users")
        .select("*")
        .eq("fruit_id", id)

    const users = ((usersData ?? []) as FruitUserRow[]).map(mapUserRow)

    return mapFruitRow(f as FruitRow, users)
}