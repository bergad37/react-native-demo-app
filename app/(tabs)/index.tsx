// import Button from '@/components/Button';
import Button from '@/components/Button';
import { ImageViewer } from '@/components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };
  return (
    <View style={myStyles.container}>
      <View style={myStyles.imageContainer}>
        <ImageViewer imgSource="https://res.cloudinary.com/ds04ivdrj/image/upload/v1756480983/cadeaux/WhatsApp_Image_2025-08-29_at_17.21.45_kusy0d.jpg"  selectedImage={selectedImage}/>
      </View>
      <View style={myStyles.footerContainer}>
        <Button
          theme="primary"
          label="Chose a photo"
          handlePress={pickImageAsync}
        />
        <Button
          label="Use this photo"
          handlePress={() => {
            alert('Use this picture');
          }}
        />
      </View>
    </View>
  );
}

export const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: { flex: 1, paddingTop: 28 },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center'
  },
  text: { margin: 4, color: '#fff' },
  button: {
    margin: 2,
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#ffff'
  }
});
