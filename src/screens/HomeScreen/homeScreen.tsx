import {TouchableOpacity} from 'react-native'
import * as React from 'react'
import Animated from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/FontAwesome'
import {BaseView, RawView, Title} from 'theme'
import {MutableRefObject, useRef} from 'react'

import {films} from '../../items'
import {AllFilms} from '../../components'

type ScrollContext = {
  scrollRef: React.RefObject<Animated.ScrollView> | null
  activeIndex: MutableRefObject<number> | null
}
export const MainScrollContext = React.createContext<ScrollContext>({
  scrollRef: null,
  activeIndex: null,
})

export const HomeScreen = () => {
  const scrollRef = useRef(null)
  const activeIndex = useRef(0)
  return (
    <BaseView backgroundColor={'white'} flex={1} flexDirection={'row'}>
      <RawView>
        <TouchableOpacity>
          <Icon name="rocket" size={30} color="#900" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="home" size={30} color="#900" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="star" size={30} color="#900" />
        </TouchableOpacity>
      </RawView>
      <Animated.ScrollView ref={scrollRef} scrollEnabled={false}>
        <MainScrollContext.Provider value={{scrollRef, activeIndex}}>
          <Title>Home Screen</Title>
          <AllFilms films={films} isFirstOnScreen scrollPosition={0} />
          <Title>Evening</Title>
          <AllFilms films={films} scrollPosition={1} />
          <Title>Night</Title>
          <AllFilms films={films} scrollPosition={2} />
        </MainScrollContext.Provider>
      </Animated.ScrollView>
    </BaseView>
  )
}
