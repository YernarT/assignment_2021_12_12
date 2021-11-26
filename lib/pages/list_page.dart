import 'package:flutter/material.dart';

class ListPage extends StatelessWidget {
  const ListPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Container(
      width: MediaQuery.of(context).size.width,
      height: MediaQuery.of(context).size.height,
      decoration: const BoxDecoration(color: Color.fromRGBO(244, 245, 247, 1)),
      child: Column(
        children: const [Head(), Body(), Foot()],
      ),
    ));
  }
}

class Head extends StatelessWidget {
  const Head({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
        height: MediaQuery.of(context).size.height * 0.15,
        padding: const EdgeInsets.all(10),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                const Text('Red Squeare, 17',
                    style: TextStyle(
                        color: Color.fromRGBO(33, 34, 36, 1), fontSize: 20)),
                const Spacer(flex: 1),
                const Icon(
                  Icons.messenger_outline,
                  color: Color.fromRGBO(107, 108, 110, 1),
                  size: 20,
                ),
                const SizedBox(
                  width: 10,
                ),
                ClipOval(
                    child: Image.network(
                  'https://images.pexels.com/photos/5980746/pexels-photo-5980746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                  width: 30,
                  height: 30,
                  fit: BoxFit.cover,
                )),
              ],
            ),
            const SizedBox(
              height: 5,
            ),
            const Text(
              'Extence 3, interoom 15, apartment 15, floor5',
              style: TextStyle(
                  color: Color.fromRGBO(203, 203, 203, 1), fontSize: 12),
            )
          ],
        ));
  }
}

class Body extends StatelessWidget {
  const Body({Key? key}) : super(key: key);

  Row tags() {
    return Row(
      children: [
        Container(
          padding: const EdgeInsets.all(6),
          decoration: const BoxDecoration(
              color: Color.fromRGBO(246, 245, 250, 1),
              borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(6), bottomLeft: Radius.circular(6))),
          child: const Icon(
            Icons.check_box_outline_blank_rounded,
            size: 14,
            color: Color.fromRGBO(251, 52, 81, 1),
          ),
        ),
        const SizedBox(width: 2),
        Container(
          padding: const EdgeInsets.all(6),
          decoration: const BoxDecoration(
              color: Color.fromRGBO(246, 245, 250, 1),
              borderRadius: BorderRadius.only(
                  topRight: Radius.circular(6),
                  bottomRight: Radius.circular(6))),
          child: const Icon(
            Icons.list_outlined,
            size: 14,
            color: Color.fromRGBO(33, 34, 36, 1),
          ),
        ),
        const Spacer(flex: 1),
        Container(
            padding: const EdgeInsets.all(6),
            decoration: const BoxDecoration(
                color: Color.fromRGBO(251, 52, 81, 0.24),
                borderRadius: BorderRadius.all(Radius.circular(6))),
            child: Row(
              children: const [
                Icon(
                  Icons.dashboard,
                  size: 14,
                  color: Color.fromRGBO(251, 52, 81, 1),
                ),
                SizedBox(
                  width: 2,
                ),
                Text('Breakfast',
                    style: TextStyle(
                        color: Color.fromRGBO(251, 52, 81, 1), fontSize: 14)),
              ],
            )),
        const Spacer(flex: 1),
        Container(
            padding: const EdgeInsets.all(6),
            decoration: const BoxDecoration(
                color: Color.fromRGBO(246, 245, 250, 1),
                borderRadius: BorderRadius.all(Radius.circular(6))),
            child: Row(
              children: const [
                Icon(
                  Icons.dashboard,
                  size: 14,
                  color: Color.fromRGBO(33, 34, 36, 1),
                ),
                SizedBox(
                  width: 2,
                ),
                Text('Noodles',
                    style: TextStyle(
                        color: Color.fromRGBO(33, 34, 36, 1), fontSize: 14)),
              ],
            )),
      ],
    );
  }

  Row items(BuildContext context) {
    return Row(
      children: [
        Container(
          width: MediaQuery.of(context).size.width - 24,
          padding: const EdgeInsets.all(12),
          decoration: const BoxDecoration(
              color: Color.fromRGBO(244, 245, 247, 1),
              borderRadius: BorderRadius.all(Radius.circular(12))),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Container(
                width: 220,
                height: 220,
                decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(1000),
                    boxShadow: [
                      BoxShadow(
                          color: Colors.black.withOpacity(0.1),
                          blurRadius: 4,
                          offset: const Offset(2, 6),
                          spreadRadius: 8),
                    ],
                    image: const DecorationImage(
                        image: NetworkImage(
                          'https://image.shutterstock.com/image-photo/eating-chinese-beef-lo-mein-600w-221820979.jpg',
                        ),
                        fit: BoxFit.cover)),
              ),
              const SizedBox(
                height: 18,
              ),
              const Text('Pasta AI Pomodoro with Basil',
                  style: TextStyle(
                      color: Color.fromRGBO(33, 34, 36, 1), fontSize: 18)),
              const SizedBox(
                height: 10,
              ),
              ElevatedButton(
                  style: ButtonStyle(
                      backgroundColor: MaterialStateProperty.all(
                          const Color.fromRGBO(251, 52, 81, 1))),
                  onPressed: null,
                  child: const Text('\$6.30',
                      style: TextStyle(color: Colors.white, fontSize: 16)))
            ],
          ),
        )
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    return Container(
        width: MediaQuery.of(context).size.width,
        height: MediaQuery.of(context).size.height * 0.75,
        padding: const EdgeInsets.symmetric(vertical: 24, horizontal: 12),
        decoration: const BoxDecoration(
            borderRadius: BorderRadius.only(
                topLeft: Radius.circular(20), topRight: Radius.circular(20)),
            color: Colors.white,
            boxShadow: [
              BoxShadow(
                color: Color.fromRGBO(203, 203, 203, 0.4),
                blurRadius: 4,
                offset: Offset(0, -4),
              )
            ]),
        child: Column(
          children: [
            tags(),
            const SizedBox(
              height: 26,
            ),
            SingleChildScrollView(
                scrollDirection: Axis.horizontal, child: items(context)),
          ],
        ));
  }
}

class Foot extends StatelessWidget {
  const Foot({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
        width: MediaQuery.of(context).size.width,
        height: MediaQuery.of(context).size.height * 0.1,
        padding: const EdgeInsets.symmetric(vertical: 24, horizontal: 12),
        decoration: const BoxDecoration(
            borderRadius: BorderRadius.only(
                topLeft: Radius.circular(20), topRight: Radius.circular(20)),
            color: Colors.white,
            boxShadow: [
              BoxShadow(
                color: Color.fromRGBO(203, 203, 203, 0.4),
                blurRadius: 4,
                offset: Offset(0, -4),
              )
            ]),
        alignment: Alignment.center,
        child: const Text('30 min',
            style:
                TextStyle(color: Color.fromRGBO(33, 34, 36, 1), fontSize: 14)));
  }
}
