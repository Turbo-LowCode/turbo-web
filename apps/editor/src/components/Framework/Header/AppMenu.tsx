import { TurboRemixIcon } from '@turbo/icons'

export const AppMenu = () => {
  return (
    <div className="flex justify-center items-center cursor-pointer">
      <TurboRemixIcon
        className="text-xl transition-[color] duration-700 hover:text-[#1677FF]"
        type="icon-apps-2-line"
      />
    </div>
  )
}
