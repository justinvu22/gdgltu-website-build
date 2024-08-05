import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_app/views/components/hero_top_text.dart';
import 'package:url_launcher/url_launcher.dart';

class Homepage extends StatefulWidget {
  const Homepage({super.key});

  @override
  _HomepageState createState() => _HomepageState();
}

class _HomepageState extends State<Homepage> {
  // No need for isNavRailOpen anymore

  var _instUrl = Uri(
    scheme: 'https',
    host: 'instagram.com',
    path: 'gdsclatrobe',
  );

    void _launchUrlInsta() async =>
      await canLaunchUrl(_instUrl) ? await launchUrl(_instUrl) : throw 'Could not launch';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Row( // Use Row to place the rail and content side-by-side
        children: [
          NavigationRail(
            backgroundColor: Color(0xF9FFFFFF),
            // No leading icon in this version
            extended: false,
            leading: const Padding(padding: EdgeInsets.only(top: 10), child: Icon(Icons.more_horiz)),
            labelType: NavigationRailLabelType.all,
            groupAlignment: 0,
             // Hide labels (icons only)
            destinations: const [
              NavigationRailDestination(
                icon: Icon(Icons.home_outlined),
                selectedIcon: Icon(Icons.home_filled),
                label: Text('Home'),
              ),
              NavigationRailDestination(
                icon: Icon(Icons.description_outlined),
                selectedIcon: Icon(Icons.description),
                label: Text('Projects'),
              ),
              NavigationRailDestination(icon: Icon(Icons.event_outlined),
              selectedIcon: Icon(Icons.event), label: Text('Events'),),

              NavigationRailDestination(icon: Icon(Icons.groups_outlined), selectedIcon: Icon(Icons.groups), label: Text('About Us'),),
              // Add more destinations as needed
            ],
            selectedIndex: 0, 
            onDestinationSelected: (index) {
              // Handle navigation when items are clicked
            },
          ), // Add a divider
          Expanded( // Make the content take the remaining space
            child: Row(
              children: [TopHero()],
            ),
          ),
        ],
      ),
    );
  }
}
