angular.module('starter.controllers', ['ngMap', 'ngCordova'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('LocateCtrl', function($scope, $ionicPopup, $ionicModal, $timeout, $cordovaGeolocation, $cordovaNetwork) {
//.controller('LocateCtrl', ['ngCordova'], function($scope) {

        $scope.markers = [];
        $scope.markerIcon = [
            {id:1, name: 'rilakkuma', url: 'http://www.leejoowon.com/wp-content/uploads/2015/05/5752.png'},
            {id:2, name: 'keroppi', url: 'http://images1.fanpop.com/images/photos/2300000/Keroppi-keroppi-2344002-75-75.gif' },
            {id:3, name: 'keroro', url: 'https://4rchiviz4rd.files.wordpress.com/2008/10/keroro-gunso.png'}]



        document.addEventListener("deviceready", function () {

            var type = $cordovaNetwork.getNetwork()

            var isOnline = $cordovaNetwork.isOnline()

            var isOffline = $cordovaNetwork.isOffline()


            // listen for Online event
            $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
                var onlineState = networkState;
            })

            // listen for Offline event
            $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
                var offlineState = networkState;

                $scope.showAlert = function() {
                    //var alertPopup = $ionicPopup.alert({
                    //    title: 'Network not found',
                    //    template: 'Please turn on data or wifi'
                    //});
                    //alertPopup.then(function(res) {
                    //    //console.log('Thank you for not eating my delicious ice cream cone');
                    //});
                };


            })

        }, false);


/*
        var posOptions = {timeout: 10000, enableHighAccuracy: false};
        $cordovaGeolocation
            .getCurrentPosition(posOptions)
            .then(function (position) {
                var lat = position.coords.latitude
                var long = position.coords.longitude
            }, function (err) {
                // error
            });


        var watchOptions = {
            frequency: 1000,
            timeout: 3000,
            enableHighAccuracy: false // may cause errors if true
        };

        var watch = $cordovaGeolocation.watchPosition(watchOptions);
        watch.then(
            null,
            function (err) {
                // error
            },
            function (position) {
                var lat = position.coords.latitude
                var long = position.coords.longitude
            });


        watch.clearWatch();
        // OR
        $cordovaGeolocation.clearWatch(watch)
            .then(function (result) {
                $scope.whereiam = lat + ',' + lng;
                // success
            }, function (error) {

                 $scope.showAlert = function() {
                     var alertPopup = $ionicPopup.alert({
                     title: 'GPS not found',
                     template: 'Please turn on location'
                     });
                     alertPopup.then(function(res) {
                 //console.log('Thank you for not eating my delicious ice cream cone');
                    });
                 };

                // error
            });
*/

    /*  var marker = new google.maps.Marker({
        position: location,
        map: $scope.map,
        icon: ''
      });
*/
        //google.maps.event.addListener(marker, 'click', toggleBounce);
//http://stackoverflow.com/questions/15792655/add-marker-to-google-map-on-click
        /*
        google.maps.event.addListener(map, 'click', function(event) {
            placeMarker(event.latLng);
        });

        function placeMarker(location) {
            var marker = new google.maps.Marker({
                position: location,
                map: $scope.map,
                icon: ''
            });
        }


        ---


         $scope.$on('mapInitialized', function (event, eVmap) {
         map = eVmap;
         });


        $scope.markers.push({
            latitude: 3.0840491,
            longitude: 101.5604830,
            icon: ''});
         */


//        $scope.markers = [{latitude: 3.0840491, longitude: 101.5604830, icon: ''},
//            {latitude: 3.0850495, longitude: 101.5614727, icon: ''}];
        //geoLocate = localStorage.getItem("locatemystuff");
        //geoLocate = localStorage.setItem("locatemystuff", '');
//localStorage.setItem("locatemystuff", JSON.stringify({latitude: 3.0840491, longitude: 101.5604830, icon: ''}));


