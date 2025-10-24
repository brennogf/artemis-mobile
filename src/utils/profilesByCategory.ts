import { Profiles } from "@/src/types/models";

export function profilesByCategory(
  profiles: Profiles[]
): Record<string, Profiles[]> {
  const grouped: Record<string, Profiles[]> = {};
  for (const profile of profiles) {
    const categoryName = profile.Category.Name;
    if (!grouped[categoryName]) {
      grouped[categoryName] = [];
    }
    grouped[categoryName].push(profile);
  }
  return grouped;
}
