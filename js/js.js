
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
	var phone1= /^(09(6|7|8))|(03[2-9])|(086)\d{7}$/;
	var phone = document.getElementById('phone').value;
	var checkphone= phone.search(phone1);
	if (phone==""){
		document.getElementById('3').innerText='Không hợp lệ : số điện thoại không được để trống';		
	}else if (checkphone==-1) {
		document.getElementById('3').innerText='Không hợp lệ : số điện thoại không hợp lệ';	
	}else{
		document.getElementById('33').innerText='Hợp lệ';
	}
	// check email
	var email1= /^$/;
	var email = document.getElementById('email').value;
	var checkemail= email.search(email1);
	if (email==""){
		document.getElementById('4').innerText='Không hợp lệ : email không được để trống';		
	}else if (checkemail==-1) {
		document.getElementById('4').innerText='Không hợp lệ : email không hợp cú pháp';	
	}else{
		document.getElementById('44').innerText='Hợp lệ';
	}
	//check gioi tính
	//check khoa hoc dang ki
	//check khoa hoc da tham gia
	//check ghi chu
	//check ma xac nhan
}