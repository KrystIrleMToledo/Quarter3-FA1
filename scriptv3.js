var ok = confirm("Do you agree to share your personal information with this site?");

if (ok)
{
	var nn = "Ah-ki";
	var h = 59;
	var w = 47;

	var feet = Math.floor(h/12);
	var inch = h%12;
	var lbs = w*2.205;

	console.log("Name: " + nn + "\nHeight: " + feet + "'" + inch + "\nWeight: " + lbs + " lbs");
}

else 
{
	console.log("“User does not wish to share his/her information.”");
}