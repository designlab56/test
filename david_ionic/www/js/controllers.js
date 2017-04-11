angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', function($scope, $ionicModal) {

  $scope.tasks = [];
  $scope.cart = [];

  $scope.editLabel = "";
  $scope.editAmount = "";
  $scope.selectedIndex = "";

  $scope.addTask = function(task)
  {

    if(task.label.length > 0 && task.amount.length > 0)
    {

      // Checking types later here for amount
      var newTaskObj =
      {
        label:task.label,
        amount:task.amount
      }

      $scope.tasks.push(newTaskObj)
      $scope.modal.hide();
    }

    document.getElementById('newLabelID').value = "";
    document.getElementById('newLabelAmount').value = "";


  }

  // Remove a task
  $scope.removeTask  = function(id)
  {
     $scope.tasks.splice(id, 1);
  }

  $scope.addToCart = function(id)
  {
    // Let's assume id exists and is an integer
    var tmpItem = $scope.tasks[id]
    $scope.cart.push(tmpItem);
    $scope.removeTask(id);
  }


  $scope.editExistingTask = function(id)
  {
    // Let's assume id exists and is an integer
    var tmpItem = $scope.tasks[id]
    $scope.editLabel = tmpItem.label
    $scope.editAmount = tmpItem.amount
    $scope.selectedIndex = id;
    $scope.viewEditTask()
  }

  $scope.editTask = function()
  {
    // Let's assume id exists and is an integer
    $scope.tasks[$scope.selectedIndex].label =  document.getElementById('editLabelID').value;
    $scope.tasks[$scope.selectedIndex].amount = document.getElementById('editLabelAmount').value;
    $scope.modal_edit.hide();
    $scope.editLabel = "";
    $scope.editAmount = "";
    $scope.selectedIndex = "";
  }


  // Modal initilization
  $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  })

  $ionicModal.fromTemplateUrl('templates/modal_edit.html', {
    scope: $scope
  }).then(function(modal_edit) {
    $scope.modal_edit = modal_edit;
  })


  $ionicModal.fromTemplateUrl('templates/view_cart.html', {
    scope: $scope
  }).then(function(view_cart) {
    $scope.view_cart = view_cart;
  })


  // Modal display functions
  $scope.createNewTask = function(e)
  {
    $scope.modal.show();
  }

  $scope.viewEditTask = function(e)
  {
    $scope.modal_edit.show();
  }

  $scope.viewCart = function(e)
  {
    $scope.view_cart.show();
  }


})
