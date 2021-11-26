import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Assignment 2021 11 25'),
      ),
      body: SizedBox(
        width: MediaQuery.of(context).size.width,
        height: MediaQuery.of(context).size.height,
        child: Wrap(
          direction: Axis.vertical,
          alignment: WrapAlignment.center,
          runAlignment: WrapAlignment.center,
          spacing: 20,
          children: [
            ElevatedButton(
                onPressed: () {
                  Navigator.pushNamed(context, '/list');
                },
                child: const Text('List page')),
            ElevatedButton(
                onPressed: () {
                  Navigator.pushNamed(context, '/detail');
                },
                child: const Text('Detail page'))
          ],
        ),
      ),
    );
  }
}
