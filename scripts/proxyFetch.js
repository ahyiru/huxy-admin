const {request}=require('https');

const url='http://ihuxy.com/api/users/find';

const token='token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZjA1NWU0NmMyZjNhOTA0M2Y0NjEyOGQiLCJpYXQiOjE2MTU3MzE2NDUsImV4cCI6MTYxNjk0MTI0NX0.VdOvNWRURDhXYPJKVrBvs5BpWNKUkh1yQPhWnIkLfSQ';

const options={
  url,
  method:'GET',
  json:true,
  // body:''
  headers:{
    Authorization: token,
  },
  // jar:j,
};

const callback=(error,response,body)=>{
  if(error){
    console.log('error:',error);
    return;
  }
  console.log('body:',body);
};

request(options,callback);

