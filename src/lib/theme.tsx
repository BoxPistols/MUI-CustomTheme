import { ThemeOptions, createTheme } from '@mui/material/styles'
import type { CSSProperties } from 'react'
import type { TypographyStyleOptions } from '@mui/material/styles/createTypography'
import { colorData } from './colorToken'
import '@mui/lab/themeAugmentation'

// ----- DataGrid -----
declare module '@mui/material/styles' {
  interface Components {
    MuiDataGrid?: {
      styleOverrides?: {
        root?: {
          border: 'none'
          '& .MuiDataGrid-cell': {
            borderBottom: 'none'
          }
          '& .MuiDataGrid-columnHeaderTitleContainer': {
            borderBottom: 'none'
            backgroundColor: string
            borderRight: string
          }
          '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: number
            color: string
          }
          // focus
          '& .MuiDataGrid-columnHeader': {
            backgroundColor: string
            color: string
            '&:focus': {
              outline: 'none'
            }
          }
          '& .MuiDataGrid-columnHeader:focus-within': {
            outline: 'none'
          }
          '& .MuiDataGrid-row': {
            backgroundColor: string
            color: string
          }
          '& .MuiDataGrid-cell:focus-within': {
            outline: 'none'
          }
          '& .MuiDataGrid-cell:focus-within .MuiDataGrid-cell:focus-within': {
            outline: 'none'
          }
          '& .MuiDataGrid-cell:focus-within .MuiDataGrid-cell:focus-within .MuiDataGrid-cell:focus-within': {
            outline: 'none'
          }
        }
      }
    }
  }
}

export const breakpoints = {
  values: {
    xs: 0,
    sm: 480,
    md: 768,
    lg: 1280,
    xl: 1536,
    xxl: 1920,
  },
}

declare module '@mui/material/styles' {
  // type PaletteColorOptions = ExtendedPaletteColor;
  interface PaletteColor {
    lighter?: string
  }
  interface SimplePaletteColorOptions {
    lighter?: string
  }
  // 独自カラー
  interface Palette {
    // background utility
    surfaceBackground: string
    surfaceBackgroundDark: string
    surfaceBackgroundDisabled: string
    // icon
    iconWhite: string
    iconLight: string
    iconDark: string
    iconAction: string
    iconDisabled: string
  }

  interface PaletteOptions {
    // background utility
    surfaceBackground: string
    surfaceBackgroundDark: string
    surfaceBackgroundDisabled: string
    // icon
    iconWhite: string
    iconLight: string
    iconDark: string
    iconAction: string
    iconDisabled: string
  }
}

// ===== Typography =====
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    display1: true
    display2: true
  }
}

declare module '@mui/material/styles' {
  interface Typography {
    // xxxl?: TypographyStyleOptions | CSSProperties;
    xxl?: TypographyStyleOptions | CSSProperties
    xl?: TypographyStyleOptions | CSSProperties
    lg?: TypographyStyleOptions | CSSProperties
    ml?: TypographyStyleOptions | CSSProperties
    md?: TypographyStyleOptions | CSSProperties
    sm?: TypographyStyleOptions | CSSProperties
    xs?: TypographyStyleOptions | CSSProperties
    xxs?: TypographyStyleOptions | CSSProperties
    xxxs?: TypographyStyleOptions | CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    // xxxl: true; // 24
    xxl: true // 22
    xl: true // 20
    lg: true // 18
    ml: true // 16
    md: true // 14
    sm: true // 13
    xs: true // 12
    xxs: true // 11
    xxxs: true // 10
  }
}

// ブラウザのdefaultは16pxだが14pxにオーバーライドする事で全体にコンパクトに収めたプロダクトに合わせる事が出来る
const baseFontSize = 14

// convert px to rem
const pxToRem = (px: number) => {
  const remValue = (px / baseFontSize).toFixed(2)
  return `${Number.parseFloat(remValue)}rem`
}

