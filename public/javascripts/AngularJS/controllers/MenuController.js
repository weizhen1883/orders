angularApp.controller('MenuController', ['$scope', function($scope) {
	$scope.entrees = [
		{
			name: 'Dongpo Pork',
			imgUrl: '/images/menu_pics/dongporou.jpg',
			restrand: 'Dimming Garden',
			cal: '1000 Cal',
			price: 12.99,
			id: 'entrees-submit',
			href: '#sides'
		},
		{
			name: 'Peking Duck',
			imgUrl: '/images/menu_pics/kaoya.jpg',
			restrand: 'Dimming Garden',
			cal: '1200 Cal',
			price: 18.99,
			id: 'entrees-submit',
			href: '#sides'
		},
		{
			name: 'Mapo Tofu',
			imgUrl: '/images/menu_pics/mapuodoufu.jpg',
			restrand: 'Dimming Garden',
			cal: '900 Cal',
			price: 10.99,
			id: 'entrees-submit',
			href: '#sides'
		},
		{
			name: 'Lamp',
			imgUrl: '/images/menu_pics/yangpai.jpg',
			restrand: 'Dimming Garden',
			cal: '1000 Cal',
			price: 14.99,
			id: 'entrees-submit',
			href: '#sides'
		},
		{
			name: 'General Source Chicken',
			imgUrl: '/images/menu_pics/zuozongji.jpg',
			restrand: 'Dimming Garden',
			cal: '950 Cal',
			price: 9.99,
			id: 'entrees-submit',
			href: '#sides'
		},
		{
			name: 'Chicken',
			imgUrl: '/images/menu_pics/hongshaoji.jpg',
			restrand: 'Dimming Garden',
			cal: '800 Cal',
			price: 11.99,
			id: 'entrees-submit',
			href: '#sides'
		}
	];

	$scope.sides = [
		{
			name: 'Dongpo Pork',
			imgUrl: '/images/menu_pics/dongporou.jpg',
			restrand: '',
			cal: '1000 Cal',
			price: 12.99,
			id: 'sides-submit',
			href: '#sides'
		},
		{
			name: 'Peking Duck',
			imgUrl: '/images/menu_pics/kaoya.jpg',
			restrand: '',
			cal: '1200 Cal',
			price: 18.99,
			id: 'sides-submit',
			href: '#sides'
		},
		{
			name: 'Mapo Tofu',
			imgUrl: '/images/menu_pics/mapuodoufu.jpg',
			restrand: '',
			cal: '900 Cal',
			price: 10.99,
			id: 'sides-submit',
			href: '#sides'
		}
	];

	$scope.staples = [
		{
			name: 'General Source Chicken',
			imgUrl: '/images/menu_pics/zuozongji.jpg',
			restrand: 'Dimming Garden',
			cal: '950 Cal',
			price: 9.99,
			id: 'staple-submit',
			href: '#staple'
		},
		{
			name: 'Chicken',
			imgUrl: '/images/menu_pics/hongshaoji.jpg',
			restrand: 'Dimming Garden',
			cal: '800 Cal',
			price: 11.99,
			id: 'staple-submit',
			href: '#staple'
		}
	];
}]);