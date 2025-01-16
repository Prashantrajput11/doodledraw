// theme.js
import {MD3LightTheme} from 'react-native-paper';

export const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#FBC2C4', // Soft Pink
    secondary: '#F78E91', // Coral Pink (darker variant of primary)
    background: '#FFE4E6', // Light Pink (softer shade for backgrounds)
    surface: '#FFFFFF', // Neutral white for surfaces
    text: '#4A4A4A', // Dark Gray (for better contrast on pink tones)
    accent: '#FF7480', // Vivid Pink (for call-to-action buttons or highlights)
    muted: '#F4AAB3', // Muted Pink (for subtle elements or borders)
    success: '#D4F5DD', // Soft Mint Green (complimentary to pink)
    warning: '#FFE9B2', // Warm Yellow (for warnings or highlights)
    error: '#FF8B8E', // Bright Red-Pink (error or critical feedback)
    // You can add more overrides if needed
  },
};
