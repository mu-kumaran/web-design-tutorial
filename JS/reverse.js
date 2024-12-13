function reverselogic(name)
{
	let rname="";
	for(let i=name.length-1;i>=0;i--)
	{
		rname += name[i];
	}
	return rname;
}