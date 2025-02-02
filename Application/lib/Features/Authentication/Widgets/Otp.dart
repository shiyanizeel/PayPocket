import 'package:flutter/material.dart';
import 'package:pay_pocket/utils/constants/colors.dart';
import 'package:pay_pocket/utils/constants/sizes.dart';
import 'package:pinput/pinput.dart';

class OTPInput extends StatefulWidget {
  final String otp;
  const OTPInput({super.key, required this.otp});

  @override
  State<OTPInput> createState() => _OTPInputState();
}

class _OTPInputState extends State<OTPInput> {
  @override
  Widget build(BuildContext context) {
    final defaultPinTheme = PinTheme(
      width: 50,
      height: 50,
      textStyle: TextStyle(
          fontSize: PSizes.md,
          fontWeight: FontWeight.w600,
          color: PColors.textWhite),
      decoration: BoxDecoration(
        color: PColors.primary,
        border: Border.all(color: PColors.borderPrimary),
        borderRadius: BorderRadius.circular(15),
      ),
    );
    final focusedPinTheme = defaultPinTheme.copyDecorationWith(
      border: Border.all(color: PColors.primary, width: 2),
      borderRadius: BorderRadius.circular(50),
    );

    final submittedPinTheme = defaultPinTheme.copyWith(
      decoration: defaultPinTheme.decoration?.copyWith(
        color: PColors.primary,
      ),
    );
    return Pinput(
      
      // focusNode: FocusNode(),
      onTapOutside: (event) {
        FocusScope.of(context).unfocus();
      },
      isCursorAnimationEnabled: true,
      length: 4,
      defaultPinTheme: defaultPinTheme,
      focusedPinTheme: focusedPinTheme,
      submittedPinTheme: submittedPinTheme,
      errorPinTheme: submittedPinTheme,
      validator: (s) {
        return null;
      },
      pinputAutovalidateMode: PinputAutovalidateMode.onSubmit,
      pinAnimationType: PinAnimationType.scale,
      showCursor: true,
      onCompleted: (pin) => {widget.otp},
    );
  }
}
