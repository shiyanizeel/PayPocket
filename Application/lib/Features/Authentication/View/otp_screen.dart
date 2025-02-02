import 'package:flutter/material.dart';
import 'package:flutter/services.dart'; // For input formatters.
import 'package:get/get.dart';
import 'package:pay_pocket/Features/Authentication/Controller/otp_controller.dart';
import 'package:pay_pocket/Features/Authentication/Widgets/Otp.dart';
import 'package:pay_pocket/utils/constants/colors.dart';
import 'package:pay_pocket/utils/constants/sizes.dart';

class OtpScreen extends StatefulWidget {
  const OtpScreen({super.key});

  @override
  State<OtpScreen> createState() => _OtpScreenState();
}

class _OtpScreenState extends State<OtpScreen> {
  final otpCtrl = Get.put(OtpController());
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  /// Helper to format seconds into mm:ss.
  String _formatDuration(int seconds) {
    final minutes = seconds ~/ 60;
    final secs = seconds % 60;
    return '${minutes.toString().padLeft(2, '0')}:${secs.toString().padLeft(2, '0')}';
  }

  @override
  Widget build(BuildContext context) {
    final scaffoldBg = Theme.of(context).scaffoldBackgroundColor;

    return Scaffold(
      resizeToAvoidBottomInset: true,
      appBar: AppBar(
        iconTheme: const IconThemeData(color: Colors.white),
        title: const Text("OTP Verification"),
        centerTitle: true,
        backgroundColor: PColors.primary,
        elevation: 0,
        systemOverlayStyle: const SystemUiOverlayStyle(
          statusBarColor: PColors.primary,
          statusBarIconBrightness: Brightness.light,
        ),
      ),
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
                      "OTP Verification",
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
                    color: scaffoldBg,
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
                          // Instruction text.
                          Center(
                            child: Text(
                              "Enter the OTP sent to your mobile number",
                              style: const TextStyle(fontSize: 16),
                              textAlign: TextAlign.center,
                            ),
                          ),
                          const SizedBox(height: 20),
                          // OTP Input Field. Replace `OTPInput` with your custom OTP widget if needed.
                          OTPInput(otp: ""),
                          const SizedBox(height: 20),
                          // Verify OTP Button.
                          ElevatedButton(
                            onPressed: () {
                              if (_formKey.currentState!.validate()) {
                                otpCtrl.verifyOTP();
                              }
                            },
                            style: ElevatedButton.styleFrom(
                              padding: const EdgeInsets.symmetric(vertical: 15),
                            ),
                            child: const Text(
                              "Verify OTP",
                              style: TextStyle(
                                fontSize: PSizes.md,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ),
                          const SizedBox(height: 20),
                          // Resend OTP Text with timer.
                          Center(
                            child: Obx(() {
                              // When the timer is still counting down, show remaining time.
                              final isEnabled = otpCtrl.isResendEnabled;
                              return GestureDetector(
                                onTap: isEnabled ? otpCtrl.resendOTP : null,
                                child: Text(
                                  isEnabled
                                      ? "Resend OTP"
                                      : "Resend OTP in ${_formatDuration(otpCtrl.secondsRemaining.value)}",
                                  style: TextStyle(
                                    color: isEnabled
                                        ? PColors.buttonSecondary
                                        : Colors.grey,
                                    fontSize: PSizes.md,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                              );
                            }),
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
}
