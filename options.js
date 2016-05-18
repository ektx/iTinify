var fs = require('fs');
var path = require('path');

function toConfig(homedir, str, type) {
	var fileData = {};
	
	try {
		fileData = fs.readFileSync(homedir, 'utf8');
		fileData = JSON.parse(fileData);
	} catch(err) {
		fileData.myCount = 500;
		console.log('没有配置文件文件！')
	}

	if (type == 'key') {
		fileData.key = str;
	}
	else if (type == 'myCount') {
		if ( isNaN( Number(str) ) ) {
			console.log('Error！请输入数字！');
			return;
		} else {
			fileData.myCount = str;
		}
	}

	fs.writeFile(homedir, JSON.stringify(fileData), 'utf8', (err) => {
		if (err) throw err;
		console.log('保存配置: '+homedir)
	})
};

module.exports = toConfig;
