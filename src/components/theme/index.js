const baseTheme = {
  fonts: {
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
  },
};

const lightTheme = {
  ...baseTheme,
  colors: {
    background: '#C3BCBA',
    heading: '#000',
    text: '#3B454E',
    preFormattedText: 'rgb(245, 247, 249)',
    link: '#9E1691',
  },
};

const darkTheme = {
  ...baseTheme,
  colors: {
    background: '#333130',
    heading: '#fff',
    text: '#fff',
    preFormattedText: '#000',
    link: '#9E1691',
  },
};

export { lightTheme, darkTheme };