// md = 1rem = という抽象化された値を使うことで、拡大表示などアクセシビリティの向上と実装の簡素化を図る
const fontSizesVariant = {
  // xxxl: pxToRem(24), // About 1.71remもし必要ならばOpen
  xxl: pxToRem(22), // About -> 1.57rem
  xl: pxToRem(20), // About -> 1.43rem
  lg: pxToRem(18), // About -> 1.29rem
  ml: pxToRem(16), // About -> 1.14rem
  md: pxToRem(14), // 1rem
  sm: pxToRem(13), // About -> 0.93rem
  xs: pxToRem(12), // About -> 0.86rem
  xxs: pxToRem(11), // About -> 0.79rem
  xxxs: pxToRem(10), // About -> 0.71rem
}

// fontWeightのバリエーション
const fontWeight = {
  bold: 700,
  // medium: 500, ミディアムは、ブラウザーによっては正しく表示されないことがあるため、一旦使用しない
  normal: 400,
}

// lineHeightのバリエーション
const lineHeight = {
  large: 1.8,
  medium: 1.6,
  small: 1.4,
}

// heading共通スタイル
const heading = {
  fontWeight: fontWeight.bold,
  lineHeight: lineHeight.small,
}

export const theme = createTheme(
  {
    // ===== BreakPoint =====
    // default: lg
    breakpoints: {
      values: {
        xs: breakpoints.values.xs,
        sm: breakpoints.values.sm,
        md: breakpoints.values.md,
        lg: breakpoints.values.lg,
        xl: breakpoints.values.xl,
      },
    },

    // ----- Color Palette -----
    palette: {
      primary: {
        main: colorData.primary.main,
        lighter: colorData.primary.lighter,
        dark: colorData.primary.dark,
        light: colorData.primary.light,
      },
      secondary: {
        main: colorData.secondary.main,
        lighter: colorData.secondary.lighter,
        dark: colorData.secondary.dark,
        light: colorData.secondary.light,
      },
      success: {
        main: colorData.success.main,
        lighter: colorData.success.lighter,
        dark: colorData.success.dark,
        light: colorData.success.light,
      },
      info: {
        main: colorData.info.main,
        lighter: colorData.info.lighter,
        dark: colorData.info.dark,
        light: colorData.info.light,
      },
      warning: {
        main: colorData.warning.main,
        lighter: colorData.warning.lighter,
        dark: colorData.warning.dark,
        light: colorData.warning.light,
      },
      error: {
        main: colorData.error.main,
        lighter: colorData.error.lighter,
        dark: colorData.error.dark,
        light: colorData.error.light,
      },
      text: {
        primary: colorData.text.primary,
        secondary: colorData.text.secondary,
        disabled: colorData.text.disabled,
      },

      divider: colorData.divider,

      background: {
        default: colorData.background.default,
        paper: colorData.background.paper,
      },

      grey: {
        50: colorData.grey[50],
        100: colorData.grey[100],
        200: colorData.grey[200],
        300: colorData.grey[300],
        400: colorData.grey[400],
        500: colorData.grey[500],
        600: colorData.grey[600],
        700: colorData.grey[700],
        800: colorData.grey[800],
        900: colorData.grey[900],
      },

      // 独自カラー (surface)
      surfaceBackground: colorData.surface.background,
      surfaceBackgroundDark: colorData.surface.backgroundDark,
      surfaceBackgroundDisabled: colorData.surface.backgroundDisabled,
      // icon color
      iconWhite: colorData.icon.white,
      iconLight: colorData.icon.light,
      iconDark: colorData.icon.dark,
      iconAction: colorData.icon.action,
      iconDisabled: colorData.icon.disabled,
    },

    // ----- Start Typography -----
    typography: {
      htmlFontSize: baseFontSize,
      fontSize: baseFontSize,

      allVariants: {
        fontFamily:
          'Futura, Inter, Noto Sans JP, Helvetica, Arial, BIZ UDPゴシック, sans-serif',
        // fontFamily: "Futura", "Helvetica Neue", "Inter", -apple-system, BlinkMacSystemFont...
        color: colorData.text.primary,
        lineHeight: lineHeight.medium,
        fontWeight: fontWeight.normal,
        textTransform: 'inherit',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'antialiased',
        fontSize: pxToRem(baseFontSize),
      },
      h1: {
        fontSize: fontSizesVariant.xxl, // 1.57rem = 22px
        ...heading,
      },
      h2: {
        fontSize: fontSizesVariant.xl, // 1.43rem = 20px
        ...heading,
      },
      h3: {
        fontSize: fontSizesVariant.lg, // 1.29rem = 18px
        ...heading,
      },
      h4: {
        fontSize: fontSizesVariant.ml, // 1.14rem = 16px
        ...heading,
      },
      h5: {
        fontSize: fontSizesVariant.md, // 1rem = 14px
        ...heading,
      },
      h6: {
        fontSize: fontSizesVariant.sm, // 0.93rem = 13px
        ...heading,
      },
      body1: {
        fontSize: fontSizesVariant.md, // 1rem = 14px
        lineHeight: lineHeight.medium,
      },
      body2: {
        fontSize: fontSizesVariant.sm, // 0.93rem = 13px
        lineHeight: lineHeight.medium,
      },
      subtitle1: {
        fontSize: fontSizesVariant.sm, // 0.93rem = 13px
        lineHeight: lineHeight.small,
      },
      subtitle2: {
        fontSize: fontSizesVariant.xs, // 0.86rem = 12px
        lineHeight: lineHeight.small,
      },
      caption: {
        fontSize: fontSizesVariant.xs, // 0.86rem = 12px
        lineHeight: lineHeight.small,
      },
      overline: {
        fontSize: fontSizesVariant.xxs, // 0.79rem = 11px
        lineHeight: lineHeight.small,
        textTransform: 'none',
      },
      button: {
        fontSize: fontSizesVariant.md, // 1rem = 14px
        fontWeight: fontWeight.normal,
        lineHeight: lineHeight.medium,
        textTransform: 'none',
      },
      // 拡張追加されたvariantのスタイル
      // @ts-ignore
      xxl: {
        fontSize: fontSizesVariant.xxl, // 1.571rem = 22px
        ...heading,
      },
      xl: {
        fontSize: fontSizesVariant.xl, // 1.429rem = 20px
        ...heading,
      },
      lg: {
        fontSize: fontSizesVariant.lg, // 1.286rem = 18px
        ...heading,
      },
      ml: {
        fontSize: fontSizesVariant.ml,
        lineHeight: lineHeight.small, // 1.143rem = 16px
      },
      md: {
        fontSize: fontSizesVariant.md,
        lineHeight: lineHeight.small, // 1rem = 14px
      },
      sm: {
        fontSize: fontSizesVariant.sm,
        lineHeight: lineHeight.small, // 0.929rem = 13px
      },
      xs: {
        fontSize: fontSizesVariant.xs,
        lineHeight: lineHeight.small, // 0.857rem = 12px
      },
      xxs: {
        fontSize: fontSizesVariant.xxs,
        lineHeight: lineHeight.small, // 0.786rem = 11px
      },
      xxxs: {
        fontSize: fontSizesVariant.xxxs,
        lineHeight: lineHeight.small, // 0.714rem = 10px
      },
    },
    // ----- components -----

    components: {
      // 全体のスタイル
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: colorData.background.default,
            color: colorData.text.primary,
          },
        },
      },
      // MuiTypographyスタイル
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            h1: 'h1',
            h2: 'div',
            h3: 'div',
            h4: 'div',
            h5: 'div',
            h6: 'div',
            body1: 'p',
            body2: 'p',
            subtitle1: 'p',
            subtitle2: 'p',
            overline: 'span',
            caption: 'span',
            button: 'p',
            // xxxl: 'div',
            xxl: 'div',
            xl: 'div',
            lg: 'div',
            ml: 'p',
            md: 'p',
            sm: 'p',
            xs: 'p',
            xxs: 'span',
            xxxs: 'span',
          },
        },
        variants: [
          {
            props: { variant: 'display1' },
            style: {
              display: 'block',
              fontSize: '1.4rem',
              fontWeight: 700,
              lineHeight: 1.5,
              color: 'tomato',
            },
          },
          {
            props: { variant: 'display2' },
            style: {
              fontSize: '1.2rem',
              fontWeight: 700,
              color: 'tomato',
              lineHeight: 1.5,
            },
          },
        ],
      },
      // Headerのスタイル
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            '& .MuiTypography-root': {
              color: colorData.common.white,
            },
            '@media (min-width:0px)': {
              minHeight: 44,
            },
            '@media (min-width:480px)': {
              minHeight: 44,
            },
          },
        },
      },
      // ----- Table -----
      MuiTable: {
        styleOverrides: {
          root: {
            borderCollapse: 'separate',
            borderSpacing: '0 8px',
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: 'none',
            padding: '8px',
          },
          head: {
            backgroundColor: colorData.background.default,
            color: colorData.text.primary,
            fontWeight: fontWeight.bold,
          },
          body: {
            backgroundColor: colorData.background.default,
            color: colorData.text.primary,
          },
        },
      },
      MuiTableRow: {
        styleOverrides: {
          root: {
            '&:nth-of-type(odd)': {
              backgroundColor: colorData.background.default,
            },
          },
        },
      },
      // ----- DataGrid -----
      MuiDataGrid: {
        styleOverrides: {
          root: {
            border: 'none',
            '& .MuiDataGrid-cell': {
              borderBottom: 'none',
            },
            '& .MuiDataGrid-columnHeaderTitleContainer': {
              borderBottom: 'none',
              backgroundColor: colorData.background.default,
              // backgroundColor: colorData.grey[800],
              // borderRight: `1px solid ${colorData.grey[500]}`,
              borderRight: colorData.background.default,
            },
            '& .MuiDataGrid-columnHeaderTitle': {
              fontWeight: fontWeight.bold,
              // color: colorData.common.white,
              color: colorData.text.primary,
            },
            '& .MuiDataGrid-columnHeader': {
              // backgroundColor: colorData.grey[800],
              backgroundColor: colorData.background.default,
              color: colorData.text.primary,
              '&:focus': {
                outline: 'none',
              },
            },
            '& .MuiDataGrid-columnHeader:focus-within': {
              outline: 'none',
            },

            '& .MuiDataGrid-row': {
              backgroundColor: colorData.background.default,
              color: colorData.text.primary,
            },
            '& .MuiDataGrid-cell:focus-within': {
              outline: 'none',
            },
            '& .MuiDataGrid-cell:focus-within .MuiDataGrid-cell:focus-within': {
              outline: 'none',
            },
            '& .MuiDataGrid-cell:focus-within .MuiDataGrid-cell:focus-within .MuiDataGrid-cell:focus-within':
              {
                outline: 'none',
              },
          },
        },
      },
      // ----- TextField -----
      // MuiTextField: {
      //   styleOverrides: {
      //     root: {
      //       '& .MuiInputBase-root': {
      //         backgroundColor: colorData.background.default,
      //         color: colorData.text.primary,
      //       } as CSSProperties,
      //       '& .MuiOutlinedInput-notchedOutline': {
      //         borderColor: colorData.border.primary,
      //       }
    },
    // 全体のオーバーライド
    styleOverrides: {
      gutterBottom: {
        marginBottom: '1em',
      },
      paragraph: {
        marginBottom: '1em',
        fontSize: fontSizesVariant.md, // 1rem = 14px
      },
    },
    // ボタンのスタイル
    MuiButton: {
      defaultProps: {
        variant: 'contained', // デフォルトのボタンの種類を設定
        // disableElevation: true, // デフォルトの影を削除
        // disableRipple: true, // デフォルトのrippleを削除
      },
      styleOverrides: {
        contained: {
          // 背景がcontainedの時のスタイル
          '&.MuiButton-contained.MuiButton-root': {
            color: colorData.text.white,
          },
          '&.MuiButton-contained.MuiButton-root.MuiButton-containedInherit': {
            color: colorData.text.primary,
          },
        },
      },
    },

    // SvgIconのスタイル
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          '& path': {
            fill: 'currentColor', // svgの色を親から変更できるように設定
          },
        },
        fontSizeSmall: {
          fontSize: '1rem',
        },
        fontSizeMedium: {
          fontSize: '1.5rem',
        },
        fontSizeLarge: {
          fontSize: '2rem',
        },
      },
    },
  }

  // ======== global settings 全体調整で必要な時に設置 ========

  // ===== Shape Muiコンポーネント全て、の丸み感の調整 =====
  /*
  shape: {
    borderRadius: 4, // デフォルト値 = 4
  },
  */

  // ===== Spacing 余白やコンポーネントの大きさ等、Muiすべてのベースのサイズ基準 =====
  /*
  spacing: 8, // = デフォルト値 = 8
  */

  // ===== Z-Index コンポーネントの重なり順の不具合があった時に必要応じて設定 =====
  // example
  /*
  zIndex: {
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  */
)
