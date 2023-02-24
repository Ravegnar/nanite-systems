/**
 * GET CURRENT NUMBER OF DAY
 * ---
 */
export function getYear(): number {
  const todayDate = new Date()
  const year = todayDate.getFullYear()
  return year
}
