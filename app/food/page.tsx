import type { Metadata } from "next"
import { PageHeader } from "@/components/shared/page-header"
// import { FoodShowcase } from "@/components/food/food-showcase"
// import { FoodRecipes } from "@/components/food/food-recipes"
// import { FoodSpices } from "@/components/food/food-spices"
// import { FoodCTA } from "@/components/food/food-cta"

export const metadata: Metadata = {
  title: "Rohingya Food",
  description:
    "Explore the rich culinary traditions of the Rohingya people - from aromatic rice dishes and spiced curries to beloved street snacks and sweets.",
}

export default function FoodPage() {
  return (
    <>
      <PageHeader
        badge="Culinary Heritage"
        title="Rohingya Food & Cuisine"
        subtitle="The flavors of Arakan live on through generations of cooks who carry recipes in their hearts across borders and oceans."
      />
      {/* <FoodShowcase />
      <FoodRecipes />
      <FoodSpices />
      <FoodCTA /> */}
    </>
  )
}
