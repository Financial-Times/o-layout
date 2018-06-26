let globalPrefix = '/bower_components/';
const moduleVersions = {};
const modulePaths = {};

function trim(s) {
	return s.replace(/^\/+/, '').replace(/\/+$/, '');
}

module.exports = {
	setGlobalPathPrefix: function(newprefix) {
		if (typeof newprefix !== 'undefined') {
			globalPrefix = newprefix;
		}
		return this;
	},
	// left in for backwards compatibility but shouldn't be needed hereonin
	setModuleVersions: function(map) {
		for (const i in map) {
			if (i) {
				moduleVersions[i] = trim(map[i]);
			}
		}
		return this;
	},
	setModulePaths: function(map) {
		for (const i in map) {
			if (i) {
				modulePaths[i] = trim(map[i]);
			}
		}
		return this;
	},
	resolve: function(path, modulename) {
		let fullpath = trim(path);

		if (typeof modulePaths[modulename] !== 'undefined') {
			fullpath = modulePaths[modulename] + '/' + fullpath;
		} else {
			fullpath = modulename +	'/' + fullpath;

			if (globalPrefix) {
				fullpath = globalPrefix + fullpath;
			}
		}

		return fullpath;
	}
};
