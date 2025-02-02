import 'package:flutter/material.dart';
import '../../constants/colors.dart';
import '../../constants/sizes.dart';

/* -- Light & Dark Elevated Button Themes -- */
class PElevatedButtonTheme {
  PElevatedButtonTheme._(); //To avoid creating instances

  /* -- Light Theme -- */
  static final lightElevatedButtonTheme = ElevatedButtonThemeData(
    style: ElevatedButton.styleFrom(
      fixedSize: Size(PSizes.buttonWidth, PSizes.buttonHeight),
      foregroundColor: PColors.light,
      backgroundColor: PColors.buttonPrimary,
      disabledForegroundColor: PColors.darkGrey,
      disabledBackgroundColor: PColors.buttonDisabled,
      side: const BorderSide(color: PColors.primary),
      // padding: const EdgeInsets.symmetric(vertical: PSizes.buttonHeight / 2),
      textStyle: const TextStyle(
          fontSize: 14, color: PColors.textWhite, fontWeight: FontWeight.w600),
      shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(PSizes.buttonRadius)),
    ),
  );

  /* -- Dark Theme -- */
  static final darkElevatedButtonTheme = ElevatedButtonThemeData(
    style: ElevatedButton.styleFrom(
      fixedSize: Size(PSizes.buttonWidth, PSizes.buttonHeight),
      elevation: 0,
      foregroundColor: PColors.light,
      backgroundColor: PColors.primary,
      disabledForegroundColor: PColors.darkGrey,
      disabledBackgroundColor: PColors.darkerGrey,
      side: const BorderSide(color: PColors.primary),
      // padding: const EdgeInsets.symmetric(vertical: PSizes.buttonHeight),
      textStyle: const TextStyle(
          fontSize: 14, color: PColors.textWhite, fontWeight: FontWeight.w600),
      shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(PSizes.buttonRadius)),
    ),
  );
}