//locateStorage.setItem("locatemystuff", '');
        //if(localStorage.getItem("locatemystuff") === null) {
        //alert(localStorage.getItem("locatemystuff"));

        //localStorage.clear();
        //localStorage.removeItem("name of localStorage variable you want to remove");


        //for reset
        //localStorage.clear("locatemystuff");
        //localStorage.setItem("locatemystuff", JSON.stringify({latitude: 3.0850495, longitude: 101.5614727, icon: ''}));
        $scope.checkMap = function() {
            //localStorage.clear("locatemystuff");
            var storage = localStorage.getItem("locatemystuff");
            if(storage == null) {
                localStorage.setItem("locatemystuff", JSON.stringify({latitude: 3.0850495, longitude: 101.5614727, icon: ''}));
               $scope.markers.push(JSON.parse(localStorage.getItem("locatemystuff")));
            } else {
                $scope.markers = [];
                var ans = JSON.parse(localStorage.getItem("locatemystuff"));
                console.log(ans);
                //array iterate each object
                if(ans.length > 1){
                    for(var elem in ans) {
                        $scope.markers.push(ans[elem]);
                    }
                } else {
                    $scope.markers.push(ans); //1 OK
                }
            }
            /*
            else if (storage == null){
                localStorage.clear("locatemystuff");
                //localStorage.setItem("locatemystuff", JSON.stringify([{latitude: 3.0850495, longitude: 101.5614727, icon: ''}]));
                //$scope.markers = JSON.parse(localStorage.getItem("locatemystuff"));

            };
            */
        };


        $scope.$on('mapInitialized', function (event, eVmap) {
            map = eVmap;
            //alert(eVmap.latLng);
        });


        $scope.checkMap();

        $scope.addMarker = function (event) {

            $scope.data = [];

            var myPopup = $ionicPopup.show({
                template: '<input type="text" ng-model="data.location">',
                title: 'Enter Your Remark',
                scope: $scope,
                buttons: [
                    { text: 'Cancel' },
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function(e) {
                            if (!$scope.data.location) {
                                //don't allow the user to close unless he enters wifi password
                                e.preventDefault();
                            } else {
                                return $scope.data.location;
                            }
                        }
                    }
                ]
            });


            myPopup.then(function(res) {

            var remark = res;
            var geoLocate = '';

            geoLocate = {latitude: event.latLng.A, longitude: event.latLng.F, iconImage: '', remark: remark};

            $scope.markers.push(geoLocate); //2
            //localStorage.setItem("lastname", "Smith");
            //localStorage.setItem("locatemystuff");
            //localStorage.setItem("locatemystuff", JSON.stringify(geoLocate));

            var geoHistory = [];
            var geoString = JSON.parse(localStorage.getItem("locatemystuff"));

            //geoHistory.push(geoString); //problem is here
            if (geoString.length > 1) { //2.5 problem
                for (var elem in geoString) {
                    geoHistory.push(geoString[elem]);
                }
            } else {
                geoHistory.push(geoString);//3
            }

            geoHistory.push(geoLocate);
            //console.log(geoHistory);

            //geoHistory.push(geoLocate);
            //localStorage.setItem("locatemystuff", '');
            localStorage.clear("locatemystuff");
            localStorage.setItem("locatemystuff", JSON.stringify(geoHistory));

            //console.log(geoHistory);
                })
        }

        $ionicModal.fromTemplateUrl('my-stuff.html', {
            scope: $scope,
            //animation: 'slide-in-up'
            animation: 'fade-in'
        }).then(function(modal) {
            $scope.modal = modal;
        });
        $scope.openModal = function() {
            //if(marker.iconImage == ''){
            //    $scope.data = {selectedItem:1};
            //} else {
            //    $scope.data = {selectedItem:parseInt(marker.iconImage)};
            //}
            //$scope.deviceEdit = device;
            $scope.modal.show();
        };
        $scope.closeModal = function() {
            $scope.modal.hide();
        };
        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function() {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function() {
            // Execute action
        });


        $scope.removeMarker = function(idx){

            //iterate for the title name

            var confirmPopup = $ionicPopup.confirm({
                title: 'Removing a marker',
                template: 'Confirm to remove?'
            });
            confirmPopup.then(function(res) {

                if(res) {
                    $scope.markers.splice(idx, 1);

                    var geoHistoryS = [];
                    var geoStringS = JSON.parse(localStorage.getItem("locatemystuff"));
                    geoHistoryS.push(geoStringS);1
                    geoHistoryS.splice(idx, 1);
                    localStorage.clear("locatemystuff");
                    localStorage.setItem("locatemystuff", JSON.stringify(geoHistoryS));
                }


                //find object in JSON
                //for(var elem in array){ array[elem]}
                //add object in JSON by push

                //to remove use array.splice(index, 1)


            });
        };
});
