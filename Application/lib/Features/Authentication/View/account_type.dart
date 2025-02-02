import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:pay_pocket/Features/Authentication/Controller/account_type.dart';
import 'package:pay_pocket/utils/constants/colors.dart';
import 'package:pay_pocket/utils/constants/sizes.dart';

class AccountType extends StatefulWidget {
  const AccountType({Key? key}) : super(key: key);

  @override
  _AccountTypeState createState() => _AccountTypeState();
}

class _AccountTypeState extends State<AccountType> {
  final accountCtrl = Get.put(AccountTypeController());
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: PColors.lightContainer,
        elevation: 0,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back, color: Colors.black),
          onPressed: () => Navigator.of(context).pop(),
        ),
        title: Image.asset('assets/logos/logo.png', height: 40),
        centerTitle: true,
      ),
      body: Container(
        decoration: BoxDecoration(color: PColors.lightContainer),
        padding: const EdgeInsets.symmetric(horizontal: 16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const SizedBox(height: 20),
            const Text(
              "Let's Get Started",
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
                color: Colors.black,
              ),
            ),
            const SizedBox(height: 8),
            const Text(
              "Select the user type",
              style: TextStyle(
                fontSize: 16,
                color: Colors.grey,
              ),
            ),
            const SizedBox(height: 20),
            Expanded(
              child: GridView.count(
                crossAxisCount: 2,
                crossAxisSpacing: 16,
                mainAxisSpacing: 16,
                children: [
                  _buildAccountTypeBox(
                    type: 'Business',
                    icon: Icons.home_work_outlined,
                    description: 'For business accounts',
                  ),
                  _buildAccountTypeBox(
                    type: 'Restaurant',
                    icon: Icons.apartment,
                    description: 'Paid version',
                    isPaid: true,
                  ),
                ],
              ),
            ),
            Spacer(),
            ElevatedButton(
              onPressed: accountCtrl.goToSignup,
              child: const Text('Continue'),
            ),
            const SizedBox(height: 50),
          ],
        ),
      ),
    );
  }

  Widget _buildAccountTypeBox({
    required String type,
    required IconData icon,
    required String description,
    bool isPaid = false,
  }) {
    final bool isSelected = accountCtrl.selectedType == type;

    return GestureDetector(
      onTap: () {
        setState(() {
          accountCtrl.selectedType = type;
        });
      },
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(12),
          border: Border.all(
            color: isSelected ? PColors.primary : PColors.borderPrimary,
            width: 2,
          ),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(icon,
                size: 50, color: isSelected ? PColors.primary : PColors.black),
            const SizedBox(height: 10),
            Text(
              type,
              style: TextStyle(
                fontSize: PSizes.fontSizeMd_20,
                fontWeight: FontWeight.bold,
                color: isSelected ? PColors.primary : PColors.black,
              ),
            ),
            const SizedBox(height: 7),
          ],
        ),
      ),
    );
  }
}
