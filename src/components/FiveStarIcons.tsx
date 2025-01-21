import { FaStar } from "react-icons/fa6"

export default function FiveStarIcons() {
  return (
    <div className="flex items-center justify-center">
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
    </div>
  )
}

function StarIcon() {
  return (
    <div className="flex size-6 items-center justify-center">
      <FaStar size="0.875rem" className="text-light-salmon-500" />
    </div>
  )
}
