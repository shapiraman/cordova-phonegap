var app = angular.module('sherFitness', ['ionic', 'slickCarousel', 'LocalStorageModule','com.2fdevs.videogular','ngSanitize','ngTouch','com.2fdevs.videogular.plugins.controls', 'com.2fdevs.videogular.plugins.poster', 'angulartics', 'angulartics.google.analytics'], function ($httpProvider){
	$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
});

app.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider, $compileProvider, $analyticsProvider) {
/*	var tmp = require("bower_components/cordova-plugin-firebase-analytics/www/FirebaseAnalytics.js");
	setTimeout(function(){
		console.log(tmp);
	},1000);*/

	$compileProvider.aHrefSanitizationWhitelist(/^\s*(geo|mailto|tel|maps):/);
//	$ionicConfigProvider.views.swipeBackEnabled(true);
    console.log("CONFIG PROVIDER", $ionicConfigProvider.views);

	// ENABLING NATIVE SCROLLING & cached views
	$ionicConfigProvider.platform.ios.scrolling.jsScrolling(false);
	$ionicConfigProvider.views.forwardCache(true);
	console.log("config", $analyticsProvider);
	$analyticsProvider.withAutoBase(true); 
	$stateProvider
		.state('login', {
	    	url: "/login",
	    	views: {
		        'main-view': {
		        	templateUrl: "templates/loginSMS.html",
		        	controller: 'LoginCtrl'
		        }
	        },
			onEnter: function(){
				$('.footer_menu').children().removeClass('active');
				$($('.footer_menu').children()[2]).addClass('active');
				$('ion-header-bar').hide();
			}
	    })
	    .state('sign-up', {
	    	url: "/sign-up",
	    	views: {
		        'main-view': {
		        	templateUrl: "templates/sign-up.html",
		        	controller: 'RegistrationCtrl'
		        }
	        },
			onEnter: function(){
			}
	    })
	    .state('aboutscreen', {
	    	url: "/aboutscreen",
	    	views: {
		        'main-view': {
		        	templateUrl: "templates/about-screen.html",
		        	controller: 'AboutCtrl'
		
		        }

	        },
			onEnter: function(){
				$('.footer_menu').children().removeClass('active');
				$($('.footer_menu').children()[0]).addClass('active');
				$('ion-header-bar').hide();
				$('#header-logo').show();
			}
	    })
		.state('mainscreenolduser', {
	    	url: "/mainscreenolduser",
	    	views: {
		        'main-view': {
		        	templateUrl: "templates/main-screen-old-user.html",
		        	controller: 'MainScreenOldUserCtrl'
		        }
	        },
			onEnter: function(){
				$('ion-header-bar').hide();
				$('#header-category').show();
				$('#search-dish').hide();
				$('.back-button').hide();
				$('.footer_menu').children().removeClass('active');
				$($('.footer_menu').children()[2]).addClass('active');
				$('.category-title').css('padding-left','0px');
			}
	    })
		.state('mainscreennewuser', {
	    	url: "/mainscreennewuser",
	    	views: {
		        'main-view': {
		        	templateUrl: "templates/recipies.html",
		        	controller: 'MainScreenNewUserCtrl'
		        }
	        },
			onEnter: function(){
					$('ion-header-bar').hide();
					$('#header-search-bar').show();
					$('.footer_menu').children().removeClass('active');
					$($('.footer_menu').children()[4]).addClass('active');

			}
	    })
		.state('articlesscreen', {
	    	url: "/articlesscreen",
	    	views: {
		        'main-view': {
		        	templateUrl: "templates/recipies-in-category.html",
		        	controller: 'ArticlesCtrl'
		        }
	        },
			onEnter: function(){
					$('ion-header-bar').hide();
					$('#header-category').show();
					$('.back-button').show();
					$('#search-dish').show();
			}
	    })
		.state('articlescreen', {
	    	url: "/articlescreen",
	    	views: {
		        'main-view': {
		        	templateUrl: "templates/recipe.html",
		        	controller: 'ArticleCtrl'
		        }
	        },
            cache:false,
			onEnter: function(){
				$('ion-header-bar').hide();
				document.getElementById("header-logo").style.display='';
				$('.back-button').show();
			}
	    })
        .state('healthArticlesScreen', {
            url: "/healthArticlesScreen",
            views: {
                'main-view': {
                    templateUrl: "templates/health-screen.html",
                    controller: 'HealthArticlesCtrl'
                }
            },
            onEnter: function(){
                    $('ion-header-bar').hide();
                    $('#header-search-bar').show();
                    $('.footer_menu').children().removeClass('active');
                    $($('.footer_menu').children()[3]).addClass('active');
            }
        })
        .state('healthArticleScreen', {
            url: "/healthArticleScreen",
            views: {
                'main-view': {
                    templateUrl: "templates/health.html",
                    controller: 'HealthArticleCtrl'
                }
            },
            cache:false,
            onEnter: function(){
                    $('ion-header-bar').hide();
                    document.getElementById("header-logo").style.display='';
                    $('.back-button').show();
            }
        })

	 /*   .state('meal-plan', {
	    	url: "/meal-plan",
	    	views: {
		        'main-view': {
		        	templateUrl: "templates/meal-plan.html",
		        	controller: 'MealPlanCtrl',
		        }

	        },
			onEnter: function(){
				$('ion-header-bar').hide();
				$('.footer_menu').children().removeClass('active');
				$($('.footer_menu').children()[3]).addClass('active');
				$('.back-button').show();
			}
	    })
	    .state('meal-plan-add-categories', {
	    	url: "/meal-plan-add-categories",
	    	views: {
		        'main-view': {
		        	templateUrl: "templates/meal-plan-add-categories.html",
		        	controller: 'MealPlanCategoriesCtrl'
		        }
	        },
			onEnter: function(){
				$('ion-header-bar').hide();
				$('#header-meal-plan-add').show();
			}
	    })
	      .state('meal-plan-add-recipies', {
	    	url: "/meal-plan-add-recipies",
	    	views: {
		        'main-view': {
		        	templateUrl: "templates/meal-plan-add-recipies.html",
		        	controller: 'MealPlanRecipiesCtrl'
		        }
	        },
			onEnter: function(){
				$('ion-header-bar').hide();
				$('#header-meal-plan-add').show();
			}
	    })
        */
	    .state('galleries', {
	    	url: "/galleries",
	    	views: {
		        'main-view': {
		        	templateUrl: "templates/galleries.html",
		        	controller: 'GalleryCtrl'
		        }
	        },
			onEnter: function(){
				$('.back-button').show();
			}
	    })
		.state('photos', {
	    	url: "/photos",
	    	views: {
		        'main-view': {
		        	templateUrl: "templates/photos.html",
		        	controller: 'PhotosCtrl'
		        }
	        },
			onEnter: function(){
				$('.back-button').show();
			}
	    })
		.state('news', {
	    	url: "/news",
	    	views: {
		        'main-view': {
		        	templateUrl: "templates/news.html",
		        	controller: 'NewsCtrl'
		        }
	        },
			onEnter: function(){
				$('.back-button').show();
			}
	    })
		
	    .state('training', {
	    	url: "/training",
	    	views: {
		        'main-view': {
		        	templateUrl: "templates/training.html",
		        	controller: 'TrainingCtrl'
		        }
	        },
            cache:false,
			onEnter: function(){
				$('ion-header-bar').hide();
				document.getElementById("header-logo").style.display='';
				$('.back-button').show();
				$('.footer_menu').children().removeClass('active');
				$($('.footer_menu').children()[1]).addClass('active');
			}
	    })
	    /*.state('trainings-categories', {
	    	url: "/trainings-categories",
	    	views: {
		        'main-view': {
		        	templateUrl: "templates/trainings-categories.html",
		        	controller: 'TrainingsCategoriesCtrl'
		        }
	        },
			onEnter: function(){
				$('ion-header-bar').hide();
				$('#header-category').show();
				$('.back-button').show();
				$('.footer_menu').children().removeClass('active');
				$($('.footer_menu').children()[1]).addClass('active');
			}
	    })*/
	    .state('trainings', {
	    	url: "/trainings",
	    	views: {
		        'main-view': {
		        	templateUrl: "templates/trainings.html",
		        	controller: 'TrainingsCtrl'
		        }
	        },
			onEnter: function(){
				$('ion-header-bar').hide();
				$('#header-search-bar').show();
				$('.footer_menu').children().removeClass('active');
				$($('.footer_menu').children()[1]).addClass('active');
			}
	    });
    

	$urlRouterProvider.otherwise("/main-index");		

})

app.run(function($rootScope,$state,$ionicPlatform,localStorageService) {

	//  navigator.splashscreen.hide();
 	//	localStorageService.set('mealplan', '');
	localStorage.SECOND_ENTRANCE = 'false';
	localStorage.SECOND_ENTRANCE_training = 'false';
 	//  console.log(localStorage.SECOND_ENTRANCE); //.....
 	//	localStorageService.cookie.set('logged_in','false');
	 var day = [];
	 
   	$rootScope.selectedDay = [];
   	$rootScope.savedMeals = [];
   	$rootScope.meal = [];
	$rootScope.dayswithmeals = localStorageService.get('mealplan');
	$state.go('mainscreennewuser');
	

	$ionicPlatform.ready(function() {
		console.log("deviceready");
		if (window.cordova && window.cordova.plugins.Keyboard) { // fixes iOS selectbox 'done' button not appearing
			window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
		}
		//window.ga('create', 'UA-48190321-37', 'auto');
		//window.ga('send', 'pageview', '/test');
		//App Launch
			window.fbAsyncInit = function() {
			  FB.init({
				appId      : '569077473543169',
				autoLogAppEvents: true,
				xfbml      : true,
				status     : true,
				version    : 'v3.2'
			  });
			  //window.FB = FB;
			  
			  FB.AppEvents.setAppVersion('3.0');
			  if (localStorageService.get('firstRun')!==1){
				  localStorageService.set('firstRun',1);
				  console.log("firstRun:"+localStorageService.set('firstRun',1));
				  FB.AppEvents.logEvent('App Installs');
			  }
			  FB.AppEvents.activateApp();
			  
			};
		  
			(function(d, s, id){
			   var js, fjs = d.getElementsByTagName(s)[0];
			   if (d.getElementById(id)) {return;}
			   js = d.createElement(s); js.id = id;
			   js.src = "https://connect.facebook.net/en_US/sdk.js";
			   fjs.parentNode.insertBefore(js, fjs);
			 }(document, 'script', 'facebook-jssdk'));
			 
			 window.FirebasePlugin.getToken(function(token) {
				 console.log(token);
			 }, function(error) {
				 console.error(error);
			 });
			 
			 window.FirebasePlugin.onTokenRefresh(function(token) {
				 console.log(token);
			 }, function(error) {
				 console.error(error);
			 });		

			 window.FirebasePlugin.onNotificationOpen(function(token) {
				 console.log(token);
			 }, function(error) {
				 console.error(error);
			 });		

		 });
});
/**
 * Body Controller
 * Sets the labels to their values from the dictionary
 * Sets the CURRENT_LANGUAGE to Hebrew
 *
 * @param {!angular.$scope} $scope 
 * @param {!angular.$ionicHistory} $ionicHistory
 * @param {!angular.$rootScope} $rootScope
 * @ngInject
 * @constructor
 */
