import 'package:assignment_2021_11_25/pages/home_page.dart';
import 'package:flutter/material.dart';

import './pages/home_page.dart';
import './pages/list_page.dart';
import './pages/detail_page.dart';

void main() {
  runApp(const App());
}

class App extends StatelessWidget {
  const App({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Assignment_2021_11_25',
      initialRoute: '/',
      routes: {
        '/': (context) => const HomePage(),
        '/list': (context) => const ListPage(),
        '/detail': (context) => const DetailPage(),
      },
    );
  }
}
