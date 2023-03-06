import React from 'react'

import { useTheme } from '../context/ThemeContext'

function Button() {
  const { theme, setTheme } = useTheme()


  const onClickTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <div>
      Active  Theme : {theme}
      <br></br>
      <button onClick={onClickTheme}>Change</button>
    </div>
  )
}

export default Button
