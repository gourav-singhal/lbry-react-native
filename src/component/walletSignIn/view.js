import React from 'react';
import { Linking, NativeModules, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Button from 'component/button';
import Constants from 'constants'; // eslint-disable-line node/no-deprecated-api
import Link from 'component/link';
import Colors from 'styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import walletStyle from 'styles/wallet';

class WalletSignIn extends React.Component {
  onContinuePressed = () => {
    const { navigation, setClientSetting } = this.props;
    setClientSetting(Constants.SETTING_ALPHA_UNDERSTANDS_RISKS, true);
  };

  onSignInPressed = () => {
    const { navigation } = this.props;
    navigation.navigate({
      routeName: 'Verification',
      key: 'verification',
      params: { syncFlow: true, signInFlow: true },
    });
  };

  render() {
    const { navigation, user } = this.props;

    return (
      <View style={walletStyle.signInContainer}>
        <View style={walletStyle.signInSummaryRow}>
          <Text style={walletStyle.signInTitle}>{__('Account Recommended')}</Text>
        </View>

        <View style={walletStyle.onboarding}>
          <Text style={walletStyle.onboardingText}>
            {__('A lbry.tv account allows you to earn rewards, backup your wallet, and keep everything in sync.')}
            {'\n\n'}
            {__('Without an account, you assume all responsibility for securing your wallet and LBRY data.')}
          </Text>
        </View>

        <View style={walletStyle.buttonRow}>
          <Link style={walletStyle.continueLink} text={__('Skip Account')} onPress={this.onContinuePressed} />
          <Button
            style={walletStyle.signInButton}
            theme={'light'}
            text={__('Sign Up')}
            onPress={this.onSignInPressed}
          />
        </View>
      </View>
    );
  }
}

export default WalletSignIn;
