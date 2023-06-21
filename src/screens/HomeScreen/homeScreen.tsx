import {ScrollView, Text, TouchableOpacity} from 'react-native'
import * as React from 'react'
import {films} from '../../items'
import {AllFilms} from '../../components'
import {BaseView, RawView} from 'theme'
import Animated from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/FontAwesome'
import {MutableRefObject, useRef} from 'react'

type ScrollContext = {
  scrollRef: MutableRefObject<ScrollView | null> | null
  activeIndex: MutableRefObject<number> | null
}
export const MainScrollContext = React.createContext<ScrollContext>({
  scrollRef: null,
  activeIndex: null,
})

export const HomeScreen = () => {
  const scrollRef = useRef<any>(null)
  const activeIndex = useRef(0)
  return (
    <BaseView
      backgroundColor={'white'}
      style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      <RawView
        style={{
          width: 40,
          height: '100%',
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: 10,
          paddingTop: 20,
        }}>
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
          <Text
            style={{
              padding: 20,
              fontSize: 20,
              color: 'black',
            }}>
            Home Screen
          </Text>
          <AllFilms
            films={films}
            key={'33sas'}
            isFirstOnScreen
            scrollPosition={0}
          />
          <Text
            style={{
              fontSize: 20,
              padding: 20,
              color: 'black',
            }}>
            Evening
          </Text>
          <AllFilms films={films} key={'33see'} scrollPosition={1} />
          <Text
            style={{
              fontSize: 20,
              padding: 20,
              color: 'black',
            }}>
            Night
          </Text>
          <AllFilms films={films} key={'12see'} scrollPosition={2} />
        </MainScrollContext.Provider>
      </Animated.ScrollView>
    </BaseView>
  )
}
