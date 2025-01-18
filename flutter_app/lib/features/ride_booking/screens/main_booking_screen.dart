// lib/features/ride_booking/screens/main_booking_screen.dart

import 'package:flutter/material.dart';
import 'package:flutter_app/colorsTheme.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MainBookingScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        backgroundColor: Color(0xFF242424),
        elevation: 0,
        toolbarHeight: 64,

        title: Row(
          children: [
            SvgPicture.asset(
              'Lib/assets/images/latrobe_logo.svg',
              height: 55,
              colorFilter: const ColorFilter.mode(Colors.white, BlendMode.srcIn),
              
            ),
            SizedBox(width: 24),
            Text(
              'Glider',
              style: TextStyle(
                  color: Colors.white,
                  fontFamily: 'Google Sans',
                  fontWeight: FontWeight.w500,
              ),
            ),
          ],
        ),
        actions: [
          IconButton(
            icon: Icon(Icons.person_outline, color: Colors.white),
            onPressed: () {
              // Profile button - we'll implement later
            },
          )
        ],
      ),
      body: Stack(
        children: [
          // Map takes up full screen
          Container(
            height: MediaQuery.of(context).size.height,
            width: MediaQuery.of(context).size.width,
            child: GoogleMap(
              initialCameraPosition: CameraPosition(
                target: LatLng(-37.7204, 145.0498), // La Trobe Bundoora coordinates
                zoom: 15,
              ),
              myLocationEnabled: true,
              myLocationButtonEnabled: true,
              mapType: MapType.normal,
              zoomControlsEnabled: true,
              onMapCreated: (GoogleMapController controller) {
                // We'll implement map controller logic later
              },
            ),
          ),
          
          // Ride request card overlay
          Positioned(
            bottom: 0,
            left: 0,
            right: 0,
            child: Container(
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(20),
                  topRight: Radius.circular(20),
                ),
                boxShadow: [
                  BoxShadow(
                    color: Colors.grey.withOpacity(0.5),
                    spreadRadius: 2,
                    blurRadius: 7,
                    offset: Offset(0, -3),
                  ),
                ],
              ),
              padding: EdgeInsets.all(20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(
                    'Request Glider',
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                      fontFamily: 'Google Sans',
                    ),
                  ),
                  SizedBox(height: 20),
                  // Location input fields
                  LocationInputField(
                    icon: Icons.my_location,
                    hint: 'Your Location',
                    onTap: () {
                      // Implement location selection
                    },
                  ),
                  SizedBox(height: 10),
                  LocationInputField(
                    icon: Icons.location_on,
                    hint: 'Where to?',
                    onTap: () {
                      // Implement destination selection
                    },
                  ),
                  SizedBox(height: 20),
                  // Request button
                  ElevatedButton(
                    onPressed: () {
                      // Implement ride request
                    },
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Color(0xFFE31837), // Changed from 'primary' to 'backgroundColor'
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(10),
                      ),
                    ),
                    child: Container(
                      width: double.infinity,
                      padding: EdgeInsets.symmetric(vertical: 15),
                      child: Text(
                        'Request Ride',
                        textAlign: TextAlign.center,
                        style: TextStyle(fontSize: 18),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}

// Location input field widget
class LocationInputField extends StatelessWidget {
  final IconData icon;
  final String hint;
  final VoidCallback onTap;

  const LocationInputField({
    required this.icon,
    required this.hint,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: onTap,
      child: Container(
        padding: EdgeInsets.symmetric(horizontal: 15, vertical: 12),
        decoration: BoxDecoration(
          border: Border.all(color: Colors.grey[300]!),
          borderRadius: BorderRadius.circular(10),
        ),
        child: Row(
          children: [
            Icon(icon, color: Colors.grey[600]),
            SizedBox(width: 15),
            Text(
              hint,
              style: TextStyle(
                color: Colors.grey[600],
                fontSize: 16,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
