var i=1;
function WriteFiles()
{
if(i==2){
	alert("Trang đã có trong danh sách");
	return false;
}
var fso, ts, s;
var ForReading = 1;
fso = new ActiveXObject("Scripting.FileSystemObject");
{
ts = fso.OpenTextFile("F:\\Dreamweaver\\Project 2\\MyFile1.txt",8);
var noidung=document.getElementById("bookmarkID").innerHTML;
s = ts.write(noidung);
i++;
document.getElementById("sub").innerHTML=noidung;
alert("Đã thêm trang vào danh sách!");
ts.Close();
}
}


function ReadFiles()
{
	var s;
    var myFileSysObj = new ActiveXObject("Scripting.FileSystemObject");

    var myInputTextStream = myFileSysObj.OpenTextFile("F:\\Dreamweaver\\Project 2\\MyFile1.txt", 1, true);

    while(!myInputTextStream.AtEndOfStream){
	  s=myInputTextStream.ReadLine();
	  t=document.getElementById("sub");
	  t.innerHTML=s;
    }

    myInputTextStream.Close();
}




function cmt()
{
	var name=document.getElementById("name");
	var email=document.getElementById("email");
	var comment=document.getElementById("commentBox");
	
	if ( ((event.keyCode==13)&&(name.value=="")) || ((window.event.which==1)&&(name.value=="")) ) {	
			alert("Xin nhập họ tên");
			name.focus();
			return false;
		}
	
		
	if(/\S/.test(name.value)==true)
	{	
		if ( ((event.keyCode==13) || (window.event.which==1))&&(name.value!="") ) {	
			if ( ((event.keyCode==13)&&(email.value=="")) || ((window.event.which==1)&&(email.value=="")) ) {	
				alert("Xin nhập email");
				email.focus();
				return false;
			}
			
			var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
			if(re.test(email.value)==false){alert("Sai định đạng email");  email.focus(); return false;}
				else{
					if ( comment.value == "" ) 
					{	
						alert("Xin nhập bình luận");
						return false;
					} else
						{
							alert("Gửi bình luận thành công");
							return true;
						}
			
				}
		}
			
	} else name.value="";

}