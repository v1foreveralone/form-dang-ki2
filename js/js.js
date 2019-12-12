
function kiemtra(){
	// check name
	var name1 = /^.{3,20}$/;
	var name= document.getElementById('name').value;
	var checkname= name.search(name1);
	if(name==""){
		document.getElementById('1').innerText='Không hợp lệ: tên không được để trống';
	}else if(checkname==-1){
		document.getElementById('1').innerText='Không hơp lệ: tên lớn hơn 2 nhỏ hơn 20 ký tự';
	}
	else{
		document.getElementById('11').innerText='Hợp lệ';
	} 
	// check user name
	var username1 = /^\w{1,60}$/;
	var username = document.getElementById('username').value;
	var checkusername= username.search(username1);
	if (username==""){
		document.getElementById('2').innerText='Không hợp lệ : tên đăng nhập không được để trống';		
	}else if (checkusername==-1) {
		document.getElementById('2').innerText='Không hợp lệ : tên đăng nhâp không được có dấu space và ký tự đặc biệt';	
	}else{
		document.getElementById('22').innerText='Hợp lệ';
	}
	//check so dien thoai
}