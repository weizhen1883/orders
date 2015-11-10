angularApp.controller('MenuController', ['$scope', 'MenuItems', function($scope, MenuItems) {
	MenuItems.success(function(data) { 
		if (data.success){
			$scope.menu = data.menus
		}else{
			alert(data.error);
		}
	});

	$scope.entrees = [
		{
			name: 'Dongpo Pork',
			imgUrl: '/images/menu_pics/dongporou.jpg',
			restaurant: 'Dimming Garden',
			cal: 1000,
			price: 12.99,
			className: 'entrees-submit',
			href: '#sides'
		},
		{
			name: 'Peking Duck',
			imgUrl: '/images/menu_pics/kaoya.jpg',
			restaurant: 'Dimming Garden',
			cal: 1200,
			price: 18.99,
			className: 'entrees-submit',
			href: '#sides'
		},
		{
			name: 'Mapo Tofu',
			imgUrl: '/images/menu_pics/mapuodoufu.jpg',
			restaurant: 'Dimming Garden',
			cal: 900,
			price: 10.99,
			className: 'entrees-submit',
			href: '#sides'
		},
		{
			name: 'Lamp',
			imgUrl: '/images/menu_pics/yangpai.jpg',
			restaurant: 'Dimming Garden',
			cal: 1000,
			price: 14.99,
			className: 'entrees-submit',
			href: '#sides'
		},
		{
			name: 'General Source Chicken',
			imgUrl: '/images/menu_pics/zuozongji.jpg',
			restaurant: 'Dimming Garden',
			cal: 950,
			price: 9.99,
			className: 'entrees-submit',
			href: '#sides'
		},
		{
			name: 'Chicken',
			imgUrl: '/images/menu_pics/hongshaoji.jpg',
			restaurant: 'Dimming Garden',
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
			restaurant: '',
			cal: 1000,
			price: 12.99,
			className: 'sides-submit',
			href: '#sides'
		},
		{
			name: 'Peking Duck',
			imgUrl: '/images/menu_pics/kaoya.jpg',
			restaurant: '',
			cal: 1200,
			price: 18.99,
			className: 'sides-submit',
			href: '#sides'
		},
		{
			name: 'Mapo Tofu',
			imgUrl: '/images/menu_pics/mapuodoufu.jpg',
			restaurant: '',
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
			restaurant: '',
			cal: 950,
			price: 9.99,
			className: 'staple-submit',
			href: '#staple'
		},
		{
			name: 'Chicken',
			imgUrl: '/images/menu_pics/hongshaoji.jpg',
			restaurant: '',
			cal: 800,
			price: 11.99,
			className: 'staple-submit',
			href: '#staple'
		}
	];
}]);