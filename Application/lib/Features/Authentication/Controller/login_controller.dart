import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:get/get.dart';
import 'package:pay_pocket/Features/Authentication/View/otp_screen.dart';
import 'package:pay_pocket/utils/helpers/helper_functions.dart';

class LoginController extends GetxController {
  final mobileNumberController = TextEditingController().obs;
  final otpController = TextEditingController().obs;
  final isChecked = false.obs;
  final otp = "".obs;
  LoginController() {
    mobileNumberController.value.text = "1234567890";
  }
  void sendOTP() {
    if (mobileNumberController.value.text.isEmpty) {
      PHelperFunctions.showSnackBar("Please enter mobile number");
    } else {
      // Hide the keyboard and remove focus
      FocusManager.instance.primaryFocus?.unfocus();
      SystemChannels.textInput.invokeMethod('TextInput.hide');

      // Navigate to the OTP screen
      Get.to(() => OtpScreen());
    }
  }
}
