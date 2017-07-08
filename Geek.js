function showResult()
{
	var check=document.getElementById("key")
	
	if ( ((event.keyCode==13)&&(check.value=="")) || ((window.event.which==1)&&(check.value=="")) ) {	
			alert("Xin nhập từ khóa");
			check.focus();
		}
	if(/\S/.test(check.value)==true)
	{
		
	if ( ((event.keyCode==13) || (window.event.which==1))&&(check.value!="") ) {	
		window.open().location="https://www.google.com/#q="+check.value+"+site:gamek.vn";
	}
	}
	else check.value="";
}

function login()
{
	var user=document.getElementById("user");
	var pass=document.getElementById("pass");
	
	if ( ((event.keyCode==13)&&(user.value=="")) || ((window.event.which==1)&&(user.value=="")) ) {	
			alert("Xin nhập tên đăng nhập");
			user.focus();
			return false;
		}
	
		
	if(/\S/.test(user.value)==true)
	{	
		if ( ((event.keyCode==13) || (window.event.which==1))&&(user.value!="") ) {	
			if ( ((event.keyCode==13)&&(pass.value.length<10)) || ((window.event.which==1)&&(pass.value.length<10)) ) {	
			alert("Xin nhập password dài hơn 10 kí tự");
			pass.focus();
			return false;
			}	
			
			if(/\S/.test(pass.value)==true)
			{	
				if ( ((event.keyCode==13) || (window.event.which==1))&&(pass.value.length>=10) ) {	
					alert("Đăng nhập thành công");
					return true;
				}
			}
		}
	}
	else user.value="";

}


var list= ["banner13.png","banner16.png","banner12.png","banner10.jpg"];
i=0;
var time_id;
function picSwap()
{
	
	var the=document.getElementById("pic");
	the.src="Hinh/"+list[i];
	i++;
	i=i%4;
	time_id=setTimeout("picSwap()",1300);

}
function picStop(flag)
{
	if(flag==true)
	{
		time_id=setTimeout("picSwap()",1300);
	}
	else
	{
		clearTimeout(time_id);
	}
}


var m=1;
var n=3;

function expand(begin,end){
	m=m+3;
	n=n+3;
	
	if (m>begin || n>end){
		m=m-3;
		n=n-3;
	}
	
	for(i=m;i<=n;i++){
	document.getElementById("page"+i).style.visibility="visible";
	}
}


function hide(begin,end){
	
	if (m>=begin || n>=end){
	for(i=m;i<=n;i++){
	document.getElementById("page"+i).style.visibility="hidden";	
	}
	}
	m=m-3;
	n=n-3;	
	if (m<1 || n<3){
		m=1;
		n=3;	
	}
}