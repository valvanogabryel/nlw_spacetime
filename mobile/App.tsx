import { StatusBar } from 'expo-status-bar';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

import {
  BaiJamjuree_700Bold
} from '@expo-google-fonts/bai-jamjuree';

import bgBlur from './src/assets/bg-blur.png';
import Stripes from './src/assets/stripes.svg';
import NLWLogo from './src/assets/nlw-spacetime-logo.svg';

import { styled } from 'nativewind';

const StyledStripes = styled(Stripes);

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold
  });

  if (!hasLoadedFonts) return null;

  return (
    <ImageBackground
      className='flex-1 items-center relative bg-gray-900 px-8 py-10'
      source={bgBlur}
      imageStyle={{
        position: 'absolute',
        left: '-100%'
      }}
    >
      <StyledStripes className='absolute left-2' />

      <View className='flex-1 items-center justify-center gap-6'>
        <NLWLogo />
        <View className='space-y-2'>
          <Text className='font-title text-center text-2xl text-gray-50 leading-tight'>Sua cápsula do tempo</Text>
          <Text className='text-center font-body leading-relaxed text-base text-gray-100'>Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</Text>
        </View>

        <TouchableOpacity
          className='rounded-full bg-green-500 px-5 py-2'
          activeOpacity={0.7}
        >
          <Text className='font-alt uppercase text-sm text-black'>Cadastrar lembrança</Text>
        </TouchableOpacity>
      </View>

      <Text className='font-body text-center text-sm text-gray-200 leading-relaxed'>
        Feito com 💜 no NLW da Rocketseat
      </Text>

      <StatusBar style='auto' translucent />
    </ImageBackground>
  );
}
