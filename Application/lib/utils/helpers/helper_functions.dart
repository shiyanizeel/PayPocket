import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:intl/intl.dart';
import 'package:pay_pocket/utils/alerts/alerts_box.dart';
import 'package:pay_pocket/utils/constants/colors.dart';
import 'package:iconsax/iconsax.dart';

class PHelperFunctions {
  static Color? getColor(String value) {
    /// Define your product specific colors here and it will match the attribute colors and show specific 🟠🟡🟢🔵🟣🟤

    if (value == 'Green') {
      return Colors.green;
    } else if (value == 'Green') {
      return Colors.green;
    } else if (value == 'Red') {
      return Colors.red;
    } else if (value == 'Blue') {
      return Colors.blue;
    } else if (value == 'Pink') {
      return Colors.pink;
    } else if (value == 'Grey') {
      return Colors.grey;
    } else if (value == 'Purple') {
      return Colors.purple;
    } else if (value == 'Black') {
      return Colors.black;
    } else if (value == 'White') {
      return Colors.white;
    } else if (value == 'Yellow') {
      return Colors.yellow;
    } else if (value == 'Orange') {
      return Colors.deepOrange;
    } else if (value == 'Brown') {
      return Colors.brown;
    } else if (value == 'Teal') {
      return Colors.teal;
    } else if (value == 'Indigo') {
      return Colors.indigo;
    } else {
      return null;
    }
  }

  static void showSnackBar(String message) {
    ScaffoldMessenger.of(Get.context!).showSnackBar(
      SnackBar(content: Text(message)),
    );
  }

  static void showAlert(String title, String message) {
    showDialog(
      context: Get.context!,
      builder: (BuildContext context) {
        return AlertBox(
          title: title,
          message: message,
        );
      },
    );
  }

  static hideSnackBar() =>
      ScaffoldMessenger.of(Get.context!).hideCurrentSnackBar();

  static customToast({required message}) {
    ScaffoldMessenger.of(Get.context!).showSnackBar(
      SnackBar(
        elevation: 0,
        duration: const Duration(seconds: 3),
        backgroundColor: Colors.transparent,
        content: Container(
          padding: const EdgeInsets.all(12.0),
          margin: const EdgeInsets.symmetric(horizontal: 30),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(10),
            color: PHelperFunctions.isDarkMode(Get.context!)
                ? PColors.darkerGrey.withAlpha(200)
                : PColors.grey.withAlpha(900),
          ),
          child: Center(
            child: Text(message,
                style: Theme.of(Get.context!).textTheme.labelLarge),
          ),
        ),
      ),
    );
  }

  static successSnackBar({required title, message = '', duration = 1500}) {
    Get.snackbar(
      title,
      message,
      animationDuration: Duration(milliseconds: 500),
      isDismissible: true,
      shouldIconPulse: true,
      colorText: Colors.white,
      backgroundColor: PColors.primary,
      snackPosition: SnackPosition.BOTTOM,
      duration: Duration(milliseconds: duration),
      margin: const EdgeInsets.all(10),
      icon: const Icon(Iconsax.check, color: PColors.white),
      mainButton: TextButton(
        onPressed: () {},
        child: const Icon(
          Icons.close,
          color: PColors.white,
        ),
      ),
    );
  }

  static warningSnackBar({required title, message = '', duration = 1500}) {
    Get.snackbar(
      title,
      message,
      animationDuration: Duration(milliseconds: 500),
      isDismissible: true,
      shouldIconPulse: true,
      colorText: Colors.white,
      backgroundColor: PColors.warning,
      snackPosition: SnackPosition.BOTTOM,
      duration: Duration(milliseconds: duration),
      margin: const EdgeInsets.all(10),
      icon: const Icon(Iconsax.check, color: PColors.white),
      mainButton: TextButton(
        onPressed: () {},
        child: const Icon(
          Icons.close,
          color: PColors.white,
        ),
      ),
    );
  }

  static errorSnackBar(
      {required title, message = 'Somthing went wrong', duration = 1500}) {
    Get.snackbar(
      title,
      message,
      animationDuration: Duration(milliseconds: 500),
      isDismissible: true,
      shouldIconPulse: true,
      colorText: Colors.white,
      backgroundColor: PColors.warning,
      snackPosition: SnackPosition.BOTTOM,
      duration: Duration(milliseconds: duration),
      margin: const EdgeInsets.all(10),
      icon: const Icon(Iconsax.check, color: PColors.white),
      mainButton: TextButton(
        onPressed: () {},
        child: const Icon(
          Icons.close,
          color: PColors.white,
        ),
      ),
    );
  }

  static void navigateToScreen(BuildContext context, Widget screen) {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (_) => screen,
      ),
    );
  }

  static String truncateText(String text, int maxLength) {
    if (text.length <= maxLength) {
      return text;
    } else {
      return '${text.substring(0, maxLength)}...';
    }
  }

  static bool isDarkMode(BuildContext context) {
    return Theme.of(context).brightness == Brightness.dark;
  }

  static Size screenSize() {
    return MediaQuery.of(Get.context!).size;
  }

  static double screenHeight() {
    return MediaQuery.of(Get.context!).size.height;
  }

  static double screenWidth() {
    return MediaQuery.of(Get.context!).size.width;
  }

  static String getFormattedDate(DateTime date,
      {String format = 'dd MMM yyyy'}) {
    return DateFormat(format).format(date);
  }

  static List<T> removeDuplicates<T>(List<T> list) {
    return list.toSet().toList();
  }

  static List<Widget> wrapWidgets(List<Widget> widgets, int rowSize) {
    final wrappedList = <Widget>[];
    for (var i = 0; i < widgets.length; i += rowSize) {
      final rowChildren = widgets.sublist(
          i, i + rowSize > widgets.length ? widgets.length : i + rowSize);
      wrappedList.add(Row(children: rowChildren));
    }
    return wrappedList;
  }
}
