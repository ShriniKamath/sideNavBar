angular.module('componentExample').component('naviBar', {
  templateUrl: 'components/navbar/navbar.html',
  controller: naviController,
	controllerAs:'naviCtrl',
  transclude:{
    expandedSide:'expandedComponent',
    collapsedSide:'collapsedComponent'
  }
});

function naviController($mdSidenav) {
  var naviCtrl=this;

  naviCtrl.openLeftMenu = function() {
    console.log("clicked");
    $mdSidenav('left').toggle();
  };
  // $mdSidenav('left').watch(true);
}
