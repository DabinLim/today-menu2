import React, {ReactNode} from 'react';
import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface SafeContainerProps {
  children: ReactNode;
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  type?: 'keyboard-scroll' | 'keyboard' | 'scroll' | 'plain';
  enableAutomaticScroll?: boolean;
  setRef?: (ref: KeyboardAwareScrollView | ScrollView | null) => void;
}

const SafeContainer = ({
  children,
  backgroundColor = '#ffffff',
  style,
  contentContainerStyle,
  type = 'plain',
  enableAutomaticScroll = true,
  setRef,
}: SafeContainerProps) => {
  const keyboardDismiss = () => {
    Keyboard.dismiss();
  };
  switch (type) {
    case 'keyboard':
      return (
        <SafeAreaView style={[style, {backgroundColor}, styles.flex]}>
          <TouchableWithoutFeedback
            style={styles.flex}
            onPress={keyboardDismiss}>
            <View style={styles.flex}>{children}</View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      );
    case 'keyboard-scroll':
      return (
        <SafeAreaView style={[style, {backgroundColor}, styles.flex]}>
          <KeyboardAwareScrollView
            keyboardShouldPersistTaps="handled"
            enableAutomaticScroll={enableAutomaticScroll}
            keyboardOpeningTime={0}
            contentContainerStyle={contentContainerStyle}
            ref={ref => (setRef ? setRef(ref) : null)}>
            {children}
          </KeyboardAwareScrollView>
        </SafeAreaView>
      );
    case 'scroll':
      return (
        <SafeAreaView style={[style, {backgroundColor}, styles.flex]}>
          <ScrollView
            contentContainerStyle={contentContainerStyle}
            ref={ref => (setRef ? setRef(ref) : null)}>
            {children}
          </ScrollView>
        </SafeAreaView>
      );
    case 'plain':
      return (
        <SafeAreaView style={[style, {backgroundColor}, styles.flex]}>
          {children}
        </SafeAreaView>
      );
  }
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default SafeContainer;
