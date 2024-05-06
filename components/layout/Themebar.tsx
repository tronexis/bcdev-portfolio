import ThemeToggle from "../theme/ThemeToggle"

const Themebar = () => {
  return (
    <div className="absolute right-4 md:right-8 top-4 z-20">
      <ThemeToggle />
    </div>
  )
}

export default Themebar