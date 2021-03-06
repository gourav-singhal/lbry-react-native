import { StyleSheet } from 'react-native';
import Colors from './colors';

const settingsStyle = StyleSheet.create({
  container: {
    backgroundColor: Colors.PageBackground,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
  scrollContainer: {
    padding: 16,
  },
  row: {
    marginBottom: 24,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  switchText: {
    width: '70%',
    justifyContent: 'center',
  },
  switchContainer: {
    width: '25%',
    justifyContent: 'center',
  },
  pickerText: {
    width: '40%',
  },
  pickerContainer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  label: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    lineHeight: 18,
  },
  description: {
    color: '#aaaaaa',
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    lineHeight: 18,
  },
  sectionTitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 20,
    marginBottom: 4,
  },
  sectionDescription: {
    color: '#aaaaaa',
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 8,
  },
  sectionDivider: {
    marginTop: 24,
  },
  languagePicker: {
    width: '85%',
  },
  languagePickerItem: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
  },
  pickerRow: {
    marginBottom: 24,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default settingsStyle;
