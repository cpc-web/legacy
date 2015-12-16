/*!
 * Extra js Code
 */

function show(today)
{
	view=document.getElementById(today).style.display;
	if (view=='none')
		view='block';
	else
		view='none';

	document.getElementById(today).style.display = view;
}
