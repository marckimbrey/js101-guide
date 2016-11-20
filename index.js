var Menu = require('terminal-menu');
var menu = Menu({ width: 29, x: 4, y: 2 });
var items = require('./data.json')

menu.reset();
menu.write('JS101 ROADMAP\n');
menu.write('-------------------------\n');

items.forEach(function(item){
    menu.add(item.title);
});

menu.on('select', function (label, i) {
    menu.close();
    var item = items[i];
    console.log('')
    console.log(item.body);
    console.log('')
});
process.stdin.pipe(menu.createStream()).pipe(process.stdout);

process.stdin.setRawMode(true);
menu.on('close', function () {
    process.stdin.setRawMode(false);
    process.stdin.end();
});