app.controller('BodyCtrl', ['$scope', '$ionicLoading', '$ionicHistory', '$rootScope','$state','$http','localStorageService','$sce','$analytics',function($scope, $ionicLoading, $ionicHistory, $rootScope, $state, $http, localStorageService,$cordovaSplashscreen, $sce,$analytics,facebookConnectPlugin) {
	
	$rootScope.CURRENT_LANGUAGE = "hebrew";
	$scope.errorText = dictionary[$rootScope.CURRENT_LANGUAGE]["errorText"];
	$scope.appName = dictionary[$rootScope.CURRENT_LANGUAGE]["appName"];
	$scope.back = dictionary[$rootScope.CURRENT_LANGUAGE]["back"];
	$rootScope.callUsTranslation = dictionary[$rootScope.CURRENT_LANGUAGE]["callUs"];
    $rootScope.aboutGalleryTranslation = dictionary[$rootScope.CURRENT_LANGUAGE]["aboutGallery"];
	$rootScope.videoTranslation = dictionary[$rootScope.CURRENT_LANGUAGE]["videoPlayers"];
	$rootScope.socialFooter = false;
	$rootScope.phone_number = '';
    $rootScope.aboutUsURL = 'https://www.prpl.io/?ref=sherfitness_application';
    $rootScope.showRecipies = false;
	$rootScope.showRecipeCategories = true;
    console.log('about', $rootScope.aboutUsURL);
	console.log('BODY CTRlL');
	console.log("cordova", cordova);
	console.log("analytics", $analytics);
	var isIOS = ionic.Platform.isIOS();
//	console.log(ionic.Platform.isIOS());
	var isAndroid = ionic.Platform.isAndroid();
	
	var registrationParams;
	$scope.theToken = '';
    $rootScope.cachedArticles = [];

	if (isIOS) var deviceOS = 'ios'; 
		else if (isAndroid) var deviceOS = 'android';

	if (localStorageService.cookie.get('logged_in')) var userID = localStorageService.get('user_id');
		else userID = -1;
	
	//window.FB.AppEvents.logPageView();
	/* HIDING KEYBAORD WHEN INPUT IS FOCUSED */
	window.addEventListener('keyboardDidShow', function(ev) {
		console.log('keyboard');
		$('.login_page').css('bottom','0px');
		$('.sing_up_page').css('bottom','0px');
		$('.bar-footer').css('display','none');
	});

	window.addEventListener('keyboardDidHide', function(ev) {
		$('.login_page').css('bottom','70px');
		$('.sing_up_page').css('bottom','0px');
		$('.bar-footer').css('display','');
	//	if (isIOS) document.getElementsByTagName("BODY")[0].style.top = '15px';
	});

	// GETS TOKEN FROM FCM PLUGIN AND REGISTER IN WP_USER_REGISTRATIONID TABLE
	// UPDATES TOKEN IF ALREADY EXISTS

	 function getToken() { 
	 	console.log("GETTING TOKEN")

			        	FCMPlugin.getToken(
					        function (token) {
						        console.log(token);
	       	
									if (!token) {
										console.log("getting token again because it's null");
										getToken();
									}
									registrationParams = {	registration: token,
															os: deviceOS,
															user_id: userID,
															guest_id: localStorageService.get('guest_id') };
									saveUserID();			
							   		console.log(registrationParams);
					        },
					        function (err) {
					            alert('error retrieving token: ' + token);
					        }
				   	 	);

	} 

	function saveUserID () {
		console.log("saving user id");
		$http({	method: 'POST',
								url: SERVER_URL + "wp-content/plugins/sher-push/wppluginpush_saveid.php",
								data: $.param(registrationParams)
			})
							.success(function(response) {
								console.log(response);
								localStorageService.set('guest_id',	response.guest_id);

							})
							.error(function () {

							});		

	} 

    $rootScope.activatePushNotifications = function () {

    	if(typeof check_fcm_loaded==='undefined'){
		// sets in the database user status ( loggedin / guest ) for push notifications
			var check_fcm_loaded = setInterval(function(){
	            if(typeof FCMPlugin!=='undefined'){


			       getToken();
			       saveUserID();
				   

			   		FCMPlugin.onNotification(function(data){
	                	
	                	// console.log(data);     	
	                    if (data.wasTapped){
	                      //Notification was received on device tray and tapped by the user.
	                      // alert( JSON.stringify(data) );
	                    } 	else {
								//showing alert on foreground
								if (isAndroid) {
				                	navigator.notification.alert(data['body'], null, data['title'], null);
				                }	else if (isIOS) {
				                		navigator.notification.alert(data['aps']['alert']['body'], null, data['aps']['alert']['title'], null);
				                	}		
	                    	}                    
	                    
	                }, function(msg){ // function registered successfuly
	               //     console.log(msg); // typically msg='OK'
	                }, function(err){
	                    console.log(err);
	                });
	             
			   		clearInterval(check_fcm_loaded);
	 			}           
	        }, 2000);
	    }
    } 



	$rootScope.$on('$stateChangeStart', function() {
        console.log("state change");
		/* clearing search bar and search results */
		$scope.searching = '';						
		$('._recipies_item').each(function (i,obj) {
			obj.style.display = ""; 
		});
		
	});
	
	//navigator.splashscreen.hide();
	$scope.myGoBack = function() {
		
		$ionicHistory.goBack();
		//window.location.back();
	};

	$scope.trainingMenu = function () {
	//	$ionicHistory.clearHistory();
		
		$state.go('trainings');
	};

	$rootScope.mealPlanMenu = function() {
		
	//	$ionicHistory.clearHistory();
		$state.go('meal-plan');
	};

	$rootScope.loginMenu = function () {
	//	$ionicHistory.clearHistory();
		$state.go('mainscreenolduser');
		console.log(localStorageService.cookie.get('logged_in'));
		if (localStorageService.cookie.get('logged_in') == true) {
			$state.go('mainscreenolduser');
		} 	else {
				$state.go('login');
			}
	};
	
	$rootScope.recipiesMenu = function() {
	//	$ionicHistory.clearHistory();
		
		$state.go('mainscreennewuser');
		if (StatusBar) {
			StatusBar.backgroundColorByHexString("#3e3e3e");
		}
	};

    $rootScope.healthMenu = function() {
    //  $ionicHistory.clearHistory();
        console.log("heatlhmenu");
        $state.go('healthArticlesScreen');
        console.log($state);
        if (StatusBar) {
            StatusBar.backgroundColorByHexString("#3e3e3e");
        }
    };

	$rootScope.aboutMenu = function() {
		$state.go('aboutscreen');	
	};

	
		var url = SERVER_URL + 'ajax/social.php';

		$http.get(url)
			.success(function(data) {
                console.log("SOCIALLL", data);
				$rootScope.facebookURL = data[0]['facebook_url'];
                $rootScope.instagramURI = data[0]['instagram_uri'];
                $rootScope.phone_number = "tel:" + data[0]['phone'];
                $rootScope.facebookURIios = data[0]['facebook_uri_ios'];
                $rootScope.facebookURIandroid = data[0]['facebook_uri_android'];
                $rootScope.instagramURL = data[0]['instagram_url'];
			})
			.error(function () {
				console.log("Error");
			});

		var url = SERVER_URL + 'ajax/aboutpage.php';

		$rootScope.aboutPage = [];
			$http.get(url)
				.success(function(data,$sce) {
					
					if (!data[0].video) {
						data[0].video = '';
					} 
					$rootScope.aboutPage = data[0];
                    console.log($rootScope.aboutPage);

				})
				.error(function() {
					navigator.notification.alert(dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorText"], null, dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorTitle"], dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorButton"]);
			});
		

	$rootScope.playVideo = function (videoContainerID) {

//		console.log($(jquerySelector).get(0));
		var jquerySelector = videoContainerID + ' videogular' + ' video';
        var fullscreenOn = false;	
		var play = $(jquerySelector).get(0).play();
        var elem = $(jquerySelector).get(0);
        console.log(elem);
        console.log(play);

        if (play !== undefined) {
            $(jquerySelector).get(0).webkitEnterFullScreen(); // CALLED OUTSIDE PROMISE RESOLVED BECAUSE IT WON'T TRIGGER THERE DUE REQUESTFULLSCREEN() MUST BE CALLED BY USER
            play.then(function () {              
            
                  
            }).catch(function(error) {
                console.log(error);
                setTimeout(function() {
                    elem.webkitExitFullScreen(); 
                },1000);
               
            });
        }
   
		 // forces android fullscreen
        $(jquerySelector).on('ended', function() {
            $(jquerySelector).get(0).webkitExitFullScreen();
        });
        console.log(jquerySelector);
        $(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange webkitendfullscreen webkitbeginfullscreen msfullscreenchange', function(e) {
           // console.log("webkit full screne change");
            if (fullscreenOn) {
                setTimeout(function() {
                        $(jquerySelector).get(0).pause();
                },500);
            }
            fullscreenOn = !fullscreenOn;
        });

	}


	// global search function
	$rootScope.search = function (header) {

        var input = document.getElementById(header).children[0].children[0];  // input type search is first child of first div of header
        var filter = input.value.toUpperCase();
		var articleTitles = document.getElementsByClassName('_title');
	//	console.log(articleTitles);
		
		console.log(input);
		var elementToShow = document.getElementsByClassName('_recipies_item'); 
		// console.log(elementToShow);


        /*if (filter.length > 0) {
            console.log("seaerchn");
            $rootScope.showRecipeCategories = false;
            $rootScope.showRecipies = true;
            if (!$scope.$$phase) 
                $rootScope.$digest();
        } else { console.log("nossra");
            $rootScope.showRecipeCategories = true;
            $rootScope.showRecipies = false;
            if (!$scope.$$phase) 
                $rootScope.$digest();
        }
*/
		for(var i=0; i<articleTitles.length; i++) {
			if (articleTitles[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
				elementToShow[i].style.display = "";
			}	else {
				    elementToShow[i].style.display = "none";
				}
		}
	};

    document.addEventListener('search', function() {
         $(':focus').blur();
    })

	$rootScope.openFacebookPage = function() {

        if (localStorage.PLATFORM == 'Android')
            var uri = 'com.facebook.katana';
        else
            var uri = 'fb://';
        console.log(uri);
        appAvailability.check(
            uri, // URI Scheme
            function() {  // Success callback
                if (localStorage.PLATFORM == 'Android') {
                    window.open($rootScope.facebookURIandroid, "_system");
                    console.log($rootScope.facebookURIandroid);
                }
                else {
                    window.open($rootScope.facebookURIios, "_system");
                    console.log($rootScope.facebookURIios);
                }
            },
            function() {  // Error callback
                var ref = cordova.InAppBrowser.open($rootScope.facebookURL, '_blank');
            }
        );

	}

    $rootScope.openAboutUsURL = function () {
        var ref = cordova.InAppBrowser.open($rootScope.aboutUsURL, '_system');
    }

	$rootScope.openInstagramPage = function() {

        if (localStorage.PLATFORM == 'Android')
            var uri = 'com.instagram.android';
        else
            var uri = 'instagram://';
        console.log(uri);
        appAvailability.check(
            uri, // URI Scheme
            function() {  // Success callback
                    window.open($rootScope.instagramURI, "_system");
                    console.log($rootScope.instagramURI);
            },
            function() {  // Error callback
                 console.log("faild", $rootScope.instagram_url);
                var ref = cordova.InAppBrowser.open($rootScope.instagramURL, '_blank');
            }
        );
	}

	$rootScope.call = function () {
		cordova.InAppBrowser.open($rootScope.phone_number, '_system');
	};





    $rootScope.openGallery = function (gallery, from) {

        if ($rootScope.selectedGallery && from == 'loggedInArea') {
            if ($rootScope.selectedGallery.id == gallery.id) {
                $state.go('photos');
                return;
            }
        }
        if ($rootScope.selectedGallery && from == 'aboutPage') {
            if ($rootScope.selectedGallery.ID == gallery.ID) {
                $state.go('photos');
                return;
            }
        }
               
        console.log(gallery);
        $rootScope.selectedGallery = gallery;
        $ionicLoading.show({template: dictionary[$rootScope.CURRENT_LANGUAGE]["loading"]});
        var url = SERVER_URL + 'ajax/getphotos.php';
        if (gallery.id)
            var param = { id: gallery.id };
        else 
            var param = { id: gallery.ID };
        console.log("gallery id", param);
        $rootScope.photos = [];
        $http.post(url, param)
            .success(function(data) {

                $rootScope.photos = data;
                
                console.log($rootScope.photos);
                $ionicLoading.hide();


                $state.go('photos');

            })
            .error(function() {
                navigator.notification.alert(dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorText"], null, dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorTitle"], dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorButton"]);
        });
	}
	
     var url = SERVER_URL + 'ajax/getslides.php';
     $rootScope.loggedInSlides = [];

        $http.post(url, { 'appArea' : 'Logged In Area' })
                .success(function(data) {
                    console.log(data);
                    // ORDERING SLIDES
                    var datacopy = data.slice(0);
                    datacopy.sort(function(a,b) {
                        return a.order - b.order;
                    });
                    var lastIndex = datacopy.length;
                    for (var i=0; i<lastIndex; i++) {
                        $rootScope.loggedInSlides.push(datacopy[lastIndex-i-1]);
                    }
                   // $rootScope.loggedInSlides = data;
                    console.log("SLIDES:", $rootScope.loggedInSlides);
                })
                .error(function() {
                    navigator.notification.alert(dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorText"], null, dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorTitle"], dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorButton"]);
                });     

			/*	for (var i=0; i<response['Data'].OtherBranches; i++) {
					console.log("this is names:",v[i]);
					
				}*/

	
}])

app.controller('AboutCtrl', ['$scope', '$ionicHistory', '$rootScope','$state','$http','localStorageService', '$ionicLoading', '$sce','$ionicPlatform', function($scope, $ionicHistory, $rootScope, $state, $http, localStorageService, $ionicLoading, $sce,$ionicPlatform,facebookConnectPlugin) {
  

	$rootScope.CURRENT_LANGUAGE = "hebrew";
	$scope.errorText = dictionary[$rootScope.CURRENT_LANGUAGE]["errorText"];
	$scope.appName = dictionary[$rootScope.CURRENT_LANGUAGE]["appName"];
	$scope.back = dictionary[$rootScope.CURRENT_LANGUAGE]["back"];
	$rootScope.callUsTranslation = dictionary[$rootScope.CURRENT_LANGUAGE]["callUs"];
	$rootScope.videoTranslation = dictionary[$rootScope.CURRENT_LANGUAGE]["videoPlayers"];
	$rootScope.socialFooter = true;
	$rootScope.purplebricksFooter = true;
	
	$rootScope.aboutVideo = '';
	$scope.$on('$ionicView.beforeEnter', function() {
		StatusBar.backgroundColorByHexString("#3e3e3e");
		console.log($rootScope.aboutPage);
		if ($rootScope.aboutPage.length > 0) {
			// configuring video source with the url already received from server
			$scope.config = {
								sources: [	{src: $sce.trustAsResourceUrl($rootScope.aboutPage.video.url), type: "video/mp4"}],
								plugins: {	poster: $rootScope.aboutPage.video_thumbnail	}
							};
		}

	});
	$ionicPlatform.ready(function() {
		console.log("deviceready");
		if (window.cordova && window.cordova.plugins.Keyboard) { // fixes iOS selectbox 'done' button not appearing
		//  setTimeout(function() {
		window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
		/*facebookConnectPlugin.logEvent("Pages",
		{	
			url:"/aboutscreen",
			controller: "AboutCtrl",
			Platform: "Android",
			deviceID: localStorageService.get('ID')
		}, null,
		
		function (response) {console.log("respo",response) },
		function (response) { console.log(response) });*/
		}
		console.log(StatusBar);
			/**
	 * This function will log AddedToCart App Event
	 * @param {string} contentData
	 * @param {string} contentId
	 * @param {string} contentType
	 * @param {string} currency
	 * @param {number} price
	 */
	function logAddedToCartEvent(contentData, contentId, contentType, currency, price) {
		var params = {};
		params[FB.AppEvents.ParameterNames.CONTENT] = contentData;
		params[FB.AppEvents.ParameterNames.CONTENT_ID] = contentId;
		params[FB.AppEvents.ParameterNames.CONTENT_TYPE] = contentType;
		params[FB.AppEvents.ParameterNames.CURRENCY] = currency;
		FB.AppEvents.logEvent(FB.AppEvents.EventNames.ADDED_TO_CART, price, params);
	}

		
	});
	
 /* window.fbAsyncInit = function() {
    FB.init({
      appId      : '569077473543169',
      xfbml      : true,
      version    : 'v2.8'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));*/

	//cordova.plugins.firebase.analytics.logEvent("my_event", {param1: "value1"});						
	//cordova.plugins.firebase.analytics.resetAnalyticsData();
	$scope.$on('$ionicView.loaded', function() {
		window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					//alin.ilie@y-gnu.ro - changed the UA to one provided by Shai
					gtag('config', 'UA-48190321-37');
/*		$ionicLoading.show({template: dictionary[$rootScope.CURRENT_LANGUAGE]["loading"]});
		// GETTING SOCIAL MEDIA INFO + PHONE NUMBER
		var url = SERVER_URL + 'ajax/social.php';
		$http.get(url)
			.success(function(data) {
                console.log("SOCIAL", data);
              //  $rootScope.facebook = { ios : 'fb://'}
				$rootScope.facebookURL = data[0]['facebook_url'];
				$rootScope.instagramURI = data[0]['instagram_uri'];
				$rootScope.phone_number = "tel:" + data[0]['phone'];
				$rootScope.facebookURIios = data[0]['facebook_uri_ios'];
                $rootScope.facebookURIandroid = data[0]['facebook_uri_android'];
                $rootScope.instagramURL = data[0]['instagram_url'];
			})
			.error(function () {
				console.log("Error");
			});*/


		var url = SERVER_URL + 'ajax/aboutpage.php';
		$rootScope.aboutPage = [];
			$http.get(url)
				.success(function(data) {
					
					if (!data[0].video) 				data[0].video = '';
					if (!data[0].video_thumbnail) 		data[0].video_thumbnail = data[0].image;					
					$rootScope.aboutPage = data[0];
					console.log("ABOUT", $rootScope.aboutPage);
					// configuring video source
					$scope.config = {
										sources: [{	src: $sce.trustAsResourceUrl($rootScope.aboutPage.video.url), type: "video/mp4"}],
										plugins: {	poster: $rootScope.aboutPage.video_thumbnail	}
									};
					$ionicLoading.hide();

					})
				.error(function() {
					navigator.notification.alert(dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorText"], null, dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorTitle"], dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorButton"]);
			});
		
		
	});

	$scope.$on('$stateChangeStart', function() {
		$rootScope.socialFooter = false;
		$rootScope.purplebricksFooter = false;
	});
	
	

	

	
}])

