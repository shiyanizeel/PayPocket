import 'package:flutter/material.dart';
import 'package:get/get.dart';

class SignupController extends GetxController {
  final userNameController = TextEditingController();
  final mobileController = TextEditingController();
  var tableNumber = "1";
  var items = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  void sendOTP() {
    debugPrint("OTP sent to ${mobileController.text}");
  }
}
