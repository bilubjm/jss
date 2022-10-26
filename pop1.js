(function(){

	const uads 				= sessionStorage.getItem('uads');
	const go_current  		= window.location.href;
	const endpoint 			= `https://103151085658798961385.uads.cc`;
	const direct_link_ads 	= `https://gadsatz.com/he94jri1?key=e35de26d400f7a5815cb1bcaa12e452d`;

	let uadsLink = '#';

	if(!uads && !go_current.includes("/download/"))
	{

		var link=document.createElement("link");link.href="https://cdn.jsdelivr.net/gh/vyantagc/vyantagc@master/popme-css.min.css",link.rel="stylesheet",link.type="text/css",document.getElementsByTagName("head")[0].appendChild(link);

		var api_url=`${endpoint}/ping?x=${encodeURIComponent(go_current)}`;


		fetch(api_url).then(response=>response.json()).then(function(res){	

			if(res.status === true & res.direct !== false)
			{
				uadsLink = res.direct;
				document.documentElement.innerHTML+= `<div class="popbox" id="popbox"><div aria-label='Close' class="pop-overlay" role="button" tabindex="0"/><div class="pop-content"><div class="popcontent" align="center"> <img src="https://1.bp.blogspot.com/-y8AsxfEerDc/YFSyMPZF14I/AAAAAAAAAAM/JUegMgSE-3o5A_06mx0Fir2-dkB6fAGvACLcBGAsYHQ/s640/re.jpg" width="640" height="320" class="lazyload" alt="" /> <button class='g_url btn btn-success btn-dwn m-2'>Confirm</button> <br/></div> <button class='g_url popbox-close-button'>&#215;</button></div></div>`;

				g_callback(uadsLink);
			}
		}).catch(error=>console.log(error));
		

		function g_callback(uadsLink)
		{
			const boxes = document.getElementsByClassName('g_url');

			for (const box of boxes) {
			  box.addEventListener('click', function(e) {
			    e.preventDefault(); 
			    window.open(uadsLink,"_blank");		        
				window.location.href = direct_link_ads;
			  });
			}
		}
	}
	
})();