app.controller('ExpScreenOldUserCtrl', ['$scope', '$rootScope', '$state', function($scope, $rootScope, $state) {
			  

	localStorage.USED = "true";
	localStorage.TYPE_OF_SELECTED_USER = "old";
	$scope.continueButton = dictionary[$rootScope.CURRENT_LANGUAGE]["acceptButton"];
	$("#expScreen").load("oldcustomer.htm");
	$("#termsAndConditions").load("terms.htm");
	//$("#expScreen").html(contentExp["oldUser"]);
	//$scope.content = contentExp["oldUser"];
	//$scope.hrefExpScreen = "#/loginscreen";
	console.log('ExpScreenOldUserCtrl');
	/**
	 * Switches the state of the checkbox
	 */
	
	$scope.checkTerms = function() {
		var termsAndConditions = $(".terms-and-conditions");
		if (termsAndConditions.hasClass("checked")) {
			termsAndConditions.removeClass("checked");
			termsAndConditions.attr("src", "img/unchecked_terms.png");
		} else {
			termsAndConditions.addClass("checked");
			termsAndConditions.attr("src", "img/checked_terms.png");
		}
	}
	
	/**
	 * Checks if the checkbox is checked
	 * If true, goes to the next state
	 */
	$scope.tryExpScreen = function() {
		var termsAndConditions = $(".terms-and-conditions");
		if (termsAndConditions.hasClass("checked")) {
			$state.go('loginscreen');
		}
	}
	
	if (localStorage.EXP_OLD_USER_CAN_GO) {
		//navigator.splashscreen.hide();
	}
}])

/**
 * Explanation Screen New User Controller
 * Transfers the user to main screen of the new user
 *
 * @param {!angular.$scope} $scope 
 * @param {!angular.$rootScope} $rootScope 
 * @ngInject
 * @constructor
 */
app.controller('ExpScreenNewUserCtrl', ['$scope', '$rootScope', '$state', function($scope, $rootScope, $state) {
			  

	localStorage.USED = "true";
	localStorage.TYPE_OF_SELECTED_USER = "new";
	$scope.continueButton = dictionary[$rootScope.CURRENT_LANGUAGE]["acceptButton"];
	$("#expScreen").load("newcustomer.htm");
	$("#termsAndConditions").load("terms.htm");	
	//$("#expScreen").html(contentExp["newUser"]); 
	//$scope.content = contentExp["newUser"];
	//$scope.hrefExpScreen = "#/mainscreennewuser";
	console.log('ExpScreenNewUserCtrl');
	/**
	 * Switches the state of the checkbox
	 */
	$scope.checkTerms = function() {
		var termsAndConditions = $(".terms-and-conditions");
		if (termsAndConditions.hasClass("checked")) {
			termsAndConditions.removeClass("checked");
			termsAndConditions.attr("src", "img/unchecked_terms.png");
		} else {
			termsAndConditions.addClass("checked");
			termsAndConditions.attr("src", "img/checked_terms.png");
		}
	}
	
	/**
	 * Checks if the checkbox is checked
	 * If true, goes to the next state
	 */
	$scope.tryExpScreen = function() {
		var termsAndConditions = $(".terms-and-conditions");
		if (termsAndConditions.hasClass("checked")) {
			$state.go('mainscreennewuser');
		}
	}
	
	if (localStorage.EXP_NEW_USER_CAN_GO) {
		//navigator.splashscreen.hide();
	}
}])

/**
 * Login Screen Controller
 * Authenticates the user against the username and password
 * Redirects to main screen of the registered user
 *
 * @param {!angular.$scope} $scope 
 * @param {!angular.$ionicLoading} $ionic
 * @param {!angular.$http} $http
 * @param {!angular.$state} $state
 * @ngInject
 * @constructor
 */
app.controller('LoginCtrl', ['$scope', '$rootScope', '$ionicLoading', '$http', '$state', 'localStorageService', function($scope, $rootScope, $ionicLoading, $http, $state, localStorageService) {
				  

	// localStorage.TYPE_OF_USER = "old";
	// localStorage.LOGGED_IN = "false";
	$scope.loginTitle = dictionary[$rootScope.CURRENT_LANGUAGE]["loginTitle"];
	$scope.usernamePlaceholder = dictionary[$rootScope.CURRENT_LANGUAGE]["usernamePlaceholder"];
	$scope.smsCodePlaceholder = dictionary[$rootScope.CURRENT_LANGUAGE]["smsCodePlaceholder"];
	console.log($scope.usernamePlaceholder);
	$scope.passwordPlaceholder = dictionary[$rootScope.CURRENT_LANGUAGE]["passwordPlaceholder"];
	$scope.loginButton = dictionary[$rootScope.CURRENT_LANGUAGE]["loginButton"];
	$scope.errorClassUsername = 'error-text display-none';
	$scope.errorClassPassword = $scope.errorClassUsername;
	$scope.borderUsernameStyle = $scope.borderPasswordStyle = 'border: 0';
	$scope.terms = dictionary[$rootScope.CURRENT_LANGUAGE]["terms"];
	$scope.submit = dictionary[$rootScope.CURRENT_LANGUAGE]["submit"];
	console.log('LoginScreenCtrl');
	$scope.username = '';
	$scope.password = '';
	$scope.smssent= false;
	$scope.smscode='';
	$scope.code = 1234;
	$scope.errorPassword = dictionary[$rootScope.CURRENT_LANGUAGE]["errorPassword"];
	$scope.errorUsername = dictionary[$rootScope.CURRENT_LANGUAGE]["errorUsername"];
	
	$scope.$on('$ionicView.beforeEnter', function() {
		StatusBar.backgroundColorByHexString("#d20086");
	});

	$scope.login = function() {
		console.log($scope.username);
		console.log($scope.password);
    //'fKW0EwXZ8c0:APA91bHnH2aR2N2KlJyaN1Bd8ryUWjNPmyV3_h8T4-E6daOiJFxWkIOeUOGjfPUzvgVKO9qTdz5WRK-O8QXqG-shjiNpmbLNcuGkOM8VZz_qyjED0kwWUzRysH9WsTTRfoPaiowwqv1V'
	

		var validInputs = true;

		if ($scope.username) {	
		} 	else {
				validInputs = false;
				$scope.errorClassUsername = 'error-text display';
				$scope.borderUsernameStyle = 'border: 2px solid #ca1315 !important';
			}

		if ($scope.password) {
			
		} else {
			validInputs = false;
			$scope.errorClassPassword = 'error-text display';
			$scope.borderPasswordStyle = 'border: 2px solid #ca1315 !important';
		}
		if (validInputs) {
			$ionicLoading.show({template: dictionary[$rootScope.CURRENT_LANGUAGE]["loading"]});
			var service = "ajax/login.php";
			var url = SERVER_URL + service;
			var data = { username: $scope.username, password: $scope.password};
			$http.post(url, data)
			.success(function(data) {
				
					console.log(data);
					$ionicLoading.hide();
					if (data['errors']) {
						navigator && navigator.notification.alert(dictionary[$rootScope.CURRENT_LANGUAGE]["loginFailed"], null, dictionary[$rootScope.CURRENT_LANGUAGE]["error"], null);
					} 	else {
							
					
						data.password = $scope.password;
						localStorageService.cookie.set('logged_in','true',360);
						localStorageService.cookie.set('username', $scope.username,360);
						localStorageService.cookie.set('password', $scope.password,360);
						localStorageService.set('user_id', data['data']['ID']);
						$rootScope.activatePushNotifications ();
						$state.go('mainscreenolduser');
					}
			})
			.error(function() {
				console.log("error");
				$ionicLoading.hide();
				navigator && navigator.notification.alert(dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorText"], null, dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorTitle"], dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorButton"]);
			});
		}
	};
	$scope.loginSMS = function () {
		console.log("user", $scope.username);
		var validInputs = true;
		
		if ($scope.username) {	
		} 	else {
				validInputs = false;
				$scope.errorClassUsername = 'error-text display';
				$scope.borderUsernameStyle = 'border: 2px solid #ca1315 !important';
			}

		if ($scope.phone_number) {

		} else {
			validInputs = false;
			
		};
		if (validInputs) {
			console.log("validInputs TRUE");
			$ionicLoading.show({template: dictionary[$rootScope.CURRENT_LANGUAGE]["loading"]});
			
			var url = 'https://m.fizikal.co.il/wsv2/JLoginService.svc/User';
			var data = { Type: 0,  UserIDs: [$scope.username], SendSMSTo: $scope.username};
			//var data = {Type: 0, UserIDs: ["0543029564"], SendSMSTo: "0543029564"};
			var req = {
				processData : false,
				url: url,
				method: 'put',
				data: JSON.stringify(data),		
				headers: {
					'SYSTEM' : 'SHER_FITNESS',
					'USER_NAME' : 'sher-user',
					'PASSWORD' : 'XgTV#hcxN',
					'APP_TYPE' : 'web',
					'Content-Type' : 'application/json'
				},
				
				
			}
			console.log("Output JLoginService:", data);

			$http(req)	
				.success(function(response) {
					$ionicLoading.hide();
					if (response.Data) {
						$scope.smssent=true;
					}else{
						navigator && navigator.notification.alert(response['ErrorMessage'], null, dictionary[$rootScope.CURRENT_LANGUAGE]["error"], null);
					}
					console.log("res:",response);
					
				})
			.error(function(response) {
				console.log("error");
				$ionicLoading.hide();
				navigator && navigator.notification.alert(dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorText"], null, dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorTitle"], dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorButton"]);
			});
		}
	}

	$scope.afterSMS = function () {
			console.log("pass", $scope.password);
		//console.log($scope.phone_number);

	
		var validInputs = true;
		
		if ($scope.password) {	
		} 	else {
				console.log("sdygusygf");
				validInputs = false;
				$scope.errorClassPassword = 'error-text display';
				$scope.borderUsernameStyle = 'border: 2px solid #ca1315 !important';
			}

		/*if ($scope.phone_number) {
			console.log("the Sms code is:");

		} else {
			validInputs = false;
			
		};*/
		if (validInputs) {
			console.log("validInputs TRUE");
			$ionicLoading.show({template: dictionary[$rootScope.CURRENT_LANGUAGE]["loading"]});
			
			var data = {Type:0, UserIDs:[$scope.username], VerifyCode:$scope.password};
			//var data = {Type: 0, UserIDs: ["0543029564"], SendSMSTo: "0543029564"};
			var req = {
				processData : false,
				url: 'https://m.fizikal.co.il/wsv2/JLoginService.svc/UserThin',
				method: 'post',
				data: JSON.stringify(data),		
				headers: {
					'SYSTEM' : 'SHER_FITNESS',
					'USER_NAME' : 'sher-user',
					'PASSWORD' : 'XgTV#hcxN',
					'APP_TYPE' : 'web',
					'Content-Type' : 'application/json'
				}
				
				
			};
			console.log("req:",req);
		//	console.log("Output JLoginService:" + data);

			$http(req)	
				.success(function(response) {
				
					console.log("res", response);
					$ionicLoading.hide();
					if (!response['Data']) {
						navigator && navigator.notification.alert(response['ErrorMessage'], null, dictionary[$rootScope.CURRENT_LANGUAGE]["error"], null);
					} 	
					
					else {
						console.log("enter else");
						if($scope.password){
							console.log("if password");

							/*var data = { Password: $scope.code };
							var req = {
								processData : false,
								url: 'https://m.fizikal.co.il/wsv2/JLoginService.svc/Password',
								method: 'post',
								data: JSON.stringify(data),		
								headers: {
									'SYSTEM' : 'SHER_FITNESS',
									'USER_NAME' : 'sher-user',
									'PASSWORD' : 'XgTV#hcxN',
									'APP_TYPE' : 'web',
									'Content-Type' : 'application/json'
								}
							}*/
							$rootScope.calendars = [];
							//$rootScope.profile=[];
							console.log("Main Branch",response['Data'].MainBranch.Name, " ", response['Data'].MainBranch.ID );
							$rootScope.calendars.push({"id": response['Data'].MainBranch.ID, "name": response['Data'].MainBranch.Name });
							//$rootScope.profile.push({"id": response['Data'].MainBranch.ID, "name": response['Data'].MainBranch.Name });
							chpass(response['Data'].Token);
							console.log("calenadrs:",$rootScope.calendars);
							console.log("OthBr: ",response['Data'].OtherBranches);
							for (var i=0; i<response['Data'].OtherBranches.length; i++) {
								console.log("OtherBranch: ",response['Data'].OtherBranches[i]);
								$rootScope.calendars.push({"id":response['Data'].OtherBranches[i].ID, "name":response['Data'].OtherBranches[i].Name});
								//$rootScope.profile.push({"id":response['Data'].OtherBranches[i].ID, "name":response['Data'].OtherBranches[i].Name});
							
								
							}
							
							
						}	
						console.log("pass",$scope.chpass);				
						data.sendcode = $scope.smscode;
						localStorageService.cookie.set('logged_in','true',360);
						//localStorageService.cookie.set('username', $scope.username,360);
						localStorageService.cookie.set('code', $scope.password,360);
						localStorageService.cookie.set('TOKEN',response['Data'].Token,360);
						localStorageService.cookie.set('OL_SYS','SHER_FITNESS',360);
						localStorageService.cookie.set('OL_USER','sher-user',360);
						localStorageService.cookie.set('OL_PWD','XgTV%23hcxN',360);
						localStorageService.cookie.set('COMP_ID','318',360);
						localStorageService.cookie.set('BRANCH_ID','3',360);
						localStorageService.cookie.set('USER_ID',response['Data'].UserID,360);
						localStorageService.cookie.set('PASS',$scope.code,360);
						console.log("calendars:",$rootScope.calendars);
						localStorageService.cookie.set('Calendars', JSON.stringify($rootScope.calendars),360);
						console.log("local:",localStorageService.cookie.get('Calendars'));




						$rootScope.activatePushNotifications ();
						$state.go('mainscreenolduser');
					}
				})

			.error(function(response) {
				console.log("error");
				$ionicLoading.hide();
				navigator && navigator.notification.alert(dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorText"], null, dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorTitle"], dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorButton"]);
			})
		}
	}

	chpass = function (token) {
		//console.log($scope.password);
		console.log($scope.password);
	
      
		var validInputs = true;
		
		if ($scope.password) {	
			console.log("in");
		} 	else {
				validInputs = false;
				$scope.errorClassPassword = 'error-text display';
				$scope.borderPasswordStyle = 'border: 2px solid #ca1315 !important';
			}

		if (validInputs) {
			
			$ionicLoading.show({template: dictionary[$rootScope.CURRENT_LANGUAGE]["loading"]});
			var data = { Password: "1234" };
			console.log("pass is",data.Password);
			var req = {
				processData : false,
				url: 'https://m.fizikal.co.il/wsv2/JLoginService.svc/Password',
				method: 'post',
				data: JSON.stringify(data),		
				headers: {
					'SYSTEM' : 'SHER_FITNESS',
					'USER_NAME' : 'sher-user',
					'PASSWORD' : 'XgTV#hcxN',
					'APP_TYPE' : 'web',
					'Content-Type' : 'application/json',
					'TOKEN' : token
				}
			}	
			$http(req)	
			.success(function(response) {
			
				console.log("res: ", response);
				$ionicLoading.hide();
							if (!response['Data']) {
					navigator && navigator.notification.alert(response['ErrorMessage'], null, dictionary[$rootScope.CURRENT_LANGUAGE]["error"], null);
				} 	
				else {					
					data.sendcode = $scope.smscode;
					localStorageService.cookie.set('logged_in','true',360);
				//	localStorageService.cookie.set('username', $scope.username,360);
					localStorageService.cookie.set('pass', $scope.code,360);
					$rootScope.activatePushNotifications ();
					$state.go('mainscreenolduser');
					console.log("Main Branch",response.Data);
				}
			})

		.error(function(response) {
			console.log("error");
			$ionicLoading.hide();
			navigator && navigator.notification.alert(dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorText"], null, dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorTitle"], dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorButton"]);
		
		})

		}
		
		/*for (var i=0; i<length[['Data'].OtherBranches]; i++) {
			console.log("THIS IS ID BRANCHES: ",['Data'].OtherBranches.ID);
			
		}*/

	};
	

	$scope.openTermsAndConditions = function () {

		var url = 'https://drive.google.com/file/d/0BznIQfFhDfZrWTNZRXZxWU1DSDg/view';
		var target = '_blank';
		var options = '';
		var ref = cordova.InAppBrowser.open(url, target, options);
		
	};
	/**
	 * Fires when the input is clicked
	 * Hides the error label and initiates the placeholders
	 */
	$scope.clickInput = function() {
		/*
		$scope.errorClassUsername = $scope.errorClassPassword = 'error-text display-none';
		$scope.borderUsernameStyle = $scope.borderPasswordStyle = 'border: 0';
		$scope.usernamePlaceholder = dictionary[$rootScope.CURRENT_LANGUAGE]["usernamePlaceholder"];
		$scope.passwordPlaceholder = dictionary[$rootScope.CURRENT_LANGUAGE]["passwordPlaceholder"];
		*/	
	};
	/*
	// if the user is already logged in, we verify its period of usage
	if (localStorage.USER) {
		var user = JSON.parse(localStorage.USER);
		$scope.userName = user.username;
		$scope.password = user.password;
		$scope.login();
	} else {
		//navigator.splashscreen.hide();
	}
	*/
	$scope.signupMenu = function() {
		
		$state.go('sign-up');
	}

}])

