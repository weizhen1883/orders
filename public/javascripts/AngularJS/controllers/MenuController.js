angularApp.controller('MenuController', ['$scope', function($scope) {
	$scope.entrees = [
		{
			name: 'Dongpo Pork',
			imgUrl: '/images/menu_pics/dongporou.jpg',
			restrand: 'Dimming Garden',
			cal: '1000 Cal',
			price: 12.99,
			type: 'entrees',
			href: '#sides'
		},
		{
			name: 'Peking Duck',
			imgUrl: '/images/menu_pics/kaoya.jpg',
			restrand: 'Dimming Garden',
			cal: '1200 Cal',
			price: 18.99,
			type: 'entrees',
			href: '#sides'
		},
		{
			name: 'Mapo Tofu',
			imgUrl: '/images/menu_pics/mapuodoufu.jpg',
			restrand: 'Dimming Garden',
			cal: '900 Cal',
			price: 10.99,
			type: 'entrees',
			href: '#sides'
		},
		{
			name: 'Lamp',
			imgUrl: '/images/menu_pics/yangpai.jpg',
			restrand: 'Dimming Garden',
			cal: '1000 Cal',
			price: 14.99,
			type: 'entrees',
			href: '#sides'
		},
		{
			name: 'General Source Chicken',
			imgUrl: '/images/menu_pics/zuozongji.jpg',
			restrand: 'Dimming Garden',
			cal: '950 Cal',
			price: 9.99,
			type: 'entrees',
			href: '#sides'
		},
		{
			name: 'Chicken',
			imgUrl: '/images/menu_pics/hongshaoji.jpg',
			restrand: 'Dimming Garden',
			cal: '800 Cal',
			price: 11.99,
			type: 'entrees',
			href: '#sides'
		}
	];
}]);