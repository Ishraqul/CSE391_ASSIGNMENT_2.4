
		var input = document.getElementsByTagName('textarea')[0]

		document.getElementById('clear').onclick = function () {
			input.value = ''
		}

		var capitalize = false;
		document.getElementById('capitalize').onclick = function () {
			if (capitalize) input.value = input.value.toUpperCase()
			else input.value = input.value.toLowerCase()
			capitalize = !capitalize;
		}
		document.getElementById('strip').onclick = function () {
			var lines = input.value.split('\n')
			for (var i = 0; i < lines.length; i++)
				lines[i] = lines[i].trim();
			lines = lines.join('\n')
			input.value = lines
		}
		document.getElementById('sort').onclick = function () {
			var lines = input.value.split('\n')
			input.value = lines.sort().join('\n')
		}
		document.getElementById('reverse').onclick = function () {
			var lines = input.value.split('\n')
			for (var i = 0; i < lines.length; i++) {
				var prev = lines[i];
				lines[i] = '';
				for (var j = 0; j < prev.length; j++)
					lines[i] = prev[j] + lines[i];
			}
			lines = lines.join('\n')
			input.value = lines
		}
		document.getElementById('addNum').onclick = function () {
			var lines = input.value.split('\n')
			for (var i = 0; i < lines.length; i++)
				lines[i] = i + 1 + '. ' + lines[i];
			lines = lines.join('\n')
			input.value = lines
		}
		document.getElementById('shuffle').onclick = function () {
			var lines = input.value.split('\n')

			var shuffled = [];
			while (shuffled.length <= lines.length) {
				for (var _ of lines) {
					var randomNumb = Math.floor(Math.random() * lines.length);
					if (!shuffled.includes(lines[randomNumb]))
						shuffled.push(lines[randomNumb]);
				}
				if (shuffled.length === lines.length) break;
			}

			lines = shuffled.join('\n')
			input.value = lines
		}