/**
 * Main Screen In-course User Controller
 * Holds callbacks for every item of the menu that is clicked
 *
 * @param {!angular.$scope} $scope 
 * @param {!angular.$ionicLoading} $ionicLoading
 * @param {!angular.$http} $http
 * @param {!angular.$state} $state
 * @ngInject
 * @constructor
 */
app.controller('MainScreenOldUserCtrl', ['$scope', '$state', '$rootScope', '$ionicLoading', '$http', 'localStorageService', function($scope, $state, $rootScope, $ionicLoading, $http, localStorageService) {
			  

	localStorage.TYPE_OF_USER = "old"; // PROBABLY FIX TO android user - if going to Guset User need to reconnect to user
	localStorage.LOGGED_IN = "true";
	$scope.impToKnow = dictionary[$rootScope.CURRENT_LANGUAGE]["impToKnow"];
	$scope.updAndNews = dictionary[$rootScope.CURRENT_LANGUAGE]["updAndNews"];
	$scope.prcThisWeek = dictionary[$rootScope.CURRENT_LANGUAGE]["prcThisWeek"];
	$scope.yourPic = dictionary[$rootScope.CURRENT_LANGUAGE]["yourPic"];
	$scope.recipes = dictionary[$rootScope.CURRENT_LANGUAGE]["recipes"];
	$scope.dietClub = dictionary[$rootScope.CURRENT_LANGUAGE]["dietClub"];
	$scope.exBoard = dictionary[$rootScope.CURRENT_LANGUAGE]["exBoard"];
	$scope.sherChannel = dictionary[$rootScope.CURRENT_LANGUAGE]["sherChannel"];
	$scope.appName = dictionary[$rootScope.CURRENT_LANGUAGE]["appName"];
	$scope.booking = dictionary[$rootScope.CURRENT_LANGUAGE]["booking"];
	console.log('MainScreeldUserCtrl');


	$scope.newsAndUpdatesPlaceholder = dictionary["hebrew"]["newsAndUpdates"];
	$scope.imageGalleryPlaceholder = dictionary["hebrew"]["image_gallery"];
	$scope.appointmentsPlaceholder = dictionary["hebrew"]["appointments"];
	$scope.contactPlaceholder = dictionary["hebrew"]["contact"];
	$scope.profilePlaceholder = dictionary["hebrew"]["profile"];

	$scope.news_image = '';
	$scope.gallery_image = '';
	$scope.selectedContact = '';
	console.log("Calendars from local:",localStorageService.cookie.get('Calendars') );
	$rootScope.calendars= localStorageService.cookie.get('Calendars');
	console.log("Calendars from rootScope:",$rootScope.calendars);

	/*	id: "4" ,
		name: "ראשון לציון"
	}, 
	{	id: "0",
		name: "נתניה"

	 },
	{	id: "5",
	 	name: "ירושלים"

	},
	{
		id: "2",
		name:""
	},
	{
		id: "3",
		name: "קריות"
	},
	{
		id: "1",
		name: "חיפה"
	},
	{
		id: "7",
		name: "תל אביב"
	}];*/

	/*$scope.location = [{
		id: "1",
		name: "חיפה",
	},
	{
		id: "2",
		name: "ירושלים",
	},
	{
		id: "3",
		name: "ראשון לציון"
	
	}];*/
	
	var firstEntrance = true;

	$scope.slickConfig = {
							dots: true,
							prevArrow: false,
							nextArrow: false,
							centerMode:true,
							slidesToShow:1,
							slidesToScroll:1, 
							centerPadding: '30px',
							data: $rootScope.sliderArticles,
							enabled:true
						};


	$scope.$on('$ionicView.beforeEnter', function() {

        $rootScope.title = dictionary[$rootScope.CURRENT_LANGUAGE]["loggedin_title"];
		StatusBar.backgroundColorByHexString("#3e3e3e");
		if (!firstEntrance) 	$scope.showSliders = true;  // initialising slick slider

	});
	


	$scope.$on('$ionicView.loaded', function() {

		$ionicLoading.show({template: dictionary[$rootScope.CURRENT_LANGUAGE]["loading"]});
		$rootScope.articleCategories = [];
		$scope.sliderArticles = [];
		console.log("FIRST ENTRANCE");
		
	  	var url = SERVER_URL + 'ajax/getsliderarticles.php';
	  	$http.get(url)
	  			.success(function(data) {

	  				// ORDERING SLIDES
					var datacopy = data.slice(0);
					datacopy.sort(function(a,b) {
					    return a.order - b.order;
					});
					var lastIndex = datacopy.length;
					for (var i=0; i<lastIndex; i++) {
						$scope.sliderArticles[i] = datacopy[lastIndex-i-1];
					}
					$scope.showSliders = true;
					firstEntrance = false;
	  			})
	  			.error(function() {
	  				navigator.notification.alert(dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorText"], null, dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorTitle"], dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorButton"]);
	  			});
	 

		var url = SERVER_URL + 'ajax/getcategoriesforarticles.php';
		$http.get(url)
			.success(function(data) {
				console.log(data);
				var datacopy = data.slice(0);
				datacopy.sort(function(a,b) {
				    return a.order - b.order;
				});
				$rootScope.articleCategories = datacopy;
				localStorage.SECOND_ENTRANCE = 'true';
				console.log($rootScope.articleCategories);
				
			})
			.error(function() {
				navigator.notification.alert(dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorText"], null, dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorTitle"], dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorButton"]);
			});

		$rootScope.contacts = [];	
		var url = SERVER_URL + 'ajax/contactemails.php';
		$http.get(url)
  			.success(function(data) {
  				$rootScope.contacts = data;
  				console.log($rootScope.contacts);
  				console.log('CONTACT EMAILS here');
  			})
  			.error(function() {
  				navigator.notification.alert(dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorText"], null, dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorTitle"], dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorButton"]);
  			});


		console.log($rootScope.articleCategories);

		var url = SERVER_URL + 'ajax/galleries_and_news_images.php';
	  	$http.get(url)
	  			.success(function(data) {
	  				console.log(data);
	  				$scope.news_image = data[0].news_image;
	  				$scope.gallery_image = data[0].galleries_image;
	  				console.log($scope.gallery_image);
	  				$ionicLoading.hide();
	  			})
	  			.error(function() {
	  				navigator.notification.alert(dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorText"], null, dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorTitle"], dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorButton"]);
	  			});
		getCalendars();
		getProfile();
  	});

  	
	$scope.$on('$ionicView.beforeLeave', function() {
		$scope.showSliders = null;  // closing slick slider
		
	});

 	$scope.openAppointments = function(calendar) {

 		var options = 'location=yes, hideurlbar=yes';
 		var target = '_blank';
		 var ajaxUrl = SERVER_URL + 'ajax/appointments.php';
		 //var calendarUrl='https://m.fizikal.co.il/mobilev2/live/www/?OL_SYS=SHER_FITNESS&OL_USER=sher-user&OL_PWD=XgTV%23hcxN&COMP_ID=318&BRANCH_ID=3&USER_ID=1151701&PASS=1234&MOD_ID=21&TOKEN=e2a88336760a49c6970f489670a1c9a4&notNative=true';
		var calendarUrl = 'https://m.fizikal.co.il/mobilev2/live/www/?OL_SYS=' + localStorageService.cookie.get('OL_SYS') + '&OL_USER=' + localStorageService.cookie.get('OL_USER') + '&OL_PWD=' + 'XgTV%23hcxN' + '&COMP_ID=' + localStorageService.cookie.get('COMP_ID') + '&BRANCH_ID=' + calendar.id + '&USER_ID=' + localStorageService.cookie.get('USER_ID') + '&PASS=' + localStorageService.cookie.get('PASS') + '&MOD_ID=21' + '&TOKEN=' + localStorageService.cookie.get('TOKEN') + '&' + 'notNative=true' + '&#/';
		console.log("calendarUrl:",calendarUrl);
		var ref = cordova.InAppBrowser.open(calendarUrl,target,options);

		console.log("cal:",this.selectedCalendar);	
        console.log("calendar:",$rootScope.selectedCalendar);  
		this.selectedCalendar = '';
		
 	}
	 //this is Profile function
	 $scope.openProfile = function(Profile) {
		var options = 'location=yes, hideurlbar=yes';
		var target = '_blank';
		var ajaxUrl = SERVER_URL + 'ajax/appointments.php';
	    var MyProfileUrl =  'https://m.fizikal.co.il/mobilev2/live/www/?OL_SYS=' + localStorageService.cookie.get('OL_SYS') + '&OL_USER=' + localStorageService.cookie.get('OL_USER') + '&OL_PWD=' + 'XgTV%23hcxN' + '&COMP_ID=' + localStorageService.cookie.get('COMP_ID') + '&BRANCH_ID=' + Profile.id + '&USER_ID=' + localStorageService.cookie.get('USER_ID') + '&PASS=' + localStorageService.cookie.get('PASS') + '&MOD_ID=28' + '&TOKEN=' + localStorageService.cookie.get('TOKEN') + '&' + 'notNative=true';
	   console.log("MyProfileUrl:",MyProfileUrl);
	   var ref = cordova.InAppBrowser.open(MyProfileUrl,target,options);

	   console.log(this.selectedProfile);	
	   console.log($rootScope.selectedProfile);  
	   this.selectedProfile = '';
	 }

 	$scope.openEmail = function (selectedContact) {

/* 		console.log(selectedContact);
         var target = '_blank';
        var options = 'location=yes, hideurlbar=yes';
 		var url = "mailto:"+ selectedContact.email_address + "?subject=" + selectedContact.subject+"&body="+selectedContact.message;*/
     //   cordova.InAppBrowser.open(url, target, options);
     console.log(window.cordova.plugins);
 		cordova.plugins.email.isAvailable('gmail', function (hasAccount, hasGmail) {
            var client;
            if (hasAccount) 
                client = 'mailto';
            else if (hasGmail)
                client = 'gmail';
	 		cordova.plugins.email.open({
                app: client,
			    to:      selectedContact.email_address,
			    subject: selectedContact.subject,
			    body:   selectedContact.message
			});
 		});
     //    var Link="mailto:someone@example.com?subject=Hello%20again";
     //   window.open(Link, "_system");
        /*
        var url = "googlegmail://";
        var target = '_blank';
        var options = 'location=yes, hideurlbar=yes';
        cordova.InAppBrowser.open(url, target, options);
/*
        var callback;
        var subject = selectedContact.subject;
        var toRecipients = selectedContact.email_address;
        var body =  selectedContact.message;
        window.plugins.emailComposer.showEmailComposerWithCallback(callback,subject,body,toRecipients);
*/
 	}

    $scope.openCalendar = function(calendar) {

        console.log(calendar);
    }



  	$scope.galleriesMenu = function() {

  		$rootScope.galleries = [];
  		var url = SERVER_URL + 'ajax/getgalleries.php';
  		$http.get(url)
  			.success(function(data) {
  				
  				var datacopy = data.slice(0);
					datacopy.sort(function(a,b) {
					    return a.order - b.order;
					});
				$rootScope.galleries = datacopy;
  			//	console.log($rootScope.galleries);
  				$state.go('galleries');
  			})
  			.error(function() {
  				navigator.notification.alert(dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorText"], null, dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorTitle"], dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorButton"]);
  			});
  	}

  	$scope.newsMenu = function() {

  		$rootScope.news = [];
  		var url = SERVER_URL + 'ajax/getnews.php';
  		$http.get(url)
  			.success(function(data) {
  				$rootScope.news = data;
  				$state.go('news');
  			})
  			.error(function() {
  				navigator.notification.alert(dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorText"], null, dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorTitle"], dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorButton"]);
  			});
  	}

  	
}])
app.controller('SuperCtrl', function( $rootScope, $location, $window ) {
			  

	$rootScope.$on('$routeChangeSuccess', function () {
  
	  $window.ga('send', {
		'hitType': 'screenview',
		'appName' : 'SherFitness',
		'screenName' : $location.url(),
		'hitCallback': function() {
		  console.log('GA hitCallback sent!');
		}
	  }); 
		
	});
  
  });
