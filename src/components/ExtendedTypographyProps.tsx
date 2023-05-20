import { TypographyProps } from "@mui/material/Typography";
import { OverrideProps } from "@mui/types";

type ExtendedTypographyProps = OverrideProps<
  TypographyProps,
  TypographyPropsVariantOverrides
>;
