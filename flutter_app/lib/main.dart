import 'package:flutter/material.dart';
import 'package:flutter_app/views/homepage.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'GDG La Trobe University',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        fontFamily: 'Google Sans',
      ),
      home: const Homepage(),
    );
  }
}