/**
 * Main Screen New User Controller
 * Holds callbacks for every item of the menu that is clicked
 *
 * @param {!angular.$scope} $scope 
 * @param {!angular.$ionicLoading} $ionicLoading
 * @param {!angular.$http} $http
 * @param {!angular.$state} $state
 * @ngInject
 * @constructor
 */
app.controller('MainScreenNewUserCtrl', ['$scope', '$state', '$rootScope', '$ionicLoading', '$http','$ionicScrollDelegate', function($scope, $state, $rootScope, $ionicLoading, $http,$ionicScrollDelegate,$location) {
	$rootScope.$on('$stateChangeSucces',function(event,toState){
		window.dataLayer.push({
			event:'pageView',
			action:$location.paht(),
		})
	})
	localStorage.TYPE_OF_USER = "new";
	$scope.weeklyTip = dictionary[$rootScope.CURRENT_LANGUAGE]["weeklyTip"];
	$scope.updAndNews = dictionary[$rootScope.CURRENT_LANGUAGE]["updAndNews"];
	$scope.prcThisWeek = dictionary[$rootScope.CURRENT_LANGUAGE]["prcThisWeek"];
	$scope.articles = dictionary[$rootScope.CURRENT_LANGUAGE]["articles"];
	$scope.recipeThisWeek = dictionary[$rootScope.CURRENT_LANGUAGE]["recipeThisWeek"];
	$scope.photos = dictionary[$rootScope.CURRENT_LANGUAGE]["photos"];
	$scope.fitnessWork = dictionary[$rootScope.CURRENT_LANGUAGE]["fitnessWork"];
	$scope.sherChannel = dictionary[$rootScope.CURRENT_LANGUAGE]["sherChannel"];
	$scope.appName = dictionary[$rootScope.CURRENT_LANGUAGE]["appName"];
	$scope.booking = dictionary[$rootScope.CURRENT_LANGUAGE]["booking"];
	console.log('MainScreenNewUserCtrl');

	$scope.showSliders = false;
	$scope.sliderArticles = null;
	console.log($rootScope.title);
	$scope.currentIndex = 0;
	var stEntrance = true;
	$scope.slickConfig = {
							dots: true,
							prevArrow: false,
							nextArrow: false,
							centerMode:true,
							slidesToShow:1,
							slidesToScroll:1, 
							centerPadding: '30px',
							data: $rootScope.sliderArticles,
							enabled:true,			
	};


	$scope.$on('$ionicView.beforeEnter', function() {
        $rootScope.title = dictionary[$rootScope.CURRENT_LANGUAGE]["categories"];
        $rootScope.searchPlaceholder = dictionary[$rootScope.CURRENT_LANGUAGE]["recipesSearch"];
        console.log($rootScope.searchPlaceholder);
		StatusBar.backgroundColorByHexString("#d20086");
		$("input[type=submit]").css('right','63%');
		if (!firstEntrance) 	$scope.showSliders = true;  // initialising slick slider

	});

	$scope.$on('$ionicView.afterEnter', function() {

		$("input[type=submit]").css('right','63%');
	
		$('input[type=search]').focus(function(){
            console.log('search focus');
		//	$('.recipies_slider').hide();
		//	$scope.showSliders = false;

            $scope.showRecipeCategories = false;
            $rootScope.showRecipies = true;
            $rootScope.$digest();
            
        });

		$('input[type=search]').focusout(function() {
	//		$('.recipies_slider').show();
	//		$scope.showSliders = true;
			if ($state.current.name == 'mainscreennewuser' || $state.current.name =='trainings' )		
				$("input[type=submit]").css('right','63%');

            if ($scope.searching.length == 0) {
                $scope.showRecipeCategories = true;
                $rootScope.showRecipies = false;
                $rootScope.$digest();
            }

		});

		$('input[type=search]').on('change', function () {

	  		if ($('input[type=search]').val().length !== 0) {
		  		$("input[type=submit]").hide();

		  	}	else {
			  		$("input[type=submit]").show();

		  		}
	  	});
	});

	$scope.$on('$ionicView.loaded', function() {
	
		
	//	StatusBar.backgroundColorByHexString("#d20086");
		$scope.sliderArticles = [];
		$ionicLoading.show({template: dictionary[$rootScope.CURRENT_LANGUAGE]["loading"]});
		$rootScope.articleCategories = [];
		$rootScope.showArticleCategories = [];
		$scope.sliderArticles = [];
		console.log("FIRST ENTRANCE");	
        getAllArticles();
		
	  	var url = SERVER_URL + 'ajax/getsliderarticles.php';

	  	$http.get(url)
	  			.success(function(data) {
	  			//	console.log(data);
	  				// ORDERING SLIDES
					var datacopy = data.slice(0);
					datacopy.sort(function(a,b) {
					    return a.order - b.order;
					});
					var lastIndex = datacopy.length;
					for (var i=0; i<lastIndex; i++) {
						$scope.sliderArticles[i] = datacopy[lastIndex-i-1];
					}
					firstEntrance = false;
					$scope.showSliders = true;
					console.log($scope.sliderArticles);
	 				
	  			})
	  			.error(function() {
	  				navigator.notification.alert(dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorText"], null, dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorTitle"], dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorButton"]);
	  			});
	 

		var url = SERVER_URL + 'ajax/getcategoriesforarticles.php';

		$http.get(url)
			.success(function(data) {

				for (var i=0; i<data.length; i++) {
					for (var j=0; j<data.length; j++) {
						if (data[j].order < data[i].order) {
							$rootScope.articleCategories[i] = data[j];
							$rootScope.showArticleCategories[i] = data[j];
						} else {
							$rootScope.articleCategories[i] = data[i];
							$rootScope.showArticleCategories[i] = data[i];
						}	
					}
				}
				console.log($rootScope.articleCategories);
				localStorage.SECOND_ENTRANCE = 'true';
				if (window.StatusBar) {
					StatusBar.backgroundColorByHexString("#d20086");
				}
				$ionicLoading.hide();
			//	console.log(localStorage.SECOND_ENTRANCE);
			//	console.log($rootScope.articleCategories);
			})
			.error(function() {
				navigator.notification.alert(dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorText"], null, dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorTitle"], dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorButton"]);
			});
		
	});

	$scope.$on('$ionicView.beforeLeave', function() {
		$scope.showSliders = null;  // closing slick slider
		$("input[type=submit]").css('right','63%');
	});
	
	/*$scope.slickInitialisation = function(){
  $scope.refreshing=true;
  $scope.$apply();
  $scope.refreshing=false;
  $scope.$apply();
};*/
	var checkStatusBarPlugin = setInterval(function() {
		if (window.StatusBar) {
			StatusBar.backgroundColorByHexString("#d20086");
			clearInterval(checkStatusBarPlugin);
		}
	},1000); 

	setTimeout(function () {
	  	console.log("activatepush");
    	$rootScope.activatePushNotifications();
    },10000);

	//OPEN SELECTED ARTICLE
	$rootScope.openArticle = function (id, articleType) {
	  /* console.log("open:", id);
       console.log($rootScope.selectedArticle);*/
       var querryDB = true;
        if ($rootScope.cachedArticles) {
            for (var i=0; i<$rootScope.cachedArticles.length; i++) {
                if ($rootScope.cachedArticles[i].id == id) {
                    $rootScope.selectedArticle = $rootScope.cachedArticles[i];
                    if (articleType == 'recipe' || 'news') {
                    //    console.log("same article");
                        $state.go('articlescreen');
                        querryDB = false;
                    }
                    if (articleType == 'training') {
                    //    console.log(articleType);
                        $state.go('training');
                        querryDB = false;
                    }
                    if (articleType == 'health') {
                        $state.go('healthArticleScreen');
                        querryDB = false;
                    }
                } 
            }
            if ($rootScope.cachedArticles.length > 20) {
                $rootScope.cachedArticles.shift();
            }       
        }

        if (querryDB) {

    		$ionicLoading.show({template: dictionary[$rootScope.CURRENT_LANGUAGE]["loading"]});
    		var url = SERVER_URL + 'ajax/getarticle.php';
    		var data = {id: id,  
                        articleType: articleType};
            console.log("open article:", data);
    		$rootScope.selectedArticle = [];
    	//	console.log(data);
    		$http.post(url, data)
    			.success(function(data) {
    			//	console.log(data);
    				if (!data[0].video)		
                        data[0].video = '';	
    				if (!data[0].video_thumbnail) 		
                        data[0].video_thumbnail = data[0].image_thumbnail;			
    				$rootScope.selectedArticle = data[0];
    				console.log($rootScope.selectedArticle);
                  
                    if (articleType == 'recipe' || 'news') {
    				    $state.go('articlescreen');
                    }
                    if (articleType == 'training') {
                        console.log(articleType);
                        $state.go('training');
                    }
                    if (articleType == 'health') {
                        $state.go('healthArticleScreen');
                    }

                    $rootScope.cachedArticles.push($rootScope.selectedArticle);
                    console.log($rootScope.cachedArticles);
    				$ionicLoading.hide();
    			})
    			.error(function() {
    				navigator.notification.alert(dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorText"], null, dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorTitle"], dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorButton"]);
    			});

    	   };
        }

    $scope.openCategory = function (category) {
        
        $rootScope.selectedCategory = category;
    //  $ionicLoading.show({template: dictionary[$rootScope.CURRENT_LANGUAGE]["loading"]});
        var url = SERVER_URL + 'ajax/getarticlesforcategory.php';
        var param = { id: category.id };
        console.log(param);
        $rootScope.articles = [];
        
        $http.post(url, param)
            .success(function(data) {

                for (var i=0; i<data.length; i++) {
                    for (var j=0; j<data.length; j++) {
                        if (data[j].order < data[i].order) {
                            $rootScope.articles[i] = data[j];
                        }   else {
                                $rootScope.articles[i] = data[i];
                            }   
                    }
                }
                
                console.log($rootScope.articles);
                $ionicLoading.hide();
                $state.go('articlesscreen');

            })
            .error(function() {
                navigator.notification.alert(dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorText"], null, dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorTitle"], dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorButton"]);
            });
    };

    function getAllArticles() {
        console.log("getting all articles XXXXXXX");
        $rootScope.allArticles = [];
    //  $ionicLoading.show({template: dictionary[$rootScope.CURRENT_LANGUAGE]["loading"]});
        var url = SERVER_URL + 'ajax/getallarticles.php';


        $rootScope.healths = [];
        
        $http.get(url)
            .success(function(data) {
                console.log("data", data);
                for (var i=0; i<data.length; i++) {
                    for (var j=0; j<data.length; j++) {
                        if (data[j].order < data[i].order) {
                            $rootScope.allArticles[i] = data[j];
                        }   else {
                                $rootScope.allArticles[i] = data[i];
                            }   
                    }
                }
                
                console.log($rootScope.allArticles);
        //      $ionicLoading.hide();


            })
            .error(function() {
                navigator.notification.alert(dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorText"], null, dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorTitle"], dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorButton"]);
            });
    }
    


	

}])

/**
 * Footer Controller
 * Initiates the 'hrefs' of the 'a' tag
 *
 * @param {!angular.$scope} $scope 
 * @ngInject
 * @constructor
 */
app.controller('FooterCtrl', ['$scope', function($scope) {
	$scope.phoneHref = "tel:" + PHONE_NO_CONTACT;
	$scope.emailHref = "mailto:" + EMAIL_ADDRESS_CONTACT;
	//$scope.facebookHref = FACEBOOK_PAGE_URL;
/*	$scope.facebookClick = function() {
		if (localStorage.PLATFORM == "Android") {
			window.location.href = FACEBOOK_PAGE_URL;
		} else if (localStorage.PLATFORM == "iOS") {
			appAvailability.check(
				'fb://',
				function() {
					window.location.href = FACEBOOK_PAGE_URL;
				//	window.open(FACEBOOK_IOS_PAGE_URL, '_system');
				},
				function() {
					window.location.href = FACEBOOK_PAGE_URL;
				}
			);
		}
	}*/
}])

