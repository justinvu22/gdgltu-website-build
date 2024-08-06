import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class TopHeroImg extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    return Container(
      alignment: Alignment.center,
      padding: const EdgeInsets.only(left: 200),
      child: const Stack(
        clipBehavior: Clip.none,
        alignment: Alignment.center, // Align elements to center of stack
          children: <Widget>[
            Positioned(top:0, right: -55,child: Image(image: AssetImage('lib/assets/images/polygon_1.png'), width: 150,height: 150)),
            Positioned(child: Image(image: AssetImage('lib/assets/images/hero_img.png'), width: 300,height: 500,)),
            Positioned(bottom:0, left: -55, child: Image(image: AssetImage('lib/assets/images/star_1.png'), width: 150, height: 150,))// Replace with your image path
          ],
      ),
    );
}
}