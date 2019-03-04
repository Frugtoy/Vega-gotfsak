jQuery('document').ready(function()
{
	jQuery('.add').on('click',function()
	{	
		jQuery('content-inner').append('height:100px');
		jQuery('table').append('<tr> <td></td> <td></td>  <td></td>  <td></td>  <td></td>  <td class ="check"><input type="checkbox" name="k"></td> </tr>');
								
	});

		jQuery('.change').on('click',function()
	{
		alert("не умею, друг ");
	});
		jQuery('.reference').on('click',function()
	{
		alert("базы данных нет , хватит кликать кнопки ,\n так и ракету можно запустить");
	});
		jQuery('.save').on('click',function()
	{
		alert("ошибенция");
	});
	
});

