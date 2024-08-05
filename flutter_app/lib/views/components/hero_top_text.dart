import 'package:flutter/cupertino.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_app/colorsTheme.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:flutter_material_design_icons/flutter_material_design_icons.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:flutter_app/views/components/join_us.dart';

const appcolors = AppColors();

class TopHero extends StatefulWidget {
  @override
  TopHeroTxt createState() => TopHeroTxt();
}

class TopHeroTxt extends State<TopHero> with SingleTickerProviderStateMixin {
  late AnimationController _animationController;
  late Animation _animation;
  late Animation _curve;

  var httpsUrL = Uri(
      scheme: 'https',
      host: 'gdsc.community.dev',
      path: 'la-trobe-university-melbourne-australia/');

  void _launchUrl() async => await canLaunchUrl(httpsUrL)
      ? await launchUrl(httpsUrL)
      : throw 'Could not launch';

  var _instUrl = Uri(
    scheme: 'https',
    host: 'instagram.com',
    path: 'gdsclatrobe',
  );

  void _launchUrlInsta() async => await canLaunchUrl(_instUrl)
      ? await launchUrl(_instUrl)
      : throw 'Could not launch';

      
  var _linkInUrl = Uri(
    scheme: 'https',
    host: 'linkedin.com',
    path: 'company/gdscltu',
  );

  void _launchUrlLinkIn() async => await canLaunchUrl(_linkInUrl)
      ? await launchUrl(_linkInUrl)
      : throw 'Could not launch';

        var _discordUrl = Uri(
    scheme: 'https',
    host: 'discord.gg',
    path: '4HX7Ubk983',
  
  );

  void _launchUrlDiscIn() async => await canLaunchUrl(_discordUrl)
      ? await launchUrl(_discordUrl)
      : throw 'Could not launch';

  @override
  void initState() {
    _animationController = AnimationController(
        vsync: this, duration: const Duration(milliseconds: 550));
    _curve = CurvedAnimation(
        parent: _animationController, curve: Curves.easeInOutSine);
    _animation = Tween<double>(begin: 0.0, end: 250.0)
        .animate(_curve as Animation<double>)
      ..addListener(() {
        setState(() {});
      });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    double paddingPerc;
    paddingPerc = MediaQuery.of(context).size.width / 20;
    return Container(
      padding: EdgeInsets.only(left: paddingPerc),
      width: MediaQuery.of(context).size.width / 2,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Image(
              image: AssetImage('lib/assets/images/logo_full.png'), width: 300),
          const SizedBox(height: 10),
          Row(
            children: [
              const Text(
                'Where',
                style: TextStyle(
                  fontSize: 50,
                  fontWeight: FontWeight.w600,
                  fontFamily: 'Google Sans',
                ),
                textAlign: TextAlign.start,
              ),
              const SizedBox(
                width: 10,
              ),
              ShaderMask(
                blendMode: BlendMode.srcIn,
                shaderCallback: (bounds) {
                  return appcolors.redBlueGradient.createShader(bounds);
                },
                child: const Text(
                  'Tech',
                  style: TextStyle(
                    fontSize: 50,
                    fontWeight: FontWeight.w600,
                    fontFamily: 'Google Sans',
                  ),
                ),
              ),
              const SizedBox(
                width: 10,
              ),
              const Text('and',
                  style: TextStyle(
                    fontSize: 50,
                    fontWeight: FontWeight.w600,
                    fontFamily: 'Google Sans',
                  )),
              const SizedBox(
                width: 10,
              ),
              ShaderMask(
                blendMode: BlendMode.srcIn,
                shaderCallback: (bounds) {
                  return appcolors.yellowRedGradient.createShader(bounds);
                },
                child: const Text(
                  'Community',
                  style: TextStyle(
                    fontSize: 50,
                    fontWeight: FontWeight.w600,
                    fontFamily: 'Google Sans',
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 20),
          Container(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(50),
              border: Border.all(
                  color: const Color(0xFF1A1A1A),
                  width: 3,
                  strokeAlign: BorderSide.strokeAlignInside),
            ),
            clipBehavior: Clip.hardEdge,
            child: Stack(
              clipBehavior: Clip.hardEdge,
              alignment: Alignment.centerLeft,
              children: <Widget>[
                Container(
                    clipBehavior: Clip.hardEdge,
                    width: _animation.value,
                    height: 75,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(50),
                      gradient: LinearGradient(
                        colors: [
                          appcolors.blue500,
                          appcolors.purpleGradient,
                          appcolors.red500,
                          appcolors.orangeGradient,
                          appcolors.yellowGradient,
                          appcolors.green500
                        ],
                        begin: Alignment.centerLeft,
                        end: Alignment.centerRight,
                      ),
                    )),
                MouseRegion(
                  onHover: (PointerHoverEvent event) {
                    _animationController.forward();
                  },
                  onExit: (PointerExitEvent event) {
                    _animationController.reverse();
                  },
                  child: Container(
                    clipBehavior: Clip.hardEdge,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(50),
                    ),
                    width: 250,
                    height: 75,
                    child: const Center(
                      child: Text(
                        'Connect',
                        style: TextStyle(
                          color: Color(0xFF1A1A1A),
                          fontSize: 50,
                          fontFamily: 'Google Sans',
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                    ),
                  ),
                )
              ],
            ),
          ),
          const SizedBox(height: 20),
          JoinUs(),
          const SizedBox(
            height: 10,
          ),
          Row(
            children: [
              IconButton(
                  onPressed: _launchUrlInsta, iconSize: 24,icon: Icon(size: 24,MdiIcons.instagram)), SizedBox(width: 10),
              IconButton(iconSize: 24, onPressed: _launchUrlLinkIn, icon: Icon(size: 24,MdiIcons.linkedin)),SizedBox(width: 10),IconButton(onPressed: _launchUrlDiscIn, icon: FaIcon(size: 24,FontAwesomeIcons.discord)),
            
            ],
          )
        ],
      ),
    );
  }
}