app.controller('HealthArticlesCtrl', ['$scope', '$state', '$rootScope', '$ionicLoading', '$http','$ionicScrollDelegate', function($scope, $state, $rootScope, $ionicLoading, $http,$ionicScrollDelegate) {

    console.log('HealthArticlesCtrl');

    $scope.showSliders = false;
    $scope.sliderHealths = null;
    console.log($rootScope.title);
    $scope.currentIndex = 0;
    var firstEntrance = true;
    $scope.slickConfig = {
                            dots: true,
                            prevArrow: false,
                            nextArrow: false,
                            centerMode:true,
                            slidesToShow:1,
                            slidesToScroll:1, 
                            centerPadding: '30px',
                            data: $rootScope.sliderArticles,
                            enabled:true,             
    };

    $scope.$on('$ionicView.beforeEnter', function() {
        $rootScope.searchPlaceholder = dictionary[$rootScope.CURRENT_LANGUAGE]["healthSearch"];
        console.log($rootScope.searchPlaceholder);
        StatusBar.backgroundColorByHexString("#d20086");
        $("input[type=submit]").css('right','63%');
        if (!firstEntrance)     $scope.showSliders = true;  // initialising slick slider

    });

    $scope.$on('$ionicView.afterEnter', function() {

        $("input[type=submit]").css('right','63%');
    
        $('input[type=search]').focus(function(){
        //  $('.recipies_slider').hide();
        //  $scope.showSliders = false;
            if ($state.current.name == 'mainscreennewuser' || $state.current.name =='trainings' )   
                $("input[type=submit]").css('right','92%');
        });

        $('input[type=search]').focusout(function() {
    //      $('.recipies_slider').show();
    //      $scope.showSliders = true;
            if ($state.current.name == 'mainscreennewuser' || $state.current.name =='trainings' )       
                $("input[type=submit]").css('right','63%');
        });

        $('input[type=search]').on('change', function () {

            if ($('input[type=search]').val().length !== 0) {
                $("input[type=submit]").hide();

            }   else {
                    $("input[type=submit]").show();

                }
        });
    });

    $scope.$on('$ionicView.loaded', function() {
        
        console.log("FIRST ENTRANCE");  
    //  StatusBar.backgroundColorByHexString("#d20086");
     //   $ionicLoading.show({template: dictionary[$rootScope.CURRENT_LANGUAGE]["loading"]});
        $rootScope.healthArticles = [];
        $scope.sliderHealthArticles = [];
        
        var url = SERVER_URL + 'ajax/getsliderhealths.php';

        $http.get(url)
                .success(function(data) {
                   console.log(data);
                    // ORDERING SLIDES
                    var datacopy = data.slice(0);
                    datacopy.sort(function(a,b) {
                        return a.order - b.order;
                    });
                    var lastIndex = datacopy.length;
                    for (var i=0; i<lastIndex; i++) {
                        $scope.sliderHealthArticles[i] = datacopy[lastIndex-i-1];
                    }
                    firstEntrance = false;
                    $scope.showSliders = true;
                    console.log($scope.sliderHealthArticles);

                    
                })
                .error(function() {
                    navigator.notification.alert(dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorText"], null, dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorTitle"], dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorButton"]);
                });
        

        var url = SERVER_URL + 'ajax/gethealtharticles.php';

        $http.get(url)
            .success(function(data) {
                for (var i=0; i<data.length; i++) {
                    for (var j=0; j<data.length; j++) {
                        if (data[j].order < data[i].order) {
                            $rootScope.healthArticles[i] = data[j];
                        } else {
                            $rootScope.healthArticles[i] = data[i];
                        }   
                    }
                }
                console.log($rootScope.healthArticles);
                localStorage.SECOND_ENTRANCE = 'true';
                if (window.StatusBar) {
                    StatusBar.backgroundColorByHexString("#d20086");
                }
                $ionicLoading.hide();
            })
            .error(function() {
                navigator.notification.alert(dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorText"], null, dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorTitle"], dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorButton"]);
            });
    });

    $scope.$on('$ionicView.beforeLeave', function() {
        $scope.showSliders = null;  // closing slick slider
        $("input[type=submit]").css('right','63%');
    });
    
    var checkStatusBarPlugin = setInterval(function() {
        if (window.StatusBar) {
            StatusBar.backgroundColorByHexString("#d20086");
            clearInterval(checkStatusBarPlugin);
        }
    },1000); 

    setTimeout(function () {
        console.log("activatepush");
        $rootScope.activatePushNotifications();
    },10000);

    //OPEN SELECTED ARTICLE
    $rootScope.openHealth = function (healthID) {
        console.log("opening article");
        $ionicLoading.show({template: dictionary[$rootScope.CURRENT_LANGUAGE]["loading"]});

            var url = SERVER_URL + 'ajax/gethealth.php';
            var data = {id: healthID}; 
            $rootScope.selectedHealthA = [];
            console.log(data);
            $http.post(url, data)
                .success(function(data) {
                    console.log(data);
                    if (!data[0].video)     data[0].video = ''; 
                    if (!data[0].video_thumbnail)       data[0].video_thumbnail = data[0].image_thumbnail;          
                    $rootScope.selectedHealthArticle= data[0];

                    console.log($rootScope.selectedHealthArticle);
                    $state.go('healthArticleScreen');
                    $ionicLoading.hide();
                })
                .error(function() {
                    navigator.notification.alert(dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorText"], null, dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorTitle"], dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorButton"]);
                });

    };
    $scope.openCategory = function (category) {
        
        $rootScope.selectedCategory = category;
    //  $ionicLoading.show({template: dictionary[$rootScope.CURRENT_LANGUAGE]["loading"]});
        var url = SERVER_URL + 'ajax/gethealthsforcategory.php';
        var param = { id: category.id };
        console.log(param);
        $rootScope.healths = [];
        
        $http.post(url, param)
            .success(function(data) {

                for (var i=0; i<data.length; i++) {
                    for (var j=0; j<data.length; j++) {
                        if (data[j].order < data[i].order) {
                            $rootScope.healths[i] = data[j];
                        }   else {
                                $rootScope.healths[i] = data[i];
                            }   
                    }
                }
                
                console.log($rootScope.healths);
        //      $ionicLoading.hide();
                $state.go('healthArticlesCategoriesScreen');

            })
            .error(function() {
                navigator.notification.alert(dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorText"], null, dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorTitle"], dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorButton"]);
            });
    };

    
   

    /**
     * Fires when the user clicks on the first item of the menu
     * Performs a http request for retrieving the weekly tip
     */
    
}])


app.controller('HealthArticlesCategoriesCtrl', ['$scope', '$state', '$rootScope', '$ionicLoading', '$ionicHistory', '$http', function($scope, $state, $rootScope, $ionicLoading, $ionicHistory, $http) {
    console.log('ArticlesCtrl');

    $scope.$on('$ionicView.beforeEnter', function() {
        $rootScope.title = $rootScope.selectedCategory.name;
        StatusBar.backgroundColorByHexString("#3e3e3e");
        $('.category-title').css('padding-left','62px');
    });

    $('input[type=search]').css('padding-right','62px');

    $('input[type=search]').focus(function(){
        $('input[type=search]').css('padding-right','4px');

        $("input[type=submit]").hide();
    });
    
    $('input[type=search]').focusout(function(){
        if ($('input[type=search]').val().length == 0)
            $("input[type=submit]").show();
        else
            $('input[type=search]').css('color','#3e3e3e');
        $('input[type=search]').css('padding-right','62px');
    });

    $("input[type=submit]").click(function() {
        $('input[type=search]').focus();
        $('input[type=search]').css('padding-right','4px');
    });

    $('input[type=search]').change(function () {
        $('input[type=search]').css('padding-right','32px');
        if ($('input[type=search]').val().length !== 0) {
            $('input[type=search]').css('position','relative');
            $('input[type=search]').css('padding-right','4px');
    }   else {
            $('input[type=search]').css('position','relative');
            //$('input[type=search]').css('right','25px');
        }
    });

    $scope.healthArticleClick = function(article) {
        $rootScope.selectedHealthArticle = article;
        $state.go('healthArticleScreen');
    };
    
    console.log($rootScope.healthArticles);
}])


app.controller('HealthArticleCtrl', ['$scope', '$rootScope','$ionicHistory','$sce', function($scope, $rootScope, $ionicHistory, $sce) {

    console.log('health articlectrl');

    $scope.$on('$ionicView.beforeEnter', function() {
        StatusBar.backgroundColorByHexString("#3e3e3e");
    });

    $('vg-controls').display = 'false';
    $rootScope.socialFooter = true;

    $scope.$on('$stateChangeStart', function() {
        $rootScope.socialFooter = false;
    });

    $scope.config = {
                        sources: [{ src: $sce.trustAsResourceUrl($rootScope.selectedArticle.video), type: "video/mp4"   }],
                        plugins: {  poster: $rootScope.selectedArticle.video_thumbnail  }
                    };


}])

/**
 * Articles Screen Controller
 * Displays a list of articles retrieved from the server
 *
 * @param {!angular.$scope} $scope 
 * @param {!angular.$ionicLoading} $ionicLoading
 * @param {!angular.$http} $http
 * @param {!angular.$state} $state
 * @ngInject
 * @constructor
 */
app.controller('ArticlesCtrl', ['$scope', '$state', '$rootScope', '$ionicLoading', '$ionicHistory', '$http', function($scope, $state, $rootScope, $ionicLoading, $ionicHistory, $http) {
	console.log('ArticlesCtrl');

	$rootScope.title = $rootScope.selectedCategory.name;

	$scope.$on('$ionicView.beforeEnter', function() {
		StatusBar.backgroundColorByHexString("#3e3e3e");
		$('.category-title').css('padding-left','62px');
	});

  	$('input[type=search]').css('padding-right','62px');

	$('input[type=search]').focus(function(){
        $('input[type=search]').css('display','block');
		$('input[type=search]').css('padding-right','4px');

    	$("input[type=submit]").hide();
  	});
 	
  	$('input[type=search]').focusout(function(){
        if ($('input[type=search]').val().length == 0)
    	    $("input[type=submit]").show();	
        else
            $('input[type=search]').css('color','#3e3e3e');
 /*   	$('._recipies_item').each(function (i,obj) {
			obj.style.display = ""; 
		});*/
    	//$('input[type=search]').css('padding-right','62px');
  	});

  	$("input[type=submit]").click(function() {
  		$('input[type=search]').focus();
  		$('input[type=search]').css('padding-right','4px');
  	});

  	$('input[type=search]').change(function () {
  		$('input[type=search]').css('padding-right','32px');
  		if ($('input[type=search]').val().length !== 0) {
	  		$('input[type=search]').css('position','relative');
	  		$('input[type=search]').css('padding-right','4px');
  	}	else {
	  		$('input[type=search]').css('position','relative');
	  		//$('input[type=search]').css('right','25px');
  		}
  	});

	$scope.articleClick = function(article) {
		$rootScope.selectedArticle = article;
		$state.go('articlescreen');
	};
	
	console.log($rootScope.articles);
}])

/**
 * Article Controller
 * Displays information about the selected article from the articles screen
 *
 * @param {!angular.$scope} $scope
 * @param {!angular.$rootScope} $rootScope 
 * @ngInject
 * @constructor
 */
app.controller('ArticleCtrl', ['$scope', '$rootScope','$ionicHistory','$sce', function($scope, $rootScope, $ionicHistory, $sce) {

	console.log('articlectrl',$rootScope.selectedArticle);

	$scope.$on('$ionicView.beforeEnter', function() {
		StatusBar.backgroundColorByHexString("#3e3e3e");
	});

	$('vg-controls').display = 'false';
	$rootScope.socialFooter = true;
	$scope.selectedArticle = $rootScope.selectedArticle;

	$scope.$on('$stateChangeStart', function() {
		$rootScope.socialFooter = false;
	});
	console.log($scope.selectedArticle);
	$scope.config = {
						sources: [{	src: $sce.trustAsResourceUrl($scope.selectedArticle.video), type: "video/mp4"	}],
						plugins: {	poster: $scope.selectedArticle.video_thumbnail	}
					};

}])



app.controller('MealPlanCtrl', ['$scope', '$rootScope', '$ionicHistory', '$http', '$state', 'localStorageService', function($scope, $rootScope, $ionicHistory, $http, $state, localStorageService) {
//	$scope.articleTitle = $rootScope.selectedArticle.name;
//	$scope.articleHeading = $rootScope.selectedArticle.heading;
//	$scope.articleSrc = $rootScope.selectedArticle.pic_url;
//	$scope.articleDescription = $rootScope.selectedArticle.description;
	
	$rootScope.totalCalories = 0;
	console.log('MEALPLANCTRL');

	$rootScope.dayswithmeals = [];
	$rootScope.dayswithmeals = localStorageService.get('mealplan');
	
	
 
	$scope.$on('$ionicView.beforeEnter', function() {
		StatusBar.backgroundColorByHexString("#d20086");
		caloriesMean();
	});

	if (!$rootScope.dayswithmeals) {
		console.log('defining dyas');
		var sunday = dictionary[$rootScope.CURRENT_LANGUAGE]["sunday"];
		var monday = dictionary[$rootScope.CURRENT_LANGUAGE]["monday"];
		var tuesday = dictionary[$rootScope.CURRENT_LANGUAGE]["tuesday"];
		var wednesday = dictionary[$rootScope.CURRENT_LANGUAGE]["wednesday"];
		var thursday = dictionary[$rootScope.CURRENT_LANGUAGE]["thursday"];
		var friday = dictionary[$rootScope.CURRENT_LANGUAGE]["friday"];
		var saturday = dictionary[$rootScope.CURRENT_LANGUAGE]["saturday"];
		
		var days = [sunday, monday, tuesday,wednesday,thursday,friday,saturday ];
		$rootScope.dayswithmeals = [];	
		for (var i=0;i<7;i++) {
			$rootScope.dayswithmeals.push({'day' :  days[i], meals : []});	
		}
		
	}

	console.log($rootScope.dayswithmeals);


	$scope.addMeal = function (day) {
		$rootScope.selectedDay = day;
		console.log($rootScope.selectedDay);
		caloriesMean();
		$state.go('meal-plan-add-categories');
	};

	

	
	$scope.deleteMeal = function (day, indexOfMeal) {
		console.log(day,indexOfMeal);
		
		for (var i=0;i<7;i++) {
			if ($rootScope.dayswithmeals[i].day == day) {
			
					$rootScope.dayswithmeals[i].meals.splice(indexOfMeal,1);
					localStorageService.set('mealplan', $rootScope.dayswithmeals);
					caloriesMean();
			}	
			
		}
		
		console.log($rootScope.dayswithmeals);
		
	}

	
	
	function caloriesMean () {
		console.log("calories mean entered");
		$rootScope.totalCalories = 0;
		var numberOfDays = 0;
		for (var i=0;i<7;i++) {
			if ($rootScope.dayswithmeals) {
				if ($rootScope.dayswithmeals[i].meals) {
					for(var j=0; j<$rootScope.dayswithmeals[i].meals.length; j++) {
						if (parseInt($rootScope.dayswithmeals[i].meals[j].calories) > 0) {
							$rootScope.totalCalories += parseInt($rootScope.dayswithmeals[i].meals[j].calories);
							
						}
					}
				}

				if ($rootScope.dayswithmeals[i].meals.length > 0) {
					numberOfDays ++;
				}					
			}
		}

	
		console.log(numberOfDays)
		console.log($rootScope.totalCalories);

		if (numberOfDays > 0) {
			$rootScope.totalCalories = $rootScope.totalCalories / numberOfDays;
			$rootScope.totalCalories = $rootScope.totalCalories.toString().split('.')[0];
		}	else {
				$rootScope.totalCalories = 0;
			}
		
		console.log($rootScope.totalCalories);
	}	

	
}])

app.controller('MealPlanCategoriesCtrl', ['$scope', '$rootScope', '$ionicHistory', '$http', '$state', 'localStorageService', function($scope, $rootScope, $ionicHistory, $http, $state, localStorageService) {


	$scope.$on('$ionicView.beforeEnter', function() {
		StatusBar.backgroundColorByHexString("#d20086");
		$('input[type=search]').css('right','0%');
	});

	$('input[type=search]').css('padding-right','32px');

	$('input[type=search]').focus(function(){
		$('input[type=search]').css('padding-right','4px');
    	$("input[type=submit]").hide();
  	});
 	
  	$('input[type=search]').focusout(function(){
    	if ($('input[type=search]').val().length == 0)
           $("input[type=submit]").show();
        else
            $('input[type=search]').css('color','#3e3e3e');
    	$('input[type=search]').css('padding-right','32px');
    //	$('input[type=search]').css('right','2%');
  	});

  	$("input[type=submit]").click(function() {
  		$('input[type=search]').focus();
  		$('input[type=search]').css('padding-right','4px');
  	});

  	$('input[type=search]').change(function () {
  		$('input[type=search]').css('padding-right','32px');
  		if ($('input[type=search]').val().length !== 0) {
	  		$('input[type=search]').css('position','relative');
	  		$('input[type=search]').css('padding-right','4px');
  	}	else {
	  		$('input[type=search]').css('position','relative');
	  		//$('input[type=search]').css('right','25px');
  		}
  	});

  	$scope.$on('$stateChangeStart', function() {
		$('input[type=search]').css('position','relative');
	  //	$('input[type=search]').css('padding-right','4px');
	});

	$scope.openCategory = function (category) {
			console.log("opencat in mealplan ctrl")
			$scope.selectedCategory = category;
		//	$ionicLoading.show({template: dictionary[$rootScope.CURRENT_LANGUAGE]["loading"]});
			var url = SERVER_URL + 'ajax/getarticlesforcategory.php';
			var param = { id: category.id };
			console.log(param);


			$rootScope.articles = [];
			
			$http.post(url, param)
				.success(function(data) {

					for (var i=0; i<data.length; i++) {
						for (var j=0; j<data.length; j++) {
							if (data[j].order < data[i].order) {
								$rootScope.articles[i] = data[j];
							}	else {
									$rootScope.articles[i] = data[i];
								}	
						}
					
					}
					
					console.log($rootScope.articles);
			//		$ionicLoading.hide();
					$state.go('meal-plan-add-recipies');

				})
				.error(function() {
					navigator.notification.alert(dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorText"], null, dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorTitle"], dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorButton"]);
				});
		};



}])


