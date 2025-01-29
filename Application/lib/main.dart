import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:pay_pocket/app.dart';
import 'package:pay_pocket/firebase_options.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
// FB init
  await Firebase.initializeApp(
      // options: DefaultFirebaseOptions.currentPlatform,
      );
// app start
  runApp(MyApp());
}
