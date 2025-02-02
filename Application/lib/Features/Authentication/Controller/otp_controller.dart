import 'dart:async';

import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:pay_pocket/Features/Authentication/View/account_type.dart';
import 'package:pay_pocket/Features/Authentication/View/signup_screen.dart';
import 'package:pay_pocket/utils/helpers/helper_functions.dart';

class OtpController extends GetxController {
  // Text editing controller wrapped in an observable.
  Rx<TextEditingController> otpController = TextEditingController().obs;

  // Timer countdown (in seconds). Starts at 180 seconds (3 minutes).
  RxInt secondsRemaining = 180.obs;
  Timer? _timer;

  @override
  void onInit() {
    super.onInit();
    startTimer();
  }

  /// Starts or restarts the countdown timer.
  void startTimer() {
    secondsRemaining.value = 10;
    _timer?.cancel();
    _timer = Timer.periodic(const Duration(seconds: 1), (timer) {
      if (secondsRemaining.value > 0) {
        secondsRemaining.value--;
      } else {
        timer.cancel();
      }
    });
  }

  /// Returns true when the timer has reached zero and the resend button is enabled.
  bool get isResendEnabled => secondsRemaining.value == 0;

  /// Called when the user taps the Verify OTP button.
  void verifyOTP() {
    // Your OTP verification logic here.
    PHelperFunctions.customToast(message: "OTP Verified!");

    Get.to(() => AccountType());
  }

  /// Called when the user taps the Resend OTP text.
  void resendOTP() {
    if (!isResendEnabled) return;
    // Your resend OTP logic here.
    PHelperFunctions.customToast(message: "OTP resent!");
    // Restart the timer after resending OTP.
    startTimer();
  }

  @override
  void onClose() {
    _timer?.cancel();
    super.onClose();
  }
}

/// The OTP screen with a header, OTP input field, Verify button, and Resend OTP timer.
