import React, {FC, useState} from 'react'
import {TVFocusGuideView} from 'react-native'

type Props = {
  children: React.ReactNode
  isFirstOnScreen: boolean
}

export const FocusManagementContext = React.createContext({
  isFirstOnScreen: false,
  trapLeft: false,
  setTrapLeft: (_: boolean) => {},
})

export const FocusHolder: FC<Props> = ({children, isFirstOnScreen}) => {
  const [trapLeft, setTrapLeft] = useState(false)
  return (
    <TVFocusGuideView
      hasTVPreferredFocus={isFirstOnScreen}
      trapFocusUp={isFirstOnScreen}
      trapFocusRight={true}
      trapFocusLeft={trapLeft}
      autoFocus={true}>
      <FocusManagementContext.Provider
        value={{trapLeft, setTrapLeft, isFirstOnScreen}}>
        {children}
      </FocusManagementContext.Provider>
    </TVFocusGuideView>
  )
}
