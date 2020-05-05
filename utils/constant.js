import {get} from "lodash";

export const constant = {
	hero: {
		role: {
			"TANK": {
				label: "坦克",
				icon: "icondunpai"
			},
			"DAMAGE": {
				label: "输出",
				icon: "icondanyaox"
			},
			"SUPPORT": {
				label: "辅助",
				icon: "iconshizi"
			}
		}
	}
}

export const getFilterList = path => {
	const obj = get(constant, path, []);
	return Object.entries(obj).map(([value, item]) => ({
		...item,
		value
	}))
}

export const getFilterItem = (path, value) => {
	return get(constant, path, {})[value]
}