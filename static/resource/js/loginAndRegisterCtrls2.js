var bcLoginControllers = angular.module('bcLoginControllers', []);

function emailMatch(email) {
     var regm = "^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$";
    //验证Mail的正则表达式,^[a-zA-Z0-9_-]:开头必须为字母,下划线,数字,
    if (!email.match(regm)) {
       return false;
    } 
    return true;
}

///*指定依赖列表并且避免压缩问题 http://angularjs.cn/A008*/
bcLoginControllers.controller('bcRegisterCtrl', ['$scope', '$http', '$window',
    function($scope, $http, $window) {
        $scope.message = '';
        $scope.success = true;
        $scope.bcFilled = false;
        $scope.registerButtonClicking = false;
        var timer = null;

        $scope.enter = function (event) {
            if (event.keyCode == 13)
            alert(1);
                $scope.registerButtonClick();
        };


        function isChangeEmail(newValue,oldValue, scope) {
            if(newValue != oldValue) {
                $scope.message = '';
                $scope.countdown = 60;
                $scope.registerButtonClicking = false;
                clearInterval(timer);
            }
        }
        $scope.$watch("registerEmail", isChangeEmail);


        $scope.countdown = 60;
        $scope.registerButtonClick = function() {
            if (!$scope.bcFilled) {
                $scope.message = "请填写邮箱";
                $scope.success = false;
                return false;
            }
            var email = $scope.registerEmail.toLowerCase();
            if (!emailMatch(email)) {
                $scope.success = false;
                $scope.message = "请输入正确格式邮箱";
                return false;
            }
            if ($scope.registerButtonClicking) {
                //return false;
                //alert("ing..");
                if($scope.countdown == 60){
                    $scope.message = "注册验证中，请稍等！";
                }else{
                    $scope.message = "邮件已发送，请" + $scope.countdown + "s后再重试";
                    clearInterval(timer);
                    timer = setInterval(function(){
                        $scope.countdown --;
                        $scope.message = "邮件已发送，请" + $scope.countdown + "s后再重试";
                        if($scope.countdown == -1){
                            clearInterval(timer);
                            $scope.countdown = 60;
                            $scope.message = '';
                            $scope.registerButtonClicking = false;
                        }
                        $scope.$digest();
                    },1000);
                }
            }else{

                $scope.success = true;
                $scope.registerButtonClicking = true;

                $scope.message = "注册验证中，请稍等！";
                console.log(email);


                $http.get('data/register.request.send.php', {params: {email: email, time:  window.bcRegisterTime}}).success(function(data) {
                    //$scope.registerButtonClicking = false;
                    if (data.resultCode == 0) {
                        $scope.message = "注册邮件已发送，请查收";
                        timer = setInterval(function(){
                            $scope.countdown --;
                            if($scope.countdown == 0){
                                clearInterval(timer);
                                $scope.countdown = 60;
                                $scope.registerButtonClicking = false;
                            }
                            //$scope.$digest();
                        },1000);
                        //$window.location.href = "/dashboard";
                        //发送email
                    }else if (data.resultCode == 1) {
                        $scope.message = "邮箱已存在";
                        $scope.registerButtonClicking = false;
                    } else {
                        $scope.message = "注册失败";
                        $scope.registerButtonClicking = false;
                    }

                }).error(function(data) {
                    $scope.registerButtonClicking = false;
                    $scope.message = "通信故障";
                });
            }

            //if (!emailMatch(email)) {
            //    $scope.success = false;
            //   $scope.message = "请输入正确格式邮箱";
            //   return false;
            //}
            //
            //$scope.success = true;
            ////$scope.registerButtonClicking = true;
            //
            //$scope.message = "注册验证中，请稍等！";
            //console.log(email);
            //
            //
            //$http.get('data/register.request.send.php', {params: {email: email, time:  window.bcRegisterTime}}).success(function(data) {
            //    $scope.registerButtonClicking = false;
            //    if (data.resultCode == 0) {
            //        $scope.message = "注册邮件已发送，请查收";
            //        //$window.location.href = "/dashboard";
            //        //发送email
            //    }else if (data.resultCode == 1) {
            //        $scope.message = "邮箱已存在";
            //    } else {
            //        $scope.message = "注册失败";
            //    }
            //
            //}).error(function(data) {
            //    $scope.registerButtonClicking = false;
            //    $scope.message = "通信故障";
            //});

       };
        function isAllFilled(newValue,oldValue, scope) {
            if(scope.registerEmail ) { //&& scope.registerPwd && $scope.repeatPwd
                scope.bcFilled = true;
            } else {
                scope.bcFilled = false;
            }
        }
        $scope.$watch('repeatPwd',isAllFilled);
        $scope.$watch('registerEmail', isAllFilled);
        $scope.$watch('registerPwd', isAllFilled);
    }]);
