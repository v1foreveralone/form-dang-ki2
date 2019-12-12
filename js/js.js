
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
		document.getElementById('22').innerText='Hợp lệ';
	} 

}