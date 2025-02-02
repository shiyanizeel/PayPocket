import 'package:get/get.dart';
import 'package:pay_pocket/Features/Authentication/View/signup_screen.dart';

class AccountTypeController extends GetxController {
  String selectedType = 'Restaurant'; // Default selection

  void changeSelectedType(String type) {
    selectedType = type;
    update();
  }

  void goToSignup() {
    Get.to(() => SignupScreen());
  }
}
