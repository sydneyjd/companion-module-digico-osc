exports.getActions  = function() {

	let actions = [];
	actions.length = 0;
	let CHOICES_CHANNELS =[];
	let CHOICES_CG =[];
	let CHOICES_AUX =[];
	let CHOICES_GO =[];
	for (var i = 1; i < 145; i++) {
		CHOICES_CHANNELS.push({ label: `ch ${i}`, id: i})
	}
	for (var i = 1; i < 25; i++) {
		CHOICES_CG.push({ label: `CG ${i}`, id: i})
	}
	for (var i = 1; i < 13; i++) {
		CHOICES_AUX.push({ label: `Aux ${i}`, id: i})
	}
	for (var i = 1; i < 13; i++) {
		CHOICES_GO.push({ label: `Group Output ${i}`, id: i})
	}
	const CHOICES_FADER = [
		{ label: '+10 db', id: 1},
		{ label: '+9 db', id: 0.975},
		{ label: '+8 db', id: 0.95},
		{ label: '+7 db', id: 0.925},
		{ label: '+6 db', id: 0.9},
		{ label: '+5 db', id: 0.875},
		{ label: '+4 db', id: 0.85},
		{ label: '+3 db', id: 0.825},
		{ label: '+2 db', id: 0.8},
		{ label: '+1 db', id: 0.775},
		{ label: '0 db', id: 0.75},
		{ label: '-1 db', id: 0.725},
		{ label: '-2 db', id: 0.7},
		{ label: '-3 db', id: 0.675},
		{ label: '-4 db', id: 0.65},
		{ label: '-5 db', id: 0.625},
		{ label: '-6 db', id: 0.6},
		{ label: '-7 db', id: 0.575},
		{ label: '-8 db', id: 0.55},
		{ label: '-9 db', id: 0.525},
		{ label: '-10 db', id: 0.5},
		{ label: '-12 db', id: 0.475},
		{ label: '-14 db', id: 0.45},
		{ label: '-16 db', id: 0.425},
		{ label: '-18 db', id: 0.4},
		{ label: '-20 db', id: 0.375},
		{ label: '-22 db', id: 0.35},
		{ label: '-24 db', id: 0.325},
		{ label: '-26 db', id: 0.3},
		{ label: '-28 db', id: 0.275},
		{ label: '-30 db', id: 0.25},
		{ label: '-50 db', id: 0.125},
		{ label: 'OFF', id: 0}
	]
    const CHOICES_FADER_IPAD = [
		{ label: '+10 db', id: 10},
		{ label: '+9 db', id: 9},
		{ label: '+8 db', id: 8},
		{ label: '+7 db', id: 7},
		{ label: '+6 db', id: 6},
		{ label: '+5 db', id: 5},
		{ label: '+4 db', id: 4},
		{ label: '+3 db', id: 3},
		{ label: '+2 db', id: 2},
		{ label: '+1 db', id: 1},
		{ label: '0 db', id: 0},
		{ label: '-1 db', id: -1},
		{ label: '-2 db', id: -2},
		{ label: '-3 db', id: -3},
		{ label: '-4 db', id: -4},
		{ label: '-5 db', id: -5},
		{ label: '-6 db', id: -6},
		{ label: '-7 db', id: -7},
		{ label: '-8 db', id: -8},
		{ label: '-9 db', id: -9},
		{ label: '-10 db', id: -10},
		{ label: '-12 db', id: -12},
		{ label: '-14 db', id: -14},
		{ label: '-16 db', id: -16},
		{ label: '-18 db', id: -18},
		{ label: '-20 db', id: -20},
		{ label: '-22 db', id: -22},
		{ label: '-24 db', id: -24},
		{ label: '-26 db', id: -26},
		{ label: '-28 db', id: -28},
		{ label: '-30 db', id: -30},
		{ label: '-40 db', id: -40},
		{ label: '-50 db', id: -50},
		{ label: '-66 db', id: -66},
		{ label: 'OFF', id: -150}
	]

	if(this.config.series == "S") {

		actions['snapshotS'] = {
			label: 'Fire snapshot S-series',
			options: [
				{
					label: 'number',
					type: 'number',
					id: 'snapshot',
					default: 1,
					min: 0,
					max: 9999
				}
			]
		}

		actions['snapshotNextS'] = {	label: 'Fire next snapshot S-series'	}

		actions['snapshotPrevS'] = {	label: 'Fire previous snapshot S-series'	}
	} else {

		if(this.config.series == "OSC") {
            actions['fader'] = {
			label: 'Set fader of channel',
			options: [
			{
				label: 'channel number',
				type: 'dropdown',
				id: 'channel',
				default: '1',
				choices: CHOICES_CHANNELS
			},
			{
				label: 'fader value',
				type: 'dropdown',
				id: 'fader',
				default: 0.75,
				choices: CHOICES_FADER
			}]
		}
        }
        else {
        actions['fader'] = {
			label: 'Set fader of channel',
			options: [
			{
				label: 'channel number',
				type: 'dropdown',
				id: 'channel',
				default: '1',
				choices: CHOICES_CHANNELS
			},
			{
				label: 'fader value',
				type: 'dropdown',
				id: 'fader',
				default: 0,
				choices: CHOICES_FADER_IPAD
			}]
		}
        }

		actions['mute'] = {
			label: 'Mute channel',
			options: [
			{
				label: 'channel number',
				type: 'dropdown',
				id: 'channel',
				default: 1,
				choices: CHOICES_CHANNELS
			},
			{
				label: 'mute on/off',
				type: 'dropdown',
				id: 'mute',
				default: '1',
				choices: [{label: "on", id: "1"},{label: "off", id: "0"}]
			}]
		}

		actions['auxmute'] = {
			label: 'Mute Aux',
			options: [
			{
				label: 'Aux Number',
				type: 'dropdown',
				id: 'channel',
				default: 1,
				choices: CHOICES_AUX
			},
			{
				label: 'mute on/off',
				type: 'dropdown',
				id: 'auxmute',
				default: '1',
				choices: [{label: "on", id: "1"},{label: "off", id: "0"}]
			}]
		}

		actions['cgmute'] = {
			label: 'Mute Control Group',
			options: [
			{
				label: 'Control Group Number',
				type: 'dropdown',
				id: 'channel',
				default: 1,
				choices: CHOICES_CG
			},
			{
				label: 'mute on/off',
				type: 'dropdown',
				id: 'cgmute',
				default: '1',
				choices: [{label: "on", id: "1"},{label: "off", id: "0"}]
			}]
		}

		actions['gomute'] = {
			label: 'Mute Group Output',
			options: [
			{
				label: 'Group Output Number',
				type: 'dropdown',
				id: 'channel',
				default: 1,
				choices: CHOICES_GO
			},
			{
				label: 'mute on/off',
				type: 'dropdown',
				id: 'gomute',
				default: '1',
				choices: [{label: "on", id: "1"},{label: "off", id: "0"}]
			}]
		}

		actions['phantom'] = {
			label: 'Phantom channel',
			options: [
			{
				label: 'channel number',
				type: 'dropdown',
				id: 'channel',
				default: 1,
				choices: CHOICES_CHANNELS
			},
			{
				label: 'Phantom on/off',
				type: 'dropdown',
				id: 'phantom',
				default: '1',
				choices: [{label: "on", id: "1"},{label: "off", id: "0"}]
			}]
		}

		actions['solo'] = {
			label: 'Solo channel',
			options: [
			{
				label: 'channel number',
				type: 'dropdown',
				id: 'channel',
				default: 1,
				choices: CHOICES_CHANNELS
			},
			{
				label: 'Solo on/off',
				type: 'dropdown',
				id: 'solo',
				default: '1',
				choices: [{label: "on", id: "1"},{label: "off", id: "0"}]
			}]
		}

		actions['snapshot'] = {
			label: 'Fire snapshot',
			options: [
				{
					label: 'number',
					type: 'number',
					id: 'snapshot',
					default: 1,
					min: 0,
					max: 9999
				}
			]
		}

		actions['snapshotNext'] = {	label: 'Fire next snapshot'	}

		actions['snapshotPrev'] = {	label: 'Fire previous snapshot'	}


		actions['macros'] = {
			label: 'Macro',
			options: [
				{
					label: 'number',
					type: 'number',
					id: 'macro',
					default: 1,
					min: 1,
					max: 256
				}
			]
		}
	}
	return actions
}
