import 'package:flutter/material.dart';
import 'package:get/get_navigation/src/root/get_material_app.dart';
import 'package:pay_pocket/Features/Authentication/View/login_screen.dart';
import 'package:pay_pocket/Features/Authentication/View/signup_screen.dart';
import 'package:pay_pocket/Features/Authentication/Widgets/Otp.dart';
import 'package:pay_pocket/Features/Home/home_screen.dart';
import 'package:pay_pocket/utils/constants/text_strings.dart';
import 'package:pay_pocket/utils/local_storage/storage_utility.dart';
import 'package:pay_pocket/utils/theme/theme.dart';

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    final PLocalStorage storage = PLocalStorage();
    return GetMaterialApp(
      title: PTexts.appName,
      themeMode: ThemeMode.system,
      theme: TAppTheme.lightTheme,
      darkTheme: TAppTheme.darkTheme,
      debugShowCheckedModeBanner: false,
      // initialBinding: GeneralBindings(),
      home: storage.isLogin() ? const HomeScreen() : const Loginscreen(),
    );
  }
}