bcLoginControllers.controller('bcLoginCtrl', ['$scope', '$http', '$window',
    function($scope, $http, $window)  {
        $scope.message = '';
        $scope.success = false;
        $scope.bcFilled = false;
        $scope.loginEmail = '';
        $scope.loginPwd = '';
        $scope.loginButtonClicking = false;
        $scope.findPwdClicking = false;
        $scope.enter = function (event) {
            if (event.keyCode == 13)
                $scope.loginButtonClick();
        };
        $scope.findPwdClick = function() {
            var email = $scope.loginEmail.toLowerCase();
            if ($scope.findPwdClicking)
                return;
            if (!emailMatch(email)) {
                $scope.message = "请输入正确格式邮箱";
                //$scope.success = false;
                return false;
            }
            //$scope.success = true;
            $scope.findPwdClicking = true;
            $http.get('data/findPwd.php', {params: {email: email}}).success(function(data) {
                $scope.findPwdClicking = false;
                if (data.resultCode == 0) {
                    $scope.message = "请查收邮件";
                } else if(data.resultCode == 1) {
                    $scope.message = "该邮箱还没有注册";
                } else {
                     $scope.message = "通信故障";
                }
            }).error(function(data) {
                $scope.findPwdClicking = false;
            });
        };
       $scope.loginButtonClick = function(){
            if (!$scope.bcFilled) {
                $scope.message = "请填写 邮箱,密码";
                return false;
            }
            var email = $scope.loginEmail.toLowerCase();
            var pwdHash = hex_hmac_md5(email,$scope.loginPwd);
            if ($scope.loginButtonClicking)
                return;
            if (!emailMatch(email)) {
                $scope.message = "请输入正确格式邮箱";
                //$scope.success = false;
                return false;
            } 
            $scope.loginButtonClicking = true;
            //$scope.success = true;
            $scope.message = "登陆中,客官别急";
            $http.get('data/loginCheck.php', {params: {email: $scope.loginEmail, hash: pwdHash}}).success(function(data) {
                $scope.loginButtonClicking = false;
                if (data.resultCode == 0) {
                    $scope.success = true;
                    if (!!window.is_sso) {
                        $window.location.href = "/external/sso/kf5.php?time="+ window.sso_time + "&return_to=" + window.sso_return_to;
                    } else {
                        $scope.message = "准备跳转了";
                        $window.location.href = "/dashboard";
                    }

                } else {
                    $scope.message = "您的账号或密码有误！";
                    $scope.success = false;
                }
            }).error(function(data) {
                $scope.loginButtonClicking = false;
                $scope.message = "登陆失败";
                $scope.success = false;
            });
       };

       function isAllFilled(newValue,oldValue, scope) {
           if(scope.loginEmail && scope.loginPwd) {
               scope.bcFilled = true;
           } else {
               scope.bcFilled = false;
           }
       }
        $scope.$watch('loginEmail', isAllFilled);
        $scope.$watch('loginPwd', isAllFilled);
        //angular.element("[data-toggle='tooltip']").tooltip();
}]);

bcLoginControllers.controller('bcFindPwdCtrl', ['$scope', '$http', '$window',
    function($scope, $http, $window)  {
        $scope.message = '';
        $scope.bcFilled = false;
        $scope.newPwd = '';
        $scope.confirmPwd = '';
        $scope.findPwdClicking = false;
        $scope.enterCheck = function (event) {
            if (event.keyCode == 13)
                $scope.resetPwdClick();
        };
        $scope.resetPwdClick = function() {
            if (!$scope.bcFilled) {
                $scope.message = "请设置密码并重复密码";
                return;
            }
            if ($scope.findPwdClicking)
                return;
            if ($scope.newPwd.length < 6) {
                $scope.message = "密码至少6位";
                return;
            }
            if ($scope.newPwd != $scope.confirmPwd) {
                $scope.message = "两次输入不同";
                return;
            }
            $scope.findPwdClicking = true;
            var email =  window.bcEmail.toLowerCase();
            $http.get('/login/data/resetPwd.php', {params: {email:email, verifyCode: window.bcVerifyCode, hash:hex_hmac_md5(email, $scope.newPwd)}})
                .success(function(data) {
                $scope.findPwdClicking = false;
                if (data.resultCode == 0) {
                    $scope.message = "修改成功";
                    $window.location.href = "/login/";
                } else if(data.resultCode == 1) {
                    $scope.message = "修改失败,用户不存在";
                } else {
                    $scope.message = "通信故障";
                }
            }).error(function(data) {
                $scope.findPwdClicking = false;
            });
        };

        function isAllFilled(newValue,oldValue, scope) {
            if(scope.newPwd && scope.confirmPwd) {
                scope.bcFilled = true;
            } else {
                scope.bcFilled = false;
            }
        }
        $scope.$watch('newPwd', isAllFilled);
        $scope.$watch('confirmPwd', isAllFilled);

    }]);

