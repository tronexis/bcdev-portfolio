import ThemeToggle from "@/components/theme/ThemeToggle"
import { getScopedI18n } from "@/locales/server"


export default async function LocalePage() {
  const profileT = await getScopedI18n('profile')

  return (
    <>
      <div className="dark:text-red-400 text-blue-400">{profileT('name')}</div>
      <ThemeToggle />
    </>
  )
}