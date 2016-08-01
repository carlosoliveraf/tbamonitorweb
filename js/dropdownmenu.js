 angular
            .module('tbamonitorweb', ['ngMaterial'])
            .controller('menuController', menuController);

         function menuController ($scope, $mdDialog) {
            var originatorEv;
            this.openMenu = function($mdOpenMenu, ev) {
            originatorEv = ev;
               $mdOpenMenu(ev);
            };
            this.menuItemClick = function(index) {
               $mdDialog.show(
                  $mdDialog.alert()
                    .title('TutorialsPoint.com')
                    .textContent('Menu Item clicked, index: ' + index)
                    .ok('OK')
                    .targetEvent(originatorEv)
               );
               originatorEv = null;
            };
         }                  