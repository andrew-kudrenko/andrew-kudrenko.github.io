import { useDispatch, useSelector } from "react-redux"
import { ETheme } from "../enums"
import { IState } from "../interfaces"
import { setTheme as setThemeAction } from '../redux/actions'

export const useTheme = () => {
  const { theme } = useSelector((state: IState) => state.theme)
  const dispatch = useDispatch()

  let themeAlias: string = 'bright_light'

  if (theme === ETheme.Dark) themeAlias = 'space_gray'

  const setTheme = () => {
    document.body.setAttribute('scheme', themeAlias)
  }

  const toggleTheme = () => {
    const choice = theme === ETheme.Light ? ETheme.Dark : ETheme.Light
    dispatch(setThemeAction(choice))
  }

  return { theme, setTheme, toggleTheme }
} 