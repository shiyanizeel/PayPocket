import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart'; // Needed for TextInputFormatter.
import 'package:get/get.dart';
import 'package:pay_pocket/Features/Authentication/Controller/login_controller.dart';
import 'package:pay_pocket/utils/constants/colors.dart';
import 'package:pay_pocket/utils/constants/sizes.dart';
import 'package:pay_pocket/utils/helpers/helper_functions.dart';
import 'package:pay_pocket/utils/validators/validation.dart';
import 'package:url_launcher/url_launcher.dart';

/// A custom [TextInputFormatter] that formats the mobile number as 1234-123-123.
class MobileNumberFormatter extends TextInputFormatter {
  @override
  TextEditingValue formatEditUpdate(
    TextEditingValue oldValue,
    TextEditingValue newValue,
  ) {
    final digitsOnly = newValue.text.replaceAll(RegExp(r'\D'), '');

    final limited =
        digitsOnly.length > 10 ? digitsOnly.substring(0, 10) : digitsOnly;

    String formatted = '';

    if (limited.length <= 4) {
      formatted = limited;
    } else if (limited.length <= 7) {
      formatted = '${limited.substring(0, 4)}-${limited.substring(4)}';
    } else {
      formatted =
          '${limited.substring(0, 4)}-${limited.substring(4, 7)}-${limited.substring(7)}';
    }

    return TextEditingValue(
      text: formatted,
      selection: TextSelection.collapsed(offset: formatted.length),
    );
  }
}

class Loginscreen extends StatefulWidget {
  const Loginscreen({super.key});

  @override
  State<Loginscreen> createState() => _LoginscreenState();
}

class _LoginscreenState extends State<Loginscreen> {
  final loginCtrl = Get.put(LoginController());
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    final scaffoldBg = Theme.of(context).scaffoldBackgroundColor;

    return Scaffold(
      resizeToAvoidBottomInset: true,
      body: Container(
        width: double.infinity,
        decoration: BoxDecoration(color: PColors.primary),
        child: SafeArea(
          bottom: false,
          child: Column(
            children: <Widget>[
              // Top area: Display header or image.
              Expanded(
                flex: 6,
                child: Center(
                  child: Container(
                    color: PColors.primary,
                    alignment: Alignment.center,
                    child: const Text(
                      "Login",
                      style: TextStyle(
                        fontSize: PSizes.xl,
                        fontWeight: FontWeight.bold,
                        color: Colors.white,
                      ),
                    ),
                  ),
                ),
              ),
              // Bottom area: Form container.
              Expanded(
                flex: 4,
                child: Container(
                  decoration: BoxDecoration(
                    color: PColors.lightContainer,
                    borderRadius: const BorderRadius.only(
                      topLeft: Radius.circular(30),
                      topRight: Radius.circular(30),
                    ),
                  ),
                  child: SingleChildScrollView(
                    padding: EdgeInsets.only(
                      left: 20,
                      right: 20,
                      top: 40,
                      bottom: MediaQuery.of(context).viewInsets.bottom + 20,
                    ),
                    child: Form(
                      key: _formKey,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: [
                          // Terms & Conditions text.
                          Center(
                            child: SizedBox(
                              width: MediaQuery.of(context).size.width * 0.8,
                              child: Text.rich(
                                TextSpan(
                                  style: const TextStyle(fontSize: 16),
                                  children: [
                                    const TextSpan(
                                      text:
                                          "By continuing, you agree with our ",
                                    ),
                                    TextSpan(
                                      text: "Terms & Conditions",
                                      recognizer: TapGestureRecognizer()
                                        ..onTap = () => _launchUrl(
                                            "https://example.com/terms"),
                                      style: const TextStyle(
                                        fontWeight: FontWeight.bold,
                                      ),
                                    ),
                                    const TextSpan(text: " and "),
                                    TextSpan(
                                      text: "Privacy Policy",
                                      recognizer: TapGestureRecognizer()
                                        ..onTap = () => _launchUrl(
                                            "https://example.com/privacy"),
                                      style: const TextStyle(
                                        fontWeight: FontWeight.bold,
                                      ),
                                    ),
                                  ],
                                ),
                                textAlign: TextAlign.center,
                              ),
                            ),
                          ),
                          const SizedBox(height: 20),
                          // Mobile Number Input Field with always-visible "+91" as a separate widget.
                          Container(
                            height: 50,
                            padding: const EdgeInsets.symmetric(horizontal: 10),
                            decoration: BoxDecoration(
                              border: Border.all(color: PColors.borderPrimary),
                              borderRadius: BorderRadius.circular(PSizes.lg),
                            ),
                            child: Row(
                              children: [
                                // Always visible country code.
                                Text(
                                  "+91 |",
                                  style: TextStyle(
                                    color: PColors.borderPrimary,
                                    fontSize: PSizes.md,
                                  ),
                                ),
                                const SizedBox(width: 8),
                                // Expanded text field for mobile number input.
                                Expanded(
                                  child: TextFormField(
                                    cursorColor: PColors.primary,
                                    onTapOutside: (event) {
                                      FocusScope.of(context).unfocus();
                                    },
                                    // Remove the built-in counter by returning null.
                                    buildCounter: (BuildContext context,
                                            {required int currentLength,
                                            required int? maxLength,
                                            required bool isFocused}) =>
                                        null,

                                    onChanged: (value) => {
                                      if (value.length == 12)
                                        {
                                          FocusManager.instance.primaryFocus
                                              ?.unfocus()
                                        }
                                    },
                                    decoration: InputDecoration(
                                      hintText: "Enter mobile number",
                                      hintStyle: TextStyle(
                                        color: PColors.borderPrimary,
                                      ),
                                      border: InputBorder.none,
                                      enabledBorder: InputBorder.none,
                                      focusedBorder: InputBorder.none,
                                      errorBorder: InputBorder.none,
                                      isDense: true,
                                      contentPadding: EdgeInsets.zero,
                                    ),
                                    // Use input formatters to:
                                    // 1. Allow only digits.
                                    // 2. Format the mobile number.
                                    inputFormatters: [
                                      FilteringTextInputFormatter.digitsOnly,
                                      MobileNumberFormatter(),
                                    ],
                                    controller:
                                        loginCtrl.mobileNumberController.value,
                                    keyboardType: TextInputType.phone,
                                    validator: (value) =>
                                        PValidator.validateMobileNumber(value),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(height: 20),
                          // Login Button.
                          ElevatedButton(
                            onPressed: loginCtrl.sendOTP,
                            style: ElevatedButton.styleFrom(
                              padding: const EdgeInsets.symmetric(vertical: 15),
                            ),
                            child: const Text(
                              "Login",
                              style: TextStyle(
                                fontSize: PSizes.md,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Future<void> _launchUrl(String url) async {
    final Uri uri = Uri.parse(url);
    if (!await launchUrl(uri)) {
      PHelperFunctions.customToast(message: "Could not launch $url");
      throw Exception('Could not launch $url');
    }
  }
}
