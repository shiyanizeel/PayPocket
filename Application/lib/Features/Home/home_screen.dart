import 'package:flutter/material.dart';
import 'package:pay_pocket/utils/constants/colors.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Image.asset("assets/logos/logo.png", height: 40),
        centerTitle: true,
        backgroundColor: PColors.lightContainer,
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [Text("data")],
        ),
      ),
    );
  }
}
