angularApp.controller('MenuController', ['$scope', 'MenuItems', function($scope, MenuItems) {
	MenuItems.success(function(data) { 
	    $scope.newEntrees = data.entrees; 
	    console.log($scope.newEntrees);
	});

	$scope.entrees = [
		{
			name: 'Dongpo Pork',
			imgUrl: '/images/menu_pics/dongporou.jpg',
			restrand: 'Dimming Garden',
			cal: 1000,
			price: 12.99,
			className: 'entrees-submit',
			href: '#sides'
		},
		{
			name: 'Peking Duck',
			imgUrl: '/images/menu_pics/kaoya.jpg',
			restrand: 'Dimming Garden',
			cal: 1200,
			price: 18.99,
			className: 'entrees-submit',
			href: '#sides'
		},
		{
			name: 'Mapo Tofu',
			imgUrl: '/images/menu_pics/mapuodoufu.jpg',
			restrand: 'Dimming Garden',
			cal: 900,
			price: 10.99,
			className: 'entrees-submit',
			href: '#sides'
		},
		{
			name: 'Lamp',
			imgUrl: '/images/menu_pics/yangpai.jpg',
			restrand: 'Dimming Garden',
			cal: 1000,
			price: 14.99,
			className: 'entrees-submit',
			href: '#sides'
		},
		{
			name: 'General Source Chicken',
			imgUrl: '/images/menu_pics/zuozongji.jpg',
			restrand: 'Dimming Garden',
			cal: 950,
			price: 9.99,
			className: 'entrees-submit',
			href: '#sides'
		},
		{
			name: 'Chicken',
			imgUrl: '/images/menu_pics/hongshaoji.jpg',
			restrand: 'Dimming Garden',
			cal: 800,
			price: 11.99,
			className: 'entrees-submit',
			href: '#sides'
		}
	];

	$scope.sides = [
		{
			name: 'Dongpo Pork',
			imgUrl: '/images/menu_pics/dongporou.jpg',
			restrand: '',
			cal: 1000,
			price: 12.99,
			className: 'sides-submit',
			href: '#sides'
		},
		{
			name: 'Peking Duck',
			imgUrl: '/images/menu_pics/kaoya.jpg',
			restrand: '',
			cal: 1200,
			price: 18.99,
			className: 'sides-submit',
			href: '#sides'
		},
		{
			name: 'Mapo Tofu',
			imgUrl: '/images/menu_pics/mapuodoufu.jpg',
			restrand: '',
			cal: 900,
			price: 10.99,
			className: 'sides-submit',
			href: '#sides'
		}
	];

	$scope.staples = [
		{
			name: 'General Source Chicken',
			imgUrl: '/images/menu_pics/zuozongji.jpg',
			restrand: '',
			cal: 950,
			price: 9.99,
			className: 'staple-submit',
			href: '#staple'
		},
		{
			name: 'Chicken',
			imgUrl: '/images/menu_pics/hongshaoji.jpg',
			restrand: '',
			cal: 800,
			price: 11.99,
			className: 'staple-submit',
			href: '#staple'
		}
	];
}]);