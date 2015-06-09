angular.module('app')
	.config(function ($translateProvider) {
		$translateProvider.translations('en', {
			NAV_TURTLE: 'Turtle Time',
			NAV_BARREL: 'Barrel Breaking',
			NAV_EVENT: 'Event',
			NAV_SETTINGS: 'Settings',
			TT_TITLE: 'Turtle Time Calculator',
			TT_DIGIT: '6th ID digit:',
			TT_FORMAT: '24hr format',
			TT_TIMEZONE: 'Time Zone:',
			TT_SEEMORE: 'See More',
			BB_TITLE: 'Barrel Breaking',
			BB_TIME: 'Time till next rotation:',
			BB_ALT: 'Show Hours',
			BB_DATE: 'Date',
			BB_WOODEN: 'Wooden',
			BB_SILVER: 'Silver',
			BB_GOLD: 'Gold'
		})
		.translations('de', {
			NAV_TURTLE: 'Turtle Zeiten',
			NAV_BARREL: 'Barrel Breaking',
			NAV_EVENT: 'Event',
			NAV_SETTINGS: 'Einstellungen',
			TT_TITLE: 'Turtle Zeiten Rechner',
			TT_DIGIT: '6te Ziffer der ID:',
			TT_FORMAT: '24-Stunden Format',
			TT_TIMEZONE: 'Zeitzone:',
			TT_SEEMORE: 'siehe mehr',
			BB_TITLE: 'Barrel Breaking',
			BB_TIME: 'Zeit bis zum nächsten Wechsel:',
			BB_ALT: 'Anzeige Stunden',
			BB_DATE: 'Datum',
			BB_WOODEN: 'Holz',
			BB_SILVER: 'Silber',
			BB_GOLD: 'Gold'
		})
		.translations('es', {
			NAV_TURTLE: 'Horario Tortugas',
			NAV_BARREL: 'Friend Game',
			NAV_EVENT: 'Evento',
			NAV_SETTINGS: 'Configuración',
			TT_TITLE: 'Horario Tortugas Calculadora',
			TT_DIGIT: '6th dígito de ID:',
			TT_FORMAT: '24 horas',
			TT_TIMEZONE: 'Zona Horaria:',
			TT_SEEMORE: 'ver más',
			BB_TITLE: 'Friend Game',
			BB_TIME: 'Tiempo hasta la próxima rotación:',
			BB_ALT: 'Mostrar las horas',
			BB_DATE: 'Fecha',
			BB_WOODEN: 'Madera',
			BB_SILVER: 'Plata',
			BB_GOLD: 'Oro'
		});
		$translateProvider.translations('fr', {
			NAV_TURTLE: 'Bonus Tortues',
			NAV_BARREL: 'Casse-Tonneau',
			NAV_EVENT: 'Évenement',
			NAV_SETTINGS: 'Paramètres',
			TT_TITLE: 'Calculateur Bonus Tortues',
			TT_DIGIT: '6ème chiffre ID:',
			TT_FORMAT: 'Format 24h',
			TT_TIMEZONE: 'Fuseau Horaire:',
			TT_SEEMORE: 'Plus',
			BB_TITLE: 'Casse-Tonneau',
			BB_TIME: 'Temps avant prochaine rotation:',
			BB_ALT: 'Voir les heures',
			BB_DATE: 'Date',
			BB_WOODEN: 'Bois',
			BB_SILVER: 'Argent',
			BB_GOLD: 'Or'
		})
		$translateProvider.preferredLanguage('en');
		$translateProvider.useSanitizeValueStrategy('escaped');
	});
