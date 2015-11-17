let HomeController = function($scope, PARSE, $http){
  let vm = this;
  let url = PARSE.URL + 'classes/contacts';
  vm.title= 'Meow';
  vm.errMsg = 'Please add a name';
  vm.errMsgEmail='Please use a valid email';
  vm.errMsgSite= 'Please enter a valid website';
  vm.errMsgMsg="Please add a message";
  let vname = false;
  let vemail = false;
  let vsite = false;
  let vmsg= false;

  let validateName = function(name){
    if(name.length < 1){
      vm.errMsg = 'Please add a name';
      return true;

    } else{
      vm.errMsg= 'Thanks!';
    }
  };

  let validateEmail = function(x){
    let y = x.includes('@');
    let z = x.includes('.com');
    if(y===true && z===true){
      vm.errMsgEmail='Thanks dawg';
      return true;
    }
  };
  let validateWebsite = function(x){
    let y = x.includes('http://');
    let z = x.includes('https://');
    let a = x.includes('.com');
    if(y=== true && a===true || z===true && a===true){
    vm.errMsgSite='Thanks dawg';
    return true;
    }
  };
  let validateMessage = function(x){
    if(x.length !== 0){
      vm.errMsgMsg = 'Thanks dawg';
      return true;
    }
  };
  
  $scope.$watch('stuff.name', function (newVal, prevVal) {
    if (!newVal) return;
    validateName(newVal);
  });

  $scope.$watch('stuff.email', function(x){
    if(!x) return;
    validateEmail(x);
  });
  $scope.$watch('stuff.website',  function(x){
    if(!x) return;
    validateWebsite(x);
  });
  $scope.$watch('stuff.message', function(x){
    if(!x) return;
    validateMessage(x);
  }); 
  let Stuff = function(obj){
    this.name= obj.name;
    this.email=obj.email;
    this.website=obj.website;
    this.message=obj.message;
  };
  vm.contactUs = function(stuff){
    let hey = new Stuff(stuff);
    $http.post(url, hey, PARSE.CONFIG).then((res)=>{
      console.log(res);
    });
  };
  

};
HomeController.$inject= ['$scope', 'PARSE', '$http'];
export default HomeController;