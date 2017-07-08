function checkForm()
{
	var acc=document.getElementById("txt3");
	var pass=document.getElementById("txt4");
	var pass2=document.getElementById("txt4.5");
	var email=document.getElementById("txt5");
	var name=document.getElementById("txt1"); //lay noi dung go trong text 1
	var day=document.getElementById("ngay");
	var year=document.getElementById("nam");
	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
	//kiem tra loi
	if(acc.value=="" || acc.value.length>32 || acc.value.length<5 || chuaKT(acc.value)==true)
	{
		alert("Tên tài khoản phải dài 5-32 kí tự và không có khoảng trắng");
		acc.focus();
		return false;
	}
	else if(pass.value=="" || !isStrong(pass.value) || pass.value.length<6)
	{
		alert("Password phải dài trên 6 kí tự. Trong đó phải có 1 kí tự chữ hoa, 1 chữ thường và 1 chữ số");
		pass.focus();
		return false;
	}
	else if(pass2.value!=pass.value)
	{
		alert("Password phải trùng nhau");
		pass.focus();
		return false;
	}
	else if(re.test(email.value)==false){
		alert("Sai định đạng email"); 
		email.focus();
		return false;
	}
	else if(name.value==""){
		name.focus();
		alert("Xin nhập tên");
		return false;
	}
	else if(day.value=="" || (day.value<1) || (day.value>31) || year.value=="" || (year.value<100) )
	{
		day.focus();
		alert("Xin nhập ngày sinh đúng định dạng");
		return false;
	}
	else 
	{
		alert("Đăng kí thành công");
		return true;
	}
	
}
// ham de kiem tra s co khoang trang hay khong
// tra ve true khi chua kt
function chuaKT(s)
{
	if(s.indexOf(" ")>=0)
		return true;
	return false;
}
// ham nay de kiem tra xem pass cua chung ta co strong hay ko
// strong: chua chu thuong, hoa, so, ktu dac biet
function isStrong(s)
{
	if(s.search("[a-z]")>=0 && s.search("[A-Z]")>=0 && s.search("[0-9]")>=0 )
		return true;
	return false;
}

function tailai()
{
	location.reload();
}