app.controller('MealPlanRecipiesCtrl', ['$scope', '$rootScope', '$ionicHistory', '$http', '$state', 'localStorageService', function($scope, $rootScope, $ionicHistory, $http, $state, localStorageService) {

	StatusBar.backgroundColorByHexString("#d20086");

	$('input[type=search]').focus(function(){
    	$("input[type=submit]").hide();
  	});
 	
  	$('input[type=search]').focusout(function(){
    	if ($('input[type=search]').val().length == 0)
           $("input[type=submit]").show();
  
  	});

  	$("input[type=submit]").click(function() {
  		$('input[type=search]').focus();
  		$('input[type=search]').css('padding-right','4px');
  	});

  	$('input[type=search]').change(function () {
  	
  		if ($('input[type=search]').val().length !== 0) {
	  		$('input[type=search]').css('position','relative');
  	}	else {
	  		$('input[type=search]').css('position','relative');
	  		//$('input[type=search]').css('right','25px');
  		}
  	});

  	$scope.$on('$stateChangeStart', function() {
		$('input[type=search]').css('position','relative');
//	  	$('input[type=search]').css('right','4px');
	});

	$scope.selectRecipe = function (article) {
		console.log($rootScope.selectedDay);
		console.log($rootScope.dayswithmeals);
		for (var i=0;i<7;i++) {
			if ($rootScope.selectedDay == $rootScope.dayswithmeals[i].day) {
				$rootScope.dayswithmeals[i].meals.push(article);
			    localStorageService.set('mealplan', $rootScope.dayswithmeals);
			    caloriesMean ();		
				$state.go('meal-plan');

			}
		}
		
		

	};

	
	function caloriesMean () {

		$rootScope.totalCalories = 0;
		var numberOfDays = 0;
		for (var i=0;i<7;i++) {
			if ($rootScope.dayswithmeals) {
				if ($rootScope.dayswithmeals[i].meals) {
					for(var j=0; j<$rootScope.dayswithmeals[i].meals.length; j++) {
						if (parseInt($rootScope.dayswithmeals[i].meals[j].calories) > 0) {
							$rootScope.totalCalories += parseInt($rootScope.dayswithmeals[i].meals[j].calories);
							
						}
					}
				}

				if ($rootScope.dayswithmeals[i].meals.length > 0) {
					numberOfDays ++;
				}					
			}
		}

	
		console.log(numberOfDays)
		console.log($rootScope.totalCalories);

		if (numberOfDays > 0) {
			$rootScope.totalCalories = $rootScope.totalCalories / numberOfDays;
		}	else {
				$rootScope.totalCalories = 0;
			}
		
		console.log($rootScope.totalCalories);
	}	

	
}])

/**
 * Photos Controller
 * Aligns all the photos into a grid
 *
 * @param {!angular.$scope} $scope
 * @param {!angular.$rootScope} $rootScope
 * @param {!angular.$ionicLoading} $ionicLoading
 * @param {!angular.$http} $http 
 * @param {!angular.$ionicPopup} $ionicPopup 
 * @ngInject
 * @constructor
 */
app.controller('GalleryCtrl', ['$scope','$state', '$ionicLoading', '$rootScope', '$http', '$ionicPopup','$ionicModal','$ionicSlideBoxDelegate','$ionicScrollDelegate','$timeout', function($scope,$state, $ionicLoading, $rootScope, $http, $ionicPopup, $ionicModal, $ionicSlideBoxDelegate, $ionicScrollDelegate, $timeout) {
	console.log('galleryctrl');



}])



app.controller('PhotosCtrl', ['$scope','$state', '$ionicBackdrop', '$ionicModal', '$ionicSlideBoxDelegate', '$ionicScrollDelegate','$rootScope','$http', function($scope,$state,$ionicBackdrop,$ionicModal,$ionicSlideBoxDelegate,$ionicScrollDelegate, $rootScope, $http) {
	console.log('PhotosCtrl');

	$scope.$on('$ionicView.afterEnter', function () {
        $rootScope.title = dictionary["hebrew"]["image_gallery"];
		$scope.images = []; // photos of modal
		$scope.photos = $rootScope.photos; // photos of gallery
		$scope.zoomMin = 1;

		if ($rootScope.photos) { // reordering for rtl
			for (var i=0; i<$scope.photos.length;i++) {
				var index = $scope.photos.length - 1 - i; 
				$scope.images[i] = $scope.photos[index];
			}
		}
		console.log($scope.images);		
	});


	$scope.showImages = function(index) {
	  	$scope.activeSlide = $scope.photos.length - 1 - index; 
	  	$scope.showModal('gallery-zoomview.html');
	};
	 
	$scope.showModal = function(templateUrl) {
		
	  	$ionicModal.fromTemplateUrl(templateUrl, {
	    	scope: $scope
	  	})	.then(function(modal) {
	    		$scope.modal = modal;
	    		$scope.modal.show();
	  		});
	}
	 
	$scope.closeModal = function() {
	  	$scope.modal.hide();
	 	$scope.modal.remove()
	};
	 
	$scope.updateSlideStatus = function(slide) {
	  	var zoomFactor = $ionicScrollDelegate.$getByHandle('scrollHandle' + slide).getScrollPosition().zoom;
	 	if (zoomFactor == $scope.zoomMin) {
	   		$ionicSlideBoxDelegate.enableSlide(true);
	  	} 	else {
	   		 	$ionicSlideBoxDelegate.enableSlide(false);
	  		}
	};

}])

/**
 * Updates and News Screen Controller
*/

app.controller('NewsCtrl', ['$scope', '$ionicLoading', '$rootScope', '$http', '$state', '$ionicHistory', function($scope, $ionicLoading, $rootScope, $http, $state, $ionicHistory) {
	console.log('UpdatesAndNewsCtrl');

	console.log($rootScope.news);
    $scope.$on('$ionicView.beforeEnter', function () {
            $rootScope.title = dictionary["hebrew"]["newsAndUpdates"];     
    });

	$scope.articleClick = function(article) {
		$rootScope.selectedArticle = article;
        console.log($rootScope.selectedArticle);
		$state.go('articlescreen');
	};
	
	$scope.updatesAndNewsTitle = dictionary[$rootScope.CURRENT_LANGUAGE]["updatesAndNewsTitle"];
	
/*    $scope.openNewsArticle = function (articleID) {

        $ionicLoading.show({template: dictionary[$rootScope.CURRENT_LANGUAGE]["loading"]});

            var url = SERVER_URL + 'ajax/getnewsarticle.php';
            var data = {id: articleID};
            $rootScope.selectedArticle = [];
            console.log(data);
            $http.post(url, data)
                .success(function(data) {
                    console.log(data);
                //    if (!data[0].video)     data[0].video = ''; 
                //   if (!data[0].video_thumbnail)       data[0].video_thumbnail = data[0].image_thumbnail;          
                    $rootScope.selectedArticle = data[0];

                    console.log($rootScope.selectedArticle);
                    $state.go('articlescreen');
                    $ionicLoading.hide();
                })
                .error(function() {
                    navigator.notification.alert(dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorText"], null, dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorTitle"], dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorButton"]);
                });
    };*/

}])


app.controller('PracticeOfTheWeekCtrl', ['$scope', '$ionicLoading', '$rootScope', '$http', '$state', '$ionicHistory', function($scope, $ionicLoading, $rootScope, $http, $state, $ionicHistory) {

	/**
	 * Fires when the user clicks on a article
	 * @param {Object} article The clicked article.
	 */

	$ionicLoading.show({template: dictionary[$rootScope.CURRENT_LANGUAGE]["loading"]});

	$scope.articleClick = function(article) {
		$rootScope.selectedArticle = article;
		$state.go('articlescreen');
	};

	var pinnedReqFinished = false;
	var articlesReqFinished = false;
	var emptyPinned = false;
	var emptyArticles = false;
	var articles = [];

	// performs a http request to retrieve the pinned article
	var service = "ajax/getpinnedpractice.php";
	var url = SERVER_URL + service;
	$http.get(url)
	.success(function(data) {
		if (data.length == 0) {
			$ionicLoading.hide();
			if (emptyArticles) {
				$ionicHistory.goBack();
			}
			emptyPinned = true;
			return;
		}
		pinnedReqFinished = true;
		$scope.pinnedArticle = data;
		$scope.pinnedArticle.pic_url = SERVER_URL + $scope.pinnedArticle.pic_url;
		if (pinnedReqFinished && articlesReqFinished) {
			$ionicLoading.hide();
		}
	})
	.error(function() {
		pinnedReqFinished = true;
		console.log("error");
		if (pinnedReqFinished && articlesReqFinished) {
			$ionicLoading.hide();
			navigator.notification.alert(dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorText"], null, dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorTitle"], dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorButton"]);
		}
	});

	/// get all practices of the week less pinned
		var service = "ajax/getpracticedlesspinned.php";
		var url = SERVER_URL + service;
		$http.get(url)
		.success(function(data) {
			
			
			if (data.length == 0) {
			$ionicLoading.hide();
			if (emptyPinned) {
				$ionicHistory.goBack();
			}
			emptyArticles = true;
			return;
		}
		articlesReqFinished = true;
		$scope.articles = data;
		for (var i = 0; i < $scope.articles.length; i ++) {
			$scope.articles[i].thumbnail_url = SERVER_URL + $scope.articles[i].thumbnail_url;
			$scope.articles[i].pic_url = SERVER_URL + $scope.articles[i].pic_url;
		}
		if (pinnedReqFinished && articlesReqFinished) {
			$ionicLoading.hide();
		}



/*



			if( data['subcategories'] != null ){
				// boxes screen
				$rootScope.SELECTED_SCREEN = data['entity'].id;
				$state.go('boxes',{id: data['entity'].id});
			}else if( data['articles'] != null ){
				// articles screen
				$state.go('articlesscreen',{id: data['entity'].id});
			}else if( data['article'] != null ){
				// single article screen
				$rootScope.selectedArticle = data['article'];
				$rootScope.selectedArticle.thumbnail_url = SERVER_URL + $rootScope.selectedArticle.thumbnail_url;
				$rootScope.selectedArticle.pic_url = SERVER_URL + $rootScope.selectedArticle.pic_url;
				$state.go('articlescreen');
			}
			
			$ionicLoading.hide();
*/
		})
		.error(function() {
			console.log("error");
			$ionicLoading.hide();
			navigator.notification.alert(dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorText"], null, dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorTitle"], dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorButton"]);
		});



}])

/**
 * Training Controller
 * Does nothing. Everything is already handled by the Boxes Screen Controller
 *
 * @constructor
 */
app.controller('TrainingsCtrl', ['$scope', '$state', '$rootScope', '$ionicLoading', '$http', function($scope, $state, $rootScope, $ionicLoading, $http)  {

	$scope.showSliders = false;
	var firstEntrance = true;
    console.log("trainings ctrl");
	$scope.slickConfig = {
							dots: true,
							prevArrow: false,
							nextArrow: false,
							centerMode:true,
							slidesToShow:1,
							slidesToScroll:1, 
							centerPadding: '30px',
							data: $rootScope.sliderArticles,
							enabled:true
						};

    $scope.$on('$ionicView.beforeEnter', function () {
            $rootScope.searchPlaceholder = dictionary[$rootScope.CURRENT_LANGUAGE]["trainingsSearch"];
            console.log($rootScope.searchPlaceholder);
            $rootScope.title = dictionary["hebrew"]["newsAndUpdates"]; 
            $("input[type=submit]").css('right','63%');    
            if (!firstEntrance)     $scope.showSliders = true;  // initialising slick slider
            $rootScope.title = dictionary["hebrew"]["trainingsTitle"];
    });
	$scope.$on('$ionicView.beforeEnter', function() {
        console.log("ionbefore enter training");
		StatusBar.backgroundColorByHexString("#d20086");
	});
	var checkStatusBarPlugin = setInterval(function() {
		console.log("statusBar:",window.StatusBar);
        if (window.StatusBar) {
            StatusBar.backgroundColorByHexString("#d20086");
            clearInterval(checkStatusBarPlugin);
        }
    },1000); 
	/*$scope.$on('$ionicView.beforeEnter', function() {
        console("ionbefore enter training");
		StatusBar.backgroundColorByHexString("#d20086");
		$("input[type=submit]").css('right','63%');
		if (!firstEntrance)		$scope.showSliders = true;  // initialising slick slider
		$rootScope.title = dictionary["hebrew"]["trainingsTitle"];
	});
*/
	$scope.$on('$ionicView.afterEnter',function() {
		    $("input[type=submit]").css('right','63%');   
	});


	$('input[type=search]').change(function () {
  		if ($('input[type=search]').val().length !== 0) {
	  		$("input[type=submit]").hide();
  	}	else {
	  		$("input[type=submit]").show();
  		}
  	});

	$scope.$on('$ionicView.loaded', function() {
       
		$ionicLoading.show({template: dictionary[$rootScope.CURRENT_LANGUAGE]["loading"]});
		var url = SERVER_URL + 'ajax/getslidertrainings.php';
		$rootScope.trainings = [];
		$rootScope.sliderTrainings = [];
	  	$http.get(url)
	  			.success(function(data) {
	  				
	  				var datacopy = data.slice(0);
					datacopy.sort(function(a,b) {
					    return a.order - b.order;
					});
					$rootScope.sliderTrainings = datacopy;
                    console.log($rootScope.sliderTrainings);
					$scope.showSliders = true;
					firstEntrance = false;
	  			})
	  			.error(function() {
	  				navigator.notification.alert(dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorText"], null, dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorTitle"], dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorButton"]);
	  			});
	 

		var url = SERVER_URL + 'ajax/gettrainings.php';
        console.log(url);
		$http.get(url)
			.success(function(data) {
				console.log(data);
				var datacopy = data.slice(0);
				datacopy.sort(function(a,b) {
				    return a.order - b.order;
				});
				$rootScope.trainings = datacopy;
				localStorage.SECOND_ENTRANCE_training = true;
				console.log($rootScope.trainings);
				$ionicLoading.hide();
			})
			.error(function() {
				navigator.notification.alert(dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorText"], null, dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorTitle"], dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorButton"]);
		});
		



	});
		
	$scope.$on('$ionicView.beforeLeave', function() {
		$scope.showSliders = null;  // closing slick slider
		$("input[type=submit]").css('right','63%');
	});
  	
	$scope.openCategory = function (category) {
		
		$rootScope.selectedCategory = category;
	//	$ionicLoading.show({template: dictionary[$rootScope.CURRENT_LANGUAGE]["loading"]});
		var url = SERVER_URL + 'ajax/gettrainingsforcategory.php';
		var param = { id: category.id };
		console.log(param);
		$rootScope.trainings = [];
		
		$http.post(url, param)
			.success(function(data) {

				for (var i=0; i<data.length; i++) {
					for (var j=0; j<data.length; j++) {
						if (data[j].order < data[i].order) {
							$rootScope.trainings[i] = data[j];
						}	else {
								$rootScope.trainings[i] = data[i];
							}	
					}
				}
				
				console.log($rootScope.trainings);
		//		$ionicLoading.hide();
				$state.go('trainings-categories');

			})
			.error(function() {
				navigator.notification.alert(dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorText"], null, dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorTitle"], dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorButton"]);
			});
	};

	$rootScope.openTraining = function (id, articleType) {

	//	$ionicLoading.show({template: dictionary[$rootScope.CURRENT_LANGUAGE]["loading"]});
		console.log("opening training");
			var url = SERVER_URL + 'ajax/gettraining.php';
			var data = {id: id};	
			$rootScope.selectedArticle = [];
			console.log(data);
			$http.post(url, data)
				.success(function(data) {
					console.log(data);
					if (!data[0].video)		data[0].video = '';		
					if (!data[0].video_thumbnail)	data[0].video_thumbnail = data[0].image_thumbnail;				 
					$rootScope.selectedArticle = data[0];
					console.log($rootScope.selectedArticle);
					$state.go('training');
		//			$ionicLoading.hide();
				})
				.error(function() {
					navigator.notification.alert(dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorText"], null, dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorTitle"], dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorButton"]);
				});

	};


}])






