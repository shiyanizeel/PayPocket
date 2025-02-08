import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:pay_pocket/Features/Authentication/Controller/signup_controller.dart';
import 'package:pay_pocket/utils/constants/colors.dart';
import 'package:pay_pocket/utils/constants/sizes.dart';

class SignupScreen extends StatefulWidget {
  const SignupScreen({super.key});

  @override
  State<SignupScreen> createState() => _SignupScreenState();
}

class _SignupScreenState extends State<SignupScreen> {
  final signupCtrl = Get.put(SignupController());
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Image.asset('assets/logos/logo.png', height: 40),
          backgroundColor: PColors.lightContainer,
          elevation: 0,
          centerTitle: true,
        ),
        body: Container(
          width: double.infinity,
          decoration: BoxDecoration(
            color: PColors.lightContainer,
            boxShadow: [
              BoxShadow(
                color: PColors.error.withAlpha(300),
                spreadRadius: 5,
                blurRadius: 100,
                offset: const Offset(0, 0), // changes position of shadow
              ),
            ],
          ),
          padding: const EdgeInsets.symmetric(horizontal: 20),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const SizedBox(height: 20),
              const Text(
                "Setup Profile",
                style: TextStyle(
                  fontSize: PSizes.fontSizeLg,
                  fontWeight: FontWeight.bold,
                  color: Colors.black,
                ),
              ),
              const SizedBox(height: 8),
              const Text(
                "We need your business information so that we can properly process your account.",
                style: TextStyle(
                  fontSize: PSizes.fontSizeMd,
                  color: Colors.grey,
                ),
              ),
              const SizedBox(height: PSizes.defaultSpacing),
              const SizedBox(height: PSizes.defaultSpace),
              Container(
                width: double.infinity,
                padding: const EdgeInsets.all(PSizes.defaultSpacing),
                decoration: BoxDecoration(
                  color: PColors.white,
                  borderRadius: BorderRadius.circular(PSizes.borderRadiusMd),
                ),
                child: Form(
                  child: Column(
                    spacing: 7,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Text(
                        "User Name",
                        style: TextStyle(
                            color: PColors.textPrimary,
                            fontSize: PSizes.fontSizeMd,
                            fontWeight: FontWeight.w600),
                      ),
                      TextFormField(
                        cursorColor: PColors.primary,
                        style: const TextStyle(
                            fontSize: PSizes.fontSizeMd,
                            color: PColors.textSecondary),
                      ),
                      const Text(
                        "Mobile Number",
                        style: TextStyle(
                            color: PColors.textPrimary,
                            fontSize: PSizes.fontSizeMd,
                            fontWeight: FontWeight.w600),
                      ),
                      TextFormField(
                        readOnly: true,
                        initialValue: "9327148044",
                        cursorColor: PColors.primary,
                        style: const TextStyle(
                            fontSize: PSizes.fontSizeMd,
                            color: PColors.textSecondary),
                      ),
                      const Text(
                        "Email Address",
                        style: TextStyle(
                            color: PColors.textPrimary,
                            fontSize: PSizes.fontSizeMd,
                            fontWeight: FontWeight.w600),
                      ),
                      TextFormField(
                        cursorColor: PColors.primary,
                        style: const TextStyle(
                            fontSize: PSizes.fontSizeMd,
                            color: PColors.textSecondary),
                      ),
                      const Text(
                        "Account Type",
                        style: TextStyle(
                            color: PColors.textPrimary,
                            fontSize: PSizes.fontSizeMd,
                            fontWeight: FontWeight.w600),
                      ),
                      TextFormField(
                        readOnly: true,
                        initialValue: "Restaurant",
                        cursorColor: PColors.primary,
                        style: const TextStyle(
                            fontSize: PSizes.fontSizeMd,
                            color: PColors.textSecondary),
                      ),
                      const Text(
                        "Table Number",
                        style: TextStyle(
                            color: PColors.textPrimary,
                            fontSize: PSizes.fontSizeMd,
                            fontWeight: FontWeight.w600),
                      ),
                      Container(
                        decoration: BoxDecoration(
                            border: Border.all(color: PColors.borderPrimary),
                            borderRadius: BorderRadius.all(
                                Radius.circular(PSizes.inputFieldRadius))),
                        padding: const EdgeInsets.symmetric(horizontal: 8.0),
                        child: DropdownButton(
                          isExpanded: true,
                          menuWidth: double.infinity,
                          dropdownColor: PColors.white,
                          borderRadius:
                              BorderRadius.circular(PSizes.borderRadiusMd),
                          // Initial Value
                          value: signupCtrl.tableNumber,

                          // Down Arrow Icon
                          icon: const Icon(Icons.keyboard_arrow_down),

                          // Array list of items
                          items: signupCtrl.items.map((String items) {
                            return DropdownMenuItem(
                              value: items,
                              child: Text(items),
                            );
                          }).toList(),
                          // After selecting the desired option,it will
                          // change button value to selected value
                          onChanged: (String? newValue) {
                            setState(() {
                              signupCtrl.tableNumber = newValue!;
                            });
                          },
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              Spacer(),
              ElevatedButton(
                onPressed: () {
                  signupCtrl.goToHome();
                },
                child: const Text('Continue',
                    style: TextStyle(
                        fontSize: PSizes.fontSizeMd_20,
                        fontWeight: FontWeight.bold)),
              ),
              const SizedBox(height: 50),
            ],
          ),
        ));
  }
}
