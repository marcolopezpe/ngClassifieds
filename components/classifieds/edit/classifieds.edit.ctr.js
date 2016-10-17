(function() {
	"use strict";

	angular
		.module("ngClassifieds")
		.controller("editClassifiedsCtrl", function($scope, $state, $mdSidenav, $timeout, $mdDialog, classifiedsFactory) {

			var vm = this;
			vm.closeSidebar = closeSidebar;
			vm.saveClassified = saveClassified;
			vm.classified = $state.params.classified;

			$timeout(function() {
				$mdSidenav('left').open();
			});

			$scope.$watch('vm.sidenavOpen', function(sidenav) {
				if (sidenav === false) {
					$mdSidenav('left')
						.close()
						.then(function() {
							$state.go('classifieds');
						});
				}
			});

			function closeSidebar() {
				vm.sidenavOpen = false;
			}

			function saveClassified(classified) {
				if (classified) {
					classified.contact = {
						name: "Marco López",
						phone: "45545545",
						email: "mlopez@betheltv.pe"
					}

					$scope.$emit('newClassified', classified);
					vm.sidenavOpen = false;
				}
			}

		});

})();