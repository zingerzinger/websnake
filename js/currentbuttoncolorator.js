elements = document.getElementsByTagName('a');
len = elements.length;
found = false;

for (i = 0; i < len; i++)
{
	if (elements[i].href == document.URL)
	{
		elements[i].style.background = "orange";
		found = true;
	}
}

if (!found) { document.getElementById('homenavbutton').style.background = "orange"; }