import { StyleSheet } from 'react-native';
import Colors from './colors';

const channelSelectorStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  channelPicker: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    height: 52,
    width: '100%',
  },
  channelPickerItem: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
  },
  bidRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
  },
  balance: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 24,
  },
  balanceText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    marginLeft: 4,
  },
  channelNameInput: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    paddingLeft: 20,
  },
  bidAmountInput: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    marginLeft: 16,
    textAlign: 'right',
    width: 80,
  },
  helpText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
  },
  createChannelContainer: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
  },
  channelAt: {
    position: 'absolute',
    left: 4,
    top: 13,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
  },
  buttonContainer: {
    flex: 1,
    marginTop: 16,
    justifyContent: 'flex-end',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  cancelLink: {
    marginRight: 16,
  },
  createButton: {
    backgroundColor: Colors.NextLbryGreen,
  },
  inlineError: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: Colors.Red,
    marginTop: 2,
  },
});

export default channelSelectorStyle;