app.controller('TrainingsCategoriesCtrl', ['$scope', '$state', '$rootScope', '$ionicLoading', '$http', function($scope, $state, $rootScope, $ionicLoading, $http)  {



$scope.$on('$ionicView.beforeEnter', function() {
		StatusBar.backgroundColorByHexString("#3e3e3e");
		$rootScope.title = $rootScope.selectedCategory.name;
});

$('input[type=search]').focus(function(){
    //	$("input[type=submit]").hide();
  	});
 	
  	$('input[type=search]').focusout(function(){
    	if ($('input[type=search]').val().length == 0)
            $("input[type=submit]").show();
        else
            $('input[type=search]').css('color','#3e3e3e');
  	});

  	$("input[type=submit]").click(function() {
  		$('input[type=search]').focus();
  		$('input[type=search]').css('padding-right','4px');
  	});

  	$('input[type=search]').change(function () {
  		if ($('input[type=search]').val().length !== 0) {
	  		$('input[type=search]').css('position','relative');

  	}	else {
	  		$('input[type=search]').css('position','relative');
	  		$('input[type=search]').css('right','0px');
  		}
  	});

  	$scope.$on('$stateChangeStart', function() {
		$('input[type=search]').css('position','relative');
	  	$('input[type=search]').css('right','0px');
	});
  	

/*$scope.openTraining = function (trainingID) {
		
		$ionicLoading.show({template: dictionary[$rootScope.CURRENT_LANGUAGE]["loading"]});
		console.log("opening training");
			var url = SERVER_URL + 'ajax/gettraining.php';
			var data = {id: trainingID};	
			$rootScope.selectedArticle = [];
			console.log(data);
			$http.post(url, data)
				.success(function(data) {
					console.log(data);
					if (!data[0].video) {
						data[0].video = '';
					}
					if (!data[0].video_thumbnail) {
						data[0].video_thumbnail = data[0].image_thumbnail;
					} 
					$rootScope.selectedArticle = data[0];
					console.log($rootScope.selectedArticle);
					$state.go('training');
		//			$ionicLoading.hide();
				})
				.error(function() {
					navigator.notification.alert(dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorText"], null, dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorTitle"], dictionary[$rootScope.CURRENT_LANGUAGE]["networkErrorButton"]);
				});

	};
*/

}])

app.controller('TrainingCtrl', ['$scope', '$state', '$rootScope', '$ionicLoading', '$http', '$sce', function($scope, $state, $rootScope, $ionicLoading, $http, $sce)  {

//	$scope.selectedArticle = $rootScope.selectedArticle;
	console.log("training ctrl");
	  // configuring video source
    console.log($rootScope.selectedArticle);
	$scope.config = {
						preload: "none",
						sources: [{	src: $sce.trustAsResourceUrl($rootScope.selectedArticle.video), type: "video/mp4"	}],
						plugins: {	poster: $rootScope.selectedArticle.video_thumbnail	}	
					};

	$('input[type=search]').focus(function(){
    	$("input[type=submit]").hide();
  	});
 	
  	$('input[type=search]').focusout(function(){
    	if ($('input[type=search]').val().length == 0)
            $("input[type=submit]").show();
    
  	});

  	$("input[type=submit]").click(function() {
  		$('input[type=search]').focus();
  		$('input[type=search]').css('padding-right','4px');
  	});

  	$('input[type=search]').change(function () {
  		if ($('input[type=search]').val().length !== 0) {
	  		$('input[type=search]').css('position','relative');
	  	//	$('input[type=search]').css('right','25px');
  	}	else {
	  		$('input[type=search]').css('position','relative');
	  		$('input[type=search]').css('right','0px');
  		}
  	});				

	$scope.$on('$ionicView.beforeEnter', function() {
		console.log('view before enter');
		StatusBar.backgroundColorByHexString("#3e3e3e");
	});


  	$scope.$on('$stateChangeStart', function() {
		$('input[type=search]').css('position','relative');
	  	$('input[type=search]').css('right','0px');
	});
  	

	$scope.$on('$stateChangeStart', function() {
		$rootScope.socialFooter = false;
	});

	
}])

/**
 * Registration Screen Controller
 * Collects user's information and sends them to the server
 *
 * @param {!angular.$scope} $scope
 * @param {!angular.$rootScope} $rootScope
 * @param {!angular.$ionicLoading} $ionicLoading
 * @param {!angular.$http} $http 
 * @param {!angular.$ionicPopup} $ionicPopup 
 * @ngInject
 * @constructor
 */
app.controller('RegistrationCtrl', ['$scope', '$ionicLoading', '$rootScope', '$http', '$state', function($scope, $ionicLoading, $rootScope, $http, $state) {
	console.log('RegistrationCtrl');
	$scope.info = {};
	$scope.info.fullName = '';
	$scope.info.email = '';
	$scope.info.phone = '';
	$scope.info.area = '';
	$scope.info.city = '';
	$scope.info.day = '';
	$scope.info.month = '';
	$scope.info.year = '';
	$scope.info.weight = '';
	$scope.info.height = '';
	$scope.info.comments = '';

	$scope.fullNameStyle = $scope.emailStyle = $scope.phoneStyle = 'border:0px';

	$scope.registrationSuccessMessage = dictionary[$rootScope.CURRENT_LANGUAGE]["registrationSuccessMessage"];
	$scope.registrationSuccessTitle = dictionary[$rootScope.CURRENT_LANGUAGE]["registrationSuccessTitle"];
	$scope.registrationFailedMessage = dictionary[$rootScope.CURRENT_LANGUAGE]["registrationFailedMessage"];
	$scope.registrationFailedTitle = dictionary[$rootScope.CURRENT_LANGUAGE]["registrationFailedTitle"];
	$scope.secondSection = dictionary[$rootScope.CURRENT_LANGUAGE]["secondSection"];
	$scope.register = dictionary[$rootScope.CURRENT_LANGUAGE]["register"];
	
	$rootScope.title = dictionary[$rootScope.CURRENT_LANGUAGE]["registration"];
	//$state.go('mainscreennewuser');
	   //console.log($rootScope.selectedDay);
	  

	/*$scope.days = [];
	for (var i = 1; i <= 31; i ++) {
		var day = new Object();
		day.id = i;
		day.value = i;
		$scope.days.push(day);
	}
	$scope.months = [];
	for (var i = 1; i <= 12; i ++) {
		var month = new Object();
		month.id = i;
		month.value = i;
		$scope.months.push(month);
	}
	$scope.years = [];
	for (var i = 2014; i >= 1900; i --) {
		var year = new Object();
		year.id = i;
		year.value = i;
		$scope.years.push(year);
	}
	$scope.weights = [];
	for (var i = 40; i <= 200; i ++) {
		var weight = new Object();
		weight.id = i;
		weight.value = i;
		$scope.weights.push(weight);
	}
	$scope.heights = [];
	for (var i = 20; i >= 12; i -= 1) {
		var height = new Object();
		height.id = i / 10;
		height.value = i / 10;
		$scope.heights.push(height);
	}*/
	
	$scope.errorTextHidden = 'error-text display-none';
	$scope.errorTextShown = 'error-text'
	$scope.errorBorderHidden = '';
	$scope.errorBorderShown = 'border: 2px solid #ca1315 !important;';
	
	$scope.errorClassFullName = $scope.errorTextHidden;
	$scope.errorClassEmail = $scope.errorClassFullName;
	$scope.errorClassPhone = $scope.errorClassFullName;
	$scope.errorClassArea = $scope.errorClassFullName;
	$scope.errorClassCity = $scope.errorClassFullName;
	$scope.errorClassDay = $scope.errorClassFullName;
	$scope.errorClassMonth = $scope.errorClassFullName;
	$scope.errorClassYear = $scope.errorClassFullName;
	$scope.errorClassWeight = $scope.errorClassFullName;
	$scope.errorClassHeight = $scope.errorClassFullName;
	$scope.errorClassComments = $scope.errorClassFullName;
	
	$scope.fullNamePlaceholder = dictionary[$rootScope.CURRENT_LANGUAGE]["fullName"];
	$scope.emailPlaceholder = dictionary[$rootScope.CURRENT_LANGUAGE]["email"];
	$scope.phonePlaceholder = dictionary[$rootScope.CURRENT_LANGUAGE]["phone"];
	$scope.areaPlaceholder = dictionary[$rootScope.CURRENT_LANGUAGE]["area"];
	$scope.cityPlaceholder = dictionary[$rootScope.CURRENT_LANGUAGE]["city"];
	$scope.dayPlaceholder = dictionary[$rootScope.CURRENT_LANGUAGE]["day"];
	$scope.monthPlaceholder = dictionary[$rootScope.CURRENT_LANGUAGE]["month"];
	$scope.yearPlaceholder = dictionary[$rootScope.CURRENT_LANGUAGE]["year"];
	$scope.weightPlaceholder = dictionary[$rootScope.CURRENT_LANGUAGE]["weight"];
	$scope.heightPlaceholder = dictionary[$rootScope.CURRENT_LANGUAGE]["height"];
	
	
	$scope.fullNameStyle = '';
	$scope.emailStyle = '';
	$scope.phoneStyle = '';
	$scope.areaStyle = '';
	$scope.cityStyle = '';
	$scope.yearStyle = '';
	$scope.monthStyle = '';
	$scope.dayStyle = '';
	$scope.weightStyle = '';
	$scope.heightStyle = '';

	
	/**
	 * Fires when the user clicks a input area
	 * Hides all error messages and re-initiates the placeholders
	 */
	$scope.clickInput = function() {
		$scope.fullNameStyle = $scope.errorBorderHidden;
		$scope.emailStyle = $scope.errorBorderHidden;
		$scope.phoneStyle = $scope.errorBorderHidden;
//		$scope.areaStyle = $scope.errorBorderHidden;
		$scope.cityStyle = $scope.errorBorderHidden;
		$scope.yearStyle = $scope.errorBorderHidden;
		$scope.monthStyle = $scope.errorBorderHidden;
		$scope.dayStyle = $scope.errorBorderHidden;
		$scope.weightStyle = $scope.errorBorderHidden;
		$scope.heightStyle = $scope.errorBorderHidden;
		$scope.commentsStyle = $scope.errorBorderHidden;
		
		$scope.errorClassFullName = $scope.errorTextHidden;
		$scope.errorClassEmail = $scope.errorClassFullName;
		$scope.errorClassPhone = $scope.errorClassFullName;
//		$scope.errorClassArea = $scope.errorClassFullName;
		$scope.errorClassCity = $scope.errorClassFullName;
		$scope.errorClassDay = $scope.errorClassFullName;
		$scope.errorClassMonth = $scope.errorClassFullName;
		$scope.errorClassYear = $scope.errorClassFullName;
		$scope.errorClassWeight = $scope.errorClassFullName;
		$scope.errorClassHeight = $scope.errorClassFullName;
		$scope.errorClassComments = $scope.errorClassFullName;
	}
	
	/**
	 * Fires when the user clicks on the continue button
	 * Checks for every input to be filled less than the comments section
	 * Performs a http request sending the information to the server
	 */
	$scope.formValidation = function() {
		var valid = true;
		if ($scope.info.fullName != '') {
			
		} else {
			valid = false;
			$scope.fullNameStyle = $scope.errorBorderShown;
		}
		if ($scope.info.email != '') {
			
		} else {
			valid = false;
			$scope.emailStyle = $scope.errorBorderShown;
		}
		if ($scope.info.phone != '') {
			
		} else {
			valid = false;
			$scope.phoneStyle = $scope.errorBorderShown;
		}
		if (!valid) return false;
		
		var params= { 	'_wpcf7' : '254',
						'_wpcf7_version' : '5.0',
						'_wpcf7_locale' : 'en_US',
						'_wpcf7_unit_tag' : 'wpcf7-f254-p1-o1',
						'_wpcf7_container_post' : '1',
						'fullname': $scope.info.fullName,
						'mail': $scope.info.email,
						'city' : $scope.info.city,
						'phonenumber' : $scope.info.phone,
						'birthyear' : $scope.info.year,
						'birthmonth' : $scope.info.month,
						'birthday' : $scope.info.day,
						'weight' : $scope.info.weight,
						'height' : $scope.info.height
 					};


 		$ionicLoading.show({template: dictionary[$rootScope.CURRENT_LANGUAGE]["loading"]});			


		var url = SERVER_URL + '/wp-json/contact-form-7/v1/contact-forms/254/feedback';
		$http({
   		 	method: 'POST',
    		url: url,
    		data: $.param(params)
		})
				.success(function(data) {
					console.log(data);
					if (data['status'] == 'mail_sent') {
						console.log('mail sent');
						$ionicLoading.hide();
						navigator && navigator.notification.alert($scope.registrationSuccessMessage, null, $scope.registrationSuccessTitle, null);
					} 	else {
						console.log('reg failed');
						$ionicLoading.hide();
						navigator && navigator.notification.alert($scope.registrationFailedMessage, null, $scope.registrationFailedTitle, null);
						}
				})
				.error(function () {

				});

	}
}])



