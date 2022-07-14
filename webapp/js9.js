
var id =['hong','park','kim','jang','lee'];
var pw=['ahong','bpark','kkim123','jang1234','lee0909'];


function yn(nm1,pw1){
	
	var msg;
	var i;
	for(i=0;i<id.length;i++){
		if (nm1 == id[i]) {
         if (pw1 == pw[i]) {
            msg = i;
		return check2(msg);
         }
         else {
            console.log("틀");
         }
   }
      else {
         console.log("틀");
      }   
         }
	}
	
	