bcLoginControllers.controller('bcRegisterinfoCtrl', ['$scope', '$http', '$window',
    function($scope, $http, $window) {
        $scope.info = {};
        $scope.info.message = '';
        $scope.info.success = false;
        $scope.info.bcFilled = false;
        $scope.info.registerEmail = '';
        $scope.info.registerPwd = "";
        $scope.info.repeatPwd = '';

        $scope.info.registerPhone = '';
        $scope.info.registerQQ = '';
        $scope.info.registerWx = '';
        $scope.info.registerVolume = '';
        $scope.info.registerURL = '';

        $scope.info.registerButtonClicking = false;
        $scope.enter = function (event) {
            if (event.keyCode == 13)
                alert(1);
            $scope.registerButtonClick();
        };
        $scope.info.checked = false;
        $http.get('data/registerInfoPost.php', {params: {email: email, token: token, objectid: objectid}}).success(function(data) {
            $scope.info.registerButtonClicking = false;
            if (data.resultCode == 0) {
                //$scope.info.message = "完善注册信息";
                $scope.info.checked = true;
            } else {
                $scope.info.checked = false;
            }

        }).error(function(data) {
            $scope.info.registerButtonClicking = false;
            $scope.info.message = "通信故障";
        });

        $scope.registerButtonClick = function() {
            //if (!$scope.bcFilled) {
            //    $scope.message = "请填写邮箱";
            //    $scope.success = false;
            //    return false;
            //}
            //var email = $scope.registerEmail.toLowerCase();
            var pwdHash = hex_hmac_md5(email.toLowerCase(),$scope.info.registerPwd);
            if ($scope.info.registerButtonClicking) {
                return false;
            }

            //if (!emailMatch(email)) {
            //    $scope.success = false;
            //    $scope.message = "请输入正确格式邮箱";
            //    return false;
            //}


            if($scope.info.registerPwd.length < 6) {
                console.log($scope.info.registerPwd);
                //$scope.info.success = false;
                $scope.info.message = "密码6位以上较安全";
                return false;
            }

            if($scope.info.registerPwd != $scope.info.repeatPwd)  {
                //$scope.info.success = false;
                $scope.info.message = "两次密码不一致";
                return false;
            }
            //if($scope.registerPhone.length < 5)
            //{
            //    $scope.success = false;
            //    $scope.message = "请输入有效的手机号码！";
            //    return false;
            //}
            //var myreg = /^(((1[0-9]{2}))+\d{8})$/;
            var myreg = /^((\d+-)|\(\d+\)-)*\d+$/;
            if(!myreg.test($scope.info.registerPhone))  {
                //$scope.info.success = false;
                $scope.info.message = "请输入有效的联系电话！";
                return false;
            }

            if($scope.info.registerQQ.length<1 && $scope.info.registerWx.length<1){
                $scope.info.message = "QQ号、微信号至少选填一个！";
                return false;
            }
            var qqReg = /^[1-9][0-9]{4,}$/;
            if($scope.info.registerQQ.length>0){
                if(!qqReg.test($scope.info.registerQQ)){
                    $scope.info.message = "请输入正确的QQ号！";
                    return false;
                }
            }
            var wxReg = /^[a-zA-Z0-9_]+$/;
            if($scope.info.registerWx.length>0){
                if(!wxReg.test($scope.info.registerWx)){
                    $scope.info.message = "请输入正确的微信号！";
                    return false;
                }
            }

            //$scope.info.success = true;
            $scope.info.registerButtonClicking = true;

            $scope.info.message = "注册中,大侠稍等";
            console.log(email);
            $http.get('data/register.add.php', {params: {email:email , hash: pwdHash, apiToken: apitoken,
                mobile:$scope.info.registerPhone,qq:$scope.info.registerQQ,wx:$scope.info.registerWx,website:$scope.info.registerURL}}).success(function(data) {
                $scope.info.registerButtonClicking = false;
                if (data.resultCode == 0) {
                    $scope.info.success = true;
                    $scope.info.message = "正在进入...";
                    $window.location.href = "/dashboard";
                } else if (data.resultCode == 1) {
                    $scope.info.message = "用户名已存在";
                } else {
                    $scope.info.message = "注册失败";
                }

            }).error(function(data) {
                $scope.info.registerButtonClicking = false;
                $scope.info.message = "通信故障";
            });

        };
        function isAllFilled(newValue,oldValue, scope) {
            if($scope.info.registerEmail && $scope.info.registerPwd && $scope.info.repeatPwd) {
                $scope.info.bcFilled = true;
            } else {
                $scope.info.bcFilled = false;
            }
        }
        $scope.$watch('repeatPwd',isAllFilled);
        $scope.$watch('registerEmail', isAllFilled);
        $scope.$watch('registerPwd', isAllFilled);
    }]);