import 'package:flutter/material.dart';
import 'package:pay_pocket/utils/theme/widget_themes/appbar_theme.dart';
import 'package:pay_pocket/utils/theme/widget_themes/bottom_sheet_theme.dart';
import 'package:pay_pocket/utils/theme/widget_themes/checkbox_theme.dart';
import 'package:pay_pocket/utils/theme/widget_themes/chip_theme.dart';
import 'package:pay_pocket/utils/theme/widget_themes/elevated_button_theme.dart';
import 'package:pay_pocket/utils/theme/widget_themes/outlined_button_theme.dart';
import 'package:pay_pocket/utils/theme/widget_themes/text_field_theme.dart';
import 'package:pay_pocket/utils/theme/widget_themes/text_theme.dart';

import '../constants/colors.dart';

class TAppTheme {
  TAppTheme._();

  static ThemeData lightTheme = ThemeData(
    useMaterial3: true,
    fontFamily: 'Poppins',
    disabledColor: PColors.grey,
    brightness: Brightness.light,
    primaryColor: PColors.primary,
    textTheme: PTextTheme.lightTextTheme,
    primaryColorLight: PColors.textWhite,
    primaryColorDark: PColors.textPrimary,
    chipTheme: PChipTheme.lighPChipTheme,
    scaffoldBackgroundColor: PColors.lightContainer,
    appBarTheme: PAppBarTheme.lightAppBarTheme,
    checkboxTheme: PCheckboxTheme.lightCheckboxTheme,
    bottomSheetTheme: PBottomSheetTheme.lightBottomSheetTheme,
    elevatedButtonTheme: PElevatedButtonTheme.lightElevatedButtonTheme,
    outlinedButtonTheme: POutlinedButtonTheme.lightOutlinedButtonTheme,
    inputDecorationTheme: PTextFormFieldTheme.lightInputDecorationTheme,
  );

  static ThemeData darkTheme = ThemeData(
    useMaterial3: true,
    fontFamily: 'Poppins',
    disabledColor: PColors.grey,
    brightness: Brightness.dark,
    primaryColor: PColors.primary,
    textTheme: PTextTheme.darkTextTheme,
    primaryColorLight: PColors.textPrimary,
    primaryColorDark: PColors.textWhite,
    chipTheme: PChipTheme.darkChipTheme,
    scaffoldBackgroundColor: PColors.black,
    appBarTheme: PAppBarTheme.darkAppBarTheme,
    checkboxTheme: PCheckboxTheme.darkCheckboxTheme,
    bottomSheetTheme: PBottomSheetTheme.darkBottomSheetTheme,
    elevatedButtonTheme: PElevatedButtonTheme.darkElevatedButtonTheme,
    outlinedButtonTheme: POutlinedButtonTheme.darkOutlinedButtonTheme,
    inputDecorationTheme: PTextFormFieldTheme.darkInputDecorationTheme,
  );
}
