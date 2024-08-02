import 'package:flutter/material.dart';

class AppColors{
  final blue500 = const Color(0xFF4285F4);
final green500 = const Color(0xFF34A853);
final yellow500 = const Color(0xFFFBBC04);
final red500 = const Color(0xFFEA4335);
final yellowGradient = const Color(0xFFFFCB32);
final purpleGradient = const Color(0xFF9F6CD4);
final orangeGradient = const Color(0xFFF46831);
final redBlueGradient = const LinearGradient(
  colors: [
    Color(0xFF4285F4),
    Color(0xFF9F6CD4),
    Color(0xFFEA4335),
  ],
);

final yellowRedGradient = const LinearGradient(
  colors: [
    Color(0xFFFFCB32),
    Color(0xFFF46831),
    Color(0xFFEA4335),
  ],
);

const AppColors ();
}

